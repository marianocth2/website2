(function () {
	function getCookie(key, defaultValue = null) {
		const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
			const [cookieKey, cookieValue] = cookie.split('=');
			acc[decodeURIComponent(cookieKey)] = decodeURIComponent(cookieValue);
			return acc;
		}, {});

		return cookies.hasOwnProperty(key) ? cookies[key] : defaultValue;
	}

	function setCookie(key, value, expirationInSeconds, path = '/') {
		const expires = new Date(Date.now() + expirationInSeconds * 1000).toUTCString();
		document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
	}

	function clearCookie(key, path = '/') {
		document.cookie = `${encodeURIComponent(key)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
	}

	function hasValidAffiliateOverwrite(value) {
		return value != null && value !== '' && value !== 'undefined' && value !== 'null';
	}

	function encodeAffiliateParams(affiliate, entryUrl, affiliateOverwrite, affiliateSource) {
		return {
			aff: window.btoa(affiliate),
			entryUrl: window.btoa(entryUrl),
			affiliateOverwrite: hasValidAffiliateOverwrite(affiliateOverwrite) ? window.btoa(affiliateOverwrite) : null,
			affSource: affiliateSource != null && affiliateSource !== '' ? window.btoa(affiliateSource) : null,
		};
	}

	function isValidUrl(url) {
		return (
			typeof url === 'string' &&
			url.includes(location.hostname) &&
			!url.includes('legal') &&
			!url.includes('wp-login') &&
			!url.includes('wp-admin')
		);
	}

	function appendAffiliateParams(url, { aff, entryUrl, affiliateOverwrite, affSource }) {
		const originalUrl = url;
		const parsedUrl = new URL(url, location.origin);
		const isRelativeUrl = !/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(originalUrl);

		if (!parsedUrl.searchParams.has('aff')) {
			parsedUrl.searchParams.set('aff', aff);
		}

		if (!parsedUrl.searchParams.has('entryUrl')) {
			parsedUrl.searchParams.set('entryUrl', entryUrl);
		}

		if (!parsedUrl.searchParams.has('affOverwrite') && hasValidAffiliateOverwrite(affiliateOverwrite)) {
			parsedUrl.searchParams.set('affOverwrite', affiliateOverwrite);
		} else if (!parsedUrl.searchParams.has('affOverwrite')) {
			parsedUrl.searchParams.delete('affOverwrite');
		}

		if (affSource != null && affSource !== '' && !parsedUrl.searchParams.has('affSource')) {
			parsedUrl.searchParams.set('affSource', affSource);
		}

		if (isRelativeUrl) {
			return `${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`;
		}

		return parsedUrl.toString();
	}

	function addAffiliateParamToLinks() {
		if (!window.affiliate) return;

		const links = [...document.getElementsByTagName('a')];
		const encodedAffiliate = encodeAffiliateParams(
			window.affiliate,
			window.entry_url,
			window.affiliateOverwrite,
			window.affiliateSource
		);

		links.forEach((link) => {
			let url = link.getAttribute('href')?.trim();

			if (!isValidUrl(url)) return;

			link.setAttribute('href', appendAffiliateParams(url, encodedAffiliate));
		});
	}

	function decodeQueryParam(param) {
		const value = new URLSearchParams(location.search).get(param);

		if (!value) {
			return null;
		}

		let decoded = value;
		try {
			decoded = window.atob(decodeURIComponent(value));
		} catch (e) {
			return null; // not base64
		}

		try {
			return decodeURIComponent(decoded);
		} catch (e) {
			return decoded;
		}
	}

	function initEntryUrl() {
		const entryUrlFromCookie = getCookie('entrypoint_url');
		const entryUrlFromParams = decodeQueryParam('entryUrl');

		window.entry_url = entryUrlFromCookie || entryUrlFromParams || location.pathname;

		if (!entryUrlFromCookie) {
			setCookie('entrypoint_url', window.entry_url, 60 * 25); // 25 minutes
		}
	}

	function initAffiliateTag() {
		const { direct, productPack } = info;

		const currentAffCookie = getCookie('affiliate_tag');
		const affFromParams = decodeQueryParam('aff');
		const affiliateOverwrite = decodeQueryParam('affOverwrite') ?? null;
		window.affiliate = productPack || affFromParams || currentAffCookie || direct;

		if (productPack !== affFromParams && !affiliateOverwrite) {
			window.affiliateOverwrite = affFromParams;
			setCookie('affiliate_overwrite', window.affiliateOverwrite, 86400 * 30);
		}

		if (affiliateOverwrite !== null) {
			window.affiliateOverwrite = affiliateOverwrite;
			setCookie('affiliate_overwrite', window.affiliateOverwrite, 86400 * 30);
		}

		setCookie('affiliate_tag', window.affiliate, 86400 * 30); // 30 days

		const affSourceFromParams = decodeQueryParam('affSource');
		if (affSourceFromParams) {
			window.affiliateSource = affSourceFromParams;
			setCookie('affiliate_source', window.affiliateSource, 86400 * 30);
		} else {
			window.affiliateSource = '';
			clearCookie('affiliate_source');
		}
	}

	function runAffiliateTagging() {
		initEntryUrl();
		initAffiliateTag();
		addAffiliateParamToLinks();
	}

	if (!window.deferAffiliateAutoRun) {
		if (document.readyState === 'complete' || document.readyState === 'interactive') {
			runAffiliateTagging();
		} else {
			document.addEventListener('DOMContentLoaded', runAffiliateTagging);
		}
	}

	window.runAffiliateTagging = runAffiliateTagging;
})();
