(function() {
  hideBody();
  const EXPERIMENT_STORAGE_KEY = 'ab_experiment_data';
  const COOKIE_PREFIX = 'ab_ex_';
  const COOKIE_FORWARD_STORAGE_KEYS = ['uid', 'id', 'name', 'variation'];
  const EX_PARAMS = COOKIE_PREFIX + 'data';
  const DEBUG = false;

  const urls = ["aHR0cHM6Ly9zdGFnaW5nLTIuZ2V0LXN5bmdhcy5jb20v","aHR0cHM6Ly9nZXQtc3luZ2FzLmNvbS8=","aHR0cHM6Ly9nZXQtc3luZ2FzLnByaW1lc2hvcGVycy5jb20v"];
  const baseUrl = "experiment.get-syngas.com";

  init();

  async function init() {
  try {
    await setUserId();

    let experimentData = await getExperimentData();

    if (experimentData.id === undefined) {
      showBody();
      return;
    }

    addExperimentDataToCheckoutLinks();

    setCookiesForCustomFields(experimentData);
    registerHit(experimentData);

    if (isTriggerUrl(experimentData)
      && ! isVariationUrl(experimentData)
    ) {
      const url = experimentData.url;
      const query = experimentData.query;
      const redirectTo = url + (query ? `?${query}` : '');
      location.href = redirectTo;
      return;
    }

    showBody();

    if (isVariationUrl(experimentData)) {
     setCanonicalLink(experimentData.entry_url);
    }

    trackPageVisit(experimentData);
  } catch (error) {
    console.error('Experiment init failed:', error);
    showBody(); // fallback if anything crashes
  } finally {
    // ensure the body always becomes visible even if code above failed silently
    showBody();
  }
}

  function removeQueryParam(param) {
    const url = new URL(window.location.href);
    url.searchParams.delete(param);
    window.history.replaceState({}, '', url);
  }

  function addExperimentDataToCheckoutLinks()
  {
    function initData() {
      const links = [...document.getElementsByTagName('a')];

      links.forEach((link) => {
        let url = link.getAttribute('href')?.trim();

        if (!isValidUrl(url)) return;

        const payload = {
          uid: getLocal('uid'),
          id: getLocal('id')
        }

        // ab_ex_data=eyJ1aWQiOiJlNTU5NmM2Yy02NGQyLTQ0M2YtYTcxZS04NjAyMzkxNWJmZGIiLCJpZCI6MTQyfQ%3D%3D
        link.setAttribute('href', appendParam(url, EX_PARAMS, payload));
      });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => initData);
      } else {
        initData();
      }
  }

  function encodePayload(payload) {
    return encodeURIComponent(btoa(JSON.stringify(payload)));
  }

  function decodePayload(payload) {
    return JSON.parse(atob(decodeURIComponent(payload)));
  }

  function appendParam(url, key, value) {
    const separator = url.includes('?') ? '&' : '?';
    const encodedValue = encodePayload(value);

    return `${url}${separator}${key}=${encodedValue}`;
  }

  function isValidUrl(url) {
    return (typeof url === 'string' && url.includes('/checkout'));
  }

  async function setUserId() {
    const encodedPayload = getQueryParam(EX_PARAMS);
    let payload = null;

    if (encodedPayload !== null) {
      try {
        payload = decodePayload(encodedPayload);
      } catch(e) {
        setLocal('uid', getLocal('uid') ?? generateUUID());
        console.error("Can't decode payload");
        return;
      }
    }

    const ex_uid = payload?.uid ?? null;
    const ex_id = payload?.id ?? null;
    setLocal('uid', ex_uid ?? getLocal('uid') ?? generateUUID());

    if (ex_id !== null) {
      setLocal('id', ex_id);
      await fetchExperimentData(true);
      // removeQueryParam(EX_PARAMS);
    }
  }

  function getQueryParam(param)
  {
    return new URLSearchParams(location.search).get(param);
  }

  function hideBody() {
    const hideObserver = new MutationObserver(() => {
      if (document.body) {
        document.body.style.display = "none";
        hideObserver.disconnect();
      }
    });
    hideObserver.observe(document.documentElement, { childList: true });
  }

  function showBodyWhenReady() {
    const interval = setInterval(() => {
      if (document.body && document.body.style.display === "none") {
        document.body.style.display = "";
        clearInterval(interval);
      }
    }, 1000);
  }

  function showBody() {
    const showObserver = new MutationObserver(() => {
      if (document.body && document.body.style.display === "none") {
        document.body.style.display = "";
        showObserver.disconnect();
      }
    });
    showObserver.observe(document.documentElement, { attributes: true, subtree: true });

    showBodyWhenReady();
  }

  function registerHit(payload) {
    navigator.sendBeacon(`https://${baseUrl}/api/visit`, JSON.stringify({
      uid: payload?.uid,
      experiment_id: payload?.id,
      variant_name: payload?.variation,
      location: location.href,
      referrer: document.referrer === '' ? null : document.referrer,
      affiliate: window.affiliate
    }));
  }

  function setCookiesForCustomFields(payload) {
    const duration = 60 * 60 * 24; // 1 day in seconds

    COOKIE_FORWARD_STORAGE_KEYS.forEach((key) => {
      const value = payload?.[key];
      if (value !== undefined && value !== null && value !== '') {
        setCookie(COOKIE_PREFIX + key, value, duration);
      }
    });
  }

  function isVariationUrl(obj) {
    if (DEBUG) {
      console.table({ "currentUrl()": currentUrl(), 'func': 'isVariationUrl', ...obj});
    }

    return obj.url === currentUrl();
  }

  function isTriggerUrl(obj) {
    if (DEBUG) {
      console.table({ "currentUrl()": currentUrl(), 'func': 'isTriggerUrl', ...obj});
    }

    return obj.entry_url === currentUrl();
  }

  async function getExperimentData() {
    let experimentData = getExperimentStorage();

    if (await haveDataAndExperimentRunning(experimentData)) {
      return experimentData;
    }

    cleanup();
    await fetchExperimentData();

    return getExperimentStorage();
  }

  async function haveDataAndExperimentRunning(obj) {
    return typeof obj === 'object' && Object.keys(obj).length > 0 && await experimentIsRunning(obj.id);
  }

  function getExperimentStorage() {
    let experimentData = localStorage.getItem(EXPERIMENT_STORAGE_KEY);

    if (experimentData) {
      try {
        return JSON.parse(experimentData);
      } catch(e) {
        console.error('Error parsing stored experiment data:', e);
      }
    }

    return {};
  }

  async function fetchExperimentData(renew = false) {
    const triggerUrl = window.location.href;

    try {
      let payload = {
        url: triggerUrl,
        uid: getLocal('uid')
      };

      if (renew) {
        payload.experiment_id = getLocal('id');
      }

      const data = await getRequest('/api/experiment', payload);

      if (data.id === undefined) {
        return {};
      }

      Object.entries(data).forEach(([key, value]) => setLocal(key, value));

      return data;
    } catch(e) {
      console.error('Error fetching experiment data', e);
      return {};
    }
  }

  function setLocal(key, value) {
    let obj = getExperimentStorage();
    obj[key] = value;
    localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify(obj));
  }

  function getLocal(key, defaultValue = null) {
    const data = getExperimentStorage();
    return data[key] ?? defaultValue;
  }

  function cleanup() {
    let obj = getExperimentStorage();

    // Cleanup cookies for checkout storing
    COOKIE_FORWARD_STORAGE_KEYS.forEach((key) => {
      deleteCookie(COOKIE_PREFIX + key);
    });

    // Keep only user id
    localStorage.setItem(EXPERIMENT_STORAGE_KEY, JSON.stringify({ uid: obj.uid }));
  }

  function currentUrl() {
    const url = window.location.origin + window.location.pathname;
    return url.endsWith('/') ? url : url + '/';
  }

  async function experimentIsRunning(id) {
    if (!id) return false;

    return await getRequest(`/api/experiment/${id}/status`)
      .then(res => res.status)
      .catch(err => false)
  }

  function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  function setCookie(key, value, expirationInSeconds, path = "/") {
      const expires = new Date(Date.now() + expirationInSeconds * 1000).toUTCString();
      document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
  }

  function setCookieForever(key, value) {
    setCookie(key, value, 86400 * 365 * 2) // 2 years in seconds
  }

  function getCookie(key, defaultValue = null) {
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
          const [cookieKey, cookieValue] = cookie.split("=");
          acc[decodeURIComponent(cookieKey)] = decodeURIComponent(cookieValue);
          return acc;
      }, {});

      return cookies.hasOwnProperty(key) ? cookies[key] : defaultValue;
  }

  function setCanonicalLink(url) {
    let canonicalTag = document.querySelector('link[rel="canonical"]');

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', url);
  }

  function getRequest(path, params = {}) {
      const url = new URL('https://' + baseUrl + path);

      Object.keys(params).forEach(key => {
        if (params[key] !== null) {
          url.searchParams.append(key, params[key]);
        }
      });

      return fetch(url).then(res => res.ok ? res.json() : Promise.reject(res));
  }

  function generateUUID() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  function trackPageVisit(experimentData) {
    const _paq = window._paq = window._paq || [];

    setTrackingDomains();

    if (experimentData.uid) {
      _paq.push(['setUserId', experimentData.uid]);
    }

    const experiment = experimentData.name;
    const variation = experimentData.variation;

    if (experiment && variation) {
      _paq.push(["setCustomVariable", 1, "Experiment", experiment, "visit"]);
      _paq.push(["setCustomVariable", 2, "Variation", variation, "visit"]);

      if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
          'event': 'experiment',
          'experiment': experiment,
          'variation': variation
        });
      }
    }

    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
  }

  function setTrackingDomains() {
    const _paq = window._paq = window._paq || [];
    const domains = Object.values(urls).map(url => {
      try {
        const urlObj = new URL(atob(url));
        return `*.${urlObj.hostname}`;
      } catch (e) {
        return null;
      }
    }).filter(Boolean);

    if (domains.length > 0) {
      _paq.push(["setDomains", domains]);
      _paq.push(["enableCrossDomainLinking"]);
    }
  }
})();
