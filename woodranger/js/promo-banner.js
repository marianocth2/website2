class PromoBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.timerInterval = null;
  }

  connectedCallback() {
    const saleConfig = this.getCurrentSale();

    this.style.display = 'block';

    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

        :host {
          display: block;
          font-family: "Roboto", sans-serif;
        }

        .banner {
          text-align: center;
          color: white;
        }

        .top-bar {
          background-color: ${saleConfig.topBarBg || '#000000'};
          padding: 15px 0;
          display: ${saleConfig.showTopBar ? 'block' : 'none'};
        }

        .top-bar p {
          margin: 0;
          font-size: 17px;
          font-weight: bold;
        }

        .bottom-bar {
          background-color: #ACF4A1;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: nowrap;
          gap: 0;
        }

        .text {
          color: black;
          font-size: 16px;
          font-weight: bold;
          margin: 0;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }

        .code {
          display: ${saleConfig.showTopBar ? 'flex' : 'inline-block'};
          justify-content:center;
          align-items:center;
          background-color: black;
          color: white;
          font-size: 18px;
          padding: 5px 12px;
          font-weight: bold;
          border-radius: 8px;
          margin: 0 8px;
          white-space: nowrap;
          line-height: 100%;
        }

        .highlight {
          color: ${saleConfig.highlightColor || '#ACF4A1'};
        }

        .text-normal {
          font-weight: 400;
          margin-left: 4px;
        }

        .timer {
          display: ${saleConfig.showTimer ? 'flex' : 'none'};
          justify-content: center;
          align-items: center;
          gap: 13px;
          margin-left: 10px;
        }

        .timer-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .timer-box {
          background-color: black;
          color: white;
          font-size: 16px;
          font-weight: bold;
          border-radius: 8px;
          width: 32px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .timer-label {
          font-size: 12px;
          color: black;
          font-weight: 700;
          line-height: 20px;
        }

        .mobile-break {
          display: none;
        }

        .content-row {
          display: flex;
          align-items: center;
          gap: 0;
        }

        /* Mobile styles */
        @media (max-width: 991px) {
        .top-bar {
          background-color: ${saleConfig.topBarBg || '#000000'};
          padding: 6px 0;
        }
          .top-bar p {
            font-size: 15px;
            line-height: 20px;
          }

          .bottom-bar {
            flex-direction: column;
            padding: 5px 10px;
            gap: 8px;
          }

          .text {
            white-space: normal;
            text-align: center;
            display: ${saleConfig.showTopBar ? 'flex' : 'block'};
            align-items: center;
            flex-wrap: wrap;
            justify-content: center;
            font-size: 15px;
          }

         .code {
              font-size: 16px;
              margin: 0 5px;
          }

          .mobile-break {
            display: ${saleConfig.showTopBar ? 'inline' : 'block'};
          }

          .mobile-hide {
            display: none;
          }

          .hide-mob { display: none; }

          .content-row {
            justify-content: center;
          }
        }

        @media (max-width: 420px) { .text { font-size: 15px; } .code { font-size: 15px; margin: 0 5px; } }
        @media (max-width: 392px) { .text { font-size: 13px; } .code { font-size: 13px; margin: 0 5px; } }
      </style>

      <div class="banner">
        <div class="top-bar">
          <p>
            ${saleConfig.emoji} ${saleConfig.title} ${saleConfig.emoji}<span class="mobile-break"><br></span>
            <span class="highlight">${saleConfig.offer1}</span> or
            <span class="highlight">${saleConfig.offer2}</span>
          </p>
        </div>
        <div class="bottom-bar">
          <p class="text">
            <span>${saleConfig.bannerTextSec}</span> <span class="text-normal">${saleConfig.bannerText}</span><span class="code">${saleConfig.promoCode}</span>
            <span class="${saleConfig.showTopBar ? 'hide-mob' : ''}">${saleConfig.limitedTime}</span>
          </p>

          <div class="content-row">
            <div class="timer">
              <div class="timer-item">
                <div class="timer-box" id="days">00</div>
                <div class="timer-label">DAYS</div>
              </div>
              <div class="timer-item">
                <div class="timer-box" id="hours">00</div>
                <div class="timer-label">HRS</div>
              </div>
              <div class="timer-item">
                <div class="timer-box" id="minutes">00</div>
                <div class="timer-label">MINS</div>
              </div>
              <div class="timer-item">
                <div class="timer-box" id="seconds">00</div>
                <div class="timer-label">SECS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    if (saleConfig.showTimer && saleConfig.endDate) {
      this.startTimer(saleConfig.endDate);
    }
  }

  getCurrentSale() {
    const now = new Date();
    const year = now.getFullYear();
    const currentMonth = now.getMonth();
    const yearSuffix = year.toString().slice(-2);

    const urlParam = new URLSearchParams(window.location.search).get('sale');

    if (urlParam === 'default') {
      return {
        name: 'default',
        title: '',
        emoji: '',
        offer1: '',
        offer2: '',
        promoCode: `BLOW${yearSuffix}`,
        topBarBg: '#000000',
        highlightColor: '#ACF4A1',
        showTopBar: false,
        showTimer: false,
        endDate: null,
        bannerText: 'USE PROMO CODE:',
        bannerTextSec: 'GET 50% OFF NOW!',
        limitedTime: '- LIMITED TIME OFFER'
      };
    }

    if (urlParam === 'off' || urlParam === 'none') {
      return {
        name: 'off',
        title: '',
        emoji: '',
        offer1: '',
        offer2: '',
        promoCode: '',
        topBarBg: '#000000',
        highlightColor: '#ACF4A1',
        showTopBar: false,
        showTimer: false,
        endDate: null,
        bannerText: '',
        bannerTextSec: '',
        limitedTime: ''
      };
    }

    const getActiveEndDate = (sale, currentDate) => {
      if (Array.isArray(sale.endDates) && sale.endDates.length > 0) {
        const upcomingEndDate = sale.endDates.find((endDate) => currentDate <= endDate);
        return upcomingEndDate || sale.endDates[sale.endDates.length - 1];
      }
      return sale.end || null;
    };

    const sales = [
      {
        name: '4thofjuly',
        start: new Date(2026, 5, 26), // 2026-06-26
        end: new Date(2026, 6, 20, 23, 59, 59), // 2026-07-20
        endDates: [
          new Date(2026, 6, 5, 23, 59, 59),  // 2026-07-05
          new Date(2026, 6, 12, 23, 59, 59), // 2026-07-12
          new Date(2026, 6, 20, 23, 59, 59), // 2026-07-20
        ],
        title: ' 250th Celebration Sale ON NOW!',
        emoji: '<img src="https://cdn.29next.store/media/herz/uploads/Flag_of_the_United_States.png" width="25" alt="US">',
        offer1: 'GET 1x FOR 50% OFF',
        offer2: '3x FOR 60% OFF',
        promoCode: 'USA250',
        topBarBg: '#000000',
        highlightColor: '#ACF4A1',
        bannerText: 'WITH CODE:',
        bannerTextSec: 'ORDER YOURS NOW',
        limitedTime: 'LIMITED TIME WHILE SUPPLIES LAST',
      },
      {
        name: 'blackfriday',
        start: new Date(year, 10, 3),
        end: new Date(year, 10, 29, 23, 59, 59),
        title: 'BLACK FRIDAY SALE!',
        emoji: '🛍️',
        offer1: 'GET 1x FOR 50% OFF',
        offer2: '3x FOR 60% OFF',
        promoCode: 'BF25',
        topBarBg: '#000000',
        highlightColor: '#ACF4A1',
        bannerText: 'WITH CODE:',
        bannerTextSec: 'ORDER YOURS NOW',
        limitedTime: 'LIMITED TIME WHILE SUPPLIES LAST'
      },
      {
        name: 'cybermonday',
        start: new Date(year, 10, 30),
        end: new Date(year, 11, 6, 23, 59, 59),
        title: 'CYBER MONDAY SALE!',
        emoji: '🛍️',
        offer1: 'GET 1x FOR 50% OFF',
        offer2: '3x FOR 60% OFF',
        promoCode: 'CYBR25',
        topBarBg: '#002E7D',
        highlightColor: '#00FFEA',
        bannerText: 'WITH CODE:',
        bannerTextSec: 'ORDER YOURS NOW',
        limitedTime: 'LIMITED TIME WHILE SUPPLIES LAST'
      },
      {
        name: 'xmas',
        start: new Date(year, 11, 7),
        end: new Date(year, 11, 25, 23, 59, 59),
        title: 'XMAS SALE!',
        emoji: '🎄',
        offer1: 'GET 1x FOR 50% OFF',
        offer2: '3x FOR 60% OFF',
        promoCode: 'XMAS25',
        topBarBg: '#A1090C',
        highlightColor: '#F8EC08',
        bannerText: 'WITH CODE:',
        bannerTextSec: 'ORDER YOURS NOW',
        limitedTime: 'LIMITED TIME'
      },
      {
        name: 'newyear',
        start: currentMonth >= 11 ? new Date(year, 11, 26) : new Date(year - 1, 11, 26),
        end: currentMonth >= 11 ? new Date(year + 1, 0, 14, 23, 59, 59) : new Date(year, 0, 14, 23, 59, 59),
        title: 'NEW YEAR SALE!',
        emoji: '✨',
        offer1: 'GET 1x FOR 50% OFF',
        offer2: '3x FOR 60% OFF',
        promoCode: 'NY2026',
        topBarBg: '#000000',
        highlightColor: '#F8EC08',
        bannerText: 'WITH CODE:',
        bannerTextSec: 'ORDER YOURS NOW',
        limitedTime: 'LIMITED TIME WHILE SUPPLIES LAST'
      }
    ];

    if (urlParam) {
      const forcedSale = sales.find(sale => sale.name === urlParam);
      if (forcedSale) {
        return {
          ...forcedSale,
          endDate: getActiveEndDate(forcedSale, now),
          showTopBar: true,
          showTimer: true
        };
      }
    }

    for (const sale of sales) {
      if (now >= sale.start && now <= sale.end) {
        return {
          ...sale,
          endDate: getActiveEndDate(sale, now),
          showTopBar: true,
          showTimer: true
        };
      }
    }

    return {
      name: 'default',
      title: '',
      emoji: '',
      offer1: '',
      offer2: '',
      promoCode: `POWER${yearSuffix}`,
      topBarBg: '#000000',
      highlightColor: '#ACF4A1',
      showTopBar: false,
      showTimer: false,
      endDate: null,
      bannerText: 'USE PROMO CODE:',
      bannerTextSec: 'GET 50% OFF NOW!',
      limitedTime: '- LIMITED TIME OFFER'
    };
  }

  startTimer(endDate) {
    const updateTimer = () => {
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        clearInterval(this.timerInterval);
        this.updateTimerDisplay(0, 0, 0, 0);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      this.updateTimerDisplay(days, hours, minutes, seconds);
    };

    updateTimer();
    this.timerInterval = setInterval(updateTimer, 1000);
  }

  updateTimerDisplay(days, hours, minutes, seconds) {
    const daysEl = this.shadowRoot.getElementById('days');
    const hoursEl = this.shadowRoot.getElementById('hours');
    const minutesEl = this.shadowRoot.getElementById('minutes');
    const secondsEl = this.shadowRoot.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  disconnectedCallback() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}

customElements.define('promo-banner', PromoBanner);
