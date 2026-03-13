// File: header.js
// =============================================
// CRONOS HEADER — SINGLE SOURCE OF TRUTH
// =============================================
// To edit navigation: update NAV_CONFIG below.
// All desktop + mobile menus are generated automatically.
// =============================================

class CronosHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // =============================================
    // ✏️  EDIT YOUR NAVIGATION HERE
    // =============================================
    // Each item is either:
    //   { label, href }                  — plain link
    //   { label, megamenu: [...groups] } — has a mega menu
    //
    // Each group:
    //   { heading, tagline?, icon?, mobileBtn?, mobileBtnHref?, links: [{label, href}] }
    //   If you don't want a heading, omit it.
    //   icon is a path to an image used as the group's thumbnail icon.
    // =============================================
    get NAV_CONFIG() {
        return [
            // ── Plans (replaces Pricing) ──────────────────────────────────
            {
                label: 'Plans',
                megamenu: [
                    {
                        heading: 'Business Plans',
                        tagline: 'Flexible pricing for every team',
                        icon: 'thumbnails/04 (2).png',
                        links: [
                            { label: 'Starter',        href: 'plans-starter.html' },
                            { label: 'Professional',   href: 'plans-pro.html' },
                            { label: 'Enterprise',     href: 'plans-enterprise.html' },
                            { label: 'Custom Quote',   href: 'quote.html' },
                        ]
                    },
                    {
                        heading: 'Compare & Save',
                        links: [
                            { label: 'Feature Comparison',  href: 'compare.html' },
                            { label: 'Annual vs Monthly',   href: 'billing.html' },
                            { label: 'Volume Discounts',    href: 'discounts.html' },
                            { label: 'Non-profit Pricing',  href: 'nonprofit.html' },
                        ]
                    }
                ]
            },

            // ── Finance (replaces Crypto) ─────────────────────────────────
            {
                label: 'Finance',
                megamenu: [
                    {
                        heading: 'Markets',
                        tagline: 'Live data & analytics',
                        icon: 'thumbnails/04 (2).png',
                        links: [
                            { label: 'Market Overview',    href: 'market-overview.html' },
                            { label: 'Live Price Tracker', href: 'price-tracker.html' },
                            { label: 'Portfolio Manager',  href: 'portfolio.html' },
                            { label: 'Risk Calculator',    href: 'risk-calc.html' },
                        ]
                    },
                    {
                        heading: 'Crypto & Web3',
                        tagline: 'Blockchain-native tools',
                        links: [
                            { label: 'DeFi Explorer',      href: 'defi.html' },
                            { label: 'NFT Marketplace',    href: 'nft.html' },
                            { label: 'Token Swap',         href: 'swap.html' },
                            { label: 'Staking & Yield',    href: 'staking.html' },
                        ]
                    },
                    {
                        heading: 'Insights',
                        links: [
                            { label: 'Research Reports',   href: 'research.html' },
                            { label: 'Market Signals',     href: 'signals.html' },
                            { label: 'Liquidity Converter',href: 'liquidity.html' },
                        ]
                    }
                ]
            },

            // ── Solutions ─────────────────────────────────────────────────
            {
                label: 'Solutions',
                href: 'page.html',
                megamenu: [
                    {
                        heading: 'Software Development',
                        tagline: 'Custom apps & platforms',
                        icon: 'thumbnails/04 (2).png',
                        mobileBtn: 'Start Project',
                        mobileBtnHref: 'index.html',
                        links: [
                            { label: 'AI & Workflow Automation',         href: 'mobile-applications.html' },
                            { label: 'Mobile & Web Applications',        href: 'mobile-applications.html' },
                            { label: 'E-commerce',                       href: 'e-commerce.html' },
                            { label: 'Blockchain & Web3',                href: 'blockchain-and-web3.html' },
                            { label: 'Database Engineering & Management',href: 'database-engineering.html' },
                        ]
                    },
                    {
                        heading: 'IT Infrastructure',
                        tagline: 'Reliable systems & support',
                        icon: 'thumbnails/04 (2).png',
                        mobileBtn: 'Learn About IT',
                        mobileBtnHref: 'index.html',
                        links: [
                            { label: 'Managed IT Services & Helpdesk', href: 'managed-it-services.html' },
                            { label: 'IT Consulting',                   href: 'it-consulting.html' },
                            { label: 'Cybersecurity',                   href: 'cybersecurity.html' },
                            { label: 'Cloud Infrastructure',            href: 'cloud-infrastructure.html' },
                            { label: 'Data Center & Storage',           href: 'data-center.html' },
                        ]
                    },
                    {
                        heading: 'Marketing & Creative Studio',
                        tagline: 'Creative content & design',
                        icon: 'thumbnails/04 (2).png',
                        mobileBtn: 'Explore Marketing',
                        mobileBtnHref: 'index.html',
                        links: [
                            { label: 'Digital Marketing',   href: 'digital-marketing.html' },
                            { label: 'Graphic Design',      href: 'graphic-design.html' },
                            { label: 'Content Management',  href: 'content-management.html' },
                            { label: 'Advertising',         href: 'advertising.html' },
                        ]
                    }
                ]
            },

            // ── Discover ──────────────────────────────────────────────────
            {
                label: 'Discover',
                megamenu: [
                    {
                        heading: 'Cronos',
                        links: [
                            { label: 'About Us',                href: 'about.html' },
                            { label: 'Roadmap',                 href: 'roadmap.html' },
                            { label: 'Innovations',             href: 'page.html' },
                            { label: 'Careers',                 href: 'careers.html' },
                            { label: 'Partners',                href: 'partners.html' },
                            { label: 'Licenses & Registrations',href: 'licenses-and-registrations.html' },
                        ]
                    },
                    {
                        heading: 'Resources',
                        links: [
                            { label: 'Blog',     href: 'page.html' },
                            { label: 'eBooks',   href: 'page.html' },
                            { label: 'Podcasts', href: 'page.html' },
                            { label: 'Webinars', href: 'page.html' },
                        ]
                    },
                    {
                        heading: 'Connect',
                        links: [
                            { label: 'X', href: 'page.html' },
                            { label: 'Facebook',    href: 'page.html' },
                            { label: 'LinkedIn',    href: '#' },
                            { label: 'YouTube',     href: '#' },
                            { label: 'GitHub',      href: '#' },
                        ]
                    }
                ]
            }
        ];
    }

    // =============================================
    // ✏️  EDIT ACTION BUTTONS HERE
    // =============================================
    get ACTION_BUTTONS() {
        return [
            { label: 'Get a quote', href: 'quote.html', style: 'secondary' },
            { label: 'Contact us',  href: 'form.html',  style: 'primary' },
        ];
    }

    // =============================================
    // ✏️  EDIT LOGO HERE
    // =============================================
    get LOGO() {
        return {
            src: 'thumbnails/mock.png',
            alt: 'Cronos Logo',
            href: 'index.html',
        };
    }

    // =============================================
    // ✏️  EDIT QR CODE DROPDOWN HERE
    // =============================================
    get QR_DROPDOWN() {
        return {
            imageSrc: 'thumbnails/frame.jpg',
            imageAlt: 'QR Code',
            label: 'Contact Sales',
        };
    }

    // ─────────────────────────────────────────────
    // Internal helpers — no need to edit below
    // ─────────────────────────────────────────────

    _menuId(label) {
        return label.toLowerCase().replace(/\s+/g, '-');
    }

    _buildGroupCard(group, isMobile) {
        const hasThumbnail = group.icon;
        const hasHeading   = group.heading;

        let headingHtml = '';
        if (hasHeading) {
            if (hasThumbnail) {
                headingHtml = `
                    <h3>
                        <img src="${group.icon}" alt="${group.heading} Icon" class="cronos-menu-group-img-icon">
                        <span class="cronos-menu-group-text-container">
                            ${group.heading}
                            ${group.tagline ? `<span class="cronos-menu-group-tagline">${group.tagline}</span>` : ''}
                        </span>
                    </h3>`;
            } else {
                headingHtml = `<h3>${group.heading}</h3>`;
            }
        }

        const mobileBtnHtml = (isMobile && group.mobileBtn) ? `<a class="cronos-mobile-group-btn" href="${group.mobileBtnHref || '#'}">${group.mobileBtn}</a>` : '';

        const linksHtml = group.links.map(l => `
            <li><a href="${l.href}"><span class="cronos-mega-menu-link-title">${l.label}</span></a></li>
        `).join('');

        return `
            <div class="cronos-menu-group-card">
                ${headingHtml}
                ${mobileBtnHtml}
                <ul class="cronos-mega-menu-group-list">${linksHtml}</ul>
            </div>`;
    }

    _buildDesktopMegaMenuPanels() {
        return this.NAV_CONFIG
            .filter(item => item.megamenu)
            .map(item => {
                const id = this._menuId(item.label);
                const cols = item.megamenu.length;
                const groups = item.megamenu.map(g => this._buildGroupCard(g, false)).join('');
                return `
                    <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="${id}" data-cronos-cols="${cols}">
                        <div class="cronos-megamenu-grid cronos-megamenu-cols-${cols}">
                            ${groups}
                        </div>
                    </div>`;
            }).join('');
    }

    _buildMobileNavList() {
        const chevronRight = `<svg class="cronos-mobile-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        const downIcon    = `<svg class="cronos-desktop-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

        return this.NAV_CONFIG.map(item => {
            if (!item.megamenu) {
                return `<li><a href="${item.href || '#'}" class="cronos-custom-nav-link">${item.label}</a></li>`;
            }

            const id = this._menuId(item.label);
            const groups = item.megamenu.map(g => this._buildGroupCard(g, true)).join('');

            return `
                <li class="cronos-custom-nav-item--has-megamenu">
                    <a href="#" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="${id}">
                        ${item.label}
                        ${downIcon}
                        ${chevronRight}
                    </a>
                    <div class="cronos-mega-menu-container">
                        <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="${id}">
                            <div class="cronos-megamenu-grid cronos-megamenu-cols-1">
                                ${groups}
                            </div>
                        </div>
                    </div>
                </li>`;
        }).join('');
    }

    _buildActionButtons() {
        return this.ACTION_BUTTONS.map(btn => {
            const cls = btn.style === 'primary' ? 'cronos-header-action-btn' : 'cronos-header-secondary-btn';
            return `<a href="${btn.href}" class="${cls}">${btn.label}</a>`;
        }).join('');
    }

    connectedCallback() {
        this.render();
        this.initScripts();
    }

    render() {
        const logo = this.LOGO;
        const qr   = this.QR_DROPDOWN;

        this.shadowRoot.innerHTML = `
        <style>
        
        @font-face { font-family:'Circular Std'; src:url('fonts/CircularStd-Book.woff2') format('woff2'),url('fonts/CircularStd-Book.woff') format('woff'); font-weight:400; font-style:normal; font-display:swap; }
        @font-face { font-family:'Circular Std'; src:url('fonts/CircularStd-BookItalic.woff2') format('woff2'),url('fonts/CircularStd-BookItalic.woff') format('woff'); font-weight:400; font-style:italic; font-display:swap; }
        @font-face { font-family:'Circular Std'; src:url('fonts/CircularStd-Medium.woff2') format('woff2'),url('fonts/CircularStd-Medium.woff') format('woff'); font-weight:500; font-style:normal; font-display:swap; }
        @font-face { font-family:'Circular Std'; src:url('fonts/CircularStd-Bold.woff2') format('woff2'),url('fonts/CircularStd-Bold.woff') format('woff'); font-weight:600; font-style:normal; font-display:swap; }
        @font-face { font-family:'Circular Std'; src:url('fonts/CircularStd-Black.woff2') format('woff2'),url('fonts/CircularStd-Black.woff') format('woff'); font-weight:800; font-style:normal; font-display:swap; }

        /* =============================================
           CRONOS HEADER — SHADOW DOM STYLES
           ============================================= */

        :host {
            /* ── Palette ── */
            --cronos-color-header-bg:    #080d1b;
            --cronos-color-accent:       #0091ff;
            --cronos-color-text-light:   #fff;
            --cronos-color-text-muted:   #A0A9BE;
            --cronos-color-menu-bg:      #080d1b;
            --cronos-color-menu-border:  rgba(0, 145, 255, 0.2);

            /* ── Sizing ── */
            --cronos-header-height:       55px;
            --cronos-content-max-width:   1420px;

            display: block;
            font-family: 'Circular Std', system-ui, -apple-system, sans-serif;
        }

        * { box-sizing: border-box; }

        /* ── Wrapper ────────────────────────────────── */
        .cronos-header-wrapper {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            z-index: 1000;
            background-color: var(--cronos-color-header-bg);
            line-height: normal;
        }

        /* ── Header bar ─────────────────────────────── */
        .cronos-custom-header {
            height: var(--cronos-header-height);
            display: flex;
            align-items: center;
        }

        .cronos-custom-header-container {
            max-width: var(--cronos-content-max-width);
            width: 100%;
            margin: 0 auto;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* ── Logo ───────────────────────────────────── */
        .cronos-custom-logo-text img {
            height: 30px;
            vertical-align: middle;
        }

        .cronos-custom-logo-text { color: var(--cronos-color-text-light); transition: color 0.3s; }
        .cronos-custom-logo-text:hover { color: var(--cronos-color-accent); }

        /* ── Desktop nav ─────────────────────────────── */
        .cronos-custom-main-nav {
            flex-grow: 1;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .cronos-custom-nav-list {
            display: flex;
            list-style: none;
            margin: 0; padding: 0;
            align-items: center;
        }

        .cronos-custom-nav-list li {
            margin-left: 30px;
            position: relative;
        }

        .cronos-custom-nav-link {
            text-decoration: none;
            color: #fff;
            font-weight: 400;
            padding: 10px 0;
            display: flex;
            font-size: 0.89rem;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
        }

        .cronos-custom-nav-link:hover { color: var(--cronos-color-text-muted); }

        /* Down-arrow icon — desktop: hidden. Mobile: revealed via media query below */
        .cronos-desktop-link-icon {
            display: none;
        }

        /* ── Action buttons ──────────────────────────── */
        .cronos-header-action-buttons {
            display: flex;
            align-items: center;
        }

        .cronos-header-action-btn {
            background: #0077cc;
            color: #f7f9fa;
            border: none;
            padding: 9px 15px;
            border-radius: 50px;
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            margin-left: 10px;
            text-decoration: none;
            font-family: inherit;
            white-space: nowrap;
        }
        .cronos-header-action-btn:hover { background-color: #0081ff; }

        .cronos-header-secondary-btn {
            background-color: #62b8fa32;
            color: #95d1ff;
            border: none;
            padding: 9px 15px;
            border-radius: 50px;
            font-weight: 400;
            font-size: 16px;
            cursor: pointer;
            margin-left: 10px;
            text-decoration: none;
            font-family: inherit;
            white-space: nowrap;
        }
        .cronos-header-secondary-btn:hover { background-color: #4a4b6b; }

        /* ── QR Dropdown ─────────────────────────────── */
        .cronos-qr-dropdown-trigger {
            position: relative;
            margin-left: 10px;
            width: 40px; height: 40px;
            border-radius: 50%;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: background-color 0.2s;
            color: var(--cronos-color-text-light);
            border: 1px solid rgba(255,255,255,0.1);
        }
        .cronos-qr-dropdown-trigger:hover { background-color: #2b294a; }

        .cronos-qr-dropdown-trigger svg { width: 25px; height: 25px; }

        .cronos-qr-dropdown-content {
            position: absolute;
            top: calc(100% + 10px);
            right: 0;
            background-color: #080d1b;
            border-radius: 15px;
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 120px;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-10px);
            transition: visibility 0.2s, opacity 0.2s, transform 0.2s;
            z-index: 100;
        }
        .cronos-qr-dropdown-content.show { visibility: visible; opacity: 1; transform: translateY(0); }

        .cronos-qr-dropdown-content img {
            width: 100px; height: 100px;
            background-color: #fff;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .cronos-qr-dropdown-content p {
            color: var(--cronos-color-text-light);
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            margin: 0;
            line-height: 1.4;
        }

        /* =============================================
           DESKTOP MEGA MENU
           ============================================= */

        /* The full-width overlay strip — hidden until a panel is active */
        .cronos-desktop-mega-menu {
            position: absolute;
            top: var(--cronos-header-height);
            left: 0;
            width: 100%;
            background-color: var(--cronos-color-menu-bg);
            visibility: hidden;
            opacity: 0;
            transform: translateY(-10px);
            transition: visibility 0s, opacity 0s, transform 0s;
        }

        .cronos-header-wrapper.cronos-mega-menu-open .cronos-desktop-mega-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }

        /* Desktop panel: full-width, no auto-centering — JS aligns the grid */
        .cronos-desktop-mega-menu .cronos-mega-menu-panel {
            display: none;
            width: 100%;
            padding: 18px 0 40px;
        }

        .cronos-desktop-mega-menu .cronos-mega-menu-panel.active { display: block; }

        /* Mobile subpanel containers inside <li> must be invisible on desktop */
        .cronos-custom-nav-item--has-megamenu .cronos-mega-menu-container {
            display: none;
        }

        /* The grid inside desktop panels gets its margin-left set by JS */
        .cronos-desktop-mega-menu .cronos-megamenu-grid {
            transition: none;
        }

        /* ── Grid layouts (auto-sized columns) ───────── */
        .cronos-megamenu-grid {
            display: grid;
            gap: 40px;
            justify-content: start;
        }
        .cronos-megamenu-cols-1 { grid-template-columns: 250px; }
        .cronos-megamenu-cols-2 { grid-template-columns: repeat(2, 250px); }
        .cronos-megamenu-cols-3 { grid-template-columns: repeat(3, 250px); }
        .cronos-megamenu-cols-4 { grid-template-columns: repeat(4, 250px); }

        /* ── Group card ──────────────────────────────── */
        .cronos-menu-group-card {
            padding-top: 10px;
            padding-bottom: 2.5rem;
        }

        .cronos-menu-group-card h3 {
            font-size: 14px;
            font-weight: 500;
            margin: 0 0 25px;
            cursor: default;
            display: flex;
            align-items: center;
            color: var(--cronos-color-text-muted); white-space: nowrap;
        }

        .cronos-menu-group-img-icon {
            width: auto; height: 40px;
            margin-right: 12px;
            flex-shrink: 0;
            border-radius: 11px;
        }

        .cronos-menu-group-text-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: #fff;
        }

        .cronos-menu-group-tagline {
            font-size: 14px;
            font-weight: 400;
            color: var(--cronos-color-text-muted);
            margin-top: 5px;
        }

        .cronos-mega-menu-group-list { list-style: none; padding: 0; margin: 0; }

        .cronos-mega-menu-group-list a {
            display: block;
            margin: 7px 0;
            padding: 2px 0;
            letter-spacing: -0.02em;
            font-size: 19px;
            font-weight: 500;
            color: var(--cronos-color-text-light);
            text-decoration: none;
        }
        .cronos-mega-menu-group-list a:hover { color: #9cd4ff; }

        .cronos-mega-menu-link-title {
            font-size: inherit;
            font-weight: inherit;
            color: inherit;
        }

        /* ── Mobile group CTA button (desktop: hidden) ── */
        .cronos-mobile-group-btn { display: none; }

        /* =============================================
           MOBILE TOGGLE & BACK BUTTON
           ============================================= */

        .cronos-mobile-dropdown-icon { display: none; transition: transform 0.3s; }

        .cronos-mobile-toggle {
            display: none;
            background: none;
            border: none;
            width: 30px; height: 24px;
            cursor: pointer;
            padding: 0;
            position: relative;
            z-index: 1010;
        }
        .cronos-mobile-toggle span {
            display: block;
            height: 2px; width: 100%;
            background-color: var(--cronos-color-text-light);
            margin: 6px 0;
            transition: all 0.3s;
        }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(2) { opacity: 0; }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        /* Desktop: back button must not appear */
        @media (min-width: 1025px) {
            .cronos-header-back-btn { display: none !important; }
            .cronos-custom-logo-container { display: block; }
        }

        /* =============================================
           MOBILE OVERRIDES  (≤ 1024px)
           ============================================= */
        @media (max-width: 1024px) {
            .cronos-custom-header-container { padding: 0 20px; }

            .cronos-mobile-toggle { display: block; }

            .cronos-custom-main-nav {
                position: fixed;
                top: var(--cronos-header-height);
                left: 0;
                width: 100%;
                height: calc(100vh - var(--cronos-header-height));
                background-color: var(--cronos-color-header-bg);
                overflow-y: auto;
                overflow-x: hidden;
                padding: 20px 0;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                display: block;
                z-index: 900;
            }
            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-custom-main-nav { transform: translateX(0); }

            .cronos-custom-nav-list {
                flex-direction: column;
                align-items: flex-start;
                padding: 0 20px;
                margin-left: 0;
            }
            .cronos-custom-nav-list li { margin: 0; width: 100%; position: static; }

            .cronos-custom-nav-link {
                padding: 15px 0;
                font-size: 1.1rem;
                width: 100%;
                justify-content: space-between;
                gap: 0;
            }

            /* Hide desktop chevron on mobile */
            .cronos-desktop-link-icon { display: none; }

            /* Show right-arrow on mobile */
            .cronos-mobile-dropdown-icon { display: inline-block; }
            .cronos-custom-nav-item--has-megamenu.active .cronos-custom-nav-link .cronos-mobile-dropdown-icon { transform: none; }

            /* Mobile action buttons */
            .cronos-header-action-buttons {
                flex-direction: column;
                width: 100%;
                padding: 0 20px;
                margin-top: 20px;
            }
            .cronos-header-action-btn,
            .cronos-header-secondary-btn {
                width: 100%;
                margin: 10px 0 0 0;
                padding: 15px 20px;
                text-align: center;
                font-size: 19px;
            }

            /* QR trigger hidden on mobile */
            .cronos-qr-dropdown-trigger { display: none; }
            .cronos-qr-dropdown-content { display: none; }

            /* Mobile group CTA visible */
            .cronos-mobile-group-btn {
                display: inline-block;
                color: #fff;
                background-color: transparent;
                border: 1px solid rgba(255,255,255,0.2);
                padding: 7px 16px;
                border-radius: 50px;
                margin-bottom: 14px;
                font-weight: 500;
                font-size: 0.85rem;
                font-family: 'Circular Std', system-ui, sans-serif;
                text-decoration: none;
                cursor: pointer;
            }
            .cronos-mobile-group-btn:hover { border-color: var(--cronos-color-accent); color: var(--cronos-color-accent); }

            /* Mobile mega menu — slide-in sub-panel */
            .cronos-custom-nav-item--has-megamenu .cronos-mega-menu-container {
                display: block;
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background-color: var(--cronos-color-header-bg);
                transform: translateX(100%);
                transition: transform 0.3s ease;
                overflow-y: auto;
                z-index: 10;
                visibility: visible;
                opacity: 1;
                padding: 0;
            }

            .cronos-custom-main-nav.cronos-subpanel-open { overflow: hidden; }

            .cronos-custom-nav-item--has-megamenu.active .cronos-mega-menu-container {
                transform: translateX(0);
            }

            /* Mobile panel: single column */
            .cronos-mega-menu-panel {
                padding: 0 20px 40px;
                display: block;
            }
            .cronos-megamenu-grid {
                grid-template-columns: 1fr !important;
                gap: 0;
            }

            /* Hide the desktop mega menu strip on mobile */
            .cronos-desktop-mega-menu { display: none; }

            /* Mobile group card */
            .cronos-menu-group-card { padding: 0 0 25px; }
            .cronos-menu-group-card h3 {
                margin-top: 20px;
                margin-bottom: 14px;
                color: var(--cronos-color-text-muted);
                font-size: 14px;
                font-weight: 500;
            }
            .cronos-menu-group-card h3 .cronos-menu-group-text-container { font-size: 14px; font-weight: 500; }
            .cronos-menu-group-card h3 .cronos-menu-group-img-icon { height: 36px; border-radius: 9px; }

            .cronos-menu-group-tagline { display: block; font-size: 12px; color: var(--cronos-color-text-muted); margin-top: 2px; }

            .cronos-mega-menu-group-list a { margin: 0; padding: 5px 0; font-size: 19px; }
            .cronos-mega-menu-group-list li { border: none; }
            .cronos-mega-menu-group-list a:hover { background-color: transparent; color: var(--cronos-color-accent); }

            /* Logo container */
            .cronos-custom-logo-container {
                display: flex;
                align-items: center;
                height: var(--cronos-header-height);
            }

            /* Back button */
            .cronos-header-back-btn {
                display: none;
                align-items: center;
                justify-content: center;
                background: none;
                border: none;
                cursor: pointer;
                padding: 0;
                color: var(--cronos-color-text-light);
                height: var(--cronos-header-height);
            }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-custom-logo-link { display: none; }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-header-back-btn { display: flex; }

            .cronos-mobile-back-arrow-btn {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 34px; height: 34px;
                border-radius: 50%;
                border: 1px solid rgba(255,255,255,0.25);
                color: var(--cronos-color-text-light);
            }
        }
        </style>

        <div class="cronos-header-wrapper">

            <header class="cronos-custom-header">
                <div class="cronos-custom-header-container">

                    <div class="cronos-custom-logo-container">
                        <a href="${logo.href}" class="cronos-custom-logo-link cronos-custom-logo-text">
                            <img src="${logo.src}" alt="${logo.alt}">
                        </a>
                        <button class="cronos-header-back-btn" id="cronos-headerBackBtn" aria-label="Go back to menu">
                            <span class="cronos-mobile-back-arrow-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="15 18 9 12 15 6"/>
                                </svg>
                            </span>
                        </button>
                    </div>

                    <nav class="cronos-custom-main-nav">
                        <ul class="cronos-custom-nav-list">
                            ${this._buildMobileNavList()}
                        </ul>
                        <div class="cronos-header-action-buttons">
                            ${this._buildActionButtons()}
                            <div class="cronos-qr-dropdown-trigger" id="cronos-qrDropdownTrigger">
                                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#8fbffa" d="M2 1H1v8h2V3h6V1zm0 22H1v-8h2v6h6v2zM23 1v8h-2V3h-6V1zm0 21v1h-8v-2h6v-6h2z"/><path fill="#2859c5" d="M5 10v1h6V5H5zm4-1H7V7h2zm4 1v1h6V5h-6zm4-1h-2V7h2zM5 19v-6h6v6zm2-2h2v-2H7zm6 .5V19h6v-2h-4v-4h-2zm4-4.5v2h2v-2z"/></g></svg>
                                <div class="cronos-qr-dropdown-content" id="cronos-qrDropdownContent">
                                    <img src="${qr.imageSrc}" alt="${qr.imageAlt}">
                                    <p>${qr.label}</p>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <button class="cronos-mobile-toggle" id="cronos-mobileMenuToggle" aria-label="Toggle navigation menu">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </header>

            <!-- Desktop mega menu strip (outside nav, full-width) -->
            <div class="cronos-mega-menu-container cronos-desktop-mega-menu" id="cronos-desktopMegaMenu">
                ${this._buildDesktopMegaMenuPanels()}
            </div>

        </div>
        `;
    }

    initScripts() {
        const shadow                    = this.shadowRoot;
        const cronosHeaderWrapper       = shadow.querySelector('.cronos-header-wrapper');
        const cronosDesktopMegaMenu     = shadow.getElementById('cronos-desktopMegaMenu');
        const cronosMegaMenuTriggers    = shadow.querySelectorAll('[data-cronos-megamenu-trigger]');
        const cronosDesktopPanels       = cronosDesktopMegaMenu.querySelectorAll('.cronos-mega-menu-panel');
        const cronosMobileMenuToggle    = shadow.getElementById('cronos-mobileMenuToggle');
        const cronosQrDropdownTrigger   = shadow.getElementById('cronos-qrDropdownTrigger');
        const cronosQrDropdownContent   = shadow.getElementById('cronos-qrDropdownContent');
        const cronosHeaderWrapper2      = cronosHeaderWrapper; // alias for clarity
        const cronosBody                = document.body;

        let cronosCloseTimer   = null;
        let cronosQrCloseTimer = null;

        // =============================================
        // MEGA MENU ALIGNMENT
        // Measures the trigger's left edge relative to
        // the header wrapper (the actual containing block
        // for the desktop mega menu strip) and applies
        // that as margin-left on the inner grid.
        // Logo-size independent — purely coordinate math.
        // =============================================
        // Always align ALL panels to the first nav link's left edge ("Plans")
        const firstNavLink = shadow.querySelector('.cronos-custom-nav-list li:first-child .cronos-custom-nav-link');

        const alignPanel = (trigger, panel) => {
            if (!panel) return;
            const grid = panel.querySelector('.cronos-megamenu-grid');
            if (!grid) return;

            const anchorRect = (firstNavLink || trigger).getBoundingClientRect();
            const wrapperRect = cronosHeaderWrapper.getBoundingClientRect();

            const offset = anchorRect.left - wrapperRect.left;
            grid.style.marginLeft = Math.max(0, offset) + 'px';
        };

        // =============================================
        // DESKTOP MEGA MENU LOGIC
        // =============================================
        const setActiveMenu = (trigger, panel) => {
            cronosMegaMenuTriggers.forEach(t => t.classList.remove('active'));
            cronosDesktopPanels.forEach(p => {
                p.classList.remove('active');
                const g = p.querySelector('.cronos-megamenu-grid');
                if (g) g.style.marginLeft = '';
            });

            if (trigger && panel) {
                trigger.classList.add('active');
                panel.classList.add('active');
                alignPanel(trigger, panel);
                cronosHeaderWrapper.classList.add('cronos-mega-menu-open');
            } else {
                cronosHeaderWrapper.classList.remove('cronos-mega-menu-open');
            }
        };

        const handleOpen = (trigger) => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosCloseTimer);
                const menuId    = trigger.getAttribute('data-cronos-megamenu-trigger');
                const panel     = cronosDesktopMegaMenu.querySelector(`[data-cronos-megamenu-panel="${menuId}"]`);
                setActiveMenu(trigger, panel);
                if (cronosQrDropdownContent.classList.contains('show')) hideQrDropdown();
            }
        };

        const handleClose = () => {
            if (window.innerWidth > 1024) {
                cronosCloseTimer = setTimeout(() => setActiveMenu(null, null), 150);
            }
        };

        cronosMegaMenuTriggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => handleOpen(trigger));
            trigger.parentElement.addEventListener('mouseleave', handleClose);
        });

        cronosDesktopMegaMenu.addEventListener('mouseenter', () => { if (window.innerWidth > 1024) clearTimeout(cronosCloseTimer); });
        cronosDesktopMegaMenu.addEventListener('mouseleave', handleClose);

        // Re-align on resize in case layout shifts
        window.addEventListener('resize', () => {
            const activePanel = cronosDesktopMegaMenu.querySelector('.cronos-mega-menu-panel.active');
            const activeTrigger = shadow.querySelector('[data-cronos-megamenu-trigger].active');
            if (activePanel) alignPanel(activeTrigger, activePanel);
        });

        // =============================================
        // QR CODE DROPDOWN LOGIC
        // =============================================
        const showQrDropdown = () => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosQrCloseTimer);
                cronosQrDropdownContent.classList.add('show');
                setActiveMenu(null, null);
            }
        };
        const hideQrDropdown = () => {
            if (window.innerWidth > 1024) {
                cronosQrCloseTimer = setTimeout(() => cronosQrDropdownContent.classList.remove('show'), 150);
            }
        };

        cronosQrDropdownTrigger.addEventListener('mouseenter', showQrDropdown);
        cronosQrDropdownTrigger.addEventListener('mouseleave', hideQrDropdown);
        cronosQrDropdownContent.addEventListener('mouseenter', showQrDropdown);
        cronosQrDropdownContent.addEventListener('mouseleave', hideQrDropdown);

        // =============================================
        // MOBILE MENU LOGIC
        // =============================================
        const mobileDropdownItems = shadow.querySelectorAll('.cronos-custom-nav-item--has-megamenu');
        const mobileMainNav       = shadow.querySelector('.cronos-custom-main-nav');
        const headerBackBtn       = shadow.getElementById('cronos-headerBackBtn');

        const openSubpanel = (item) => {
            item.classList.add('active');
            mobileMainNav.classList.add('cronos-subpanel-open');
            cronosHeaderWrapper.classList.add('cronos-subpanel-header-open');
        };
        const closeSubpanel = () => {
            mobileDropdownItems.forEach(i => i.classList.remove('active'));
            mobileMainNav.classList.remove('cronos-subpanel-open');
            cronosHeaderWrapper.classList.remove('cronos-subpanel-header-open');
        };

        headerBackBtn.addEventListener('click', (e) => { e.stopPropagation(); closeSubpanel(); });

        cronosMobileMenuToggle.addEventListener('click', () => {
            cronosHeaderWrapper.classList.toggle('cronos-mobile-menu-open');
            cronosBody.classList.toggle('cronos-mobile-menu-active');
            if (!cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                closeSubpanel();
                cronosQrDropdownContent.classList.remove('show');
            }
        });

        mobileDropdownItems.forEach(item => {
            const trigger = item.querySelector('.cronos-custom-nav-link');
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    mobileDropdownItems.forEach(other => { if (other !== item) other.classList.remove('active'); });
                    openSubpanel(item);
                    cronosQrDropdownContent.classList.remove('show');
                }
            });
        });

        // Close mobile menu when a plain link is clicked
        shadow.querySelectorAll('.cronos-custom-nav-list a').forEach(link => {
            if (!link.hasAttribute('data-cronos-megamenu-trigger') && !link.closest('.cronos-desktop-mega-menu')) {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 1024) {
                        cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                        cronosBody.classList.remove('cronos-mobile-menu-active');
                        cronosQrDropdownContent.classList.remove('show');
                    }
                });
            }
        });

        // Close QR dropdown on outside click
        document.addEventListener('click', (event) => {
            const path = event.composedPath();
            if (window.innerWidth > 1024 && !path.includes(cronosQrDropdownTrigger) && !path.includes(cronosQrDropdownContent)) {
                hideQrDropdown();
            }
        });

        // =============================================
        // RESIZE HANDLER
        // =============================================
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 1024) {
                    cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                    cronosBody.classList.remove('cronos-mobile-menu-active');
                    closeSubpanel();
                    setActiveMenu(null, null);
                } else {
                    cronosQrDropdownContent.classList.remove('show');
                }
            }, 250);
        });
    }
}

if (!customElements.get('cronos-header')) {
    customElements.define('cronos-header', CronosHeader);
}