(function () {
  'use strict';

  const tpl = document.createElement('template');

  tpl.innerHTML = /* html */`
  <style>

    @import url('https://fonts.cdnfonts.com/css/circular-std');

    /* ── Host ── */
    :host {
      display: block;
      font-family: 'Circular Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ffffff;
      line-height: 1;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    a    { text-decoration: none; color: inherit; }
    ul   { list-style: none; }

    /* ══════════════════════════════════════════
       DESKTOP NAV GRID
    ══════════════════════════════════════════ */
    .nav-desktop {
      background: #080d1b;
      padding: 64px 60px 56px;
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 32px;
    }

    .col-heading {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #ffffff;
      line-height: 1.35;
      letter-spacing: 0.01em;
      margin-bottom: 26px;
    }

    .col-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .col-links a {
      font-size: 13.5px;
      font-weight: 400;
      color: #92aabf;
      line-height: 1.45;
      display: block;
      transition: color 0.18s ease;
    }

    .col-links a:hover { color: #ffffff; }

    /* LinkedIn column */
    .col-linkedin {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .linkedin-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      background: #0a66c2;
      border-radius: 5px;
      margin-top: 4px;
      flex-shrink: 0;
      transition: background 0.2s ease;
    }

    .linkedin-btn:hover { background: #004182; }

    .linkedin-btn svg {
      width: 20px;
      height: 20px;
      fill: #ffffff;
      display: block;
      flex-shrink: 0;
    }

    /* ══════════════════════════════════════════
       LAYOUT SHELL — flex column so CSS order works
    ══════════════════════════════════════════ */
    .shell {
      display: flex;
      flex-direction: column;
    }

    /* Default stacking order (desktop) */
    .nav-desktop  { order: 1; }
    .nav-mobile   { order: 2; }  /* hidden on desktop, correct slot */
    .wave-wrap    { order: 3; }
    .bottom-bar   { order: 4; }

    /* ══════════════════════════════════════════
       WAVE DIVIDER
       Restored from the working previous version:
       simple smooth sweep — dark top into lighter bottom.
       Background = dark teal (#042f2e)
       SVG fill   = bottom-bar teal (#063535)
    ══════════════════════════════════════════ */
    .wave-wrap {
      display: block;
      width: 100%;
      overflow: hidden;
      line-height: 0;
      background: #080d1b;
    }

    .wave-wrap svg {
      display: block;
      width: 100%;
      height: 80px;
    }

    /* ══════════════════════════════════════════
       BOTTOM BAR
    ══════════════════════════════════════════ */
    .bottom-bar {
      background: #061a35;
      padding: 40px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 32px;
    }

    /* Brand block */
    .brand-block {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      max-width: 420px;
    }

    /*
      LOGO PLACEHOLDER
      Replace .logo-placeholder with your own <img>:
        <img src="/logo.svg" alt="Cronos IT"
          style="width:110px;height:44px;object-fit:contain;flex-shrink:0;"/>
    */
    .logo-placeholder {
      width: 110px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .logo-placeholder span {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.02em;
    }

    .logo-placeholder span em {
      font-style: normal;
      color: #2dd4bf;
    }

    .brand-tagline {
      font-size: 13px;
      font-weight: 400;
      color: #8da0bd;
      line-height: 1.65;
      padding-top: 3px;
    }

    /* Bottom right nav */
    .bottom-nav {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 14px;
    }

    .bottom-links {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 6px 22px;
      justify-content: flex-end;
    }

    .bottom-links a {
      font-size: 13px;
      font-weight: 400;
      color: #8da7bd;
      white-space: nowrap;
      transition: color 0.18s ease;
    }

    .bottom-links a:hover { color: #ffffff; }

    .copyright {
      font-size: 12px;
      color: #55697a;
      text-align: right;
    }

    /* ══════════════════════════════════════════
       MOBILE ACCORDION — hidden on desktop
    ══════════════════════════════════════════ */
    .nav-mobile {
      display: none;
      background: #080d1b;
    }

    /* Each accordion row */
    .acc-item {
      border-bottom: 1px solid rgba(255,255,255,0.09);
    }

    .acc-item:first-child {
      border-top: 1px solid rgba(255,255,255,0.09);
    }

    /* Trigger button — full reset, reliable layout */
    .acc-trigger {
      /* Full property reset so no browser button styles bleed in */
      appearance: none;
      -webkit-appearance: none;
      background: none;
      border: none;
      outline: none;
      /* Layout */
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 56px;          /* solid tap target on all phones */
      padding: 0 22px;
      gap: 16px;
      cursor: pointer;
      /* Typography */
      font-family: 'Circular Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.01em;
      text-align: left;
      line-height: 1.3;
      /* UX */
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      transition: background 0.15s ease;
    }

    .acc-trigger:active {
      background: rgba(255,255,255,0.05);
    }

    /* Trigger label — takes remaining width, wraps cleanly */
    .acc-trigger-label {
      flex: 1 1 0;
      min-width: 0;
    }

    /* + / × icon — fixed size, never shrinks, never moves */
    .acc-icon {
      /* Fixed box — always a perfect square */
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      flex-grow: 0;
      
      /* Typography */
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      color: #ffffff;
      /* Animation */
      transition:
        transform  0.3s cubic-bezier(0.4, 0, 0.2, 1),
        color      0.2s ease,
        background 0.2s ease,
        border-color 0.2s ease;
    }

    /* Open state: rotate + into × and teal it */
    .acc-item.acc-open .acc-icon {
      transform: rotate(45deg);
      color: #ffffff;
    }

    /* Collapsible panel */
    .acc-panel {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition:
        max-height 0.36s cubic-bezier(0.4, 0, 0.2, 1),
        opacity    0.24s ease;
    }

    .acc-item.acc-open .acc-panel {
      max-height: 500px;
      opacity: 1;
    }

    .acc-panel-inner {
      padding: 6px 22px 24px 22px;
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .acc-panel-inner a {
      font-size: 13.5px;
      font-weight: 400;
      color: #92a8bf;
      line-height: 1.45;
      display: block;
      transition: color 0.18s ease;
      /* Comfortable tap target */
      min-height: 28px;
      display: flex;
      align-items: center;
    }

    .acc-panel-inner a:hover { color: #ffffff; }

    /* LinkedIn static row in mobile */
    .acc-linkedin-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      min-height: 56px;
      padding: 0 22px;
      border-bottom: 1px solid rgba(255,255,255,0.09);
    }

    .acc-linkedin-label {
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.01em;
      line-height: 1.35;
      flex: 1 1 0;
      min-width: 0;
    }

    /* ══════════════════════════════════════════
       RESPONSIVE BREAKPOINTS
    ══════════════════════════════════════════ */
    @media (max-width: 1100px) {
      .nav-desktop {
        grid-template-columns: repeat(3, 1fr);
        padding: 48px 40px 40px;
      }
    }

    @media (max-width: 720px) {
      /* Swap desktop grid → accordion */
      .nav-desktop { display: none; }
      .nav-mobile  { display: block; order: 1;padding-top: 52px; }

      /* Accordion is order:1, wave order:2, bottom order:3 on mobile */
      .wave-wrap  { order: 2; }
      .bottom-bar { order: 3; }

      /* Shorten wave on mobile */
      .wave-wrap svg { height: 50px; }

      /* Bottom bar: stack vertically */
      .bottom-bar {
        padding: 32px 22px 28px;
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
      }

      .brand-block {
        flex-direction: column;
        align-items: flex-start;
        gap: 14px;
        max-width: 100%;
        width: 100%;
      }

      .logo-placeholder {
        /* stays same size, just left-aligned */
      }

      .bottom-nav {
        align-items: flex-start;
        width: 100%;
      }

      .bottom-links {
        justify-content: flex-start;
        gap: 10px 16px;
      }

      .copyright {
        text-align: left;
      }
    }

    /* Extra small phones */
    @media (max-width: 380px) {
      .acc-trigger {
        font-size: 13px;
        padding: 0 16px;
      }

      .acc-panel-inner {
        padding: 6px 16px 20px 16px;
      }

      .acc-linkedin-row {
        padding: 0 16px;
      }

      .bottom-bar {
        padding: 28px 16px 24px;
      }
    }

  </style>

  <div class="shell">

  <!-- ══════════════════════════════════════════
       DESKTOP: 6-COLUMN GRID NAV
  ═════════════════════════════════════════════ -->
  <nav class="nav-desktop" aria-label="Footer Navigation">

    <div class="col">
      <span class="col-heading">News and Media</span>
      <div class="col-links">
        <a href="#">Product News</a>
        <a href="#">Press Enquiries</a>
        <a href="#">Blog</a>
      </div>
    </div>

    <div class="col">
      <span class="col-heading">Legal</span>
      <div class="col-links">
        <a href="#">Technology Ethics Charter</a>
        <a href="#">Privacy Statement</a>
        <a href="#">Privacy Portal</a>
        <a href="#">Responsible Disclosure Policy</a>
        <a href="#">Privacy Principles</a>
      </div>
    </div>

    <div class="col">
      <span class="col-heading">Support</span>
      <div class="col-links">
        <a href="developer-hub.html">Developer Hub</a>
        <a href="#">Contact Us</a>
        <a href="#">Contact our Privacy Team</a>
        <a href="#">Bot</a>
      </div>
    </div>

    <div class="col">
      <span class="col-heading">Discover</span>
      <div class="col-links">
        <a href="#">About Us</a>
        <a href="#">Roadmap</a>
        <a href="careers.html">Careers</a>
        <a href="partners.html">Partners</a>
        <a href="affiliates.html">Affiliate</a>
        <a href="licenses-and-registrations.html">Licenses & Registrations</a>
        <a href="capital.html">Capital</a>
        <a href="security.html">Security</a>
        <a href="veify.html">Verify</a>
      </div>
    </div>

    <div class="col">
      <span class="col-heading">Updates</span>
      <div class="col-links">
        <a href="#">X</a>
        <a href="#">YouTube</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </div>

    <div class="col col-linkedin">
      <span class="col-heading">Job Candidates Privacy Statement</span>
    </div>

  </nav>

  <!-- ══════════════════════════════════════════
       WAVE DIVIDER — restored simple sweep from previous version
       Start: left at mid → gentle S → settles right
       Dark teal (#042f2e) top bleeds into lighter (#063535) bottom
  ═════════════════════════════════════════════ -->
  <div class="wave-wrap" aria-hidden="true">
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z"
        fill="#061a35"
      />
    </svg>
  </div>

  <!-- ══════════════════════════════════════════
       BOTTOM BAR
  ═════════════════════════════════════════════ -->
  <section class="bottom-bar">

    <div class="brand-block">
      <!--
        LOGO PLACEHOLDER — replace with your <img>:
        <img src="thumbnails/logo.png" alt="Cronos IT"
             style="width:110px;height:44px;object-fit:contain;flex-shrink:0;"/>
      -->
      <div class="logo-placeholder">
        <img src="thumbnails/logo.png" alt="Cronos IT"
             style="width:110px;height:44px;object-fit:contain;flex-shrink:0;"/>
      </div>
      <p class="brand-tagline">
        Operating across 30+ countries, Cronos IT is a leader in enterprise technology solutions and digital transformation.
      </p>
    </div>

    <div class="bottom-nav">
      <nav class="bottom-links" aria-label="Footer Quick Links">
        <a href="#">Support</a>
        <a href="#">Contact Us</a>
        <a href="#">Legal</a>
        <a href="#">Certificates</a>
        <a href="#">Privacy Portal</a>
        <a href="#">Cookie Policy</a>
        <a href="#">Press Enquiries</a>
      </nav>
      <p class="copyright">&copy; Copyright 2026, Cronos IT. All rights are reserved</p>
    </div>

  </section>

  <!-- ══════════════════════════════════════════
       MOBILE: ACCORDION NAV
       + icon rotates 45° → becomes × on open
  ═════════════════════════════════════════════ -->
  <nav class="nav-mobile" aria-label="Footer Navigation">

    <!-- Solutions -->
    <div class="acc-item">
      <button class="acc-trigger" aria-expanded="false">
        <span class="acc-trigger-label">Solutions</span>
        <span class="acc-icon" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel" role="region">
        <div class="acc-panel-inner">
          <a href="#">Cloud Infrastructure</a>
          <a href="#">Managed IT Services</a>
          <a href="#">Cybersecurity</a>
          <a href="#">Enterprise Software</a>
        </div>
      </div>
    </div>

    <!-- Partners -->
    <div class="acc-item">
      <button class="acc-trigger" aria-expanded="false">
        <span class="acc-trigger-label">Partners</span>
        <span class="acc-icon" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel" role="region">
        <div class="acc-panel-inner">
          <a href="#">Our Vision</a>
          <a href="#">Company</a>
          <a href="#">Clients</a>
        </div>
      </div>
    </div>

    <!-- Legal -->
    <div class="acc-item">
      <button class="acc-trigger" aria-expanded="false">
        <span class="acc-trigger-label">Legal</span>
        <span class="acc-icon" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel" role="region">
        <div class="acc-panel-inner">
          <a href="#">Technology Ethics Charter</a>
          <a href="#">Privacy Statement South Africa</a>
          <a href="#">Privacy Portal South Africa</a>
          <a href="#">Responsible Disclosure Policy</a>
          <a href="#">Privacy Principles</a>
        </div>
      </div>
    </div>

    <!-- Support -->
    <div class="acc-item">
      <button class="acc-trigger" aria-expanded="false">
        <span class="acc-trigger-label">Support</span>
        <span class="acc-icon" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel" role="region">
        <div class="acc-panel-inner">
          <a href="#">Developer Hub</a>
          <a href="#">Contact Us</a>
          <a href="#">Contact our Privacy Team</a>
        </div>
      </div>
    </div>

    <!-- News and Media -->
    <div class="acc-item">
      <button class="acc-trigger" aria-expanded="false">
        <span class="acc-trigger-label">News and Media</span>
        <span class="acc-icon" aria-hidden="true">+</span>
      </button>
      <div class="acc-panel" role="region">
        <div class="acc-panel-inner">
          <a href="#">Insights</a>
          <a href="#">Press Enquiries</a>
          <a href="#">Blog</a>
        </div>
      </div>
    </div>

    <!-- LinkedIn — static row, no expand -->
    <div class="acc-linkedin-row">
      <span class="acc-linkedin-label">Job Candidates Privacy Statement</span>
    </div>

  </nav>

  </div><!-- /.shell -->
  `;

  /* ─────────────────────────────────────────────
     Web Component Class
  ───────────────────────────────────────────── */
  class CronosFooter extends HTMLElement {
    constructor () {
      super();
      this._shadow = this.attachShadow({ mode: 'closed' });
    }

    connectedCallback () {
      this._shadow.appendChild(tpl.content.cloneNode(true));
      this._initAccordion();
    }

    _initAccordion () {
      const items = this._shadow.querySelectorAll('.acc-item');

      items.forEach(item => {
        const trigger = item.querySelector('.acc-trigger');
        const panel   = item.querySelector('.acc-panel');
        if (!trigger || !panel) return;

        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('acc-open');

          // Close all other open items
          items.forEach(other => {
            if (other !== item && other.classList.contains('acc-open')) {
              other.classList.remove('acc-open');
              other.querySelector('.acc-trigger').setAttribute('aria-expanded', 'false');
            }
          });

          // Toggle this item
          if (isOpen) {
            item.classList.remove('acc-open');
            trigger.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('acc-open');
            trigger.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }
  }

  if (!customElements.get('cronos-footer')) {
    customElements.define('cronos-footer', CronosFooter);
  }

})();
