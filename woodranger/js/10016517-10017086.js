(function() {
if (typeof window.convert !== "undefined") return;
window.convert = window.convert || {};
const convertData = Object.assign({"device":{"mobile":false,"tablet":false,"desktop":true},"geo":{"country":"NL","city":"HAARLEM","continent":"EU","state":""}}, {
logLevel: 4,
useMutationObserver: true,
usePolling: false,
useSPAOptimizations: true,
visitorId: '',
variables: null,
version: '1.4.3',
generatedAt: '2026-07-02T03:14:59.324Z'
});
const convertConfig = {"account_id":"10016517","project":{"id":"10017086","name":"Project #10017086","type":"web","utc_offset":"0","domains":[{"tld":"woodrangertools.com","hosts":["woodrangertools.com","woodrangertools.com","offer.woodrangertools.com"]}],"global_javascript":null,"settings":{"include_jquery":true,"include_jquery_v1":false,"disable_spa_functionality":false,"do_not_track_referral":false,"allow_crossdomain_tracking":false,"data_anonymization":true,"do_not_track":"OFF","global_privacy_control":"OFF","min_order_value":0,"max_order_value":99999,"version":"2026-06-30T21:53:47+00:00-274","tracking_script":{"current_version":"1.4.3","latest_version":"1.4.3"},"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}},"placeholders":[],"global_javascript_placeholders":[],"integrations":{"google_analytics":{"enabled":false},"kissmetrics":{"enabled":false},"visitor_insights":{"tracking_id":"8f389d44-5601-11f1-96f6-960004340fd3"}}},"custom_domain":null},"experiences":[{"id":"100139040","name":"AffID117 (Cole): Mini Chainsaw Preselect 2 Unit","type":"a\/b","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"ffd117-cl:-mn-chnsw-prslct-2","version":11,"locations":["100110956"],"site_area":null,"audiences":[],"goals":["100139251","100138911","100138912"],"integrations":[],"variations":[{"id":"1001214812","name":"Original Page","key":"1001214812-original-page","status":"stopped","changes":[],"traffic_allocation":0},{"id":"1001214813","name":"Variation 1","key":"1001214813-variation-1","status":"running","changes":[{"id":1001104804,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001104803,"type":"customCode","data":{"css":".selector-group[data-quantity=\"2\"] {\n  outline: 2px solid #B73339;\n  border-radius: 6px;\n}","js":function(convertContext){ 
(function () {
  // --- 1. Preselect Pro Kit (quantity-2) ---
  function selectProKit() {
    var radio = document.getElementById('quantity-2');
    if (!radio) return false;

    var label = document.querySelector('label[for="quantity-2"]');
    var wrapper = document.querySelector('.selector-group[data-quantity="2"]');

    if (label) {
      label.click();
    } else {
      radio.checked = true;
      radio.dispatchEvent(new Event('change', { bubbles: true }));
    }

    if (wrapper) {
      var clickEvt = new MouseEvent('click', { bubbles: true, cancelable: true, view: window });
      wrapper.dispatchEvent(clickEvt);
    }

    return document.getElementById('quantity-2').checked;
  }

  function isProKitSelected() {
    var r = document.getElementById('quantity-2');
    return r && r.checked;
  }

  var startTime = Date.now();
  var selectIv = setInterval(function () {
    if (!isProKitSelected()) selectProKit();
    if (Date.now() - startTime > 5000) clearInterval(selectIv);
  }, 150);

  window.addEventListener('load', function () {
    setTimeout(selectProKit, 100);
    setTimeout(selectProKit, 500);
    setTimeout(selectProKit, 1500);
  });

  // --- 2. Replace promo banner copy ---
  function updatePromoBanner() {
    var banner = document.querySelector('promo-banner');
    if (!banner) return false;

    var roots = [banner];
    if (banner.shadowRoot) roots.push(banner.shadowRoot);

    var changed = false;

    roots.forEach(function (root) {
      var fullText = root.textContent || '';
      if (!/50%\s*OFF\s*NOW/i.test(fullText)) return;

      var candidates = root.querySelectorAll('*');
      candidates.forEach(function (el) {
        var t = el.textContent || '';
        if (/GET\s*50%\s*OFF\s*NOW/i.test(t) && /BUZZ26/i.test(t) && /MIDNIGHT/i.test(t)) {
          var childMatch = Array.from(el.children).some(function (c) {
            var ct = c.textContent || '';
            return /GET\s*50%\s*OFF\s*NOW/i.test(ct) && /MIDNIGHT/i.test(ct);
          });
          if (!childMatch) {
            el.innerHTML = 'SAVE UP TO 64% OFF! USE PROMO CODE: <span style="background:#000;color:#fff;padding:4px 14px;border-radius:6px;font-weight:700;margin:0 8px;display:inline-block;">BUZZ26</span> - ENDS AT MIDNIGHT';
            changed = true;
          }
        }
      });
    });

    return changed;
  }

  var bannerTries = 0;
  var bannerIv = setInterval(function () {
    bannerTries++;
    if (updatePromoBanner() || bannerTries > 100) clearInterval(bannerIv);
  }, 100);

  setInterval(updatePromoBanner, 1000);
})();
}}}],"traffic_allocation":100}]},{"id":"100139731","name":"006: PowerShears - Checkout Stock Scarcity","type":"a\/b","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"003:-lw-pdp-nw-lyt-cln-cln-c-2","version":11,"locations":["100111415"],"site_area":null,"audiences":[],"goals":["100139251","100138911","100138912","100152216"],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001216456","name":"Original Page","key":"1001216456-original-page","status":"running","changes":[],"traffic_allocation":33.3333},{"id":"1001216457","name":"Variation 1 - Low Stock","key":"1001216457-variation-1-low-stock","status":"running","changes":[{"id":1001106783,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001106784,"type":"customCode","data":{"css":"html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 11px !important;\n  margin-top: 10px !important;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: 7px;\n  color: #e64013;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot {\n  position: relative;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e85b16;\n  flex: 0 0 8px;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot::before {\n  content: \"\";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: rgba(232, 91, 22, 0.3);\n  animation: cvPackageScarcityPulseV1 1.8s ease-out infinite;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-count {\n  display: inline;\n  font-weight: 700;\n}\n\n@keyframes cvPackageScarcityPulseV1 {\n  0% {\n    opacity: 0.8;\n    transform: scale(0.6);\n  }\n  70% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n\n@media (max-width: 767px) {\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n    justify-content: space-between !important;\n    gap: 8px !important;\n  }\n\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n    font-size: 14px;\n    gap: 6px;\n    margin-left: auto;\n    text-align: right;\n    justify-content: flex-end;\n  }\n}","js":function(convertContext){ 
(function () {
  var EXP_CLASS = "cv-package-heading-scarcity-v1";
  var INIT_FLAG = "__cvPackageHeadingScarcityV1Initialized";
  var STORAGE_PREFIX = "cvPackageHeadingScarcityV1:";
  var MIN_STOCK = 5;
  var MAX_STOCK = 14;
  var REFRESH_MS = 48 * 60 * 60 * 1000;
  var RESET_MS = 7 * 24 * 60 * 60 * 1000;

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getPageKey() {
    return (location.hostname + location.pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  }

  function hashString(value) {
    var hash = 0;
    var i;
    for (i = 0; i < value.length; i += 1) {
      hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  function initialStock() {
    return 6 + (hashString(getPageKey()) % (MAX_STOCK - 6 + 1));
  }

  function readStoredStock() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + getPageKey()) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeStoredStock(data) {
    try {
      localStorage.setItem(STORAGE_PREFIX + getPageKey(), JSON.stringify(data));
    } catch (error) {}
  }

  function getStock() {
    var now = Date.now();
    var stored = readStoredStock();
    var original = initialStock();

    if (!stored || typeof stored.value !== "number" || typeof stored.createdAt !== "number") {
      stored = {
        value: original,
        original: original,
        createdAt: now,
        updatedAt: now
      };
      writeStoredStock(stored);
      return stored.value;
    }

    if (now - stored.createdAt >= RESET_MS) {
      stored.value = typeof stored.original === "number" ? stored.original : original;
      stored.original = stored.value;
      stored.createdAt = now;
      stored.updatedAt = now;
      writeStoredStock(stored);
      return stored.value;
    }

    if (typeof stored.updatedAt !== "number") {
      stored.updatedAt = stored.createdAt;
    }

    var intervals = Math.floor((now - stored.updatedAt) / REFRESH_MS);
    if (intervals > 0) {
      stored.value = Math.max(MIN_STOCK, stored.value - intervals);
      stored.updatedAt += intervals * REFRESH_MS;
      writeStoredStock(stored);
    }

    return Math.max(MIN_STOCK, Math.min(MAX_STOCK, stored.value));
  }

  function findPackageHeading() {
    var selectors = [
      ".choose-your-package-text",
      "#Choose-your-package",
      ".Choose-your-package",
      ".checkout-step__text",
      ".form-section__title",
      ".section-title",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5"
    ];
    var candidates = document.querySelectorAll(selectors.join(","));
    var i;

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent) === "choose your package") {
        return candidates[i];
      }
    }

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent).indexOf("choose your package") !== -1) {
        return candidates[i];
      }
    }

    return null;
  }

  function createScarcity(stock) {
    var wrapper = document.createElement("span");
    wrapper.className = "cv-package-scarcity";
    wrapper.setAttribute("aria-label", "Low Stock: " + stock + " left");
    wrapper.innerHTML = '<span class="cv-package-scarcity-dot" aria-hidden="true"></span><span class="cv-package-scarcity-text">Low Stock: <span class="cv-package-scarcity-count">' + stock + '</span> left</span>';
    return wrapper;
  }

  function applyVariant() {
    var heading = findPackageHeading();
    var stock;

    if (!heading) return false;
    if (heading.querySelector(".cv-package-scarcity")) return true;

    stock = getStock();

    document.documentElement.classList.add(EXP_CLASS);
    heading.classList.add("cv-package-scarcity-heading");
    heading.appendChild(createScarcity(stock));

    return true;
  }

  if (applyVariant()) return;

  var observer = new MutationObserver(function () {
    if (applyVariant()) observer.disconnect();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("load", applyVariant, { once: true });
})();
}}}],"traffic_allocation":33.3333},{"id":"1001216458","name":"Variation 2 - Low Stock + Number Drop","key":"1001216458-vrtn-2-lw-stck-nmbr-d","status":"running","changes":[{"id":1001106785,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001106786,"type":"customCode","data":{"css":"html.cv-package-heading-scarcity-v2 .cv-package-scarcity-heading {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 11px !important;\n  margin-top: 10px !important;\n}\n\nhtml.cv-package-heading-scarcity-v2 .cv-package-scarcity {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: 7px;\n  color: #e64013;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n\nhtml.cv-package-heading-scarcity-v2 .cv-package-scarcity-dot {\n  position: relative;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e85b16;\n  flex: 0 0 8px;\n}\n\nhtml.cv-package-heading-scarcity-v2 .cv-package-scarcity-dot::before {\n  content: \"\";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: rgba(232, 91, 22, 0.3);\n  animation: cvPackageScarcityPulseV2 1.8s ease-out infinite;\n}\n\nhtml.cv-package-heading-scarcity-v2 .cv-package-scarcity-count {\n  display: inline-block;\n  font-weight: 700;\n  transform-origin: center;\n}\n\nhtml.cv-package-heading-scarcity-v2 .cv-package-scarcity-count.cv-package-scarcity-count-flash {\n  animation: cvPackageScarcityFlashV2 650ms ease-out;\n}\n\n@keyframes cvPackageScarcityPulseV2 {\n  0% {\n    opacity: 0.8;\n    transform: scale(0.6);\n  }\n  70% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n\n@keyframes cvPackageScarcityFlashV2 {\n  0% {\n    color: #e64013;\n    transform: scale(1);\n  }\n\n  35% {\n    color: #ff7a1a;\n    transform: scale(1.18);\n  }\n\n  100% {\n    color: #e64013;\n    transform: scale(1);\n  }\n}\n\n@media (max-width: 767px) {\n  html.cv-package-heading-scarcity-v2 .cv-package-scarcity-heading {\n    justify-content: space-between !important;\n    gap: 8px !important;\n  }\n\n  html.cv-package-heading-scarcity-v2 .cv-package-scarcity {\n    font-size: 14px;\n    gap: 6px;\n    margin-left: auto;\n    text-align: right;\n    justify-content: flex-end;\n  }\n}","js":function(convertContext){ 
(function () {
  var EXP_CLASS = "cv-package-heading-scarcity-v2";
  var INIT_FLAG = "__cvPackageHeadingScarcityV2Initialized";
  var STORAGE_PREFIX = "cvPackageHeadingScarcityV2:";
  var MIN_STOCK = 5;
  var MAX_STOCK = 14;
  var REFRESH_MS = 48 * 60 * 60 * 1000;
  var RESET_MS = 7 * 24 * 60 * 60 * 1000;
  var VISIBILITY_HOLD_MS = 850;
  var LIVE_DROP_DELAY_MS = 2000;
  var droppedThisPage = false;
  var liveDropQueued = false;

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getPageKey() {
    return (location.hostname + location.pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  }

  function hashString(value) {
    var hash = 0;
    var i;
    for (i = 0; i < value.length; i += 1) {
      hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  function initialStock() {
    return 6 + (hashString(getPageKey()) % (MAX_STOCK - 6 + 1));
  }

  function readStoredStock() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + getPageKey()) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeStoredStock(data) {
    try {
      localStorage.setItem(STORAGE_PREFIX + getPageKey(), JSON.stringify(data));
    } catch (error) {}
  }

  function normalizeStoredStock(stored, original, now) {
    if (!stored || typeof stored.value !== "number" || typeof stored.createdAt !== "number") {
      stored = {
        value: original,
        original: original,
        createdAt: now,
        updatedAt: now,
        liveDropped: false
      };
      writeStoredStock(stored);
      return stored;
    }

    if (now - stored.createdAt >= RESET_MS) {
      stored.value = typeof stored.original === "number" ? stored.original : original;
      stored.original = stored.value;
      stored.createdAt = now;
      stored.updatedAt = now;
      stored.liveDropped = false;
      writeStoredStock(stored);
      return stored;
    }

    if (typeof stored.updatedAt !== "number") {
      stored.updatedAt = stored.createdAt;
    }

    if (typeof stored.liveDropped !== "boolean") {
      stored.liveDropped = false;
    }

    return stored;
  }

  function getStockRecord() {
    var now = Date.now();
    var stored = readStoredStock();
    var original = initialStock();
    var intervals;

    stored = normalizeStoredStock(stored, original, now);

    intervals = Math.floor((now - stored.updatedAt) / REFRESH_MS);
    if (intervals > 0) {
      stored.value = Math.max(MIN_STOCK, stored.value - intervals);
      stored.updatedAt += intervals * REFRESH_MS;
      writeStoredStock(stored);
    }

    stored.value = Math.max(MIN_STOCK, Math.min(MAX_STOCK, stored.value));
    return stored;
  }

  function persistLiveDrop(nextValue) {
    var stored = getStockRecord();
    stored.value = Math.max(MIN_STOCK, Math.min(MAX_STOCK, nextValue));
    stored.liveDropped = true;
    stored.updatedAt = Date.now();
    writeStoredStock(stored);
  }

  function findPackageHeading() {
    var selectors = [
      ".choose-your-package-text",
      "#Choose-your-package",
      ".Choose-your-package",
      ".checkout-step__text",
      ".form-section__title",
      ".section-title",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5"
    ];
    var candidates = document.querySelectorAll(selectors.join(","));
    var i;

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent) === "choose your package") {
        return candidates[i];
      }
    }

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent).indexOf("choose your package") !== -1) {
        return candidates[i];
      }
    }

    return null;
  }

  function createScarcity(stock) {
    var wrapper = document.createElement("span");
    wrapper.className = "cv-package-scarcity";
    wrapper.setAttribute("aria-label", "Low Stock: " + stock + " left");
    wrapper.innerHTML = '<span class="cv-package-scarcity-dot" aria-hidden="true"></span><span class="cv-package-scarcity-text">Low Stock: <span class="cv-package-scarcity-count">' + stock + '</span> left</span>';
    return wrapper;
  }

  function isVisibleInViewport(element) {
    var rect;
    if (!element || !document.documentElement.contains(element)) return false;
    rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.right > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.left < (window.innerWidth || document.documentElement.clientWidth);
  }

  function queueLiveDrop(message) {
    if (droppedThisPage || liveDropQueued || !message) return;

    var count = message.querySelector(".cv-package-scarcity-count");
    if (!count) return;

    var startingValue = parseInt(count.textContent, 10);
    if (!startingValue || startingValue <= MIN_STOCK) return;
    if (getStockRecord().liveDropped) return;

    liveDropQueued = true;

    setTimeout(function () {
      setTimeout(function () {
        var nextValue;
        if (droppedThisPage || !isVisibleInViewport(message)) return;
        nextValue = Math.max(MIN_STOCK, startingValue - 1);
        count.classList.remove("cv-package-scarcity-count-flash");
        void count.offsetWidth;
        count.classList.add("cv-package-scarcity-count-flash");
        count.textContent = String(nextValue);
        message.setAttribute("aria-label", "Low Stock: " + count.textContent + " left");
        persistLiveDrop(nextValue);
        setTimeout(function () {
          count.classList.remove("cv-package-scarcity-count-flash");
        }, 680);
        droppedThisPage = true;
      }, LIVE_DROP_DELAY_MS);
    }, VISIBILITY_HOLD_MS);
  }

  function watchVisibility(message) {
    if (!("IntersectionObserver" in window)) {
      queueLiveDrop(message);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
          observer.disconnect();
          queueLiveDrop(message);
        }
      });
    }, {
      threshold: [0, 0.35, 0.6]
    });

    observer.observe(message);
  }

  function applyVariant() {
    var heading = findPackageHeading();
    var stockRecord;
    var message;

    if (!heading) return false;
    if (heading.querySelector(".cv-package-scarcity")) return true;

    stockRecord = getStockRecord();

    document.documentElement.classList.add(EXP_CLASS);
    heading.classList.add("cv-package-scarcity-heading");
    message = createScarcity(stockRecord.value);
    heading.appendChild(message);
    if (!stockRecord.liveDropped) {
      watchVisibility(message);
    }

    return true;
  }

  if (applyVariant()) return;

  var observer = new MutationObserver(function () {
    if (applyVariant()) observer.disconnect();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("load", applyVariant, { once: true });
})();
}}}],"traffic_allocation":33.3334}]},{"id":"100140581","name":"Deploy 004: L&W - Checkout Stock Scarcity","type":"deploy","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"003:-lw-pdp-nw-lyt-cln-cln-c-3","version":11,"locations":["100111413"],"site_area":null,"audiences":[],"goals":[],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001218408","name":"Deployment","key":"1001218408-deployment","status":"running","changes":[{"id":1001109363,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001109364,"type":"customCode","data":{"css":"html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 11px !important;\n  margin-top: 10px !important;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: 7px;\n  color: #e64013;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot {\n  position: relative;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e85b16;\n  flex: 0 0 8px;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot::before {\n  content: \"\";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: rgba(232, 91, 22, 0.3);\n  animation: cvPackageScarcityPulseV1 1.8s ease-out infinite;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-count {\n  display: inline;\n  font-weight: 700;\n}\n\n@keyframes cvPackageScarcityPulseV1 {\n  0% {\n    opacity: 0.8;\n    transform: scale(0.6);\n  }\n  70% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n\n@media (max-width: 767px) {\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n    justify-content: space-between !important;\n    gap: 8px !important;\n  }\n\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n    font-size: 14px;\n    gap: 6px;\n    margin-left: auto;\n    text-align: right;\n    justify-content: flex-end;\n  }\n}","js":function(convertContext){ 
(function () {
  var EXP_CLASS = "cv-package-heading-scarcity-v1";
  var INIT_FLAG = "__cvPackageHeadingScarcityV1Initialized";
  var STORAGE_PREFIX = "cvPackageHeadingScarcityV1:";
  var MIN_STOCK = 5;
  var MAX_STOCK = 14;
  var REFRESH_MS = 48 * 60 * 60 * 1000;
  var RESET_MS = 7 * 24 * 60 * 60 * 1000;

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getPageKey() {
    return (location.hostname + location.pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  }

  function hashString(value) {
    var hash = 0;
    var i;
    for (i = 0; i < value.length; i += 1) {
      hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  function initialStock() {
    return 6 + (hashString(getPageKey()) % (MAX_STOCK - 6 + 1));
  }

  function readStoredStock() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + getPageKey()) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeStoredStock(data) {
    try {
      localStorage.setItem(STORAGE_PREFIX + getPageKey(), JSON.stringify(data));
    } catch (error) {}
  }

  function getStock() {
    var now = Date.now();
    var stored = readStoredStock();
    var original = initialStock();

    if (!stored || typeof stored.value !== "number" || typeof stored.createdAt !== "number") {
      stored = {
        value: original,
        original: original,
        createdAt: now,
        updatedAt: now
      };
      writeStoredStock(stored);
      return stored.value;
    }

    if (now - stored.createdAt >= RESET_MS) {
      stored.value = typeof stored.original === "number" ? stored.original : original;
      stored.original = stored.value;
      stored.createdAt = now;
      stored.updatedAt = now;
      writeStoredStock(stored);
      return stored.value;
    }

    if (typeof stored.updatedAt !== "number") {
      stored.updatedAt = stored.createdAt;
    }

    var intervals = Math.floor((now - stored.updatedAt) / REFRESH_MS);
    if (intervals > 0) {
      stored.value = Math.max(MIN_STOCK, stored.value - intervals);
      stored.updatedAt += intervals * REFRESH_MS;
      writeStoredStock(stored);
    }

    return Math.max(MIN_STOCK, Math.min(MAX_STOCK, stored.value));
  }

  function findPackageHeading() {
    var selectors = [
      ".choose-your-package-text",
      "#Choose-your-package",
      ".Choose-your-package",
      ".checkout-step__text",
      ".form-section__title",
      ".section-title",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5"
    ];
    var candidates = document.querySelectorAll(selectors.join(","));
    var i;

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent) === "choose your package") {
        return candidates[i];
      }
    }

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent).indexOf("choose your package") !== -1) {
        return candidates[i];
      }
    }

    return null;
  }

  function createScarcity(stock) {
    var wrapper = document.createElement("span");
    wrapper.className = "cv-package-scarcity";
    wrapper.setAttribute("aria-label", "Low Stock: " + stock + " left");
    wrapper.innerHTML = '<span class="cv-package-scarcity-dot" aria-hidden="true"></span><span class="cv-package-scarcity-text">Low Stock: <span class="cv-package-scarcity-count">' + stock + '</span> left</span>';
    return wrapper;
  }

  function applyVariant() {
    var heading = findPackageHeading();
    var stock;

    if (!heading) return false;
    if (heading.querySelector(".cv-package-scarcity")) return true;

    stock = getStock();

    document.documentElement.classList.add(EXP_CLASS);
    heading.classList.add("cv-package-scarcity-heading");
    heading.appendChild(createScarcity(stock));

    return true;
  }

  if (applyVariant()) return;

  var observer = new MutationObserver(function () {
    if (applyVariant()) observer.disconnect();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("load", applyVariant, { once: true });
})();
}}}],"traffic_allocation":100}]},{"id":"100140582","name":"Deploy 005: Chainsaw - Checkout Stock Scarcity","type":"deploy","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"003:-lw-pdp-nw-lyt-cln-cln-c-4","version":11,"locations":["100111414"],"site_area":null,"audiences":[],"goals":[],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001218409","name":"Deployment","key":"1001218409-deployment","status":"running","changes":[{"id":1001109365,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001109366,"type":"customCode","data":{"css":"html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: flex-start !important;\n  gap: 11px !important;\n  margin-top: 10px !important;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n  display: inline-flex;\n  align-items: center;\n  flex: 0 0 auto;\n  gap: 7px;\n  color: #e64013;\n  font-family: inherit;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot {\n  position: relative;\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #e85b16;\n  flex: 0 0 8px;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-dot::before {\n  content: \"\";\n  position: absolute;\n  inset: -3px;\n  border-radius: 50%;\n  background: rgba(232, 91, 22, 0.3);\n  animation: cvPackageScarcityPulseV1 1.8s ease-out infinite;\n}\n\nhtml.cv-package-heading-scarcity-v1 .cv-package-scarcity-count {\n  display: inline;\n  font-weight: 700;\n}\n\n@keyframes cvPackageScarcityPulseV1 {\n  0% {\n    opacity: 0.8;\n    transform: scale(0.6);\n  }\n  70% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.5);\n  }\n}\n\n@media (max-width: 767px) {\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity-heading {\n    justify-content: space-between !important;\n    gap: 8px !important;\n  }\n\n  html.cv-package-heading-scarcity-v1 .cv-package-scarcity {\n    font-size: 14px;\n    gap: 6px;\n    margin-left: auto;\n    text-align: right;\n    justify-content: flex-end;\n  }\n}","js":function(convertContext){ 
(function () {
  var EXP_CLASS = "cv-package-heading-scarcity-v1";
  var INIT_FLAG = "__cvPackageHeadingScarcityV1Initialized";
  var STORAGE_PREFIX = "cvPackageHeadingScarcityV1:";
  var MIN_STOCK = 5;
  var MAX_STOCK = 14;
  var REFRESH_MS = 48 * 60 * 60 * 1000;
  var RESET_MS = 7 * 24 * 60 * 60 * 1000;

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim().toLowerCase();
  }

  function getPageKey() {
    return (location.hostname + location.pathname).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
  }

  function hashString(value) {
    var hash = 0;
    var i;
    for (i = 0; i < value.length; i += 1) {
      hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  function initialStock() {
    return 6 + (hashString(getPageKey()) % (MAX_STOCK - 6 + 1));
  }

  function readStoredStock() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PREFIX + getPageKey()) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeStoredStock(data) {
    try {
      localStorage.setItem(STORAGE_PREFIX + getPageKey(), JSON.stringify(data));
    } catch (error) {}
  }

  function getStock() {
    var now = Date.now();
    var stored = readStoredStock();
    var original = initialStock();

    if (!stored || typeof stored.value !== "number" || typeof stored.createdAt !== "number") {
      stored = {
        value: original,
        original: original,
        createdAt: now,
        updatedAt: now
      };
      writeStoredStock(stored);
      return stored.value;
    }

    if (now - stored.createdAt >= RESET_MS) {
      stored.value = typeof stored.original === "number" ? stored.original : original;
      stored.original = stored.value;
      stored.createdAt = now;
      stored.updatedAt = now;
      writeStoredStock(stored);
      return stored.value;
    }

    if (typeof stored.updatedAt !== "number") {
      stored.updatedAt = stored.createdAt;
    }

    var intervals = Math.floor((now - stored.updatedAt) / REFRESH_MS);
    if (intervals > 0) {
      stored.value = Math.max(MIN_STOCK, stored.value - intervals);
      stored.updatedAt += intervals * REFRESH_MS;
      writeStoredStock(stored);
    }

    return Math.max(MIN_STOCK, Math.min(MAX_STOCK, stored.value));
  }

  function findPackageHeading() {
    var selectors = [
      ".choose-your-package-text",
      "#Choose-your-package",
      ".Choose-your-package",
      ".checkout-step__text",
      ".form-section__title",
      ".section-title",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5"
    ];
    var candidates = document.querySelectorAll(selectors.join(","));
    var i;

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent) === "choose your package") {
        return candidates[i];
      }
    }

    for (i = 0; i < candidates.length; i += 1) {
      if (normalizeText(candidates[i].textContent).indexOf("choose your package") !== -1) {
        return candidates[i];
      }
    }

    return null;
  }

  function createScarcity(stock) {
    var wrapper = document.createElement("span");
    wrapper.className = "cv-package-scarcity";
    wrapper.setAttribute("aria-label", "Low Stock: " + stock + " left");
    wrapper.innerHTML = '<span class="cv-package-scarcity-dot" aria-hidden="true"></span><span class="cv-package-scarcity-text">Low Stock: <span class="cv-package-scarcity-count">' + stock + '</span> left</span>';
    return wrapper;
  }

  function applyVariant() {
    var heading = findPackageHeading();
    var stock;

    if (!heading) return false;
    if (heading.querySelector(".cv-package-scarcity")) return true;

    stock = getStock();

    document.documentElement.classList.add(EXP_CLASS);
    heading.classList.add("cv-package-scarcity-heading");
    heading.appendChild(createScarcity(stock));

    return true;
  }

  if (applyVariant()) return;

  var observer = new MutationObserver(function () {
    if (applyVariant()) observer.disconnect();
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  window.addEventListener("load", applyVariant, { once: true });
})();
}}}],"traffic_allocation":100}]},{"id":"100141222","name":"006: L&W - New Hero w\/Carousel + Benefit Page Sections","type":"a\/b","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"003:-lw-pdp-nw-lyt-cln-cln-2","version":11,"locations":["100110929"],"site_area":null,"audiences":[],"goals":["100139251","100138911","100138912","100152216"],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001219786","name":"Original Page","key":"1001219786-original-page","status":"stopped","changes":[],"traffic_allocation":0},{"id":"1001219787","name":"Variation 1","key":"1001219787-variation-1","status":"running","changes":[{"id":1001111082,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001111083,"type":"customCode","data":{"css":"@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Barlow:wght@600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap\");\n\n.cv-woodranger-hero-benefits .cv-wr-hero,\n.cv-woodranger-hero-benefits .cv-wr-header,\n.cv-woodranger-hero-benefits .cv-wr-promo-banner,\n.cv-woodranger-hero-benefits .cv-wr-benefits {\n  font-family: Inter, Helvetica, sans-serif;\n  color: #111;\n  background: #fff;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .top-fix-bar,\n.cv-woodranger-hero-benefits .top-strip,\n.cv-woodranger-hero-benefits .header,\n.cv-woodranger-hero-benefits promo-banner {\n  display: none !important;\n}\n\nhtml.cv-woodranger-hero-benefits body > .overflow {\n  overflow: visible !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero * ,\n.cv-woodranger-hero-benefits .cv-wr-header * ,\n.cv-woodranger-hero-benefits .cv-wr-benefits * {\n  box-sizing: border-box;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero .container,\n.cv-woodranger-hero-benefits .cv-wr-header .container,\n.cv-woodranger-hero-benefits .cv-wr-benefits .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header {\n  position: relative;\n  top: auto;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  background: #fff;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header.cv-wr-header-fixed {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-spacer {\n  display: block;\n  height: 0;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-promo-banner {\n  position: relative;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 44px;\n  min-height: 44px;\n  padding: 0 16px;\n  background: #b7f4a8;\n  color: #101010;\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 700;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-promo-banner strong {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 22px;\n  padding: 8px 11px;\n  border-radius: 7px;\n  background: #111;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 900;\n  letter-spacing: .02em;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-inner {\n  min-height: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logo {\n  width: 217px;\n  height: auto;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-menu {\n  display: flex;\n  align-items: center;\n  gap: 29px;\n  margin-left: auto;\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-menu a {\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  color: #111;\n  text-decoration: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  min-height: 44px;\n  padding: 0 28px;\n  border-radius: 8px;\n  background: #ffdc32;\n  color: #111 !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  text-decoration: none;\n  border: 1px solid #d4b000;\n  box-shadow: 0 3px 0 0 #dedede;\n  text-shadow: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-cta,\n.cv-woodranger-hero-benefits .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-cta *,\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom *,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta *,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta *,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom * {\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-flag {\n  width: 28px;\n  height: 18px;\n  background: url(\"https:\/\/cdn.29next.store\/media\/woodranger\/uploads\/WT-US-flag.png\") center \/ contain no-repeat;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mobile-toggle {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero {\n  padding: 32px 0 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-grid {\n  display: grid;\n  grid-template-columns: 530px minmax(0, 1fr);\n  gap: 49px;\n  align-items: start;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-gallery-main {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #d9d9d9;\n  background: #f3f5ee;\n  aspect-ratio: 530 \/ 490;\n  touch-action: pan-y;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-gallery-main * {\n  touch-action: pan-y;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-media-placeholder {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: #777;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-media-filled {\n  position: relative;\n  display: block;\n  background: #fff;\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-slide {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-slide-active {\n  z-index: 2;\n  opacity: 1;\n  visibility: visible;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-media,\n.cv-woodranger-hero-benefits .cv-wr-benefit-media-asset {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits video.cv-wr-main-media {\n  box-sizing: border-box;\n  padding: 100px 0;\n  background: #0F1013;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb-media {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits video.cv-wr-thumb-media {\n  box-sizing: border-box;\n  padding: 0;\n  background: #fff;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge {\n  position: absolute;\n  z-index: 3;\n  display: block;\n  height: auto;\n  pointer-events: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-guarantee {\n  left: 17px;\n  top: 18px;\n  width: 88px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-drop {\n  left: 19px;\n  top: 128px;\n  width: 56px;\n  border-radius: 4px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-tested {\n  right: 18px;\n  top: 18px;\n  width: 108px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge {\n  position: absolute;\n  left: 18px;\n  top: 18px;\n  width: 76px;\n  min-height: 92px;\n  padding: 10px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  color: #fff;\n  text-align: center;\n  font-weight: 800;\n  line-height: 1.05;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 8px rgba(0,0,0,.18);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge strong {\n  font-size: 28px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge span {\n  font-size: 11px;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-approval {\n  position: absolute;\n  right: 18px;\n  top: 18px;\n  max-width: 154px;\n  padding: 9px 10px 8px;\n  color: #fff;\n  background: #e1261c;\n  border: 3px solid #fff;\n  font-size: 14px;\n  line-height: 1.02;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,.18);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-nav {\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  transform: translateY(-50%);\n  width: 34px;\n  height: 34px;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  background: #ffd400;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  appearance: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-nav::before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-left: 2px solid #111;\n  border-bottom: 2px solid #111;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-prev::before {\n  transform: translateX(2px) rotate(45deg);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-next::before {\n  transform: translateX(-2px) rotate(225deg);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-prev {\n  left: 15px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-next {\n  right: 15px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumbs {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  margin-top: 12px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb {\n  position: relative;\n  box-sizing: border-box;\n  border: 0;\n  border-radius: 3px;\n  background: #fff;\n  padding: 0;\n  cursor: pointer;\n  aspect-ratio: 530 \/ 489;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumbs,\n.cv-woodranger-hero-benefits .cv-wr-thumb,\n.cv-woodranger-hero-benefits .cv-wr-thumb-media {\n  background-color: #fff !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb[aria-selected=\"true\"] {\n  outline: 2px solid #111;\n  outline-offset: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb span {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0 9px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-stars {\n  display: block;\n  width: 82px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  letter-spacing: 0;\n  background: url(\"data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2282%22%20height%3D%2216%22%20viewBox%3D%220%200%2082%2016%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M7.3885%202.27341L8.62197%206.06965L12.6136%206.06965L9.3843%208.41585L10.6178%2012.2121L7.3885%209.86589L4.15923%2012.2121L5.3927%208.41585L2.16343%206.06965L6.15503%206.06965L7.3885%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2216.6719%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M24.0604%202.27341L25.2938%206.06965L29.2855%206.06965L26.0562%208.41585L27.2897%2012.2121L24.0604%209.86589L20.8311%2012.2121L22.0646%208.41585L18.8353%206.06965L22.8269%206.06965L24.0604%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2233.3438%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M40.7323%202.27341L41.9657%206.06965L45.9573%206.06965L42.7281%208.41585L43.9615%2012.2121L40.7323%209.86589L37.503%2012.2121L38.7364%208.41585L35.5072%206.06965L39.4988%206.06965L40.7323%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2250.0137%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M57.4022%202.27341L58.6356%206.06965L62.6272%206.06965L59.398%208.41585L60.6314%2012.2121L57.4022%209.86589L54.1729%2012.2121L55.4064%208.41585L52.1771%206.06965L56.1687%206.06965L57.4022%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2266.6855%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA85%22%2F%3E%3Cpath%20d%3D%22M74.074%202.27344L75.3075%206.06968L79.2991%206.06968L76.0698%208.41588L77.3033%2012.2121L74.074%209.86592L70.8448%2012.2121L72.0782%208.41588L68.849%206.06968L72.8406%206.06968L74.074%202.27344Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E\") center \/ 82px 16px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n  margin: 0;\n  max-width: 570px;\n  font-size: 40px;\n  line-height: 1.05;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy {\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n  color: #e1261c;\n}\n\n@media (min-width: 901px) and (max-width: 1100px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: inline-block;\n    white-space: nowrap;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-subhead {\n  margin: 18px 0 18px;\n  max-width: 485px;\n  padding: 10px 0;\n  border-top: 2px solid #111;\n  border-bottom: 2px solid #111;\n  font-size: 18px;\n  line-height: 1.38;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks {\n  display: grid;\n  gap: 12px;\n  margin: 0 0 25px;\n  padding: 0;\n  list-style: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks li {\n  position: relative;\n  padding-left: 30px;\n  font-size: 16px;\n  line-height: 1.28;\n  font-weight: 700;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 1px;\n  width: 20px;\n  height: 20px;\n  background: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM14.3188 5.56875L15.6875 6.81875L8.1875 15.1188L4.31875 11.25L5.625 9.94375L8.06875 12.3875L14.3188 5.56875Z' fill='%23DB011C'\/%3E%3C\/svg%3E\") center \/ 20px 20px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 335px;\n  max-width: 100%;\n  min-height: 50px;\n  padding: 0 18px;\n  background: #ffdc32;\n  color: #000 !important;\n  border: 1px solid #d4b000;\n  border-radius: 8px;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 800;\n  text-decoration: none;\n  text-shadow: none;\n  box-shadow: none;\n  white-space: nowrap;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-origin {\n  width: 335px;\n  max-width: 100%;\n  margin: 0 auto 10px;\n  color: #111;\n  text-align: center;\n  font-family: Inter, Helvetica, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  color: #000 !important;\n  text-align: center;\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 23px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-icon {\n  width: 22px;\n  height: 22px;\n  flex: 0 0 22px;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 335px;\n  max-width: 100%;\n  margin: 7px auto 0;\n  color: #333;\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-ship {\n  position: relative;\n  width: 11px;\n  height: 11px;\n  margin-right: 8px;\n  border-radius: 50%;\n  background-color: #adf4a1;\n  opacity: .5;\n  animation: cvWrPulseCtaShip 1.725s forwards infinite ease-out;\n  flex: 0 0 11px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-ship::after {\n  content: \"\";\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background-color: #95df89;\n}\n\n@keyframes cvWrPulseCtaShip {\n  45% {\n    transform: scale(1.45);\n    opacity: 1;\n  }\n\n  55% {\n    opacity: 1;\n  }\n}\n\n@keyframes cvWrPulsePageCta {\n  0%,\n  100% {\n    transform: scale(.9);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta {\n  transform: scale(.9);\n  animation: cvWrPulsePageCta 1.5s infinite;\n  transition: background-color .18s ease;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta > span {\n  display: inline-block;\n  transition: transform .24s;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta:hover > span {\n  transform: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta:hover {\n  background: #f3cf25;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-text span {\n  display: inline;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-text {\n  font-weight: 400;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view {\n  display: flex;\n  gap: 2px;\n  margin: 0 7px 0 5px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view span {\n  width: 10px;\n  height: 10px;\n  display: block;\n  background-color: rgba(217, 217, 217, .6);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view span:first-child {\n  background-color: #fc2201;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-level {\n  color: #ea4701;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  max-width: 470px;\n  margin-left: 0;\n  padding-top: 37px;\n  border-top: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  flex: 0 0 52px;\n  background: #d9d9d9;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review p {\n  margin: 0 0 4px;\n  font-size: 14px;\n  line-height: 1.38;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review strong {\n  font-size: 13px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen {\n  margin-top: 58px;\n  padding: 20px 0 16px;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen p {\n  margin: 0 0 10px;\n  font-size: 14px;\n  color: #555;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 112px;\n  height: 30px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  background: transparent;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos img {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: 24px;\n  max-height: none;\n  object-fit: contain;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(3),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(7),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(10),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(14) {\n  width: 146px;\n}\n\n@keyframes cvWrLogoMarquee {\n  from {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(calc(-50% - 11px));\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefits {\n  padding: 64px 0 58px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head {\n  max-width: 650px;\n  margin: 0 auto 46px;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head h2 {\n  margin: 0 0 10px;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head-break {\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head p {\n  margin: 0;\n  font-size: 17px;\n  line-height: 1.45;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-row {\n  display: grid;\n  grid-template-columns: 584px 430px;\n  gap: 94px;\n  align-items: center;\n  max-width: 1108px;\n  margin: 0 auto 58px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-mobile-title {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse {\n  grid-template-columns: 430px 584px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-copy {\n  order: 1;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-media {\n  order: 2;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-media {\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  aspect-ratio: 584 \/ 348;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-media img,\n.cv-woodranger-hero-benefits .cv-wr-benefit-media video {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-video-pending {\n  position: absolute;\n  left: 12px;\n  bottom: 12px;\n  padding: 6px 9px;\n  background: rgba(0,0,0,.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-copy h3 {\n  margin: 0 0 10px;\n  font-size: 23px;\n  line-height: 1.15;\n  font-weight: 900;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-copy p {\n  margin: 0 0 12px;\n  font-size: 18px;\n  line-height: 1.48;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof {\n  position: relative;\n  margin-top: 16px;\n  padding-left: 0;\n  border-left: 0;\n  font-size: 13px;\n  line-height: 1.35;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof-stars {\n  margin-bottom: 8px;\n  display: block;\n  width: 82px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  letter-spacing: 0;\n  background: url(\"data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2282%22%20height%3D%2216%22%20viewBox%3D%220%200%2082%2016%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M7.3885%202.27341L8.62197%206.06965L12.6136%206.06965L9.3843%208.41585L10.6178%2012.2121L7.3885%209.86589L4.15923%2012.2121L5.3927%208.41585L2.16343%206.06965L6.15503%206.06965L7.3885%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2216.6719%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M24.0604%202.27341L25.2938%206.06965L29.2855%206.06965L26.0562%208.41585L27.2897%2012.2121L24.0604%209.86589L20.8311%2012.2121L22.0646%208.41585L18.8353%206.06965L22.8269%206.06965L24.0604%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2233.3438%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M40.7323%202.27341L41.9657%206.06965L45.9573%206.06965L42.7281%208.41585L43.9615%2012.2121L40.7323%209.86589L37.503%2012.2121L38.7364%208.41585L35.5072%206.06965L39.4988%206.06965L40.7323%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2250.0137%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M57.4022%202.27341L58.6356%206.06965L62.6272%206.06965L59.398%208.41585L60.6314%2012.2121L57.4022%209.86589L54.1729%2012.2121L55.4064%208.41585L52.1771%206.06965L56.1687%206.06965L57.4022%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2266.6855%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA85%22%2F%3E%3Cpath%20d%3D%22M74.074%202.27344L75.3075%206.06968L79.2991%206.06968L76.0698%208.41588L77.3033%2012.2121L74.074%209.86592L70.8448%2012.2121L72.0782%208.41588L68.849%206.06968L72.8406%206.06968L74.074%202.27344Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E\") center \/ 82px 16px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof p {\n  margin: 0 0 4px;\n  font-size: 14px;\n  line-height: 1.35;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta-bottom {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n  grid-template-columns: 430px 1fr;\n  gap: 0;\n  align-items: stretch;\n  background: #202729;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n  width: 584px;\n  aspect-ratio: 584 \/ 348;\n  order: 2;\n  justify-self: end;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n  display: block;\n  order: 1;\n  padding: 42px 44px;\n  background: #202729;\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy h3,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy p,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-proof p,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-proof strong {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section,\n.cv-woodranger-hero-benefits .cv-wr-comparison {\n  font-family: Inter, Helvetica, sans-serif;\n  color: #111;\n  background: #fff;\n}\n\n@media (min-width: 901px) and (max-width: 1160px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    grid-template-columns: minmax(0, 1fr) minmax(0, .74fr);\n    gap: 36px;\n    max-width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse {\n    grid-template-columns: minmax(0, .74fr) minmax(0, 1fr);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: minmax(0, .74fr) minmax(0, 1fr);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: minmax(0, 377px) 56px minmax(0, 377px);\n    gap: 24px;\n    width: fit-content;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 760px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-media {\n    order: initial;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n    max-width: 100%;\n    justify-self: stretch;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    gap: 0;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    aspect-ratio: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    aspect-ratio: 16 \/ 9;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 560px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    width: 54px;\n    height: 54px;\n    min-height: 54px;\n    margin: 0 auto;\n    justify-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: min(100% - 40px, 760px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    gap: 28px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100%;\n    max-width: 620px;\n    margin: 0 auto 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 530 \/ 489;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: 560px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n}\n\n.cv-woodranger-hero-benefits h1,\n.cv-woodranger-hero-benefits h2,\n.cv-woodranger-hero-benefits h3,\n.cv-woodranger-hero-benefits h4,\n.cv-woodranger-hero-benefits h5,\n.cv-woodranger-hero-benefits h6,\n.cv-woodranger-hero-benefits .commn-hdg {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section .container,\n.cv-woodranger-hero-benefits .cv-wr-comparison .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section {\n  clear: both;\n  padding: 74px 0 68px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section h2,\n.cv-woodranger-hero-benefits .cv-wr-comparison h2 {\n  margin: 0;\n  text-align: center;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison-head-break {\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid {\n  width: 100vw;\n  max-width: none;\n  margin: 34px calc(50% - 50vw) 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  scrollbar-width: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid::-webkit-scrollbar {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-track {\n  display: flex;\n  gap: 24px;\n  width: max-content;\n  animation: cvWrJobMarquee 70s linear infinite;\n  will-change: transform;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid:hover .cv-wr-job-track {\n  animation-play-state: paused;\n}\n\n@keyframes cvWrJobMarquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-1431px);\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card {\n  flex: 0 0 214.5px;\n  background: #f1f1f1;\n  text-align: left;\n  min-width: 214.5px;\n  scroll-snap-align: start;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card img {\n  width: 100%;\n  aspect-ratio: 1.42 \/ 1;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card div {\n  padding: 12px 14px 18px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card h3 {\n  margin: 0 0 7px;\n  font-size: 21px;\n  line-height: 1;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card p {\n  margin: 0;\n  font-size: 17px;\n  line-height: 1.35;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison {\n  padding: 10px 0 72px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison-sub {\n  max-width: 650px;\n  margin: 18px auto 34px;\n  text-align: center;\n  font-size: 17px;\n  line-height: 1.45;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid {\n  display: grid;\n  grid-template-columns: 377px 80px 377px;\n  gap: 32px;\n  align-items: start;\n  width: fit-content;\n  max-width: 100%;\n  margin: 0 auto;\n  justify-content: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n  min-width: 0;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-img {\n  position: relative;\n  width: 377px;\n  height: 262px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-good,\n.cv-woodranger-hero-benefits .cv-wr-bad {\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  width: 41px;\n  height: 41px;\n  border-radius: 50%;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 41px 41px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-good {\n  background-image: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='41' height='41' viewBox='0 0 41 41' fill='none'%3E%3Ccircle cx='20.2031' cy='20.2031' r='14' fill='white'\/%3E%3Cpath d='M20.2031 0C9.04569 0 0 9.04569 0 20.2031C0 31.3606 9.04569 40.4063 20.2031 40.4063C31.3606 40.4063 40.4063 31.3606 40.4063 20.2031C40.4063 9.04569 31.3606 0 20.2031 0ZM17.9827 28.4008L10.3437 20.7618L13.0387 18.0668L17.9829 23.011L29.0032 11.9906L31.6982 14.6856L17.9827 28.4008Z' fill='%2301DE95'\/%3E%3C\/svg%3E\");\n}\n\n.cv-woodranger-hero-benefits .cv-wr-bad {\n  background-image: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='41' height='41' viewBox='0 0 41 41' fill='none'%3E%3Ccircle cx='20.2051' cy='20.2051' r='14' fill='white'\/%3E%3Cpath d='M20.205 0C9.04553 0 0 9.04553 0 20.205C0 31.3645 9.04553 40.41 20.205 40.41C31.3645 40.41 40.41 31.3645 40.41 20.205C40.41 9.04553 31.3645 0 20.205 0ZM13.8909 11.2466L20.205 17.5607L26.5191 11.2466L29.1634 13.8909L22.8493 20.205L29.1634 26.5191L26.5191 29.1634L20.205 22.8493L13.8909 29.1634L11.2466 26.5191L17.5607 20.205L11.2466 13.8909L13.8909 11.2466Z' fill='%23FF1500'\/%3E%3C\/svg%3E\");\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n  margin: 0 0 14px;\n  font-family: Inter, Helvetica, sans-serif !important;\n  font-size: 24px;\n  line-height: 1.15;\n  font-weight: 900;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid li {\n  padding: 8px 0;\n  border-bottom: 1px solid #e6e6e6;\n  font-size: 18px;\n  line-height: 1.25;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs {\n  position: relative;\n  align-self: stretch;\n  min-height: 0;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs::before {\n  content: \"\";\n  position: absolute;\n  top: 181px;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n  background: #999;\n  transform: translateX(-50%);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs {\n  z-index: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs::after {\n  content: \"VS\";\n  position: absolute;\n  top: 126px;\n  left: 50%;\n  z-index: 1;\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  min-height: 42px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #ed4646;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 42px;\n  transform: translateX(-50%);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-cta {\n  padding: 37px 0;\n  background: #fff;\n  font-family: Inter, Helvetica, sans-serif;\n  clear: both;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-container {\n  display: block !important;\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n  padding: 0 !important;\n  float: none !important;\n  transform: none !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-grid {\n  display: grid !important;\n  grid-template-columns: 530px 335px !important;\n  gap: 58px !important;\n  align-items: center;\n  width: 923px !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n  margin: 0 auto !important;\n  padding: 0 !important;\n  float: none !important;\n  transform: none !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-media {\n  position: relative;\n  width: 530px;\n  max-width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-media .cv-wr-main-media,\n.cv-woodranger-hero-benefits .cv-wr-final-mobile-media .cv-wr-main-media {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n  position: relative;\n  overflow: hidden;\n  width: 530px;\n  max-width: 100%;\n  height: 489px;\n  background: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge {\n  position: absolute;\n  left: 28px;\n  top: 28px;\n  width: 122px;\n  min-height: 124px;\n  padding: 18px 10px 14px;\n  background: #050505;\n  color: #fff;\n  border-radius: 6px;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge strong {\n  display: block;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 34px;\n  line-height: .82;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge span {\n  display: block;\n  margin-top: 6px;\n  font-size: 16px;\n  line-height: .92;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-approval {\n  position: absolute;\n  right: 28px;\n  top: 28px;\n  padding: 12px 16px;\n  border: 4px solid #fff;\n  border-radius: 14px;\n  background: #e84a22;\n  color: #fff;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 24px;\n  line-height: .9;\n  font-weight: 900;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-drop {\n  position: absolute;\n  left: 32px;\n  top: 180px;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffdf2e;\n  color: #1750d6;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 17px;\n  line-height: .9;\n  font-weight: 900;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n  max-width: 335px;\n  margin: 16px 0 28px;\n  font-family: Barlow, Inter, Helvetica, sans-serif;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy {\n  width: 335px;\n  max-width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy h2 span {\n  display: inline;\n  color: #df001b;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks {\n  max-width: min(360px, calc(100vw - 32px));\n  margin-bottom: 26px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li {\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 800;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li::before {\n  top: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-ship {\n  margin: 0 0 10px;\n  width: 335px;\n  max-width: 100%;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action {\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta-bottom {\n  margin-left: 0;\n  margin-right: 0;\n  width: 335px;\n  max-width: 100%;\n  justify-content: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n  justify-content: flex-start;\n}\n\n.cv-woodranger-hero-benefits .sec4 .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits #features > .container,\n.cv-woodranger-hero-benefits .sec4 > .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits .sec8 .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits .sec9 .commn-hdg,\n.cv-woodranger-hero-benefits .sec10 .commn-hdg,\n.cv-woodranger-hero-benefits #reviews .commn-hdg,\n.cv-woodranger-hero-benefits #faq .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits .sec4,\n.cv-woodranger-hero-benefits .sec8,\n.cv-woodranger-hero-benefits .sec9,\n.cv-woodranger-hero-benefits .sec10,\n.cv-woodranger-hero-benefits #reviews,\n.cv-woodranger-hero-benefits #faq,\n.cv-woodranger-hero-benefits .footer {\n  font-family: Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits #reviews,\n.cv-woodranger-hero-benefits .sec9 {\n  padding-bottom: 44px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-control-cta-replacement {\n  display: none !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec8 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec9 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec10 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits #reviews :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits #faq :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .footer :is(p, li, span, div, a, button) {\n  font-family: Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec4 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec8 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec8 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec9 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec9 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec10 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec10 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits #reviews :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits #reviews :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits #faq :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits #faq :is(h1, h2, h3, h4, h5, h6, .commn-hdg) * {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 .s4-contbox {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n  font-size: 21px !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .cv-wr-comparison .cv-wr-benefit-cta,\n.cv-woodranger-hero-benefits .sec8 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits #reviews .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits #faq .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec10 .cv-wr-control-cta-replacement {\n  margin-top: 50px !important;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-bottom {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-origin,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-origin {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-stock-view span,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-stock-view span {\n  background: #c9c9c9;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-stock-view span:first-child,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-stock-view span:first-child {\n  background: #fc2201;\n}\n\n@media (min-width: 769px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 760px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-media {\n    order: initial;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n    max-width: 100%;\n    justify-self: stretch;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    gap: 0;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    aspect-ratio: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    aspect-ratio: 16 \/ 9;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 560px) !important;\n    max-width: calc(100vw - 40px) !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    width: 54px;\n    height: 54px;\n    min-height: 54px;\n    margin: 0 auto;\n    justify-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: min(100% - 40px, 760px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    gap: 28px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100%;\n    max-width: 620px;\n    margin: 0 auto 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 530 \/ 489;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: 560px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n}\n\n@media (min-width: 901px) and (max-width: 1100px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: inline-block;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-header-inner {\n    min-height: 54px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logo {\n    width: 150px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a:nth-child(n+4) {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu {\n    gap: 18px;\n    font-size: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-cta {\n    min-height: 28px;\n    padding: 0 12px;\n    font-size: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-grid,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-media {\n    order: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-promo-banner {\n    flex-wrap: wrap;\n    gap: 3px 6px;\n    height: 64px;\n    min-height: 64px;\n    padding: 11px 12px;\n    font-size: 15px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-promo-banner strong {\n    min-height: 22px;\n    padding: 2px 9px;\n    font-size: 15px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero {\n    padding-top: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero .container,\n  .cv-woodranger-hero-benefits .cv-wr-header .container,\n  .cv-woodranger-hero-benefits .cv-wr-benefits .container {\n    width: calc(100% - 32px);\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header .container {\n    width: calc(100% - 32px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-inner {\n    min-height: 62px;\n    padding: 0;\n    gap: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logo {\n    width: 182px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-cta,\n  .cv-woodranger-hero-benefits .cv-wr-flag {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mobile-toggle {\n    position: relative;\n    width: 26px;\n    height: 20px;\n    margin-left: auto;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    appearance: none;\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0;\n    cursor: pointer;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mobile-toggle span {\n    width: 26px;\n    height: 3px;\n    min-height: 3px;\n    flex: 0 0 3px;\n    border-radius: 999px;\n    background: #111;\n    display: block;\n    margin: 0;\n    padding: 0;\n    opacity: 1;\n    transform: none;\n    transform-origin: center;\n    transition: transform .18s ease, opacity .18s ease;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle {\n    gap: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(1) {\n    position: absolute;\n    top: 8.5px;\n    left: 0;\n    transform: rotate(45deg);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(2) {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(3) {\n    position: absolute;\n    top: 8.5px;\n    left: 0;\n    transform: rotate(-45deg);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu {\n    position: absolute;\n    top: 100%;\n    left: calc(50% - 50vw);\n    right: auto;\n    z-index: 10000;\n    display: none;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background: #fff;\n    border-top: 1px solid #d7d7d7;\n    border-bottom: 1px solid #d7d7d7;\n    font-size: 17px;\n    font-weight: 800;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-menu {\n    display: block;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    min-height: 54px;\n    padding: 0 16px;\n    border-bottom: 1px solid #d7d7d7;\n    color: #111;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a:last-child {\n    border-bottom: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a[aria-current=\"page\"] {\n    background: #ffdf2e;\n  }\n\n  .cv-woodranger-hero-benefits #ctabtn-mob.cv-wr-sticky-footer,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    z-index: 9997 !important;\n    width: 100% !important;\n    margin: 0 !important;\n    padding: 10px 16px 8px !important;\n    background: #fff !important;\n    box-shadow: 0 -1px 10px rgba(0, 0, 0, .08) !important;\n    text-align: center !important;\n    font-family: Inter, Helvetica, sans-serif !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta {\n    width: 100% !important;\n    min-height: 50px !important;\n    height: 50px !important;\n    padding: 0 18px !important;\n    box-sizing: border-box !important;\n    border: 1px solid #d4b000 !important;\n    border-radius: 12px !important;\n    background: #ffdc32 !important;\n    color: #000 !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 8px !important;\n    font-family: Roboto, Inter, Helvetica, sans-serif !important;\n    font-size: 18px !important;\n    line-height: 1 !important;\n    font-weight: 900 !important;\n    letter-spacing: 0 !important;\n    text-decoration: none !important;\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta span {\n    display: block;\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta .cv-wr-cta-icon {\n    flex: 0 0 22px;\n    width: 22px;\n    height: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-scarcity {\n    box-sizing: border-box;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n    color: #111;\n    font-size: 14px;\n    line-height: 1.15;\n    font-weight: 400;\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-dot {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: 5px solid #aaf3a0;\n    background: #7fdd73;\n    display: inline-block;\n    flex: 0 0 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars {\n    display: inline-flex;\n    gap: 3px;\n    flex: 0 0 auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars i {\n    width: 10px;\n    height: 10px;\n    display: block;\n    background: #d8d8d8;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars i:first-child {\n    background: #e9412a;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-scarcity strong {\n    color: #e9412a;\n    font-weight: 400;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main {\n    width: 100vw;\n    height: auto;\n    max-height: none;\n    aspect-ratio: 530 \/ 490;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    border-color: #fff;\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main .cv-wr-media-placeholder,\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main .cv-wr-media-filled {\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits img.cv-wr-main-media,\n  .cv-woodranger-hero-benefits img.cv-wr-thumb-media {\n    object-fit: contain;\n  }\n\n  .cv-woodranger-hero-benefits video.cv-wr-main-media {\n    width: calc(100% - 8px);\n    margin: 0 auto;\n    padding-top: 50px;\n    padding-bottom: 50px;\n    object-fit: cover;\n    background: #0F1013;\n  }\n\n  .cv-woodranger-hero-benefits video.cv-wr-thumb-media {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    object-fit: cover;\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy {\n    display: contents;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-rating {\n    order: 1;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    order: 2;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery {\n    order: 3;\n    width: 100%;\n    margin-top: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead {\n    order: 4;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-checks {\n    order: 5;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta {\n    order: 6;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    order: 7;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mini-review {\n    order: 8;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge {\n    left: 10px;\n    top: 10px;\n    width: 62px;\n    min-height: 76px;\n    border-width: 3px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge strong {\n    font-size: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge span {\n    font-size: 9px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-approval {\n    right: 10px;\n    top: 10px;\n    max-width: 124px;\n    font-size: 11px;\n    border-width: 2px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-guarantee {\n    left: 10px;\n    top: 10px;\n    width: 62px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-drop {\n    left: 11px;\n    top: 88px;\n    width: 40px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-tested {\n    right: 10px;\n    top: 10px;\n    width: 76px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-thumbs {\n    gap: 6px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    font-size: 32px;\n    max-width: 100%;\n    width: 100%;\n    line-height: .98;\n    text-align: center;\n    margin-top: 6px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: block;\n    white-space: nowrap;\n    line-height: .98;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 br {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead,\n  .cv-woodranger-hero-benefits .cv-wr-checks li {\n    font-size: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead {\n    font-size: 17px;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-checks li {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy {\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-rating,\n  .cv-woodranger-hero-benefits .cv-wr-mini-review {\n    justify-content: flex-start;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-rating {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-cta {\n    width: 100%;\n    padding-left: 14px;\n    padding-right: 14px;\n    font-size: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    width: max-content;\n    row-gap: 0;\n    font-size: 14px;\n    animation: cvWrLogoMarquee 70s linear infinite;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen p {\n    font-size: 14px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen {\n    width: 100vw;\n    margin-top: 35px;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos {\n    gap: 12px 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 112px;\n    height: 30px;\n    overflow: hidden;\n    color: transparent;\n    font-size: 0;\n    line-height: 0;\n    background: transparent;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(3),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(7),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(10),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(14) {\n    width: 146px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefits {\n    padding-top: 28px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head h2 {\n    font-size: 25px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    margin-bottom: 40px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-mobile-title {\n    display: block;\n    order: 1;\n    margin: 0;\n    font-size: 23px;\n    line-height: 1.15;\n    font-weight: 900;\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media {\n    order: 2;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy {\n    order: 3;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy > h3 {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    display: grid;\n    grid-template-columns: 1fr !important;\n    gap: 0 !important;\n    width: 100vw;\n    max-width: none;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    background: #202729;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark > .cv-wr-benefit-mobile-title {\n    color: #fff;\n    margin: 0;\n    padding: 24px 24px 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    order: 2 !important;\n    width: calc(100% - 48px);\n    max-width: none;\n    aspect-ratio: 393 \/ 236;\n    justify-self: stretch;\n    margin: 18px 24px 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    order: 3 !important;\n    width: 100%;\n    padding: 26px 24px 30px;\n    background: #202729;\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-copy h3 {\n    font-size: 23px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-copy > p {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: calc(100vw - 31px);\n    max-width: none;\n    margin-left: 0;\n    margin-right: calc(31px - 100vw + 100%);\n    overflow-x: auto;\n    overflow-y: hidden;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x proximity;\n    scrollbar-width: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-track {\n    display: grid;\n    grid-template-columns: repeat(6, 251px);\n    gap: 24px;\n    width: max-content;\n    animation: none;\n    transform: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card-duplicate {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card {\n    width: 251px;\n    min-width: 251px;\n    scroll-snap-align: start;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card h3 {\n    font-size: 23px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card p {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 {\n    max-width: 344px;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 25px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 .cv-wr-desktop-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 .cv-wr-nowrap {\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-comparison-head-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    max-width: none;\n    width: 100%;\n    margin: 28px auto 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid li {\n    font-size: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    min-height: 53px;\n    height: 53px;\n    width: 53px;\n    margin: 0 auto;\n    justify-self: center;\n    align-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    width: 53px;\n    height: 53px;\n    min-width: 53px;\n    min-height: 53px;\n    line-height: 53px;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-cta {\n    padding: 54px 0 58px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: calc(100% - 32px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    gap: 26px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-media .cv-wr-main-media,\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media .cv-wr-main-media {\n    height: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100vw;\n    margin: 22px calc(50% - 50vw) 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    max-width: none;\n    height: 346px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge {\n    left: 18px;\n    top: 18px;\n    width: 92px;\n    min-height: 94px;\n    padding: 13px 8px 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge strong {\n    font-size: 26px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge span {\n    font-size: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-approval {\n    right: 16px;\n    top: 18px;\n    padding: 9px 11px;\n    border-width: 3px;\n    border-radius: 11px;\n    font-size: 17px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-drop {\n    left: 20px;\n    top: 124px;\n    width: 52px;\n    height: 52px;\n    font-size: 14px;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: none;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n    font-size: 32px;\n    line-height: 1.08;\n    margin: 12px 0 22px;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks {\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-ship {\n    font-size: 11px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-cta-origin {\n    font-size: 11px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head h2,\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2,\n  .cv-woodranger-hero-benefits .cv-wr-comparison h2,\n  .cv-woodranger-hero-benefits .sec4 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec8 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec9 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec10 .commn-hdg,\n  .cv-woodranger-hero-benefits #reviews .commn-hdg,\n  .cv-woodranger-hero-benefits #faq .commn-hdg {\n    font-size: 28px !important;\n    line-height: 1.1 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head p,\n  .cv-woodranger-hero-benefits .cv-wr-comparison-sub,\n  .cv-woodranger-hero-benefits section#comparison > .container > p.cv-wr-comparison-sub,\n  .cv-woodranger-hero-benefits .cv-wr-comparison .cv-wr-comparison-sub {\n    font-size: 16px !important;\n    line-height: 1.45 !important;\n  }\n\n  .cv-woodranger-hero-benefits .sec4 .commn-para {\n    font-size: 16px !important;\n    line-height: 1.45 !important;\n  }\n\n  .cv-woodranger-hero-benefits .sec8 .incld-txt span {\n    font-size: 18px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .acdn-para,\n  .cv-woodranger-hero-benefits .sec10 .acdn-para {\n    font-size: 16px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .accordion,\n  .cv-woodranger-hero-benefits .sec10 .accordion,\n  .cv-woodranger-hero-benefits #faq [id^=\"hd-\"],\n  .cv-woodranger-hero-benefits .sec10 [id^=\"hd-\"] {\n    font-size: 16px !important;\n  }\n}\n\n@media (min-width: 601px) and (max-width: 768px) {\n  .cv-woodranger-hero-benefits #ctabtn-mob.cv-wr-sticky-footer,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    z-index: 9997 !important;\n    width: 100% !important;\n    margin: 0 !important;\n    padding: 10px 16px 8px !important;\n    background: #fff !important;\n    box-shadow: 0 -1px 10px rgba(0, 0, 0, .08) !important;\n    text-align: center !important;\n    font-family: Inter, Helvetica, sans-serif !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta {\n    width: 100% !important;\n    min-height: 50px !important;\n    height: 50px !important;\n    padding: 0 18px !important;\n    box-sizing: border-box !important;\n    border: 1px solid #d4b000 !important;\n    border-radius: 12px !important;\n    background: #ffdc32 !important;\n    color: #000 !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 8px !important;\n    font-family: Roboto, Inter, Helvetica, sans-serif !important;\n    font-size: 18px !important;\n    line-height: 1 !important;\n    font-weight: 900 !important;\n    letter-spacing: 0 !important;\n    text-decoration: none !important;\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer .cv-wr-cta-bottom {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n}\n\n@media (min-width: 601px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .sec4 .s4-contbox,\n  .cv-woodranger-hero-benefits #features .s4-contbox {\n    font-size: 18px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-section {\n    padding-top: 35px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    padding-right: 15px !important;\n    box-sizing: content-box;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  font-family: Roboto, Arial, sans-serif !important;\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-final-ship,\n  .cv-woodranger-hero-benefits .cv-wr-cta-origin {\n    font-size: 11px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article ul li {\n    font-size: 16px !important;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof strong {\n  font-weight: 600 !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  width: auto;\n  height: 16px;\n  vertical-align: middle;\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  background: #1BBA86;\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif !important;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars .is-off,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars .is-off {\n  background: #dedede;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .testi-cont .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .testi-cont .cv-wr-review-stars {\n  margin: 0;\n}\n\n.cv-woodranger-hero-benefits #reviews .testi-cont .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .testi-cont .cv-wr-review-stars {\n  margin-top: 15px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1,\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 *,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 * {\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n  flex: 0 0 230px !important;\n  width: 230px !important;\n  max-width: 230px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score {\n  order: 1;\n  color: #000 !important;\n  font-family: \"Inter Variable\", Arial, sans-serif !important;\n  font-size: 23px !important;\n  font-weight: 800 !important;\n  line-height: 1.2 !important;\n  margin: 0 0 5px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars {\n  order: 2;\n  gap: 2px;\n  height: 22px;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-based,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-based {\n  order: 3;\n  color: #000 !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  line-height: 1.25 !important;\n  margin-top: 6px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars span {\n  width: 22px;\n  height: 22px;\n  border-radius: 3px;\n  font-size: 18px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rating-vals,\n.cv-woodranger-hero-benefits .sec9 .rating-vals {\n  flex: 0 0 120px;\n  width: 120px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rating-vals li,\n.cv-woodranger-hero-benefits .sec9 .rating-vals li {\n  display: flex;\n  align-items: center;\n  min-height: 22px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rev-bars,\n.cv-woodranger-hero-benefits .sec9 .rev-bars {\n  margin-left: 14px;\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits #reviews .star-review-row,\n  .cv-woodranger-hero-benefits .sec9 .star-review-row {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 5px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rating-vals,\n  .cv-woodranger-hero-benefits .sec9 .rating-vals {\n    flex: 0 0 120px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rev-bars,\n  .cv-woodranger-hero-benefits .sec9 .rev-bars {\n    flex: 0 0 auto !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-3,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-3 {\n    flex: 0 0 190px !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .cv-woodranger-hero-benefits #reviews .star-review-row,\n  .cv-woodranger-hero-benefits .sec9 .star-review-row {\n    display: grid !important;\n    grid-template-columns: auto auto !important;\n    align-items: start !important;\n    justify-content: center !important;\n    column-gap: 14px !important;\n    row-gap: 22px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 {\n    grid-column: 1 \/ -1 !important;\n    align-items: center !important;\n    flex: 0 0 auto !important;\n    width: 230px !important;\n    max-width: calc(100vw - 48px) !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    text-align: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars {\n    justify-content: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-based,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-based {\n    width: 100% !important;\n    text-align: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score {\n    font-size: 24px !important;\n    line-height: 1.15 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rating-vals,\n  .cv-woodranger-hero-benefits .sec9 .rating-vals {\n    grid-column: 1 !important;\n    justify-self: end !important;\n    align-self: start !important;\n    margin: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rev-bars,\n  .cv-woodranger-hero-benefits .sec9 .rev-bars {\n    grid-column: 2 !important;\n    justify-self: start !important;\n    align-self: start !important;\n    margin: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .cs-percent,\n  .cv-woodranger-hero-benefits .sec9 .cs-percent,\n  .cv-woodranger-hero-benefits #reviews .star-review-col-3,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-3 {\n    grid-column: 1 \/ -1 !important;\n    justify-self: center !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100vw !important;\n    margin-left: calc(50% - 50vw) !important;\n    margin-right: calc(50% - 50vw) !important;\n    padding-left: 16px !important;\n    padding-right: 15px !important;\n    box-sizing: border-box !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits #benefits.cv-wr-benefits {\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #comparison.cv-wr-comparison {\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta.cv-wr-final-cta {\n    padding-top: 35px !important;\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .cv-wr-control-cta-replacement,\n  .cv-woodranger-hero-benefits .sec10 .cv-wr-control-cta-replacement {\n    margin-top: 30px !important;\n    margin-bottom: 30px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100vw !important;\n    margin-left: calc(50% - 50vw) !important;\n    margin-right: calc(50% - 50vw) !important;\n    padding-left: 24px !important;\n    padding-right: 24px !important;\n    box-sizing: border-box !important;\n    scroll-padding-left: 24px !important;\n    scroll-snap-type: x mandatory !important;\n    overscroll-behavior-x: contain;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-track {\n    grid-template-columns: repeat(6, 251px) !important;\n    gap: 16px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card {\n    width: 251px !important;\n    min-width: 251px !important;\n    scroll-snap-align: start !important;\n    scroll-snap-stop: always;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen {\n  border-bottom: 0 !important;\n}\n\n@media (min-width: 601px) {\n  .cv-woodranger-hero-benefits .cv-wr-seen .cv-wr-logos span:nth-child(n+8) {\n    display: none !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-nav {\n    display: flex;\n    width: 34px;\n    height: 34px;\n    z-index: 6;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-nav::before {\n    width: 8px;\n    height: 8px;\n    border-width: 2px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-prev {\n    left: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-next {\n    right: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen {\n    border-bottom: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen .cv-wr-logos span {\n    display: flex !important;\n  }\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 530px minmax(420px, 1fr) !important;\n    gap: 58px !important;\n    width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-media,\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 530px !important;\n    max-width: 100% !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    height: 490px !important;\n    aspect-ratio: 530 \/ 490 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 420px !important;\n    max-width: 100% !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n    max-width: 420px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    overflow: hidden !important;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-dots {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-dots {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 6px;\n    margin-top: 14px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-dot {\n    display: block;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: rgba(15, 26, 42, .28);\n    transition: background-color .16s ease, transform .16s ease;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-dot-active {\n    background: #0f1a2a;\n    transform: scale(1.25);\n  }\n}","js":function(convertContext){ 
(function () {
  var EXPERIMENT_CLASS = "cv-woodranger-hero-benefits";
  var INIT_FLAG = "cvWoodrangerHeroBenefitsInit";
  var ASSET_BASE = "https://offer.woodrangertools.com/lawnandweedtrimmer/images/int/";
  var CDN_BASE = "https://cdn.29next.store/media/woodranger/uploads/";
  var HERO_VIDEO_POSTER = CDN_BASE + "hero-video-poster.jpg";
  var CHECKOUT_PATH = "/lawnandweedtrimmer/checkout";

  var slides = [
    { label: "Hero media", url: CDN_BASE + "WT-hero-1.webp", type: "image" },
    { label: "Blade set", url: CDN_BASE + "WT-hero-2.webp", type: "image" },
    { label: "Close-up trimming", url: CDN_BASE + "lawnandweedtrimmer-presell_video_1v-optimized.mp4", type: "video", poster: HERO_VIDEO_POSTER },
    { label: "Runtime proof", url: CDN_BASE + "WT-hero-4.webp", type: "image" },
    { label: "Customer proof", url: CDN_BASE + "WT-hero-5.webp", type: "image" }
  ];

  var heroBadges = [
    { className: "cv-wr-hero-badge cv-wr-hero-badge-guarantee", url: CDN_BASE + "WT-90day_4ySTp54.png", alt: "90 day money-back guarantee" },
    { className: "cv-wr-hero-badge cv-wr-hero-badge-drop", url: CDN_BASE + "WT-price-drop-3x.jpg", alt: "Price drop" },
    { className: "cv-wr-hero-badge cv-wr-hero-badge-tested", url: CDN_BASE + "WT-tested-and-approved.png", alt: "Customer tested and approved" }
  ];

  var socialProofLogos = [
    CDN_BASE + "WT-usa-today-social.png",
    CDN_BASE + "WT-cbs-social.png",
    CDN_BASE + "WT-journal-social.png",
    CDN_BASE + "WT-forbes-social.png",
    CDN_BASE + "WT-fox-social.png",
    CDN_BASE + "WT-nbc-social.png",
    CDN_BASE + "WT-handyman-social.png"
  ];

  var benefitMedia = [
    { url: CDN_BASE + "WT-Cut-Overgrowth-optimized.mp4", type: "video", poster: CDN_BASE + "hero-video-frame.jpg" },
    { url: CDN_BASE + "WT-one-handed.webp", type: "image" },
    { url: CDN_BASE + "WT-Multi-use-Blades-optimized.mp4", type: "video", poster: CDN_BASE + "multi-use-frame.jpg" },
    { url: CDN_BASE + "WT-runtime.webp", type: "image" },
    { url: CDN_BASE + "WT-Safety-Demo-optimized.mp4", type: "video" }
  ];

  var benefits = [
    {
      title: "Cuts Through Overgrowth Fast",
      text: "The 18,000 RPM motor powers through thick grass, stubborn weeds, and messy yard growth so you can clean up your lawn in a fraction of the time.",
      proof: "I was shocked by how much power this little trimmer has. It went right through the thick weeds along my fence line and cleaned up the yard way faster than my old trimmer.",
      author: "James P., Verified Customer",
      label: "Video"
    },
    {
      title: "Lightweight One-Handed Control",
      text: "The compact body and anti-slip grip make it easy to carry, steer, and control with one hand, especially around edges, corners, and uneven spots.",
      proof: "Super light and easy to handle. I finished the whole backyard in half the time and didn’t feel worn out afterward like I usually do.",
      author: "Tina M., Verified Customer",
      label: "Video"
    },
    {
      title: "3 Blade Multi-Use Trimmer",
      text: "Your all-in-one yard tool. Switch between plastic blades for light lawn trimming, metal blades for tougher weeds, and the circular saw blade for small branches.",
      proof: "The different blades are what sold me. I used the plastic blade around the lawn edges, then cut branches with the metal one. It feels like three tools in one.",
      author: "Carlos V., Verified Customer",
      label: "Video",
      dark: true
    },
    {
      title: "24V Battery With Long Runtime",
      text: "No gas, fumes, or extension cords. The rechargeable 24V lithium battery gives you grab-and-go freedom around the yard, with up to 3-4 hours of trimming power per charge.",
      proof: "The battery life surprised me. I did the front yard, backyard, and fence line on one charge, then plugged it in when I was done.",
      author: "Paula D., Verified Customer",
      label: "Video"
    },
    {
      title: "Work Safer & Stay In Control",
      text: "Built with a safety lock, iron guardrail, protection dish, anti-slip grip, and heat protection so you can cut confidently without feeling like the tool is getting away from you.",
      proof: "It feels powerful but controlled. The guard and safety lock make me feel a lot more comfortable using it around the garden and along the walkway.",
      author: "Henry L., Verified Customer",
      label: "Video"
    }
  ];

  function asset(path) {
    if (/^https?:\/\//.test(path)) return path;
    return ASSET_BASE + path;
  }

  function preloadAsset(url, asType) {
    if (!url || !/^https?:\/\//.test(url)) return;
    if (document.querySelector('link[data-cv-wr-preload="' + url + '"]')) return;
    var link = document.createElement("link");
    link.rel = "preload";
    link.as = asType || "image";
    link.href = url;
    link.setAttribute("data-cv-wr-preload", url);
    if (/^https:\/\/cdn\.29next\.store/i.test(url)) {
      link.crossOrigin = "anonymous";
    }
    document.head.appendChild(link);
  }

  function primeCriticalAssets() {
    getCriticalHeroImageUrls().forEach(function (url) {
      preconnectOrigin(url);
      preloadAsset(url, "image");
    });
  }

  function primeHeroSecondaryAssets() {
    var urls = [];
    slides.slice(1).forEach(function (slide) {
      if (slide.type !== "video" && !/\.mp4(?:\?|$)/i.test(slide.url)) urls.push(slide.url);
      if (slide.poster) urls.push(slide.poster);
    });
    urls.filter(Boolean).forEach(function (url) {
      preconnectOrigin(url);
      preloadAsset(url, "image");
    });
  }

  function primeDeferredAssets() {
    var urls = [];
    urls.push(CDN_BASE + "WT-review-image-1.png");
    slides.slice(1).forEach(function (slide) {
      if (slide.type !== "video" && !/\.mp4(?:\?|$)/i.test(slide.url)) urls.push(slide.url);
      if (slide.poster) urls.push(slide.poster);
    });
    socialProofLogos.forEach(function (url) {
      urls.push(url);
    });
    benefitMedia.forEach(function (media) {
      if (media.type !== "video" && !/\.mp4(?:\?|$)/i.test(media.url)) urls.push(media.url);
      if (media.poster) urls.push(media.poster);
    });
    var load = function () {
      urls.filter(Boolean).forEach(function (url) {
        preloadAsset(url, "image");
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(load, { timeout: 1800 });
    } else {
      window.setTimeout(load, 900);
    }
  }



  function preconnectOrigin(url) {
    if (!url || !/^https?:\/\//.test(url)) return;
    var origin = url.replace(/^(https?:\/\/[^\/]+).*$/, "$1");
    if (document.querySelector('link[data-cv-wr-preconnect="' + origin + '"]')) return;
    var link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    link.setAttribute("data-cv-wr-preconnect", origin);
    document.head.appendChild(link);
  }

  function getCriticalHeroImageUrls() {
    var urls = [asset("logo.png"), CDN_BASE + "WT-review-image-1.png", CDN_BASE + "WT-US-flag.png"];
    var firstSlide = slides[0];
    if (firstSlide) {
      if (firstSlide.type !== "video" && !/\.mp4(?:\?|$)/i.test(firstSlide.url)) urls.push(firstSlide.url);
      if (firstSlide.poster) urls.push(firstSlide.poster);
    }
    heroBadges.forEach(function (badge) {
      if (badge.url) urls.push(badge.url);
    });
    return urls.filter(function (url, index, list) {
      return url && list.indexOf(url) === index;
    });
  }


  function fallbackImageUrl(url) {
    if (!url || !/\.webp(?:\?|$)/i.test(url)) return "";
    return url.replace(/\.webp(\?.*)?$/i, ".jpg$1");
  }

  function fallbackImageAttr(url) {
    var fallback = fallbackImageUrl(url);
    return fallback ? ' onerror="this.onerror=null;this.src=\'' + fallback + '\';"' : "";
  }

  function installImageFallbacks() {
    if (document.documentElement.getAttribute("data-cv-wr-image-fallbacks") === "true") return;
    document.documentElement.setAttribute("data-cv-wr-image-fallbacks", "true");
    document.addEventListener("error", function (event) {
      var img = event.target;
      if (!img || img.tagName !== "IMG") return;
      var fallback = fallbackImageUrl(img.currentSrc || img.src);
      if (!fallback || img.getAttribute("data-cv-wr-fallback-used") === "true") return;
      img.setAttribute("data-cv-wr-fallback-used", "true");
      img.src = fallback;
    }, true);
  }

  function decodeImageUrl(url) {
    return new Promise(function (resolve) {
      var img = new Image();
      var settled = false;
      var finish = function () {
        if (settled) return;
        settled = true;
        resolve();
      };
      img.onload = function () {
        if (img.decode) {
          img.decode().then(finish).catch(finish);
        } else {
          finish();
        }
      };
      img.onerror = function () {
        var fallback = fallbackImageUrl(img.src);
        if (fallback && img.src !== fallback) {
          img.src = fallback;
          return;
        }
        finish();
      };
      img.src = url;
      window.setTimeout(finish, 3500);
    });
  }

  function loadCriticalHeroAssets(callback) {
    var urls = getCriticalHeroImageUrls();
    urls.forEach(function (url) {
      preconnectOrigin(url);
      preloadAsset(url, "image");
    });
    if (!window.Promise) {
      callback();
      return;
    }
    Promise.all(urls.map(decodeImageUrl)).then(callback).catch(callback);
    window.setTimeout(callback, 3600);
  }

  function hideControlElementWhilePending(element) {
    if (!element || element.getAttribute("data-cv-wr-control-hidden") === "true") return;
    var rect = element.getBoundingClientRect();
    element.setAttribute("data-cv-wr-control-hidden", "true");
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
    element.style.transition = "none";
    if (rect.height > 0) {
      element.style.minHeight = Math.ceil(rect.height) + "px";
    }
  }

  function hideControlReplacementZoneWhilePending(hero, benefitsSection) {
    hideControlElementWhilePending(hero);
    hideControlElementWhilePending(benefitsSection);
    [".tsti-btm", ".sec2", ".sec3", ".sec7"].forEach(function (selector) {
      document.querySelectorAll(selector).forEach(hideControlElementWhilePending);
    });
  }

  function renderMedia(media, className, alt) {
    if (!media || !media.url) return "";
    if (media.type === "video" || /\.mp4(?:\?|$)/i.test(media.url)) {
      var poster = media.poster ? ' poster="' + media.poster + '"' : "";
      return '<video class="' + className + '" autoplay muted loop playsinline preload="none"' + poster + ' data-cv-video-src="' + media.url + '"></video>';
    }
    var priority = /cv-wr-main-media/.test(className) && !/cv-wr-lazy-media/.test(className) ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"';
    return '<img class="' + className + '" src="' + media.url + '" alt="' + (alt || "") + '" decoding="async"' + priority + fallbackImageAttr(media.url) + '>';
  }

  function renderHeroBadges() {
    return heroBadges.map(function (badge) {
      if (badge.svg) {
        return badge.svg.replace("<svg ", '<svg class="' + badge.className + '" ');
      }
      return '<img class="' + badge.className + '" src="' + badge.url + '" alt="' + badge.alt + '" loading="eager" decoding="async" fetchpriority="high"' + fallbackImageAttr(badge.url) + '>';
    }).join("");
  }

  function renderHeroMain(index) {
    var activeIndex = typeof index === "number" ? index : 0;
    return '<div class="cv-wr-media-placeholder cv-wr-media-filled" data-cv-wr-main data-cv-wr-active-slide="' + activeIndex + '">' + slides.map(function (slide, slideIndex) {
      return '<div class="cv-wr-main-slide' + (slideIndex === activeIndex ? " cv-wr-main-slide-active" : "") + '" data-cv-wr-main-slide="' + slideIndex + '">' + renderMedia(slide, slideIndex === 0 ? "cv-wr-main-media" : "cv-wr-main-media cv-wr-lazy-media", slide.label) + (slideIndex === 0 ? renderHeroBadges() : "") + '</div>';
    }).join("") + '</div>';
  }

  function renderHeroThumb(slide) {
    if (slide.type === "video" || /\.mp4(?:\?|$)/i.test(slide.url)) {
      var poster = slide.poster ? ' poster="' + slide.poster + '"' : "";
      return '<video class="cv-wr-thumb-media" muted playsinline preload="none"' + poster + ' data-cv-video-src="' + slide.url + '"></video>';
    }
    return '<img class="cv-wr-thumb-media" src="' + slide.url + '" alt="' + (slide.label || "") + '" loading="eager" decoding="async" fetchpriority="high"' + fallbackImageAttr(slide.url) + '>';
  }

  function renderFinalMedia() {
    return '<div class="cv-wr-final-placeholder cv-wr-media-filled">' + renderMedia(slides[0], "cv-wr-main-media cv-wr-lazy-media", "Wood Ranger trimmer") + renderHeroBadges() + '</div>';
  }

  function ctaIconMarkup() {
    return '<svg class="cv-wr-cta-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" focusable="false"><circle cx="13" cy="13" r="13" fill="#C8A705"/><path d="M12.8728 8.28966L14.3333 6.8418L20.5266 13.0074L14.3179 19.1576L12.8599 17.7072L16.7023 13.9094L6.18401 14.0299L6.1582 11.9798L16.4494 11.8619L12.8728 8.28966Z" fill="white"/></svg>';
  }

  function getShipDate(days) {
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date();
    date.setDate(date.getDate() + days);
    return monthNames[date.getMonth()] + " " + date.getDate();
  }

  function ctaTrustMarkup() {
    return [
      '<div class="cv-wr-cta-bottom">',
        '<div class="cv-wr-cta-ship" aria-hidden="true"></div>',
        '<div class="cv-wr-cta-text">Ship by <span class="cv-wr-ship-date">' + getShipDate(1) + '</span> <span>|</span> Stock Levels</div>',
        '<div class="cv-wr-cta-stock-view" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>',
        '<div class="cv-wr-cta-stock-level">LOW</div>',
      '</div>'
    ].join("");
  }

  function ctaOriginMarkup() {
    return '<p class="cv-wr-cta-origin">🇺🇸 Ships From Ohio, USA</p>';
  }

  function ctaMarkup(includeOrigin) {
    var showOrigin = includeOrigin !== false;
    return (showOrigin ? ctaOriginMarkup() : '') + '<a href="#" class="cv-wr-cta go-to-offer"><span>Order Now & Save 50% Off</span>' + ctaIconMarkup() + '</a>' + ctaTrustMarkup();
  }

  function mobileStickyCtaMarkup() {
    return [
      '<a href="#" class="cv-wr-sticky-cta go-to-offer"><span>Order Now & Save 50% Off</span>' + ctaIconMarkup() + '</a>',
      ctaTrustMarkup()
    ].join("");
  }

  function waitForTargets(callback) {
    var done = false;
    var observer = null;
    var timeout = null;

    function check() {
      if (done) return;
      var hero = document.querySelector(".sec1");
      var benefitsSection = document.querySelector(".sec6#benefits, #benefits.sec6");

      if (hero && benefitsSection) {
        done = true;
        if (observer) observer.disconnect();
        if (timeout) window.clearTimeout(timeout);
        callback(hero, benefitsSection);
      }
    }

    check();
    if (done) return;

    observer = new MutationObserver(check);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", check, { once: true });
    }

    timeout = window.setTimeout(function () {
      if (observer) observer.disconnect();
    }, 10000);
  }

  function renderHeader() {
    return [
      '<header class="cv-wr-header">',
        '<div class="container">',
          '<div class="cv-wr-header-inner">',
            '<img class="cv-wr-logo" src="' + asset("logo.png") + '" alt="Wood Ranger">',
            '<nav class="cv-wr-menu" aria-label="Primary">',
              '<a href="#features">Features</a>',
              '<a href="#comparison">Comparison</a>',
              '<a href="#reviews">Reviews</a>',
            '</nav>',
            '<a href="#" class="cv-wr-header-cta go-to-offer">Order Now</a>',
            '<span class="cv-wr-flag" aria-hidden="true"></span>',
            '<button class="cv-wr-mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>',
          '</div>',
        '</div>',
      '</header>'
    ].join("");
  }

  function renderPromoBanner() {
    return [
      '<div class="cv-wr-promo-banner" role="region" aria-label="Promotional offer">',
        '<span>GET UP TO 54% OFF NOW!</span>',
        '<span>USE PROMO CODE:</span>',
        '<strong>BUZZ26</strong>',
        '<span>- ENDS AT MIDNIGHT</span>',
      '</div>'
    ].join("");
  }

  function renderHero() {
    return [
      '<section class="cv-wr-hero" data-cv-wr-section="hero">',
        '<div class="container">',
          '<div class="cv-wr-hero-grid">',
            '<div class="cv-wr-gallery" data-cv-wr-gallery>',
              '<div class="cv-wr-gallery-main">',
                renderHeroMain(0),
                '<button class="cv-wr-nav cv-wr-prev" type="button" aria-label="Previous image">&#8249;</button>',
                '<button class="cv-wr-nav cv-wr-next" type="button" aria-label="Next image">&#8250;</button>',
              '</div>',
              '<div class="cv-wr-thumbs" role="tablist" aria-label="Product images">',
                slides.map(function (slide, index) {
                  return '<button class="cv-wr-thumb" type="button" role="tab" aria-selected="' + (index === 0 ? "true" : "false") + '" data-cv-wr-slide="' + index + '">' + renderHeroThumb(slide) + '<span>' + slide.label + '</span></button>';
                }).join(""),
              '</div>',
            '</div>',
            '<div class="cv-wr-hero-copy">',
              '<div class="cv-wr-rating"><span class="cv-wr-stars">★★★★★</span><span>15,321+ | 5-Star Reviews</span></div>',
              '<h1>Cut, Edge &amp; Trim <span>5x Faster</span><br>With Only One Tool</h1>',
              '<p class="cv-wr-subhead">Power through grass, weeds, brush, and small branches with this lightweight all-in-one trimmer</p>',
              '<ul class="cv-wr-checks">',
                '<li>Slice through thick overgrowth</li>',
                '<li>Ultra-light design saves your shoulders</li>',
                '<li>Swap blades in seconds</li>',
                '<li>Up to 4 hours of cordless cutting power</li>',
                '<li>Safe, easy, one-handed operation</li>',
              '</ul>',
              ctaMarkup(false),
              '<div class="cv-wr-mini-review">',
                '<img class="cv-wr-avatar" src="' + CDN_BASE + 'WT-review-image-1.png" alt="Steve M.">',
                '<div><div class="cv-wr-stars">★★★★★</div><p>The best trimmer I’ve owned. I’ve got bad shoulders and usually have issues. But this trimmer is light, easy to use, and didn’t bother my shoulders once. Great quality.</p><strong>Steve M., Verified Customer</strong></div>',
              '</div>',
            '</div>',
          '</div>',
          '<div class="cv-wr-seen"><p>As Seen On:</p><div class="cv-wr-logos">' + socialProofLogos.concat(socialProofLogos).map(function (url, index) { return '<span' + (index >= socialProofLogos.length ? ' aria-hidden="true"' : '') + '><img src="' + url + '" alt=""></span>'; }).join("") + '</div></div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderBenefitMedia(item, index) {
    return renderMedia(benefitMedia[index], "cv-wr-benefit-media-asset", item.title);
  }

  function renderBenefits() {
    return [
      '<section class="cv-wr-benefits" id="benefits" data-cv-wr-section="benefits">',
        '<div class="container">',
          '<div class="cv-wr-benefit-head">',
            '<h2>Powerful Cutting Without <br class="cv-wr-benefit-head-break">The Heavy Lifting</h2>',
            '<p>While bulky gas trimmers are tiring to carry and control, Wood Ranger gives you fast cutting power in a lightweight cordless tool built for everyday yard work.</p>',
          '</div>',
          benefits.map(function (item, index) {
            return [
              '<article class="cv-wr-benefit-row' + (item.dark ? " cv-wr-benefit-dark" : "") + ((index === 0 || index === 4) ? " cv-wr-benefit-reverse" : "") + '">',
                '<h3 class="cv-wr-benefit-mobile-title">' + item.title + '</h3>',
                '<div class="cv-wr-benefit-media">' + renderBenefitMedia(item, index) + '</div>',
                '<div class="cv-wr-benefit-copy">',
                  '<h3>' + item.title + '</h3>',
                  '<p>' + item.text + '</p>',
                  '<div class="cv-wr-proof"><div class="cv-wr-proof-stars">★★★★★</div><p>' + item.proof + '</p><strong>' + item.author + '</strong></div>',
                '</div>',
              '</article>'
            ].join("");
          }).join(""),
          '<div class="cv-wr-benefit-cta">' + ctaMarkup() + '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderMiddleSections() {
    var jobs = [
      [CDN_BASE + "WT-fencelines.webp", "Fence Lines", "Cut thick weeds and overgrowth along fences without fighting a heavy gas trimmer."],
      [CDN_BASE + "WT-flower-beds.webp", "Garden Beds", "Trim around flowers, shrubs, and tight edges with better control and less risk of tearing up the area."],
      [CDN_BASE + "WT-edges.webp", "Walkways", "Clean up grass spilling over paths, pavers, and driveway edges so the whole yard looks sharper."],
      [CDN_BASE + "WT-branches.webp", "Branches", "Swap to the circular blade when weeds turn woody or small branches start getting in the way."],
      [CDN_BASE + "WT-bushes.webp", "Bushes", "Cut back overgrown bushes, tidy up shrubs, and clear messy growth around the yard without switching tools."],
      [CDN_BASE + "WT-lawn.webp", "Lawns", "Mow grass and keep your yard looking neat without dragging out bulky equipment."]
    ];

    return [
      '<section class="cv-wr-job-section">',
        '<div class="container">',
          '<h2>One Tool. Every Yard Job <span class="cv-wr-nowrap">You’ve<br class="cv-wr-desktop-break"> Been Putting Off.</span></h2>',
          '<div class="cv-wr-job-grid">',
            '<div class="cv-wr-job-track">',
            jobs.concat(jobs, jobs, jobs).map(function (job, index) {
              return '<article class="cv-wr-job-card' + (index >= jobs.length ? ' cv-wr-job-card-duplicate' : '') + '"' + (index >= jobs.length ? ' aria-hidden="true"' : '') + '><img src="' + asset(job[0]) + '" alt=""><div><h3>' + job[1] + '</h3><p>' + job[2] + '</p></div></article>';
            }).join(""),
            '</div>',
          '</div>',
          '<div class="cv-wr-job-dots" aria-hidden="true"><span class="cv-wr-job-dot cv-wr-job-dot-active"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span></div>',
        '</div>',
      '</section>',
      '<section class="cv-wr-comparison" id="comparison">',
        '<div class="container">',
          '<h2>Why Traditional Weed Whackers <br class="cv-wr-comparison-head-break">Are A Thing Of The Past</h2>',
          '<p class="cv-wr-comparison-sub">Bulky gas and corded trimmers are heavy, loud, and frustrating to set up. Wood Ranger is light, cordless, and ready for the yard jobs you usually avoid.</p>',
          '<div class="cv-wr-compare-grid">',
            '<article><div class="cv-wr-compare-img"><img src="' + CDN_BASE + 'WT-comp-1.webp" alt=""><span class="cv-wr-good">✓</span></div><h3>Wood Ranger Trimmer</h3><ul><li>Lightweight one-hand control</li><li>Grab & Go cordless lithium power</li><li>3-in-1 multi-use trimmer</li><li>Adjustable handle and length</li><li>Safety lock, guardrail, and protection dish</li></ul></article>',
            '<div class="cv-wr-vs">VS</div>',
            '<article><div class="cv-wr-compare-img"><img src="' + CDN_BASE + 'WT-comp-2.webp" alt=""><span class="cv-wr-bad">×</span></div><h3>Traditional Weed Whackers</h3><ul><li>Heavy, awkward, and tiring to carry</li><li>Tangled in cords or dealing with gas</li><li>Limited to basic grass and weeds</li><li>Awkward around edges and tight spots</li><li>Harder to control around delicate areas</li></ul></article>',
          '</div>',
          '<div class="cv-wr-benefit-cta">' + ctaMarkup() + '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderFinalCtaSection() {
    return [
      '<section class="cv-wr-final-cta" id="cv-wr-final-cta">',
        '<div class="cv-wr-final-container">',
          '<div class="cv-wr-final-grid">',
            '<div class="cv-wr-final-media">',
              renderFinalMedia(),
            '</div>',
            '<div class="cv-wr-final-copy">',
              '<div class="cv-wr-rating"><span class="cv-wr-stars">★★★★★</span><span>27,517+ 5-Star Reviews</span></div>',
              '<h2>Don’t Miss Out On This Limited-Time Offer. <span>Order Now</span></h2>',
              '<div class="cv-wr-final-mobile-media">' + renderFinalMedia() + '</div>',
              '<ul class="cv-wr-checks">',
                '<li>Fast 2-3 shipping from our US Warehouse</li>',
                '<li>90 Day Back Guarantee</li>',
                '<li>Top-Notch Support Team</li>',
              '</ul>',
              '<p class="cv-wr-final-ship">🇺🇸 Ships From Ohio, USA</p>',
              '<div class="cv-wr-final-action">' + ctaMarkup(false) + '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function insertFinalCtaSection() {
    var reviewsSection = document.querySelector("#reviews, .sec9");
    var faqSection = document.querySelector("#faq, .sec10");
    if (!reviewsSection || !faqSection) return;
    document.querySelectorAll(".cv-wr-final-cta").forEach(function (section) {
      section.remove();
    });
    var finalWrap = document.createElement("div");
    finalWrap.innerHTML = renderFinalCtaSection();
    faqSection.insertAdjacentElement("beforebegin", finalWrap.firstElementChild);
  }

  function normalizeCheckoutHref(href) {
    try {
      var base = window.location.origin && window.location.origin !== "null"
        ? window.location.origin
        : "https://offer.woodrangertools.com";
      var checkoutUrl = new URL(href || CHECKOUT_PATH, base);
      checkoutUrl.pathname = CHECKOUT_PATH;
      if (!checkoutUrl.search && window.location.search) {
        checkoutUrl.search = window.location.search;
      }
      return checkoutUrl.toString();
    } catch (error) {
      return CHECKOUT_PATH + window.location.search;
    }
  }

  function syncOfferLinks(root) {
    var href = "";

    if (window.campaign) {
      if (typeof window.campaign.captureURLParams === "function") {
        window.campaign.captureURLParams();
      }
      if (typeof window.campaign.getSuccessUrl === "function") {
        href = window.campaign.getSuccessUrl(CHECKOUT_PATH);
      }
    }

    if (!href) {
      var links = Array.prototype.slice.call(document.querySelectorAll(".go-to-offer[href]"));
      links.some(function (link) {
        var candidate = link.getAttribute("href");
        if (!candidate || candidate === "#" || candidate.charAt(0) === "#") return false;
        href = candidate;
        return true;
      });
    }

    if (!href) {
      try {
        var checkoutUrl = window.location.origin && window.location.origin !== "null"
          ? new URL(CHECKOUT_PATH, window.location.origin)
          : new URL(CHECKOUT_PATH, "https://offer.woodrangertools.com");
        checkoutUrl.search = window.location.search;
        href = checkoutUrl.toString();
      } catch (error) {
        href = CHECKOUT_PATH + window.location.search;
      }
    }

    href = normalizeCheckoutHref(href);

    (root || document).querySelectorAll(".go-to-offer").forEach(function (link) {
      link.setAttribute("href", href);
    });
  }

  function initCarousel(root) {
    var gallery = root.querySelector("[data-cv-wr-gallery]");
    if (!gallery || gallery.getAttribute("data-cv-bound") === "true") return;
    gallery.setAttribute("data-cv-bound", "true");

    var main = gallery.querySelector("[data-cv-wr-main]");
    var thumbs = Array.prototype.slice.call(gallery.querySelectorAll("[data-cv-wr-slide]"));
    var mainSlides = Array.prototype.slice.call(gallery.querySelectorAll("[data-cv-wr-main-slide]"));
    var index = 0;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      var label = slides[index].label;
      mainSlides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === index;
        slide.classList.toggle("cv-wr-main-slide-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      main.setAttribute("data-cv-wr-active-slide", String(index));
      main.setAttribute("aria-label", label);
      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.setAttribute("aria-selected", thumbIndex === index ? "true" : "false");
      });
      hydrateDeferredVideos(mainSlides[index]);
    }

    gallery.querySelector(".cv-wr-prev").addEventListener("click", function () {
      show(index - 1);
    });

    gallery.querySelector(".cv-wr-next").addEventListener("click", function () {
      show(index + 1);
    });

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        show(Number(thumb.getAttribute("data-cv-wr-slide")));
      });
    });

    var touchStartX = 0;
    var touchStartY = 0;
    var isSwiping = false;
    var mobileSwipeQuery = window.matchMedia("(max-width: 600px)");

    main.addEventListener("touchstart", function (event) {
      if (!mobileSwipeQuery.matches || !event.touches || event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    main.addEventListener("touchend", function (event) {
      if (!isSwiping || !mobileSwipeQuery.matches || !event.changedTouches || event.changedTouches.length !== 1) return;
      var deltaX = event.changedTouches[0].clientX - touchStartX;
      var deltaY = event.changedTouches[0].clientY - touchStartY;
      isSwiping = false;
      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
      show(index + (deltaX < 0 ? 1 : -1));
    }, { passive: true });
  }

  function initJobDots(root) {
    (root || document).querySelectorAll(".cv-wr-job-section").forEach(function (section) {
      if (section.getAttribute("data-cv-wr-job-dots") === "true") return;
      var grid = section.querySelector(".cv-wr-job-grid");
      var dots = Array.prototype.slice.call(section.querySelectorAll(".cv-wr-job-dot"));
      if (!grid || !dots.length) return;
      section.setAttribute("data-cv-wr-job-dots", "true");

      function update() {
        var firstCard = grid.querySelector(".cv-wr-job-card:not(.cv-wr-job-card-duplicate)");
        var cardStep = firstCard ? firstCard.getBoundingClientRect().width + parseFloat(window.getComputedStyle(section.querySelector(".cv-wr-job-track")).columnGap || "0") : grid.clientWidth;
        var active = Math.round(grid.scrollLeft / Math.max(1, cardStep));
        active = Math.max(0, Math.min(dots.length - 1, active));
        dots.forEach(function (dot, index) {
          dot.classList.toggle("cv-wr-job-dot-active", index === active);
        });
      }

      grid.addEventListener("scroll", function () {
        window.requestAnimationFrame(update);
      }, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  function hydrateDeferredVideos(root) {
    (root || document).querySelectorAll("video[data-cv-video-src]").forEach(function (video) {
      var src = video.getAttribute("data-cv-video-src");
      if (!src) return;
      video.removeAttribute("data-cv-video-src");
      var source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();
      if (video.autoplay) {
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {});
        }
      }
    });
  }

  function hydrateVisibleDeferredVideos() {
    var videos = Array.prototype.slice.call(document.querySelectorAll("video[data-cv-video-src]"));
    if (!videos.length) return;

    if (!("IntersectionObserver" in window)) {
      hydrateDeferredVideos(document);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        hydrateDeferredVideos(entry.target.parentNode || entry.target);
      });
    }, { rootMargin: "900px 0px", threshold: 0.01 });

    videos.forEach(function (video) {
      observer.observe(video);
    });
  }

  function hydrateVideosAfterImages() {
    var scheduled = false;

    function run() {
      if (scheduled) return;
      scheduled = true;
      var hydrate = function () {
        window.setTimeout(function () {
          hydrateDeferredVideos(document);
        }, 350);
      };
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(hydrate, { timeout: 900 });
      } else {
        window.setTimeout(hydrate, 350);
      }
    }

    hydrateVisibleDeferredVideos();

    var images = Array.prototype.slice.call(document.images).filter(function (img) {
      return !img.complete || img.naturalWidth === 0;
    });
    if (!images.length) {
      run();
      return;
    }

    var remaining = images.length;
    var done = function () {
      remaining -= 1;
      if (remaining <= 0) run();
    };
    images.forEach(function (img) {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
    window.setTimeout(run, 6000);
  }

  function initMobileHeader(header) {
    var toggle = header.querySelector(".cv-wr-mobile-toggle");
    var menu = header.querySelector(".cv-wr-menu");
    if (!toggle || !menu || header.getAttribute("data-cv-mobile-bound") === "true") return;
    header.setAttribute("data-cv-mobile-bound", "true");

    function closeMenu() {
      header.classList.remove("cv-wr-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("cv-wr-menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        var target = targetId && targetId.charAt(0) === "#" ? document.querySelector(targetId) : null;
        event.preventDefault();
        menu.querySelectorAll("a").forEach(function (item) {
          item.removeAttribute("aria-current");
        });
        link.setAttribute("aria-current", "page");
        closeMenu();
        if (target) {
          window.scrollTo({
            top: Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight),
            behavior: "smooth"
          });
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!header.classList.contains("cv-wr-menu-open")) return;
      if (header.contains(event.target)) return;
      closeMenu();
    });
  }

  function initHeaderStickiness(header, promo) {
    if (!header || !promo || header.getAttribute("data-cv-header-sticky-bound") === "true") return;
    header.setAttribute("data-cv-header-sticky-bound", "true");

    var spacer = document.createElement("div");
    spacer.className = "cv-wr-header-spacer";
    header.insertAdjacentElement("afterend", spacer);

    function updateHeaderPosition() {
      var shouldFix = window.pageYOffset >= promo.offsetHeight;
      var headerHeight = header.offsetHeight;
      header.classList.toggle("cv-wr-header-fixed", shouldFix);
      spacer.style.height = shouldFix ? headerHeight + "px" : "0px";
    }

    var ticking = false;
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        updateHeaderPosition();
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateHeaderPosition();
  }

  function replaceControlCtas(root) {
    root.querySelectorAll("#reviews > .container > .btn-bx, .sec9 > .container > .btn-bx, #reviews .cv-wr-control-cta-replacement, .sec9 .cv-wr-control-cta-replacement").forEach(function (box) {
      box.remove();
    });
    root.querySelectorAll(".sec4 > .container > .btn-bx, .sec8 > .container > .btn-bx, #faq > .container > .btn-bx, .sec10 > .container > .btn-bx").forEach(function (box) {
      box.className = "cv-wr-benefit-cta cv-wr-control-cta-replacement";
      box.innerHTML = ctaMarkup();
    });
  }

  function replaceMobileStickyCta(root) {
    var sticky = root.querySelector("#ctabtn-mob");
    if (!sticky || sticky.getAttribute("data-cv-sticky-replaced") === "true") return;
    sticky.setAttribute("data-cv-sticky-replaced", "true");
    sticky.className = "btn-bx show-mob cv-wr-sticky-footer";
    sticky.innerHTML = mobileStickyCtaMarkup();
    sticky.style.display = "none";
  }

  function initStickyCtaVisibility() {
    var sticky = document.querySelector("#ctabtn-mob.cv-wr-sticky-footer, .cv-wr-sticky-footer");
    if (!sticky) return;
    var mobileQuery = window.matchMedia("(max-width: 768px)");

    function getPageCtas() {
      return Array.prototype.slice.call(document.querySelectorAll(".cv-wr-cta.go-to-offer")).filter(function (cta) {
        return !cta.closest("#ctabtn-mob") && !cta.closest(".cv-wr-sticky-footer") && !cta.closest(".cv-wr-header");
      });
    }

    function isVisible(el) {
      var rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    }

    function updateSticky() {
      if (!mobileQuery.matches) {
        sticky.style.display = "none";
        return;
      }

      var heroCta = document.querySelector(".cv-wr-hero-copy > .cv-wr-cta.go-to-offer");
      if (!heroCta || heroCta.getBoundingClientRect().bottom > 0) {
        sticky.style.display = "none";
        return;
      }

      sticky.style.display = getPageCtas().some(isVisible) ? "none" : "";
    }

    window.cvWrUpdateStickyVisibility = updateSticky;
    if (document.documentElement.getAttribute("data-cv-sticky-visibility-bound") === "true") {
      updateSticky();
      return;
    }

    document.documentElement.setAttribute("data-cv-sticky-visibility-bound", "true");
    var ticking = false;
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        updateSticky();
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", requestUpdate);
    } else if (mobileQuery.addListener) {
      mobileQuery.addListener(requestUpdate);
    }
    updateSticky();
  }

  function injectControlFontOverrides() {
    if (document.getElementById("cv-wr-control-font-overrides")) return;
    var style = document.createElement("style");
    style.id = "cv-wr-control-font-overrides";
    style.textContent = [
      ".cv-woodranger-hero-benefits .sec4, .cv-woodranger-hero-benefits .sec4 *,",
      ".cv-woodranger-hero-benefits .sec8, .cv-woodranger-hero-benefits .sec8 *,",
      ".cv-woodranger-hero-benefits .sec9, .cv-woodranger-hero-benefits .sec9 *,",
      ".cv-woodranger-hero-benefits .sec10, .cv-woodranger-hero-benefits .sec10 *,",
      ".cv-woodranger-hero-benefits #reviews, .cv-woodranger-hero-benefits #reviews *,",
      ".cv-woodranger-hero-benefits #faq, .cv-woodranger-hero-benefits #faq *,",
      ".cv-woodranger-hero-benefits .footer, .cv-woodranger-hero-benefits .footer * { font-family: Inter, Helvetica, sans-serif !important; }",
      ".cv-woodranger-hero-benefits .sec4 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec4 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec8 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec8 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec9 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec9 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec10 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec10 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits #reviews :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits #reviews :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits #faq :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits #faq :is(h1,h2,h3,h4,h5,h6,.commn-hdg) * { font-family: Barlow, Inter, Helvetica, sans-serif !important; }",
      ".cv-woodranger-hero-benefits .cv-wr-header-cta, .cv-woodranger-hero-benefits .cv-wr-header-cta *,",
      ".cv-woodranger-hero-benefits .cv-wr-cta, .cv-woodranger-hero-benefits .cv-wr-cta *,",
      ".cv-woodranger-hero-benefits .cv-wr-cta-bottom, .cv-woodranger-hero-benefits .cv-wr-cta-bottom *,",
      ".cv-woodranger-hero-benefits .cv-wr-sticky-cta, .cv-woodranger-hero-benefits .cv-wr-sticky-cta *,",
      ".cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta, .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta *,",
      ".cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom, .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom * { font-family: Roboto, Inter, Helvetica, sans-serif !important; }",
      "@media (max-width: 600px) { .cv-woodranger-hero-benefits #features .commn-para, .cv-woodranger-hero-benefits .sec4 .commn-para { font-size: 16px !important; line-height: 1.45 !important; } .cv-woodranger-hero-benefits .sec8 .incld-txt span { font-size: 18px !important; } }"
    ].join("");
    document.head.appendChild(style);
  }

  function renderReviewStars(count) {
    var active = Math.max(0, Math.min(5, Number(count) || 5));
    var stars = [];
    for (var i = 1; i <= 5; i += 1) {
      stars.push('<span class="' + (i <= active ? 'is-on' : 'is-off') + '">★</span>');
    }
    return '<span class="cv-wr-review-stars cv-wr-review-stars-' + active + '" aria-label="' + active + ' out of 5 stars">' + stars.join("") + '</span>';
  }

  function replaceStarImage(img, count) {
    if (!img || img.getAttribute("data-cv-wr-star-replaced") === "true") return;
    var wrap = document.createElement("span");
    wrap.innerHTML = renderReviewStars(count);
    img.setAttribute("data-cv-wr-star-replaced", "true");
    img.replaceWith(wrap.firstElementChild);
  }

  function upgradeReviewStars() {
    document.querySelectorAll("#reviews, .sec9").forEach(function (reviews) {
      reviews.querySelectorAll(".star-review-col-1 img").forEach(function (img) {
        replaceStarImage(img, 5);
      });
      reviews.querySelectorAll(".star-review-col-1").forEach(function (col) {
        var stars = col.querySelector(".cv-wr-review-stars");
        var score = Array.from(col.children).find(function (child) {
          return child !== stars && /4\.8\s*out\s*of\s*5/i.test(child.textContent || "");
        });
        var based = Array.from(col.childNodes).find(function (node) {
          return /Based\s+On/i.test(node.textContent || "");
        });
        col.querySelectorAll("br").forEach(function (br) {
          br.remove();
        });
        if (based && !col.querySelector(".cv-wr-rating-based")) {
          var basedEl = based.nodeType === 3 ? document.createElement("span") : based;
          basedEl.textContent = (based.textContent || "").trim();
          basedEl.classList.add("cv-wr-rating-based");
          if (based.nodeType === 3) col.replaceChild(basedEl, based);
        }
        if (score && stars) {
          score.classList.add("cv-wr-rating-score");
          col.insertBefore(score, stars);
        }
      });
      reviews.querySelectorAll(".rating-vals li").forEach(function (row, index) {
        var img = row.querySelector("img");
        replaceStarImage(img, 5 - index);
      });
      reviews.querySelectorAll("img.testi-star, .testi-cont img[src*='star']").forEach(function (img) {
        replaceStarImage(img, 5);
      });
    });
  }

  function renderExperiment(hero, benefitsSection) {
    document.documentElement.classList.add(EXPERIMENT_CLASS);
    document.documentElement.setAttribute("data-" + INIT_FLAG, "true");

    var benefitsWrap = document.createElement("div");
    benefitsWrap.innerHTML = renderBenefits();
    var newBenefits = benefitsWrap.firstElementChild;

    var middleWrap = document.createElement("div");
    middleWrap.innerHTML = renderMiddleSections();

    var headerWrap = document.createElement("div");
    headerWrap.innerHTML = renderHeader();
    var newHeader = headerWrap.firstElementChild;

    var promoWrap = document.createElement("div");
    promoWrap.innerHTML = renderPromoBanner();
    var newPromo = promoWrap.firstElementChild;

    var heroWrap = document.createElement("div");
    heroWrap.innerHTML = renderHero();
    var newHero = heroWrap.firstElementChild;
    hero.replaceWith(newHero);
    newHero.insertAdjacentElement("beforebegin", newHeader);
    newHeader.insertAdjacentElement("beforebegin", newPromo);
    newHero.insertAdjacentElement("afterend", newBenefits);
    Array.prototype.slice.call(middleWrap.children).reverse().forEach(function (section) {
      var featureSection = document.querySelector(".sec4");
      (featureSection || newBenefits).insertAdjacentElement("afterend", section);
    });
    benefitsSection.remove();
    [".tsti-btm", ".sec2", ".sec3", ".sec7"].forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (section) {
        section.remove();
      });
    });

    replaceControlCtas(document);
    insertFinalCtaSection();
    upgradeReviewStars();
    setTimeout(upgradeReviewStars, 100);
    setTimeout(upgradeReviewStars, 500);
    replaceMobileStickyCta(document);
    syncOfferLinks(document);
    initStickyCtaVisibility();
    injectControlFontOverrides();
    initCarousel(newHero);
    initJobDots(document);
    initMobileHeader(newHeader);
    initHeaderStickiness(newHeader, newPromo);
    hydrateVideosAfterImages();
    primeDeferredAssets();

    window.setTimeout(function () {
      replaceControlCtas(document);
      insertFinalCtaSection();
      replaceMobileStickyCta(document);
      syncOfferLinks(document);
      initStickyCtaVisibility();
      injectControlFontOverrides();
      initJobDots(document);
    }, 600);
  }


  function apply(hero, benefitsSection) {
    var state = document.documentElement.getAttribute("data-" + INIT_FLAG);
    if (state === "true" || state === "pending") return;
    document.documentElement.setAttribute("data-" + INIT_FLAG, "pending");
    installImageFallbacks();
    hideControlReplacementZoneWhilePending(hero, benefitsSection);
    primeHeroSecondaryAssets();
    loadCriticalHeroAssets(function () {
      if (document.documentElement.getAttribute("data-" + INIT_FLAG) === "true") return;
      renderExperiment(hero, benefitsSection);
    });
  }

  primeCriticalAssets();
  waitForTargets(apply);
})();
}}},{"id":1001112475,"type":"richStructure","data":{"js":function(convertContext){ 
 Object.assign(convert.T, typeof convertContext !== "undefined" ? convertContext : {}); return convert.T.applyChange('.cv-wr-promo-banner > span:nth-child(1)', {"originalSelector":".cv-wr-promo-banner > span:nth-child(1)","outerHtml":"<span>GET 50% OFF NOW!</span>","insertHtml":{},"styles":"{}"}, undefined, 1001112475); 
},"selector":".cv-wr-promo-banner > span:nth-child(1)","json":"{\"selector\":\".cv-wr-promo-banner > span:nth-child(1)\",\"fields\":{},\"outerHtml\":\"<span>GET 50% OFF NOW!<\/span>\",\"tags\":[],\"elementId\":\"\",\"parentSelectors\":[\".cv-wr-promo-banner\",\".overflow\",\"body\"],\"lastChange\":{\"name\":\"CRO Team\",\"timestamp\":1780945020},\"id\":1001112475,\"modified\":1780945024267,\"matchingElements\":1}"}}],"traffic_allocation":49.9999},{"id":"1001219825","name":"Variation 2 - V1 Copy (w\/o hero carousel)","key":"1001219825-variation-2","status":"running","changes":[{"id":1001111111,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001111110,"type":"customCode","data":{"css":"@import url(\"https:\/\/fonts.googleapis.com\/css2?family=Barlow:wght@600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap\");\n\n.cv-woodranger-hero-benefits .cv-wr-hero,\n.cv-woodranger-hero-benefits .cv-wr-header,\n.cv-woodranger-hero-benefits .cv-wr-promo-banner,\n.cv-woodranger-hero-benefits .cv-wr-benefits {\n  font-family: Inter, Helvetica, sans-serif;\n  color: #111;\n  background: #fff;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .top-fix-bar,\n.cv-woodranger-hero-benefits .top-strip,\n.cv-woodranger-hero-benefits .header,\n.cv-woodranger-hero-benefits promo-banner {\n  display: none !important;\n}\n\nhtml.cv-woodranger-hero-benefits body > .overflow {\n  overflow: visible !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero * ,\n.cv-woodranger-hero-benefits .cv-wr-header * ,\n.cv-woodranger-hero-benefits .cv-wr-benefits * {\n  box-sizing: border-box;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero .container,\n.cv-woodranger-hero-benefits .cv-wr-header .container,\n.cv-woodranger-hero-benefits .cv-wr-benefits .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header {\n  position: relative;\n  top: auto;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  background: #fff;\n  border-bottom: 1px solid #e9e9e9;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header.cv-wr-header-fixed {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-spacer {\n  display: block;\n  height: 0;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-promo-banner {\n  position: relative;\n  z-index: 10000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 44px;\n  min-height: 44px;\n  padding: 0 16px;\n  background: #b7f4a8;\n  color: #101010;\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n  font-size: 16px;\n  line-height: 1.2;\n  font-weight: 700;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-promo-banner strong {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 22px;\n  padding: 8px 11px;\n  border-radius: 7px;\n  background: #111;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1;\n  font-weight: 900;\n  letter-spacing: .02em;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-inner {\n  min-height: 78px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logo {\n  width: 217px;\n  height: auto;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-menu {\n  display: flex;\n  align-items: center;\n  gap: 29px;\n  margin-left: auto;\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-menu a {\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  color: #111;\n  text-decoration: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  min-height: 44px;\n  padding: 0 28px;\n  border-radius: 8px;\n  background: #ffdc32;\n  color: #111 !important;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 900;\n  text-decoration: none;\n  border: 1px solid #d4b000;\n  box-shadow: 0 3px 0 0 #dedede;\n  text-shadow: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-header-cta,\n.cv-woodranger-hero-benefits .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-cta *,\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom *,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta *,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta *,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom * {\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-flag {\n  width: 28px;\n  height: 18px;\n  background: url(\"https:\/\/cdn.29next.store\/media\/woodranger\/uploads\/WT-US-flag.png\") center \/ contain no-repeat;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mobile-toggle {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero {\n  padding: 32px 0 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-grid {\n  display: grid;\n  grid-template-columns: 530px minmax(0, 1fr);\n  gap: 49px;\n  align-items: start;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-gallery-main {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid #d9d9d9;\n  background: #f3f5ee;\n  aspect-ratio: 530 \/ 490;\n  touch-action: pan-y;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-gallery-main * {\n  touch-action: pan-y;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-media-placeholder {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  color: #777;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-media-filled {\n  position: relative;\n  display: block;\n  background: #fff;\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  letter-spacing: 0;\n  text-transform: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-slide {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-slide-active {\n  z-index: 2;\n  opacity: 1;\n  visibility: visible;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-main-media,\n.cv-woodranger-hero-benefits .cv-wr-benefit-media-asset {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits video.cv-wr-main-media {\n  box-sizing: border-box;\n  padding: 100px 0;\n  background: #0F1013;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb-media {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits video.cv-wr-thumb-media {\n  box-sizing: border-box;\n  padding: 18px 0;\n  background: #0F1013;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge {\n  position: absolute;\n  z-index: 3;\n  display: block;\n  height: auto;\n  pointer-events: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-guarantee {\n  left: 17px;\n  top: 18px;\n  width: 88px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-drop {\n  left: 19px;\n  top: 128px;\n  width: 56px;\n  border-radius: 4px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-badge-tested {\n  right: 18px;\n  top: 18px;\n  width: 108px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge {\n  position: absolute;\n  left: 18px;\n  top: 18px;\n  width: 76px;\n  min-height: 92px;\n  padding: 10px 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #111;\n  color: #fff;\n  text-align: center;\n  font-weight: 800;\n  line-height: 1.05;\n  border: 4px solid #fff;\n  box-shadow: 0 2px 8px rgba(0,0,0,.18);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge strong {\n  font-size: 28px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-badge span {\n  font-size: 11px;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-approval {\n  position: absolute;\n  right: 18px;\n  top: 18px;\n  max-width: 154px;\n  padding: 9px 10px 8px;\n  color: #fff;\n  background: #e1261c;\n  border: 3px solid #fff;\n  font-size: 14px;\n  line-height: 1.02;\n  font-weight: 900;\n  text-transform: uppercase;\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0,0,0,.18);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-nav {\n  position: absolute;\n  top: 50%;\n  z-index: 6;\n  transform: translateY(-50%);\n  width: 34px;\n  height: 34px;\n  border: 0;\n  padding: 0;\n  border-radius: 50%;\n  background: #ffd400;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  appearance: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  box-shadow: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-nav::before {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-left: 2px solid #111;\n  border-bottom: 2px solid #111;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-prev::before {\n  transform: translateX(2px) rotate(45deg);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-next::before {\n  transform: translateX(-2px) rotate(225deg);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-prev {\n  left: 15px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-next {\n  right: 15px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumbs {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 10px;\n  margin-top: 12px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb {\n  position: relative;\n  box-sizing: border-box;\n  border: 0;\n  border-radius: 3px;\n  background: #fff;\n  padding: 0;\n  cursor: pointer;\n  aspect-ratio: 530 \/ 489;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb[aria-selected=\"true\"] {\n  outline: 2px solid #111;\n  outline-offset: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-thumb span {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0 0 0 0);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-rating {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 4px 0 9px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-stars {\n  display: block;\n  width: 82px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  letter-spacing: 0;\n  background: url(\"data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2282%22%20height%3D%2216%22%20viewBox%3D%220%200%2082%2016%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M7.3885%202.27341L8.62197%206.06965L12.6136%206.06965L9.3843%208.41585L10.6178%2012.2121L7.3885%209.86589L4.15923%2012.2121L5.3927%208.41585L2.16343%206.06965L6.15503%206.06965L7.3885%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2216.6719%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M24.0604%202.27341L25.2938%206.06965L29.2855%206.06965L26.0562%208.41585L27.2897%2012.2121L24.0604%209.86589L20.8311%2012.2121L22.0646%208.41585L18.8353%206.06965L22.8269%206.06965L24.0604%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2233.3438%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M40.7323%202.27341L41.9657%206.06965L45.9573%206.06965L42.7281%208.41585L43.9615%2012.2121L40.7323%209.86589L37.503%2012.2121L38.7364%208.41585L35.5072%206.06965L39.4988%206.06965L40.7323%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2250.0137%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M57.4022%202.27341L58.6356%206.06965L62.6272%206.06965L59.398%208.41585L60.6314%2012.2121L57.4022%209.86589L54.1729%2012.2121L55.4064%208.41585L52.1771%206.06965L56.1687%206.06965L57.4022%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2266.6855%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA85%22%2F%3E%3Cpath%20d%3D%22M74.074%202.27344L75.3075%206.06968L79.2991%206.06968L76.0698%208.41588L77.3033%2012.2121L74.074%209.86592L70.8448%2012.2121L72.0782%208.41588L68.849%206.06968L72.8406%206.06968L74.074%202.27344Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E\") center \/ 82px 16px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n  margin: 0;\n  max-width: 570px;\n  font-size: 40px;\n  line-height: 1.05;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy {\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n  color: #e1261c;\n}\n\n@media (min-width: 901px) and (max-width: 1100px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: inline-block;\n    white-space: nowrap;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-subhead {\n  margin: 18px 0 18px;\n  max-width: 485px;\n  padding: 10px 0;\n  border-top: 2px solid #111;\n  border-bottom: 2px solid #111;\n  font-size: 18px;\n  line-height: 1.38;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks {\n  display: grid;\n  gap: 12px;\n  margin: 0 0 25px;\n  padding: 0;\n  list-style: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks li {\n  position: relative;\n  padding-left: 30px;\n  font-size: 16px;\n  line-height: 1.28;\n  font-weight: 700;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-checks li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 1px;\n  width: 20px;\n  height: 20px;\n  background: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M10 0C4.475 0 0 4.475 0 10C0 15.525 4.475 20 10 20C15.525 20 20 15.525 20 10C20 4.475 15.525 0 10 0ZM14.3188 5.56875L15.6875 6.81875L8.1875 15.1188L4.31875 11.25L5.625 9.94375L8.06875 12.3875L14.3188 5.56875Z' fill='%23DB011C'\/%3E%3C\/svg%3E\") center \/ 20px 20px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  width: 335px;\n  max-width: 100%;\n  min-height: 50px;\n  padding: 0 18px;\n  background: #ffdc32;\n  color: #000 !important;\n  border: 1px solid #d4b000;\n  border-radius: 8px;\n  font-size: 18px;\n  line-height: 23px;\n  font-weight: 800;\n  text-decoration: none;\n  text-shadow: none;\n  box-shadow: none;\n  white-space: nowrap;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-origin {\n  width: 335px;\n  max-width: 100%;\n  margin: 0 auto 10px;\n  color: #111;\n  text-align: center;\n  font-family: Inter, Helvetica, sans-serif;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  color: #000 !important;\n  text-align: center;\n  font-family: Roboto, Inter, Helvetica, sans-serif !important;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 800;\n  line-height: 23px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-icon {\n  width: 22px;\n  height: 22px;\n  flex: 0 0 22px;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 335px;\n  max-width: 100%;\n  margin: 7px auto 0;\n  color: #333;\n  font-family: Roboto, Inter, Helvetica, sans-serif;\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 400;\n  white-space: nowrap;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-ship {\n  position: relative;\n  width: 11px;\n  height: 11px;\n  margin-right: 8px;\n  border-radius: 50%;\n  background-color: #adf4a1;\n  opacity: .5;\n  animation: cvWrPulseCtaShip 1.725s forwards infinite ease-out;\n  flex: 0 0 11px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-ship::after {\n  content: \"\";\n  position: absolute;\n  inset: 2px;\n  border-radius: 50%;\n  background-color: #95df89;\n}\n\n@keyframes cvWrPulseCtaShip {\n  45% {\n    transform: scale(1.45);\n    opacity: 1;\n  }\n\n  55% {\n    opacity: 1;\n  }\n}\n\n@keyframes cvWrPulsePageCta {\n  0%,\n  100% {\n    transform: scale(.9);\n  }\n\n  50% {\n    transform: scale(1);\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta {\n  transform: scale(.9);\n  animation: cvWrPulsePageCta 1.5s infinite;\n  transition: background-color .18s ease;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta > span {\n  display: inline-block;\n  transition: transform .24s;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta:hover > span,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta:hover > span {\n  transform: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta:hover,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta:hover {\n  background: #f3cf25;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-text span {\n  display: inline;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-text {\n  font-weight: 400;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view {\n  display: flex;\n  gap: 2px;\n  margin: 0 7px 0 5px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view span {\n  width: 10px;\n  height: 10px;\n  display: block;\n  background-color: rgba(217, 217, 217, .6);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-view span:first-child {\n  background-color: #fc2201;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta-stock-level {\n  color: #ea4701;\n  font-size: 12px;\n  font-weight: 800;\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  max-width: 470px;\n  margin-left: 0;\n  padding-top: 37px;\n  border-top: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-avatar {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  flex: 0 0 52px;\n  background: #d9d9d9;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review p {\n  margin: 0 0 4px;\n  font-size: 14px;\n  line-height: 1.38;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-mini-review strong {\n  font-size: 13px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen {\n  margin-top: 58px;\n  padding: 20px 0 16px;\n  border-top: 1px solid #dedede;\n  border-bottom: 1px solid #dedede;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen p {\n  margin: 0 0 10px;\n  font-size: 14px;\n  color: #555;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos span {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 112px;\n  height: 30px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  background: transparent;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos img {\n  display: block;\n  width: auto;\n  max-width: 100%;\n  height: 24px;\n  max-height: none;\n  object-fit: contain;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(3),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(7),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(10),\n.cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(14) {\n  width: 146px;\n}\n\n@keyframes cvWrLogoMarquee {\n  from {\n    transform: translateX(0);\n  }\n\n  to {\n    transform: translateX(calc(-50% - 11px));\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefits {\n  padding: 64px 0 58px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head {\n  max-width: 650px;\n  margin: 0 auto 46px;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head h2 {\n  margin: 0 0 10px;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head-break {\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-head p {\n  margin: 0;\n  font-size: 17px;\n  line-height: 1.45;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-row {\n  display: grid;\n  grid-template-columns: 584px 430px;\n  gap: 94px;\n  align-items: center;\n  max-width: 1108px;\n  margin: 0 auto 58px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-mobile-title {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse {\n  grid-template-columns: 430px 584px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-copy {\n  order: 1;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-media {\n  order: 2;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-media {\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  aspect-ratio: 584 \/ 348;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-media img,\n.cv-woodranger-hero-benefits .cv-wr-benefit-media video {\n  width: 100%;\n  height: 100%;\n  display: block;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-video-pending {\n  position: absolute;\n  left: 12px;\n  bottom: 12px;\n  padding: 6px 9px;\n  background: rgba(0,0,0,.72);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .04em;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-copy h3 {\n  margin: 0 0 10px;\n  font-size: 23px;\n  line-height: 1.15;\n  font-weight: 900;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-copy p {\n  margin: 0 0 12px;\n  font-size: 18px;\n  line-height: 1.48;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof {\n  position: relative;\n  margin-top: 16px;\n  padding-left: 0;\n  border-left: 0;\n  font-size: 13px;\n  line-height: 1.35;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof-stars {\n  margin-bottom: 8px;\n  display: block;\n  width: 82px;\n  height: 16px;\n  overflow: hidden;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  letter-spacing: 0;\n  background: url(\"data:image\/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2282%22%20height%3D%2216%22%20viewBox%3D%220%200%2082%2016%22%20fill%3D%22none%22%3E%3Crect%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M7.3885%202.27341L8.62197%206.06965L12.6136%206.06965L9.3843%208.41585L10.6178%2012.2121L7.3885%209.86589L4.15923%2012.2121L5.3927%208.41585L2.16343%206.06965L6.15503%206.06965L7.3885%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2216.6719%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M24.0604%202.27341L25.2938%206.06965L29.2855%206.06965L26.0562%208.41585L27.2897%2012.2121L24.0604%209.86589L20.8311%2012.2121L22.0646%208.41585L18.8353%206.06965L22.8269%206.06965L24.0604%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2233.3438%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M40.7323%202.27341L41.9657%206.06965L45.9573%206.06965L42.7281%208.41585L43.9615%2012.2121L40.7323%209.86589L37.503%2012.2121L38.7364%208.41585L35.5072%206.06965L39.4988%206.06965L40.7323%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2250.0137%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA86%22%2F%3E%3Cpath%20d%3D%22M57.4022%202.27341L58.6356%206.06965L62.6272%206.06965L59.398%208.41585L60.6314%2012.2121L57.4022%209.86589L54.1729%2012.2121L55.4064%208.41585L52.1771%206.06965L56.1687%206.06965L57.4022%202.27341Z%22%20fill%3D%22white%22%2F%3E%3Crect%20x%3D%2266.6855%22%20width%3D%2215.1558%22%20height%3D%2215.1558%22%20rx%3D%222%22%20fill%3D%22%231BBA85%22%2F%3E%3Cpath%20d%3D%22M74.074%202.27344L75.3075%206.06968L79.2991%206.06968L76.0698%208.41588L77.3033%2012.2121L74.074%209.86592L70.8448%2012.2121L72.0782%208.41588L68.849%206.06968L72.8406%206.06968L74.074%202.27344Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E\") center \/ 82px 16px no-repeat;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof p {\n  margin: 0 0 4px;\n  font-size: 14px;\n  line-height: 1.35;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof strong {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-cta .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .cv-wr-control-cta-replacement .cv-wr-cta-bottom {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n  grid-template-columns: 430px 1fr;\n  gap: 0;\n  align-items: stretch;\n  background: #202729;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n  width: 584px;\n  aspect-ratio: 584 \/ 348;\n  order: 2;\n  justify-self: end;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n  display: block;\n  order: 1;\n  padding: 42px 44px;\n  background: #202729;\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy h3,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy p,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-proof p,\n.cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-proof strong {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section,\n.cv-woodranger-hero-benefits .cv-wr-comparison {\n  font-family: Inter, Helvetica, sans-serif;\n  color: #111;\n  background: #fff;\n}\n\n@media (min-width: 901px) and (max-width: 1160px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    grid-template-columns: minmax(0, 1fr) minmax(0, .74fr);\n    gap: 36px;\n    max-width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse {\n    grid-template-columns: minmax(0, .74fr) minmax(0, 1fr);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: minmax(0, .74fr) minmax(0, 1fr);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: minmax(0, 377px) 56px minmax(0, 377px);\n    gap: 24px;\n    width: fit-content;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    justify-content: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 760px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-media {\n    order: initial;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n    max-width: 100%;\n    justify-self: stretch;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    gap: 0;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    aspect-ratio: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    aspect-ratio: 16 \/ 9;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 560px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    width: 54px;\n    height: 54px;\n    min-height: 54px;\n    margin: 0 auto;\n    justify-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: min(100% - 40px, 760px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    gap: 28px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100%;\n    max-width: 620px;\n    margin: 0 auto 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 530 \/ 489;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: 560px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n}\n\n.cv-woodranger-hero-benefits h1,\n.cv-woodranger-hero-benefits h2,\n.cv-woodranger-hero-benefits h3,\n.cv-woodranger-hero-benefits h4,\n.cv-woodranger-hero-benefits h5,\n.cv-woodranger-hero-benefits h6,\n.cv-woodranger-hero-benefits .commn-hdg {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section .container,\n.cv-woodranger-hero-benefits .cv-wr-comparison .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section {\n  clear: both;\n  padding: 74px 0 68px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-section h2,\n.cv-woodranger-hero-benefits .cv-wr-comparison h2 {\n  margin: 0;\n  text-align: center;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison-head-break {\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid {\n  width: 100vw;\n  max-width: none;\n  margin: 34px calc(50% - 50vw) 0;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  scrollbar-width: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid::-webkit-scrollbar {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-track {\n  display: flex;\n  gap: 24px;\n  width: max-content;\n  animation: cvWrJobMarquee 70s linear infinite;\n  will-change: transform;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-grid:hover .cv-wr-job-track {\n  animation-play-state: paused;\n}\n\n@keyframes cvWrJobMarquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-1431px);\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card {\n  flex: 0 0 214.5px;\n  background: #f1f1f1;\n  text-align: left;\n  min-width: 214.5px;\n  scroll-snap-align: start;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card img {\n  width: 100%;\n  aspect-ratio: 1.42 \/ 1;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card div {\n  padding: 12px 14px 18px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card h3 {\n  margin: 0 0 7px;\n  font-size: 21px;\n  line-height: 1;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-card p {\n  margin: 0;\n  font-size: 17px;\n  line-height: 1.35;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison {\n  padding: 10px 0 72px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-comparison-sub {\n  max-width: 650px;\n  margin: 18px auto 34px;\n  text-align: center;\n  font-size: 17px;\n  line-height: 1.45;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid {\n  display: grid;\n  grid-template-columns: 377px 80px 377px;\n  gap: 32px;\n  align-items: start;\n  width: fit-content;\n  max-width: 100%;\n  margin: 0 auto;\n  justify-content: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n  min-width: 0;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-img {\n  position: relative;\n  width: 377px;\n  height: 262px;\n  overflow: hidden;\n  margin-bottom: 14px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-img img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-good,\n.cv-woodranger-hero-benefits .cv-wr-bad {\n  position: absolute;\n  left: 14px;\n  top: 14px;\n  width: 41px;\n  height: 41px;\n  border-radius: 50%;\n  color: transparent;\n  font-size: 0;\n  line-height: 0;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 41px 41px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-good {\n  background-image: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='41' height='41' viewBox='0 0 41 41' fill='none'%3E%3Ccircle cx='20.2031' cy='20.2031' r='14' fill='white'\/%3E%3Cpath d='M20.2031 0C9.04569 0 0 9.04569 0 20.2031C0 31.3606 9.04569 40.4063 20.2031 40.4063C31.3606 40.4063 40.4063 31.3606 40.4063 20.2031C40.4063 9.04569 31.3606 0 20.2031 0ZM17.9827 28.4008L10.3437 20.7618L13.0387 18.0668L17.9829 23.011L29.0032 11.9906L31.6982 14.6856L17.9827 28.4008Z' fill='%2301DE95'\/%3E%3C\/svg%3E\");\n}\n\n.cv-woodranger-hero-benefits .cv-wr-bad {\n  background-image: url(\"data:image\/svg+xml,%3Csvg xmlns='http:\/\/www.w3.org\/2000\/svg' width='41' height='41' viewBox='0 0 41 41' fill='none'%3E%3Ccircle cx='20.2051' cy='20.2051' r='14' fill='white'\/%3E%3Cpath d='M20.205 0C9.04553 0 0 9.04553 0 20.205C0 31.3645 9.04553 40.41 20.205 40.41C31.3645 40.41 40.41 31.3645 40.41 20.205C40.41 9.04553 31.3645 0 20.205 0ZM13.8909 11.2466L20.205 17.5607L26.5191 11.2466L29.1634 13.8909L22.8493 20.205L29.1634 26.5191L26.5191 29.1634L20.205 22.8493L13.8909 29.1634L11.2466 26.5191L17.5607 20.205L11.2466 13.8909L13.8909 11.2466Z' fill='%23FF1500'\/%3E%3C\/svg%3E\");\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n  margin: 0 0 14px;\n  font-family: Inter, Helvetica, sans-serif !important;\n  font-size: 24px;\n  line-height: 1.15;\n  font-weight: 900;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-compare-grid li {\n  padding: 8px 0;\n  border-bottom: 1px solid #e6e6e6;\n  font-size: 18px;\n  line-height: 1.25;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs {\n  position: relative;\n  align-self: stretch;\n  min-height: 0;\n  color: #fff;\n  font-size: 18px;\n  font-weight: 900;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs::before {\n  content: \"\";\n  position: absolute;\n  top: 181px;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n  background: #999;\n  transform: translateX(-50%);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs {\n  z-index: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-vs::after {\n  content: \"VS\";\n  position: absolute;\n  top: 126px;\n  left: 50%;\n  z-index: 1;\n  width: 42px;\n  height: 42px;\n  min-width: 42px;\n  min-height: 42px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: #ed4646;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 42px;\n  transform: translateX(-50%);\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-cta {\n  padding: 37px 0;\n  background: #fff;\n  font-family: Inter, Helvetica, sans-serif;\n  clear: both;\n  position: relative;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-container {\n  display: block !important;\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin: 0 auto;\n  padding: 0 !important;\n  float: none !important;\n  transform: none !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-grid {\n  display: grid !important;\n  grid-template-columns: 530px 335px !important;\n  gap: 58px !important;\n  align-items: center;\n  width: 923px !important;\n  max-width: 100% !important;\n  min-width: 0 !important;\n  margin: 0 auto !important;\n  padding: 0 !important;\n  float: none !important;\n  transform: none !important;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-media {\n  position: relative;\n  width: 530px;\n  max-width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-media .cv-wr-main-media,\n.cv-woodranger-hero-benefits .cv-wr-final-mobile-media .cv-wr-main-media {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n  position: relative;\n  overflow: hidden;\n  width: 530px;\n  max-width: 100%;\n  height: 489px;\n  background: #fff;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n  display: none;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge {\n  position: absolute;\n  left: 28px;\n  top: 28px;\n  width: 122px;\n  min-height: 124px;\n  padding: 18px 10px 14px;\n  background: #050505;\n  color: #fff;\n  border-radius: 6px;\n  text-align: center;\n  text-transform: lowercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge strong {\n  display: block;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 34px;\n  line-height: .82;\n  font-weight: 900;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-badge span {\n  display: block;\n  margin-top: 6px;\n  font-size: 16px;\n  line-height: .92;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-approval {\n  position: absolute;\n  right: 28px;\n  top: 28px;\n  padding: 12px 16px;\n  border: 4px solid #fff;\n  border-radius: 14px;\n  background: #e84a22;\n  color: #fff;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 24px;\n  line-height: .9;\n  font-weight: 900;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-drop {\n  position: absolute;\n  left: 32px;\n  top: 180px;\n  width: 64px;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #ffdf2e;\n  color: #1750d6;\n  font-family: Barlow, Inter, sans-serif;\n  font-size: 17px;\n  line-height: .9;\n  font-weight: 900;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n  max-width: 335px;\n  margin: 16px 0 28px;\n  font-family: Barlow, Inter, Helvetica, sans-serif;\n  font-size: 40px;\n  line-height: 1.08;\n  font-weight: 900;\n  letter-spacing: 0;\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy {\n  width: 335px;\n  max-width: 100%;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy h2 span {\n  display: inline;\n  color: #df001b;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks {\n  max-width: min(360px, calc(100vw - 32px));\n  margin-bottom: 26px;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li {\n  font-size: 16px;\n  line-height: 1.25;\n  font-weight: 800;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li::before {\n  top: 0;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-ship {\n  margin: 0 0 10px;\n  width: 335px;\n  max-width: 100%;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1.3;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action {\n  text-align: left;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta-bottom {\n  margin-left: 0;\n  margin-right: 0;\n  width: 335px;\n  max-width: 100%;\n  justify-content: center;\n}\n\n.cv-woodranger-hero-benefits .cv-wr-final-action .cv-wr-cta {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n  justify-content: flex-start;\n}\n\n.cv-woodranger-hero-benefits .sec4 .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits #features > .container,\n.cv-woodranger-hero-benefits .sec4 > .container {\n  max-width: 1160px;\n  width: calc(100% - 32px);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.cv-woodranger-hero-benefits .sec8 .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits .sec9 .commn-hdg,\n.cv-woodranger-hero-benefits .sec10 .commn-hdg,\n.cv-woodranger-hero-benefits #reviews .commn-hdg,\n.cv-woodranger-hero-benefits #faq .commn-hdg {\n  font-size: 40px !important;\n  line-height: 1.08 !important;\n}\n\n.cv-woodranger-hero-benefits .sec4,\n.cv-woodranger-hero-benefits .sec8,\n.cv-woodranger-hero-benefits .sec9,\n.cv-woodranger-hero-benefits .sec10,\n.cv-woodranger-hero-benefits #reviews,\n.cv-woodranger-hero-benefits #faq,\n.cv-woodranger-hero-benefits .footer {\n  font-family: Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits #reviews,\n.cv-woodranger-hero-benefits .sec9 {\n  padding-bottom: 44px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-control-cta-replacement {\n  display: none !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec8 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec9 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .sec10 :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits #reviews :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits #faq :is(p, li, span, div, a, button),\n.cv-woodranger-hero-benefits .footer :is(p, li, span, div, a, button) {\n  font-family: Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec4 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec8 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec8 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec9 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec9 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits .sec10 :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits .sec10 :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits #reviews :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits #reviews :is(h1, h2, h3, h4, h5, h6, .commn-hdg) *,\n.cv-woodranger-hero-benefits #faq :is(h1, h2, h3, h4, h5, h6, .commn-hdg),\n.cv-woodranger-hero-benefits #faq :is(h1, h2, h3, h4, h5, h6, .commn-hdg) * {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 .s4-contbox {\n  font-family: Barlow, Inter, Helvetica, sans-serif !important;\n  font-size: 21px !important;\n}\n\n.cv-woodranger-hero-benefits .sec4 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .cv-wr-comparison .cv-wr-benefit-cta,\n.cv-woodranger-hero-benefits .sec8 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits #reviews .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits #faq .cv-wr-control-cta-replacement,\n.cv-woodranger-hero-benefits .sec10 .cv-wr-control-cta-replacement {\n  margin-top: 50px !important;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-bottom,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-bottom {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-origin,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-origin {\n  color: #fff;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-stock-view span,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-stock-view span {\n  background: #c9c9c9;\n}\n\n.cv-woodranger-hero-benefits #features .cv-wr-cta-stock-view span:first-child,\n.cv-woodranger-hero-benefits .sec4 .cv-wr-cta-stock-view span:first-child {\n  background: #fc2201;\n}\n\n@media (min-width: 769px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 760px);\n    max-width: calc(100vw - 40px);\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-copy,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse > .cv-wr-benefit-media {\n    order: initial;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-media,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    width: 100%;\n    max-width: 100%;\n    justify-self: stretch;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    gap: 0;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    aspect-ratio: auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    aspect-ratio: 16 \/ 9;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr !important;\n    gap: 28px;\n    width: min(100%, 560px) !important;\n    max-width: calc(100vw - 40px) !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid h3 {\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    width: 54px;\n    height: 54px;\n    min-height: 54px;\n    margin: 0 auto;\n    justify-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: min(100% - 40px, 760px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    width: 100% !important;\n    gap: 28px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100%;\n    max-width: 620px;\n    margin: 0 auto 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 530 \/ 489;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: 560px;\n    margin: 0 auto;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n}\n\n@media (min-width: 901px) and (max-width: 1100px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: inline-block;\n    white-space: nowrap;\n  }\n}\n\n@media (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-header-inner {\n    min-height: 54px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logo {\n    width: 150px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a:nth-child(n+4) {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu {\n    gap: 18px;\n    font-size: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-cta {\n    min-height: 28px;\n    padding: 0 12px;\n    font-size: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-grid,\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-reverse .cv-wr-benefit-media {\n    order: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    font-size: 30px;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-promo-banner {\n    flex-wrap: wrap;\n    gap: 3px 6px;\n    height: 64px;\n    min-height: 64px;\n    padding: 11px 12px;\n    font-size: 15px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-promo-banner strong {\n    min-height: 22px;\n    padding: 2px 9px;\n    font-size: 15px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero {\n    padding-top: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero .container,\n  .cv-woodranger-hero-benefits .cv-wr-header .container,\n  .cv-woodranger-hero-benefits .cv-wr-benefits .container {\n    width: calc(100% - 32px);\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header .container {\n    width: calc(100% - 32px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-inner {\n    min-height: 62px;\n    padding: 0;\n    gap: 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logo {\n    width: 182px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-header-cta,\n  .cv-woodranger-hero-benefits .cv-wr-flag {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mobile-toggle {\n    position: relative;\n    width: 26px;\n    height: 20px;\n    margin-left: auto;\n    padding: 0;\n    border: 0;\n    background: transparent;\n    appearance: none;\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0;\n    cursor: pointer;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mobile-toggle span {\n    width: 26px;\n    height: 3px;\n    min-height: 3px;\n    flex: 0 0 3px;\n    border-radius: 999px;\n    background: #111;\n    display: block;\n    margin: 0;\n    padding: 0;\n    opacity: 1;\n    transform: none;\n    transform-origin: center;\n    transition: transform .18s ease, opacity .18s ease;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle {\n    gap: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(1) {\n    position: absolute;\n    top: 8.5px;\n    left: 0;\n    transform: rotate(45deg);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(2) {\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-mobile-toggle span:nth-child(3) {\n    position: absolute;\n    top: 8.5px;\n    left: 0;\n    transform: rotate(-45deg);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu {\n    position: absolute;\n    top: 100%;\n    left: calc(50% - 50vw);\n    right: auto;\n    z-index: 10000;\n    display: none;\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    background: #fff;\n    border-top: 1px solid #d7d7d7;\n    border-bottom: 1px solid #d7d7d7;\n    font-size: 17px;\n    font-weight: 800;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu-open .cv-wr-menu {\n    display: block;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    box-sizing: border-box;\n    min-height: 54px;\n    padding: 0 16px;\n    border-bottom: 1px solid #d7d7d7;\n    color: #111;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a:last-child {\n    border-bottom: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-menu a[aria-current=\"page\"] {\n    background: #ffdf2e;\n  }\n\n  .cv-woodranger-hero-benefits #ctabtn-mob.cv-wr-sticky-footer,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    z-index: 9997 !important;\n    width: 100% !important;\n    margin: 0 !important;\n    padding: 10px 16px 8px !important;\n    background: #fff !important;\n    box-shadow: 0 -1px 10px rgba(0, 0, 0, .08) !important;\n    text-align: center !important;\n    font-family: Inter, Helvetica, sans-serif !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta {\n    width: 100% !important;\n    min-height: 50px !important;\n    height: 50px !important;\n    padding: 0 18px !important;\n    box-sizing: border-box !important;\n    border: 1px solid #d4b000 !important;\n    border-radius: 12px !important;\n    background: #ffdc32 !important;\n    color: #000 !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 8px !important;\n    font-family: Roboto, Inter, Helvetica, sans-serif !important;\n    font-size: 18px !important;\n    line-height: 1 !important;\n    font-weight: 900 !important;\n    letter-spacing: 0 !important;\n    text-decoration: none !important;\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta span {\n    display: block;\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta .cv-wr-cta-icon {\n    flex: 0 0 22px;\n    width: 22px;\n    height: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-scarcity {\n    box-sizing: border-box;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 7px;\n    color: #111;\n    font-size: 14px;\n    line-height: 1.15;\n    font-weight: 400;\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-dot {\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    border: 5px solid #aaf3a0;\n    background: #7fdd73;\n    display: inline-block;\n    flex: 0 0 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars {\n    display: inline-flex;\n    gap: 3px;\n    flex: 0 0 auto;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars i {\n    width: 10px;\n    height: 10px;\n    display: block;\n    background: #d8d8d8;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-stock-bars i:first-child {\n    background: #e9412a;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-scarcity strong {\n    color: #e9412a;\n    font-weight: 400;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main {\n    width: 100vw;\n    height: 90vw;\n    max-height: 390px;\n    aspect-ratio: auto;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    border-color: #fff;\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main .cv-wr-media-placeholder,\n  .cv-woodranger-hero-benefits .cv-wr-gallery-main .cv-wr-media-filled {\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits img.cv-wr-main-media,\n  .cv-woodranger-hero-benefits img.cv-wr-thumb-media {\n    object-fit: contain;\n  }\n\n  .cv-woodranger-hero-benefits video.cv-wr-main-media {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    object-fit: cover;\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits video.cv-wr-thumb-media {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    object-fit: cover;\n    background: #fff;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-static img.cv-wr-main-media {\n    object-fit: cover;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-static .cv-wr-gallery-main {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 530 \/ 490;\n    max-height: none;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery-static .cv-wr-main-media {\n    width: 100%;\n    height: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-grid {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy {\n    display: contents;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-rating {\n    order: 1;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    order: 2;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-gallery {\n    order: 3;\n    width: 100%;\n    margin-top: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead {\n    order: 4;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-checks {\n    order: 5;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta {\n    order: 6;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    order: 7;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-mini-review {\n    order: 8;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge {\n    left: 10px;\n    top: 10px;\n    width: 62px;\n    min-height: 76px;\n    border-width: 3px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge strong {\n    font-size: 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-badge span {\n    font-size: 9px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-approval {\n    right: 10px;\n    top: 10px;\n    max-width: 124px;\n    font-size: 11px;\n    border-width: 2px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-guarantee {\n    left: 10px;\n    top: 10px;\n    width: 62px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-drop {\n    left: 11px;\n    top: 88px;\n    width: 40px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-badge-tested {\n    right: 10px;\n    top: 10px;\n    width: 76px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-thumbs {\n    gap: 6px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 {\n    font-size: 32px;\n    max-width: 100%;\n    width: 100%;\n    line-height: .98;\n    text-align: center;\n    margin-top: 6px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 span {\n    display: block;\n    white-space: nowrap;\n    line-height: .98;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy h1 br {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead,\n  .cv-woodranger-hero-benefits .cv-wr-checks li {\n    font-size: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-subhead {\n    font-size: 17px;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-checks li {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy {\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-rating,\n  .cv-woodranger-hero-benefits .cv-wr-mini-review {\n    justify-content: flex-start;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-rating {\n    justify-content: center;\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-cta {\n    width: 100%;\n    padding-left: 14px;\n    padding-right: 14px;\n    font-size: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos {\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    width: max-content;\n    row-gap: 0;\n    font-size: 14px;\n    animation: cvWrLogoMarquee 70s linear infinite;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen p {\n    font-size: 14px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen {\n    width: 100vw;\n    margin-top: 35px;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos {\n    gap: 12px 22px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 112px;\n    height: 30px;\n    overflow: hidden;\n    color: transparent;\n    font-size: 0;\n    line-height: 0;\n    background: transparent;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(3),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(7),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(10),\n  .cv-woodranger-hero-benefits .cv-wr-logos span:nth-child(14) {\n    width: 146px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefits {\n    padding-top: 28px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head h2 {\n    font-size: 25px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    margin-bottom: 40px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-mobile-title {\n    display: block;\n    order: 1;\n    margin: 0;\n    font-size: 23px;\n    line-height: 1.15;\n    font-weight: 900;\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-media {\n    order: 2;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy {\n    order: 3;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-row > .cv-wr-benefit-copy > h3 {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark {\n    display: grid;\n    grid-template-columns: 1fr !important;\n    gap: 0 !important;\n    width: 100vw;\n    max-width: none;\n    margin-left: calc(50% - 50vw);\n    margin-right: calc(50% - 50vw);\n    background: #202729;\n    overflow: hidden;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark > .cv-wr-benefit-mobile-title {\n    color: #fff;\n    margin: 0;\n    padding: 24px 24px 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-media {\n    order: 2 !important;\n    width: calc(100% - 48px);\n    max-width: none;\n    aspect-ratio: 393 \/ 236;\n    justify-self: stretch;\n    margin: 18px 24px 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-dark .cv-wr-benefit-copy {\n    order: 3 !important;\n    width: 100%;\n    padding: 26px 24px 30px;\n    background: #202729;\n    overflow-wrap: anywhere;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-copy h3 {\n    font-size: 23px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-copy > p {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: calc(100vw - 31px);\n    max-width: none;\n    margin-left: 0;\n    margin-right: calc(31px - 100vw + 100%);\n    overflow-x: auto;\n    overflow-y: hidden;\n    -webkit-overflow-scrolling: touch;\n    scroll-snap-type: x proximity;\n    scrollbar-width: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-track {\n    display: grid;\n    grid-template-columns: repeat(6, 251px);\n    gap: 24px;\n    width: max-content;\n    animation: none;\n    transform: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card-duplicate {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid::-webkit-scrollbar {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card {\n    width: 251px;\n    min-width: 251px;\n    scroll-snap-align: start;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card h3 {\n    font-size: 23px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card p {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 {\n    max-width: 344px;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 25px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 .cv-wr-desktop-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2 .cv-wr-nowrap {\n    white-space: nowrap;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-comparison-head-break {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    max-width: none;\n    width: 100%;\n    margin: 28px auto 0;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article {\n    width: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid li {\n    font-size: 18px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-compare-img {\n    width: 100%;\n    height: auto;\n    aspect-ratio: 377 \/ 262;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs {\n    min-height: 53px;\n    height: 53px;\n    width: 53px;\n    margin: 0 auto;\n    justify-self: center;\n    align-self: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::before {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-vs::after {\n    top: 0;\n    left: 50%;\n    width: 53px;\n    height: 53px;\n    min-width: 53px;\n    min-height: 53px;\n    line-height: 53px;\n    transform: translateX(-50%);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-cta {\n    padding: 54px 0 58px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-container {\n    width: calc(100% - 32px);\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 1fr !important;\n    gap: 26px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-media .cv-wr-main-media,\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media .cv-wr-main-media {\n    height: 100%;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-grid > .cv-wr-final-media {\n    display: none;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-mobile-media {\n    display: block;\n    width: 100vw;\n    margin: 22px calc(50% - 50vw) 24px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 100%;\n    max-width: none;\n    height: 346px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge {\n    left: 18px;\n    top: 18px;\n    width: 92px;\n    min-height: 94px;\n    padding: 13px 8px 10px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge strong {\n    font-size: 26px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-badge span {\n    font-size: 12px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-approval {\n    right: 16px;\n    top: 18px;\n    padding: 9px 11px;\n    border-width: 3px;\n    border-radius: 11px;\n    font-size: 17px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-drop {\n    left: 20px;\n    top: 124px;\n    width: 52px;\n    height: 52px;\n    font-size: 14px;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta .cv-wr-rating {\n    justify-content: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 100%;\n    max-width: none;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n    font-size: 32px;\n    line-height: 1.08;\n    margin: 12px 0 22px;\n    text-align: center;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks {\n    align-items: flex-start;\n    gap: 12px;\n    margin-bottom: 24px;\n    text-align: left;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy .cv-wr-checks li {\n    font-size: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-ship {\n    font-size: 11px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-cta-origin {\n    font-size: 11px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head h2,\n  .cv-woodranger-hero-benefits .cv-wr-job-section h2,\n  .cv-woodranger-hero-benefits .cv-wr-comparison h2,\n  .cv-woodranger-hero-benefits .sec4 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec8 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec9 .commn-hdg,\n  .cv-woodranger-hero-benefits .sec10 .commn-hdg,\n  .cv-woodranger-hero-benefits #reviews .commn-hdg,\n  .cv-woodranger-hero-benefits #faq .commn-hdg {\n    font-size: 28px !important;\n    line-height: 1.1 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-benefit-head p,\n  .cv-woodranger-hero-benefits .cv-wr-comparison-sub,\n  .cv-woodranger-hero-benefits section#comparison > .container > p.cv-wr-comparison-sub,\n  .cv-woodranger-hero-benefits .cv-wr-comparison .cv-wr-comparison-sub {\n    font-size: 16px !important;\n    line-height: 1.45 !important;\n  }\n\n  .cv-woodranger-hero-benefits .sec4 .commn-para {\n    font-size: 16px !important;\n    line-height: 1.45 !important;\n  }\n\n  .cv-woodranger-hero-benefits .sec8 .incld-txt span {\n    font-size: 18px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .acdn-para,\n  .cv-woodranger-hero-benefits .sec10 .acdn-para {\n    font-size: 16px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .accordion,\n  .cv-woodranger-hero-benefits .sec10 .accordion,\n  .cv-woodranger-hero-benefits #faq [id^=\"hd-\"],\n  .cv-woodranger-hero-benefits .sec10 [id^=\"hd-\"] {\n    font-size: 16px !important;\n  }\n}\n\n@media (min-width: 601px) and (max-width: 768px) {\n  .cv-woodranger-hero-benefits #ctabtn-mob.cv-wr-sticky-footer,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer {\n    position: fixed !important;\n    left: 0 !important;\n    right: 0 !important;\n    bottom: 0 !important;\n    z-index: 9997 !important;\n    width: 100% !important;\n    margin: 0 !important;\n    padding: 10px 16px 8px !important;\n    background: #fff !important;\n    box-shadow: 0 -1px 10px rgba(0, 0, 0, .08) !important;\n    text-align: center !important;\n    font-family: Inter, Helvetica, sans-serif !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-sticky-cta {\n    width: 100% !important;\n    min-height: 50px !important;\n    height: 50px !important;\n    padding: 0 18px !important;\n    box-sizing: border-box !important;\n    border: 1px solid #d4b000 !important;\n    border-radius: 12px !important;\n    background: #ffdc32 !important;\n    color: #000 !important;\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 8px !important;\n    font-family: Roboto, Inter, Helvetica, sans-serif !important;\n    font-size: 18px !important;\n    line-height: 1 !important;\n    font-weight: 900 !important;\n    letter-spacing: 0 !important;\n    text-decoration: none !important;\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom,\n  .cv-woodranger-hero-benefits .cv-wr-sticky-footer .cv-wr-cta-bottom {\n    margin-left: auto !important;\n    margin-right: auto !important;\n  }\n}\n\n@media (min-width: 601px) and (max-width: 900px) {\n  .cv-woodranger-hero-benefits .cv-wr-hero-copy > .cv-wr-cta-bottom {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .sec4 .s4-contbox,\n  .cv-woodranger-hero-benefits #features .s4-contbox {\n    font-size: 18px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-section {\n    padding-top: 35px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    padding-right: 15px !important;\n    box-sizing: content-box;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-sticky-cta > span,\n.cv-woodranger-hero-benefits .cv-wr-header-cta {\n  font-family: Roboto, Arial, sans-serif !important;\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-final-ship,\n  .cv-woodranger-hero-benefits .cv-wr-cta-origin {\n    font-size: 11px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-compare-grid article ul li {\n    font-size: 16px !important;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-proof strong {\n  font-weight: 600 !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  width: auto;\n  height: 16px;\n  vertical-align: middle;\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 15px;\n  height: 15px;\n  border-radius: 2px;\n  background: #1BBA86;\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif !important;\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .cv-wr-review-stars .is-off,\n.cv-woodranger-hero-benefits .sec9 .cv-wr-review-stars .is-off {\n  background: #dedede;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .testi-cont .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .testi-cont .cv-wr-review-stars {\n  margin: 0;\n}\n\n.cv-woodranger-hero-benefits #reviews .testi-cont .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .testi-cont .cv-wr-review-stars {\n  margin-top: 15px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1,\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 *,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 * {\n  text-decoration: none !important;\n  border-bottom: 0 !important;\n  box-shadow: none !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n  flex: 0 0 230px !important;\n  width: 230px !important;\n  max-width: 230px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score {\n  order: 1;\n  color: #000 !important;\n  font-family: \"Inter Variable\", Arial, sans-serif !important;\n  font-size: 23px !important;\n  font-weight: 800 !important;\n  line-height: 1.2 !important;\n  margin: 0 0 5px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars {\n  order: 2;\n  gap: 2px;\n  height: 22px;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-based,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-based {\n  order: 3;\n  color: #000 !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  line-height: 1.25 !important;\n  margin-top: 6px !important;\n}\n\n.cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits #reviews .rating-vals .cv-wr-review-stars span,\n.cv-woodranger-hero-benefits .sec9 .rating-vals .cv-wr-review-stars span {\n  width: 22px;\n  height: 22px;\n  border-radius: 3px;\n  font-size: 18px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rating-vals,\n.cv-woodranger-hero-benefits .sec9 .rating-vals {\n  flex: 0 0 120px;\n  width: 120px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rating-vals li,\n.cv-woodranger-hero-benefits .sec9 .rating-vals li {\n  display: flex;\n  align-items: center;\n  min-height: 22px;\n}\n\n.cv-woodranger-hero-benefits #reviews .rev-bars,\n.cv-woodranger-hero-benefits .sec9 .rev-bars {\n  margin-left: 14px;\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits #reviews .star-review-row,\n  .cv-woodranger-hero-benefits .sec9 .star-review-row {\n    display: flex !important;\n    align-items: center !important;\n    justify-content: center !important;\n    gap: 5px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rating-vals,\n  .cv-woodranger-hero-benefits .sec9 .rating-vals {\n    flex: 0 0 120px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rev-bars,\n  .cv-woodranger-hero-benefits .sec9 .rev-bars {\n    flex: 0 0 auto !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-3,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-3 {\n    flex: 0 0 190px !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .cv-woodranger-hero-benefits #reviews .star-review-row,\n  .cv-woodranger-hero-benefits .sec9 .star-review-row {\n    display: grid !important;\n    grid-template-columns: auto auto !important;\n    align-items: start !important;\n    justify-content: center !important;\n    column-gap: 14px !important;\n    row-gap: 22px !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 {\n    grid-column: 1 \/ -1 !important;\n    align-items: center !important;\n    flex: 0 0 auto !important;\n    width: 230px !important;\n    max-width: calc(100vw - 48px) !important;\n    margin-left: auto !important;\n    margin-right: auto !important;\n    text-align: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-review-stars,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-review-stars {\n    justify-content: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-based,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-based {\n    width: 100% !important;\n    text-align: center !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .star-review-col-1 .cv-wr-rating-score,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-1 .cv-wr-rating-score {\n    font-size: 24px !important;\n    line-height: 1.15 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rating-vals,\n  .cv-woodranger-hero-benefits .sec9 .rating-vals {\n    grid-column: 1 !important;\n    justify-self: end !important;\n    align-self: start !important;\n    margin: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .rev-bars,\n  .cv-woodranger-hero-benefits .sec9 .rev-bars {\n    grid-column: 2 !important;\n    justify-self: start !important;\n    align-self: start !important;\n    margin: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits #reviews .cs-percent,\n  .cv-woodranger-hero-benefits .sec9 .cs-percent,\n  .cv-woodranger-hero-benefits #reviews .star-review-col-3,\n  .cv-woodranger-hero-benefits .sec9 .star-review-col-3 {\n    grid-column: 1 \/ -1 !important;\n    justify-self: center !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100vw !important;\n    margin-left: calc(50% - 50vw) !important;\n    margin-right: calc(50% - 50vw) !important;\n    padding-left: 16px !important;\n    padding-right: 15px !important;\n    box-sizing: border-box !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits #benefits.cv-wr-benefits {\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #comparison.cv-wr-comparison {\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #cv-wr-final-cta.cv-wr-final-cta {\n    padding-top: 35px !important;\n    padding-bottom: 35px !important;\n  }\n\n  .cv-woodranger-hero-benefits #faq .cv-wr-control-cta-replacement,\n  .cv-woodranger-hero-benefits .sec10 .cv-wr-control-cta-replacement {\n    margin-top: 30px !important;\n    margin-bottom: 30px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100vw !important;\n    margin-left: calc(50% - 50vw) !important;\n    margin-right: calc(50% - 50vw) !important;\n    padding-left: 24px !important;\n    padding-right: 24px !important;\n    box-sizing: border-box !important;\n    scroll-padding-left: 24px !important;\n    scroll-snap-type: x mandatory !important;\n    overscroll-behavior-x: contain;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-track {\n    grid-template-columns: repeat(6, 251px) !important;\n    gap: 16px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-card {\n    width: 251px !important;\n    min-width: 251px !important;\n    scroll-snap-align: start !important;\n    scroll-snap-stop: always;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-seen {\n  border-bottom: 0 !important;\n}\n\n@media (min-width: 601px) {\n  .cv-woodranger-hero-benefits .cv-wr-seen .cv-wr-logos span:nth-child(n+8) {\n    display: none !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .cv-woodranger-hero-benefits .cv-wr-nav {\n    display: flex;\n    width: 34px;\n    height: 34px;\n    z-index: 6;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-nav::before {\n    width: 8px;\n    height: 8px;\n    border-width: 2px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-prev {\n    left: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-next {\n    right: 16px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen {\n    border-bottom: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-seen .cv-wr-logos span {\n    display: flex !important;\n  }\n}\n\n@media (min-width: 769px) {\n  .cv-woodranger-hero-benefits .cv-wr-final-grid {\n    grid-template-columns: 530px minmax(420px, 1fr) !important;\n    gap: 58px !important;\n    width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-media,\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    width: 530px !important;\n    max-width: 100% !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-placeholder {\n    height: 490px !important;\n    aspect-ratio: 530 \/ 490 !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy {\n    width: 420px !important;\n    max-width: 100% !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-final-copy h2 {\n    max-width: 420px !important;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-grid {\n    width: 100% !important;\n    max-width: 100% !important;\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    overflow: hidden !important;\n  }\n}\n\n.cv-woodranger-hero-benefits .cv-wr-job-dots {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  .cv-woodranger-hero-benefits .cv-wr-job-dots {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 6px;\n    margin-top: 14px;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-dot {\n    display: block;\n    width: 5px;\n    height: 5px;\n    border-radius: 50%;\n    background: rgba(15, 26, 42, .28);\n    transition: background-color .16s ease, transform .16s ease;\n  }\n\n  .cv-woodranger-hero-benefits .cv-wr-job-dot-active {\n    background: #0f1a2a;\n    transform: scale(1.25);\n  }\n}","js":function(convertContext){ 
(function () {
  var EXPERIMENT_CLASS = "cv-woodranger-hero-benefits";
  var INIT_FLAG = "cvWoodrangerHeroBenefitsInit";
  var ASSET_BASE = "https://offer.woodrangertools.com/lawnandweedtrimmer/images/int/";
  var CDN_BASE = "https://cdn.29next.store/media/woodranger/uploads/";
  var CHECKOUT_PATH = "/lawnandweedtrimmer/checkout";

  var slides = [
    { label: "Hero media", url: CDN_BASE + "WT-hero-1.webp", type: "image" }
  ];

  var heroBadges = [
    { className: "cv-wr-hero-badge cv-wr-hero-badge-guarantee", url: CDN_BASE + "WT-90day_4ySTp54.png", alt: "90 day money-back guarantee" },
    { className: "cv-wr-hero-badge cv-wr-hero-badge-drop", url: CDN_BASE + "WT-price-drop-3x.jpg", alt: "Price drop" },
    { className: "cv-wr-hero-badge cv-wr-hero-badge-tested", url: CDN_BASE + "WT-tested-and-approved.png", alt: "Customer tested and approved" }
  ];

  var socialProofLogos = [
    CDN_BASE + "WT-usa-today-social.png",
    CDN_BASE + "WT-cbs-social.png",
    CDN_BASE + "WT-journal-social.png",
    CDN_BASE + "WT-forbes-social.png",
    CDN_BASE + "WT-fox-social.png",
    CDN_BASE + "WT-nbc-social.png",
    CDN_BASE + "WT-handyman-social.png"
  ];

  var benefitMedia = [
    { url: CDN_BASE + "WT-Cut-Overgrowth-optimized.mp4", type: "video", poster: CDN_BASE + "hero-video-frame.jpg" },
    { url: CDN_BASE + "WT-one-handed.webp", type: "image" },
    { url: CDN_BASE + "WT-Multi-use-Blades-optimized.mp4", type: "video", poster: CDN_BASE + "multi-use-frame.jpg" },
    { url: CDN_BASE + "WT-runtime.webp", type: "image" },
    { url: CDN_BASE + "WT-Safety-Demo-optimized.mp4", type: "video" }
  ];

  var benefits = [
    {
      title: "Cuts Through Overgrowth Fast",
      text: "The 18,000 RPM motor powers through thick grass, stubborn weeds, and messy yard growth so you can clean up your lawn in a fraction of the time.",
      proof: "I was shocked by how much power this little trimmer has. It went right through the thick weeds along my fence line and cleaned up the yard way faster than my old trimmer.",
      author: "James P., Verified Customer",
      label: "Video"
    },
    {
      title: "Lightweight One-Handed Control",
      text: "The compact body and anti-slip grip make it easy to carry, steer, and control with one hand, especially around edges, corners, and uneven spots.",
      proof: "Super light and easy to handle. I finished the whole backyard in half the time and didn’t feel worn out afterward like I usually do.",
      author: "Tina M., Verified Customer",
      label: "Video"
    },
    {
      title: "3 Blade Multi-Use Trimmer",
      text: "Your all-in-one yard tool. Switch between plastic blades for light lawn trimming, metal blades for tougher weeds, and the circular saw blade for small branches.",
      proof: "The different blades are what sold me. I used the plastic blade around the lawn edges, then cut branches with the metal one. It feels like three tools in one.",
      author: "Carlos V., Verified Customer",
      label: "Video",
      dark: true
    },
    {
      title: "24V Battery With Long Runtime",
      text: "No gas, fumes, or extension cords. The rechargeable 24V lithium battery gives you grab-and-go freedom around the yard, with up to 3-4 hours of trimming power per charge.",
      proof: "The battery life surprised me. I did the front yard, backyard, and fence line on one charge, then plugged it in when I was done.",
      author: "Paula D., Verified Customer",
      label: "Video"
    },
    {
      title: "Work Safer & Stay In Control",
      text: "Built with a safety lock, iron guardrail, protection dish, anti-slip grip, and heat protection so you can cut confidently without feeling like the tool is getting away from you.",
      proof: "It feels powerful but controlled. The guard and safety lock make me feel a lot more comfortable using it around the garden and along the walkway.",
      author: "Henry L., Verified Customer",
      label: "Video"
    }
  ];

  function asset(path) {
    if (/^https?:\/\//.test(path)) return path;
    return ASSET_BASE + path;
  }

  function preloadAsset(url, asType) {
    if (!url || !/^https?:\/\//.test(url)) return;
    if (document.querySelector('link[data-cv-wr-preload="' + url + '"]')) return;
    var link = document.createElement("link");
    link.rel = "preload";
    link.as = asType || "image";
    link.href = url;
    link.setAttribute("data-cv-wr-preload", url);
    if (/^https:\/\/cdn\.29next\.store/i.test(url)) {
      link.crossOrigin = "anonymous";
    }
    document.head.appendChild(link);
  }

  function primeCriticalAssets() {
    getCriticalHeroImageUrls().forEach(function (url) {
      preconnectOrigin(url);
      preloadAsset(url, "image");
    });
  }

  function primeHeroSecondaryAssets() {
    slides.slice(1).forEach(function (slide) {
      if (slide.type !== "video" && !/\.mp4(?:\?|$)/i.test(slide.url)) preloadAsset(slide.url, "image");
      if (slide.poster) preloadAsset(slide.poster, "image");
    });
  }

  function primeDeferredAssets() {
    var urls = [];
    urls.push(CDN_BASE + "WT-review-image-1.png");
    slides.slice(1).forEach(function (slide) {
      if (slide.type !== "video" && !/\.mp4(?:\?|$)/i.test(slide.url)) urls.push(slide.url);
      if (slide.poster) urls.push(slide.poster);
    });
    socialProofLogos.forEach(function (url) {
      urls.push(url);
    });
    benefitMedia.forEach(function (media) {
      if (media.type !== "video" && !/\.mp4(?:\?|$)/i.test(media.url)) urls.push(media.url);
      if (media.poster) urls.push(media.poster);
    });
    var load = function () {
      urls.filter(Boolean).forEach(function (url) {
        preloadAsset(url, "image");
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(load, { timeout: 1800 });
    } else {
      window.setTimeout(load, 900);
    }
  }



  function preconnectOrigin(url) {
    if (!url || !/^https?:\/\//.test(url)) return;
    var origin = url.replace(/^(https?:\/\/[^\/]+).*$/, "$1");
    if (document.querySelector('link[data-cv-wr-preconnect="' + origin + '"]')) return;
    var link = document.createElement("link");
    link.rel = "preconnect";
    link.href = origin;
    link.crossOrigin = "anonymous";
    link.setAttribute("data-cv-wr-preconnect", origin);
    document.head.appendChild(link);
  }

  function getCriticalHeroImageUrls() {
    var urls = [asset("logo.png"), CDN_BASE + "WT-review-image-1.png", CDN_BASE + "WT-US-flag.png"];
    var firstSlide = slides[0];
    if (firstSlide) {
      if (firstSlide.type !== "video" && !/\.mp4(?:\?|$)/i.test(firstSlide.url)) urls.push(firstSlide.url);
      if (firstSlide.poster) urls.push(firstSlide.poster);
    }
    heroBadges.forEach(function (badge) {
      if (badge.url) urls.push(badge.url);
    });
    return urls.filter(function (url, index, list) {
      return url && list.indexOf(url) === index;
    });
  }


  function fallbackImageUrl(url) {
    if (!url || !/\.webp(?:\?|$)/i.test(url)) return "";
    return url.replace(/\.webp(\?.*)?$/i, ".jpg$1");
  }

  function fallbackImageAttr(url) {
    var fallback = fallbackImageUrl(url);
    return fallback ? ' onerror="this.onerror=null;this.src=\'' + fallback + '\';"' : "";
  }

  function installImageFallbacks() {
    if (document.documentElement.getAttribute("data-cv-wr-image-fallbacks") === "true") return;
    document.documentElement.setAttribute("data-cv-wr-image-fallbacks", "true");
    document.addEventListener("error", function (event) {
      var img = event.target;
      if (!img || img.tagName !== "IMG") return;
      var fallback = fallbackImageUrl(img.currentSrc || img.src);
      if (!fallback || img.getAttribute("data-cv-wr-fallback-used") === "true") return;
      img.setAttribute("data-cv-wr-fallback-used", "true");
      img.src = fallback;
    }, true);
  }

  function decodeImageUrl(url) {
    return new Promise(function (resolve) {
      var img = new Image();
      var settled = false;
      var finish = function () {
        if (settled) return;
        settled = true;
        resolve();
      };
      img.onload = function () {
        if (img.decode) {
          img.decode().then(finish).catch(finish);
        } else {
          finish();
        }
      };
      img.onerror = function () {
        var fallback = fallbackImageUrl(img.src);
        if (fallback && img.src !== fallback) {
          img.src = fallback;
          return;
        }
        finish();
      };
      img.src = url;
      window.setTimeout(finish, 3500);
    });
  }

  function loadCriticalHeroAssets(callback) {
    var urls = getCriticalHeroImageUrls();
    urls.forEach(function (url) {
      preconnectOrigin(url);
      preloadAsset(url, "image");
    });
    if (!window.Promise) {
      callback();
      return;
    }
    Promise.all(urls.map(decodeImageUrl)).then(callback).catch(callback);
    window.setTimeout(callback, 3600);
  }

  function hideControlElementWhilePending(element) {
    if (!element || element.getAttribute("data-cv-wr-control-hidden") === "true") return;
    var rect = element.getBoundingClientRect();
    element.setAttribute("data-cv-wr-control-hidden", "true");
    element.style.opacity = "0";
    element.style.pointerEvents = "none";
    element.style.transition = "none";
    if (rect.height > 0) {
      element.style.minHeight = Math.ceil(rect.height) + "px";
    }
  }

  function hideControlReplacementZoneWhilePending(hero, benefitsSection) {
    hideControlElementWhilePending(hero);
    hideControlElementWhilePending(benefitsSection);
    [".tsti-btm", ".sec2", ".sec3", ".sec7"].forEach(function (selector) {
      document.querySelectorAll(selector).forEach(hideControlElementWhilePending);
    });
  }

  function renderMedia(media, className, alt) {
    if (!media || !media.url) return "";
    if (media.type === "video" || /\.mp4(?:\?|$)/i.test(media.url)) {
      var poster = media.poster ? ' poster="' + media.poster + '"' : "";
      return '<video class="' + className + '" autoplay muted loop playsinline preload="none"' + poster + ' data-cv-video-src="' + media.url + '"></video>';
    }
    var priority = /cv-wr-main-media/.test(className) && !/cv-wr-lazy-media/.test(className) ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"';
    return '<img class="' + className + '" src="' + media.url + '" alt="' + (alt || "") + '" decoding="async"' + priority + fallbackImageAttr(media.url) + '>';
  }

  function renderHeroBadges() {
    return heroBadges.map(function (badge) {
      if (badge.svg) {
        return badge.svg.replace("<svg ", '<svg class="' + badge.className + '" ');
      }
      return '<img class="' + badge.className + '" src="' + badge.url + '" alt="' + badge.alt + '" loading="eager" decoding="async" fetchpriority="high"' + fallbackImageAttr(badge.url) + '>';
    }).join("");
  }

  function renderHeroMain(index) {
    var activeIndex = typeof index === "number" ? index : 0;
    return '<div class="cv-wr-media-placeholder cv-wr-media-filled" data-cv-wr-main data-cv-wr-active-slide="' + activeIndex + '">' + slides.map(function (slide, slideIndex) {
      return '<div class="cv-wr-main-slide' + (slideIndex === activeIndex ? " cv-wr-main-slide-active" : "") + '" data-cv-wr-main-slide="' + slideIndex + '">' + renderMedia(slide, slideIndex === 0 ? "cv-wr-main-media" : "cv-wr-main-media cv-wr-lazy-media", slide.label) + (slideIndex === 0 ? renderHeroBadges() : "") + '</div>';
    }).join("") + '</div>';
  }

  function renderHeroThumb(slide) {
    if (slide.type === "video" || /\.mp4(?:\?|$)/i.test(slide.url)) {
      var poster = slide.poster ? ' poster="' + slide.poster + '"' : "";
      return '<video class="cv-wr-thumb-media" muted playsinline preload="none"' + poster + ' data-cv-video-src="' + slide.url + '"></video>';
    }
    return renderMedia(slide, "cv-wr-thumb-media", slide.label);
  }

  function renderFinalMedia() {
    return '<div class="cv-wr-final-placeholder cv-wr-media-filled">' + renderMedia(slides[0], "cv-wr-main-media cv-wr-lazy-media", "Wood Ranger trimmer") + renderHeroBadges() + '</div>';
  }

  function ctaIconMarkup() {
    return '<svg class="cv-wr-cta-icon" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true" focusable="false"><circle cx="13" cy="13" r="13" fill="#C8A705"/><path d="M12.8728 8.28966L14.3333 6.8418L20.5266 13.0074L14.3179 19.1576L12.8599 17.7072L16.7023 13.9094L6.18401 14.0299L6.1582 11.9798L16.4494 11.8619L12.8728 8.28966Z" fill="white"/></svg>';
  }

  function getShipDate(days) {
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var date = new Date();
    date.setDate(date.getDate() + days);
    return monthNames[date.getMonth()] + " " + date.getDate();
  }

  function ctaTrustMarkup() {
    return [
      '<div class="cv-wr-cta-bottom">',
        '<div class="cv-wr-cta-ship" aria-hidden="true"></div>',
        '<div class="cv-wr-cta-text">Ship by <span class="cv-wr-ship-date">' + getShipDate(1) + '</span> <span>|</span> Stock Levels</div>',
        '<div class="cv-wr-cta-stock-view" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>',
        '<div class="cv-wr-cta-stock-level">LOW</div>',
      '</div>'
    ].join("");
  }

  function ctaOriginMarkup() {
    return '<p class="cv-wr-cta-origin">🇺🇸 Ships From Ohio, USA</p>';
  }

  function ctaMarkup(includeOrigin) {
    var showOrigin = includeOrigin !== false;
    return (showOrigin ? ctaOriginMarkup() : '') + '<a href="#" class="cv-wr-cta go-to-offer"><span>Order Now & Save 50% Off</span>' + ctaIconMarkup() + '</a>' + ctaTrustMarkup();
  }

  function mobileStickyCtaMarkup() {
    return [
      '<a href="#" class="cv-wr-sticky-cta go-to-offer"><span>Order Now & Save 50% Off</span>' + ctaIconMarkup() + '</a>',
      ctaTrustMarkup()
    ].join("");
  }

  function waitForTargets(callback) {
    var done = false;
    var observer = null;
    var timeout = null;

    function check() {
      if (done) return;
      var hero = document.querySelector(".sec1");
      var benefitsSection = document.querySelector(".sec6#benefits, #benefits.sec6");

      if (hero && benefitsSection) {
        done = true;
        if (observer) observer.disconnect();
        if (timeout) window.clearTimeout(timeout);
        callback(hero, benefitsSection);
      }
    }

    check();
    if (done) return;

    observer = new MutationObserver(check);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", check, { once: true });
    }

    timeout = window.setTimeout(function () {
      if (observer) observer.disconnect();
    }, 10000);
  }

  function renderHeader() {
    return [
      '<header class="cv-wr-header">',
        '<div class="container">',
          '<div class="cv-wr-header-inner">',
            '<img class="cv-wr-logo" src="' + asset("logo.png") + '" alt="Wood Ranger">',
            '<nav class="cv-wr-menu" aria-label="Primary">',
              '<a href="#features">Features</a>',
              '<a href="#comparison">Comparison</a>',
              '<a href="#reviews">Reviews</a>',
            '</nav>',
            '<a href="#" class="cv-wr-header-cta go-to-offer">Order Now</a>',
            '<span class="cv-wr-flag" aria-hidden="true"></span>',
            '<button class="cv-wr-mobile-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>',
          '</div>',
        '</div>',
      '</header>'
    ].join("");
  }

  function renderPromoBanner() {
    return [
      '<div class="cv-wr-promo-banner" role="region" aria-label="Promotional offer">',
        '<span>GET UP TO 54% OFF NOW!</span>',
        '<span>USE PROMO CODE:</span>',
        '<strong>BUZZ26</strong>',
        '<span>- ENDS AT MIDNIGHT</span>',
      '</div>'
    ].join("");
  }

  function renderHero() {
    return [
      '<section class="cv-wr-hero" data-cv-wr-section="hero">',
        '<div class="container">',
          '<div class="cv-wr-hero-grid">',
            '<div class="cv-wr-gallery cv-wr-gallery-static">',
              '<div class="cv-wr-gallery-main">',
                renderHeroMain(0),
              '</div>',
            '</div>',
            '<div class="cv-wr-hero-copy">',
              '<div class="cv-wr-rating"><span class="cv-wr-stars">★★★★★</span><span>15,321+ | 5-Star Reviews</span></div>',
              '<h1>Cut, Edge &amp; Trim <span>5x Faster</span><br>With Only One Tool</h1>',
              '<p class="cv-wr-subhead">Power through grass, weeds, brush, and small branches with this lightweight all-in-one trimmer</p>',
              '<ul class="cv-wr-checks">',
                '<li>Slice through thick overgrowth</li>',
                '<li>Ultra-light design saves your shoulders</li>',
                '<li>Swap blades in seconds</li>',
                '<li>Up to 4 hours of cordless cutting power</li>',
                '<li>Safe, easy, one-handed operation</li>',
              '</ul>',
              ctaMarkup(false),
              '<div class="cv-wr-mini-review">',
                '<img class="cv-wr-avatar" src="' + CDN_BASE + 'WT-review-image-1.png" alt="Steve M.">',
                '<div><div class="cv-wr-stars">★★★★★</div><p>The best trimmer I’ve owned. I’ve got bad shoulders and usually have issues. But this trimmer is light, easy to use, and didn’t bother my shoulders once. Great quality.</p><strong>Steve M., Verified Customer</strong></div>',
              '</div>',
            '</div>',
          '</div>',
          '<div class="cv-wr-seen"><p>As Seen On:</p><div class="cv-wr-logos">' + socialProofLogos.concat(socialProofLogos).map(function (url, index) { return '<span' + (index >= socialProofLogos.length ? ' aria-hidden="true"' : '') + '><img src="' + url + '" alt=""></span>'; }).join("") + '</div></div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderBenefitMedia(item, index) {
    return renderMedia(benefitMedia[index], "cv-wr-benefit-media-asset", item.title);
  }

  function renderBenefits() {
    return [
      '<section class="cv-wr-benefits" id="benefits" data-cv-wr-section="benefits">',
        '<div class="container">',
          '<div class="cv-wr-benefit-head">',
            '<h2>Powerful Cutting Without <br class="cv-wr-benefit-head-break">The Heavy Lifting</h2>',
            '<p>While bulky gas trimmers are tiring to carry and control, Wood Ranger gives you fast cutting power in a lightweight cordless tool built for everyday yard work.</p>',
          '</div>',
          benefits.map(function (item, index) {
            return [
              '<article class="cv-wr-benefit-row' + (item.dark ? " cv-wr-benefit-dark" : "") + ((index === 0 || index === 4) ? " cv-wr-benefit-reverse" : "") + '">',
                '<h3 class="cv-wr-benefit-mobile-title">' + item.title + '</h3>',
                '<div class="cv-wr-benefit-media">' + renderBenefitMedia(item, index) + '</div>',
                '<div class="cv-wr-benefit-copy">',
                  '<h3>' + item.title + '</h3>',
                  '<p>' + item.text + '</p>',
                  '<div class="cv-wr-proof"><div class="cv-wr-proof-stars">★★★★★</div><p>' + item.proof + '</p><strong>' + item.author + '</strong></div>',
                '</div>',
              '</article>'
            ].join("");
          }).join(""),
          '<div class="cv-wr-benefit-cta">' + ctaMarkup() + '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderMiddleSections() {
    var jobs = [
      [CDN_BASE + "WT-fencelines.webp", "Fence Lines", "Cut thick weeds and overgrowth along fences without fighting a heavy gas trimmer."],
      [CDN_BASE + "WT-flower-beds.webp", "Garden Beds", "Trim around flowers, shrubs, and tight edges with better control and less risk of tearing up the area."],
      [CDN_BASE + "WT-edges.webp", "Walkways", "Clean up grass spilling over paths, pavers, and driveway edges so the whole yard looks sharper."],
      [CDN_BASE + "WT-branches.webp", "Branches", "Swap to the circular blade when weeds turn woody or small branches start getting in the way."],
      [CDN_BASE + "WT-bushes.webp", "Bushes", "Cut back overgrown bushes, tidy up shrubs, and clear messy growth around the yard without switching tools."],
      [CDN_BASE + "WT-lawn.webp", "Lawns", "Mow grass and keep your yard looking neat without dragging out bulky equipment."]
    ];

    return [
      '<section class="cv-wr-job-section">',
        '<div class="container">',
          '<h2>One Tool. Every Yard Job <span class="cv-wr-nowrap">You’ve<br class="cv-wr-desktop-break"> Been Putting Off.</span></h2>',
          '<div class="cv-wr-job-grid">',
            '<div class="cv-wr-job-track">',
            jobs.concat(jobs, jobs, jobs).map(function (job, index) {
              return '<article class="cv-wr-job-card' + (index >= jobs.length ? ' cv-wr-job-card-duplicate' : '') + '"' + (index >= jobs.length ? ' aria-hidden="true"' : '') + '><img src="' + asset(job[0]) + '" alt=""><div><h3>' + job[1] + '</h3><p>' + job[2] + '</p></div></article>';
            }).join(""),
            '</div>',
          '</div>',
          '<div class="cv-wr-job-dots" aria-hidden="true"><span class="cv-wr-job-dot cv-wr-job-dot-active"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span><span class="cv-wr-job-dot"></span></div>',
        '</div>',
      '</section>',
      '<section class="cv-wr-comparison" id="comparison">',
        '<div class="container">',
          '<h2>Why Traditional Weed Whackers <br class="cv-wr-comparison-head-break">Are A Thing Of The Past</h2>',
          '<p class="cv-wr-comparison-sub">Bulky gas and corded trimmers are heavy, loud, and frustrating to set up. Wood Ranger is light, cordless, and ready for the yard jobs you usually avoid.</p>',
          '<div class="cv-wr-compare-grid">',
            '<article><div class="cv-wr-compare-img"><img src="' + CDN_BASE + 'WT-comp-1.webp" alt=""><span class="cv-wr-good">✓</span></div><h3>Wood Ranger Trimmer</h3><ul><li>Lightweight one-hand control</li><li>Grab & Go cordless lithium power</li><li>3-in-1 multi-use trimmer</li><li>Adjustable handle and length</li><li>Safety lock, guardrail, and protection dish</li></ul></article>',
            '<div class="cv-wr-vs">VS</div>',
            '<article><div class="cv-wr-compare-img"><img src="' + CDN_BASE + 'WT-comp-2.webp" alt=""><span class="cv-wr-bad">×</span></div><h3>Traditional Weed Whackers</h3><ul><li>Heavy, awkward, and tiring to carry</li><li>Tangled in cords or dealing with gas</li><li>Limited to basic grass and weeds</li><li>Awkward around edges and tight spots</li><li>Harder to control around delicate areas</li></ul></article>',
          '</div>',
          '<div class="cv-wr-benefit-cta">' + ctaMarkup() + '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function renderFinalCtaSection() {
    return [
      '<section class="cv-wr-final-cta" id="cv-wr-final-cta">',
        '<div class="cv-wr-final-container">',
          '<div class="cv-wr-final-grid">',
            '<div class="cv-wr-final-media">',
              renderFinalMedia(),
            '</div>',
            '<div class="cv-wr-final-copy">',
              '<div class="cv-wr-rating"><span class="cv-wr-stars">★★★★★</span><span>27,517+ 5-Star Reviews</span></div>',
              '<h2>Don’t Miss Out On This Limited-Time Offer. <span>Order Now</span></h2>',
              '<div class="cv-wr-final-mobile-media">' + renderFinalMedia() + '</div>',
              '<ul class="cv-wr-checks">',
                '<li>Fast 2-3 shipping from our US Warehouse</li>',
                '<li>90 Day Back Guarantee</li>',
                '<li>Top-Notch Support Team</li>',
              '</ul>',
              '<p class="cv-wr-final-ship">🇺🇸 Ships From Ohio, USA</p>',
              '<div class="cv-wr-final-action">' + ctaMarkup(false) + '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</section>'
    ].join("");
  }

  function insertFinalCtaSection() {
    var reviewsSection = document.querySelector("#reviews, .sec9");
    var faqSection = document.querySelector("#faq, .sec10");
    if (!reviewsSection || !faqSection) return;
    document.querySelectorAll(".cv-wr-final-cta").forEach(function (section) {
      section.remove();
    });
    var finalWrap = document.createElement("div");
    finalWrap.innerHTML = renderFinalCtaSection();
    faqSection.insertAdjacentElement("beforebegin", finalWrap.firstElementChild);
  }

  function normalizeCheckoutHref(href) {
    try {
      var base = window.location.origin && window.location.origin !== "null"
        ? window.location.origin
        : "https://offer.woodrangertools.com";
      var checkoutUrl = new URL(href || CHECKOUT_PATH, base);
      checkoutUrl.pathname = CHECKOUT_PATH;
      if (!checkoutUrl.search && window.location.search) {
        checkoutUrl.search = window.location.search;
      }
      return checkoutUrl.toString();
    } catch (error) {
      return CHECKOUT_PATH + window.location.search;
    }
  }

  function syncOfferLinks(root) {
    var href = "";

    if (window.campaign) {
      if (typeof window.campaign.captureURLParams === "function") {
        window.campaign.captureURLParams();
      }
      if (typeof window.campaign.getSuccessUrl === "function") {
        href = window.campaign.getSuccessUrl(CHECKOUT_PATH);
      }
    }

    if (!href) {
      var links = Array.prototype.slice.call(document.querySelectorAll(".go-to-offer[href]"));
      links.some(function (link) {
        var candidate = link.getAttribute("href");
        if (!candidate || candidate === "#" || candidate.charAt(0) === "#") return false;
        href = candidate;
        return true;
      });
    }

    if (!href) {
      try {
        var checkoutUrl = window.location.origin && window.location.origin !== "null"
          ? new URL(CHECKOUT_PATH, window.location.origin)
          : new URL(CHECKOUT_PATH, "https://offer.woodrangertools.com");
        checkoutUrl.search = window.location.search;
        href = checkoutUrl.toString();
      } catch (error) {
        href = CHECKOUT_PATH + window.location.search;
      }
    }

    href = normalizeCheckoutHref(href);

    (root || document).querySelectorAll(".go-to-offer").forEach(function (link) {
      link.setAttribute("href", href);
    });
  }

  function initCarousel(root) {
    var gallery = root.querySelector("[data-cv-wr-gallery]");
    if (!gallery || gallery.getAttribute("data-cv-bound") === "true") return;
    gallery.setAttribute("data-cv-bound", "true");

    var main = gallery.querySelector("[data-cv-wr-main]");
    var thumbs = Array.prototype.slice.call(gallery.querySelectorAll("[data-cv-wr-slide]"));
    var mainSlides = Array.prototype.slice.call(gallery.querySelectorAll("[data-cv-wr-main-slide]"));
    var index = 0;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      var label = slides[index].label;
      mainSlides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === index;
        slide.classList.toggle("cv-wr-main-slide-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
      main.setAttribute("data-cv-wr-active-slide", String(index));
      main.setAttribute("aria-label", label);
      thumbs.forEach(function (thumb, thumbIndex) {
        thumb.setAttribute("aria-selected", thumbIndex === index ? "true" : "false");
      });
      hydrateDeferredVideos(mainSlides[index]);
    }

    gallery.querySelector(".cv-wr-prev").addEventListener("click", function () {
      show(index - 1);
    });

    gallery.querySelector(".cv-wr-next").addEventListener("click", function () {
      show(index + 1);
    });

    thumbs.forEach(function (thumb) {
      thumb.addEventListener("click", function () {
        show(Number(thumb.getAttribute("data-cv-wr-slide")));
      });
    });

    var touchStartX = 0;
    var touchStartY = 0;
    var isSwiping = false;
    var mobileSwipeQuery = window.matchMedia("(max-width: 600px)");

    main.addEventListener("touchstart", function (event) {
      if (!mobileSwipeQuery.matches || !event.touches || event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      isSwiping = true;
    }, { passive: true });

    main.addEventListener("touchend", function (event) {
      if (!isSwiping || !mobileSwipeQuery.matches || !event.changedTouches || event.changedTouches.length !== 1) return;
      var deltaX = event.changedTouches[0].clientX - touchStartX;
      var deltaY = event.changedTouches[0].clientY - touchStartY;
      isSwiping = false;
      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
      show(index + (deltaX < 0 ? 1 : -1));
    }, { passive: true });
  }

  function initJobDots(root) {
    (root || document).querySelectorAll(".cv-wr-job-section").forEach(function (section) {
      if (section.getAttribute("data-cv-wr-job-dots") === "true") return;
      var grid = section.querySelector(".cv-wr-job-grid");
      var dots = Array.prototype.slice.call(section.querySelectorAll(".cv-wr-job-dot"));
      if (!grid || !dots.length) return;
      section.setAttribute("data-cv-wr-job-dots", "true");

      function update() {
        var firstCard = grid.querySelector(".cv-wr-job-card:not(.cv-wr-job-card-duplicate)");
        var cardStep = firstCard ? firstCard.getBoundingClientRect().width + parseFloat(window.getComputedStyle(section.querySelector(".cv-wr-job-track")).columnGap || "0") : grid.clientWidth;
        var active = Math.round(grid.scrollLeft / Math.max(1, cardStep));
        active = Math.max(0, Math.min(dots.length - 1, active));
        dots.forEach(function (dot, index) {
          dot.classList.toggle("cv-wr-job-dot-active", index === active);
        });
      }

      grid.addEventListener("scroll", function () {
        window.requestAnimationFrame(update);
      }, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  function hydrateDeferredVideos(root) {
    (root || document).querySelectorAll("video[data-cv-video-src]").forEach(function (video) {
      var src = video.getAttribute("data-cv-video-src");
      if (!src) return;
      video.removeAttribute("data-cv-video-src");
      var source = document.createElement("source");
      source.src = src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();
      if (video.autoplay) {
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {});
        }
      }
    });
  }

  function hydrateVisibleDeferredVideos() {
    var videos = Array.prototype.slice.call(document.querySelectorAll("video[data-cv-video-src]"));
    if (!videos.length) return;

    if (!("IntersectionObserver" in window)) {
      hydrateDeferredVideos(document);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        hydrateDeferredVideos(entry.target.parentNode || entry.target);
      });
    }, { rootMargin: "900px 0px", threshold: 0.01 });

    videos.forEach(function (video) {
      observer.observe(video);
    });
  }

  function hydrateVideosAfterImages() {
    var scheduled = false;

    function run() {
      if (scheduled) return;
      scheduled = true;
      var hydrate = function () {
        window.setTimeout(function () {
          hydrateDeferredVideos(document);
        }, 350);
      };
      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(hydrate, { timeout: 900 });
      } else {
        window.setTimeout(hydrate, 350);
      }
    }

    hydrateVisibleDeferredVideos();

    var images = Array.prototype.slice.call(document.images).filter(function (img) {
      return !img.complete || img.naturalWidth === 0;
    });
    if (!images.length) {
      run();
      return;
    }

    var remaining = images.length;
    var done = function () {
      remaining -= 1;
      if (remaining <= 0) run();
    };
    images.forEach(function (img) {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
    window.setTimeout(run, 6000);
  }

  function initMobileHeader(header) {
    var toggle = header.querySelector(".cv-wr-mobile-toggle");
    var menu = header.querySelector(".cv-wr-menu");
    if (!toggle || !menu || header.getAttribute("data-cv-mobile-bound") === "true") return;
    header.setAttribute("data-cv-mobile-bound", "true");

    function closeMenu() {
      header.classList.remove("cv-wr-menu-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    toggle.addEventListener("click", function () {
      var isOpen = header.classList.toggle("cv-wr-menu-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        var targetId = link.getAttribute("href");
        var target = targetId && targetId.charAt(0) === "#" ? document.querySelector(targetId) : null;
        event.preventDefault();
        menu.querySelectorAll("a").forEach(function (item) {
          item.removeAttribute("aria-current");
        });
        link.setAttribute("aria-current", "page");
        closeMenu();
        if (target) {
          window.scrollTo({
            top: Math.max(0, target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight),
            behavior: "smooth"
          });
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!header.classList.contains("cv-wr-menu-open")) return;
      if (header.contains(event.target)) return;
      closeMenu();
    });
  }

  function initHeaderStickiness(header, promo) {
    if (!header || !promo || header.getAttribute("data-cv-header-sticky-bound") === "true") return;
    header.setAttribute("data-cv-header-sticky-bound", "true");

    var spacer = document.createElement("div");
    spacer.className = "cv-wr-header-spacer";
    header.insertAdjacentElement("afterend", spacer);

    function updateHeaderPosition() {
      var shouldFix = window.pageYOffset >= promo.offsetHeight;
      var headerHeight = header.offsetHeight;
      header.classList.toggle("cv-wr-header-fixed", shouldFix);
      spacer.style.height = shouldFix ? headerHeight + "px" : "0px";
    }

    var ticking = false;
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        updateHeaderPosition();
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateHeaderPosition();
  }

  function replaceControlCtas(root) {
    root.querySelectorAll("#reviews > .container > .btn-bx, .sec9 > .container > .btn-bx, #reviews .cv-wr-control-cta-replacement, .sec9 .cv-wr-control-cta-replacement").forEach(function (box) {
      box.remove();
    });
    root.querySelectorAll(".sec4 > .container > .btn-bx, .sec8 > .container > .btn-bx, #faq > .container > .btn-bx, .sec10 > .container > .btn-bx").forEach(function (box) {
      box.className = "cv-wr-benefit-cta cv-wr-control-cta-replacement";
      box.innerHTML = ctaMarkup();
    });
  }

  function replaceMobileStickyCta(root) {
    var sticky = root.querySelector("#ctabtn-mob");
    if (!sticky || sticky.getAttribute("data-cv-sticky-replaced") === "true") return;
    sticky.setAttribute("data-cv-sticky-replaced", "true");
    sticky.className = "btn-bx show-mob cv-wr-sticky-footer";
    sticky.innerHTML = mobileStickyCtaMarkup();
    sticky.style.display = "none";
  }

  function initStickyCtaVisibility() {
    var sticky = document.querySelector("#ctabtn-mob.cv-wr-sticky-footer, .cv-wr-sticky-footer");
    if (!sticky) return;
    var mobileQuery = window.matchMedia("(max-width: 768px)");

    function getPageCtas() {
      return Array.prototype.slice.call(document.querySelectorAll(".cv-wr-cta.go-to-offer")).filter(function (cta) {
        return !cta.closest("#ctabtn-mob") && !cta.closest(".cv-wr-sticky-footer") && !cta.closest(".cv-wr-header");
      });
    }

    function isVisible(el) {
      var rect = el.getBoundingClientRect();
      return rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    }

    function updateSticky() {
      if (!mobileQuery.matches) {
        sticky.style.display = "none";
        return;
      }

      var heroCta = document.querySelector(".cv-wr-hero-copy > .cv-wr-cta.go-to-offer");
      if (!heroCta || heroCta.getBoundingClientRect().bottom > 0) {
        sticky.style.display = "none";
        return;
      }

      sticky.style.display = getPageCtas().some(isVisible) ? "none" : "";
    }

    window.cvWrUpdateStickyVisibility = updateSticky;
    if (document.documentElement.getAttribute("data-cv-sticky-visibility-bound") === "true") {
      updateSticky();
      return;
    }

    document.documentElement.setAttribute("data-cv-sticky-visibility-bound", "true");
    var ticking = false;
    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        ticking = false;
        updateSticky();
      });
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    if (mobileQuery.addEventListener) {
      mobileQuery.addEventListener("change", requestUpdate);
    } else if (mobileQuery.addListener) {
      mobileQuery.addListener(requestUpdate);
    }
    updateSticky();
  }

  function injectControlFontOverrides() {
    if (document.getElementById("cv-wr-control-font-overrides")) return;
    var style = document.createElement("style");
    style.id = "cv-wr-control-font-overrides";
    style.textContent = [
      ".cv-woodranger-hero-benefits .sec4, .cv-woodranger-hero-benefits .sec4 *,",
      ".cv-woodranger-hero-benefits .sec8, .cv-woodranger-hero-benefits .sec8 *,",
      ".cv-woodranger-hero-benefits .sec9, .cv-woodranger-hero-benefits .sec9 *,",
      ".cv-woodranger-hero-benefits .sec10, .cv-woodranger-hero-benefits .sec10 *,",
      ".cv-woodranger-hero-benefits #reviews, .cv-woodranger-hero-benefits #reviews *,",
      ".cv-woodranger-hero-benefits #faq, .cv-woodranger-hero-benefits #faq *,",
      ".cv-woodranger-hero-benefits .footer, .cv-woodranger-hero-benefits .footer * { font-family: Inter, Helvetica, sans-serif !important; }",
      ".cv-woodranger-hero-benefits .sec4 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec4 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec8 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec8 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec9 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec9 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits .sec10 :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits .sec10 :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits #reviews :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits #reviews :is(h1,h2,h3,h4,h5,h6,.commn-hdg) *,",
      ".cv-woodranger-hero-benefits #faq :is(h1,h2,h3,h4,h5,h6,.commn-hdg), .cv-woodranger-hero-benefits #faq :is(h1,h2,h3,h4,h5,h6,.commn-hdg) * { font-family: Barlow, Inter, Helvetica, sans-serif !important; }",
      ".cv-woodranger-hero-benefits .cv-wr-header-cta, .cv-woodranger-hero-benefits .cv-wr-header-cta *,",
      ".cv-woodranger-hero-benefits .cv-wr-cta, .cv-woodranger-hero-benefits .cv-wr-cta *,",
      ".cv-woodranger-hero-benefits .cv-wr-cta-bottom, .cv-woodranger-hero-benefits .cv-wr-cta-bottom *,",
      ".cv-woodranger-hero-benefits .cv-wr-sticky-cta, .cv-woodranger-hero-benefits .cv-wr-sticky-cta *,",
      ".cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta, .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-sticky-cta *,",
      ".cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom, .cv-woodranger-hero-benefits #ctabtn-mob .cv-wr-cta-bottom * { font-family: Roboto, Inter, Helvetica, sans-serif !important; }",
      "@media (max-width: 600px) { .cv-woodranger-hero-benefits #features .commn-para, .cv-woodranger-hero-benefits .sec4 .commn-para { font-size: 16px !important; line-height: 1.45 !important; } .cv-woodranger-hero-benefits .sec8 .incld-txt span { font-size: 18px !important; } }"
    ].join("");
    document.head.appendChild(style);
  }

  function renderReviewStars(count) {
    var active = Math.max(0, Math.min(5, Number(count) || 5));
    var stars = [];
    for (var i = 1; i <= 5; i += 1) {
      stars.push('<span class="' + (i <= active ? 'is-on' : 'is-off') + '">★</span>');
    }
    return '<span class="cv-wr-review-stars cv-wr-review-stars-' + active + '" aria-label="' + active + ' out of 5 stars">' + stars.join("") + '</span>';
  }

  function replaceStarImage(img, count) {
    if (!img || img.getAttribute("data-cv-wr-star-replaced") === "true") return;
    var wrap = document.createElement("span");
    wrap.innerHTML = renderReviewStars(count);
    img.setAttribute("data-cv-wr-star-replaced", "true");
    img.replaceWith(wrap.firstElementChild);
  }

  function upgradeReviewStars() {
    document.querySelectorAll("#reviews, .sec9").forEach(function (reviews) {
      reviews.querySelectorAll(".star-review-col-1 img").forEach(function (img) {
        replaceStarImage(img, 5);
      });
      reviews.querySelectorAll(".star-review-col-1").forEach(function (col) {
        var stars = col.querySelector(".cv-wr-review-stars");
        var score = Array.from(col.children).find(function (child) {
          return child !== stars && /4\.8\s*out\s*of\s*5/i.test(child.textContent || "");
        });
        var based = Array.from(col.childNodes).find(function (node) {
          return /Based\s+On/i.test(node.textContent || "");
        });
        col.querySelectorAll("br").forEach(function (br) {
          br.remove();
        });
        if (based && !col.querySelector(".cv-wr-rating-based")) {
          var basedEl = based.nodeType === 3 ? document.createElement("span") : based;
          basedEl.textContent = (based.textContent || "").trim();
          basedEl.classList.add("cv-wr-rating-based");
          if (based.nodeType === 3) col.replaceChild(basedEl, based);
        }
        if (score && stars) {
          score.classList.add("cv-wr-rating-score");
          col.insertBefore(score, stars);
        }
      });
      reviews.querySelectorAll(".rating-vals li").forEach(function (row, index) {
        var img = row.querySelector("img");
        replaceStarImage(img, 5 - index);
      });
      reviews.querySelectorAll("img.testi-star, .testi-cont img[src*='star']").forEach(function (img) {
        replaceStarImage(img, 5);
      });
    });
  }

  function renderExperiment(hero, benefitsSection) {
    document.documentElement.classList.add(EXPERIMENT_CLASS);
    document.documentElement.setAttribute("data-" + INIT_FLAG, "true");

    var benefitsWrap = document.createElement("div");
    benefitsWrap.innerHTML = renderBenefits();
    var newBenefits = benefitsWrap.firstElementChild;

    var middleWrap = document.createElement("div");
    middleWrap.innerHTML = renderMiddleSections();

    var headerWrap = document.createElement("div");
    headerWrap.innerHTML = renderHeader();
    var newHeader = headerWrap.firstElementChild;

    var promoWrap = document.createElement("div");
    promoWrap.innerHTML = renderPromoBanner();
    var newPromo = promoWrap.firstElementChild;

    var heroWrap = document.createElement("div");
    heroWrap.innerHTML = renderHero();
    var newHero = heroWrap.firstElementChild;
    hero.replaceWith(newHero);
    newHero.insertAdjacentElement("beforebegin", newHeader);
    newHeader.insertAdjacentElement("beforebegin", newPromo);
    newHero.insertAdjacentElement("afterend", newBenefits);
    Array.prototype.slice.call(middleWrap.children).reverse().forEach(function (section) {
      var featureSection = document.querySelector(".sec4");
      (featureSection || newBenefits).insertAdjacentElement("afterend", section);
    });
    benefitsSection.remove();
    [".tsti-btm", ".sec2", ".sec3", ".sec7"].forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (section) {
        section.remove();
      });
    });

    replaceControlCtas(document);
    insertFinalCtaSection();
    upgradeReviewStars();
    setTimeout(upgradeReviewStars, 100);
    setTimeout(upgradeReviewStars, 500);
    replaceMobileStickyCta(document);
    syncOfferLinks(document);
    initStickyCtaVisibility();
    injectControlFontOverrides();
    initCarousel(newHero);
    initJobDots(document);
    initMobileHeader(newHeader);
    initHeaderStickiness(newHeader, newPromo);
    hydrateVideosAfterImages();
    primeDeferredAssets();

    window.setTimeout(function () {
      replaceControlCtas(document);
      insertFinalCtaSection();
      replaceMobileStickyCta(document);
      syncOfferLinks(document);
      initStickyCtaVisibility();
      injectControlFontOverrides();
      initJobDots(document);
    }, 600);
  }


  function apply(hero, benefitsSection) {
    var state = document.documentElement.getAttribute("data-" + INIT_FLAG);
    if (state === "true" || state === "pending") return;
    document.documentElement.setAttribute("data-" + INIT_FLAG, "pending");
    installImageFallbacks();
    hideControlReplacementZoneWhilePending(hero, benefitsSection);
    primeHeroSecondaryAssets();
    loadCriticalHeroAssets(function () {
      if (document.documentElement.getAttribute("data-" + INIT_FLAG) === "true") return;
      renderExperiment(hero, benefitsSection);
    });
  }

  primeCriticalAssets();
  waitForTargets(apply);
})();
}}},{"id":1001112476,"type":"richStructure","data":{"js":function(convertContext){ 
 Object.assign(convert.T, typeof convertContext !== "undefined" ? convertContext : {}); return convert.T.applyChange('.cv-wr-promo-banner > span:nth-child(1)', {"originalSelector":".cv-wr-promo-banner > span:nth-child(1)","outerHtml":"<span>GET 50% OFF NOW!</span>","insertHtml":{},"styles":"{}"}, undefined, 1001112476); 
},"selector":".cv-wr-promo-banner > span:nth-child(1)","json":"{\"selector\":\".cv-wr-promo-banner > span:nth-child(1)\",\"fields\":{},\"outerHtml\":\"<span>GET 50% OFF NOW!<\/span>\",\"tags\":[],\"elementId\":\"\",\"parentSelectors\":[\".cv-wr-promo-banner\",\".overflow\",\"body\"],\"lastChange\":{\"name\":\"CRO Team\",\"timestamp\":1780945073},\"id\":1001112476,\"modified\":1780945076312,\"matchingElements\":1}"}}],"traffic_allocation":50.0001}]},{"id":"100142855","name":"LB - Checkout Added Steps - #100141976","type":"deploy","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"003:-lw-pdp-nw-lyt-cln-cln-c-10","version":11,"locations":["100111976"],"site_area":null,"audiences":[],"goals":[],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001223416","name":"Deployment","key":"1001223416-deployment","status":"running","changes":[{"id":1001114864,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}},{"id":1001114865,"type":"customCode","data":{"css":"html.cv-leafblower-step-flow-v1 {\n  scroll-behavior: smooth;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-step-panel {\n  width: 100%;\n  margin: 8px 0 14px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary {\n  width: 100%;\n  margin: 0 0 14px;\n  overflow: hidden;\n  border: 1px solid #dedede;\n  background: #fff;\n  color: #151515;\n  font-family: inherit;\n  font-size: 15px;\n  line-height: 1.35;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__row {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  gap: 14px;\n  align-items: center;\n  padding: 12px 14px;\n  border-top: 1px solid #e7e7e7;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__row:first-child {\n  border-top: 0;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__head {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  color: #4f4f4f;\n  font-size: 13px;\n  font-weight: 700;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__item {\n  align-items: start;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__title {\n  font-weight: 700;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__prices {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 2px;\n  text-align: right;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__compare {\n  color: #555;\n  font-size: 14px;\n  font-weight: 500;\n  text-decoration: line-through;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__saving {\n  background: #fff8d9;\n  font-weight: 700;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__saving strong {\n  color: #c9341c;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__shipping {\n  grid-template-columns: minmax(0, 1fr);\n  color: #222;\n  font-size: 13px;\n  font-weight: 400;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__pill {\n  display: inline-flex;\n  align-items: center;\n  min-height: 22px;\n  margin-left: 6px;\n  padding: 2px 8px;\n  border-radius: 5px;\n  background: #ffed8a;\n  color: #191919;\n  font-size: 12px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__total {\n  font-size: 17px;\n  font-weight: 700;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-step-cta {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 54px;\n  margin: 0;\n  border: 1px solid #d5ac10;\n  border-radius: 8px;\n  background: #ffc928;\n  color: #111;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  font-weight: 700;\n  line-height: 1.2;\n  text-align: center;\n  text-transform: none;\n  box-shadow: 0 4px 8px rgba(160, 169, 150, 0.44);\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment {\n  overflow: hidden;\n  border: 1px solid #dedede !important;\n  background: #fff !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-source-summary {\n  display: none !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-final-summary {\n  margin: 8px 0 10px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-final-summary .cv-lb-simple-summary__row {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .summary-wrapper,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-summary,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-summary__content {\n  width: 100% !important;\n  margin: 0 !important;\n  border: 0 !important;\n  background: #fff !important;\n  box-shadow: none !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .cart-summary__line,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .cart-item,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .shipping-note,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-totals__section {\n  padding-left: 14px !important;\n  padding-right: 14px !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .cart-summary__line.pb--header {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  color: #4f4f4f !important;\n  font-size: 13px !important;\n  font-weight: 700 !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .cart-item {\n  padding-top: 12px !important;\n  padding-bottom: 12px !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .shipping-note {\n  padding-top: 10px !important;\n  padding-bottom: 10px !important;\n  font-size: 13px !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-totals__section.cc-olympus {\n  background: #fff8d9 !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-totals__section.cc-olympus .order-totals__value,\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-totals__section.cc-olympus .pb-quantity__price {\n  color: #c9341c !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cart-box.cv-lb-stage-payment .order-totals__section.cc-total {\n  font-size: 17px !important;\n  font-weight: 800 !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-stage-payment .exp-checkout {\n  position: relative;\n  margin-top: 12px !important;\n  padding: 0 !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-stage-payment .express-checkout__title {\n  position: absolute;\n  top: -10px;\n  left: 50%;\n  padding: 0 12px;\n  background: #fff;\n  transform: translateX(-50%);\n  white-space: nowrap;\n  z-index: 1;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-stage-payment .express-checkout__buttons {\n  margin-top: 0 !important;\n  padding: 22px 14px 14px !important;\n  border: 1px solid #d7d7d7 !important;\n  border-radius: 4px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-step-cta:hover,\nhtml.cv-leafblower-step-flow-v1 .cv-lb-step-cta:focus {\n  filter: brightness(1.02);\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-step-cta:focus-visible {\n  outline: 3px solid rgba(17, 17, 17, 0.35);\n  outline-offset: 2px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-desktop-stage-label {\n  display: none;\n}\n\nhtml.cv-leafblower-step-flow-v1 .guarantee-section.cv-lb-stage-shipping {\n  display: none !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  justify-items: center;\n  margin-top: 18px;\n  align-items: center;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section {\n  display: flex !important;\n  width: 100%;\n  margin: 0 0 18px !important;\n  padding: 0 !important;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0;\n  background: transparent !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section .image-10 {\n  width: 60px !important;\n  max-width: 60px !important;\n  height: auto !important;\n  flex: 0 0 60px;\n  margin-right: 15px !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section .text-xs {\n  width: auto !important;\n  max-width: none;\n  color: #111;\n  font-size: 12.88px !important;\n  line-height: 17.388px !important;\n  text-align: left;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .trust-badges {\n  display: flex !important;\n  justify-content: center;\n  gap: 32px;\n  width: 100%;\n  margin: 0 !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .trust-badge__item {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .trust-badge--icon {\n  width: 20px !important;\n  height: 22px !important;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .trust-badge--text {\n  color: #5c5c5e;\n  font-size: 11px !important;\n  font-weight: 700;\n  line-height: 1.05 !important;\n  text-align: left;\n}\n\nhtml.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .credit-card__flags {\n  display: block !important;\n  width: 350px !important;\n  max-width: 350px !important;\n  height: auto !important;\n  margin: 0 auto !important;\n}\n\n@media (min-width: 768px) {\n  html.cv-leafblower-step-flow-v1.cv-lb-step-shipping .cv-lb-claim-panel .cv-lb-simple-summary,\n  html.cv-leafblower-step-flow-v1.cv-lb-step-shipping .cv-lb-claim-panel .cv-lb-claim-trust {\n    display: none !important;\n  }\n\n  html.cv-leafblower-step-flow-v1.cv-lb-step-payment .cv-lb-proceed-panel .trust-badges,\n  html.cv-leafblower-step-flow-v1.cv-lb-step-payment .cv-lb-proceed-panel .credit-card__flags {\n    display: none !important;\n  }\n\n  html.cv-leafblower-step-flow-v1.cv-lb-step-payment .cv-lb-proceed-panel .cv-lb-simple-summary {\n    display: none !important;\n  }\n\n  \/* Shipping stage has no payment iframes, so display:none is safe here. *\/\n  html.cv-leafblower-step-flow-v1:not(.cv-lb-step-shipping) .cv-lb-stage-shipping {\n    display: none !important;\n  }\n\n  \/*\n   * Payment stage \u2014 FIX.\n   * Do NOT use display:none here. The 29Next checkout renders the Card Number\n   * and CVV inputs as cross-origin Spreedly iframes, and those iframes must\n   * have real layout dimensions when they initialise (on page load). If their\n   * container is display:none at that moment, they initialise at 0x0 and stay\n   * un-typeable even after being revealed.\n   *\n   * Instead we keep the payment stage rendered at full size and park it\n   * off-screen until the shopper reaches the payment step. This preserves the\n   * iframe dimensions so the card fields stay functional.\n   *\/\n  html.cv-leafblower-step-flow-v1:not(.cv-lb-step-payment) .cv-lb-stage-payment {\n    position: absolute !important;\n    left: -100000px !important;\n    top: 0 !important;\n    width: 100% !important;\n    max-width: 640px !important;\n    opacity: 0 !important;\n    pointer-events: none !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-stage-shipping {\n    animation: cvLbStepFadeIn 220ms ease-out both;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-stage-payment {\n    animation: cvLbStepFadeIn 220ms ease-out both;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-stage-payment .summary-wrapper {\n    margin-top: 18px;\n  }\n\n  html.cv-leafblower-step-flow-v1:not(.cv-lb-step-payment) .cv-lb-stage-payment .submit-button {\n    pointer-events: none;\n  }\n\n  html.cv-leafblower-step-flow-v1.cv-lb-step-payment .submit-section.cv-lb-stage-payment {\n    margin-bottom: 15px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .form-section.form-section--first > .form-section__title {\n    padding-top: 5px !important;\n  }\n}\n\n@media (max-width: 767px) {\n  html.cv-leafblower-step-flow-v1 form#combo_form > .form-content > .form-sections {\n    row-gap: 10px !important;\n    column-gap: 10px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-step-panel {\n    margin: 8px 0 14px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-simple-summary {\n    font-size: 14px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-simple-summary__row {\n    padding: 11px 12px;\n    gap: 10px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-panel .cv-lb-simple-summary,\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-panel .cv-lb-claim-trust,\n  html.cv-leafblower-step-flow-v1 .cv-lb-proceed-panel .cv-lb-simple-summary {\n    display: none !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-proceed-panel .cv-lb-claim-trust .trust-badges,\n  html.cv-leafblower-step-flow-v1 .cv-lb-proceed-panel .cv-lb-claim-trust .credit-card__flags {\n    display: none !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-final-summary {\n    margin: 4px 0 6px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-final-summary .cv-lb-simple-summary__row {\n    padding-top: 9px;\n    padding-bottom: 9px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust {\n    gap: 10px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section {\n    align-items: center;\n    gap: 0;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section .text-xs {\n    font-size: 12.88px !important;\n    line-height: 17.388px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .guarantee-section .image-10 {\n    width: 60px !important;\n    max-width: 60px !important;\n    flex-basis: 60px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .trust-badges {\n    gap: 24px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-claim-trust .credit-card__flags {\n    width: 320px !important;\n    max-width: 90% !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment {\n    display: flex !important;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 0 30px !important;\n    padding: 0 !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .trust-badges {\n    display: flex !important;\n    justify-content: center;\n    gap: 32px;\n    width: 100%;\n    margin: 0 0 14px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .trust-badge__item {\n    display: flex;\n    align-items: center;\n    gap: 7px;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .trust-badge--icon {\n    width: 22px !important;\n    height: 25px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .trust-badge--text {\n    color: #5c5c5e;\n    font-size: 12px !important;\n    font-weight: 700;\n    line-height: 1.05 !important;\n    text-align: left;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .credit-card__flags {\n    display: block !important;\n    width: 350px !important;\n    max-width: 92% !important;\n    height: auto !important;\n    margin: 0 auto !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .form-section.cv-lb-stage-payment .form-section__subtitle {\n    margin-bottom: 10px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .form-sections.cv-lb-stage-shipping .form-section.form-section--first > .form-section__title {\n    margin-top: 15px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .form-sections.cv-lb-stage-shipping .form-section:nth-of-type(2) {\n    margin-top: 10px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .form-sections.cv-lb-stage-shipping .form-section:nth-of-type(2) > .form-section__title {\n    margin-top: 20px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .submit-section.cv-lb-stage-payment {\n    margin-top: -10px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .trust-badges {\n    margin-bottom: 10px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .checkout-footer.cv-lb-stage-payment .icons-grids.show-tablet-flex {\n    margin-top: 11px !important;\n  }\n\n  html.cv-leafblower-step-flow-v1 .cv-lb-stage-shipping,\n  html.cv-leafblower-step-flow-v1 .cv-lb-stage-payment {\n    display: block !important;\n  }\n}\n\n@keyframes cvLbStepFadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}","js":function(convertContext){ 
(function () {
  var EXP_CLASS = "cv-leafblower-step-flow-v1";
  var INIT_FLAG = "__cvLeafblowerStepFlowV1Initialized";
  var MOBILE_QUERY = "(max-width: 767px)";

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;

  function cleanText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function textIncludes(element, needle) {
    return cleanText(element && element.textContent).toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  }

  function findHeading(needle) {
    var nodes = document.querySelectorAll("h1, h2, h3, .form-section__title");
    var i;

    for (i = 0; i < nodes.length; i += 1) {
      if (textIncludes(nodes[i], needle)) return nodes[i];
    }

    return null;
  }

  function closest(element, selector) {
    return element && element.closest ? element.closest(selector) : null;
  }

  function readSelectedSavingsPercent(title) {
    var selected = document.querySelector(".os-card.next-selected") || document.querySelector("[data-next-selector-card].next-selected");
    var match = selected && cleanText(selected.innerText).match(/Save\s+(\d+)%/i);
    if (match) return match[1] + "% OFF";
    if (/^3x\s/i.test(title)) return "60% OFF";
    if (/^2x\s/i.test(title)) return "55% OFF";
    return "50% OFF";
  }

  function formatMoney(value) {
    return "$" + value.toFixed(2);
  }

  function readSummaryDataFromCard(card) {
    var text = cleanText(card && card.innerText);
    var qtyMatch = text.match(/Buy\s+(\d+)\s+Leaf Blowers?/i);
    var savingsMatch = text.match(/Save\s+(\d+)%/i);
    var prices = text.match(/\$[0-9,.]+/g) || [];
    var qty = qtyMatch ? parseInt(qtyMatch[1], 10) : 1;
    var compareValue = prices[0] ? parseFloat(prices[0].replace(/[$,]/g, "")) : 139.98;
    var currentValue = prices[1] ? parseFloat(prices[1].replace(/[$,]/g, "")) : 69.99;
    var totalValue = currentValue * qty;

    return {
      title: qty + "x Wood Ranger Power Leaf Blower",
      compare: formatMoney(compareValue),
      current: formatMoney(currentValue) + "/ea",
      discount: formatMoney(Math.max(0, compareValue - totalValue)),
      total: formatMoney(totalValue),
      savingsPercent: (savingsMatch ? savingsMatch[1] : "50") + "% OFF"
    };
  }

  function getSelectedBundleCard() {
    return document.querySelector(".os-card.next-selected") || document.querySelector("[data-next-selector-card].next-selected");
  }

  function readSummaryData(summary) {
    var text = cleanText(summary && summary.innerText);
    var currentMatch = text.match(/\$[0-9,.]+\/ea/);
    var compareMatch = text.match(/\$[0-9,.]+(?=\s+\$[0-9,.]+\/ea)/);
    var discountMatch = text.match(/Discount:\s*(\$[0-9,.]+)/i);
    var totalMatch = text.match(/Grand Total:\s*USD\s*(\$[0-9,.]+)/i);
    var qtyTitleMatch = text.match(/(\d+x\s+Wood Ranger Power Leaf Blower)/i);
    var title = qtyTitleMatch ? qtyTitleMatch[1] : "1x Wood Ranger Power Leaf Blower";

    return {
      title: title,
      compare: compareMatch ? compareMatch[0] : "$139.98",
      current: currentMatch ? currentMatch[0] : "$69.99/ea",
      discount: discountMatch ? discountMatch[1] : "$69.99",
      total: totalMatch ? totalMatch[1] : "$69.99",
      savingsPercent: readSelectedSavingsPercent(title)
    };
  }

  function getSimpleSummaryMarkupFromData(data, includeShippingNote) {
    var rows = [
      '<div class="cv-lb-simple-summary__row cv-lb-simple-summary__head">',
      '<div>Item</div><div>Amount</div>',
      '</div>',
      '<div class="cv-lb-simple-summary__row cv-lb-simple-summary__item">',
      '<div class="cv-lb-simple-summary__title">' + data.title + '</div>',
      '<div class="cv-lb-simple-summary__prices"><span class="cv-lb-simple-summary__compare">' + data.compare + '</span><span>' + data.current + '</span></div>',
      '</div>'
    ];

    if (includeShippingNote) {
      rows.push(
        '<div class="cv-lb-simple-summary__row cv-lb-simple-summary__shipping">',
        '<div>Shipping and tax will be settled upon checkout confirmation</div>',
        '</div>'
      );
    }

    rows.push(
      '<div class="cv-lb-simple-summary__row cv-lb-simple-summary__saving">',
      '<div><span>Today you saved</span> <span class="cv-lb-simple-summary__pill">' + data.savingsPercent + '</span></div><div>Discount: <strong>' + data.discount + '</strong></div>',
      '</div>',
      '<div class="cv-lb-simple-summary__row cv-lb-simple-summary__total">',
      '<div>Total</div><div>' + data.total + '</div>',
      '</div>'
    );

    return rows.join("");
  }

  function getSimpleSummaryMarkup(summary, includeShippingNote) {
    return getSimpleSummaryMarkupFromData(readSummaryData(summary), includeShippingNote);
  }

  function createSimpleSummary(summary, includeShippingNote) {
    var wrapper = document.createElement("div");

    wrapper.className = "cv-lb-simple-summary";
    wrapper.innerHTML = getSimpleSummaryMarkup(summary, includeShippingNote);
    return wrapper;
  }

  function createCta(label, action) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "cv-lb-step-cta";
    button.textContent = label;
    button.setAttribute("data-cv-lb-step-action", action);
    return button;
  }

  function scrubClone(root) {
    var all = root.querySelectorAll("[id], input, button, select, textarea, a");
    var i;

    root.removeAttribute("id");
    root.setAttribute("aria-hidden", "true");
    root.classList.remove("cv-lb-stage-shipping");
    root.classList.remove("cv-lb-stage-payment");

    for (i = 0; i < all.length; i += 1) {
      all[i].removeAttribute("id");
      all[i].removeAttribute("name");
      all[i].removeAttribute("href");
      all[i].removeAttribute("for");
      all[i].classList.remove("cv-lb-stage-shipping");
      all[i].classList.remove("cv-lb-stage-payment");
      all[i].style.pointerEvents = "none";
      if ("disabled" in all[i]) all[i].disabled = true;
    }
  }

  function createTrustStack(guarantee, checkoutFooter) {
    var wrapper = document.createElement("div");
    var guaranteeClone;
    var trustBadges;
    var cardFlags;

    wrapper.className = "cv-lb-claim-trust";

    if (guarantee) {
      guaranteeClone = guarantee.cloneNode(true);
      scrubClone(guaranteeClone);
      guaranteeClone.classList.add("cv-lb-claim-trust__guarantee-clone");
      wrapper.appendChild(guaranteeClone);
    }

    if (checkoutFooter) {
      trustBadges = checkoutFooter.querySelector(".trust-badges");
      cardFlags = checkoutFooter.querySelector(".credit-card__flags");

      if (trustBadges) {
        trustBadges = trustBadges.cloneNode(true);
        scrubClone(trustBadges);
        trustBadges.classList.add("cv-lb-claim-trust__badges-clone");
        wrapper.appendChild(trustBadges);
      }

      if (cardFlags) {
        cardFlags = cardFlags.cloneNode(true);
        scrubClone(cardFlags);
        cardFlags.classList.add("cv-lb-claim-trust__cards-clone");
        wrapper.appendChild(cardFlags);
      }
    }

    return wrapper;
  }

  function createPanel(className, ctaLabel, action, summary, guarantee, checkoutFooter) {
    var panel = document.createElement("div");

    panel.className = "cv-lb-step-panel " + className;
    if (summary) panel.appendChild(createSimpleSummary(summary));
    panel.appendChild(createCta(ctaLabel, action));
    if (guarantee || checkoutFooter) panel.appendChild(createTrustStack(guarantee, checkoutFooter));
    return panel;
  }

  function scrollToElement(element) {
    var y;
    var offset = window.matchMedia && window.matchMedia(MOBILE_QUERY).matches ? 12 : 18;

    if (!element) return;
    y = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  }

  function markStage(nodes, className) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
      if (nodes[i]) nodes[i].classList.add(className);
    }
  }

  function syncSimpleSummaries(source) {
    var selectedCard = getSelectedBundleCard();
    syncSimpleSummariesFromData(selectedCard ? readSummaryDataFromCard(selectedCard) : readSummaryData(source));
  }

  function syncSimpleSummariesFromData(data) {
    var clones = document.querySelectorAll(".cv-lb-simple-summary");
    var i;
    var fresh;

    for (i = 0; i < clones.length; i += 1) {
      fresh = getSimpleSummaryMarkupFromData(data, clones[i].classList.contains("cv-lb-final-summary"));
      if (clones[i].innerHTML !== fresh) {
        clones[i].innerHTML = fresh;
      }
    }
  }

  /*
   * Card-field initialisation safeguard (29Next / Spreedly).
   *
   * The Card Number and CVV inputs are cross-origin Spreedly iframes that must
   * have real layout dimensions when they initialise, or they become
   * un-typeable. The CSS keeps the payment stage rendered off-screen (never
   * display:none) so this normally just works. This watchdog is a second line
   * of defence: if the platform only initialises the fields when they enter the
   * viewport, the iframe will still report a zero height. When that is detected
   * we briefly park the payment section on-screen but fully transparent to
   * trigger initialisation, then release it back to its hidden resting state.
   */
  function guardCardFields(paymentSection) {
    if (!paymentSection) return;

    var tries = 0;
    var nudged = false;

    function frameReady() {
      var frames = paymentSection.querySelectorAll("iframe");
      var i;
      for (i = 0; i < frames.length; i += 1) {
        if (frames[i].getBoundingClientRect().height > 8) return true;
      }
      return false;
    }

    function nudgeOn() {
      nudged = true;
      paymentSection.style.setProperty("position", "fixed", "important");
      paymentSection.style.setProperty("left", "0", "important");
      paymentSection.style.setProperty("top", "0", "important");
      paymentSection.style.setProperty("width", "100%", "important");
      paymentSection.style.setProperty("max-width", "640px", "important");
      paymentSection.style.setProperty("opacity", "0", "important");
      paymentSection.style.setProperty("pointer-events", "none", "important");
      paymentSection.style.setProperty("z-index", "-1", "important");
    }

    function nudgeOff() {
      if (!nudged) return;
      nudged = false;
      paymentSection.style.removeProperty("position");
      paymentSection.style.removeProperty("left");
      paymentSection.style.removeProperty("top");
      paymentSection.style.removeProperty("width");
      paymentSection.style.removeProperty("max-width");
      paymentSection.style.removeProperty("opacity");
      paymentSection.style.removeProperty("pointer-events");
      paymentSection.style.removeProperty("z-index");
    }

    var timer = window.setInterval(function () {
      tries += 1;

      if (frameReady()) {
        nudgeOff();
        window.clearInterval(timer);
        return;
      }

      // ~0.9s in with no sized iframe: force the section on-screen (invisible)
      // so any viewport-triggered loader will initialise the fields.
      if (tries === 6 && !nudged) nudgeOn();

      // ~6s: stop trying and release any nudge.
      if (tries >= 40) {
        nudgeOff();
        window.clearInterval(timer);
      }
    }, 150);
  }

  function init() {
    var stepOneHeading = findHeading("Step 1: Pick Your Bundle Deal");
    var stepOneSection = closest(stepOneHeading, ".form-section");
    var shippingForm = document.querySelector('[data-next-component="shipping-form"]');
    var shippingHeading = findHeading("Step 3: Shipping Information");
    var paymentHeading = findHeading("4. Payment Method");
    var paymentSection = closest(paymentHeading, ".form-section");
    var summary = document.querySelector(".summary-wrapper");
    var cartBox = closest(summary, ".cart-box");
    var submitSection = document.querySelector(".submit-section");
    var upsell = document.querySelector(".upsell");
    var upsellWrapper = closest(upsell, ".page-wrapper");
    var guarantee = document.querySelector(".guarantee-section");
    var checkoutFooter = document.querySelector(".checkout-footer");
    var claimPanel;
    var proceedPanel;
    var finalSummary;

    if (!stepOneSection || !shippingForm || !shippingHeading || !paymentSection || !summary || !submitSection) return false;
    if (document.querySelector(".cv-lb-step-panel")) return true;

    document.documentElement.classList.add(EXP_CLASS);

    markStage([shippingForm, upsellWrapper, guarantee], "cv-lb-stage-shipping");
    markStage([paymentSection, cartBox || summary, submitSection, checkoutFooter], "cv-lb-stage-payment");
    if (cartBox) cartBox.classList.add("cv-lb-source-summary");

    claimPanel = createPanel(
      "cv-lb-claim-panel",
      "Claim Your Offer",
      "shipping",
      summary,
      guarantee,
      checkoutFooter
    );
    stepOneSection.insertAdjacentElement("afterend", claimPanel);

    proceedPanel = createPanel(
      "cv-lb-proceed-panel cv-lb-stage-shipping",
      "Proceed To Payment",
      "payment",
      summary,
      guarantee,
      checkoutFooter
    );

    if (guarantee) {
      guarantee.insertAdjacentElement("afterend", proceedPanel);
    } else {
      shippingForm.insertAdjacentElement("afterend", proceedPanel);
    }

    finalSummary = createSimpleSummary(summary, true);
    finalSummary.classList.add("cv-lb-final-summary", "cv-lb-stage-payment");
    submitSection.insertAdjacentElement("beforebegin", finalSummary);

    document.addEventListener("click", function (event) {
      var actionButton = event.target.closest && event.target.closest("[data-cv-lb-step-action]");
      var bundleCard = event.target.closest && event.target.closest("[data-next-selector-card], .os-card");
      var action;

      if (bundleCard && bundleCard.querySelector(".os-card__title")) {
        var cardData = readSummaryDataFromCard(bundleCard);
        syncSimpleSummariesFromData(cardData);
      }

      if (!actionButton) return;

      action = actionButton.getAttribute("data-cv-lb-step-action");

      if (action === "shipping") {
        document.documentElement.classList.add("cv-lb-step-shipping");
        window.setTimeout(function () {
          scrollToElement(shippingForm);
        }, 40);
      }

      if (action === "payment") {
        document.documentElement.classList.add("cv-lb-step-shipping");
        document.documentElement.classList.add("cv-lb-step-payment");
        window.setTimeout(function () {
          scrollToElement(paymentSection);
        }, 40);
      }
    });

    window.setInterval(function () {
      var liveSummary = document.querySelector(".cv-lb-stage-payment.summary-wrapper") || summary;
      if (liveSummary) syncSimpleSummaries(liveSummary);
    }, 1200);

    // Make sure the Spreedly card fields initialise even though the payment
    // stage starts hidden.
    guardCardFields(paymentSection);

    if (window.matchMedia && window.matchMedia(MOBILE_QUERY).matches) {
      document.documentElement.classList.add("cv-lb-step-shipping");
      document.documentElement.classList.add("cv-lb-step-payment");
    }

    return true;
  }

  if (init()) return;

  var observer = new MutationObserver(function () {
    if (init()) observer.disconnect();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("load", init, { once: true });
})();
}}}],"traffic_allocation":100}]},{"id":"100142856","name":"LB004: PDP - Hero Carousel Elimination - #100141709","type":"deploy","status":"active","global_js":null,"global_css":"","environment":"production","settings":{"min_order_value":0,"max_order_value":99999,"matching_options":{"audiences":"any","locations":"any"},"placeholders":[],"outliers":{"order_value":{"detection_type":"none"},"products_ordered_count":{"detection_type":"none"}}},"key":"lb004:-hr-crsl-tstng-cln-2","version":11,"locations":["100112732"],"site_area":null,"audiences":[],"goals":[],"integrations":[{"provider":"google_analytics","enabled":true,"type":"ga4","measurementId":"G-ZWC301LHGG"},{"provider":"hotjar","enabled":true}],"variations":[{"id":"1001223417","name":"Deployment","key":"1001223417-deployment","status":"running","changes":[{"id":1001114866,"type":"customCode","data":{"css":"html.cv-leafblower-hero-static-mobile {\n  scroll-behavior: auto;\n}\n\n.cv-leafblower-hero-static-mobile .cv-lb-mobile-static-hero {\n  display: none;\n}\n\n@media screen and (max-width: 640px) {\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper {\n    width: 100%;\n  }\n\n  .cv-leafblower-hero-static-mobile .cv-lb-mobile-static-hero {\n    display: block !important;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .cv-leafblower-hero-static-mobile .cv-lb-mobile-static-hero img {\n    width: 100%;\n    height: auto;\n    display: block;\n    object-fit: cover;\n  }\n\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper > .tns-outer,\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper > #hero-main-slider {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile #hero-main-slider,\n  .cv-leafblower-hero-static-mobile #hero-main-slider.cv-lb-static-hero {\n    display: block !important;\n    overflow: hidden !important;\n    transform: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile #hero-main-slider > * {\n    display: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile #hero-main-slider > *:first-child {\n    display: block !important;\n    width: 100% !important;\n    transform: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile #hero-main-slider img {\n    width: 100% !important;\n    height: auto !important;\n    display: block !important;\n    object-fit: cover;\n  }\n\n  .cv-leafblower-hero-static-mobile .hero-slider-prev,\n  .cv-leafblower-hero-static-mobile .hero-slider-next,\n  .cv-leafblower-hero-static-mobile #hero-thumb-nav {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper .tns-outer,\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper .tns-ovh,\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper .tns-inner {\n    overflow: visible !important;\n    transform: none !important;\n  }\n\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper > #hero-main-slider.cv-lb-static-hero,\n  .cv-leafblower-hero-static-mobile .hero-slider-wrapper > #hero-main-slider {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n}","js":function(convertContext){ 
(function () {
  var EXPERIMENT_CLASS = "cv-leafblower-hero-static-mobile";
  var INIT_FLAG = "cvLeafblowerHeroStaticMobileInit";
  var HERO_SELECTOR = "#hero-main-slider";
  var MOBILE_QUERY = "(max-width: 640px)";
  var originalTns = null;
  var heroSliderApi = null;
  var resizeTimer = null;
  var prevButtonMarkup = null;
  var nextButtonMarkup = null;

  if (window[INIT_FLAG]) return;
  window[INIT_FLAG] = true;
  document.documentElement.classList.add(EXPERIMENT_CLASS);

  function shouldDisableHero() {
    return window.matchMedia && window.matchMedia(MOBILE_QUERY).matches;
  }

  function getHeroSlider() {
    return document.querySelector(HERO_SELECTOR);
  }

  function getHeroWrapper() {
    var slider = getHeroSlider();
    return slider ? slider.closest(".hero-slider-wrapper") : document.querySelector(".hero-slider-wrapper");
  }

  function ensureMobileStaticHero() {
    var wrapper = getHeroWrapper();
    var slider = getHeroSlider();
    if (!wrapper || !slider || wrapper.querySelector(".cv-lb-mobile-static-hero")) return;

    var firstImage = slider.querySelector("img");
    if (!firstImage) return;

    var staticHero = document.createElement("div");
    staticHero.className = "cv-lb-mobile-static-hero";
    staticHero.setAttribute("aria-hidden", "true");

    var image = firstImage.cloneNode(true);
    image.removeAttribute("loading");
    image.setAttribute("fetchpriority", "high");
    staticHero.appendChild(image);
    wrapper.insertBefore(staticHero, wrapper.firstChild);
  }

  function rememberHeroControls() {
    var prevBtn = document.querySelector(".hero-slider-prev");
    var nextBtn = document.querySelector(".hero-slider-next");
    if (prevBtn && !prevButtonMarkup) prevButtonMarkup = prevBtn.outerHTML;
    if (nextBtn && !nextButtonMarkup) nextButtonMarkup = nextBtn.outerHTML;
  }

  function ensureHeroControls() {
    var wrapper = getHeroWrapper();
    if (!wrapper) return;

    if (!wrapper.querySelector(".hero-slider-prev") && prevButtonMarkup) {
      wrapper.insertAdjacentHTML("beforeend", prevButtonMarkup);
    }
    if (!wrapper.querySelector(".hero-slider-next") && nextButtonMarkup) {
      wrapper.insertAdjacentHTML("beforeend", nextButtonMarkup);
    }
  }

  function restoreHeroDisplay() {
    var slider = getHeroSlider();
    if (!slider) return;

    ensureMobileStaticHero();
    ensureHeroControls();
    slider.classList.remove("cv-lb-static-hero");
    Array.prototype.slice.call(slider.children).forEach(function (slide) {
      slide.style.display = "";
      slide.style.width = "";
      slide.style.transform = "";
    });

    var wrapper = getHeroWrapper();
    if (wrapper) {
      wrapper.querySelectorAll(".hero-slider-prev, .hero-slider-next, #hero-thumb-nav").forEach(function (element) {
        element.style.display = "";
        element.style.visibility = "";
        element.removeAttribute("aria-hidden");
      });
    }
  }

  function collapseHeroSlider() {
    if (!shouldDisableHero()) return;

    ensureMobileStaticHero();
    rememberHeroControls();
    var slider = getHeroSlider();
    if (!slider) return;

    slider.classList.add("cv-lb-static-hero");
    Array.prototype.slice.call(slider.children).forEach(function (slide, index) {
      slide.style.display = index === 0 ? "block" : "none";
      if (index === 0) {
        slide.style.width = "100%";
        slide.style.transform = "none";
      }
    });

    var wrapper = slider.closest(".hero-slider-wrapper");
    if (wrapper) {
      wrapper.querySelectorAll(".hero-slider-prev, .hero-slider-next, #hero-thumb-nav").forEach(function (element) {
        element.style.display = "none";
        element.style.visibility = "hidden";
        element.setAttribute("aria-hidden", "true");
      });
    }
  }

  function isHeroTnsCall(options) {
    return options && options.container === HERO_SELECTOR;
  }

  function initHeroSliderIfNeeded() {
    if (shouldDisableHero() || !originalTns || heroSliderApi) return;

    restoreHeroDisplay();
    heroSliderApi = originalTns({
      container: HERO_SELECTOR,
      items: 1,
      navContainer: "#hero-thumb-nav",
      navAsThumbnails: true,
      prevButton: ".hero-slider-prev",
      nextButton: ".hero-slider-next",
      mouseDrag: true,
      speed: 400,
      autoplay: false,
      controls: true
    });

    var slider = getHeroSlider();
    var sliderOuter = slider && slider.parentElement && slider.parentElement.parentElement;
    if (sliderOuter) {
      sliderOuter.style.position = "relative";
      var wrapper = getHeroWrapper();
      var prevBtn = wrapper && wrapper.querySelector(".hero-slider-prev");
      var nextBtn = wrapper && wrapper.querySelector(".hero-slider-next");
      if (prevBtn) {
        sliderOuter.appendChild(prevBtn);
        prevBtn.style.visibility = "visible";
      }
      if (nextBtn) {
        sliderOuter.appendChild(nextBtn);
        nextBtn.style.visibility = "visible";
      }
    }
  }

  function destroyHeroSliderIfNeeded() {
    if (!heroSliderApi || !shouldDisableHero()) return;

    if (typeof heroSliderApi.destroy === "function") {
      heroSliderApi.destroy();
    }
    heroSliderApi = null;
    collapseHeroSlider();
  }

  function syncHeroMode() {
    if (shouldDisableHero()) {
      destroyHeroSliderIfNeeded();
      collapseHeroSlider();
    } else {
      initHeroSliderIfNeeded();
    }
  }

  function wrapTns(sourceTns) {
    if (typeof sourceTns !== "function" || sourceTns.cvLeafblowerWrapped) return sourceTns;
    originalTns = sourceTns.cvLeafblowerOriginal || sourceTns;

    function wrappedTns(options) {
      if (isHeroTnsCall(options) && shouldDisableHero()) {
        collapseHeroSlider();
        return {
          destroy: function () {},
          goTo: function () {},
          getInfo: function () {
            return { index: 0, slideCount: 1 };
          }
        };
      }

      var api = originalTns.apply(this, arguments);
      if (isHeroTnsCall(options)) {
        heroSliderApi = api;
      }
      return api;
    }

    wrappedTns.cvLeafblowerWrapped = true;
    wrappedTns.cvLeafblowerOriginal = originalTns;
    return wrappedTns;
  }

  function installTnsInterceptor() {
    var currentTns = window.tns;

    try {
      Object.defineProperty(window, "tns", {
        configurable: true,
        get: function () {
          return currentTns;
        },
        set: function (nextTns) {
          originalTns = nextTns && nextTns.cvLeafblowerOriginal ? nextTns.cvLeafblowerOriginal : nextTns;
          currentTns = wrapTns(nextTns);
        }
      });

      if (currentTns) {
        window.tns = currentTns;
      }
    } catch (error) {
      if (typeof window.tns === "function") {
        originalTns = window.tns.cvLeafblowerOriginal || window.tns;
        window.tns = wrapTns(window.tns);
      }
    }
  }

  installTnsInterceptor();
  rememberHeroControls();
  ensureMobileStaticHero();
  collapseHeroSlider();

  document.addEventListener("DOMContentLoaded", function () {
    ensureMobileStaticHero();
    syncHeroMode();
  });
  window.addEventListener("load", function () {
    ensureMobileStaticHero();
    syncHeroMode();
  });
  window.addEventListener("resize", function () {
    if (shouldDisableHero()) {
      ensureMobileStaticHero();
      collapseHeroSlider();
    }
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(syncHeroMode, 150);
  });
})();
}}},{"id":1001114867,"type":"defaultCode","data":{"js":null,"css":"","custom_js":null}}],"traffic_allocation":100}]}],"audiences":[],"segments":[],"goals":[{"id":"100138911","name":"Decrease BounceRate","key":"decrease-bouncerate","type":"advanced","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"pages_visited_count","matching":{"match_type":"lessEqual","negated":true},"value":1},{"rule_type":"visit_duration","matching":{"match_type":"lessEqual","negated":true},"value":10}]}]}]}},{"id":"100138912","name":"Increase Engagement","key":"increase-engagement","type":"dom_interaction","rules":[],"settings":{"tracked_items":[{"event":"click","selector":"a"},{"event":"submit","selector":"form"}]}},{"id":"100139251","name":"Purchase","key":"purchase","type":"visits_page","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url_with_query","matching":{"match_type":"contains","negated":false},"value":"\/upsell1"}]}]}]}},{"id":"100152216","name":"Checkout","key":"checkout","type":"visits_page","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url_with_query","matching":{"match_type":"contains","negated":false},"value":"checkout"}]}]}]}},{"id":"100153984","name":"Leaf Blower Purchase","key":"leaf-blower-purchase","type":"visits_page","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url_with_query","matching":{"match_type":"contains","negated":false},"value":"oto-leaf-blower"}]}]}]}}],"locations":[{"id":"100110929","key":"location-003:-lw-pdp-new-lay","name":"Location - 003: L&W PDP - New Layout","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/lawnandweedtrimmer\/landing"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100110956","key":"lctn-ffd117-cl:-mn-chnsw-prs","name":"Location - AffID117 (Cole): Mini Chainsaw Preselect 2 Unit","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"contains","negated":false},"value":"https:\/\/offer.woodrangertools.com\/woodranger\/en\/us\/v1\/checkout"}]},{"OR_WHEN":[{"rule_type":"query_string","matching":{"match_type":"contains","negated":false},"value":"affidab=117"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100111413","key":"weed-lawn-trimmer-checkout","name":"Location: Weed & Lawn Trimmer Checkout","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/lawnandweedtrimmer\/checkout"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100111414","key":"location:-mini-chainsaw-chec","name":"Location: Mini Chainsaw Checkout","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/woodranger\/en\/us\/v1\/checkout"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100111415","key":"location:-power-shears-check","name":"Location: Power Shears Checkout","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/powershears\/en\/us\/checkout3"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100111976","key":"location:-leaf-blower-checko","name":"Location: Leaf Blower - Checkout","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/leafblower\/checkout"}]}]}]},"trigger":{"type":"upon_run"}},{"id":"100112732","key":"lctn-lb004:-hr-crsl-tstng","name":"Location - LB004: Hero Carousel Testing","rules":{"OR":[{"AND":[{"OR_WHEN":[{"rule_type":"url","matching":{"match_type":"startsWith","negated":false},"value":"https:\/\/offer.woodrangertools.com\/leafblower\/landing"}]}]}]},"trigger":{"type":"upon_run"}}],"archived_experiences":[],"features":[],"_s_t":"2026-07-01 07:12:00Z","is_debug":false};!function(){var e;!function(){"use strict";var t={679:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.isV3EditorControl=t.getV3IframeContainer=t.domRootId=t.log=void 0;const o=r(355);t.log=function(e){console.log(`%cConvert VE: ${e}`,"border: 1px solid #40b040; border-radius: 10px; padding: 3px 8px 2px 8px; background: #00ff0030; color: #008000")},t.domRootId="convert_root",t.getV3IframeContainer=function(){return document.getElementById(o.V3_IFRAME_ID)},t.isV3EditorControl=function(e){const t=document.getElementById(o.V3_IFRAME_CONTAINER_ID),r=document.getElementById(o.V3_IFRAME_TOGGLE_ID);return t&&([t,r].includes(e)||t.contains(e)||r.contains(e))}},295:function(e,t,r){var o;Object.defineProperty(t,"__esModule",{value:!0}),t.capitalizeString=void 0;const n=r(679),l=r(339);class i{static getNodeFromSelector(e){var t;return null!==(t=document.querySelector(e))&&void 0!==t?t:null}}t.default=i,o=i,i.convertStylesheetId="__convert_styles",i.getBodyChildNodes=(e=!0)=>{const t=e?document.querySelector("body").cloneNode(!0):document.querySelector("body");return e&&([...t.querySelectorAll("body *")].filter((e=>e.onclick||e.onmousedown||e.onmouseup)).forEach((e=>["onclick","onmousedown","onmouseup"].forEach((t=>{e[t]&&(e.setAttribute("conv_"+t,e.getAttribute(t)),e.removeAttribute(t))})))),[...t.querySelectorAll("body a")].filter((e=>e.getAttribute("href"))).forEach((e=>{e.setAttribute("conv_href",e.getAttribute("href")),e.removeAttribute("href")})),[...t.querySelectorAll("body *")].forEach((e=>e.addEventListener("click",(e=>{e.stopPropagation(),e.preventDefault()}),{capture:!0})))),[...t.children].filter((e=>"SCRIPT"!==e.tagName&&e.id!==n.domRootId))},i.removeCustomCss=()=>{document.querySelectorAll("#"+o.convertStylesheetId).forEach((e=>e.remove()))},i.applyCustomCss=e=>{const t=document.createElement("style");t.id=o.convertStylesheetId,t.innerHTML=e,document.head.appendChild(t)},i.setBodyChildren=(e,t=!1)=>{const r=document.querySelector("body");Array.from(r.children).forEach((e=>{var t;"SCRIPT"!==e.tagName&&e.id!==n.domRootId&&(null===(t=e.parentNode)||void 0===t||t.removeChild(e))})),e.forEach((e=>{r.appendChild(t?e:e.cloneNode(!0))}))},i.escapeCssSelector=(e,t=!1)=>null==e?void 0:e.replaceAll(/([^\\]?)\\+(\d+)/g,t?"$1\\\\$2":"$1\\$2"),i.selectorToStorageForm=l.selectorToStorageForm,i.selectorForDisplay=l.selectorForDisplay,i.selectorToQueryForm=l.selectorToQueryForm,t.capitalizeString=function(e){var t;return String(null!==(t=null==e?void 0:e[0])&&void 0!==t?t:"").toUpperCase()+String(null!=e?e:"").slice(1)}},964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0})},339:function(e,t,r){var o;Object.defineProperty(t,"__esModule",{value:!0}),t.selectorToQueryForm=t.selectorForDisplay=t.selectorToStorageForm=t.STRUCTURAL_PSEUDO_NAMES=void 0;const n=r(679),l=r(355),i=r(305);var c=r(305);Object.defineProperty(t,"STRUCTURAL_PSEUDO_NAMES",{enumerable:!0,get:function(){return c.STRUCTURAL_PSEUDO_NAMES}}),Object.defineProperty(t,"selectorToStorageForm",{enumerable:!0,get:function(){return c.selectorToStorageForm}}),Object.defineProperty(t,"selectorForDisplay",{enumerable:!0,get:function(){return c.selectorForDisplay}}),Object.defineProperty(t,"selectorToQueryForm",{enumerable:!0,get:function(){return c.selectorToQueryForm}});class a{static getNodeFromSelector(e){var t;return null!==(t=document.querySelector(e))&&void 0!==t?t:null}}t.default=a,o=a,a.convertStylesheetId="__convert_styles",a.removeCustomCss=()=>{document.querySelectorAll("#"+o.convertStylesheetId).forEach((e=>e.remove()))},a.applyCustomCss=e=>{const t=document.createElement("style");t.id=o.convertStylesheetId,t.innerHTML=e,document.head.appendChild(t)},a.escapeCssSelector=(e,t=!1)=>null==e?void 0:e.replaceAll(/([^\\]?)\\+(\d+)/g,t?"$1\\\\$2":"$1\\$2"),a.selectorToStorageForm=i.selectorToStorageForm,a.selectorForDisplay=i.selectorForDisplay,a.selectorToQueryForm=i.selectorToQueryForm,a.kebabiseCamelCase=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),a.capitalise=e=>e&&e[0].toUpperCase()+e.slice(1),a.queryByChangeId=e=>document.querySelectorAll(`[data-convert-change-id="${e}"]`),a.queryExtendedSelector=e=>{const t=document.querySelectorAll(a.selectorToQueryForm(e.value)),r=a.queryByChangeId(e.changeId),o=[...r.length>t.length?r:t];return document.getElementById(l.V3_IFRAME_ID)?o.filter((e=>!(0,n.isV3EditorControl)(e))):o}},305:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.selectorToQueryForm=t.selectorForDisplay=t.selectorToStorageForm=t.STRUCTURAL_PSEUDO_NAMES=void 0,t.STRUCTURAL_PSEUDO_NAMES=new Set(["active","after","any-link","before","blank","checked","current","default","defined","dir","disabled","drop","empty","enabled","first","first-child","first-of-type","fullscreen","future","focus","focus-visible","focus-within","has","host","host-context","hover","indeterminate","in-range","invalid","is","lang","last-child","last-of-type","left","link","local-link","marker","not","nth-child","nth-col","nth-last-child","nth-last-col","nth-last-of-type","nth-of-type","only-child","only-of-type","optional","out-of-range","past","placeholder","placeholder-shown","read-only","read-write","required","right","root","scope","selection","target","target-within","user-invalid","valid","visited","where"]);const r=/^:?([a-zA-Z][a-zA-Z0-9-]*)(?:\(|$|[^a-zA-Z0-9-])/;function o(e,o){const n=r.exec(e.slice(o+1));return!(!n||!t.STRUCTURAL_PSEUDO_NAMES.has(n[1]))}function n(e,t){let r=t+1;const o=e.length;for(;r<o&&"]"!==e[r];)if("\\"===e[r])r+=2;else if('"'===e[r]||"'"===e[r]){const t=e[r];for(r++;r<o&&e[r]!==t;)"\\"===e[r]&&r++,r++;r++}else r++;return r<o?r+1:r}t.selectorToStorageForm=function(e){return null==e?void 0:e.replaceAll(/\\([^0-9a-fA-F\s\\])/g,"$1")},t.selectorForDisplay=function(e){return null==e?void 0:e.replaceAll(/\\([^0-9a-fA-F\s])/g,"$1")},t.selectorToQueryForm=function(e){if(!e)return e;let t="",r=0;const l=e.length;for(;r<l;){const l=e[r];if("["!==l)"\\"!==l?":"!==l?"|"!==l?(t+=l,r++):(t+=String.raw`\|`,r++):(t+=o(e,r)?":":String.raw`\:`,r++):(t+=e.slice(r,r+2),r+=2);else{const o=n(e,r);t+=e.slice(r,o),r=o}}return t}},355:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.OPACITY_TIMEOUT=t.V3_OVERLAY_HEADER_ID=t.V3_IFRAME_TOGGLE_ID=t.V3_IFRAME_CONTAINER_ID=t.V3_IFRAME_ID=void 0,t.V3_IFRAME_ID="convert-visual-editor-iframe",t.V3_IFRAME_CONTAINER_ID="convert-visual-editor-iframe-container",t.V3_IFRAME_TOGGLE_ID="convert-visual-editor-toggle-button",t.V3_OVERLAY_HEADER_ID="convert-visual-editor-overlay-header",t.OPACITY_TIMEOUT="0.4s"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}var n={};!function(){var e=n;Object.defineProperty(e,"__esModule",{value:!0});const t=o(295);o(964);const r=o(679),l={rearrange(e,t){var r;const o=null==e?void 0:e.parentElement,n=t>[...o.children].findIndex((t=>t.id===e.id))?t+1:t;null===(r=null==e?void 0:e.setAttribute)||void 0===r||r.call(e,"data-convert",""),t<o.children.length-1?null==o||o.insertBefore(e,null==o?void 0:o.children.item(n)):null==o||o.appendChild(e)},safeSetAttribute(e,t,r){if(e){const o=document.querySelector(e);o&&(o[t]=r)}},replaceCustomVariables(e){return this.variables&&"object"==typeof this.variables?e.replaceAll(/{{(\w+)}}/g,((e,t)=>t in this.variables?this.variables[t]:e)):e},applyStyles(e,t,r,o){var n;if(r=JSON.parse(r),e){let l="";Object.keys(r).forEach((n=>{const i=n.replaceAll(/([A-Z])/g,(e=>"-"+e.toLowerCase()));if("backgroundImage"===n)o?(l+="position: relative; overflow: hidden; ",this.insertAdjacentHTML(e,"beforeend",`<img data-selector="${t}" src="${r[n]}" alt="" style="position: absolute; left: 0; top: 0; width: 100%; z-index: 9999;" />`)):l+=`${i}: url('${r[n]}'); `;else{const e=r[n],t=["left","top","width","height","bottom","right"].includes(n)&&String(parseInt(e))===String(e)?"px":"";l+=`${i}: ${e}${t} ${["left","top","bottom","right"].includes(n)?"!important":""}; `}})),e.style.cssText+=l,null===(n=null==e?void 0:e.setAttribute)||void 0===n||n.call(e,"data-convert","")}return this},insertAdjacentHTML(e,t,r,o,n="html"){if(this.skipInsertedElements)return;const l=this._getExistingInsertedElement(e,o,t,n),i=this._addMarker(this.replaceCustomVariables(r),t,o,n);switch(l?l.outerHTML=i:null==e||e.insertAdjacentHTML(t,i),t){case"beforebegin":return null==e?void 0:e.previousElementSibling;case"afterbegin":return null==e?void 0:e.firstElementChild;case"beforeend":return null==e?void 0:e.lastElementChild;case"afterend":return null==e?void 0:e.nextElementSibling}},_getExistingInsertedElement(e,t,r,o){var n,l,i;if(!t||!r)return;const c=`[data-convert-insert-${r}-${o}="${(null!=t?t:"").replaceAll(/([\\"\]])/g,"\\$1")}"]`;switch(r){case"beforebegin":case"afterend":return null!==(l=null===(n=null==e?void 0:e.parentElement)||void 0===n?void 0:n.querySelector(c))&&void 0!==l?l:void 0;case"afterbegin":case"beforeend":return null!==(i=null==e?void 0:e.querySelector(c))&&void 0!==i?i:void 0}},_addMarker(e,t,r,o){if(!e)return"";const n=document.createElement("div");n.innerHTML=(null!=e?e:"").trim();const l=1===n.childElementCount?n.firstElementChild:n;return l.dataset[`convertInsert${this._capitalise(t)}${this._capitalise(o)}`]=r,l.dataset.convert="",l.outerHTML},_capitalise(e){return e&&e[0].toUpperCase()+e.slice(1)},matchUrl(e,t){const r=e.substring(0,e.indexOf("?")<0?e.length:e.indexOf("?"));if(r===t||e===t)return!0;try{if(t.startsWith("http://www.")||t.startsWith("https://www.")?(t.startsWith("http://www.")&&(t=t.replace("http://www.","http://(www.)?")),t.startsWith("https://www.")&&(t=t.replace("https://www.","https://(www.)?"))):t.startsWith("http://")?t=t.replace("http://","http://(www.)?"):t.startsWith("https://")&&(t=t.replace("https://","https://(www.)?")),t.endsWith("/")||(t+="/"),r.match(t+"?$"))return!0}catch(e){return!1}return!1},about(){return"I am T:v1"},applyChange(e,o,n,l){var i,c,a,s,d,u;const h=new URLSearchParams(location.search);["visualEditor","_conv_eignore","_conv_eforce","convert_action","convert_e","convert_v"].forEach((e=>h.delete(e)));const v=h.size?"?"+h.toString():"";if(n&&!this.matchUrl(window.location.origin+window.location.pathname+v+window.location.hash,n))return!0;if(o.lockToDevice&&((null!==(i=o.lockToDevice.minWidth)&&void 0!==i?i:0)>=window.innerWidth||(null!==(c=o.lockToDevice.maxWidth)&&void 0!==c?c:9e4)<window.innerWidth))return(0,r.log)(`change to <${e}> is ignored for the current device screen width (${window.innerWidth}px). Locked to ${JSON.stringify(o.lockToDevice)}`),!0;const p=o.originalSelector!==e&&o.originalSelector?o.originalSelector:e,f=[...null!==(a=document.querySelectorAll(p))&&void 0!==a?a:[]];if(!window.__convertVisualEditorAppLoaded)switch(null===(s=o.popupTrigger)||void 0===s?void 0:s.type){case"click":case"load":f.forEach((e=>{var t;!function(e,t,r){var o;const n=String(null!==(o=e.getAttribute(t))&&void 0!==o?o:"").trim().replaceAll(new RegExp(String.raw`\s*(window\.)?convertPopups.open\('[^']+'\);?\s*`,"g"),"");e.setAttribute(t,`window.convertPopups.open('${r}'); ${n.trim()}`)}(e,"on"+(null===(t=o.popupTrigger)||void 0===t?void 0:t.type),o.popupTrigger.id)}));break;case"scroll":window.convertPopups.registerScrollTrigger(p,o.popupTrigger.id)}if(!f.length)return null;o.elementId&&(f[0].id=o.elementId,null===(u=null===(d=f[0])||void 0===d?void 0:d.setAttribute)||void 0===u||u.call(d,"data-convert","")),l&&f.forEach((e=>{e.dataset.convertChangeId!==String(l)&&(e.dataset.convertChangeId=String(l))})),o.outerHtml&&f.forEach(((e,t)=>{var r,n,l,i;if(!(null==e?void 0:e.parentNode))return;const c=e.parentNode,a=Array.from(c.children).indexOf(e),s=document.createElement("div"),d=this.replaceCustomVariables(o.outerHtml);s.innerHTML="<"===d.trim().slice(0,1)&&">"===d.trim().slice(-1)?d:`<div>${d}</div>`,(null!==(r=o.assignedElementId)&&void 0!==r?r:e.id)&&(s.children[0].id=null!==(n=o.assignedElementId)&&void 0!==n?n:e.id),null===(i=null===(l=s.childNodes[0])||void 0===l?void 0:l.setAttribute)||void 0===i||i.call(l,"data-convert",""),c.replaceChild(s.childNodes[0],e),f[t]=c.children[a]})),o.innerText&&f.forEach((e=>{var t;const r=document.createElement("textarea");r.innerHTML=this.replaceCustomVariables(o.innerText),e.innerText=r.value,null===(t=null==e?void 0:e.setAttribute)||void 0===t||t.call(e,"data-convert",""),r.remove()}));const m=[];return o.insertHtml&&f.forEach((r=>{Object.keys(o.insertHtml).forEach((n=>{if(o.insertHtml[n]){const i=this.insertAdjacentHTML(r,n,o.insertHtml[n],e);if(!(i instanceof HTMLElement))return;i.dataset[`convertInsert${(0,t.capitalizeString)(n)}Html`]=e,l&&i.dataset.convertChangeId!==String(l)&&(i.dataset.convertChangeId=String(l)),m.push(i)}}))})),o.insertImage&&f.forEach((e=>{const t=this.insertAdjacentHTML(e,"afterbegin",o.insertImage);m.push(t)})),o.imageSourceSet&&f.forEach((e=>{const t=this.insertAdjacentHTML(e,"afterbegin",o.imageSourceSet);m.push(t)})),o.styles&&f.forEach((t=>{this.applyStyles(t,e,o.styles,o.setImageAsBadge)})),o.rearrange>=0&&this.rearrange(f[0],o.rearrange),{elements:f,insertedElements:m}}};e.default=l}(),e=n}(),window.convert_temp=window.convert_temp||{},convert_temp.toolkit=e.default}();
		
			
			window.convert = window.convert || {};
			if (window.convert_temp) {
				if (convert_temp.jQuery) convert.$ = convert_temp.jQuery;
				convert.T = window.convert_temp.toolkit;
				delete window.convert_temp;
			}
			
		
		const convertMap={"fire":"S","args":"D","err":"M","removeListeners":"C","experience":"R","variation":"T","match_type":"Wt","matching":"Jt","splitTests":"Se","enableVariation":"Me","triggerExperimentVariation":"Ee","triggerExperienceVariation":"Ce","variationId":"Oe","assignVariation":"je","executeMissingDataExperiences":"Le","visitorId":"Te","triggerIntegrations":"Ne","checkExperiments":"Pe","checkExperiences":"qe","doNotRunExperiences":"Ve","disableExperience":"Be","enableExperience":"Ue","disableVariation":"ze","executeExperiment":"Fe","executeExperience":"Ge","executeExperienceLooped":"Je","experiences":"Ke","breakExecution":"Xe","isPreview":"ri","splitTest":"ni","debugData":"oi","global_js":"fi","variations":"pi","changes":"mi","placeholders":"yi","settings":"Ii","project":"xi","putData":"Ei","bucketing":"Ci","eventType":"Oi","runVariation":"qi","locations":"Bi","trigger":"Ui","firstTime":"zi","isQAOverlay":"Fi","previewExperience":"Gi","isAudienceAgnostic":"Hi","decidedVariation":"Wi","selectVariationById":"Qi","visitorProperties":"Ki","forcedExperience":"Xi","enableTracking":"ts","environment":"ss","experience_id":"rs","variation_id":"ns","experienceName":"hs","experience_name":"ls","variationName":"ds","global_css":"vs","split_original":"bs","consentRequired":"Ss","secure":"Ms","forceCookieSecure":"Ls","experiencesGoals":"Js","goals":"Qs","currentData":"Ks","tld":"cr","hosts":"lr","domains":"gr","geo":"pr","weather":"vr","sessionHash":"Dr","archived_experiences":"jr","returning":"Lr","activatedFirstTime":"Kr","activated_first_time":"Yr","isPreviewURL":"tn","segmentId":"nn","selectCustomSegmentsByIds":"hn","goalId":"ln","goal_id":"dn","triggerConversion":"Vn","customDimensions":"Bn","triggerConversions":"Un","sendRevenue":"zn","fromAutoPickRevenue":"Gn","forceMultiple":"Hn","pushRevenue":"Wn","recheck_goals":"Jn","recheckGoals":"Qn","processDone":"Xn","tracked_items":"no","triggering_type":"uo","only_where_experience_runs":"vo","ga_event":"Io","bucketingData":"$o","goalData":"Do","min_order_value":"Mo","max_order_value":"Eo","account_id":"Vo","contentSecurityPolicyNonce":"Bo","setClientLevel":"Jo","customDomain":"Xo","isTrackingEnabled":"ih","getVisitorSegments":"rh","pluginId":"oh","releaseQueue":"ah","placeVisitorIntoSegment":"mh","checkSegments":"_h","checkSegmentLooped":"yh","putSegments":"Oh","screenWidth":"Rh","screenHeight":"Th","isRuleMatched":"Xh","OR":"ta","negated":"sa","AND":"ra","OR_WHEN":"oa","rule_type":"ca","utc_offset":"va","getUrl":"ya","getUrlWithQuery":"Ia","getQueryString":"ba","getPageTagPageType":"ka","getPageTagCategoryId":"Sa","getPageTagCategoryName":"$a","getPageTagProductSku":"Da","getPageTagProductName":"Ma","getPageTagProductPrice":"Ea","getPageTagCustomerId":"Ca","getPageTagCustom1":"Oa","getPageTagCustom2":"ja","getPageTagCustom3":"Aa","getPageTagCustom4":"La","getWeatherCondition":"Ra","getJsCondition":"Ta","useSignals":"Na","getIsDesktop":"Pa","getIsMobile":"qa","getIsTablet":"Va","getUserAgent":"Ba","getOs":"Ua","getBrowserVersion":"za","getBrowserName":"Fa","getProjectTimeMinuteOfHour":"Ga","getProjectTimeHourOfDay":"Ha","getProjectTimeDayOfWeek":"Wa","getLocalTimeMinuteOfHour":"Ja","getLocalTimeHourOfDay":"Qa","getLocalTimeDayOfWeek":"Ka","getBucketedIntoSegment":"Za","getBucketedIntoExperience":"Xa","getVisitsCount":"tc","getVisitorType":"ec","getVisitorId":"rc","getVisitorDataExists":"nc","getCookie":"oc","getVisitDuration":"hc","getGoalTriggered":"ac","getPagesVisitedCount":"cc","getLanguage":"lc","getDaysSinceLastVisit":"dc","getRegion":"gc","getCountry":"uc","getCity":"fc","getAvgTimePage":"vc","getSourceName":"mc","getMedium":"_c","getKeyword":"wc","getCampaign":"yc","redistribute":"Cc","batchSize":"Lc","releaseInterval":"Rc","sdkKey":"Fc","enrichData":"Jc","visitors":"Qc","tracking":"Yc","disableTracking":"nl","matchRulesByField":"yl","locationProperties":"Il","selectLocations":"$l","identityField":"Dl","site_area":"Ml","audiences":"El","matching_options":"Ol","traffic_allocation":"Tl","throttleChanges":"Ld","useMutationObserver":"Rd","showBody":"qd","currentExperiences":"Qd","changeId":"Yd","renderComplete":"sg","usePolling":"ag","useSPAOptimizations":"xg","currentUrl":"$g","isRedirect":"Dg","isEditor":"Mg","multipage_pages":"Pg","percentage":"Jg","allow_crossdomain_tracking":"iu","integrations":"su","google_analytics":"hu","integration":"uu","integrationVariables":"pu","data_anonymization":"mu","isIntercepting":"Tu","auto_revenue_tracking":"Pu","quantity":"qu","no_wait_pageview":"Uu","measurementId":"Hu","user_id":"Yu","user_properties":"Zu","_elevar_internal":"Xu","cookie_expires":"tf","getSegments":"nf","identify":"Tf","preventBodyAutoshow":"Nf","resetData":"Pf","fromApi":"qf","consentGiven":"Vf","setIntegrationVariable":"Bf","triggerLocation":"Uf","enablePreview":"zf","disablePreview":"Ff","onAdditionalData":"Gf","getAllVisitorData":"Wf","getCurrentVisitorData":"Jf","getUserData":"Qf","getUrlParameter":"Kf","crazyegg":"Ip","clicktale":"bp","hotjar":"xp","baidu":"kp","clicky":"Sp","cnzz":"$p","econda":"Dp","eulerian":"Mp","gosquared":"Ep","heapanalytics":"Cp","mouseflow":"Op","piwik":"jp","segmentio":"Ap","sitecatalyst":"Lp","ysance":"Rp","custom_domain":"qp","preview":"Vp","isLocationAgnostic":"Bp","editor":"Up","delayRun":"Gp","do_not_track":"tv","global_privacy_control":"ev","runExperiences":"ov","variables":"cv","global_javascript":"dv","global_javascript_placeholders":"wv","locationAgnostic":"bv","audienceAgnostic":"xv","visitor_insights":"Mv","sampling_rate":"Ev","customDomainVersion":"Cv","visitorInsightsId":"Ov","tracking_id":"jv","delayContinuousActivation":"Av","interceptEventsEarly":"Lv","customVariable":"Rv","browsing":"Nv","thisRun":"qv","kissmetrics":"UH","mixpanel":"IW","luckyorange":"Gx","googletagmanager":"pF","microsoft_clarity":"sh","twipla":"Lg","woopra":"SA","yandex":"Zu"};const convertPlaceholders = {};(()=>{var t,e,i,s,r,n,o,h,a,c=Object.create,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,g=Object.getOwnPropertyNames,u=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,p=(t=function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')},typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(t,e)=>(typeof require<"u"?require:t)[e]}):t),v=(e={o(t,e){!function(){let t=this,i=t=>(new TextEncoder).encode(t);function s(t,e){let s,r,n,o,h,a,c,l;for("string"==typeof t&&(t=i(t)),s=3&t.length,r=t.length-s,n=e,h=3432918353,a=461845907,l=0;l<r;)c=255&t[l]|(255&t[++l])<<8|(255&t[++l])<<16|(255&t[++l])<<24,++l,c=(65535&c)*h+(((c>>>16)*h&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295,n^=c,n=n<<13|n>>>19,o=5*(65535&n)+((5*(n>>>16)&65535)<<16)&4294967295,n=27492+(65535&o)+(((o>>>16)+58964&65535)<<16);switch(c=0,s){case 3:c^=(255&t[l+2])<<16;case 2:c^=(255&t[l+1])<<8;case 1:c^=255&t[l],c=(65535&c)*h+(((c>>>16)*h&65535)<<16)&4294967295,c=c<<15|c>>>17,c=(65535&c)*a+(((c>>>16)*a&65535)<<16)&4294967295,n^=c}return n^=t.length,n^=n>>>16,n=2246822507*(65535&n)+((2246822507*(n>>>16)&65535)<<16)&4294967295,n^=n>>>13,n=3266489909*(65535&n)+((3266489909*(n>>>16)&65535)<<16)&4294967295,n^=n>>>16,n>>>0}let r=s;if(r.v2=function(t,e){"string"==typeof t&&(t=i(t));let s,r=t.length,n=e^r,o=0;for(;r>=4;)s=255&t[o]|(255&t[++o])<<8|(255&t[++o])<<16|(255&t[++o])<<24,s=1540483477*(65535&s)+((1540483477*(s>>>16)&65535)<<16),s^=s>>>24,s=1540483477*(65535&s)+((1540483477*(s>>>16)&65535)<<16),n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)^s,r-=4,++o;switch(r){case 3:n^=(255&t[o+2])<<16;case 2:n^=(255&t[o+1])<<8;case 1:n^=255&t[o],n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16)}return n^=n>>>13,n=1540483477*(65535&n)+((1540483477*(n>>>16)&65535)<<16),n^=n>>>15,n>>>0},r.v3=s,typeof e<"u")e.exports=r;else{let e=t.murmur;r.noConflict=function(){return t.murmur=e,r},t.murmur=r}}()}},function(){return i||(0,e[g(e)[0]])((i={exports:{}}).exports,i),i.exports}),m=class{constructor(t,{h:e}={}){this.u={},this.p={},this._=e,this.I=t?.k||(t=>t)}on(t,e){(this.u[t]=this.u[t]||[]).push(e),Object.hasOwnProperty.call(this.p,t)&&this.S(t,this.p[t].D,this.p[t].M)}C(t){Object.hasOwnProperty.call(this.u,t)&&delete this.u[t],Object.hasOwnProperty.call(this.p,t)&&delete this.p[t]}S(t,e=null,i=null,s=!1){for(let s of this.u[t]||[])if(Object.hasOwnProperty.call(this.u,t)&&"function"==typeof s)try{s.apply(null,[this.I(e),i])}catch{}s&&!Object.hasOwnProperty.call(this.p,t)&&(this.p[t]={D:e,M:i})}},_=((s=_||{}).O="convert.com_variation_not_decided",s),w=["events","Qs","El","Bi","segments","Ke","jr","experiences.variations","features","features.variables"],y={j:"Qs",A:"El",location:"Bi",L:"segments",R:"Ke",T:"experiences.variations",N:"features"},I="Unsupported response type",b=((r=b||{})[r.P=0]="TRACE",r[r.V=1]="DEBUG",r[r.B=2]="INFO",r[r.U=3]="WARN",r[r.ERROR=4]="ERROR",r[r.F=5]="SILENT",r),x=((n=x||{}).G="log",n.P="trace",n.V="debug",n.B="info",n.U="warn",n.ERROR="error",n),k=((o=k||{}).H="convert.com_no_data_found",o.W="convert.com_need_more_data",o),S=((h=S||{}).J="country",h.K="browser",h.Y="devices",h.Z="source",h.X="campaign",h.tt="visitorType",h.et="customSegments",h),$="data-convert",D="convert-hide-body",M="convert-css",E=["trace","debug","info","warn","error","log"],C=[{s:"google.",q:"q"},{s:"search.yahoo.",q:"p"},{s:"bing.com/search",q:"q"},{s:"search.about.com",q:"q"},{s:"alexa.com/search",q:"q"},{s:"ask.com",q:"q"},{s:"aol/search",q:"q"},{s:"yandsearch",q:"text"}],O={it:1,st:1,rt:1,nt:1,ot:1,ht:1,ct:1,lt:1,dt:1,gt:1,ut:1,ft:1,vt:1,_t:1,wt:1,yt:1,It:1,bt:1,xt:1,kt:1,St:1,$t:1,Dt:1,Mt:1,Et:1,Ct:1,Ot:1,jt:1},j={At:1,Lt:1,Rt:1},A=new Error("Aborting execution."),L=((a=L||{}).Tt="g",a.Nt="v",a);function R(t){return Array.isArray(t)&&t.length>0}function T(t,e,i,s=!1){try{if("object"==typeof t){let i=e.split(".").reduce((t,e)=>t[e],t);if(i||s&&(!1===i||0===i))return i}}catch{}return typeof i<"u"?i:null}function N(...t){let e=t=>t&&"object"==typeof t;return t.reduce((t,i)=>(Object.keys(i).forEach(s=>{let r=t[s],n=i[s];t[s]=Array.isArray(r)&&Array.isArray(n)?[...new Set([...n,...r])]:e(r)&&e(n)?N(r,n):n}),t),{})}function P(t){return"object"==typeof t&&null!==t&&Object.keys(t).length>0}var q=(t,e)=>{if(t===e)return!0;if("object"!=typeof t||"object"!=typeof e||null==t||null==e)return!1;let i=Object.keys(t),s=Object.keys(e);if(i.length!=s.length)return!1;for(let r of i){if(!s.includes(r))return!1;if("function"==typeof t[r]||"function"==typeof e[r]){if(t[r].toString()!=e[r].toString())return!1}else if(!q(t[r],e[r]))return!1}return!0},V=((t,e,i)=>(i=null!=t?c(u(t)):{},((t,e,i,s)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of g(e))!f.call(t,i)&&void 0!==i&&l(t,i,{get:()=>e[i],enumerable:!(s=d(e,i))||s.enumerable});return t})(t&&t.Pt?i:l(i,"default",{value:t,enumerable:!0}),t)))(v());function B(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0===e?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"")}function U(t,e=9999){return V.default.v3(String(t),e)}function z(t){if("number"==typeof t)return Number.isFinite(t);if("string"!=typeof t||!/^-?(?:(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?|\.\d+)$/.test(t))return!1;let e=parseFloat(t.replace(/,/g,""));return Number.isFinite(e)}function F(t){if("number"==typeof t)return t;let e=String(t).split(",");return parseFloat("0"==e[0]?String(t).replace(/,/g,"."):String(t).replace(/,/g,""))}var G=class{static equals(t,e,i){return Array.isArray(t)?this.qt(-1!==t.indexOf(e),i):P(t)?this.qt(-1!==Object.keys(t).indexOf(String(e)),i):(t=String(t),e=String(e),t=t.valueOf().toLowerCase(),e=e.valueOf().toLowerCase(),this.qt(t===e,i))}static less(t,e,i){return typeof(t=z(t)?F(t):t)==typeof(e=z(e)?F(e):e)&&this.qt(t<e,i)}static lessEqual(t,e,i){return typeof(t=z(t)?F(t):t)==typeof(e=z(e)?F(e):e)&&this.qt(t<=e,i)}static contains(t,e,i){return t=String(t),e=String(e),t=t.valueOf().toLowerCase(),0===(e=e.valueOf().toLowerCase()).replace(/^([\s]*)|([\s]*)$/g,"").length?this.qt(!0,i):this.qt(-1!==t.indexOf(e),i)}static isIn(t,e,i=!1,s="|"){let r=String(t).split(s).map(t=>String(t));"string"==typeof e&&(e=e.split(s)),Array.isArray(e)||(e=[]),e=e.map(t=>String(t).valueOf().toLowerCase());for(let t=0;t<r.length;t++)if(-1!==e.indexOf(r[t]))return this.qt(!0,i);return this.qt(!1,i)}static startsWith(t,e,i){return t=String(t).valueOf().toLowerCase(),e=String(e).valueOf().toLowerCase(),this.qt(0===t.indexOf(e),i)}static endsWith(t,e,i){return t=String(t).valueOf().toLowerCase(),e=String(e).valueOf().toLowerCase(),this.qt(-1!==t.indexOf(e,t.length-e.length),i)}static regexMatches(t,e,i){t=String(t).valueOf().toLowerCase(),e=String(e).valueOf();let s=new RegExp(e,"i");return this.qt(s.test(t),i)}static exists(t,e,i){return this.qt(null!=t&&""!==t,i)}static Vt(t,e,i){return this.qt(null==t||""===t,i)}static qt(t,e=!1){return e?!t:t}};G.equalsNumber=G.equals,G.matches=G.equals,G.doesNotExist=G.Vt;var H=G,W="ConvertAgent/1.0",J=t=>!["GET","HEAD","DELETE","TRACE","OPTIONS"].includes(t.toUpperCase()),Q=(t,e,i)=>{let s="";return P(t)&&!J(e)&&(s="old-nodejs"!==i.runtime?Object.keys(t).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`).join("&"):i.Bt.stringify(t)),s&&`?${s}`},K={request(t){let e=t?.method?.toUpperCase()||"GET",i=t?.path?t.path.startsWith("/")?t.path:`/${t.path}`:"",s=t.Ut.endsWith("/")?t.Ut.slice(0,-1):t.Ut,r=t?.responseType||"json",n=(()=>{if(typeof window<"u")return{runtime:"browser"};if(typeof self<"u"&&"function"==typeof self?.importScripts)return{runtime:"browser"};if("function"==typeof fetch)return{runtime:"server-with-fetch"};try{return{runtime:"old-nodejs",url:p("url"),zt:p("http"),Ft:p("https"),Bt:p("querystring")}}catch{}return{runtime:"unknown"}})();return new Promise((o,h)=>{if("browser"===n.runtime||"server-with-fetch"===n.runtime){let a={method:e,keepalive:!0};t?.headers&&(a.headers=t.headers),"browser"!==n.runtime&&(a.headers||(a.headers={}),a.headers["Gt"]=W),t?.data&&J(e)&&(a.body=JSON.stringify(t.data));let c=`${s}${i}${Q(t?.data,e,n)}`;"post"===e.toLowerCase()&&typeof navigator<"u"&&navigator?.sendBeacon?navigator.sendBeacon(c,a.body)?o({data:!0,status:200,statusText:"The user agent successfully queued the data for transfer"}):h({message:I}):fetch(c,a).then(async t=>{if(200===t.status){let e={status:t.status,statusText:t.statusText,headers:t.headers,data:null};switch(r){case"json":e.data=await t.json();break;case"arraybuffer":e.data=await t.arrayBuffer();break;case"text":e.data=t;break;default:return void h({message:I})}o(e)}else h({message:t.statusText,status:t.status})}).catch(t=>{h({message:t?.message,status:t?.status,statusText:t?.statusText})})}else if("old-nodejs"===n.runtime){let a=n.url.parse(s);a.port||(a.port="https:"===a.protocol?"443":"80");let c=a.path.endsWith("/")?a.path.slice(0,-1):a.path,l="https:"===a.protocol?n.Ft:n.zt,d=[],g={hostname:a.hostname,path:`${c}${i}${Q(t?.data,e,n)}`,port:a.port,method:e},u=t?.data&&J(e)?JSON.stringify(t.data):null;t?.headers&&(g.headers=t.headers),g.headers||(g.headers={}),g.headers["Gt"]=W,u&&(g.headers["Ht"]=Buffer.byteLength(u));let f=l.request(g,t=>{t.on("data",t=>d.push(t)),t.on("end",()=>{if(200===t.statusCode){let e=Buffer.concat(d),i=e.toString(),s={status:t.statusCode,statusText:t.statusMessage,headers:t.headers,data:null};switch(r){case"json":s.data=i?JSON.parse(i):"";break;case"arraybuffer":s.data=e?.buffer;break;case"text":s.data=t;break;default:return void h({message:I})}o(s)}else h({message:t.statusMessage,status:t.statusCode})})});f.on("error",t=>{let e=t;h({message:e?.message,status:e?.code,statusText:e?.statusText})}),u&&f.write(u),f.end()}else h({message:"Unable to perform network request"})})}},Y=(t,e,i=!1)=>{if("regexMatches"===e?.Jt?.Wt){let e=new URL(t);return i||(e.search=""),e.toString()}let s=String(e?.value??""),r=new URL(t);if(!(t=>{if(t.startsWith("http"))return!1;try{return new RegExp(t,"i"),!0}catch{return!1}})(s)&&s)try{let t=new URL(s,r.origin),e=t.pathname.endsWith("/");if(e&&!r.pathname.endsWith("/")?r.pathname=`${r.pathname}/`:!e&&r.pathname.length>1&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.slice(0,-1)),i){let e=t.pathname.endsWith("/")&&""!==t.search,i=!t.pathname.endsWith("/")&&""!==t.search;e&&!r.pathname.endsWith("/")?r.pathname+="/":i&&r.pathname.endsWith("/")&&(r.pathname=r.pathname.slice(0,-1))}else r.search=""}catch{i||(r.search="")}else i||(r.search="");return r.toString()},Z=(t,e=new WeakMap)=>{if("object"!=typeof t||null===t)return"function"==typeof t?t.toString():t;if(e.has(t))return e.get(t);if(Array.isArray(t)){let i=t.map(t=>Z(t,e));return e.set(t,i),i}if(P(t)){let i={};e.set(t,i);for(let s of Object.keys(t))Object.defineProperty(i,s,{get:()=>Z(t[s],e),set:e=>t[s]="function"==typeof t?e.toString():e,enumerable:!0,configurable:!0});try{return JSON.parse(JSON.stringify(i))}catch({}){}}return t},X=(t,e=!1)=>{if(typeof convertMap>"u")return t;if(e){for(let e in convertMap)if(convertMap[e]===t)return e;return t}return convertMap[t]||t},tt=(t,e=!1,i=new WeakMap)=>{if(typeof convertMap>"u"||"object"!=typeof t||null===t)return t;if(i.has(t))return i.get(t);if(Array.isArray(t)){let s=t.map(t=>tt(t,e,i));return i.set(t,s),s}if(P(t)){let s={};i.set(t,s);for(let r of Object.keys(t)){let n=X(r,e);Object.defineProperty(s,n,{get:()=>tt(t[r],e,i),set:e=>t[r]=e,enumerable:!0,configurable:!0})}return s}return t},et=(t,e)=>{if(t){for(let e in t)delete t[e],delete t[X(e)];for(let i in e)t[X(i)]=tt(e[i])}else typeof console<"u"&&console.error&&console.error("Object in scope must have a predefined value!")},it=t=>{if((t=>{if("object"!=typeof t||null===t)return!1;if(Array.isArray(t)){for(let e of t)if("function"==typeof e)return!1;return!0}let e=Object.getPrototypeOf(t);if(null!==e&&e!==Object.prototype)return!1;let i=Object.getOwnPropertyDescriptors(t);for(let t in i){let e=i[t];if(e.get||e.set||"function"==typeof e.value)return!1}return!0})(t))try{return structuredClone(t)}catch{}return"object"==typeof t&&null!==t?Array.isArray(t)?t.map(t=>it(t)):P(t)?Object.keys(t).reduce((e,i)=>(e[i]=it(t[i]),e),{}):Object.assign(Object.create(Object.getPrototypeOf(t)),t):t},st=(t,e)=>t.reduce((t,i,s)=>{let r;return r=P(i)?i[e]||s:i,t[r]=i||"",t},{}),rt=t=>t.filter((e,i)=>t.findIndex(t=>q(t,e))===i),nt=t=>{if("boolean"==typeof t)return t;switch(String(t).toLowerCase()){case"true":case"1":return!0}return!1};function ot(t,e=500){let i,s;return(...r)=>{let n=Date.now();i&&n<i+e?(s&&clearTimeout(s),s=setTimeout(()=>{i=Date.now(),t.apply(this,Array.prototype.slice.apply(r))},e-(n-i))):(i=n,t.apply(this,Array.prototype.slice.apply(r)))}}function ht(t,e=100,i=!1){let s;return(...r)=>{let n=i&&!s;clearTimeout(s),s=setTimeout(()=>{s=null,i||t.apply(this,Array.prototype.slice.apply(r))},e),n&&t.apply(this,Array.prototype.slice.apply(r))}}var at,ct,lt,dt=(t,e)=>{let i=`www.${t}`,s=new RegExp(`^${e.replace(/\./g,"\\.").replace(/\?/g,"\\?").split("*").join(".*?")}$`);return s.test(i)||s.test(t)},gt=t=>JSON.stringify(t).replace(/,/g,"-").replace(/:/g,".").replace(/"/g,""),ut=t=>{if("string"!=typeof t)return{};try{return JSON.parse(t.replace(/-/g,",").replace(/\./g,":").replace(/([A-Za-z0-9]+):/g,'"$1":'))}catch({stack:e,message:i}){return typeof console<"u"&&console.error&&(console.error("Convert:",e||i),console.error("Convert:",t.replace(/-/g,",").replace(/\./g,":").replace(/([A-Za-z0-9]+):/g,'"$1":'))),{}}},ft=t=>{if(!t)return t;try{return decodeURIComponent(t.replace(/%(?![0-9a-fA-F]{2})/g,"%25"))}catch{return decodeURIComponent(t.replace(/%[0-9a-fA-F]{2}/g,"%20"))}},pt=t=>{try{return t!==decodeURIComponent(t)}catch{return!1}},vt=({url:t,attributes:e={}})=>new Promise((i,s)=>{let r=document.createElement("script");r.src=t;for(let t in e)r.setAttribute(t,e[t]);r.onload=()=>i(),r.onerror=t=>s(t);let n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(r,n):typeof console<"u"&&console.warn&&console.warn("Unable to find any script element in this document!")}),mt=t=>"function"==typeof t[Symbol.iterator],_t=(t,e)=>{"loading"!==document.readyState?setTimeout(()=>t(),1):document.addEventListener("DOMContentLoaded",()=>t(),{signal:e})},wt=(t,{scope:e=window,Qt:i=20,interval:s=300}={})=>{let r=0,n=async o=>{let h;h="function"==typeof t?await t():e?.[t],h?o(h):r<i?(r++,setTimeout(()=>n(o),s)):o()};return new Promise(t=>n(t))},yt=t=>{if(!t||"string"!=typeof t)return t;let e="",i=0,s=t.length,r=r=>{for(e+=r,i++;i<s&&t[i]!==r;)"\\"===t[i]&&i+1<s?(e+=t[i]+t[i+1],i+=2):(e+=t[i],i++);i<s&&(e+=t[i],i++)};for(;i<s;){let n=t[i],o=t[i+1];if("'"!==n&&'"'!==n&&"`"!==n)if("/"!==n||"/"!==o)if("/"!==n||"*"!==o)e+=n,i++;else for(i+=2;i<s-1;){if("*"===t[i]&&"/"===t[i+1]){i+=2;break}i++}else for(;i<s&&"\n"!==t[i]&&"\r"!==t[i];)i++;else r(n)}return e},It=class{constructor(t,e){this.Kt=e,this.href=t||document.location.href,e||(this.href=this.href.toLowerCase()),this.object=this.parse(t),this.query=this.getQuery(this.object?.query),this.hash=this.Yt(this.object?.hash)}Zt(){return`${this.object.protocol}//${this.object.host}${this.object.pathname}`}parse(t){if(t){let e=t.startsWith("http")?t:`${location.protocol}//${location.host}${t.startsWith("/")?t:`/${t}`}`,i=new URL(this.Kt?e:e.toLowerCase());return{hash:i.hash.slice(1),host:i.host,hostname:i.hostname,pathname:i.pathname,protocol:i.protocol,query:i.search.slice(1)}}return{hash:document.location.hash.slice(1),host:document.location.host,hostname:document.location.hostname,pathname:document.location.pathname,protocol:document.location.protocol,query:document.location.search.slice(1)}}create(t=[]){let e=this.Zt(),i=Object.keys(this.query).filter(e=>!t.includes(e));i.length&&(e+=`?${i.map(t=>{let e=this.query[t];return`${t}=${pt(e)?e:encodeURIComponent(e)}`}).join("&")}`);let s=Object.keys(this.hash).filter(e=>!t.includes(e));return s.length&&(e+=`#${s.map(t=>{let e=this.hash[t];return`${t}${e?`=${pt(e)?e:encodeURIComponent(e)}`:""}`}).join("&")}`),e}getQuery(t){if(this.query&&!t)return this.query;t||(t=this.object?.query);let e,i,s,r={},n=t?.split("&")||[];for(i=0,s=n.length;i<s;i++){if(!n[i].trim())continue;e=n[i].split("=");let t=e.shift(),s=e.join("=");if(t.trim())try{r[t]=ft((s??"").replace(/\+/g,"%20"))}catch{r[t]=String(s).replace(/\+/g," ")}}return this.query=r,r}Yt(t){if(this.hash&&!t)return this.hash;if(!t)return{};let e,i,s,r={},n=(t||this.object?.hash||"").split("&");for(i=0,s=n.length;i<s;i++)if(e=n[i].split("="),e[0].trim())try{r[e[0]]=e[1]?ft(e[1].replace(/\+/g,"%20")):""}catch{r[e[0]]=e[1]?String(e[1]).replace(/\+/g," "):""}return this.hash=r,r}},bt=["convert_action","reed_action","convert_e","convert_v","reed_a","_conv_eignore","_conv_eforce","conveforce","convert_disable","convert_log_level","convert_render","_conv_disable_spa_optimizations","convert_optout","convert_canceloptout","_conv_domtimeout","_conv_codecheck","reedge_codecheck","_conv_domain_id"],xt={v0:["REED_page_type","_conv_page_type"],v1:["REED_category_id","_conv_category_id"],v2:["REED_category_name","_conv_category_name"],v3:["REED_product_sku","_conv_product_sku"],v4:["REED_product_name","_conv_product_name"],v41:["REED_product_price","_conv_product_price"],v5:["REED_customer_id","_conv_customer_id"],cv1:["REED_custom_v1","_conv_custom_v1"],cv2:["REED_custom_v2","_conv_custom_v2"],cv3:["REED_custom_v3","_conv_custom_v3"],cv4:["REED_custom_v4","_conv_custom_v4"]},kt=class{constructor({config:t,data:e,state:i,Xt:s,request:r,remote:n,te:o,ee:h,h:a,ie:c,se:l,re:d,ne:g,segments:u,visitor:f}){this.oe=t,this.he=e,this.ae=i,this.ce=r,this.le=n,this.de=o,this._=a,this.ge=s,this.ue=h,this.fe=c,this.pe=l,this.ve=d,this.me=g,this._e=u,this.we=f,this.ye=[],this.Ie=!1,this.be=[],this.xe={},this.ke={},this.ae.Se={},this.$e=2400,this.De=!1,this.ue.on("convert.com_no_data_found",t=>{let{experienceId:e}=tt(t);this.ye.push(e)}),this.ue.on("convert.com_need_more_data",t=>{let{experienceId:e}=tt(t);this.be.push(e)}),this.ue.on("enable_variation",(...t)=>this.Me(tt(t,!0))),this.de.Ee=this.de.Ce=(...t)=>{let[e]=t;if(P(e))this.Ce(e);else{let[e,i]=t;this.Ce({experienceId:e,Oe:i})}},this.de.je=(...t)=>{let[e]=t;if(P(e))this.Ae({...e,force:!0});else{let[e,i]=t;this.Ae({experienceId:e,Oe:i,force:!0})}},this.de.Le=(...t)=>{let[e]=t;if(P(e))this.Re(e);else{let[e,i]=t;this.Re({Te:i,Ne:e})}},this.de.Pe=this.de.qe=(...t)=>{let[e]=t;if(P(e))this.Re(e);else{let[e,i]=t;this.Re({Te:i,Ne:e})}},this.de.Ve=()=>{this.De=!0},this.de.Be=(...t)=>{let[e]=t;if(P(e))this.Be(e);else{let[e]=t;this.Be({experienceId:e})}},this.de.Ue=(...t)=>{let[e]=t;if(P(e))this.Ue(e);else{let[e]=t;this.Ue({experienceId:e})}},this.de.ze=(...t)=>{let[e]=t;if(P(e))this.ze(e);else{let[e,i]=t;this.ze({experienceId:e,Oe:i})}},this.de.Me=(...t)=>{let[e]=t;if(P(e))this.Me(e);else{let[e,i]=t;this.Me({experienceId:e,Oe:i})}},this.de.Fe=this.de.Ge=(...t)=>{let[e]=t;if(P(e))this.He({...e,We:!0});else{let[e,i,s,r]=t;this.He({experienceId:e,Te:s,Ne:i,logLevel:r,We:!0})}},this.de.Je=this.de.Je=(...t)=>{let[e]=t;if(P(e))this.Qe(e);else{let[e,i,s]=t;this.Qe({experienceId:e,Te:s,Ne:i})}},window.convert[X("executeExperiment",!0)]=window.convert[X("executeExperience",!0)]=this.de.Ge,window.convert[X("executeExperimentLooped",!0)]=window.convert[X("executeExperienceLooped",!0)]=this.de.Je}process({Ke:t,Ne:e=!0}){if(this.De)return void this.ue.S("process_experiences_complete",{Te:this.we.id,Ye:!0,Ne:e});let i=this.ce.url.query?._conv_eignore?.split?.(",")||[],s=!(!i.length||"all"!==i[0].toLowerCase());for(let{id:e,type:r,version:n}of t)i.includes(e)||s||(Number(n)<6||"split_url"===r)&&this.ae.Se[e]||(this.Ze({experienceId:e,Te:this.we.id}),this.ae?.Xe&&this.Xe());this.ye.length&&this.ue.S("get_additional_data",{Te:this.we.id,Ne:e})}ti(){if(P(this.ae.Se))return this.ae.Se;this.ae.Se=this.we.cookies.getData("_conv_sptest")||{},P(this.ae.Se)||(this.ae.Se=this.ge.get("conv_split_variation")||{});let t=!1;if(P(this.ae.Se)||(this.ae.Se=this.we.ei()||{},t=!!Object.keys(this.ae.Se).length),P(this.ae.Se)){for(let e in this.ae.Se){String(this.oe.Ke[e]?.type||"Split URL").toUpperCase();let i,s=new It(this.ce.url.href).create(bt);if("object"==typeof this.ae.Se[e]){let{value:t,time:r=0,ii:n}=this.ae.Se[e]||{};if(r>=Date.now()&&(i=String(t)),n===U(s)){delete this.ae.Se[e];continue}}else{let t=String(this.ae.Se[e]);if(t.includes("+")){let[r,n]=t.split("+");if(z(n)&&Number(n)===U(s)){delete this.ae.Se[e];continue}i=r}else i=t}i?i.includes("preview")?this.ae.ri=!0:(this.he?.oi?.Ke?.ni===e&&this.le.log({v:i},{cookies:this.we.cookies,request:this.ce,from:"splitTestCookie",visitor:this.we}),this.hi({experienceId:e,Oe:i,ai:t}),this.we.ci({experienceId:e,Oe:i})):delete this.ae.Se[e]}this.we.cookies.deleteData("_conv_sptest"),this.ge.delete("conv_split_variation"),this.we.li()}return this.ae.Se}Xe({force:t}={}){if(t||this.we.cookies.enabled){for(let t in this.ke)if(this.ke[t])try{clearTimeout(this.ke[t]),this.ke[t]=null}catch({}){}throw this.ue.S("save_referrer",{}),A}}di({experienceId:t}){if(this.we.gi||!1===this.ae.ui[t])return!1;let{fi:e,pi:i}=this.oe.Ke[t],s=t=>t.replace(/[\r\n\s]/g,"").replace(/'/g,'"').includes('what:"identify"');return s(String(e))||!!Object.values(i).map(({mi:t})=>tt(t,!0)).flat().filter(({data:t})=>s(String(t?.custom_js))||s(String(t?.js))).length}_i({experienceId:t,wi:e=!1}){let{yi:i=[]}=this.oe.Ke[t].Ii,s=this.me.bi().reduce((t,e)=>(t.push(e.key),t),[]);return(this.oe.xi.Ii?.yi||[]).some(t=>i.includes(t)&&(e&&s.includes(t)||!e))}ki(t){for(let e of t)!1!==this.ae.ui[e]&&(this.ae.ui[e]=!0)}Si(){if(P(this.ae.ui))for(let t in this.ae.ui)!1!==this.ae.ui[t]&&(this._i({experienceId:t,wi:!0})&&(this.ae.ui[t]=!1),this.Ze({experienceId:t}))}$i({Te:t,Ne:e=!0}){if(!this.Ie&&this.ye.length){this.Ie=!0;for(let e=0,i=this.ye.length;e<i;e++)this.Ze({experienceId:this.ye[e],Te:t}),this.ae?.Xe&&this.Xe();this.ue.S("process_locations",{Ne:e}),this.ye=[],this.ue.S("process_experiences_complete",{Te:t,Ne:e})}}Di({experienceId:t,Oe:e,Mi:i}){let s={eData:{k1:"viewExp",k2:[t],k3:[e],...isNaN(i)?{}:{n1:i}}};this.le.log(s,{cookies:this.we.cookies,request:this.ce,from:"trackRequest",visitor:this.we})}hi({experienceId:t,Oe:e,ai:i}){if(this.ae?.ri||!i&&this.we.Ke?.[t])return;this.pe.Ei(this.we.id,{Ci:{[t]:String(e)}});let s={experienceId:String(t),Oe:String(e)};this.le.track({Oi:"bucketing",data:s},{visitor:this.we});let r=this.ge.get("conv_traffic_allocation")||{},n=Number(r[this.we.id]?.[t]);this.Di({experienceId:t,Oe:e,Mi:n}),this.ji()}Be({experienceId:t}){let e=Array.isArray(t)?t:[t];if(!e.length)return;let i=Object.fromEntries(e.map(t=>[t,1]));for(let t of e)this.we.Ai[t]&&delete this.we.Ai[t],this.we.Li[t]&&delete this.we.Li[t],this.we.Ri({experienceId:t});P(this.we.Ai)?this.ge.set("enabled_experiences",this.we.Ai):this.ge.delete("enabled_experiences"),P(this.we.Li)?this.ge.set("enabled_variations",this.we.Li):this.ge.delete("enabled_variations"),this.we.Ti=N(this.we.Ti,i),this.ge.set("disabled_experiences",this.we.Ti),this.we.cookies.save(),this.we.process(),this.ue.S("process_experience_disabled",{Ke:e})}Ue({experienceId:t}){let e=Array.isArray(t)?t:[t];if(e.length){for(let t of e)this.we.Ti[t]&&delete this.we.Ti[t],this.we.Ni[t]&&delete this.we.Ni[t];P(this.we.Ti)?this.ge.set("disabled_experiences",this.we.Ti):this.ge.delete("disabled_experiences"),P(this.we.Ni)?this.ge.set("disabled_variations",this.we.Ni):this.ge.delete("disabled_variations"),this.we.Ai=N(this.we.Ai,Object.fromEntries(e.map(t=>[t,1]))),this.ge.set("enabled_experiences",this.we.Ai),this.ue.S("process_experience_enabled",{Ke:e});for(let t of e)this.He({experienceId:t})}}ze({experienceId:t,Oe:e}){!t||!e||(this.we.Li[t]&&delete this.we.Li[t],P(this.we.Li[t])||delete this.we.Li[t],this.we.Pi({experienceId:t,Oe:e}),P(this.we.Li)?this.ge.set("enabled_variations",this.we.Li):this.ge.delete("enabled_variations"),this.we.Ni[t]=e,this.ge.set("disabled_variations",this.we.Ni),this.we.cookies.save(),this.we.process(),this.ue.S("process_variation_disabled",{experienceId:t,Oe:e}))}Me({experienceId:t,Oe:e,qi:i=!0}){if(t&&e&&(this.we.Ti[t]&&delete this.we.Ti[t],this.we.Ni[t]&&delete this.we.Ni[t],P(this.we.Ti)?this.ge.set("disabled_experiences",this.we.Ti):this.ge.delete("disabled_experiences"),P(this.we.Ni)?this.ge.set("disabled_variations",this.we.Ni):this.ge.delete("disabled_variations"),this.we.Li[t]=e,this.ge.set("enabled_variations",this.we.Li),this.ue.S("process_variation_enabled",{experienceId:t,Oe:e}),i)){let i=this.Vi({experienceId:t});if(i)if("boolean"==typeof i)this.Ce({experienceId:t,Oe:e});else if(Array.isArray(i))for(let t of i)this.ue.S("process_locations",{locationId:t})}}Vi({experienceId:t}){let e=!1,i=[];for(let s of this.oe.Ke[t].Bi)this.oe.Bi[s]?.Ui&&"upon_run"!==this.oe.Bi[s]?.Ui?.type?"callback"===this.oe.Bi[s]?.Ui?.type&&i.push(s):e=!0;return e||!!i.length&&i}ji(){Object.values(this.we.data.Ke).filter(({zi:t})=>t).length===Object.keys(this.we.Ke).length&&(this.le.track({Oi:"testVisitor"},{visitor:this.we}),this.le.log({eData:{k1:"tv"}},{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRequest"}))}Ze({experienceId:t,Te:e}){if(!this.oe.Ke[t]||this.ae.ui[t]||this.ae.Fi&&(this.we.Ti[t]||this.we.Ni[t]||!this.ae.Gi?.[t])||"1"===this.we.Ke[t]?.v||this.we.Ti[t])return;let i,s=this.fe.getData({segments:this._e,visitor:this.we,experienceId:t});if(this.ae.Gi[t]&&this.ae?.Hi)i=this.ae.Gi[t];else if(this.ae.Gi[t]||!this.ae.Fi)if(this.ae.Wi[t])i=this.ae.Wi[t],this.hi({experienceId:t,Oe:i});else{let e=this.me.Ji({experienceId:t}),r=!("deploy"===this.oe.Ke[t].type||"split_url"===this.oe.Ke[t].type||"completed"===this.oe.Ke[t].status||e),n=this.ve.Qi(this.we.id,t,{Ki:s,Yi:!1,Zi:this.ae.Xi[t],ts:r,es:!0,ss:this.he?.ss});if(n){if(Object.values(k).includes(n))return"convert.com_need_more_data"===n?this.ye.push(t):"convert.com_no_data_found"===n&&this.be.push(t),!1;if(Object.values(_).includes(n))"convert.com_variation_not_decided"===n||(i=1);else{let s=n;if(s){i=s.id,e&&!e.includes(i)&&this.hi({experienceId:t,Oe:i});let n=this.ge.get("conv_traffic_allocation")||{};n[this.we.id]||(n[this.we.id]={}),!n[this.we.id][t]&&s?.Mi&&(n[this.we.id][t]=s.Mi,this.ge.set("conv_traffic_allocation",n)),r&&!this.we.Ke?.[t]&&(this.Di({experienceId:t,Oe:i,Mi:s?.Mi}),this.ji())}}}}if(!i||Number(i),i){if(this.ke[t])try{clearTimeout(this.ke[t]),this.ke[t]=null}catch({}){}try{let e=this.oe.Ke[t].name,s=1!==Number(i)&&i.toString(),r=this.oe.Ke[t].pi[i]?.name;this.ue.S("experience.variation_decided",{data:{experienceId:String(t),rs:String(t),Oe:s,ns:s,hs:e,ls:e,ds:r,variation_name:r}})}catch({}){}if(1!==Number(i)){if(this.oe.Ke[t]?.fi&&(this.me.gs({code:this.oe.Ke[t].fi}),this.we.us&&!this.we.gi))return void(this.ae.ui[t]=!0);this.oe.Ke[t]?.vs&&this.me._s({ws:this.oe.Ke[t].vs});let s=Number(this.oe.Ke[t]?.version),r=this.qi({experienceId:t,ys:s,Oe:i,Te:e});return r||this.ae.Xe?this.Xe({force:r}):this.we.ci({experienceId:t,Oe:i}),!0}this.we.Is({experienceId:t}),this.we.cookies.save()}return!1}qi({experienceId:t,ys:e,Oe:i}){if(!this.ae.Fi||!this.we.Ti[t]&&!this.we.Ni[t]&&this.ae.Gi?.[t]){if("split_url"===this.oe.Ke[t]?.type){if(!this.ae.Se[t])if(String(this.oe.Ke[t].bs?.id)!==String(i))try{return this.me.xs({experienceId:t,Oe:i,ys:e}),!0}catch({message:e}){this.le.log({msg:`${e} e: ${t} v: ${i}`},{cookies:this.we.cookies,request:this.ce,from:"splitRunError",visitor:this.we})}else try{return this.me.xs({experienceId:t,Oe:i,ys:e,ks:!0,Ss:!this.we.cookies.enabled}),!1}catch({}){}}else this.me.xs({experienceId:t,Oe:i,ys:e});return this.ae.Xe}}Ae({experienceId:t,Oe:e,force:i}){this.ae.isDisabled||(i?(this.ae?.Wi||(this.ae.Wi={}),this.ae.Wi[t]=e):(this.ae?.Gi||(this.ae.Gi={}),this.ae.Gi[t]=e))}Re({Te:t,Ne:e=!0}){if(this.ae.isDisabled)return;let i=[];for(let t=0,e=this.be.length;t<e;t++)i.push(this.be[t]);this.be=[];for(let e=0,s=i.length;e<s;e++)this.Ze({experienceId:i[e],Te:t}),this.ae?.Xe&&this.Xe();this.ue.S("process_experiences_complete",{Te:t,Ne:e})}He({experienceId:t,Ne:e=!0,We:i=!1}){this.ae.isDisabled||this.ae.Fi&&!this.ae.Gi?.[t]||!t||!this.oe.Ke[t]||this.ue.S("process_locations",{experienceId:t,Ne:e,$s:i})}Qe({locationId:t,experienceId:e,Te:i,Ne:s=!0}={}){if(this.ae.isDisabled||!e&&!t)return;if(e){let t=!1;for(let i in this.oe.Ke[e].pi){let{status:s}=this.oe.Ke[e].pi[i];if(t=!s||"running"===s,t)break}if(!t)return}let r=e?`exp-${e}`:`loc-${t}`;if(this.xe[r]||(this.xe[r]=0),this.ke[r])try{clearTimeout(this.ke[r]),this.ke[r]=null}catch({}){}if(this.xe[r]<this.$e){this.xe[r]++;let n=this.xe[r]%40==1;this.ke[r]=setTimeout(()=>{e?this.He({experienceId:e,Te:i,Ne:s,logLevel:n?5:this.he?.logLevel||4}):this.ue.S("process_locations",{locationId:t,Ne:s})},50)}else this.xe[r]=0}Ce({experienceId:t,Oe:e}){if(this.ae.isDisabled||this.ae.Fi&&!this.ae.Gi?.[t]||!t||!e||!this.oe.Ke[t]||!this.oe.Ke[t]?.pi?.[e])return;this.ae.ri=!0;let i=Number(this.oe.Ke[t]?.version),s=this.qi({experienceId:t,ys:i,Oe:e});this.ae.Xe?this.Xe({force:s}):this.we.ci({experienceId:t,Oe:e}),this.me.start()}},St=["sc","pv"],$t=class{constructor({request:t,state:e,domain:i,Ds:s,path:r,Ms:n,enabled:o,ee:h,h:a,remote:c,te:l}){this.data={},this.enabled=o,this.ce=t,this.ae=e,this.Es=i||"",this.Cs=s||15768e4,this.Os=r||"/",this.As=n||!1,this.ue=h,this._=a,this.le=c,this.de=l,this.load(),this.de.Ls=t=>this.Rs(t),window.convert[X("getCookie",!0)]=t=>this.get(t),window.convert[X("setCookie",!0)]=(t,e,i)=>this.set(t,e,i)}Ts(){return this.Es}Ns(t){this.Es=t}Ps(){return this.Cs}qs(t){this.Cs=t}Vs(){return this.Os}Bs(t){this.Os=t}Us(){return this.As}Rs(t){this.ae.isDisabled||(this.As=t)}get(t){if(this.ae.isDisabled)return;let e=new URLSearchParams(String(document.cookie).replace(/; */g,"&")),i=Object.fromEntries(e.entries());if(i[t])try{return ft(i[t])}catch({message:e}){this.le.log({cname:t,cval:i[t],error:e},{cookies:this,from:"cookieDecodeError"})}return null}set(t,e,i){if(this.ae.isDisabled)return;let s=new Date,r=new Date;r.setTime(s.getTime()+1e3*(i||this.Cs));let n=this.Os?`;path=${this.Os}`:"",o=this.Es?`;domain=${this.Es}`:"",h=this.As?`;secure=${this.As}`:"";document.cookie=`${t}=${encodeURIComponent(e)};expires=${r.toUTCString()}${n}${o};SameSite=lax${h}`}delete(t){this.ae.isDisabled||this.set(t,"deleted",-1)}getData(t,e){return!!this.data[t]&&(e?this.data[t][e]:this.data[t])}setData(t,e,i){i?(this.data[t]||(this.data[t]={}),this.data[t][i]=e):this.data[t]=e}save(){this.saveData("_conv_sptest",15),this.enabled&&(this.saveData("_conv_v",15768e3),this.saveData("_conv_s",1200),this.saveData("_conv_r",15552e3),this.saveData("_conv_t",86400),this.ue.S("cookies.saved"))}saveData(t,e){if(this.data[t]){let i=this.zs(this.data[t]);this.set(t,i,e)}else this.data[t]&&delete this.data[t],this.set(t,"Deleted",-16e4)}zs(t={}){let e=[];if("string"==typeof t)return t;for(let i in t){let s=`${i}:${String(t[i]).replace(/:/g,"").replace(/\*/g," ").replace(/\|/g,"-")}`;e.push(s)}return e.join("*")}Fs(t,e){e?this.data[t][e]?this.data[t][e]++:this.data[t][e]=1:this.data[t]?this.data[t]++:this.data[t]=1}Gs(t,e){e?this.data[t][e]?this.data[t][e]--:this.data[t][e]=0:this.data[t]?this.data[t]--:this.data[t]=0}deleteData(t,e){e?delete this.data[t][e]:delete this.data[t]}setEnabled(t){this.enabled=t}verify(){return!(!this.enabled||!this.get("_conv_v"))}test(){this.set("_conv_check_cookies",1);let t=!!this.get("_conv_check_cookies");return this.delete("_conv_check_cookies"),t}load(){let{_conv_v:t,_conv_s:e,_conv_sptest:i,_conv_r:s}=this.ce.url.query;t&&e?(this.parse("_conv_v",ft(t)),this.parse("_conv_s",ft(e)),s&&this.parse("_conv_r",ft(s))):(this.read("_conv_v"),this.read("_conv_s"),this.read("_conv_r"),this.read("_conv_t")),i?this.parse("_conv_sptest",ft(i)):this.read("_conv_sptest"),this.read("_conv_prevent_tracking")}parse(t,e){this.data[t]={};let i="*";-1!=e.indexOf("|")&&(i="|");let s=e.split(i);for(let e=0,i=s.length;e<i;e++){let i=s[e].split(":");typeof i[1]<"u"?this.data[t][i[0]]=St.includes(i[0])?Number(i[1]):i[1]:this.data[t]=St.includes(t)?Number(i[0]):i[0]}}read(t){let e=this.get(t);e&&this.parse(t,e)}},Dt=class{constructor({cookies:t}){this.Hs=t,this.we=ut(t.getData("_conv_v","exp"))||{},this._e=ut(t.getData("_conv_v","seg"))||{}}Ws(){return this.Hs}get(){let t={},e={},i={};for(let s in this.we){t[s]=this.we[s].v;for(let t in this.we[s].g||{})e[s]||(e[s]={}),e[s][t]=!0,i[t]=!0}return{Ci:t,Js:e,Qs:i}}set(t,e){let i=this.visitor(e);this.Hs.setData("_conv_v",gt(i),"exp");let{segments:s}=e||{};if(s){let t={},e=e=>t[e]=1;(s[X("customSegments")]||[]).forEach(e),this.Hs.setData("_conv_v",gt({...this._e,...t}),"seg")}}visitor(t={}){let{Ci:e={},Js:i}=this.get(),s={},r=(t,e,i={})=>{s[t]={v:e,g:i}};Object.keys(e).forEach(t=>{if(P(i[t])){let s=Object.keys(i[t]).reduce((t,e)=>(t[e]=1,t),{});r(t,e[t],s)}else r(t,e[t])});let{Ci:n,Qs:o}=t;return n&&Object.keys(n).forEach(t=>{r(t,n[t],s[t]?s[t].g:{}),o&&((t,e)=>{s[t]||(s[t]={g:{}}),Object.keys(e).forEach(e=>{s[t].g[e]=1})})(t,o)}),s}},Mt=[/(^|\.)chatgpt\.com$/i,/(^|\.)claude\.ai$/i,/(^|\.)perplexity\.ai$/i,/(^|\.)poe\.com$/i,/(^|\.)gemini\.google\.com$/i,/(^|\.)bard\.google\.com$/i,/(^|\.)copilot\.microsoft\.com$/i],Et=class{constructor({config:t,data:e,state:i,Ks:s,Ys:r,request:n,Zs:o,remote:h,te:a,Xt:c,ee:l,Xs:d,h:g}){this.tr=!1,this.er=!1,this.ir=!1,this.sr=!1,this.us=!1,this.rr={},this.oe=t,this.he=e,this.nr={},this.ae=i,this.Ks=s,this.data=r,this.ce=n,this.hr=o,this.le=h,this.de=a,this.ge=c,this.ue=l,this.ar=d,this._=g}process(t){let e=!this.id,i=!t,s=this.ce.url.object.host.replace(/^www\./,"").replace(/:\d+$/,"");this.domain=((t,e)=>{let i;if(t.find(({cr:t})=>t===e))return`.${e}`;for(let{cr:s,lr:r}of t)if(r.find(t=>t.includes(e)||dt(e,t))){i=`.${s}`;break}return i||!1})(this.oe.xi.gr,s)||"",this.cookies=t||new $t({request:this.ce,state:this.ae,domain:this.domain,enabled:this.hr,ee:this.ue,h:this._,remote:this.le,te:this.de}),this.device=this.device||tt(this.he?.device||{},!0),"ipad"===this.ce.ur.os&&!0===this.device?.[X("desktop")]&&(this.device[X("desktop")]=!1,this.device[X("tablet")]=!0),this.pr=this.pr||tt(this.he?.pr||{},!0),this.vr=this.vr||tt(this.he?.vr||{},!0),this.source=this.source||"",this.mr=this.mr||"",this._r=this._r||"",this.campaign=this.campaign||"",this.wr=this.cookies.getData("_conv_v","fs"),this.yr=this.cookies.getData("_conv_v","cs"),this.Ir=this.cookies.getData("_conv_v","ps")||0,this.br=parseInt(this.cookies.getData("_conv_v","sc")||"0"),this.kr=parseInt(this.cookies.getData("_conv_v","pv")||"1"),i&&this.kr++,this.Sr=parseInt(this.cookies.getData("_conv_s","pv")||"1"),i&&this.Sr++,this.$r=this.cookies.getData("_conv_s","si"),this.Dr=this.cookies.getData("_conv_s","sh"),this.Dr||(this.Dr=this.Mr(),this.cookies.setData("_conv_s",this.Dr,"sh")),this.Er(e),this.segments=this.Cr(ut(this.cookies.getData("_conv_v","seg")),"seg"),this.Ke=this.Cr(ut(this.cookies.getData("_conv_v","exp")),"exp"),"object"!=typeof this.Ke&&(this.Ke={});for(let t in this.Ke)if(P(this.Ke[t].g)){this.nr[t]||(this.nr[t]={});for(let e in this.Ke[t].g)this.nr[t][e]=!1}this.Or();let{jr:r=[]}=this.oe;if(r.length){let t=[];r.forEach(e=>{this.Ke[e]&&(delete this.Ke[e],t.push(e))})}this.Qs={};for(let t in this.Ke)for(let e in this.Ke[t].g)this.Qs[e]||(this.Qs[e]=1);let{Te:n}=this.he;if(n)this.id=n;else{let t=this.cookies.getData("_conv_v","vi");this.id=t||"1"}if(i){if(this.Ar=!1,!this.$r){this.$r=this.br?this.br+1:1,this.cookies.setData("_conv_s",this.$r,"si"),this.cookies.Fs("_conv_v","sc"),this.br++,this.br>1&&(this.Ir=this.yr,this.cookies.setData("_conv_v",this.Ir,"ps"));let t=new Date;this.yr=Math.round(t.getTime()/1e3),this.cookies.setData("_conv_v",this.yr,"cs"),1===this.br&&!this.wr&&typeof this.wr<"u"&&(this.wr=this.yr,this.cookies.setData("_conv_v",this.wr,"fs"))}this.Lr=1!==this.br}}Rr(){this.kr=parseInt(this.cookies.getData("_conv_v","pv")||"1",10),this.Sr=parseInt(this.cookies.getData("_conv_s","pv")||"1",10)}get id(){return"1"===this.Tr?this.Dr:this.Tr}set id(t){t&&(this.Tr=t,this.cookies.setData("_conv_v",this.Tr,"vi"))}Or(){this.ae?.ri||this.ge.Nr(sessionStorage),this.Ti=this.ge.get("disabled_experiences")||{},P(this.Ti)&&this.ue.S("process_experience_disabled",{Ke:Object.keys(this.Ti),Pr:!1}),this.Ai=this.ge.get("enabled_experiences")||{},P(this.Ai)&&this.ue.S("process_experience_enabled",{Ke:Object.keys(this.Ai),Pr:!1}),this.Ni=this.ge.get("disabled_variations")||{},P(this.Ni)&&Object.keys(this.Ni).forEach(t=>{this.ue.S("process_variation_disabled",{experienceId:t,Oe:this.Ni[t],Pr:!1})}),this.Li=this.ge.get("enabled_variations")||{},P(this.Li)&&Object.keys(this.Li).forEach(t=>{this.ue.S("process_variation_enabled",{experienceId:t,Oe:this.Li[t],Pr:!1})});let{convert_e:t,convert_v:e}=this.ce.url.query,i=this.ge.qr("convert_debug_token"),s=this.ge.qr("convert_config"),r=(i||s)&&t&&e;P(this.Ti)||P(this.Ai)||P(this.Li)||P(this.Ni)||r?(this.ae.Fi=!0,this.ue.S("enable_preview_mode",this.ge.get("conv_qa_setting")||{}),r&&!this.Ni[t]?.[e]&&this.ue.S("enable_variation",{experienceId:t,Oe:e,qi:!1})):this.ae?.ri||this.ge.Nr(localStorage)}Er(t){let e=!!this.source,i=!!this.mr,s=!!this._r,r=!!this.campaign,n=!!(e||i||s||r);if(n)return;if(this.$r){let t=this.cookies.getData("_conv_r","s"),n=this.cookies.getData("_conv_r","m"),o=this.cookies.getData("_conv_r","t"),h=this.cookies.getData("_conv_r","c");t&&(this.source=t,e=!0),n&&(this.mr=n,i=!0),o&&(this._r=o,s=!0),h&&(this.campaign=h,r=!0)}else this.ce.Vr?(this.source=this.ce.Br.object.host,this.mr="organic",this._r=this.ce.Ur,e=!0,i=!0,r=!0,""!=this._r&&(s=!0)):this.ce.zr&&this.ce.Br.object.host!==this.ce.url.object.host&&(this.source=this.ce.Br.object.host,this.mr="referral",this._r="",e=!0,i=!0,s=!0,r=!0);let{gclid:o,utm_source:h,utm_medium:a,utm_campaign:c,utm_term:l}=this.ce.url.query;o?(this.source="google",this.mr="cpc google"):(t=>{let e=[t.source||"",t.Fr||""].filter(Boolean).map(t=>t.toLowerCase());for(let t of e)for(let e of Mt)if(e.test(t))return!0;return!1})({source:this.source,Fr:this.ce.Br.object.host,userAgent:this.ce.userAgent})&&(this.mr="ai tool"),n=!!(e||i||s||r),(!this.$r||!n&&P(this.ae.Xi))&&this.ce.Gr&&(h&&(this.source=h,e=!0),a&&(this.mr=a,i=!0),c&&(this.campaign=c,r=!0),l&&(this._r=l,s=!0)),n=!!(e||i||s||r),n&&(this.cookies.setData("_conv_r",String(this.source).slice(0,64),"s"),this.cookies.setData("_conv_r",String(this.mr).slice(0,64),"m"),this.cookies.setData("_conv_r",String(this._r).slice(0,64),"t"),this.cookies.setData("_conv_r",String(this.campaign).slice(0,64),"c"))}Cr(t,e){let i=it(t);switch(e){case"seg":for(let e in t)this.oe.segments[e]||delete i[e];break;case"exp":for(let e in t)if(this.oe.Ke[e])for(let s in t[e])if(Object.values(L).includes(s)){if("g"===s)for(let r in t[e][s])this.oe.Qs[r]||delete i[e][s][r]}else delete i[e][s];else delete i[e]}return i}static Hr(){return{Ke:{},Js:{},Qs:{}}}Mr(){return`${Date.now()}-${Math.random()}`}Wr({experienceId:t,Jr:e}){this.Ke[t]=e,this.cookies.setData("_conv_v",gt(this.Ke),"exp")}Qr({data:t}){let e=this.Cr(ut(this.cookies.getData("_conv_v","exp")),"exp");"object"!=typeof e&&(e={});let i=t.exp;for(let t in e)i[t]||(i[t]=e[t]);this.cookies.setData("_conv_v",gt(i),"exp"),this.cookies.setData("_conv_v",t.vi,"vi"),this.cookies.save()}ci({experienceId:t,Oe:e}){if(!this.oe.Ke[t]||this.Ti[t]||this.Ni[t]?.[e])return;let i=()=>{try{let i=this.oe.Ke[t].name,s=this.oe.Ke[t].pi[e]?.name,r=String(this.Ke[t]?.v)!==String(e);this.ue.S("experience.activated",{data:{experienceId:String(t),rs:String(t),Oe:String(e),ns:String(e),hs:i,ls:i,ds:s,variation_name:s,Kr:r,Yr:r}})}catch({}){}};if(this.data.Ke[t]={zi:String(this.Ke[t]?.v)!==String(e),T:this.oe.Ke[t].pi[e]},this.data.Ke[t].T.mi.length||this.data.Ke[t].T.mi.push({name:this.data.Ke[t].T.name}),!this.data.Ke[t].zi)return this.Ks.Ke[t]=it(this.data.Ke[t]),void i();"deploy"!==this.oe.Ke[t].type&&(this.Ar=!0),this.Ks.Ke[t]=it(this.data.Ke[t]),i(),this.Ke[t]={v:e,g:{}},this.cookies.setData("_conv_v",gt(this.Ke),"exp"),this.cookies.save()}ei(){return{...this.rr}}Zr({experienceId:t,Oe:e}){this.rr[t]=e}li(){this.rr={}}Xr({experienceId:t,Oe:e}){return this.cookies.zs({[String(t)]:`${e}${this.ae?.tn?"preview":""}`})}en({experienceId:t,Oe:e,sn:i}){if(!t||!e)return;let s=new It(this.ce.url.href).create(bt),r=i!==s?U(s):null;this.cookies.setData("_conv_sptest",`${e}${this.ae?.tn?"preview":""}${r?`+${r}`:""}`,String(t)),(t=>{try{return document.location.hostname===new URL(t).hostname}catch{return!1}})(i)&&(this.ge.set("conv_split_variation",{[t]:{value:e,time:Date.now()+7e3,ii:r}}),setTimeout(()=>this.ge.delete("conv_split_variation"),7e3)),this.cookies.Gs("_conv_s","pv"),this.cookies.Gs("_conv_v","pv"),this.Ke[t]||this.Ri({experienceId:t}),this.cookies.save()}Ri({experienceId:t}){let e=this.Cr(ut(this.cookies.getData("_conv_v","exp")),"exp");"object"!=typeof e&&(e={}),delete e[t],delete this.Ks.Ke[t],delete this.Ks.Js[t],delete this.data.Ke[t],delete this.data.Js[t],this.cookies.setData("_conv_v",gt(e),"exp")}Pi({experienceId:t,Oe:e}){let i=this.Cr(ut(this.cookies.getData("_conv_v","exp")),"exp");"object"!=typeof i&&(i={}),String(i[t]?.v)===String(e)&&delete i[t].v,delete this.Ks.Ke[t],delete this.Ks.Js[t],delete this.data.Ke[t],delete this.data.Js[t],this.cookies.setData("_conv_v",gt(i),"exp")}Is({experienceId:t}){this.Ke[t]={v:"1",g:{}},this.cookies.setData("_conv_v",gt(this.Ke),"exp")}rn({nn:t}){this.segments[t]=1,this.ar.hn(this.id,[t]),this.cookies.setData("_conv_v",gt(this.segments),"seg")}an({nn:t}){return!!this.segments[t]}cn({ln:t,experienceId:e}){if(!this.Ti[e]&&"deploy"!==this.oe.Ke[e]?.type){this.he?.oi?.projectId===this.oe.xi.id&&this.le.log({g:t},{cookies:this.cookies,request:this.ce,from:"userDidGoal",visitor:this});for(let i in this.Ke){let s=e||i,r=this.Ke[s].v;if(this.Ni[s]?.[r])continue;let n=String(e)===String(i);if(this.Ke[s]&&this.oe.Ke[s]&&"deploy"!==this.oe.Ke[s]?.type&&"1"!==this.Ke[s].v){if(this.nr[s]||(this.nr[s]={}),this.Ke[s].g[t])this.nr[s][t]=!1;else{this.Ke[s].g[t]=1,this.Qs[t]||(this.Qs[t]=1),this.nr[s][t]=!0,this.data.Js[s]||(this.data.Js[s]={}),this.data.Js[s][t]||(this.data.Js[s][t]=Date.now()),this.Ks.Js[s]||(this.Ks.Js[s]={}),this.Ks.Js[s][t]=this.data.Js[s][t],this.data.Qs[t]=1,this.Ks.Qs[t]=this.data.Qs[t];try{this.ue.S("goal.triggered",{data:{rs:String(s),ns:String(r),dn:String(t),ls:this.oe.Ke[s].name,variation_name:this.oe.Ke[s].pi[r].name}})}catch({}){}}if(n)break}else if(n)break}this.cookies.setData("_conv_v",gt(this.Ke),"exp")}}},Ct=((lt=Ct||{}).gn="experience_impression",lt),Ot=((ct=Ot||{}).un="gtm.js",ct.fn="gtm.dom",ct.pn="gtm.load",ct.vn="gtm.timer",ct),jt=((at=jt||{}).mn="convert-trigger-experience",at),At={_n:"advanced",wn:"dom_interaction",yn:"scroll_percentage",In:"code_trigger",bn:"revenue",xn:"ga_import",kn:"clicks_link",Sn:"clicks_element",$n:"submits_form",Dn:"visits_page"},Lt=class{constructor(){this.Mn=[]}get clone(){return[].concat(this.Mn)}get size(){return this.Mn.length}get En(){return 0===this.Mn.length}get Cn(){return this.Mn[0]}enqueue(t,e){(-1===this.Mn.findIndex(e=>q(e,t))||e)&&this.Mn.push(t)}On(){return this.Mn.shift()}remove(t){let e=this.Mn.findIndex(e=>q(e,t));if(-1!==e)return this.Mn.splice(e,1)}},Rt=class{constructor({config:t,data:e,state:i,request:s,remote:r,te:n,ee:o,h:h,ie:a,ne:c,segments:l,visitor:d}){this.oe=t,this.he=e,this.ae=i,this.ce=s,this.le=r,this.de=n,this._=h,this.ue=o,this.fe=a,this.me=c,this._e=l,this.we=d,this.jn=new Lt,this.An=!1,this.ye=[],this.Ie=!1,this.Ln=[],this.Rn=[],this.Tn={},this.Nn=!1,this.Pn={},this.qn=[],this.ue.on("convert.com_no_data_found",t=>{let{ln:e}=tt(t);this.ye.push(e)}),this.de.Vn=(...t)=>{let[e]=t;if(P(e))this.Ui(e);else{let[e,i,s,r,n,o,h]=t;this.Ui({ln:e,experienceId:i,Bn:[s,r,n,o,h]})}},this.de.Un=(...t)=>{let[e]=t;if(P(e))this.Ui(e);else{let[e,i,s,r,n,o,h]=t;this.Ui({ln:e,experienceId:i,Bn:[s,r,n,o,h]})}},this.de.zn=(...t)=>{let[e]=t;if(P(e))this.Fn({...e,Gn:"sendRevApi"});else{let[e,i,s,r,n=!1,o,h,a,c,l]=t;this.Fn({ln:r,transactionId:e,amount:i,productsCount:s,Gn:"sendRevApi",Hn:n,Bn:[o,h,a,c,l]})}},this.de.Wn=(...t)=>{let[e]=t;if(P(e))this.Fn({...e,Gn:"sendRevApi"});else{let[e,i,s,r=!1,n,o,h,a,c,l]=t;this.Fn({ln:s,transactionId:n,amount:e,productsCount:i,Gn:"sendRevApi",Hn:r,Bn:[o,h,a,c,l]})}},this.de.Jn=()=>{this.ae.isDisabled||(this.ce.process(),this.process())},this.de.Qn=()=>{this.ae.isDisabled||(this.ce.process(),this.process())}}process({Ne:t=!0}={}){this.jn.enqueue(()=>this.Kn({Ne:t})),this.Yn()}Yn(){this.An||0===this.jn.size||(this.An=!0,this.jn.On()(),this.An=!1,this.jn.size&&setTimeout(()=>this.Yn(),0))}Kn({Ne:t=!0}={}){for(let t in this.oe.Qs)this.Zn({ln:t,Te:this.we.id});this.ye.length?this.ue.S("get_additional_data",{Te:this.we.id,Ne:t}):(this.ue.S("process_goals_complete",{Te:this.we.id,Ne:t}),this.ae?.Xn||(this.ae.Xn={}),this.ae.Xn.Qs=!0),this.eo(),this.io(),this.so()}eo({ro:t}={}){if(!t)try{let t=rt(this.Ln);for(let e of t){let{no:t}=this.oe.Qs[e]?.Ii||{},{href:i}=this.oe.Qs[e]?.Ii||{},{selector:s}=this.oe.Qs[e]?.Ii||{},{action:r}=this.oe.Qs[e]?.Ii||{};if(Array.isArray(t))for(let{selector:i,event:s}of t)this.me.oo({selector:i,event:s,ln:e,ho:()=>this.Ui({ln:e})});else{let t=r?"submit":"click";this.me.oo({selector:s||this.me.ao({action:r,href:i}),event:t,ln:e,ho:()=>this.Ui({ln:e})})}}}catch({}){}}io(){this.me.co({Qs:this.Rn,ho:({ln:t})=>this.Ui({ln:t})})}lo(t="purchase"){try{let e=rt(this.Tn[t]||[]),[i,...s]=e;if(i)return this.we.cn({ln:i}),this.we.cookies.save(),i}catch({}){}}do(t){let e=[];try{for(let i in this.we.Ks.Qs){let s=this.oe.Qs[i];s&&s.type===At.bn&&s?.Ii?.uo===t&&e.push(i)}}catch({}){}return e}fo(t){try{if(this.Tn[t]){let e=rt(this.Tn[t]);return this.Ui({ln:e})}t&&!Object.values(Ct).includes(t)&&!Object.values(Ot).includes(t)&&Object.values(jt).some(e=>String(t).includes(e))}catch({}){}return!1}po(t){let e=!0;if(this.oe.Qs[t]?.Ii?.vo){e=!1;for(let i in this.oe.Ke)if(this.we.Ks.Ke[i]&&this.oe.Ke[i].Qs.includes(t)){e=!0;break}}return e}mo(t){let e=this.oe.Qs[t]?.type;return e===At.wn||e===At.Sn||e===At.kn||e===At.$n||e===At.yn}_o(t){if(!this.oe.Qs[t]?.Ii?.vo)return!1;for(let e in this.oe.Ke){let i=this.oe.Ke[e];if(i?.Qs?.includes(t)&&!this.we.Ks.Ke[e])for(let t of i.Bi||[]){let e=this.oe.Bi[t]?.Ui?.type;if("callback"===e||"dom_element"===e)return!0}}return!1}wo(t){let e=`${t.ln}|${t.experienceId??""}`,i=this.qn.find(t=>`${t.ln}|${t.experienceId??""}`===e);if(i){if(t.Bn?.length){i.Bn=i.Bn??[];for(let e=0;e<t.Bn.length;e++){let s=t.Bn[e];if(!Array.isArray(s)||!s.length)continue;let r=i.Bn[e];i.Bn[e]=Array.isArray(r)?r.concat(s):s}}}else this.qn.push(t)}so(){if(!this.qn.length)return;let t=this.qn.splice(0);for(let e of t)this.Ui(e)}Zn({ln:t}){let e;for(let i in this.we.Ke)if("1"!==this.we.Ke[i].v&&!this.we.Ke[i].g[t]&&this.oe.Ke[i]){e=!0;break}let i,s=this.oe.xi.gr.reduce((t,{lr:e})=>t+e.length,0);if(e||!(s<2)){if(P(this.oe.Qs[t].rules)){if(i=this.fe.process({yo:`Goal #${t}`,rules:this.oe.Qs[t].rules,segments:this._e,visitor:this.we}),Object.values(k).includes(i))return"convert.com_need_more_data"===i&&this.ye.push(t),!1}else i=!0;if(this.mo(t)||this.po(t))switch(this.oe.Qs[t].type){case At.In:break;case At.wn:case At.Sn:case At.kn:case At.$n:case At.yn:i&&Object.values(At).includes(this.oe.Qs[t].type)&&(this.oe.Qs[t].type===At.wn||this.oe.Qs[t].type===At.Sn||this.oe.Qs[t].type===At.kn||this.oe.Qs[t].type===At.$n?this.Ln.push(t):this.oe.Qs[t].type===At.yn&&this.Rn.push(t));break;case At.xn:if(this.oe.Qs[t]?.Ii?.Io){let{Io:e}=this.oe.Qs[t].Ii;this.Tn[e]||(this.Tn[e]=[]),this.Tn[e].push(t)}break;default:i&&(this.oe.Qs[t].type===At.bn&&"manual"===this.oe.Qs[t]?.Ii?.uo||this.we.cn({ln:t}))}}}$i({Te:t,Ne:e=!0}){if(!this.Ie&&this.ye.length){this.Ie=!0;for(let e=0,i=this.ye.length;e<i;e++)this.Zn({ln:this.ye[e],Te:t});this.eo({ro:!0}),this.ye=[],this.ue.S("process_goals_complete",{Te:t,Ne:e}),this.ae?.Xn||(this.ae.Xn={}),this.ae.Xn.Qs=!0}}Ui({ln:t,experienceId:e,Bn:i,Te:s}){if(this.ae.isDisabled||Array.isArray(t)&&!t.length)return!1;let r=Array.isArray(t)?t:[t],n=[];for(let t of r)this.po(t)?n.push(t):this._o(t)&&this.wo({ln:t,experienceId:e,Bn:i,Te:s});if(!n.length)return!1;for(let t of n)this.we.cn({ln:t,experienceId:e});return this.bo({Bn:i})}xo({index:t,ko:e}){return Array.isArray(e)?(e=e.slice(0,0===t?20:5)).filter(t=>"string"==typeof t).map(t=>t.slice(0,32)):null}So({Bn:t}){let e=["customDimension1","customDimension2","customDimension3","customDimension4","customDimension5"],i=[];if(t.length)for(let s=0;s<t.length;s++){let r=this.xo({index:s,ko:t[s]});r&&e[s]&&i.push({key:e[s],value:r})}return i}bo({Bn:t=[]}={}){this.we.cookies.save();let e=!1,i=P(this.we.data.Ke),s=P(this.we.data.Qs);if((i||s)&&(this.we.Ar||s)){let i=[],s=0,r=0;for(let t in this.we.Ke){if(!this.oe.Ke[t]||"deploy"===this.oe.Ke[t].type)continue;let e={experienceId:t,Oe:this.we.Ke[t].v,Qs:[]};if(this.we.Ke[t].g)for(let i in this.we.Ke[t].g)this.we.data.Js?.[t]?.[i]||e.Qs.push(i);this.we.data.Ke?.[t]?.zi?(i.unshift(e),s++):i.push(e)}for(let i in this.we.Qs)if(this.we.data.Qs[i]){r++;let s={ln:String(i),$o:{}},n=this.So({Bn:t});n.length&&(s.Do=n);for(let t in this.we.data.Js)this.we.data.Js[t][i]&&(s.$o[t]=String(this.we.Ke[t].v));P(s.$o)&&(this.le.track({Oi:"conversion",data:s},{visitor:this.we}),e=!0,this.le.log({eData:{k1:"hitGoal",k2:Object.keys(s.$o),k3:Object.values(s.$o),k4:[s.ln],k8:s.Do}},{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRequest"}))}}return this.we.data=Et.Hr(),e}Fn({ln:t,Bn:e=[],transactionId:i,amount:s,productsCount:r,Gn:n,Hn:o}){if(this.ae.isDisabled||t&&!this.oe.Qs[t])return;let h="number"==typeof s?s:F(s);if(o&&(t?this.Pn[t]=!1:this.Nn=!1),this.Pn[t]||this.Nn)return;let a={apr:n,td:this.Nn},c=t=>{try{let e=this.oe.Ke[t]?.Ii?.Mo||this.oe.xi?.Ii?.Mo||0,i=this.oe.Ke[t]?.Ii?.Eo||this.oe.xi?.Ii?.Eo||0;if(h<e||h>i)return this.le.log({...a,oMin:e,oMax:i},{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRevenueOutlier"}),!0}catch({}){}return!1},l=!1,d={},g=!1;for(let t in this.we.Ke)this.oe.Ke[t]&&"deploy"!==this.oe.Ke[t].type&&(c(t)?g=!0:d[t]=String(this.we.Ke[t].v));if(!P(d))return;if(t&&(this.we.cn({ln:t}),1===this.we.data.Qs[t])){let i={ln:String(t),$o:{}},s=this.So({Bn:e});s.length&&(i.Do=s);for(let e in this.we.data.Js)this.we.data.Js[e][t]&&(i.$o[e]=String(this.we.Ke[e].v));P(i.$o)||delete i.$o,this.le.track({Oi:"conversion",data:i},{visitor:this.we}),this.le.log({eData:{k1:"hitGoal",k2:Object.keys(i.$o),k3:Object.values(i.$o),k4:[i.ln],k8:i.Do}},{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRequest"}),this.we.data=Et.Hr()}let u=[];if(t&&this.we.Ks.Qs[t])u.push(t);else for(let t in this.we.Qs)this.we.Ks.Qs[t]&&!u.includes(t)&&u.push(t);if(t&&o&&(u=[t]),0!==u.length){{this.we.cookies.save(),t?this.Pn[t]=!0:this.Nn=!0;let e=[],s=t=>{let s={ln:String(t),Do:[{key:"amount",value:h},{key:"productsCount",value:z(r)?Number(r):0},{key:"transactionId",value:i}],$o:d},n={Oi:"conversion",data:s};e.push(n),this.le.track(n,{visitor:this.we}),l=!0,this.le.log({eData:{k1:"tr",k2:Object.keys(s.$o),k3:Object.values(s.$o),k4:[s.ln],k5:s.Do[0].transactionId,n1:s.Do[0].amount,n2:s.Do[0].productsCount}},{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRequest"})};for(let t of u)s(t)}return l}this.le.log(a,{cookies:this.we.cookies,request:this.ce,visitor:this.we,from:"trackRevenueIgnored"})}},Tt=class{constructor({key:t,Co:e,enabled:i=!0}={}){this.he={},!(typeof localStorage>"u")&&(this.Oo=t||"convert.com",this.jo=e||localStorage,this.Ao=i)}getData(){return JSON.parse(this.jo.getItem(this.Oo)||"{}")}Nr(t){this.jo=t}setEnabled(t){this.Ao=t}qr(t){return this.jo.getItem(t)}get(t){let e=this.getData();return t?e[t]||this.he[t]:e}set(t,e){if(this.Ao)if(t&&e){let i=this.getData();i[t]=e,this.jo.setItem(this.Oo,JSON.stringify(i))}else P(this.he)&&this.jo.setItem(this.Oo,JSON.stringify(this.he));else t&&e&&(this.he[t]=e)}delete(t){delete this.he[t];let e=this.getData();if(e[t]){if(delete e[t],!this.Ao)return;P(e)?this.jo.setItem(this.Oo,JSON.stringify(e)):this.jo.removeItem(this.Oo)}}destroy(){this.he={},this.jo.removeItem(this.Oo)}},Nt=class{constructor({config:t,data:e,state:i,h:s}){this.oe=t,this.he=e,this.ae=i,this._=s,this.Lo=new AbortController;try{if(this.Ro=window===window?.parent,window?._conv_editor)return;window.addEventListener("message",this.onMessage.bind(this),{signal:this.Lo.signal}),window?.parent?.postMessage?.(JSON.stringify({type:"helloWebsite",msg:{}}),"*")}catch({stack:t,message:e}){typeof console<"u"&&console.error&&console.error("Convert:",t||e)}}To(){this.Lo.abort()}onMessage({origin:t,data:e}){try{if("string"==typeof e&&e.startsWith("!_{"))return;if(this.No&&Date.now(),/^https{0,1}:\/\/.*?\.convert\.com(:[0-9]+){0,1}$/.test(t)){let{type:t,msg:i}=P(e)?e:JSON.parse(e||"{}"),{env:s=null,experienceId:r=null,version:n=null}=i||{};switch(t){case"ackEdFilesLoad":this.Po({ss:s,version:n});break;case"ackEdFilesLoadV2":this.qo({ss:s});break;case"loadVisualEditor":if(!r||!this.Ro)return;{let t=new Tt({key:"convertLoadVisualEditor",Co:sessionStorage});for(let e in i)t.set(e,i[e]);t.set("accountId",this.oe.Vo),t.set("projectId",this.oe.xi.id)}this.qo({ss:s,force:!0})}}else this.No||(this.No=Date.now())}catch({}){}}Po({ss:t,version:e}={ss:"app",version:Math.random()}){if(!this.Ro)try{vt({url:"//editor.[env].convert.com/sys/[version]/js/neweditor/bundle-editor-iframe.js".replace("[env]",t).replace("[version]",String(e)),attributes:{nonce:this.ae?.Bo,"data-cfasync":"false",async:"true"}})}catch({}){}}qo({ss:t,force:e=!1}){if(!this.Ro||e)try{vt({url:"https://[env].convert.com/static/_editor_frame_files/bundle.js".replace("[env]",t),attributes:{nonce:this.ae?.Bo,"data-cfasync":"false",async:"true"}})}catch({}){}}},Pt=class{constructor(t=console,e=0,i){this.Uo={log:"log",debug:"debug",info:"info",warn:"warn",error:"error",trace:"trace"},this.zo=[],this.Fo(t,e,i)}Go(t){return Object.values(b).includes(t)}Ho(t){return Object.values(x).includes(t)}Wo(t,e,...i){this.zo.forEach(s=>{if(e>=s.level&&5!==e){let e=s.Co[s.k[t]];e?e.call(s.Co,...i):(console.log(`Info: Unable to find method "${t}()" in client sdk:`,s.Co?.constructor?.name),console[t](...i))}})}log(t,...e){this.Go(t)?this.Wo("log",t,...e):console.error("Invalid Log Level")}trace(...t){this.Wo("trace",0,...t)}debug(...t){this.Wo("debug",1,...t)}info(...t){this.Wo("info",2,...t)}warn(...t){this.Wo("warn",3,...t)}error(...t){this.Wo("error",4,...t)}Fo(t=console,e=0,i){if(!t)return void console.error("Invalid Client SDK");if(!this.Go(e))return void console.error("Invalid Log Level");let s={...this.Uo};i&&Object.keys(i).filter(this.Ho).forEach(t=>{s[t]=i[t]}),this.zo.push({Co:t,level:e,k:s})}Jo(t,e){if(this.Go(t))if(e){let i=this.zo.findIndex(({Co:t})=>t===e);if(-1===i)return void console.error("Client SDK not found");this.zo[i].level=t}else for(let e=0,i=this.zo.length;e<i;e++)this.zo[e].level=t;else console.error("Invalid Log Level")}},qt=class{constructor({config:t,state:e,Qo:i,h:s}={}){this.oe=t||{},this.ae=e||{},i&&(this.Ko=i),s&&(this._=s),this.Yo=[],this.Zo=[];let{domain:r,version:n="v0"}=this.ae?.Xo||{};this.th=r&&"v0"!==n?`https://${r}/metrics/v1/log`:"https://logs.convertexperiments.com/v1/log",window.convert[X("sendLog",!0)]=(t,e)=>this.log(t,{from:e})}eh(t){this._e=t}log(t,{from:e,cookies:i,request:s,visitor:r}){if(this.ae?.isDisabled||this.ae?.ri)return;if(!(r&&r.cookies.enabled||i&&i.enabled||!r&&!i)||!this.ae?.ih)return void this.Zo.push(t);let n=this.ae?this._e.rh():{};if("cookieSave"===e&&"SF"!==n.browser)return;let o=tt(it(t),!0);if(o.tmsp=Date.now(),o.from=e,o.s="v1",o.runHash=this.ae?.runHash,o.cid=this.oe?.Vo,o.pid=this.oe?.xi?.id,o[X("seg",!0)]=n,r&&(o.vData=this.nh(r.Ke),o.vid=r.id,r.Dr&&(o.sh=r.Dr),this.ae?.oh&&1===r.br&&(o.plgn=this.ae.oh)),i&&(o.vcookie=i.get("_conv_v"),o.scookie=i.get("_conv_s")),s){o.dl=s.url.href,o.dr=s.Br.href,o.ua=s.userAgent;for(let t in s.hh)s.hh[t]&&(o[`t_${t}`]=s.hh[t])}this.Ko?this.Yo.push(o):this.sendBeacon(this.th,o),10===this.Yo.length?this.ah("size"):1===this.Yo.length&&this.dh()}track(t,{visitor:e}){this.ae?.ri||this.Ko.enqueue(e.id,t,this._e.rh())}ah(t){this.Yo.length&&(this.gh(),this.sendBeacon(this.th,this.Yo.slice()),this.Yo=[])}gh(){clearTimeout(this.uh)}dh(){this.uh=setTimeout(()=>{this.ah("timeout")},500)}nh(t){return Object.fromEntries(Object.entries(t).map(([t,e],i)=>[`exp${i+1}`,{i:t,v:e.v,g:Object.keys(e.g)}]))}sendBeacon(t,e){navigator.sendBeacon(t,JSON.stringify(it(e)))||this.fh(t,{...e,error:1})}fh(t,e){let i=document.createElement("img");i.width=1,i.height=1;try{i.src=`${t}?plain=${encodeURIComponent(JSON.stringify(e))}`}catch(s){i.src=`${t}?plain=${encodeURIComponent(`{"senderror":"${e?.from||""}-${s}"}`)}`}}},Vt=class{constructor({config:t,data:e,state:i,request:s,remote:r,te:n,ee:o,Xs:h,h:a,ie:c,visitor:l}){this.oe=t,this.he=e,this.ae=i,this.ce=s,this.le=r,this.de=n,this._=a,this.ue=o,this.ar=h,this.fe=c,this.we=l,this.ph={},this.ye=[],this.Ie=!1,this.be=[],this.xe={},this.$e=2400,this.ue.on("convert.com_no_data_found",t=>{let{nn:e}=tt(t);this.ye.push(e)}),this.ue.on("convert.com_need_more_data",t=>{let{nn:e}=tt(t);this.be.push(e)}),this.de.mh=(...t)=>{let[e]=t;if(P(e))this.mh(e);else{let[e,i]=t;this.mh({nn:e,Te:i})}},this.de._h=(...t)=>{let[e]=t;if(P(e))this.wh(e);else{let[e]=t;this.wh({Te:e})}},this.de.yh=(...t)=>{let[e]=t;if(P(e))this.yh(e);else{let[e,i]=t;this.yh({nn:e,Te:i})}},window.convert[X("getDefaultSegments",!0)]=()=>Z(this.Ih()),window.convert[X("getVisitorSegments",!0)]=()=>Z(this.rh())}Ih(){if(!this.ae.isDisabled){try{this.bh(),this.xh(),this.kh(),this.Sh(),this.$h(),this.Dh(),this.Mh()}catch({}){}return this.ph}}rh(){if(this.ae.isDisabled)return;let t=P(this.ph)?this.ph:this.Ih();t.customSegments=[];for(let e in this.we.segments)t.customSegments.push(e);return t}process(){for(let t in this.oe.segments)this.Eh({nn:t,Te:this.we.id});this.ue.S(this.ye.length?"get_additional_data":"snippet.segments_evaluated",{Te:this.we.id})}Ch({Te:t}){if(!this.Ie&&this.ye.length){this.Ie=!0;for(let e=0,i=this.ye.length;e<i;e++)if(this.Eh({nn:this.ye[e],Te:t}),this.ae?.Xe)throw this.ue.S("save_referrer",{}),A;this.ye=[],this.ue.S("snippet.segments_evaluated",{Te:t})}}Eh({nn:t}){if(this.we.an({nn:t})||!this.oe.segments[t])return;let e=this.fe.process({yo:`Segments #${t}`,rules:this.oe.segments[t].rules,segments:this,visitor:this.we});if(Object.values(k).includes(e))return"convert.com_need_more_data"===e?this.ye.push(t):"convert.com_no_data_found"===e&&this.be.push(t),!1;e&&(this.we.rn({nn:t}),this.we.cookies.save()),this.ar.Oh(this.we.id,this.rh())}mh({nn:t}){this.ae.isDisabled||this.oe.segments[t]&&(this.we.rn({nn:t}),this.we.cookies.save(),this.ar.Oh(this.we.id,this.rh()))}wh({Te:t}){if(this.ae.isDisabled)return;let e=[];for(let t=0,i=this.be.length;t<i;t++)e.push(this.be[t]);this.be=[];for(let i=0,s=e.length;i<s;i++)this.Eh({nn:e[i],Te:t});this.ue.S("snippet.segments_evaluated")}yh({nn:t,Te:e}){this.ae.isDisabled||(this.xe[t]||(this.xe[t]=0),this.xe[t]<this.$e?(this.xe[t]++,setTimeout(()=>{this.Eh({nn:t,Te:e})},50)):this.xe[t]=0)}bh(){switch(this.ce.ur.browser){case"EDG":this.ph.browser="EDG";break;case"IE":this.ph.browser="IE";break;case"CH":this.ph.browser="CH";break;case"FF":this.ph.browser="FF";break;case"OP":this.ph.browser="OP";break;case"SF":this.ph.browser="SF";break;default:this.ph.browser="OTH"}}xh(){this.ph.devices=[],this.we.device?.[X("mobile")]&&!this.we.device?.[X("tablet")]&&this.ph.devices.push("ALLPH"),this.we.device?.[X("mobile")]&&/iPhone/.test(navigator.userAgent)&&!window.MSStream&&this.ph.devices.push("IPH"),this.we.device?.[X("mobile")]&&!this.we.device?.[X("tablet")]&&!(/iPhone/.test(navigator.userAgent)&&!window.MSStream)&&this.ph.devices.push("OTHPH"),this.we.device?.[X("tablet")]&&this.ph.devices.push("ALLTAB"),this.we.device?.[X("tablet")]&&"ipad"===this.ce.ur.os&&this.ph.devices.push("IPAD"),this.we.device?.[X("tablet")]&&"ipad"!==this.ce.ur.os&&this.ph.devices.push("OTHTAB"),this.we.device?.[X("desktop")]&&this.ph.devices.push("DESK"),!this.we.device?.[X("desktop")]&&!this.we.device?.[X("mobile")]&&!this.we.device?.[X("tablet")]&&this.ph.devices.push("OTHDEV")}kh(){this.ph.source="cpc google"==this.we.mr||""!==this.we.campaign?"campaign":"organic"==this.we.mr?"search":"referral"==this.we.mr?"referral":"ai tool"==this.we.mr?"ai_tool":"direct"}Sh(){this.ph.campaign=this.we.campaign}Dh(){this.ph.visitorType=this.we.Lr?"returning":"new"}Mh(){this.ph.country=this.we.pr?.[X("country")]}$h(){}},Bt=[{string:navigator?.userAgent,jh:"Trident/",identity:"IE",Ah:"rv",Lh:"Internet Explorer"},{string:navigator?.userAgent,jh:"Edge/",identity:"EDG",Ah:"Edge",Lh:"Microsoft Edge"},{string:navigator.userAgent,jh:"Edg/",identity:"EDG",Ah:"Edg",Lh:"Microsoft Edge"},{string:navigator.userAgent,jh:"EdgiOS/",identity:"EDG",Ah:"EdgiOS",Lh:"Microsoft Edge"},{string:navigator.userAgent,jh:"EdgA/",identity:"EDG",Ah:"EdgA",Lh:"Microsoft Edge"},{string:navigator?.userAgent,jh:"Chrome",identity:"CH",Lh:"Google Chrome",Ah:"Chrome"},{string:navigator?.userAgent,jh:"OmniWeb",Ah:"OmniWeb/",identity:"OW",Lh:"OmniWeb"},{string:navigator?.userAgent,jh:"CriOS",Ah:"CriOS/",identity:"CH",Lh:"Chrome"},{string:navigator?.vendor,jh:"Apple",identity:"SF",Ah:"Version/",Lh:"Safari"},{prop:window?.opera,identity:"OP",Ah:"Version",Lh:"Opera"},{string:navigator?.vendor,jh:"iCab",identity:"IB",Ah:"iCab",Lh:"iCab"},{string:navigator?.vendor,jh:"KDE",identity:"KO",Ah:"Konqueror",Lh:"Konqueror"},{string:navigator?.userAgent,jh:"Firefox",identity:"FF",Lh:"Firefox",Ah:"Firefox"},{string:navigator?.vendor,jh:"Camino",identity:"CO",Ah:"Camino",Lh:"Camino"},{string:navigator?.userAgent,jh:"Netscape",identity:"NS",Ah:"Netscape",Lh:"Netscape"},{string:navigator?.userAgent,jh:"MSIE",identity:"IE",Ah:"MSIE",Lh:"Internet Explorer"},{string:navigator?.userAgent,jh:"Gecko",identity:"MO",Ah:"rv",Lh:"Gecko Browsers"},{string:navigator?.userAgent,jh:"Mozilla",identity:"NS",Ah:"Mozilla",Lh:"Netscape"}],Ut=[{string:navigator?.userAgent,jh:"Android",identity:"ra",Lh:"Android"},{string:navigator?.platform,jh:"Win",identity:"WIN",Lh:"Microsoft Windows"},{string:navigator?.userAgent,jh:"iPhone",identity:"IPH",Lh:"IPhone"},{string:navigator?.userAgent,jh:"iPad",identity:"IPA",Lh:"IPad"},{string:navigator?.userAgent,jh:"iPod",identity:"IPO",Lh:"IPod"},{string:navigator?.platform,jh:"Mac",identity:"MAC",Lh:"MacOS"},{string:navigator?.platform,jh:"Linux",identity:"LIN",Lh:"Linux OS"}],zt=class{getInfo(){let{name:t,browser:e,version:i,os:s}=this.detect(),{screen:{width:r,height:n}}=window,o={name:t,browser:e,version:i,os:s,Rh:r,Th:n};return typeof navigator<"u"&&(o.lang=navigator?.language??navigator?.userLanguage,"string"==typeof o.lang&&(o.lang=o.lang.split("-")[0])),o}detect(){let t=this.Nh(Bt)||"An unknown browser",e=this.Ph(t),i=this.qh(navigator?.appVersion)||this.qh(navigator?.userAgent)||"an unknown version",s=this.Vh(this.Nh(Ut));return"macos"===s&&navigator.maxTouchPoints>0&&(s="ipad"),{name:e,browser:t,version:i,os:s}}Ph(t){switch(t){case"EDG":return"microsoft_edge";case"IE":return"microsoft_ie";case"CH":return"chrome";case"FF":return"firefox";case"OP":return"opera";case"SF":return"safari";case"MO":case"NS":return"mozilla";default:return"other"}}Vh(t){switch(t){case"WIN":return"windows";case"MAC":return"macos";case"ra":return"android";case"IPH":return"iphone";case"IPA":return"ipad";case"IPO":return"ipod";case"LIN":return"linux";default:return"other"}}Nh(t){for(let e=0;e<t.length;e++){let i=t[e].string,s=t[e].prop;if(this.Bh=t[e].Ah||t[e].identity,i){if(-1!=i.indexOf(t[e].jh))return t[e].identity}else if(s)return t[e].identity}}qh(t){try{if(!t)return;let e=t.indexOf(this.Bh);if(-1==e)return;let i=parseFloat(t.substring(e+this.Bh.length+1)).toString();return-1==i.indexOf(".")&&(i+=".0"),i}catch({stack:t,message:e}){typeof console<"u"&&console.error&&console.error("Convert:",t||e)}}},Ft=class{process({Uh:t}={}){this.mr="",this.zh=document?.referrer??"",this.zr=!!this.zh,this.ur=(new zt).getInfo(),this.url=new It(null,t),this.requestTime=Math.round(Date.now()/1e3),this.Gr=!!(this.url.query?.utm_source||this.url.query?.utm_medium||this.url.query?.utm_campaign||this.url.query?.utm_term),this.Br=new It(this.zh),this.userAgent=navigator?.userAgent;for(let t=0,e=C.length;t<e;t++)if(-1!==this.zh.indexOf(C[t]?.s)){this.Vr=!0,this.Br.query[C[t]?.q]&&(this.Ur=this.Br.query[C[t]?.q]);break}this.Vr&&(this.mr="organic"),this.hh={v0:this.Fh(xt.v0),v1:this.Fh(xt.v1),v2:this.Fh(xt.v2),v3:this.Fh(xt.v3),v4:this.Fh(xt.v4),v41:this.Fh(xt.v41),v5:this.Fh(xt.v5),cv1:this.Fh(xt.cv1),cv2:this.Fh(xt.cv2),cv3:this.Fh(xt.cv3),cv4:this.Fh(xt.cv4)}}Gh(t){let e=this.Fh(xt[t]);return this.hh[t]=e,e}Fh(t=[]){let e;for(let i=t.length-1;i>=0;i--)if(typeof window[t[i]]<"u"){e=window[t[i]];break}return e}},Gt=!0,Ht=class{constructor(t,{h:e}={}){this.Hh=H,this.Wh="!",this.Jh=Gt,this._=e,this.Hh=t?.rules?.Qh||H,this.Wh=String(t?.rules?.Kh||"!"),this.Jh=t?.rules?.Yh||Gt,this.I=t?.k||(t=>t)}set Qh(t){this.Hh=t}get Qh(){return this.Hh}Zh(){return Object.getOwnPropertyNames(this.Hh).filter(t=>"function"==typeof this.Hh[t])}Xh(t,e,i){let s;if(Object.prototype.hasOwnProperty.call(e,"ta")&&R(e?.ta)){for(let i=0,r=e.ta.length;i<r;i++){if(s=this.ea(t,e.ta[i]),!0===s)return s;Object.values(k).includes(s)}if(!1!==s)return s}return!1}ia(t){if(!(Object.prototype.hasOwnProperty.call(t,"Jt")&&"object"==typeof t.Jt&&Object.prototype.hasOwnProperty.call(t.Jt,"Wt")&&"string"==typeof t.Jt.Wt&&Object.prototype.hasOwnProperty.call(t.Jt,"sa")&&"boolean"==typeof t.Jt.sa))return!1;let e=t.Jt.Wt;return"exists"===e||"doesNotExist"===e||Object.prototype.hasOwnProperty.call(t,"value")}ea(t,e){let i;if(Object.prototype.hasOwnProperty.call(e,"ra")&&R(e?.ra)){for(let s=0,r=e.ra.length;s<r;s++)if(i=this.na(t,e.ra[s]),!0!==i)return i;return!0}return!1}na(t,e){let i;if(Object.prototype.hasOwnProperty.call(e,"oa")&&R(e?.oa)){for(let s=0,r=e.oa.length;s<r;s++)if(i=this.ha(t,e.oa[s]),!0===i)return i;if(!1!==i)return i}return!1}ha(t,e){if(this.ia(e))try{let i=e.Jt.sa||!1,s=e.Jt.Wt;if(-1!==this.Zh().indexOf(s)&&t&&"object"==typeof t){if(this.aa(t)){if(e?.ca)for(let r of Object.getOwnPropertyNames(t.constructor.prototype)){if("constructor"===r)continue;let n=B(`get ${e.ca.replace(/_/g," ")}`);if(r===n||t?.k?.(r)===n){let n=t[r](e);return Object.values(k).includes(n)||"js_condition"===e.ca?n:this.Hh[s](n,e.value,i)}}}else if(P(t))for(let r of Object.keys(t))if((this.Jh?r:r.toLowerCase())===(this.Jh?e.key:String(e.key).toLowerCase()))return this.Hh[s](t[r],e.value,i);if("exists"===s||"doesNotExist"===s)return this.Hh[s](void 0,e.value,i);!P(t)&&this.aa(t)}}catch{}return!1}aa(t){return P(t)&&Object.prototype.hasOwnProperty.call(t,"name")&&"RuleData"===t.name}},Wt="convert";function Jt(){return new Promise((t,e)=>{try{let i=indexedDB.open(Wt,1);i.onupgradeneeded=t=>{let e=t.target.result;e.objectStoreNames.contains("config")||e.createObjectStore("config",{keyPath:"id",autoIncrement:!0}),e.objectStoreNames.contains("signals")||e.createObjectStore("signals",{keyPath:"id",autoIncrement:!0})},i.onsuccess=e=>t(e.target.result),i.onerror=t=>e(t.target.error)}catch(t){e(t)}})}var Qt=({key:t,data:e,store:i="signals"})=>Jt().then(s=>new Promise((r,n)=>{try{let o=s.transaction([i],"readwrite").objectStore(i).add(t?{...e,id:t}:e);o.onsuccess=()=>r(o.result),o.onerror=t=>n(t.target.error)}catch(t){n(t)}})),Kt=({key:t,store:e="signals"}={})=>Jt().then(i=>new Promise((s,r)=>{try{let n=i.transaction([e],"readonly").objectStore(e),o=t?n.get(t):n.getAll();o.onsuccess=t=>s(t.target.result),o.onerror=t=>r(t.target.error)}catch(t){r(t)}})),Yt=({key:t,data:e,store:i="signals"})=>Jt().then(s=>new Promise((r,n)=>{try{let o=s.transaction([i],"readwrite").objectStore(i).put({...e,id:t});o.onsuccess=t=>r(t.target.result),o.onerror=t=>n(t.target.error)}catch(t){n(t)}})),Zt=class{constructor({config:t,data:e,request:i,segments:s,visitor:r,experienceId:n,locationId:o,ee:h,h:a}){this.name="RuleData",this.oe=t,this.he=e,this.ce=i,this._e=s,this.we=r,this.ue=h,this._=a,this.la=n,this.da=o,this.fa=new Date,this.pa=this.fa.getDay(),0===this.pa&&(this.pa=7);let c=this.fa.getTime()+6e4*this.fa.getTimezoneOffset()+1e3*t.xi.va;(t=>{let e=new Date,i=new Date(e.getFullYear(),0,1),s=new Date(e.getFullYear(),6,1),r=Math.max(i.getTimezoneOffset(),s.getTimezoneOffset());return t.getTimezoneOffset()<r})(this.fa)&&(c+=36e5),this.ma=new Date(c),this._a=this.ma.getDay(),0===this._a&&(this._a=7),this.k=t=>X(t,!0)}wa(t){let e=t?.Jt?.Wt;return"exists"===e||"doesNotExist"===e}get(){return this._e.rh()}ya(t){let e=Y(this.ce.url.href,t,!1);return new It(e).Zt()}Ia(t){return Y(this.ce.url.href,t,!0)}ba(t){return this.ce.url.object.query}xa(t){B(`get ${t.replace(/_/g," ")}`)}ka(t){let e=this.ce.Gh("v0");return typeof e>"u"?(this.xa("page_tag_page_type"),"convert.com_no_data_found"):e}Sa(t){let e=this.ce.Gh("v1");return typeof e>"u"?(this.xa("page_tag_category_id"),"convert.com_no_data_found"):e}$a(t){let e=this.ce.Gh("v2");return typeof e>"u"?(this.xa("page_tag_category_name"),"convert.com_no_data_found"):e}Da(t){let e=this.ce.Gh("v3");return typeof e>"u"?(this.xa("page_tag_product_sku"),"convert.com_no_data_found"):e}Ma(t){let e=this.ce.Gh("v4");return typeof e>"u"?(this.xa("page_tag_product_name"),"convert.com_no_data_found"):e}Ea(t){let e=this.ce.Gh("v41");return typeof e>"u"?(this.xa("page_tag_product_price"),"convert.com_no_data_found"):e}Ca(t){let e=this.ce.Gh("v5");return typeof e>"u"?(this.xa("page_tag_customer_id"),"convert.com_no_data_found"):e}Oa(t){let e=this.ce.Gh("cv1");return typeof e>"u"?(this.xa("page_tag_custom_1"),"convert.com_no_data_found"):e}ja(t){let e=this.ce.Gh("cv2");return typeof e>"u"?(this.xa("page_tag_custom_2"),"convert.com_no_data_found"):e}Aa(t){let e=this.ce.Gh("cv3");return typeof e>"u"?(this.xa("page_tag_custom_3"),"convert.com_no_data_found"):e}La(t){let e=this.ce.Gh("cv4");return typeof e>"u"?(this.xa("page_tag_custom_4"),"convert.com_no_data_found"):e}Ra(t){let e=this.we.vr?.[X("current")]?.[X("condition")]?.[X("text")];return e||"convert.com_need_more_data"}Ta(t){let e;try{let i=t?.value,convertContext={experienceId:this.la,locationId:this.da};switch(typeof i){case"string":i=this.la||this.da?i.replace(/convert_recheck_(experiment|experience)[\s]*\([\s]*\)/g,`convert.executeExperienceLooped(${this.la?`{experienceId: '${this.la}'}`:`{locationId: '${this.da}'}`})`).replace(/convert_trigger_(experiment|experience)[\s]*\([\s]*\)/g,`convert.executeExperience(${this.la?`{experienceId: '${this.la}'}`:`{locationId: '${this.da}'}`})`):i.replace(/convert_recheck_(experiment|experience)[\s]*\([\s]*\).*[;]?/g,"").replace(/convert_trigger_(experiment|experience)[\s]*\([\s]*\).*[;]?/g,""),e=Function(`return ${i}`)(),"function"==typeof e&&(e=e(convertContext));break;case"function":e=i(convertContext)}}catch({stack:i,message:s}){if(e=!1,this.he?.Na){let e={data:{type:0,experienceId:this.la,locationId:this.da,code:String(t?.value),stack:i,message:s}};Qt(e),this.ue.S("signal.detected",e)}}return e}Pa(t){return this.we.device?.[X("desktop")]}qa(t){return this.we.device?.[X("mobile")]}Va(t){return this.we.device?.[X("tablet")]}Ba(t){return this.ce.userAgent}Ua(t){return this.ce.ur.os}za(t){return this.ce.ur.version}Fa(t){return this.ce.ur.name}Ga(t){return this.ma.getMinutes()}Ha(t){return this.ma.getHours()}Wa(t){return this._a}Ja(t){return this.fa.getMinutes()}Qa(t){return this.fa.getHours()}Ka(t){return this.pa}Za(t){return this.we.segments}Xa(t){let e=!1;for(let t in this.we.Ke)if(this.we.Ke[t]&&"1"!==this.we.Ke[t].v&&"deploy"!==this.oe.Ke[t]?.type&&t!==this.la&&this.oe.Ke[t]){e=!0;break}return e}tc(t){return this.we.br}ec(t){return this.we.Lr?"returning":"new"}rc(t){let e=t?.value,i=String(e).trim().toLowerCase();return(""===i||"0"===i)&&(e=!1),["true","false"].includes(i)&&(e="true"===i),"boolean"==typeof e?this.we.tr:this.we.id}nc(t){return this.we.gi}oc(t){return this.we.cookies.get(t.key)}hc(t){return Math.round((new Date).getTime()/1e3)-this.we.yr}ac(t){return this.we.Qs}cc(t){return this.we.kr}lc(t){return this.ce.ur.lang}dc(t){return this.we.Ir?(this.ce.requestTime-this.we.Ir)/86400:0}gc(t){return"string"==typeof this.we.pr?.[X("state")]?this.we.pr?.[X("state")]:"convert.com_need_more_data"}uc(t){return"string"==typeof this.we.pr?.[X("country")]?this.we.pr?.[X("country")]:"convert.com_need_more_data"}fc(t){return"string"==typeof this.we.pr?.[X("city")]?this.we.pr?.[X("city")]:"convert.com_need_more_data"}vc(t){return Math.round((this.ce.requestTime-this.we.wr)/this.we.kr)}mc(t){return this.we.source}_c(t){return this.we.mr}wc(t){return this.we._r}yc(t){return this.we.campaign}},Xt=class{constructor({config:t,data:e,request:i,Ic:s,ee:r,h:n}){this.oe=t,this.he=e,this.ce=i,this.bc=s,this.ue=r,this._=n}getData({segments:t,visitor:e,experienceId:i,locationId:s}){return new Zt({config:this.oe,data:this.he,request:this.ce,segments:t,visitor:e,experienceId:i,locationId:s,ee:this.ue,h:this._})}process({rules:t,segments:e,visitor:i,experienceId:s,locationId:r,yo:n}){if(!t)return!1;let o=this.getData({segments:e,visitor:i,experienceId:s,locationId:r}),h=Array.isArray(t)?t:[t];for(let t of h){let e=this.bc.Xh(o,t,n);if(!1!==e)return e}return!1}},te=class{constructor(t,{h:e}={}){this.xc=1e4,this.kc=9999,this._=e,this.xc=t?.Ci?.Sc||1e4,this.kc=t?.Ci?.$c||9999}Dc(t,e,i=0){let s=null,r=0;return Object.keys(t).some(n=>(r+=100*t[n]+i,e<r&&(s=n,!0))),s||null}Mc(t,e){let{seed:i=this.kc,experienceId:s=""}=e||{},r=U(s+String(t),i)/4294967296*this.xc;return parseInt(String(r),10)}Ec(t,e,i){let s=this.Mc(e,i),r=this.Dc(t,s,i?.Cc);return r?{Oe:r,Mi:s}:null}},ee={"Content-Type":"application/json"},ie="https://cdn-4.convertexperiments.com/api/v1/config-js",se="https://[project_id].metrics.convertexperiments.com/v1",re=class{constructor(t,{ee:e,h:i}={}){this.Oc=ie,this.jc=se,this.Ac=ee,this.Lc=10,this.Rc=1e4,this._=i,this.ue=e,this.Oc=t?.Tc?.endpoint?.config||ie,this.jc=t?.Tc?.endpoint?.track||se,this.he=T(t,"data"),this.Nc=!T(t,"dataStore"),this.Pc=t?.ss,this.I=t?.k||(t=>t),this.Lc=Number(t?.events?.qc)||10,this.Rc=Number(t?.events?.Vc)||1e4,this.Bc=this.he?.Vo,this.Uc=this.he?.xi?.id,this.zc=t?.Fc||`${this.Bc}/${this.Uc}`,t?.Gc&&(this.Ac.Hc=`Bearer ${t?.Gc}`),this.Wc={Jc:this.Nc,accountId:this.Bc,projectId:this.Uc,Qc:[]},this.Kc=t?.Zc?.Yc,this.Xc=t?.Zc?.source||"js-sdk",this.el=t?.Zc?.il,this.Yo={length:0,items:[],push(t,e,i){let s=this.items.findIndex(e=>e.Te===t);if(-1!==s)this.items[s].events.push(e);else{let s={Te:t,events:[e]};i&&(s.segments=i),this.items.push(s)}this.length++},reset(){this.items=[],this.length=0}}}async request(t,e,i={},s={}){let r={...this.Ac,...s};return K.request({method:t,path:e.sl,Ut:e.rl,headers:r,data:i,responseType:"json"})}enqueue(t,e,i){this.Yo.push(t,e,i),this.Kc&&(1===this.Yo.length?this.dh():this.Yo.length===this.Lc&&this.ah("size").then())}ah(t){if(!this.Yo.length)return;this.gh();let e=this.Wc;return e.Qc=this.Yo.items.slice(),e.source=this.Xc,this.request("post",{rl:this.jc.replace("[project_id]",this.Uc.toString()),sl:`/track/${this.zc}`},this.I(e)).then(i=>{this.Yo.reset(),this.ue?.S?.("api.queue.released",{reason:t,result:i,Qc:e.Qc})}).catch(e=>{this.dh(),this.ue?.S?.("api.queue.released",{reason:t},e)})}gh(){clearTimeout(this.uh)}dh(){this.uh=setTimeout(()=>{this.ah("timeout")},this.Rc)}ts(){this.Kc=!0,this.ah("trackingEnabled")}nl(){this.Kc=!1}setData(t){this.he=t,this.Bc=t?.Vo,this.Uc=t?.xi?.id,this.Wc.accountId=this.Bc,this.Wc.projectId=this.Uc}ol(){let t="low"===this.el||this.Pc?"?":"";return this.Pc&&(t+=`environment=${this.Pc}`),"low"===this.el&&(t+="_conv_low_cache=1"),new Promise((e,i)=>{this.request("get",{rl:this.Oc,sl:`/config/${this.zc}${t}`}).then(({data:t})=>e(t)).catch(i)})}},ne=class{constructor(t,{Xt:e,ee:i,h:s}={}){this.Lc=1,this.Rc=5e3,this._=s,this.ue=i,this.Lc=Number(t?.events?.qc)||1,this.Rc=Number(t?.events?.Vc)||5e3,this.Xt=e,this.I=t?.k||(t=>t),this.Yo={}}set(t,e){try{this.Xt?.set?.(t,e)}catch{}}get(t){try{return this.Xt?.get?.(t)}catch{}return null}enqueue(t,e){let i={};i[t]=e,this.Yo=N(this.Yo,i),Object.keys(this.Yo).length>=this.Lc?this.ah("size"):1===Object.keys(this.Yo).length&&this.dh()}ah(t){this.gh();for(let t in this.Yo)this.set(t,this.Yo[t]);this.ue?.S?.("datastore.queue.released",{reason:t||""})}gh(){clearTimeout(this.uh)}dh(){this.uh=setTimeout(()=>{this.ah("timeout")},this.Rc)}set Xt(t){t&&this.hl(t)&&(this.ge=t)}get Xt(){return this.ge}hl(t){return"object"==typeof t&&"function"==typeof t.get&&"function"==typeof t.set}},oe=class{constructor(t,{al:e,Ic:i,ee:s,Qo:r,h:n},{cl:o=!0}={}){this.ll=w,this.gl=1e4,this.ul=new Map,this.Pc=t?.ss,this.Ko=r,this.fl=e,this.bc=i,this._=n,this.ue=s,this.oe=t,this.I=t?.k||(t=>t),this.pl=o,this.he=T(t,"data"),this.Bc=this.he?.Vo,this.Uc=this.he?.xi?.id,this.vl=t?.Xt}set data(t){this.ml(t)&&(this.he=t,this.Bc=t?.Vo,this.Uc=t?.xi?.id)}get data(){return this.he}set vl(t){this._l=null,t&&(this._l=new ne(this.oe,{Xt:t,ee:this.ue,h:this._}))}get vl(){return this._l}wl(t){this._l=null,t&&(this._l=new ne(this.oe,{Xt:t,ee:this.ue,h:this._}))}yl(t,e,i="key",s){let{Ki:r,Il:n,es:o,ss:h=this.Pc}=s,a=this.bl(e,"Ke",i);if(!a||this.xl("jr").find(t=>String(a?.id)===String(t))||a?.ss&&a.ss!==h)return null;let c=[],{Ci:l}=this.getData(t)||{},{[a.id.toString()]:d}=l||{},g=!1;d&&this.kl(a.id,String(d))&&(g=!0);let u=!0===o;if(!u&&n)if(Array.isArray(a?.Bi)&&a.Bi.length){let e=[],s=this.Sl(a.Bi,"Bi");if(s.length&&(e=this.$l(t,s,{Il:n,Dl:i}),c=e.filter(t=>Object.values(k).includes(t)),c.length))return c[0];u=!!e.length}else if(a?.Ml){if(u=this.bc.Xh(n,a.Ml,"SiteArea"),Object.values(k).includes(u))return u}else u=!0;if(!u)return null;let f=[],p=[],v=[],m=[],_=[],w=!1,y=!1;if(r)if(Array.isArray(a?.El)&&a.El.length)if(f=this.Sl(a.El,"El"),_=f.filter(t=>!(g&&"permanent"===t.type)),_.length){if(v=this.Cl(_,r,"audience",i),c=v.filter(t=>Object.values(k).includes(t)),c.length)return c[0];if(v.length)for(let t of v);w="all"===a.Ii.Ol.El?v.length===_.length:!!v.length}else w=!0;else w=!0;if(p=this.Sl(a.El,"segments"),p.length){if(m=this.jl(p,t),m.length)for(let t of m);y=!!m.length}else y=!0;return w&&y&&a?.pi&&a?.pi?.length?a:null}Al(t,e,i="key",s){let{Ki:r,Il:n,Yi:o,Zi:h,ts:a=!0,es:c,ss:l=this.Pc}=s,d=this.yl(t,e,i,{Ki:r,Il:n,es:c,ss:l});return d?Object.values(k).includes(d)?d:this.Ll(t,r,o,d,h,a):null}Ll(t,e,i,s,r,n=!0){if(!t||!s||!s?.id)return null;let o,h,a=null,c=null;this.Rl(t),r&&(a=this.kl(s.id,String(r)))&&(o=r);let{Ci:l,segments:d}=this.getData(t)||{},{[s.id.toString()]:g}=l||{};if(!g||o&&String(o)!==String(g)||!(a=this.kl(s.id,String(g)))){let r=s.pi.filter(t=>!t?.status||"running"===t.status).filter(t=>t?.Tl>0||isNaN(t?.Tl)).reduce((t,e)=>(e?.id&&(t[e.id]=e?.Tl||100),t),{}),c=this.fl.Ec(r,t,this.oe?.Ci?.Nl?null:{experienceId:s.id.toString()});if(o=o||c?.Oe,h=c?.Mi,!o)return"convert.com_variation_not_decided";if(this.Ei(t,i?{Ci:{[s.id.toString()]:o},...e?{segments:e}:{}}:{Ci:{[s.id.toString()]:o}}),n){let i={Oi:"bucketing",data:{experienceId:s.id.toString(),Oe:o.toString()}},r=this.bc.aa(e)?e?.get?.()||{}:d;this.Ko.enqueue(t,i,r)}a=this.kl(s.id,String(o))}else o=g;return a&&(c={experienceId:s?.id,hs:s?.name,Pl:s?.key,Mi:h,...a}),c}kl(t,e){return this.ql("Ke",t,"pi",e,"id","id")}reset(){this.ul=new Map}Ei(t,e={}){let i=this.Rl(t),s=this.getData(t)||{};if(!q(s,e)){let t=N(s,e);if(this.ul.set(i,t),this.ul.size>this.gl)for(let[t]of this.ul){this.ul.delete(t);break}if(this.vl){let{segments:r={},...n}=s,{segments:o={}}=this.Vl(r),{segments:h}=this.Vl(e?.segments||{});h?this.pl?this.vl.enqueue(i,N(n,{segments:{...o,...h}})):this.vl.set(i,N(n,{segments:{...o,...h}})):this.pl?this.vl.enqueue(i,t):this.vl.set(i,t)}}}getData(t){let e=this.Rl(t),i=this.ul.get(e)||null;return this.vl?N(i||{},this.vl.get(e)||{}):i}Rl(t){return`${this.Bc}-${this.Uc}-${t}`}$l(t,e,i){let s,{Il:r,Dl:n="key",Bl:o}=i,{Bi:h=[]}=this.getData(t)||{},a=[];if(R(e))for(let i=0,c=e.length;i<c;i++){if(!e?.[i]?.rules)continue;s=this.bc.Xh(r,e[i].rules,`ConfigLocation #${e[i][n]}`);let c=e?.[i]?.[n]?.toString?.();if(!0===s)(!h.includes(c)||o)&&this.ue.S("location.activated",{Te:t,location:{id:e?.[i]?.id,key:e?.[i]?.key,name:e?.[i]?.name}},null,!0),h.includes(c)||h.push(c),a.push(e[i]);else if(!1!==s)a.push(s);else if(!1===s&&h.includes(c)){this.ue.S("location.deactivated",{Te:t,location:{id:e?.[i]?.id,key:e?.[i]?.key,name:e?.[i]?.name}},null,!0);let s=h.findIndex(t=>t===c);h.splice(s,1)}}return this.Ei(t,{Bi:h}),a}Ul(t,e,i){return this.Al(t,e,"key",i)}zl(t,e,i){return this.Al(t,e,"id",i)}convert(t,e,i,s,r,n){let o="string"==typeof e?this.Fl(e,"Qs"):this.Gl(e,"Qs");if(!o?.id)return;if(i){if(!o?.rules)return;let t=this.bc.Xh(i,o.rules,`ConfigGoal #${e}`);if(Object.values(k).includes(t))return t;if(!t)return}let h=n?.forceMultipleTransactions,{Ci:a,Qs:{[e.toString()]:c}={}}=this.getData(t)||{};return!c||h?(this.Ei(t,{Qs:{[e.toString()]:!0}}),c||function(){let e={ln:o.id};a&&(e.$o=a),this.Ko.enqueue(t,{Oi:"conversion",data:e},r)}.call(this),s&&(!c||h)&&function(){let e={ln:o.id,Do:s};a&&(e.$o=a),this.Ko.enqueue(t,{Oi:"conversion",data:e},r)}.call(this),!0):void 0}Cl(t,e,i,s="id"){let r,n=[];if(R(t))for(let o=0,h=t.length;o<h;o++)t?.[o]?.rules&&(r=this.bc.Xh(e,t[o].rules,`${B(i)} #${t[o][s]}`),!0===r?n.push(t[o]):!1!==r&&n.push(r));return n}jl(t,e){let{segments:{customSegments:i=[]}={}}=this.getData(e)||{},s=[];if(R(t))for(let e=0,r=t.length;e<r;e++)t?.[e]?.id&&i.includes(t[e].id)&&s.push(t[e]);return s}Vl(t){let e=Object.values(S).map(t=>t),i={},s={};for(let r in t)e.includes(r)?i[r]=t[r]:s[r]=t[r];return{properties:Object.keys(s).length?s:null,segments:Object.keys(i).length?i:null}}xl(t){let e=[],i=y[t]||t;return-1!==this.ll.indexOf(i)&&(e=T(this.he,i)||[]),e}Hl(t,e="id"){return this.xl(t).reduce((t,i)=>(t[i[e]]=i,t),{})}bl(t,e,i="key"){let s=this.xl(y[e]||e);if(R(s))for(let e=0,r=s.length;e<r;e++)if(s[e]&&String(s[e]?.[i])===String(t))return s[e];return null}Fl(t,e){return this.bl(t,e,"key")}Wl(t,e){return this.Jl(t,e)}Gl(t,e){return this.bl(t,e,"id")}Ql(t,e){return this.Sl(t,e)}Jl(t,e){let i=this.xl(e),s=[];if(R(i))for(let e=0,r=i.length;e<r;e++)-1!==t.indexOf(i[e]?.key)&&s.push(i[e]);return s}Sl(t,e){let i=[];if(R(t)){let s=this.xl(e);if(R(s))for(let e=0,r=s.length;e<r;e++)-1!==t.indexOf(s[e]?.id)&&i.push(s[e])}return i}ql(t,e,i,s,r,n){let o=this.bl(e,t,r);for(let t of o[i])if(t[n]===s)return t;return null}ml(t){return P(t)&&(!!t?.Vo&&!!t?.xi?.id||!!t.error)}},he=class{constructor(t,{se:e,h:i}){this.pe=e,this._=i}Kl(){return this.pe.xl("Ke")}Yl(t){return this.pe.Fl(t,"Ke")}Zl(t){return this.pe.Gl(t,"Ke")}Xl(t){return this.pe.Jl(t,"Ke")}ed(t,e,i){return this.pe.Ul(t,e,i)}Qi(t,e,i){return this.pe.zl(t,e,i)}sd(t,e){return this.Kl().map(i=>this.ed(t,i?.key,e)).filter(t=>t&&!Object.values(k).includes(t)&&!Object.values(_).includes(t))}rd(t,e){return this.pe.ql("Ke",t,"pi",e,"key","key")}nd(t,e){return this.pe.ql("Ke",t,"pi",e,"id","id")}},ae={get(t=0){return this.element?(Array.isArray(this.element)&&(this.element=this.element[t]),this):this},find(t){let e=P(this)?document:this;return"object"==typeof t?this.element=t:(t.startsWith(">")&&(t=`* ${t}`),this.element=Array.prototype.slice.apply(e.querySelectorAll(t))),Array.isArray(this.element)&&(this.element=1===this.element.length?this.element[0]:this.element),this},filter(t){return this.element?"function"==typeof t?(this.element=Array.prototype.filter.call(this,t),this):this.find(t):this},after(t){return this.element?(Array.isArray(this.element)||this.element.insertAdjacentHTML("afterend",t),this):this},before(t){return Array.isArray(this.element)||this.element.insertAdjacentHTML("beforebegin",t),this},clone(){return this.element?(Array.isArray(this.element)||(this.element=this.element?.cloneNode?.(!0),this.element?.getAttribute?.("id")&&this.element.setAttribute("id",`${this.element.getAttribute("id")}-${performance.now()}`),this.element?.getAttribute?.("name")&&this.element.setAttribute("name",`${this.element.getAttribute("name")}-${performance.now()}`)),this):this},empty(){if(!this.element)return this;if(Array.isArray(this.element))return this;for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);return this},each(t,e){if(!this.element)return this;if(Array.isArray(t))t.forEach((t,i)=>e(i,t));else{if(Array.isArray(this.element))return this;Array.prototype.forEach.call(this.element,(e,i)=>t(i,e))}return this},next(){return this.element?(Array.isArray(this.element)||(this.element=this.element.nextElementSibling),this):this},prev(){return this.element?(Array.isArray(this.element)||(this.element=this.element.previousElementSibling),this):this},parent(){return this.element?(this.element=this.element.parentNode,this):this},append(t){return this.element?(Array.isArray(this.element)||("string"==typeof t?this.element.insertAdjacentHTML("beforeend",t):this.element.appendChild(t)),this):this},prepend(t){return this.element?(Array.isArray(this.element)||("string"==typeof t?this.element.insertAdjacentHTML("afterbegin",t):this.element.insertBefore(t,this.element.firstChild)),this):this},od(t){if(!this.element)return this;if(Array.isArray(this.element))return this;let e=this.find("string"==typeof t?t:t?.element);return e?(Array.isArray(e)||("string"==typeof t?e.insertAdjacentHTML("afterbegin",t):e.insertBefore(this.element,e.firstChild)),this):this},remove(){return this.element?(Array.isArray(this.element)||this.element.parentNode?.removeChild?.(this),this):this},html(t){return this.element?Array.isArray(this.element)?this:t?(this.element.innerHTML=t,this):this.element.innerHTML:this},text(t){return this.element?Array.isArray(this.element)?this:t?(this.element.textContent=t,this):this.element.textContent:this},val(t){return this.element?Array.isArray(this.element)?this:t?(this.element.value=t,this):this.element.value:this},addClass(t){return this.element?(Array.isArray(this.element)||this.element.classList.add(t),this):this},removeClass(t){return this.element?(Array.isArray(this.element)||this.element.classList.remove(t),this):this},hasClass(t){return this.element?Array.isArray(this.element)?this:this.element.classList.contains(t):this},toggleClass(t){return this.element?(Array.isArray(this.element)||this.element.classList.toggle(t),this):this},replaceWith(t){return this.element?(Array.isArray(this.element)||(this.element.outerHTML=t),this):this},show(){return this.element?(Array.isArray(this.element)||(this.element.style.display="initial"),this):this},hide(){return this.element?(Array.isArray(this.element)||(this.element.style.display="none"),this):this},prop(t,e){return this.element?Array.isArray(this.element)?this:e?(this.element[t]=e,this):this.element[t]:this},attr(t,e){return this.element?Array.isArray(this.element)?this:e?(this.element.setAttribute(t,e),this):this.element.getAttribute(t):this},removeAttr(t){return this.element?(Array.isArray(this.element)||this.element.removeAttribute(t),this):this},css(t,e){if(!this.element)return this;if(Array.isArray(this.element))return this;if(e){if("cssText"===t){let t=Object.fromEntries(e.split(";").map(t=>t.split(":").map(t=>t.trim())).filter(t=>2===t.length)),i=this.element.getAttribute("style")||"";i.endsWith(";")&&(i=i.slice(0,-1));for(let e in t)new RegExp(`${e}:(\\s+|\\s)?${t[e]}`,"i").test(i)||this.element.setAttribute("style",`${i?`${i};`:""}${e}: ${t[e]}`)}else this.element.style[B(t)]=e;return this}return getComputedStyle(this.element)[t]},height(t){return this.element?Array.isArray(this.element)?this:t?("function"==typeof t?t():this.element.style.height="string"==typeof t?t:`${t}px`,this):parseFloat(getComputedStyle(this.element,null).height.replace(/(px|em|rem)/g,"")):this},width(t){return this.element?Array.isArray(this.element)?this:t?("function"==typeof t?t():this.element.style.width="string"==typeof t?t:`${t}px`,this):parseFloat(getComputedStyle(this.element,null).width.replace(/(px|em|rem)/g,"")):this},outerHeight(t){if(!this.element)return this;if(Array.isArray(this.element))return this;if(t){let t=this.element.offsetHeight,e=getComputedStyle(this.element);return t+=parseInt(e.marginTop)+parseInt(e.marginBottom),t}return this.element.offsetHeight},outerWidth(t){if(!this.element)return this;if(Array.isArray(this.element))return this;if(t){let t=this.element.offsetWidth,e=getComputedStyle(this.element);return t+=parseInt(e.marginLeft)+parseInt(e.marginRight),t}return this.element.offsetWidth},ready(t){return"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t),this}};function ce(t){return"function"==typeof t?(ae.ready(t),this):ae.find(t)}Object.assign(ce,ae);var le,de=((le=de||{}).hd="in_view",le.CHANGE="change",le),ge=.15,ue={attributes:!0,childList:!0,subtree:!0,characterData:!0},fe=class{constructor({config:t,data:e,state:i,Xt:s,request:r,visitor:n,Ks:o,ad:h,remote:a,te:c,ee:l,h:d}){this.ld=new Map,this.dd=new Map,this.gd=[],this.oe=t,this.he=e,this.ge=s,this.ae=i,this.ce=r,this.we=n,this.ud=o,this.fd=h,this.le=a,this.de=c,this.ue=l,this._=d,this.reset(),this.pd=!0,this.vd=null,this.md=0,this._d=!1,this.wd=!1,this.yd=Date.now(),this.Id=0,this.bd={xd:[],kd:[]},this.Sd=[],this.$d=!1,this.Dd=1,this.Md={},this.Ed={},this.Cd={};let{_conv_domtimeout:g=2500}=this.ce.url.query;this.Od=Number(g),this.jd=[],this.Lo=new AbortController,this.Ad=this.he?.Ld||50,this.he?.Rd&&!this.ae.isDisabled&&(this.Td=!1,this.Nd=new MutationObserver(t=>this.Pd(t))),window.convert?.$||(window.convert.$=window?.jQuery||ce),window.convert._$=this.query.bind(this),this.de.qd=()=>this.qd({force:!0}),this.de.redirect=(t,e)=>this.redirect({url:t,Uh:e}),this.de.refresh=t=>this.refresh({Ss:t}),window.convert[X("redirect",!0)]=this.de.redirect,window.convert[X("refresh",!0)]=this.de.refresh}query(t){!window.convert.$?.fn&&!this.$d&&(this.$d=!0,this.le.log({sel:t},{from:"legacyChangesWithoutjQuery"}));let e,i=window.convert.$;if(!t)return i;if(t.startsWith("none_"))e=i;else try{e=i(t)}catch({}){}return e}reset({Vd:t}={}){if(this.Bd)for(let{node:t}of this.Bd)t?.remove?.();if(this.gd=[],this.Bd=[],this.Ud={},this.zd={},this.Fd={},this.bd={xd:[],kd:[]},this.Sd=[],this.Gd=new Lt,this.Hd=new Lt,this.Wd=new Lt,this.Jd=new Lt,!t)try{if(P(this.ae.Qd)){this.stop();let t=Array.from(document?.querySelectorAll?.(`head style[${$}]`)||[]);for(let e of t){let t=e.getAttribute($);if(this.Kd({Yd:t}))try{e?.remove?.()}catch{}}this.Zd()&&this.start()}}catch{}}Xd(){this.vd=!0;let t=document.querySelector(`style#${D}`);if(this.tg=setTimeout(()=>this.qd({force:!0}),this.Od),!window?._conv_prevent_bodyhide&&!t){let e=document.querySelectorAll("script")?.[0];if(e){e.insertAdjacentHTML("afterend",`<style id="${D}" type="text/css" media="all" ${$} ${this.ae?.Bo?`nonce="${this.ae.Bo}"`:""}>body{position:relative;overflow:hidden}body::after{position:absolute;top:0;bottom:0;left:0;right:0;content:"";background:#fff;z-index:2147483647}</style>`);let i=new AbortController;this.jd.push(i),_t(()=>{if(t){let e=getComputedStyle(document.body).getPropertyValue("background-color");t.textContent+=`body::after{background:${e}}`}},i.signal)}}}qd({force:t,delay:e}={}){if((t||!P(this.ae.ui))&&(this.tg&&(clearTimeout(this.tg),this.tg=null),t||this.pd)&&(!this.Zd()||t)){(this.Gd.size||this.Hd.size||this.Wd.size||this.Jd.size)&&(i.call(this),this.eg());let t=[];for(let e in this.Ud)for(let i in this.Ud[e])for(let s of this.Ud[e][i]){let{selector:e,ig:i}=s;i||t.push(e)}if(t.length)for(let e of t);i.call(this),this.ae.sg(),this.ue.S("render.complete");try{if(!this.rg){this.rg=!0;let t=Array.from(this.dd.values()).reduce((t,{start:e,end:i})=>t+i-e,0);if(t&&this.he?.Na){let e={data:{type:13,element:{id:document?.body?.id,cls:document?.body?.classList?.value,tgn:document?.body?.tagName,rnd:t}}};Qt(e),this.ue.S("signal.detected",e)}}}catch({}){}}function i(){if(document.querySelector(`style#${D}`)&&!this.ng){e?(this.ng=!0,setTimeout(()=>{document.querySelector(`style#${D}`)?.remove?.()},e)):document.querySelector(`style#${D}`)?.remove?.();try{if(this.vd){let t=Date.now()-this.yd;if(t&&this.he?.Na){let e={data:{type:14,element:{id:document?.body?.id,cls:document?.body?.classList?.value,tgn:document?.body?.tagName,shw:t}}};Qt(e),this.ue.S("signal.detected",e)}}}catch({}){}this.vd=!1}}}Zd(){return!this.vd}og(){let t=0,e=()=>{if("complete"===document.readyState||t>=3e3||this._d)return this._d=!0,clearTimeout(this.hg),void(this.hg=null);this.process(),t+=50,this.hg=setTimeout(e,50)};e()}restart(){this.stop(),this.start()}start(){if(!this.wd){if(this.wd=!0,this.he?.Rd&&(void 0===this.hg&&!this._d&&this.og(),!this.Zd()&&!this.Td)){this.Nd.observe(document,ue),this.Td=!0;let t=new AbortController;this.jd.push(t),_t(()=>this.process(),t.signal)}this.process()}}stop(){if(this.wd){this.wd=!1,this.md=0,this.yd=Date.now(),this.he?.ag&&this.cg&&(clearTimeout(this.cg),this.cg=null);for(let t in this.zd)for(let e in this.zd[t])for(let i of this.zd[t][e]){let{event:e,ho:s}=i;this.lg({selector:t,event:e,ho:s})}}}destroy(){try{this.stop(),this.he?.Rd&&this.Nd.disconnect(),this.reset();for(let t of this.jd)t.abort();this.Lo.abort()}catch({}){}}dg({selector:t,event:e,ho:i}){"submit"===e?document.removeEventListener(e,e=>this.gg({selector:t,event:e,ho:i}),!0):document.removeEventListener(e,e=>this.gg({selector:t,event:e,ho:i}))}ug({selector:t,event:e,ho:i}){let s=`${t}-${e}`;this.ld.has(s)||this.ld.set(s,new Set),!this.ld.get(s).has(i)&&(this.ld.get(s).add(i),document.addEventListener(e,e=>this.gg({selector:t,event:e,ho:i}),!!this.fg))}gg({selector:t,event:e,ho:i}){let s=e.target;s.nodeType===Node.TEXT_NODE&&(s=s.parentElement);let r=[];if("function"==typeof e.composedPath)r=e.composedPath();else{let t=s;for(;t;)r.push(t),t=t.parentElement}for(let e of r)if(e instanceof HTMLElement){if(e.matches&&e.matches(t))return void i();if(e.shadowRoot&&Array.from(e.shadowRoot.querySelectorAll(t)).length>0)return void i()}}lg({selector:t,event:e,ho:i}){Object.values(de).includes(e)?this.pg({selector:t,event:e,ho:i}):this.dg({selector:t,event:e,ho:i})}vg({selector:t,event:e,ho:i}){Object.values(de).includes(e)?this.mg({selector:t,event:e,ho:i}):this.ug({selector:t,event:e,ho:i})}_g(){this.wg&&(document.removeEventListener("scroll",this.wg),document.addEventListener("scroll",this.wg,{passive:!0,signal:this.Lo.signal}))}yg(t){if(!t)return!1;let e=t.getBoundingClientRect();if(0===e.width||0===e.height)return!1;let i=window.innerHeight||document.documentElement.clientHeight,s=window.innerWidth||document.documentElement.clientWidth;if(e.top>=i||e.left>=s)return!1;if(e.bottom<=0)return!0;let r=Math.min(e.bottom,i)-Math.max(e.top,0),n=Math.min(e.right,s)-Math.max(e.left,0),o=Math.max(0,r)*Math.max(0,n),h=e.width*e.height;return h>0&&o/h>=ge}mg({selector:t,event:e,ho:i}){let s=document.querySelector(t);if(s)switch(e){case"in_view":if(this.Md[t]instanceof IntersectionObserver&&this.Cd[t]===s){this.Ed[t]=this.Ed[t]||[],this.Ed[t].includes(i)||this.Ed[t].push(i);break}this.Md[t]?.disconnect?.(),this.Ed[t]=[i],this.Md[t]=new IntersectionObserver(e=>{e.forEach(e=>{"loading"===document.readyState||this.vd||e.intersectionRatio<ge||this.Ed[t]?.forEach(t=>t())})},{threshold:ge}),this.yg(s)&&i(),this.Md[t].observe(s),this.Cd[t]=s;break;case"change":if(this.Md[t]instanceof MutationObserver&&this.Cd[t]===s)break;this.Md[t]?.disconnect?.(),this.Md[t]=new MutationObserver(()=>{"complete"!==document.readyState||this.vd||i()}),this.Md[t].observe(s,ue),this.Cd[t]=s}}pg({selector:t,event:e}){switch(e){case"in_view":case"change":this.Md[t]?.disconnect?.(),delete this.Md[t],delete this.Cd[t],delete this.Ed[t]}}Ig({Yd:t,selector:e}){let i=`${t}-${e}`;if(this.dd.has(i)||this.dd.set(i,{start:performance.now(),end:0}),this.dd.get(i).end)return;this.dd.get(i).end=performance.now();let s=document.querySelector(e);if(!s)return;let{start:r,end:n}=this.dd.get(i),o=n-r;if(o)try{if(this.he?.Na){let e={data:{type:12,element:{id:s.id,cls:s.classList.value,tgn:s.tagName,Yd:t,rnd:o}}};Qt(e),this.ue.S("signal.detected",e)}}catch({}){}}bg(){let{xd:t,kd:e}=this.bd,i=!1;for(let t of this.Sd){if(!i&&(t?.querySelector?.("body")||document.body===t)){i=!0,this._g();for(let t in this.zd)for(let e in this.zd[t])for(let i of this.zd[t][e]){let{event:e,ho:s}=i;this.vg({selector:t,event:e,ho:s})}for(let t in this.Fd)for(let e in this.Fd[t])for(let i of this.Fd[t][e]){let{event:e,ho:s}=i;"change"===e&&("complete"===document.readyState||!this.vd)&&s(),this.vg({selector:t,event:e,ho:s})}}for(let e in this.Ud)for(let i in this.Ud[e])for(let s of this.Ud[e][i]){let{selector:e}=s,i=document.querySelector(e),r=t?.querySelector?.(e),n=t?.parentNode?.querySelector?.(e),o=!!(r||i===t||n||t?.nodeType===Node.TEXT_NODE&&i===t?.parentNode);"loading"!==document.readyState&&i&&o&&(!i?.hasAttribute($)||i===t||r)&&i&&s.update()}}for(let{Yd:e,experienceId:i,Oe:s,code:r}of t)this.gs({Yd:e,experienceId:i,Oe:s,code:r});for(let t of e)document.head.insertAdjacentHTML("beforeend",t);this.bd={xd:[],kd:[]},this.Sd=[]}Kd({Yd:t}){for(let e in this.ae.Qd){let{pi:i}=this.oe.Ke[e];for(let e in i)for(let{id:s}of i[e].mi)if(String(s)===String(t))return!0}return!1}Pd(t){if(this.he?.xg&&this.kg(),this.wd&&!this.ae.isDisabled){let e=Date.now();if(this.he?.xg){for(let e of t)"childList"===e.type&&(e.removedNodes.length&&e.removedNodes.forEach(t=>{let e="STYLE"===t.nodeName?t:null;if(e?.id===D&&!this.vd)return;if(e?.hasAttribute?.($)){let t=e.getAttribute($);if(this.Kd({Yd:t}))return void this.bd.kd.push(e.outerHTML)}let i=this.Bd.filter(({html:e})=>String(t?.outerHTML||"").includes(e));if(i.length)this.bd.xd.push(...i);else{if(t?.hasAttribute?.($))return;this.Sd.push(t)}}),e.addedNodes.length&&e.addedNodes.forEach(t=>{t?.hasAttribute?.($)||this.Sd.push(t)})),"attributes"===e.type&&!e.target?.hasAttribute?.($)&&this.Sd.push(e.target);this.Sd.length||(this._d=!0)}e-this.Id>=this.Ad&&(this.Sg?ht(()=>this.bg(),this.Sg):this.bg(),this.process(),this.Id=e)}}kg(){location.href.toLowerCase()!==String(this.ae.$g).toLowerCase()&&!this.ae?.Dg&&!this.ae?.Mg&&this.ue.S("url.changed",{to:location.href,from:this.ae.$g})}process(){this.ae?.Xn?.Ke&&0===this.Gd.size&&0===this.Hd.size&&this.qd(),(0!==this.Gd.size||0!==this.Hd.size||0!==this.Wd.size||0!==this.Jd.size)&&(this.he?.ag&&(this.cg&&(clearTimeout(this.cg),this.cg=null),this.md++),this.eg(),this.Hd.size>0||this.Gd.size>0||this.Wd.size>0||this.Jd.size>0?this.he?.Rd?"loading"!==document.readyState&&this.vd&&this.qd({delay:500}):this.he?.ag?"loading"!==document.readyState?(this.md++,this.eg()):(Date.now()-this.yd>this.Od&&this.qd(),this.cg=setTimeout(()=>this.process(),50)):this.qd():this.qd())}eg(){let t=this.Hd.clone,e=this.Gd.clone,i=[];for(let{experienceId:e,Oe:s,code:r,url:n}of t)i.push(...this.Eg({experienceId:e,Oe:s,code:r,url:n,version:"legacy"}));for(let{Yd:t,experienceId:s,Oe:r,code:n,selector:o,url:h}of e)i.push(...this.Eg({Yd:t,experienceId:s,Oe:r,selector:o,code:n,url:h}));let s=[];for(let{experienceId:e,Oe:r,code:n,url:o}of t)this.Cg({Og:i,experienceId:e,code:n,url:o})&&s.push({experienceId:e,Oe:r,code:n,url:o});if(s.length)for(let{experienceId:t,Oe:e,code:i,url:r}of s)this.gs({experienceId:t,Oe:e,code:i,url:r})&&this.Hd.remove({experienceId:t,Oe:e,code:i,url:r});let r=[];for(let{Yd:t,experienceId:s,Oe:n,code:o,selector:h,url:a}of e)this.Cg({Og:i,experienceId:s,code:o,url:a})&&r.push({Yd:t,experienceId:s,Oe:n,code:o,selector:h,url:a});if(r.length)for(let t of r){let{Yd:e,experienceId:i,Oe:s,code:r,selector:n,url:o}=t;this.gs({Yd:e,experienceId:i,Oe:s,code:r,url:o})&&(this.Ig({Yd:e,selector:n}),this.Gd.remove(t))}let n=[];for(let t of this.Wd.clone){let{selector:e,event:i,ln:s,ho:r}=t;try{n.push({selector:e,event:i,ln:s});let o=this.jg({selector:e,event:i,ln:s,ho:r});this.vg({selector:e,event:i,ho:o}),this.Wd.remove(t)}catch{this.Wd.remove(t)}}if(n.length)for(let{}of n);let o=[];for(let t of this.Jd.clone){let{selector:e,event:i,locationId:s,ho:r}=t;if(document.querySelector(e)){o.push({selector:e,event:i,locationId:s});let n=this.Ag({selector:e,event:i,locationId:s,ho:r});this.vg({selector:e,event:i,ho:n}),this.Jd.remove(t)}}if(o.length)for(let{}of o);}Cg({Og:t,experienceId:e,code:i,url:s}){return!!t.some(({experienceId:t,code:r,url:n})=>e===t&&i.toString()===r.toString()&&s===n)}Lg({Yd:t,experienceId:e,Oe:i,code:s,selector:r,url:n,version:o}){return{ne:this,Yd:t,experienceId:e,Oe:i,selector:r,code:s,url:n,version:o,ig:!1,update(){this.ne.gs({Yd:this.Yd,experienceId:this.experienceId,Oe:this.Oe,code:this.code,url:this.url})}}}Eg({Yd:t,experienceId:e,Oe:i,code:s,selector:r,url:n,version:o="latest"}){if(!s)return[];if(!this.oe.Ke[e])for(let t in this.Ud)this.Ud[t][e]&&delete this.Ud[t][e];if(r){this.Ig({Yd:t,selector:r}),this.Ud[r]||(this.Ud[r]={}),this.Ud[r][e]||(this.Ud[r][e]=[]);let h=this.Ud[r][e].find(({selector:t,code:e,url:i})=>r===t&&s.toString()===e.toString()&&n===i);h||(h=this.Lg({Yd:t,experienceId:e,Oe:i,selector:r,code:s,url:n,version:o}),this.Ud[r][e].push(h));let a=document.querySelector(r);if(a)return h.ig=!0,[{element:a,experienceId:e,code:s,url:n}]}else{let t=this.Rg(s.toString());if(t.length){let r=[];for(let h of t){this.Ud[h]||(this.Ud[h]={}),this.Ud[h][e]||(this.Ud[h][e]=[]);let t=this.Ud[h][e].find(({selector:t,code:e,url:i})=>h===t&&s.toString()===e.toString()&&n===i);t||(t=this.Lg({experienceId:e,Oe:i,selector:h,code:s,url:n,version:o}),this.Ud[h][e].push(t));let a=document.querySelector(h);a&&(t.ig=!0,r.push({element:a,experienceId:e,code:s,url:n}))}return r}}return[]}jg({selector:t,event:e,ln:i,ho:s}){this.zd[t]||(this.zd[t]={}),this.zd[t][i]||(this.zd[t][i]=[]);let r=this.zd[t][i].find(({event:t,ho:i})=>e===t&&s.toString()===i.toString());return r||(r={event:e,ho:()=>{s(i)}},this.zd[t][i].push(r)),r.ho}Ag({selector:t,event:e,locationId:i,ho:s}){this.Fd[t]||(this.Fd[t]={}),this.Fd[t][i]||(this.Fd[t][i]=[]);let r=this.Fd[t][i].find(({event:t,ho:i})=>e===t&&s.toString()===i.toString());return r||(r={event:e,ho:()=>{s(i)}},this.Fd[t][i].push(r)),r.ho}Ji({experienceId:t}){let e=[];for(let i in this.oe.Ke[t].pi){let s=tt(this.oe.Ke[t].pi[i].mi,!0);for(let{data:t}of s)if(t&&Object.keys(t).includes("js")){let s=t.js;if(!s)continue;let r=yt(String(s));(r.includes("convert.redirect")||r.includes("convert.refresh"))&&e.push(i)}}return e.length?e:null}xs({experienceId:t,Oe:e,ys:i=1,ks:s,Ss:r}){if(this.Tg={experienceId:t,Oe:e},this.Dd=i,s){if(String(e)===String(this.we.Ke[t]?.v))return;return void this.Ng({Ss:r})}let n=tt(this.oe.Ke[t].pi[e].mi,!0);for(let{id:i,data:s,type:r}of n)if(s){if(Object.keys(s).includes("css")&&this._s({experienceId:t,Oe:e,Yd:i,ws:s.css,url:this.oe.Ke[t].Pg[s.page_id]?.url}),"defaultRedirect"===r)this.Ng({qg:s.original_pattern,T:s.variation_pattern,Uh:s.case_sensitive});else if((Object.keys(s).includes("custom_js")||"customCode"===r)&&(this.gs({Yd:i,experienceId:t,Oe:e,code:s.custom_js||s.js,url:this.oe.Ke[t].Pg[s.page_id]?.url}),this.we.us&&!this.we.gi))return void(this.ae.ui[t]=!0);if(Object.keys(s).includes("js")&&"customCode"!==r){let n=s.selector,o=s.js,h=this.oe.Ke[t].Pg[s.page_id]?.url;if(!o)continue;n&&document.querySelector(n)&&"richStructure"===r?(this.Eg({Yd:i,experienceId:t,Oe:e,selector:n,code:o,url:h}),this.gs({Yd:i,experienceId:t,Oe:e,code:o,url:h}),this.Ig({Yd:i,selector:n})):this.Vg({Yd:i,experienceId:t,Oe:e,type:r,code:o,selector:n,url:h})}}}Vg({Yd:t,experienceId:e,Oe:i,type:s,code:r,selector:n,url:o}){if(r&&r?.toString?.()){if("richStructure"===s)this.Gd.enqueue({Yd:t,experienceId:e,Oe:i,code:r,selector:n,url:o});else if(this.Zd()||!this.he?.ag&&!this.he?.Rd){let t=new AbortController;this.jd.push(t),_t(()=>this.gs({experienceId:e,Oe:i,code:r,url:o}),t.signal)}else this.Hd.enqueue({experienceId:e,Oe:i,code:r,url:o});this.vd||this.eg()}}Ng({qg:t,T:e,Ss:i,Uh:s}){try{if(t||e){this.ce.process({Uh:s});let i=new It(this.ce.url.href,s).create(bt),r=new RegExp(t,"i");i=r.test(i)?i.replace(r,e):e;let n=i.indexOf("#"),o=n>=0?i.slice(0,n):i,h=n>=0?i.slice(n):"",a=o.indexOf("?");if(a<0)i=o+h;else{let t=o.slice(0,a),e=o.slice(a+1),s=e.indexOf("?"),r=(s>=0?e.slice(0,s):e).split("&").filter(Boolean).join("&");i=t+(r?`?${r}`:"")+h}i.match(new RegExp("http|https"))||(i=`${this.ce.url.object.protocol}${i}`),this.redirect({url:i,Uh:s})}else this.refresh({Ss:i})}catch({stack:t,message:e}){typeof console<"u"&&console.error&&console.error("Convert:",t||e)}}redirect({url:t,Uh:e}){if(this.ae.isDisabled)return;let{experienceId:i,Oe:s}=this.Tg||{};if(this.ae.Se[i])return;let r=this.ge.get("conv_traffic_allocation")||{},n=Number(r[this.we.id]?.[i]);this.ce.process({Uh:e});let o=new It(this.ce.url.href,e).create(bt),h=this.fd.Bg({url:new It(t,e).create(bt),Ug:!0,zg:this.we.Xr(this.Tg)});o!==h?(this.ae.Xe=!0,this.ae.Dg=!0,this.ae?.Mg||window?.convertcom_insideApp||window?.Reed_designer||(this.we.en({...this.Tg,sn:h}),setTimeout(()=>{this.le.log({msg:`failed to redirect to: ${t}`,eData:{k2:[i],k3:[s],...isNaN(n)?{}:{n1:n}}},{request:this.ce,from:"redirectFailed"})},5e3),document.head.insertAdjacentHTML("afterbegin",`<meta http-equiv="refresh" content="0;URL='${h}'">`),location.replace(h))):this.ae.Xe&&(this.ae.Xe=!1),o===h&&this.le.log({msg:"failed to redirect destination URL same as current URL",eData:{k2:[i],k3:[s],...isNaN(n)?{}:{n1:n}}},{request:this.ce,from:"redirectFailed"})}refresh({Ss:t}={}){if(this.ae.isDisabled||this.ae?.ri)return;let{experienceId:e,Oe:i}=this.Tg||{};if(this.ae.Se[e])return;let s=this.ge.get("conv_traffic_allocation")||{},r=Number(s[this.we.id]?.[e]);if(!(this.ae?.Mg||window?.convertcom_insideApp||window?.Reed_designer)){let s=new It(this.ce.url.href).create(bt);if(t)return void this.we.Zr(this.Tg);this.we.en({...this.Tg,sn:s}),this.ae.Xe=!0,setTimeout(()=>{this.le.log({msg:"failed to refresh page",eData:{k2:[e],k3:[i],...isNaN(r)?{}:{n1:r}}},{request:this.ce,from:"refreshFailed"})},5e3),location.reload()}}Fg(t){try{let e=new It(this.ce.url.href).create(bt),i=new It(e),s=i.Zt(),r=new It(t).create(bt),n=new It(r);if(i.href===n.href)return!0;let o=n.Zt();if(o.startsWith("http://www.")||o.startsWith("https://www.")?(o.startsWith("http://www.")&&(o=o.replace("http://www.","http://(www.)?")),o.startsWith("https://www.")&&(o=o.replace("https://www.","https://(www.)?"))):o.startsWith("http://")?o=o.replace("http://","http://(www.)?"):o.startsWith("https://")&&(o=o.replace("https://","https://(www.)?")),o.endsWith("/")||(o+="/"),s.match(o+"?$"))return!0}catch{return!1}return!1}gs({code:t,url:e,Yd:i,experienceId:s,Oe:r,ho:n,Gg:o}){try{if(!t||!t?.toString?.())return;if(e&&!this.Fg(e)||this.Dd>10&&String(t).includes("convert._$"))return!0;this.Hg(t);let h=!1;this.Bd.some(t=>String(t.Yd)===String(i))&&(h=!!document.querySelectorAll(`[${$}="${i}"]`).length);let a,c=t=>`function(){Object.assign(convert.T,{skipInsertedElements:${h},variables:${JSON.stringify(convertPlaceholders)}});return ${t}}`;if("function"==typeof t)a=t({[X("skipInsertedElements",!0)]:h,[X("cv",!0)]:convertPlaceholders,[X("experienceId",!0)]:s,[X("variationId",!0)]:r});else if(t){let e=t.trim().replace(/;+\s*$/,""),i=/^(?:async\s+)?function\b/.test(e)||/^(?:async\s*)?\(\s*[^)]*\)\s*=>/.test(e)||/^(?:async\s*)?[A-Za-z_$][\w$]*\s*=>/.test(e),s=null;if(i)try{let t=Function(`return (${e})`)();"function"==typeof t&&(s=t)}catch{}if(s)a=s;else{let e=this.Hg(t)?c(t):`function(activate, options){\n              ${t}\n            }`;a=Function(`return ${e}`)()}}if("function"==typeof a&&(a=a(n||tt({experienceId:s,Oe:r},!0),tt(o,!0))),void 0===a)return!0;if(a){let{insertedElements:e=[]}=a;for(let s of e)s&&(i&&s.setAttribute($,i),this.Bd.push({code:t,Yd:String(i),html:s?.outerHTML||"",node:s}))}return a}catch({stack:n,message:o}){if(this.he?.Na){let h={data:{type:0,experienceId:s,Oe:r,Yd:i,code:String(t),url:e,stack:n,message:o}};Qt(h),this.ue.S("signal.detected",h)}typeof console<"u"&&console.error&&console.error("Convert:",n||o)}return!1}_s({ws:t,url:e,experienceId:i,Oe:s,Yd:r}){try{if(!t||!t?.toString?.()||e&&!this.Fg(e))return;if("function"==typeof t)return t();{let e=i?` class="${M} ${M}-${i}"`:"",s=this.ae?.Bo?` nonce="${this.ae.Bo}"`:"";t=this.Wg(t);let n="";n=t.includes('<style type="text/css" media="screen"')?t.replace('<style type="text/css" media="screen"',`<style type="text/css" media="screen"${e}${s}`):`<style type="text/css" media="screen" ${$}="${r}" ${e}${s}>${t}</style>`,document.head.insertAdjacentHTML("beforeend",n)}}catch({stack:r,message:n}){if(this.he?.Na){let o={data:{type:0,experienceId:i,Oe:s,sty:String(t),url:e,stack:r,message:n}};Qt(o),this.ue.S("signal.detected",o)}typeof console<"u"&&console.error&&console.error("Convert:",r||n)}}Wg(t){return convertPlaceholders&&"object"==typeof convertPlaceholders?t.replaceAll(/{{(\w+)}}/g,(t,e)=>e in convertPlaceholders?convertPlaceholders[e]:t):t}oo({selector:t,event:e,ln:i,ho:s}){this.Wd.enqueue({selector:t,event:e,ln:i,ho:s}),setTimeout(()=>{this.eg()},0)}co({Qs:t,ho:e}){let i=[];(()=>{this.Lo.abort(),this.Lo=new AbortController})(),this.wg=ot(()=>{let s=Math.ceil(100*Math.abs(window.scrollY/(document.body.scrollHeight-window.innerHeight)));try{let r=rt(t);for(let t of r){let{Jg:e}=this.oe.Qs[t]?.Ii||{};(s>=e||document.body.scrollHeight<=window.innerHeight&&e<=100)&&!i.includes(t)&&i.push(t)}e({ln:i})}catch({}){}},200),this._g()}Qg({selector:t,event:e,locationId:i,ho:s}){this.Jd.enqueue({selector:t,event:this.Kg(e),locationId:i,ho:s}),this.eg()}Kg(t){switch(t){case"hover":return"mouseover";case"change":return"change";case"in_view":return"in_view";default:return t}}ao({action:t,href:e}){return t?`form[action="${t.replace(/"/g,'\\"')}"]`:e?`a[href*="${e.replace(/"/g,'\\"')}"]`:void 0}Rg(t){let e,i=/_\$\(['|"](.*?)['|"]\)/gm,s=[];for(;null!==(e=i.exec(t));){e.index===i.lastIndex&&i.lastIndex++;let[,t]=e;s.push(t)}return rt(s)}Hg(t){return String(t).includes("convert.T.applyChange")}bi(){return this.gd}Yg(t){this.gd=t}},pe=class{constructor({config:t,state:e,Zg:i,cookies:s,request:r,ee:n,h:o,remote:h,te:a}){this.oe=t,this.ae=e,this.Kc=i,this.ce=r,this.ue=n,this._=o,this.le=h,this.de=a,this.jd=new AbortController,this.Xg=this.ce.url.object.host.replace(/^www\./,""),this.Hs=s,window.convert[X("cookieUrl",!0)]=t=>this.Bg({url:t})}tu(t){let e=window.location.origin;return t.startsWith(e)?t.replace(e,""):t}eu(t){if("string"==typeof t){if(this.oe.xi.gr.reduce((t,{lr:e})=>t+e.length,0)>1){if(t.startsWith("#"))return!1;let{object:e}=new It(t),i=e.host.replace(/^www\./,""),s=this.oe.xi.gr.find(({lr:t})=>t.includes(this.Xg)),r=this.oe.xi.gr.find(({lr:t})=>t.includes(i));return!(!r||!s||r.cr===s.cr||this.Xg===i)}return!1}}process(){_t(()=>ht(()=>{if(!this.oe.xi?.Ii?.iu)return;let t=Array.prototype.slice.apply(document.querySelectorAll("a"));for(let e of t){if("done"===e.dataset[X("convertLinkingBinding")])continue;let t=e.getAttribute("href")||e.href;t&&!this.eu(t)||!t||(e.addEventListener("click",e=>{let i=e.target;if("done"!==i.dataset[X("convertLinking")]){let e=this.Bg({url:t});i.setAttribute("href",e),i.dataset[X("convertLinking")]="done"}}),e.dataset[X("convertLinkingBinding")]="done")}let e=Array.prototype.slice.apply(document.querySelectorAll("form"));for(let t of e){if("done"===t.dataset[X("convertLinkingBinding")])continue;let e=t.getAttribute("action")||t.action;e&&!this.eu(e)||!e||(t.addEventListener("submit",i=>{let s=i.target;if("done"!==s.dataset[X("convertLinking")]){if("GET"===(t.method?.toUpperCase?.()||"GET"))return s.insertAdjacentHTML("beforeend",`<input type="hidden" name="_conv_v" value="${encodeURI(this.Hs.get("_conv_v"))}"><input type="hidden" name="_conv_s" value="${encodeURI(this.Hs.get("_conv_s"))}"><input type="hidden" name="_conv_r" value="${encodeURI(this.Hs.get("_conv_r"))}">`),!0;let i=this.Bg({url:e});return s.setAttribute("action",i),s.dataset[X("convertLinking")]="done",!0}}),t.dataset[X("convertLinkingBinding")]="done")}},200)(),this.jd.signal)}Bg({url:t,zg:e,Ug:i}){if(this.ae.isDisabled||"string"!=typeof t)return;let{object:s}=new It(t),r=s.hash?`#${s.hash}`:"",n=t.replace(r,"");return i||(n=this.tu(n)),this.eu(t)?`${n}${t.includes("?")?"&":"?"}_conv_v=${encodeURI(this.Hs.get("_conv_v"))}&_conv_s=${encodeURI(this.Hs.get("_conv_s"))}&_conv_r=${encodeURI(this.Hs.get("_conv_r"))}&_conv_sptest=${encodeURI(e||this.Hs.get("_conv_sptest"))}${r}`:`${n}${r}`}To(){this.jd.abort()}},ve=class{constructor({config:t,state:e,su:i,h:s}){this.oe=t,this.ae=e,this.ru=i,this._=s,this.nu=new AbortController}static isEnabled(t){return!!P(t)&&(void 0===t.enabled||!0===t.enabled)}Ui({experienceId:t}={}){if(!this.ae?.ri&&!this.nu.signal.aborted){try{let e=this.ru.googletagmanager;e?.ou(t),e?.process()}catch(t){t instanceof Error||String(t)}_t(()=>{let e;this.ru.hu.ou(t);for(let t in this.oe.Ke)if(e=this.ru.hu.au({experienceId:t}),e)break;if(e)try{this.ru.hu.process()}catch(t){t instanceof Error||String(t)}let i=this.ru.hu,s=this.ru.googletagmanager;for(let e of Object.keys(this.ru)){let r=this.ru[e];if(r&&r!==i&&r!==s)try{r.ou(t),r.process()}catch(t){t instanceof Error||String(t)}}},this.nu.signal)}}To(){this.nu.abort()}},me=class{constructor({config:t,data:e,Ks:i,state:s,request:r,remote:n,visitor:o,Ke:h,ee:a,h:c}){this.oe=t,this.ud=i,this.ae=s,e&&(this.he=e),r&&(this.ce=r),n&&(this.le=n),o&&(this.we=o),h&&(this.cu=h),a&&(this.ue=a),this._=c,this.lu=new Set,this.du=""}gu({uu:t,fu:e}){let i=this.ae?.pu?.[X(t)];if(i){if(e)return String(i);switch(typeof i){case"string":return window[i];case"object":return i;case"function":return i();default:return}}}vu(t,e){return t?this.oe.xi?.Ii?.mu?e:t.replace(/[^a-zA-Z\-_.\s0-9]/g,"").slice(0,40):""}ou(t){this._u=t}wu({uu:t,experienceId:e,Oe:i}){return`${t}:${e}:${i}`}yu({uu:t,Iu:e,bu:i,xu:s,force:r}){if(this.ae?.ri)return;let n=typeof window<"u"&&window.location?.href||this.ce?.url?.href||"";n!==this.du&&(this.lu.clear(),this.du=n),e&&e();for(let e in this.ud.Ke){if(this._u&&e!==this._u||this.we.Ti[e])continue;let n="kissmetrics"===t;if(n&&!r&&!ve.isEnabled(this.oe.xi?.Ii?.su?.[X(t)])||!n&&!r&&!ve.isEnabled(this.oe.Ke[e].su[X(t)]))continue;let o=this.ud.Ke[e].T.id;if(this.we.Ni[e]?.[o])continue;let h=this.vu(this.oe.Ke[e]?.name||"unknown experience name",e),a=this.vu(this.ud.Ke[e].T.name||"unknown variation name",o),c=`Convert: ${h} - ${a}`,l=this.wu({uu:t,experienceId:e,Oe:o});if(this.lu.has(l)){if(s)return}else if(i&&i({experienceId:e,hs:h.replace("Test #","Test "),Oe:o,ds:a.replace("Var #","ExperienceVariationConfig "),ku:c}),this.lu.add(l),s)return}}},_e=class extends me{constructor({config:t,Ks:e,Ke:i,visitor:s,h:r}){super({config:t,Ks:e,Ke:i,visitor:s,h:r})}process(){(async()=>{await wt("ClickTaleEvent",{Qt:35}),await wt("ClickTaleField",{Qt:35}),"function"==typeof window?.ClickTaleEvent&&"function"==typeof window?.ClickTaleField&&this.yu({uu:"clicktale",bu:({experienceId:t,Oe:e,ku:i})=>{let s=`${t}_${e}`;try{window.ClickTaleEvent(i),window.ClickTaleField("convert_e",s)}catch({}){}},xu:!0})})()}Su(){(async()=>{await wt("ClickTaleIsPlayback",{Qt:35}),await wt("ClickTaleContext",{Qt:35}),"function"==typeof window?.ClickTaleIsPlayback&&window?.ClickTaleIsPlayback()&&("object"==typeof window?.ClickTaleContext||"function"==typeof window?.ClickTaleContext?.getRecordingContextAsync)&&window?.ClickTaleContext?.getRecordingContextAsync("1.1",t=>{if(typeof t?.$u?.convert_e<"u"){let[e,i]=t.$u.convert_e.split("_");return void this.cu.Ce({experienceId:e,Oe:i})}})})()}},we=class extends me{constructor({config:t,data:e,Ks:i,state:s,remote:r,visitor:n,ee:o,h:h}){if(super({config:t,data:e,Ks:i,state:s,remote:r,visitor:n,ee:o,h:h}),this.transactions={},this.customEvents={},this.Du={},this.Mu={},this.Eu=[],this.configure(),this.Cu(),!(typeof performance>"u"))try{this.Nd=new PerformanceObserver(t=>{for(let e of t.getEntries())e.name.includes("/collect")&&this.Ou({request:e.name})}),this.Nd.observe({type:"resource",buffered:!0})}catch{}}configure(){this.ju=this.gu({uu:"google_analytics",fu:!0})||"dataLayer",window[this.ju]=window[this.ju]||[],this.gtag=function(){window[this.ju].push(arguments)}}intercept({enable:t}){if(!(typeof Proxy>"u"&&typeof Reflect>"u")){if(this.Au=t,this.configure(),window[this.ju]){for(let t of window[this.ju])this.Lu(t,"GA");window[this.ju].push=new Proxy(window[this.ju].push,{apply:(t,e,i)=>{try{let t=i?.[0];t&&this.Lu(t,"GA")}catch({}){}return Reflect.apply(t,e,i)}}),wt("google_tag_manager").then(t=>{t&&wt(()=>{return t=window.google_tag_manager,new Promise(e=>{let i=0,s=[{Ru:t,path:[]}],r=()=>{let t=0;for(;s.length>0&&t<100;){let{Ru:r,path:n}=s.shift();if(t++,i++,i>=1e3)return void e("");if(r&&("object"==typeof r||Array.isArray(r))){if(r.messageContext)return void e(n.join("."));if(Array.isArray(r)){let t=n.length>0?n[n.length-1]:"";for(let e=0;e<r.length;e++){let i=[...n];i.length>0?i[i.length-1]=`${t}[${e}]`:i.push(`[${e}]`),s.push({Ru:r[e],path:i})}}else for(let t in r){let e=[...n,t];s.push({Ru:r[t],path:e})}}}s.length>0?setTimeout(r,0):e("")};r()});var t},{Qt:35}).then(t=>{if(t){let[e,i]=t.replace(/\[\d+\]/g,"").split(".");e&&i&&wt(e,{scope:window.google_tag_manager}).then(()=>{wt(i,{scope:window.google_tag_manager[e]}).then(()=>{for(let{message:t}of window.google_tag_manager[e][i])"object"==typeof t&&"event"===t[0]&&this.Lu(t,"GTM");window.google_tag_manager[e][i].push=new Proxy(window.google_tag_manager[e][i].push,{apply:(t,e,i)=>{try{let{message:t}=i[0];"object"==typeof t&&"event"===t[0]&&this.Lu(t,"GTM")}catch({}){}return Reflect.apply(t,e,i)}})})})}})})}this.ae.Tu=!0}}Lu(t,e){if(this.Au)try{let e,s=t=>!t||Object.values(Ct).includes(t)||Object.values(Ot).includes(t)||Object.values(jt).some(e=>String(t).includes(e)),r=(t,i,s,r,n)=>{(n&&this.Nu(n)||!n)&&(i&&z(s)&&parseFloat(String(s))>0?this.oe.xi?.Ii?.su?.hu?.Pu&&(e=t,this.transactions[i]={amount:s,productsCount:r}):"purchase"===t||(this.customEvents[t]=t))},n=(t=[])=>t.reduce((t,e)=>t+("qu"in e?Number(e.qu):1),0);if(mt(i=t)&&"[object Arguments]"===Object.prototype.toString.call(i)){let[e,i,o]=t;if("consent"===e&&"update"===i)tt(o);else if("event"===e){let{transaction_id:t,value:e,items:h=[],send_to:a=""}=tt(o)||{},c=F(e);if(s(i))return;r(i,t,c,n(h),a)}}else if(P(t)){let{event:e=null,ecommerce:i=null,Vu:o}=tt(t)||{},{transaction_id:h,value:a,items:c=[],send_to:l=""}=i||{},d=F(a||o);if(s(e))return;r(e,h,d,n(c),l)}P(this.transactions)&&e&&this.ue.S("goal.revenue_intercepted",{transactions:it(this.transactions),event:e}),P(this.customEvents)&&this.ue.S("goal.custom_event_intercepted",{customEvents:it(this.customEvents)})}catch({}){}var i}Cu(){this.Bu=[];for(let t in this.oe.Ke){let e=this.au({experienceId:t});e&&(this.Bu.includes(e)||this.Bu.push(e))}}Nu(t=""){let[e=""]=String(t).toUpperCase().match(/G-/)||[];return Array.isArray(t)?!!e&&t.some(t=>this.Bu.includes(t)):!!e&&this.Bu.includes(String(t))}Ou({request:t}){if(!t||this.oe.xi.Ii.su.hu?.Uu||this.zu)return;let e=new It(t).query,i=String(e[X("tid")]).toUpperCase(),s=String(e[X("en")]).toLowerCase();this.Nu(i)&&!this.Mu[i]&&"page_view"===s&&(this.zu=!0,this.Mu[i]=!0,this.Au&&this.Fu(i))}Fu(t){if(!this.Eu.length)return;let e=rt(this.Eu).filter(({Gu:t})=>!t);if(e.length)for(let{experienceId:i,Oe:s,Hu:r}of e)(r===t||!t)&&this.Wu({experienceId:i,Oe:s,Hu:r})}Wu({experienceId:t,Oe:e,Hu:i}){let s=this.Eu.find(s=>s.Hu===i&&s.experienceId===t&&s.Oe===e);if(s?.Gu)return;if(this.Ju()&&this.Qu(t))return void(s&&(s.Gu=!0));if(this.gtag("event","experience_impression",i?{send_to:i,exp_variant_string:`CONV-${t}-${e}`}:{exp_variant_string:`CONV-${t}-${e}`}),s&&(s.Gu=!0),this.Ju()&&this.Ku(t),this.he?.oi?.projectId!==this.oe.xi.id)return;let r=window[this.ju]||[],n=tt(r.find(t=>"config"===t[0]&&t[1]===i)?.[2])?.Yu||tt(r.find(t=>"Xu"in tt(t)))?.Zu?.Yu||tt(r.find(t=>"Yu"in tt(t)))?.Yu,o=tt(r.find(t=>"config"===t[0]&&t[1]===i)?.[2])?.tf;this.le.log({eData:{k1:"ga",k2:[t],k3:[e],k4:[i],k5:this.we.cookies.get("_ga"),k6:n,k7:o}},{cookies:this.we.cookies,request:this.ce,from:"trackIntegration",visitor:this.we})}Ju(){return!!this.oe.xi?.Ii?.su?.hu?.[X("track_first_exposure_only")]}ef(){let t=this.we?.cookies?.getData("_conv_v","gai");return t?String(t).split(".").filter(Boolean):[]}Qu(t){return this.ef().includes(String(t))}Ku(t){let e=this.ef();e.includes(String(t))||(e.push(String(t)),this.we?.cookies?.setData("_conv_v",e.join("."),"gai"),this.we?.cookies?.save())}au({experienceId:t}={}){let e,i,s=t=>{let s=this.oe.Ke[t]?.su?.[X("google_analytics")];e=s?.enabled,e&&(i=s?.Hu)};if(t)s(t);else for(let t in this.oe.Ke)if(s(t),i)break;return i?String(i).toUpperCase():null}process(){for(let t in this.oe.Ke){if(this._u&&t!==this._u)continue;let e=this.au({experienceId:t});if(!e||!this.ud.Ke[t])continue;let{T:{id:i}}=this.ud.Ke[t];try{this.oe.xi.Ii.su.hu?.Uu||this.Mu[String(e).toUpperCase()]&&this.Au?(this.Fu(e),this.Wu({experienceId:t,Oe:i,Hu:e})):this.Eu.some(s=>s.Hu===e&&s.experienceId===t&&s.Oe===i)||this.Eu.push({Hu:e,experienceId:t,Oe:i,Gu:!1})}catch({}){}}}stop(){this.Nd?.disconnect?.()}},ye=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window._kmq=window._kmq||[]}process(){this.yu({uu:"kissmetrics",bu:({experienceId:t,ds:e})=>{window._kmq.push(["set",{[`CONVERT-${t}`]:e}])},xu:!0})}},Ie=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{await wt("mixpanel",{Qt:35}),await wt("track",{Qt:35,scope:window?.mixpanel}),"function"==typeof window?.mixpanel?.track&&this.yu({uu:"mixpanel",bu:({hs:t,ds:e})=>{try{window.mixpanel.track("View_Convert_Experience",{[`CONVERT - ${t}`]:e})}catch({}){}}})})()}},be=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){this.yu({uu:"crazyegg",bu:({ku:t})=>{window.CE_SNAPSHOT_NAME=t},xu:!0})}},xe=class extends me{constructor({config:t,Ks:e,request:i,visitor:s,h:r}){super({config:t,Ks:e,request:i,visitor:s,h:r})}process(){this.yu({uu:"luckyorange",bu:({experienceId:t})=>{try{let e=`${this.ce.url.Zt()}${Q({...this.ce.url.query,convert_action:"convert_vpreview",convert_e:t,convert_v:this.ud.Ke[t].T.id},"get",{runtime:"browser"})}`;window.__wtw_lucky_override_save_url=e}catch({}){}},xu:!0})}},ke=class extends me{constructor({config:t,Ks:e,state:i,visitor:s,h:r}){super({config:t,Ks:e,state:i,visitor:s,h:r})}process(){let t=this.gu({uu:"googletagmanager"}),e=window;!t&&!e.dataLayer&&(e.dataLayer=[]);let i=t||e.dataLayer;this.yu({force:!0,uu:"googletagmanager",bu:({experienceId:t,ds:e})=>{i.push({event:`convert-trigger-experience-${t}`,experienceId:t,experiment_id:t,ds:e,variation_name:e})}})}},Se=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window.hj=window.hj||function(){(window.hj.q=window.hj.q||[]).push(arguments)}}process(){(async()=>{if(await wt("hj",{Qt:35}),await wt("eventStream",{Qt:35,scope:window?.hj}),window?.hj?.eventStream){let t=[];this.yu({uu:"hotjar",bu:({experienceId:e,Oe:i,ku:s})=>{let r=s.replace(e,`****${e.slice(4)}`).replace(i,`****${i.slice(4)}`);t.push(r)}});try{for(let e of t)window.hj("event",e)}catch({}){}}})()}},$e=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{await wt("clarity",{Qt:35}),"function"==typeof window?.clarity&&this.yu({uu:"microsoft_clarity",bu:({experienceId:t,hs:e,Oe:i,ds:s})=>{let r=`Convert ${t} ${e}`.slice(0,255),n=`${i} ${s}`.slice(0,255);try{window.clarity("set",r,n)}catch({}){}}})})()}},De=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window._hmt=window._hmt||[]}process(){let t=!1;this.yu({uu:"baidu",bu:({experienceId:e,hs:i,ds:s})=>{let r=this.oe.Ke[e].su[X("baidu")]?.if;window._hmt.push(["_setCustomVar",r,i,s,1]),t=!0}})}},Me=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window?.clicky_custom&&(window.clicky_custom.visitor={},window.clicky_custom.visitor_keys_cookie=[])}process(){this.yu({uu:"clicky",bu:({hs:t,ds:e})=>{window?.clicky_custom&&(window.clicky_custom.visitor[`test${t}`]=t,window.clicky_custom.visitor[`variation${e}`]=e,window.clicky_custom.visitor_keys_cookie.push(`test${t}`),window.clicky_custom.visitor_keys_cookie.push(`variation${e}`))}})}},Ee=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window._czc=window._czc||[]}process(){let t=!1;this.yu({uu:"cnzz",bu:({experienceId:e,hs:i,ds:s})=>{let r=this.oe.Ke[e].su[X("cnzz")]?.if;window._czc.push(["_setCustomVar",r,i,s,1]),t=!0}})}},Ce=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window?.emosGlobalProperties||(window.emosGlobalProperties={}),window?.emosGlobalProperties?.abtest||(window.emosGlobalProperties.abtest=[])}process(){this.yu({uu:"econda",bu:({hs:t,ds:e})=>{window.emosGlobalProperties.abtest.push([t,e,1])}}),window.emosGlobalProperties.abtest.length&&"function"==typeof window?.emosPropertiesEvent&&window.emosPropertiesEvent({})}},Oe=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{await wt("_oEa"),"function"==typeof window?._oEa?.uparam&&this.yu({uu:"eulerian",bu:({experienceId:t,ds:e})=>{window._oEa.uparam({[t]:e})}})})()}},je=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{if(await wt("_gs"),"function"==typeof window?._gs){let t={};this.yu({uu:"gosquared",bu:({experienceId:e,ds:i})=>{t[`Test${e}`]=i}}),P(t)&&window._gs("set","visitor",t)}})()}},Ae=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{if(await wt("heap"),"function"==typeof window?.heap?.track){let t={};this.yu({uu:"heapanalytics",bu:({experienceId:e,ds:i})=>{t[`Test${e}`]=i}}),P(t)&&window.heap.track("Convert Event",t)}})()}},Le=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{await wt("_mfq"),"function"==typeof window?._mfq?.push&&this.yu({uu:"mouseflow",bu:({experienceId:t,ds:e})=>{window._mfq.push(["setVariable",`Test${t}`,e])}})})()}},Re=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window._paq=window._paq||[]}process(){let t=!1;this.yu({uu:"piwik",bu:({experienceId:e,hs:i,ds:s})=>{let r=this.oe.Ke[e].su[X("piwik")]?.if;window._paq.push(["setCustomVariable",r,i,s,"visit"]),t=!0}}),t&&window._paq.push(["trackPageView"])}},Te=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{if(await wt("analytics"),"function"==typeof window?.analytics?.track){let t={};this.yu({uu:"segmentio",bu:({experienceId:e,ds:i})=>{t[`Test${e}`]=i}}),P(t)&&window.analytics.track("Convert Event",t)}})()}},Ne=class extends me{constructor({config:t,Ks:e,state:i,visitor:s,h:r}){super({config:t,Ks:e,state:i,visitor:s,h:r})}process(){(async()=>{let t=this.gu({uu:"sitecatalyst"})||await wt("s",{Qt:35});if("function"==typeof t?.tl){let e=!1;this.yu({uu:"sitecatalyst",bu:({experienceId:i,hs:s,ds:r})=>{let n=this.oe.Ke[i].su[X("sitecatalyst")]?.sf;t[`eVar${n}`]=`Convert - ${s} - ${r}`,e=!0}}),e&&t?.tl()}})()}},Pe=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s})}process(){(async()=>{if(await wt("woopra"),"function"==typeof window?.woopra?.track){let t={};this.yu({uu:"woopra",bu:({experienceId:e,ds:i})=>{t[`Test${e}`]=i}}),P(t)&&window.woopra.track("Convert Event",t)}})()}},qe=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window._wt1Q=window._wt1Q||[]}process(){this.yu({uu:"ysance",bu:({experienceId:t,hs:e,ds:i})=>{let s=this.oe.Ke[t].su[X("ysance")]?.if;window._wt1Q.push(["setCustomData",s,`${e}-${i}`])}})}},Ve=class extends me{constructor({config:t,Ks:e,visitor:i,h:s}){super({config:t,Ks:e,visitor:i,h:s}),window.yaParams=window.yaParams||{},window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments)}}process(){let t="",e=[];this.yu({uu:"yandex",bu:({experienceId:i,hs:s,Oe:r,ds:n})=>{t+=`${t?", ":""}[${i}] ${s} - [${r}] ${n}`,e.push(`CONV-${i}-${r}`)}}),window.yaParams.convert_experiences=t,(async()=>{if(await wt("Ya",{Qt:35}),window?.Ya){let t=this.rf();if(t)for(let i of e)window.ym(t,"params",{exp_variant_string:i})}})()}rf(){for(let t in window)if(t.startsWith("yaCounter"))return t.replace("yaCounter","")}},Be=class{constructor(t,{se:e,Ic:i,h:s}){this.pe=e,this.bc=i,this._=s,this.he=T(t,"data")}nf(t){let e=this.pe.getData(t)||{},{segments:i}=this.pe.Vl(e?.segments);return i}Oh(t,e){let{segments:i}=this.pe.Vl(e);i&&this.pe.Ei(t,{segments:i})}hf(t,e,i){let s,r=this.pe.getData(t)||{},{segments:{customSegments:n=[]}={}}=r,o=[],h=!1;for(let t of e){if(i&&!h&&(h=this.bc.Xh(i,t?.rules,`ConfigSegment #${t?.id}`),Object.values(k).includes(h)))return h;if(!i||h){let e=t?.id?.toString();n.includes(e)||o.push(e)}}return o.length&&(s={...r.segments||{},customSegments:[...n,...o]},this.Oh(t,s)),s}af(t,e,i){let s=this.pe.Wl(e,"segments");return this.hf(t,s,i)}hn(t,e,i){let s=this.pe.Ql(e,"segments");return this.hf(t,s,i)}},Ue={level:2,cf:E,lf(t){if(Object.values(b).includes(t))this.level=t;else switch(t){case"debug":this.level=1;break;case"info":this.level=2;break;case"warn":this.level=3;break;case"error":this.level=4;break;default:this.level=0}switch(this.level){case 1:this.cf=["debug","info","warn","error","log"];break;case 2:this.cf=["info","warn","error","log"];break;case 3:this.cf=["warn","error"];break;case 4:this.cf=["error"];break;default:this.cf=["trace","debug","info","warn","error","log"]}},label:"Convert",df(t){t&&(this.label=t)},gf:{uf:{ff:"#da275a",background:"rgba(218,39,90,0.2)"},pf:{ff:"#788797"}},vf({ff:t,background:e}={}){t&&(this.gf.uf.ff=t),e&&(this.gf.uf.background=e)},mf(){return[`color: ${this.gf.uf.ff}`,`background: ${this.gf.uf.background}`,`border: 1px solid ${this.gf.uf.ff}`,"border-radius: 4px","padding: 2px 4px","margin-right: 4px"].join(";")},_f(){return[`color: ${this.gf.pf.ff}`,`border: 1px solid ${this.gf.pf.ff}`,"border-radius: 4px","padding: 2px 4px","margin-right: 4px"].join(";")},wf(){return[`color: ${this.gf.pf.ff}`].join(";")}},ze=performance.now();typeof window<"u"&&!window.convert?.console&&(()=>{if(typeof window>"u")return;let t=[],e=!0;window.convert.console={};for(let i of E)String(console[i])===`function ${i}() { [native code] }`?window.convert.console[i]=console[i]:(e=!1,window.convert.console[i]=(...e)=>t.push({method:i,D:e}));e||_t(()=>{let e=document.createElement("iframe");if(e.setAttribute($,""),e.style.display="none",document.body.appendChild(e),window.convert.console=e.contentWindow.console,t.length)for(let{method:e,D:i}of t)window.convert.console[e](...i);t=null})})();for(let t of Object.getOwnPropertyNames(typeof window<"u"?window.convert.console:console))Ue[t]=(e,...i)=>{if(Ue.cf.includes(t)){let s=e?.toString?.()||"",r=s.endsWith("()"),n=Number((performance.now()-ze)/1e3).toFixed(3).toString().padStart(2,"0"),o=[];for(let t of[...i])o.push("object"==typeof t?Z(t):t);typeof window<"u"&&window?.isEmulator?(typeof window<"u"?window.convert.console:console)[t](`${Ue.label} [${n} sec]`,`${s}${P(o)?":":""}`,...o):Ue.level<=1?(typeof window<"u"?window.convert.console:console)[t](`%c${Ue.label}%c[${n} sec] ${r?`%c${s}`:s}`,Ue.mf(),Ue.wf(),...r?[Ue._f()]:[],...o):(typeof window<"u"?window.convert.console:console)[t](`%c${Ue.label}%c[${n} sec]${r||!s?"":` ${s}`}`,Ue.mf(),Ue.wf(),...o)}};var Fe=class t{constructor({config:e,data:i}){if(this.yf="1.4.3",this.If=null,this.bf=!0,this.xf=!0,!e)return void console.error("Missing Convert Configuration!");if(!i)return void console.error("Missing Convert Data!");this.ge=new Tt,this.ce=new Ft,this.ce.process(),this.he=i?tt(it(i)):{},this.he?.logLevel&&Ue.lf(this.he.logLevel);let{convert_log_level:s}=this.ce.url.query;s&&Ue.lf(s),this.kf=Ue.level,this._=new Pt(Ue,this.kf),this.jn=new Lt,this.de={},this.Pc=this.he?.ss,this.Sf=!this.he?.vr,this.oe={},this.$f={};let r=this.Df(e);if(this.Mf(r),this.ud=Et.Hr(),this.Ef=Et.Hr(),this.Cf={},this.Of=new AbortController,this.jf=new AbortController,!this.initialize())return;this.ae.isDisabled||this.me.Xd(),this.he?.ag||this.he?.Rd?this.me.start():this.me.qd(),document.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&!this.ae?.ri&&!this.ae?.Dg&&!this.ae?.Xe&&this.oe.Zc.Yc&&this.Ko.ah("beforeunload")}),this.Af("activeLocations",new Promise(t=>this.Lf=t)),this.Af("historicalData",this.Rf.bind(this)),this.Af("data",this.oe?.data),this.Af("currentData",()=>this.ud),this.Af("isRedirect",()=>this.ae.Dg),this.Af("version",()=>this.yf),this.de.Tf=({Te:t})=>this.Tf({Te:t}),this.de.Nf=()=>{this.ae.isDisabled||this.me&&(this.me.pd=!1)},this.de.run=ot(({config:t,Pf:e}={})=>this.run({config:t,Pf:e,qf:!0}),500),this.de.Ss=this.Ss.bind(this),this.de.Vf=this.Vf.bind(this),this.de.setParameters=this.setParameters.bind(this),this.de.Bf=this.Bf.bind(this),this.de.Uf=(t={})=>this.Uf({...t,We:!0}),this.de.zf=this.zf.bind(this),this.de.Ff=this.Ff.bind(this),this.de.destroy=this.destroy.bind(this),this.de.disable=this.disable.bind(this),window.convert[X("runPreview",!0)]=()=>{},window.convert[X("ready",!0)]=this.ready.bind(this),window.convert[X("onAditionalDataReturn",!0)]=window.convert[X("onAdditionalData",!0)]=this.Gf.bind(this),window.convert[X("getCspNonce",!0)]=()=>this.Hf(),window.convert[X("getAllVisitorData",!0)]=()=>Z(this.Wf()),window.convert[X("getCurrentVisitorData",!0)]=()=>Z(this.Jf()),window.convert[X("getUserData",!0)]=()=>Z(this.Qf()),window.convert[X("getUrlParameter",!0)]=t=>this.Kf(t);let{"convert-token":n,"multi-domain":o}=this.ce.url.query;if(n)throw"true"===o&&(this.we.cookies.setData("_conv_t",n),this.we.cookies.save()),this.Yf(),A;if(!t.Zf()){let t=this.we.cookies.getData("_conv_t");if(t){let e=new URL(location.href);throw e.searchParams.set("convert-token",t),e.searchParams.set("navigation","crossdomain"),location.replace(e.toString()),A}}if(window._conv_q&&Array.isArray(window._conv_q)){let t=["sendRevenue","pushRevenue","triggerConversion","recheckGoals","consentGiven","recheck_goals"];for(let e of window._conv_q)this.Xf(e,{tp:t})}window[X("_conv_q",!0)]={push:(...t)=>{if(mt(t))for(let e of t)this.Xf(e)}}}initialize(){let{_conv_disable_signals:t}=this.ce.url.query;this.he.Na=!(nt(t)||!1===this.he?.Na||window.self!==window.top),this.xf=this.he.Na;let{convert_render:e}=this.ce.url.query;if(e&&(this.he.ag=!0,this.he.Rd=!1),this.he?.ag&&!this.he?.Rd&&(this.he.ag=!(!this.he?.ag&&"IE"===this.ce.ur.browser&&!window?._conv_notag),this.he.ag||(this.he.Rd=!0)),this.ep(),this.ip=new Promise(t=>this.ae.sg=t),this.ue=new m(this.oe,{h:this._}),this.bc=new Ht(this.oe,{h:this._}),this.fe=new Xt({config:this.$f,data:this.he,request:this.ce,Ic:this.bc,ee:this.ue,h:this._}),this.fl=new te(this.oe,{h:this._}),this.Ko=new re(this.oe,{ee:this.ue,h:this._}),this.pe=new oe(this.oe,{al:this.fl,Ic:this.bc,ee:this.ue,Qo:this.Ko,h:this._},{cl:!1}),this.ve=new he(this.oe,{se:this.pe,h:this._}),this.ar=new Be(this.oe,{se:this.pe,Ic:this.bc,h:this._}),this.sp=new Nt({config:this.$f,data:this.he,state:this.ae,h:this._}),this.le=new qt({config:this.$f,state:this.ae,Qo:this.Ko,h:this._}),this.we=new Et({config:this.$f,data:this.he,state:this.ae,Xt:this.ge,Ys:this.Ef,Ks:this.ud,request:this.ce,Zs:this.oe.Zc.Yc||this.ae?.ri,ee:this.ue,Xs:this.ar,h:this._,remote:this.le,te:this.de}),this.we.process(),this.rp||(this.rp=this.we.cookies.getData("_conv_prevent_tracking"),this.rp&&(this.oe.Zc.Yc=!1)),this.np=new Dt({cookies:this.we.cookies}),this.pe.wl(this.np),this.fd=new pe({config:this.$f,state:this.ae,Zg:this.oe.Zc.Yc,cookies:this.we.cookies,request:this.ce,ee:this.ue,h:this._,remote:this.le,te:this.de}),this.me||(this.me=new fe({config:this.$f,data:this.he,state:this.ae,Xt:this.ge,request:this.ce,visitor:this.we,Ks:this.ud,ad:this.fd,remote:this.le,te:this.de,ee:this.ue,h:this._})),this.check({op:!1}))return this.ue.on("get_additional_data",this.hp.bind(this)),this.ue.on("save_referrer",this.ap.bind(this)),this.ue.on("process_locations",this.cp.bind(this)),this.ue.on("process_experiences_complete",this.lp.bind(this)),this.ue.on("enable_preview_mode",this.zf.bind(this)),this.ue.on("process_experience_disabled",this.dp.bind(this)),this.ue.on("process_experience_enabled",this.gp.bind(this)),this.ue.on("process_variation_disabled",this.up.bind(this)),this.ue.on("process_variation_enabled",this.fp.bind(this)),this.ue.on("process_goals_complete",this.pp.bind(this)),this.ue.on("goal.revenue_intercepted",this.vp.bind(this)),this.ue.on("goal.custom_event_intercepted",this.mp.bind(this)),this.ue.on("url.changed",this._p.bind(this)),this.ue.on("api.queue.released",this.wp.bind(this)),this._e=new Vt({config:this.$f,data:this.he,state:this.ae,request:this.ce,remote:this.le,te:this.de,ee:this.ue,Xs:this.ar,h:this._,ie:this.fe,visitor:this.we}),this.le.eh(this._e),this.cu=new kt({config:this.$f,data:this.he,state:this.ae,Xt:this.ge,request:this.ce,remote:this.le,te:this.de,ee:this.ue,h:this._,ie:this.fe,se:this.pe,re:this.ve,ne:this.me,segments:this._e,visitor:this.we}),this.yp=new Rt({config:this.$f,data:this.he,state:this.ae,request:this.ce,remote:this.le,te:this.de,ee:this.ue,h:this._,ie:this.fe,ne:this.me,segments:this._e,visitor:this.we}),this.ru={hu:new we({config:this.$f,data:this.he,Ks:this.ud,state:this.ae,remote:this.le,visitor:this.we,ee:this.ue,h:this._}),kissmetrics:new ye({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),mixpanel:new Ie({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Ip:new be({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),luckyorange:new xe({config:this.$f,Ks:this.ud,request:this.ce,visitor:this.we,h:this._}),bp:new _e({config:this.$f,Ks:this.ud,Ke:this.cu,visitor:this.we,h:this._}),googletagmanager:new ke({config:this.$f,Ks:this.ud,state:this.ae,visitor:this.we,h:this._}),xp:new Se({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),microsoft_clarity:new $e({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),kp:new De({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Sp:new Me({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),$p:new Ee({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Dp:new Ce({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Mp:new Oe({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Ep:new je({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Cp:new Ae({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Op:new Le({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),jp:new Re({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Ap:new Te({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Lp:new Ne({config:this.$f,Ks:this.ud,state:this.ae,visitor:this.we,h:this._}),woopra:new Pe({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),Rp:new qe({config:this.$f,Ks:this.ud,visitor:this.we,h:this._}),yandex:new Ve({config:this.$f,Ks:this.ud,visitor:this.we,h:this._})},this.Tp=new ve({config:this.$f,state:this.ae,su:this.ru,h:this._}),!0}Df(t){let e=[],i=tt(t);for(let t=0,s=i.Ke.length;t<s;t++){let s=i.Ke[t];if(s?.ss&&!this.Pc&&delete s.ss,!s.Bi.length&&s?.Ml){let r=`site-area-${s.id}`,n={id:r,name:`Site Area ${s.id}`,key:r,Ui:{type:"upon_run"},rules:s?.Ml};e.push(n),i.Bi.push(n),i.Ke[t].Bi=[r],delete i.Ke[t].Ml}}return i}Mf(t){let{domain:e,version:i="v0"}=this.Np(t)||{},s=e?`https://${e}${"v0"===i?"":"/metrics"}/v1`:"https://[project_id].metrics.convertexperiments.com/v1";et(this.oe,{ss:this.Pc,data:it(t),Tc:{endpoint:{track:s}},Zc:{Yc:!("Yc"in this.he)||this.he.Yc,source:"v1"},events:{qc:this.he?.Lc||1,Vc:this.he?.Rc||1},k:t=>tt(t,!0)}),et(this.$f,this.Pp(this.oe.data))}Pp(t){let e=it(t);function i(t){if("split_url"===t.type)return t.pi.find(({mi:t})=>{let{data:e={}}=t.find(({type:t})=>"defaultRedirect"===t)||{};return e.original_pattern===e.variation_pattern})}return t.El&&(e.El=st(t.El,"id")),t.Bi&&(e.Bi=st(t.Bi,"id")),t.segments&&(e.segments=st(t.segments,"id")),t.Qs&&(e.Qs=st(t.Qs,"id")),t.features&&(e.features=st(t.features,"id")),t.Ke&&(e.Ke=st(t.Ke.map(t=>({...t,bs:i(t),pi:st(t.pi.map(({mi:t,...e})=>({mi:t.sort((t,e)=>t.id-e.id),...e})),"id"),su:st(t.su,"provider"),Pg:t[X("multipage_pages")]?st(t[X("multipage_pages")],"id"):{}})),"id")),e}Np(t){let e="string"==typeof t.xi?.qp?t.xi?.qp:t.xi?.qp?.domain,i=t.xi?.qp?.version;return{domain:e,version:i}}ep(){let{convert_action:t,reed_action:e}=this.ce.url.query,{convert_disable:i}=this.ce.url.query,{_conv_eignore:s}=this.ce.url.query,{_conv_disable_spa_optimizations:r}=this.ce.url.query;if(!this.rp){let{_conv_prevent_tracking:t}=this.ce.url.query;this.rp=t,this.rp&&(this.oe.Zc.Yc=!1)}this.he.xg=!nt(r)&&this.he?.xg,this.ae||(this.ae={});let n=this.ae?.tn||"convert_vpreview"===t||"reed_apreview"===e,o=this.ae?.ri||this.he?.Vp||n;o&&(this.oe.Zc.Yc=!1),et(this.ae,{$g:this.ce.url.href,sg:this.ae?.sg,isDisabled:this.he?.disabled||!!i,ri:o,tn:n,Fi:this.ae?.Fi,Bp:n||this.ae?.Bp,Hi:n||this.ae?.Hi,Dg:!1,Mg:this.he?.Up||!!s,ih:this.oe.Zc.Yc,runHash:Math.random(),Bo:this.Hf(),Xe:!1,Xn:{},Gi:this.ae?.Gi||this.zp()||{},Xi:this.ae?.Xi||this.Fp(),Wi:this.ae?.Wi||{},Tu:this.ae?.Tu,Gp:this.ae?.Gp,oh:this.ae?.oh||this.Hp(),Se:this.ae?.Se||{},pu:this.ae?.pu||{},Qd:{},ui:{},Xo:this.ae?.Xo||this.Np(this.oe.data)})}static Zf(){try{return JSON.parse(sessionStorage.getItem("convert_config")||"false")}catch{return}}Yf(){try{let t=document.createElement("script");t.id="convert-ts-qa-overlay-loader",t.setAttribute("tokens",JSON.stringify([Number(this.$f.xi.id)])),t.src="https://app.convert.com/static/_editor_frame_files/qaOverlayLoader.bundle.js",document.head.append(t)}catch({message:t,stack:e}){console.trace("Convert:",e||t)}}Hf(){if(!this.ae.isDisabled)try{let t=document.querySelector("[nonce]");if(t)return t.nonce||t.getAttribute("nonce")}catch({}){}}zp(){let{convert_v:t,reed_a:e,convert_e:i}=this.ce.url.query,{convert_v:s,reed_a:r,convert_e:n}=this.ce.url.hash,o=i||n,h=t||e||s||r;if(o&&h)return{[String(o)]:String(h)}}Fp(){let t=(this.ce.url.query?._conv_eforce||this.ce.url.query?.conveforce)?.split?.(",")||[],e={};for(let i of t){let[t,s]=i?.split?.(".")||[];t&&s&&(e[t]=s)}return e}Hp(){return window._conv_plugin_id||window.REED_plugin_id}hp(t){let{Te:e,Ne:i=!0}=tt(t);if(this.Wp&&this.Gf({...this.Wp,Te:e,Ne:i}),!this.Jp){this.Jp=!0;try{let{domain:t,version:e="v0"}=this.ae?.Xo||{};vt({url:`${t&&"v0"!==e?`https://${t}`:"https://cdn-3.convertexperiments.com"}/getjs/extra/data.js?vid=${this.we.id}${this.Sf?"&iw=1":""}`,attributes:{nonce:this.ae?.Bo}})}catch({}){}}}Gf(t){if(this.ae.isDisabled)return;let e=tt(t),i=e?.Te,s=!1!==e?.Ne;this.Wp={pr:tt(e?.pr||{},!0),vr:tt(e?.vr||{},!0)},this.Sf&&(this.Sf=!e?.vr),this.Jp=!1;for(let t in this.Wp.pr)this.we.pr[t]=this.Wp.pr[t];for(let t in this.Wp.vr)this.we.vr[t]=this.Wp.vr[t];this._e.Ch({Te:i}),this.cu.$i({Te:i,Ne:s}),this.yp.$i({Te:i,Ne:s}),this.we.cookies.save()}ap(){try{this.ge.set("conv_split_referrer",{timestamp:Date.now()+1e4,data:document.referrer})}catch({}){}}Qp({Kp:t,locationId:e,experienceId:i,Ne:s=!0,We:r}){if(t?.Ui?.js){let n={locationId:e,isActive:!!this.Cf[e]};this.me.gs({code:t.Ui.js,ho:()=>{this.Yp({Kp:t,locationId:e,experienceId:i,Gg:n,Ne:s,We:r}),this.yp.process({Ne:s})},Gg:n})}else this.Yp({Kp:t,locationId:e,experienceId:i,Ne:s,We:r})}cp(t={}){let{locationId:e,experienceId:i,Ne:s=!0,$s:r=!1}=tt(t),n=[];if(e)n=[this.$f.Bi[e]];else if(i)n=this.oe.data.Bi.filter(t=>this.$f.Ke[i]?.Bi?.includes?.(t.id)).filter(t=>!t?.Ui||"callback"===t?.Ui?.type||"upon_run"===t?.Ui?.type);else{let t=this.oe.data.Bi.filter(t=>"dom_element"===t?.Ui?.type);for(let{id:e,Ui:i}of t){let t=i?.events||[];for(let s of t)this.me.Qg({locationId:e,selector:i.selector,event:s,ho:()=>this.Uf({locationId:e,We:!0})})}n=this.oe.data.Bi.filter(t=>!t?.Ui||"callback"===t?.Ui?.type||"upon_run"===t?.Ui?.type)}if(n.length){for(let t=0,e=n.length;t<e;t++){let e=n[t].id,s=this.$f.Bi[e];!s&&!this.ae?.ri||(this.ae?.tn?(Object.keys(this.ae.Gi).some(t=>this.$f.Ke[t]?.Bi?.includes?.(e))||r)&&this.Qp({Kp:s,locationId:e,experienceId:i}):this.Qp({Kp:s,locationId:e,experienceId:i}))}i?r?this.yp.process({Ne:s}):this.we.cookies.enabled&&s&&this.Tp.Ui({experienceId:i}):e&&!this.Cf[e]||(this.Lf(Object.values(this.Cf).map(t=>({id:t?.id,name:t?.name}))),this.ue.S("process_experiences_complete",{Te:this.we.id,Ne:s}))}else!i&&!e&&this.ue.S("process_experiences_complete",{Te:this.we.id,Ne:s})}lp(t={}){let{Ye:e,Ne:i=!0}=tt(t);e||this.ue.S("snippet.experiences_evaluated",{Te:this.we.id}),this.we.cookies.save(),this.ae?.Xn||(this.ae.Xn={}),this.ae.Xn.Ke=!0,this.yp.process({Ne:i})}dp(t){let{Ke:e,Pr:i=!0}=tt(t);for(let t of e){let e=this.oe.data.Ke.find(({id:e})=>String(e)===String(t));if(e)for(let{id:i}of e.pi)this.up({experienceId:t,Oe:i,Pr:!1})}i&&(this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize())}gp(t){let{Ke:e,Pr:i=!0}=tt(t);for(let t of e){let e=this.oe.data.Ke.find(({id:e})=>String(e)===String(t));if(e)for(let{id:i}of e.pi)this.fp({experienceId:t,Oe:i,Pr:!1})}i&&(this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize())}up(t){let{experienceId:e,Oe:i,Pr:s=!0}=tt(t);if(!this.$f.Ke[e])return;let r=this.oe.data.Ke.findIndex(({id:t})=>String(t)===String(e));if(-1===r)return;this.ae?.Gi?.[e]===i&&delete this.ae.Gi[e];let n=this.oe.data.Ke[r].pi.findIndex(({id:t})=>String(t)===String(i));-1!==n&&(this.oe.data.Ke[r].pi[n].status="stopped",s&&(this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize()))}fp(t){let{experienceId:e,Oe:i,Pr:s=!0}=tt(t);if(!this.$f.Ke[e])return;let r=this.oe.data.Ke.findIndex(({id:t})=>String(t)===String(e));if(-1===r)return;this.cu.Ae({experienceId:e,Oe:i});let n=this.oe.data.Ke[r].pi.findIndex(({id:t})=>String(t)===String(i));-1!==n&&(this.oe.data.Ke[r].pi[n].status="running",s&&(this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize()))}pp(t={}){let{Ye:e,Ne:i=!0}=tt(t);e||this.ue.S("snippet.goals_evaluated",{Te:this.we.id}),this.yp.bo(),this.eg(),this.we.cookies.enabled&&i&&this.Tp.Ui(),this.intercept({enable:this.we.cookies.enabled&&i})}vp(t){let{transactions:e,event:i}=tt(t);if(!this.ae.isDisabled&&P(e)){let t=[],s=this.yp.lo(i);s&&t.push(s);let r=this.yp.do("ga");for(let e of r)t.includes(e)||t.push(e);if(t.length)for(let i in e){let{amount:s,productsCount:r,version:n}=e[i];Array.isArray(this.ru.hu.transactions[i].Qs)||(this.ru.hu.transactions[i].Qs=[]);for(let e of t)this.ru.hu.transactions[i].Qs.includes(String(e))||this.yp.Fn({ln:e,transactionId:i,amount:s,productsCount:r,Gn:`ga_v${n}`})&&this.ru.hu.transactions[i].Qs.push(String(e))}}}mp(t){let{customEvents:e}=tt(t);if(!this.ae.isDisabled)for(let t in e)this.yp.fo(t)&&delete this.ru.hu.customEvents[t]}_p(t){let{to:e}=tt(t);this.ae.$g=e,this.ae.isDisabled||(this.Zp=!1,this.run())}wp(t,e){e&&this.ue.S("tracking.blocked",{reason:"network_error",details:e?.message||"Unknown network error"})}Xp({doNotTrack:t,globalPrivacyControl:e}){return t&&1===Number(navigator?.doNotTrack)||1===Number(navigator?.msDoNotTrack)||1===Number(window?.doNotTrack)?this.$f.xi?.Ii?.tv:e&&navigator?.globalPrivacyControl?this.$f.xi?.Ii?.ev:void 0}check({op:t}={op:!0}){if(this.ae.isDisabled&&t)return;let e=this.Xp({doNotTrack:!0})||this.Xp({globalPrivacyControl:!0});if(e&&("Worldwide"===e||"EEA ONLY"===e&&(O[this.he?.pr?.[X("country")]]||j[this.he?.pr?.[X("country")]])||"EU ONLY"===e&&O[this.he?.pr?.[X("country")]]))return;let{reedge_codecheck:i,reedge_domain_id:s,_conv_codecheck:r,_conv_domain_id:n}=this.ce.url.query;if(i||r)return void(window.parent[`codefound_${s||n}`]=!0);let{convert_canceloptout:o,noconfirm:h}=this.ce.url.query;o&&(this.we.cookies.delete("convert_optout"),"1"!==String(h)&&t&&alert(`Congratulations, you are not anymore opt-out for any tracking initiated by Convert.com scripts on ${this.ce.url.object.host} domain.`));let{convert_optout:a,noconfirm:c}=this.ce.url.query;if(a)return this.we.cookies.set("convert_optout",1,15768e4),void("1"!==String(c)&&t&&alert(`You've been opted out for any tracking initiated by Convert.com scripts on ${this.ce.url.object.host} domain.\nIf you want to cancel the opt-out, just clear your browser's cookies or follow the instructions at http://www.convert.com/opt-out`));let l=this.we.cookies.get("convert_optout");if("1"!==String(l))return!(!this.we.domain||window.convertcom_insideApp)||void 0;this.we.cookies.set("convert_optout",1,15768e4)}iv(){this.Lf?.([]),this.me.qd()}async run({config:t,Pf:e,qf:i}={}){if(P(t)){let e=this.Df(t);if(e?.Vo!==this.$f.Vo||e?.xi?.id!==this.$f.xi.id)return this.ae.isDisabled=!0,this.iv(),void this.le.log({error:{accountId:t?.Vo,projectId:t?.xi?.id}},{from:"hijackedConfig"});this.Mf(e),this.Af("data",this.oe.data)}if(!this.check())return this.ae.isDisabled=!0,void this.iv();if(this.he?.Na&&!this.bf&&this.sv(),this.me.reset({Vd:this.bf}),i&&this.rv)return void(this.rv=!1);if(this.bf=!1,this.ce.process(),(!this.ae?.ri||e)&&(et(this.ud,Et.Hr()),et(this.Ef,Et.Hr()),this.we.nr={}),e?(this.we.cookies.deleteData("_conv_s"),this.we.cookies.deleteData("_conv_v"),this.we.cookies.save(),this.we.process()):this.we.process(this.np.Ws()),!this.we?.id)return void this.iv();if(this.ep(),this.ae?.ri&&this.ae?.tn&&!this.nv){let t=this.zp();if(!t)return;{let[[e,i]]=Object.entries(t);if(!z(e)||!z(i))return;if(!this.$f.Ke?.[e]){let{domain:t,version:i="v0"}=this.ae?.Xo||{},s="https://cdn-4.convertexperiments.com/api/v1/config-js";t&&"v0"!==i&&(s=s.replace("cdn-4.convertexperiments.com",t));let r=`${s}/${this.$f.Vo}/${this.$f.xi.id}?exp=${e}&_conv_low_cache=true`;try{let t=await fetch(r).then(t=>t.text()),i=tt(Function(`${t} return convertConfig;`)()),s=i?.Ke?.find(t=>String(t.id)===String(e));if(s){this.oe.data.Ke.push(s);for(let t of i?.Bi||[])this.oe.data.Bi.some(e=>String(e.id)===String(t.id))||this.oe.data.Bi.push(t);for(let t of i?.El||[])this.oe.data.El.some(e=>String(e.id)===String(t.id))||this.oe.data.El.push(t);for(let t of i?.Qs||[])this.oe.data.Qs.some(e=>String(e.id)===String(t.id))||this.oe.data.Qs.push(t);this.Mf(this.Df(this.oe.data))}}catch{}}this.nv=!0}}(this.me.Zd()||e)&&this.me.restart(),this.he?.Te&&(this.we.id=this.he.Te,this.we.tr=!0,this.we.er=!0);let{_conv_vid:s}=this.ce.url.query;s&&(this.we.id=s,this.we.tr=!0,this.we.ir=!0),!this.we.cookies.test()&&!this.we.tr&&(this.ue.S("tracking.blocked",{reason:"cookies_blocked"}),this.Ss({ov:!1},{hv:!0})),e||(this.we.cookies.Fs("_conv_v","pv"),this.we.cookies.Fs("_conv_s","pv"),this.we.Rr()),this.av(),P(this.he?.cv)&&this.lv(this.he.cv),this.$f.xi.dv&&this.gv(),this.we.us&&(this.we.us=!1,this.we.sr=!0),this.we.ir&&this.uv(),this.we.cookies.save(),this.we.cookies.verify()||this.we.cookies.setEnabled(!1),this.setSignals(),this.ae.Gp||(this._e.Ih(),this.ar.Oh(this.we.id,this._e.rh()),this._e.process(),this.fv(),this.Cf={},this.cp(),this.we.cookies.save(),this.$f.xi?.Ii?.iu&&this.fd.process(),(()=>{this.jf.abort(),this.jf=new AbortController})(),_t(()=>{try{this.ru.bp.Su()}catch({}){}setTimeout(()=>{let t=this.oe.data.Qs.find(t=>"decrease-bouncerate"===t?.key);t&&this.yp.Ui({ln:t.id})},1e4)},this.jf.signal))}gv(){this.rv=!0,this.me.gs({code:this.$f.xi.dv})}vv(){let t=this.$f.xi.Ii?.yi||[];return!(this.ae?.Mg||this.he?.Te||P(this.he?.cv)||!t.length)}av(){if(!this.vv())return;let t=this.oe.data.Ke.filter(({id:t})=>this.cu._i({experienceId:t})&&(this.we.ir||this.we.sr||!this.cu.di({experienceId:t}))).map(({id:t})=>t);t.length&&this.cu.ki(t)}uv(){this.vv()&&this.mv()}mv(){this._v&&this._v.abort(),this._v=new AbortController;let{domain:t,version:e="v0"}=this.ae?.Xo||{},i="https://cdn-4.convertexperiments.com/api/v1/visitor-data";t&&"v0"!==e&&(i=i.replace("cdn-4.convertexperiments.com",t)),fetch(`${i}/${this.$f.Vo}/${this.$f.xi.id}/${this.we.id}`,{signal:this._v.signal}).then(t=>t.json()).then((t={})=>this.lv(t)).catch(({})=>{})}lv(t){this.we.gi=P(t?.data||{});let e={...t?.default||{},...t?.data||{}};et(convertPlaceholders,e);let i=Object.entries(e).map(([t,e])=>({key:t,value:String(e)}));if(!i.length)return;this.me.Yg(i),this.cu.Si();let{wv:s=[]}=this.$f.xi.Ii;s.length&&!this.Zp&&(this.gv(),this.Zp=!0)}fv({yv:t}={}){let e=this.cu.ti();if(P(e)){let i=Object.keys(e).map(t=>this.$f.Ke[t]).filter(t=>!!t);this.cu.process({Ke:i}),t||this.Iv()}}Iv(){try{let t=this.ge.get("conv_split_referrer");t?.timestamp>Date.now()&&t?.data&&(window?.gtag?window.gtag("set","page_referrer",t.data):this.ru.hu.gtag("set","page_referrer",t.data))}catch({}){}}zf(t={}){if(this.ae.ri)return;this.ae.ri=!0;let{ts:e,bv:i,xv:s=!0}=tt(t);if(this.ae.Bp=i,this.ae.Hi=s,this.ge.Nr(sessionStorage),this.he.Yc=!!e,this.ge.set("conv_qa_setting",{ts:e,bv:i,xv:s}),s){this.kv=this.kv||it(this.oe.data);for(let t of this.oe.data.Ke)t.El=[];this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize()}}Ff(){this.ae.ri&&(this.ae.ri=!1,this.ae.Bp=this.ae?.tn,this.ae.Hi=this.ae?.tn,this.ge.delete("disabled_experiences"),this.ge.delete("enabled_experiences"),this.ge.delete("disabled_variations"),this.ge.delete("enabled_variations"),this.ge.Nr(localStorage),this.he.Yc=!this.rp,this.kv&&(this.oe.data=it(this.kv),this.Mf(this.oe.data),this.Af("data",this.oe.data),this.initialize(),this.kv=null))}Sv(){return parseFloat(String(this.yf||"").split("_")[0].replace("v",""))}Rf({$v:t}={}){let e={Ke:{}};for(let t in this.we.Ke){if("1"===this.we.Ke[t].v)continue;let i=this.we.Ke[t].v,s=this.$f.Ke[t]?.pi?.[i]?.name;e.Ke[t]={variation_name:s,ds:s,ns:i,Oe:i,Qs:this.we.Ke[t].g||{}}}return t?e:Z(e)}Xf(t,{tp:e}={tp:[]}){let i;if(P(t),Array.isArray(t)){let[e,...s]=t;e&&(this.jn.enqueue({what:e,params:s}),i=e)}else if(t){let e="what"in t?t.what:null;e&&(this.jn.enqueue(t),i=e)}e.includes(i)||this.eg({tp:e})}eg({tp:t}={tp:[]}){if(!this.ae?.Xe)for(let e of this.jn.clone){let{what:i,params:s,logLevel:r=2}=e;try{if(t.includes(String(i)))continue;if(this.jn.remove(e),"function"==typeof i)i();else if("string"==typeof i)if("addListener"===i){if(!P(s))continue;let{event:t,handler:e}=s||{};if("string"!=typeof t||"function"!=typeof e)continue;this.ue.on(t,e)}else"function"!=typeof this.Dv(i)||(Array.isArray(s)?this.Dv(i).apply(this,tt(s)):this.Dv(i)(tt(s)))}catch({message:t,stack:e}){if(this.ae?.Xe)continue;if(this.he?.Na){let r={data:{type:0,what:String(i),params:s,stack:e,message:t}};Qt(r),this.ue.S("signal.detected",r)}this.le.log({error:{message:t,stack:e,what:String(i),params:s}},{from:"queueError"})}}}Af(t,e){Object.defineProperty(window.convert,X(t,!0),{get:()=>Z(tt("function"==typeof e?e():e,!0)),configurable:!0,enumerable:!0})}Dv(t){return this.de[X(t)]}intercept({enable:t}){if(!this.ae?.ri&&this.ru.hu.au())try{this.ae.Tu?(this.ru.hu.Au=t,t&&this.ru.hu.Fu()):this.ru.hu.intercept({enable:t})}catch({}){}}async setSignals(){if(!this.he?.Na)return;let t="convert-signals";if(!document.getElementById(t))try{let e=(()=>{let t=document.currentScript.src,e=document.createElement("a");return e.href=t,e.host})(),{domain:i,version:s="v0"}=this.ae?.Xo||{},r="https://cdn-4.convertexperiments.com/api/v1/project-optional-settings";i&&"v0"!==s&&(r=r.replace("cdn-4.convertexperiments.com",i));let{Mv:{enabled:n,Ev:o}={}}=await fetch(`${r}/${this.$f.Vo}/${this.$f.xi.id}`).then(t=>t.json()).then(tt);if(!n||!this.fl.Ec({1:o},this.we.id)?.Oe)return;await this.sv();let h=/^\d+\.\d+\.\d+$/.test(String(this.yf))?`/v-${this.yf}`:"";await vt({url:`//${e}/static/v1${h}/signals.observer.min.js`,attributes:{id:t}})}catch({}){}}async sv(){return this.If||(this.If=(async()=>{let t=await Kt({key:1,store:"config"}),e={Dr:this.we.Dr,Te:this.we.id,accountId:this.$f.Vo,projectId:this.$f.xi.id,Xo:this.ae.Xo?.domain,Cv:this.ae.Xo?.version,Ov:this.$f.xi.Ii.su?.Mv?.jv,browser:this.ce.ur.browser,Bi:Object.keys(this.Cf),url:this.ce.url.href};t?await Yt({key:1,data:e,store:"config"}):await Qt({key:1,data:e,store:"config"}),this.If=null})()),this.If}Ss(t={},{hv:e}={}){if(this.ae.isDisabled)return;let i=!("ov"in t)||"boolean"!=typeof t.ov||t.ov;this.ae.Gp=!i,this.he.Na=!(!i||!this.xf),this.oe.Zc.Yc=!1,this.ae.ih=!1,this.we.cookies.setEnabled(!1),this.ge.setEnabled(!1),this.Ko.nl(),this.ae.Gp&&this.me.qd(),e||this.ue.S("tracking.blocked",{reason:"cookies_consent"})}Vf(){if(!this.ae.isDisabled){this.fv({yv:!0}),this.oe.Zc.Yc=!this.rp,this.ae.ih=!this.rp,this.we.cookies.setEnabled(!0),this.we.cookies.save(),this.ge.setEnabled(!0),this.ge.set(),this.Ko.ts();for(let t of this.le.Zo)this.le.log(t,{cookies:this.we.cookies,request:this.ce,from:"trackRequest",visitor:this.we});this.le.Zo=[],this.ae.Gp?(this.ae.Gp=!1,this.he.Na=this.xf,this.run()):(this.Tp.Ui(),this.intercept({enable:!0}))}}setParameters(t){P(t)&&(et(this.he,{...this.he,...t}),"Ld"in t&&(this.me.Ad=t.Ld),"Av"in t&&(this.me.Sg=t.Av),"Lv"in t&&(this.me.fg=t.Lv),"ss"in t&&(this.Pc=this.oe.ss=t.ss),"logLevel"in t&&(Ue.lf(t.logLevel),this.kf=Ue.level,this._=new Pt(Ue,this.kf)),this.oe.Zc.Yc=!("Yc"in this.he)||this.he.Yc)}Bf({uu:t,Rv:e}){this.ae.pu[X(t)]=X(e)}Uf(t){let{locationId:e,Ne:i=!0,We:s}=tt(t),r=this.oe.data.Bi.find(({id:t})=>String(t)===String(e));r&&this.Qp({Kp:r,locationId:e,Ne:i,We:s})}Yp({Kp:t,locationId:e,experienceId:i,Gg:s,Ne:r=!0,We:n}){if(!e)return;if(this.Cf[e])P(s)&&(s.isActive=!0);else if(!this.ae?.Bp){let[r]=this.pe.$l(this.we.id.toString(),[t],{Il:this.fe.getData({segments:this._e,visitor:this.we,experienceId:i,locationId:e}),Dl:"id",Bl:!0});if(!r||Object.values(k).includes(r))return;this.Cf[e]=r,this.he?.Na&&this.sv(),P(s)&&(s.isActive=!0)}let o=this.Tv([this.$f.Bi[e]]).filter(({id:t})=>String(t)===String(i)||!this.ae.Qd[t]);if(o.length){for(let{id:t}of o)this.ae.Qd[t]=!0,n&&this.we.cookies.enabled&&r&&this.Tp.Ui({experienceId:t});this.cu.process({Ke:o,Ne:r})}}Tv(t){return this.oe.data.Ke.filter(({Bi:i})=>e.call(this,t,i));function e(t,e){let i=new Set(t.map(t=>t.id));for(let t of e)if(i.has(t))return!0;return!1}}isDisabled(){return this.ae.isDisabled}disable(){this.ae.isDisabled=!0,this.destroy()}destroy(){document.querySelector("head .convertcomcss")?.remove(),this.me?.destroy?.(),this.ru?.hu?.stop?.(),this.Tp?.To?.(),this.fd?.To?.(),this.sp?.To?.(),this.ue?.C?.("get_additional_data"),this.ue?.C?.("save_referrer"),this.ue?.C?.("process_experiences_complete"),this.ue?.C?.("process_goals_complete"),this.ue?.C?.("convert.com_need_more_data"),this.ue?.C?.("convert.com_no_data_found"),this.ue?.C?.("goal.revenue_intercepted"),this.ue?.C?.("goal.custom_event_intercepted"),this.ue?.C?.("url.changed"),this.ue?.C?.("api.queue.released"),this.ip=null}async ready(){return await this.ip,new Promise(t=>t())}Tf({Te:t}){this.ae.isDisabled||t&&(this.we.ir||(this.we.id=t,this.we.tr=!0,this.we.us=!0,this.uv(),this.we.cookies.save()))}Qf(){if(!this.ae.isDisabled)return tt({pr:this.we.pr,system:this.ce.ur,Nv:{Lr:this.we.Lr}},!0)}Pv({experienceId:t}){if(!this.we.nr[t])return[];let e=[];for(let i in this.we.nr[t])e.push({ln:i,qv:this.we.nr[t][i],timestamp:this.ud.Js[t]?.[i]});return e.sort((t,e)=>t.timestamp-e.timestamp)}Wf(){if(this.ae.isDisabled)return;let t=[],e=this.Rf({$v:!0});for(let i in e.Ke)t.push({experienceId:i,Oe:e.Ke[i].Oe,zi:!1,Qs:Object.keys(e.Ke[i].Qs).map(t=>({ln:t,qv:!1}))});let i=this.Jf({$v:!0});return i.Ci=N(i.Ci,t),tt({Ci:t,segments:this._e.rh(),Te:this.we.id},!0)}Jf({$v:t}={}){if(this.ae.isDisabled)return;let e=[];for(let t in this.ud.Ke)e.push({experienceId:t,Oe:this.ud.Ke[t].T.id,zi:this.ud.Ke[t].zi,Qs:this.Pv({experienceId:t})});let i={Ci:e,segments:this._e.rh(),Te:this.we.id};return t?i:tt(i,!0)}Kf(t){if(!this.ae.isDisabled)return this.ce.url.query[t]}};(async()=>{if(typeof convertError<"u")console.error("Convert Error:",convertError);else try{let t=Fe.Zf(),e=t||convertConfig,i=new Fe({config:e,data:convertData});(async()=>{await i.run()})(),t&&i.Yf()}catch({message:t,stack:e}){String(t).toLowerCase().includes("aborting execution")?console.warn("Convert:",t):console.error("Convert:",e||t),document.querySelector(`style#${D}`)?.remove?.();try{(new qt).log({error:{message:t,stack:e}},{from:"generalError"})}catch({message:t,stack:e}){console.trace("Convert:",e||t)}document.querySelector(`style#${D}`)?.remove?.();try{(new qt).log({error:{message:t,stack:e}},{from:"generalError"})}catch({message:t,stack:e}){console.trace("Convert:",e||t)}}})()})();
})();
