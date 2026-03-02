(function () {
  'use strict';

  /* ══════════════════════════════════════════
     SINGLE SOURCE OF TRUTH — edit links here ONLY.
     Changes apply to both desktop and mobile automatically.
  ══════════════════════════════════════════ */
  const NAV_COLUMNS = [
    {
      heading: 'News and Media',
      links: [
        { label: 'Product News',     href: '#' },
        { label: 'Press Enquiries',  href: '#' },
        { label: 'Blog',             href: '#' },
      ]
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Technology Ethics Charter',    href: '#' },
        { label: 'Privacy Statement',            href: '#' },
        { label: 'Privacy Portal',               href: '#' },
        { label: 'Responsible Disclosure Policy',href: '#' },
        { label: 'Privacy Principles',           href: '#' },
      ]
    },
    {
      heading: 'Support',
      links: [
        { label: 'Developer Hub',             href: 'developer-hub.html' },
        { label: 'Contact Us',                href: '#' },
        { label: 'Contact our Privacy Team',  href: '#' },
        { label: 'Bot',                       href: '#' },
      ]
    },
    {
      heading: 'Discover',
      links: [
        { label: 'About Us',                  href: '#' },
        { label: 'Roadmap',                   href: 'roadmap.html' },
        { label: 'Careers',                   href: 'careers.html' },
        { label: 'Partners',                  href: 'partners.html' },
        { label: 'Affiliate',                 href: 'affiliates.html' },
        { label: 'Licenses & Registrations',  href: 'licenses-and-registrations.html' },
        { label: 'Capital',                   href: 'capital.html' },
        { label: 'Security',                  href: 'security.html' },
        { label: 'Verify',                    href: 'verify.html' },
      ]
    },
    {
      heading: 'Updates',
      links: [
        { label: 'X',         href: '#' },
        { label: 'YouTube',   href: '#' },
        { label: 'Facebook',  href: '#' },
        { label: 'Instagram', href: '#' },
      ]
    },
    {
      heading: 'Job Candidates Privacy Statement',
      links: [] // no links — heading only (desktop) / static row (mobile)
    },
  ];

  /* ══════════════════════════════════════════
     BOTTOM BAR QUICK LINKS — edit here only.
  ══════════════════════════════════════════ */
  const BOTTOM_LINKS = [
    { label: 'Support',         href: '#' },
    { label: 'Contact Us',      href: '#' },
    { label: 'Legal',           href: '#' },
    { label: 'Certificates',    href: '#' },
    { label: 'Privacy Portal',  href: '#' },
    { label: 'Cookie Policy',   href: '#' },
    { label: 'Press Enquiries', href: '#' },
  ];

  /* ══════════════════════════════════════════
     TEMPLATE BUILDER — generates HTML from data
  ══════════════════════════════════════════ */
  function buildDesktopCols () {
    return NAV_COLUMNS.map(col => `
      <div class="col ${col.links.length === 0 ? 'col-linkedin' : ''}">
        <span class="col-heading">${col.heading}</span>
        ${col.links.length ? `
          <div class="col-links">
            ${col.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
          </div>` : ''}
      </div>
    `).join('');
  }

  function buildMobileAccordion () {
    return NAV_COLUMNS.map(col => {
      // Columns with no links become a static labelled row
      if (col.links.length === 0) {
        return `
          <div class="acc-linkedin-row">
            <span class="acc-linkedin-label">${col.heading}</span>
          </div>`;
      }
      return `
        <div class="acc-item">
          <button class="acc-trigger" aria-expanded="false">
            <span class="acc-trigger-label">${col.heading}</span>
            <span class="acc-icon" aria-hidden="true">+</span>
          </button>
          <div class="acc-panel" role="region">
            <div class="acc-panel-inner">
              ${col.links.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
            </div>
          </div>
        </div>`;
    }).join('');
  }

  function buildBottomLinks () {
    return BOTTOM_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('');
  }

  /* ══════════════════════════════════════════
     SHADOW DOM TEMPLATE
  ══════════════════════════════════════════ */
  const tpl = document.createElement('template');

  tpl.innerHTML = /* html */`
  <style>

    @import url('https://fonts.cdnfonts.com/css/circular-std');

    :host {
      display: block;
      font-family: 'Circular Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #ffffff;
      line-height: 1;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    a   { text-decoration: none; color: inherit; }
    ul  { list-style: none; }

    /* ── Shell ── */
    .shell { display: flex; flex-direction: column; }
    .nav-desktop { order: 1; }
    .nav-mobile  { order: 2; }
    .wave-wrap   { order: 3; }
    .bottom-bar  { order: 4; }

    /* ── Desktop Grid ── */
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
      font-size: 17px;
      font-weight: 400;
      color: #c2c3c4;
      line-height: 1.45;
      display: block;
      transition: color 0.18s ease;
    }

    .col-links a:hover { color: #ffffff; }

    .col-linkedin {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    /* ── Wave ── */
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

    /* ── Bottom Bar ── */
    .bottom-bar {
      background: #061a35;
      padding: 40px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 32px;
    }

    .brand-block {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      max-width: 420px;
    }

    .logo-placeholder {
      width: 110px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .logo-placeholder img {
      width: 110px;
      height: 44px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .brand-tagline {
      font-size: 13px;
      font-weight: 400;
      color: #8da0bd;
      line-height: 1.65;
      padding-top: 3px;
    }

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

    /* ── Mobile Accordion ── */
    .nav-mobile {
      display: none;
      background: #080d1b;
    }

    .acc-item {
      border-bottom: 1px solid rgba(255,255,255,0.09);
    }

    .acc-item:first-child {
      border-top: 1px solid rgba(255,255,255,0.09);
    }

    .acc-trigger {
      appearance: none;
      -webkit-appearance: none;
      background: none;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height: 56px;
      padding: 0 22px;
      gap: 16px;
      cursor: pointer;
      font-family: 'Circular Std', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.01em;
      text-align: left;
      line-height: 1.3;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      transition: background 0.15s ease;
    }

    .acc-trigger:active { background: rgba(255,255,255,0.05); }

    .acc-trigger-label { flex: 1 1 0; min-width: 0; }

    .acc-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      flex-shrink: 0;
      flex-grow: 0;
      font-size: 18px;
      font-weight: 300;
      line-height: 1;
      color: #ffffff;
      transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), color 0.2s ease;
    }

    .acc-item.acc-open .acc-icon { transform: rotate(45deg); }

    .acc-panel {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition:
        max-height 0.36s cubic-bezier(0.4,0,0.2,1),
        opacity    0.24s ease;
    }

    .acc-item.acc-open .acc-panel { max-height: 500px; opacity: 1; }

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
      min-height: 28px;
      display: flex;
      align-items: center;
      transition: color 0.18s ease;
    }

    .acc-panel-inner a:hover { color: #ffffff; }

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

    /* ── Responsive ── */
    @media (max-width: 1100px) {
      .nav-desktop {
        grid-template-columns: repeat(3, 1fr);
        padding: 48px 40px 40px;
      }
    }

    @media (max-width: 720px) {
      .nav-desktop { display: none; }
      .nav-mobile  { display: block; order: 1; padding-top: 52px; }
      .wave-wrap   { order: 2; }
      .bottom-bar  { order: 3; }

      .wave-wrap svg { height: 50px; }

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

      .bottom-nav { align-items: flex-start; width: 100%; }
      .bottom-links { justify-content: flex-start; gap: 10px 16px; }
      .copyright { text-align: left; }
    }

    @media (max-width: 380px) {
      .acc-trigger      { font-size: 13px; padding: 0 16px; }
      .acc-panel-inner  { padding: 6px 16px 20px 16px; }
      .acc-linkedin-row { padding: 0 16px; }
      .bottom-bar       { padding: 28px 16px 24px; }
    }

  </style>

  <div class="shell">

    <!-- Desktop nav — built from NAV_COLUMNS data -->
    <nav class="nav-desktop" aria-label="Footer Navigation">
      ${buildDesktopCols()}
    </nav>

    <!-- Wave divider -->
    <div class="wave-wrap" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,40 C360,90 1080,0 1440,50 L1440,80 L0,80 Z" fill="#061a35"/>
      </svg>
    </div>

    <!-- Bottom bar -->
    <section class="bottom-bar">
      <div class="brand-block">
        <div class="logo-placeholder">
          <img src="thumbnails/logo.png" alt="Cronos IT"/>
        </div>
        <p class="brand-tagline">
          Operating across 30+ countries, Cronos IT is a leader in enterprise technology solutions and digital transformation.
        </p>
      </div>
      <div class="bottom-nav">
        <nav class="bottom-links" aria-label="Footer Quick Links">
          ${buildBottomLinks()}
        </nav>
        <p class="copyright">&copy; Copyright 2026, Cronos IT. All rights are reserved</p>
      </div>
    </section>

    <!-- Mobile accordion nav — built from the same NAV_COLUMNS data -->
    <nav class="nav-mobile" aria-label="Footer Navigation">
      ${buildMobileAccordion()}
    </nav>

  </div>
  `;

  /* ══════════════════════════════════════════
     WEB COMPONENT
  ══════════════════════════════════════════ */
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