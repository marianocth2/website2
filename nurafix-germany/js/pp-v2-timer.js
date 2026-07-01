document.addEventListener("DOMContentLoaded", function () {
    const COOKIE_KEY = "time_left";
    const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24h (must be the same as in pp-v3-sticky-footer.js)

    const list = document.querySelector(".observer");
    const stickyFooter = document.querySelector(".sticky-footer");
    const ctaButton = document.querySelector(".sticky-footer__cta");
    const helpdesk = document.querySelector("#helpdesk");
    const desktopLayout = document.querySelector(".desktop-layout");
    const mobileLayout = document.querySelector(".mobile-layout");
    const timerElementDesktop = document.querySelector(".desktop-layout .sticky-footer__counter--timer");
    const timerElementMobile = document.querySelector(".mobile-layout .sticky-footer__counter--timer");

    const inlineTimerWrapper = document.querySelector('.timer');
    const inlineTimers = document.querySelectorAll('p[timer-attribute="timer"][data-time]');

    let zendesk;
    let timerElement = null;
    let endAt, cooldownExpires, intervalId = null;
    let timeRemaining = 0;

    setTimeout(() => {
        zendesk = document.querySelector("iframe#launcher");
    }, 600);

    const stickyBarCallback = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) {
            if (stickyFooter) {
                const h = stickyFooter.scrollHeight || 60;
                stickyFooter.style.height = `${h + 10}px`;
            }
            const bottomOffset = (stickyFooter ? stickyFooter.scrollHeight : 0) + 10;
            if (helpdesk) helpdesk.style.bottom = `${bottomOffset}px`;
            zendesk = document.querySelector("iframe#launcher");
            if (zendesk) zendesk.style.bottom = `${bottomOffset}px`;
        } else {
            if (stickyFooter) stickyFooter.style.height = "auto";
        }
    };

    if (list) {
        const observer = new IntersectionObserver(stickyBarCallback, {
            root: null,
            threshold: 0,
        });
        observer.observe(list);
    }

    function readCookie(key) {
        const match = document.cookie.split("; ").find(row => row.startsWith(key + "="));
        if (!match) return null;
        try { return JSON.parse(decodeURIComponent(match.split("=")[1])); }
        catch { return null; }
    }

    function writeCookie(key, payload) {
        const expires = new Date(payload.cooldownExpires).toUTCString();
        document.cookie = `${key}=${encodeURIComponent(JSON.stringify(payload))}; expires=${expires}; path=/; SameSite=Lax`;
    }

    function formatTime(seconds) {
        if (seconds < 0) seconds = 0;
        const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secondsStr = (seconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${secondsStr}`;
    }

    function formatTimeMinSec(seconds) {
        if (seconds < 0) seconds = 0;
        const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const secondsStr = (seconds % 60).toString().padStart(2, '0');
        return `00:${minutes}:${secondsStr}`;
    }

    function pushPopupLoad() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "popup_load",
            popupType: "black_friday_cyber_monday",
        });
    }

    function handleCtaClick() {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: "popupcta_click",
            popupType: "black_friday_cyber_monday",
            ctaLink: ctaButton ? ctaButton.href : '',
            currentPage: window.location.href,
        });
    }

    function initializeTimer() {
        let now = Date.now();
        let cookie = readCookie(COOKIE_KEY);

        if (cookie && cookie.endAt && cookie.cooldownExpires > now) {
            endAt = cookie.endAt;
            cooldownExpires = cookie.cooldownExpires;
            timeRemaining = Math.max(0, Math.floor((endAt - now) / 1000));
        } else {
            let durationSeconds = 0;
            if (inlineTimers.length > 0) {
                const min = parseInt(inlineTimers[0].getAttribute('data-time'), 10) || 0;
                durationSeconds = min * 60;
            } else if (timerElementDesktop) {
                durationSeconds = parseInt(timerElementDesktop.getAttribute("data-time"), 10) || 0;
            }

            endAt = now + durationSeconds * 1000;
            cooldownExpires = now + COOLDOWN_MS;
            timeRemaining = durationSeconds;
            writeCookie(COOKIE_KEY, { endAt, cooldownExpires });
        }
    }

    function updateDOM() {
        if (timerElement) {
            timerElement.textContent = formatTime(timeRemaining);
        }
        if (inlineTimers.length) {
            inlineTimers.forEach(el => {
                el.innerText = formatTimeMinSec(timeRemaining);
            });
        }
    }

    function updateTimer() {
        if (timeRemaining <= 0) {
            timeRemaining = 0;
            if (timerElement) timerElement.textContent = "00:00:00";
            if (inlineTimers.length) {
                inlineTimers.forEach(el => el.innerText = "00:00:00");
            }
            if (inlineTimerWrapper && inlineTimerWrapper.parentNode) {
                inlineTimerWrapper.parentNode.removeChild(inlineTimerWrapper);
            }
            clearInterval(intervalId);
            return;
        }

        updateDOM();
        timeRemaining--;
    }

    function toggleLayout() {
        if (window.innerWidth < 981) {
            if (desktopLayout) desktopLayout.style.display = "none";
            if (mobileLayout) mobileLayout.style.display = "flex";
            timerElement = timerElementMobile;
        } else {
            if (desktopLayout) desktopLayout.style.display = "flex";
            if (mobileLayout) mobileLayout.style.display = "none";
            timerElement = timerElementDesktop;
        }
        if (timerElement) {
            timerElement.textContent = formatTime(timeRemaining);
        }
    }

    initializeTimer();
    pushPopupLoad();
    toggleLayout();

    window.addEventListener("resize", toggleLayout);

    if (ctaButton) {
        ctaButton.addEventListener("click", handleCtaClick);
    }

    if (timeRemaining > 0) {
        updateDOM();
        intervalId = setInterval(updateTimer, 1000);
    } else {
        if (timerElement) timerElement.textContent = "00:00:00";
        if (inlineTimerWrapper && inlineTimerWrapper.parentNode) {
            inlineTimerWrapper.parentNode.removeChild(inlineTimerWrapper);
        }
    }
});
