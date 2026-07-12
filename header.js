// File: header.js

class CronosHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get SEARCH_INDEX() {
        return [
            { name: 'Artificial Intelligence Development',             href: 'mobile-applications.html#ai-development' },
            { name: 'Web Applications Frameworks',                     href: 'mobile-applications.html#web-dev' },
            { name: 'Managed IT Helpdesk Solutions',                   href: 'managed-it-services.html#helpdesk' },
            { name: 'Enterprise Service Configurator',                 href: 'calculator.html#pricing-calculator' },
            { name: 'Cybersecurity Threat Shield',                     href: 'cybersecurity.html#threat-protection' },
            { name: 'Cloud Infrastructure Nodes',                      href: 'cloud-infrastructure.html#cloud-nodes' },
            { name: 'Blockchain Integration & Web3',                   href: 'blockchain-and-web3.html#smart-contracts' },
            { name: 'Affiliate Program',                               href: 'affiliates.html#affiliate-program' },
            { name: 'Careers',                                         href: 'careers.html#jobs' },
            { name: 'Jobs',                                            href: 'careers.html#jobs' },
        ];
    }

    get QUICK_LINKS() {
        return [
            { label: 'Configure Architecture', href: 'calculator.html' },
            { label: 'System Roadmap', href: 'roadmap.html' },
            { label: 'Active Innovations', href: 'innovations.html' },
            { label: 'Cybersecurity Guard', href: 'cybersecurity.html' },
            { label: 'Open Source Repos', href: 'portfolio.html' }
        ];
    }

    get NAV_CONFIG() {
        return [
            { label: 'Businesses', i18nKey: 'nav-businesses', megamenu: [
                { heading: 'Level Up', tagline: 'Flexible pricing for every team', icon: 'thumbnails/04 (2).png', links: [
                    { label: 'Startups',       href: 'startups.html' },
                    { label: 'Professional',   href: 'professional.html' },
                    { label: 'Enterprise',     href: 'enterprise.html' },
                    { label: 'Marketplace',    href: 'marketplace.html', external: true }, 
                    { label: 'Schedule a Demo',  href: 'demo.html' },
                ]},
                { heading: 'Compare & Save', links: [
                    { label: 'Configure',  href: 'calculator.html' },
                    { label: 'Annual vs Monthly',   href: 'billing.html' },
                    { label: 'Archictecture & Scopes',  href: 'price.html' },
                ]},
                { heading: 'Support', links: [
                    { label: 'Customer Support',   href: 'billing.html' },
                    { label: 'FAQs',  href: 'faqs.html' },
                    { label: 'Contact Sales',  href: 'contact-sales.html' },
                    { label: 'Learn',  href: 'compare.html' },
                ]},
                { heading: 'Products', links: [
                    { label: 'Products',   href: 'products.html' },
                ]}
            ]},
            { label: 'Individuals', i18nKey: 'nav-individuals', megamenu: [
                { heading: 'Build', links: [
                    { label: 'Courses',    href: 'console.html' },
                    { label: 'Open Source Projects',  href: 'portfolio.html' },
                    { label: 'Coding for Social Impact (Non-profit)',  href: 'coding.html' },
                ]},
                { heading: 'Programs', links: [
                    { label: 'Affiliate Program',      href: 'affiliates.html' },
                    { label: 'Content Creator Program',    href: 'content-creator.html' },
                ]},
                { heading: 'Engage', links: [
                    { label: 'Community',      href: 'community.html' },
                ]},
            ]},
            { label: 'Solutions', i18nKey: 'nav-solutions', href: 'page.html', megamenu: [
                { heading: 'Software Development', tagline: 'Custom apps & platforms', icon: 'thumbnails/04 (2).png', mobileBtn: 'Learn more', mobileBtnHref: 'index.html', links: [
                    { label: 'Artificial Intelligence',         href: 'ai.html' },
                    { label: 'Web Development',                 href: 'web-applications.html' },
                    { label: 'E-commerce',                      href: 'e-commerce.html' },
                    { label: 'Blockchain',                      href: 'blockchain-and-web3.html' },
                    { label: 'Databases',                       href: 'database-engineering.html' },
                ]},
                { heading: 'IT Services & Infrastructure', tagline: 'Reliable systems & support', icon: 'thumbnails/04 (2).png', mobileBtn: 'Learn more', mobileBtnHref: 'index.html', links: [
                    { label: 'Managed IT Services & Helpdesk',   href: 'managed-it-services.html' },
                    { label: 'IT Consulting',                    href: 'it-consulting.html' },
                    { label: 'Cybersecurity',                    href: 'cybersecurity.html' },
                    { label: 'Cloud Services',                   href: 'cloud-infrastructure.html' },
                    { label: 'Data Center',                      href: 'data-center.html' },
                ]},
                { heading: 'Training & Consulting', tagline: 'Protect your business & data', icon: 'thumbnails/04 (2).png', mobileBtn: 'Learn more', mobileBtnHref: 'index.html', links: [
                    { label: 'Cybersecurity Training',           href: 'cybersecurity.html' },
                    { label: 'AI Training',                     href: 'graphic-design.html' },
                    { label: 'Digital Skills Training',          href: 'content-management.html' },
                ]},
                { heading: 'Advertising & Marketing', tagline: 'Creative content & design', icon: 'thumbnails/04 (2).png', mobileBtn: 'Learn more', mobileBtnHref: 'index.html', links: [
                    { label: 'Digital Marketing',   href: 'digital-marketing.html' },
                    { label: 'Graphic Design',      href: 'graphic-design.html' },
                    { label: 'Content Management',  href: 'content-management.html' },
                    { label: 'Advertising',         href: 'advertising.html' },
                ]}
            ]},
            { label: 'Discover', i18nKey: 'nav-discover', megamenu: [
                { heading: 'Croloft', links: [
                    { label: 'About Us',                href: 'about.html' },
                    { label: 'Roadmap',                 href: 'roadmap.html' },
                    { label: 'Innovations',             href: 'innovations.html' },
                    { label: 'Careers',                 href: 'careers.html' },
                    { label: 'Partners',                href: 'partners.html' },
                    { label: 'Facilities',              href: 'facilities.html' },
                    { label: 'Licenses & Registrations',href: 'licenses-and-registrations.html' },
                ]},
                { heading: 'Connect', links: [
                    { label: 'X', href: 'https://x.com/croloftofficial' },
                    { label: 'YouTube',     href: 'https://youtube.com/croloftofficial' },
                    { label: 'Facebook',    href: 'https://facebook.com/croloftofficial' },
                    { label: 'Instagram',     href: 'https://instagram.com/croloftofficial' },
                ]}
            ]}
        ];
    }

    get ACTION_BUTTONS() {
        return [
            { label: 'Log into console', href: 'login.html', style: 'secondary', id: 'cronos-loginTrigger', i18nKey: 'btn-login' },
            { label: 'Contact us',  href: 'form.html',  style: 'primary', i18nKey: 'btn-contact' },
        ];
    }

    get LOGO() {
        return { src: 'thumbnails/mock.png', alt: 'Cronos Logo', href: 'index.html' };
    }

    get QR_DROPDOWN() {
        return { imageSrc: 'thumbnails/frame.jpg', imageAlt: 'QR Code', label: 'Contact Sales' };
    }

    _menuId(label) { return label.toLowerCase().replace(/\s+/g, '-'); }

    _getMsg(key, fallback) {
        if (window.cronosTranslator && typeof window.cronosTranslator.getTranslation === 'function') {
            return window.cronosTranslator.getTranslation(key);
        }
        return fallback;
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

        const groupBtnHtml = (group.mobileBtn) ? `<a class="cronos-group-cta-btn" href="${group.mobileBtnHref || '#'}">${group.mobileBtn}</a>` : '';

        const linksHtml = group.links.map(l => {
            const target = l.external ? 'target="_blank"' : '';
            const icon = l.external ? '<span style="margin-left:5px; font-size:0.9em; vertical-align: middle;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M10 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V14M14 4H20M20 4V10M20 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>' : '';
            return `<li><a href="${l.href}" ${target}><span class="cronos-mega-menu-link-title">${l.label}${icon}</span></a></li>`;
        }).join('');

        return `
            <div class="cronos-menu-group-card">
                ${headingHtml}
                ${groupBtnHtml}
                <ul class="cronos-mega-menu-group-list">${linksHtml}</ul>
            </div>`;
    }

    _buildDesktopMegaMenuPanels() {
        let executionPanels = this.NAV_CONFIG
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

        const quickLinksHtml = this.QUICK_LINKS.map(q => `<li><a href="${q.href}"><span class="cronos-mega-menu-link-title">${q.label}</span></a></li>`).join('');
        const searchPanelHtml = `
            <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="search-engine-panel" data-cronos-cols="1">
                <div class="cronos-megamenu-grid cronos-megamenu-cols-1">
                    <div class="cronos-menu-group-card cronos-search-panel-card">
                        <div class="cronos-search-input-field-container">
                            <input type="text" id="cronos-desktopSearchField" class="cronos-search-control-input" placeholder="${this._getMsg('search-placeholder', 'Search parameters...')}">
                        </div>
                        <div class="cronos-search-live-dynamic-results-view hidden" id="cronos-desktopSearchResults"></div>
                        <div class="cronos-search-fallback-quicklinks" id="cronos-desktopSearchQuicklinks">
                            <h3 data-i18n="search-quick-links">${this._getMsg('search-quick-links', 'Quick Links')}</h3>
                            <ul class="cronos-mega-menu-group-list">${quickLinksHtml}</ul>
                        </div>
                    </div>
                </div>
            </div>`;

        return executionPanels + searchPanelHtml;
    }

    _buildMobileNavList() {
        const chevronRight = `<svg class="cronos-mobile-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        const downIcon    = `<svg class="cronos-desktop-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

        let listHtml = this.NAV_CONFIG.map(item => {
            if (!item.megamenu) {
                return `<li><a href="${item.href || '#'}" class="cronos-custom-nav-link" data-i18n="${item.i18nKey || ''}">${this._getMsg(item.i18nKey, item.label)}</a></li>`;
            }

            const id = this._menuId(item.label);
            const groups = item.megamenu.map(g => this._buildGroupCard(g, true)).join('');

            return `
                <li class="cronos-custom-nav-item--has-megamenu">
                    <a href="#" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="${id}">
                        <span class="cronos-nav-label-text" data-i18n="${item.i18nKey || ''}">${this._getMsg(item.i18nKey, item.label)}</span>
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

        // Mobile Language Row (behaving precisely like an inline subpanel trigger screen)
        const currentLangLabel = this._getMsg('lang-' + (localStorage.getItem('cronos_lang') || 'en'), 'Language');
        listHtml += `
            <li class="cronos-custom-nav-item--has-megamenu cronos-mobile-lang-drawer-item">
                <a href="#" class="cronos-custom-nav-link" data-cronos-megamenu-trigger="mobile-language-panel">
                    <span class="cronos-nav-label-text" style="display:flex; align-items:center; gap:8px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        <span>Language: <strong>${currentLangLabel}</strong></span>
                    </span>
                    ${chevronRight}
                </a>
                <div class="cronos-mega-menu-container">
                    <div class="cronos-mega-menu-panel" data-cronos-megamenu-panel="mobile-language-panel">
                        <div class="cronos-lang-search-wrapper" style="padding: 0 0 16px 0;">
                            <div class="cronos-lang-search-container">
                                <span class="cronos-lang-search-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </span>
                                <input type="text" id="cronos-mobileLangSearchInput" class="cronos-lang-search-input" placeholder="Search">
                            </div>
                        </div>
                        <div class="cronos-mobile-lang-panel-body" id="cronos-mobileLangPanelBody">
                            ${this._buildLangRowsHtml('cronos-mobile-lang-row')}
                        </div>
                    </div>
                </div>
            </li>`;

        return listHtml;
    }

    _buildMobileFullscreenSearchOverlay() {
        const quickLinksHtml = this.QUICK_LINKS.map(q => `<li><a href="${q.href}"><span class="cronos-mega-menu-link-title">${q.label}</span></a></li>`).join('');
        return `
            <div class="cronos-mobile-fullscreen-search-overlay" id="cronos-mobileSearchOverlay">
                <div class="cronos-mobile-overlay-header">
                    <button class="cronos-mobile-search-close" id="cronos-mobileSearchCloseBtn" aria-label="Close search overlay">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="cronos-mobile-overlay-body">
                    <div class="cronos-search-input-field-container">
                        <input type="text" id="cronos-mobileSearchField" class="cronos-search-control-input" placeholder="${this._getMsg('search-placeholder', 'Search parameters...')}">
                        <span class="cronos-mobile-search-embed-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </span>
                    </div>
                    <div class="cronos-search-live-dynamic-results-view hidden" id="cronos-mobileSearchResults"></div>
                    <div class="cronos-search-fallback-quicklinks" id="cronos-mobileSearchQuicklinks">
                        <h3 data-i18n="search-quick-links">${this._getMsg('search-quick-links', 'Quick Links')}</h3>
                        <ul class="cronos-mega-menu-group-list">${quickLinksHtml}</ul>
                    </div>
                </div>
            </div>`;
    }

    _buildActionButtons() {
        return this.ACTION_BUTTONS.map(btn => {
            const cls = btn.style === 'primary' ? 'cronos-header-action-btn' : 'cronos-header-secondary-btn';
            const idAttr = btn.id ? `id="${btn.id}"` : '';
            const hrefAttr = btn.id === 'cronos-loginTrigger' ? 'href="javascript:void(0)"' : `href="${btn.href}"`;
            return `<a ${hrefAttr} ${idAttr} class="${cls}" data-i18n="${btn.i18nKey || ''}">${this._getMsg(btn.i18nKey, btn.label)}</a>`;
        }).join('');
    }

    connectedCallback() {
        this.render();
        this.initScripts();
        this._langListener = () => {
            this.render();
            this.initScripts();
        };
        window.addEventListener('cronosLanguageChanged', this._langListener);
    }

    disconnectedCallback() {
        window.removeEventListener('cronosLanguageChanged', this._langListener);
    }

    render() {
        const logo = this.LOGO;
        const qr   = this.QR_DROPDOWN;

        this.shadowRoot.innerHTML = `
        <style>
    
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap');

        :host {
            --cronos-color-header-bg:    #080d1b;
            --cronos-color-accent:       #0091ff;
            --cronos-color-text-light:   #fff;
            --cronos-color-text-muted:   #A0A9BE;
            --cronos-color-menu-bg:      #080d1b;
            --cronos-color-menu-border:  rgba(0, 145, 255, 0.2);
            --cronos-header-height:       55px;
            --cronos-content-max-width:   1420px;
            display: block;
            font-family: 'Google Sans', system-ui, -apple-system, sans-serif;
        }

        * { box-sizing: border-box; }

        .cronos-header-wrapper {
            position: fixed;
            top: 0; left: 0;
            width: 100%;
            z-index: 1000;
            background-color: var(--cronos-color-header-bg);
            line-height: normal;
        }

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

        .cronos-custom-logo-text img { height: 30px; vertical-align: middle; }
        .cronos-custom-logo-text { color: var(--cronos-color-text-light); transition: color 0.3s; }
        .cronos-custom-logo-text:hover { color: var(--cronos-color-accent); }

        .cronos-custom-main-nav { flex-grow: 1; display: flex; justify-content: space-between; align-items: center; }
        .cronos-custom-nav-list { display: flex; list-style: none; margin: 0; padding: 0; align-items: center; }
        .cronos-custom-nav-list li { margin-left: 30px; position: relative; }
        .cronos-custom-nav-link {
            text-decoration: none; color: #fff; font-weight: 460; padding: 10px 0;
            display: flex; font-size: 0.87rem; align-items: center; cursor: pointer; white-space: nowrap;
        }
        .cronos-custom-nav-link:hover { color: var(--cronos-color-text-muted); }
        .cronos-desktop-link-icon { display: none; }

        .cronos-header-action-buttons { display: flex; align-items: center; position: relative; }
        .cronos-header-action-btn {
            background: #0077cc; color: #f7f9fa; border: none; padding: 9px 15px;
            border-radius: 50px; font-weight: 500; font-size: 14px; cursor: pointer;
            margin-left: 10px; text-decoration: none; font-family: inherit; white-space: nowrap;
        }
        .cronos-header-action-btn:hover { background-color: #0081ff; }

        .cronos-header-secondary-btn {
            background-color: #62b8fa32; color: #95d1ff; border: none; padding: 9px 15px;
            border-radius: 50px; font-weight: 500; font-size: 14px; cursor: pointer;
            margin-left: 10px; text-decoration: none; font-family: inherit; white-space: nowrap;
        }
        .cronos-header-secondary-btn:hover { background-color: #4a4b6b6d; }

        /* Desktop Trigger */
        .cronos-header-search-action-trigger {
            background: transparent; border: 2px solid rgb(35, 43, 57); padding: 0; margin-right: 8px; margin-left: 18px;
            cursor: pointer; color: var(--cronos-color-text-light); display: flex;
            align-items: center; justify-content: center; width: 34px; height: 34px;
            border-radius: 50%; transition: color 0.2s, background-color 0.2s;
        }
        .cronos-header-search-action-trigger:hover, .cronos-header-search-action-trigger.active {
            color: #fff; background-color: rgba(255, 255, 255, 0.05);
        }
        .cronos-header-search-action-trigger svg { width: 18px; height: 18px; color: #7e8da8; }

        .cronos-search-panel-card { width: 250px; }
        .cronos-search-input-field-container { width: 100%; position: relative; margin-bottom: 25px; }
        .cronos-search-control-input {
            width: 100%; background: transparent; border: none; border-bottom: 1px solid rgba(255, 255, 255, 0.25);
            padding: 8px 0; color: #fff; font-size: 16px; font-family: inherit; outline: none;
            transition: border-bottom-color 0.2s;
        }
        .cronos-search-control-input:focus { border-bottom-color: var(--cronos-color-accent); }
        .cronos-search-live-dynamic-results-view { width: 100%; display: flex; flex-direction: column; }
        .cronos-search-live-dynamic-results-view.hidden { display: none; }
        .cronos-search-fallback-quicklinks.hidden { display: none; }
        .cronos-search-prediction-row-item {
            display: block; padding: 8px 0; font-size: 17px; font-weight: 500;
            color: #fff; text-decoration: none; letter-spacing: -0.02em;
            transition: color 0.2s; 
        }
        .cronos-search-prediction-empty-notice { color: var(--cronos-color-text-muted); font-size: 14px; padding: 8px 0; }

        .cronos-qr-dropdown-trigger {
            position: relative; margin-left: 10px; width: 40px; height: 40px;
            border-radius: 50%; background-color: transparent; display: flex;
            align-items: center; justify-content: center; cursor: pointer;
            transition: background-color 0.2s; color: var(--cronos-color-text-light);
            border: 2px solid rgb(35, 43, 57)
        }
        .cronos-qr-dropdown-trigger:hover { background-color: #2b294a; }
        .cronos-qr-dropdown-trigger svg { width: 25px; height: 25px; }

        .cronos-qr-dropdown-content {
            position: absolute; top: calc(100% + 13px); right: 0;
            background-color: #080d1b; border-radius: 15px; padding: 10px 0;
            display: flex; flex-direction: column; align-items: center; width: 120px;
            visibility: hidden; opacity: 0; transform: translateY(-10px);
            transition: visibility 0.2s, opacity 0.2s, transform 0.2s; z-index: 100;
        }
        .cronos-qr-dropdown-content.show { visibility: visible; opacity: 1; transform: translateY(0); }
        .cronos-qr-dropdown-content img { width: 100px; height: 100px; background-color: #fff; padding: 10px; border-radius: 8px; margin-bottom: 15px; }
        .cronos-qr-dropdown-content p { color: var(--cronos-color-text-light); font-size: 14px; font-weight: 400; text-align: center; margin: 0; line-height: 1.4; }

        /* Desktop Language Trigger Style Button */
        .cronos-desktop-lang-button-trigger {
            position: relative; margin-left: 10px; width: 40px; height: 40px;
            border-radius: 50%; background-color: transparent; display: flex;
            align-items: center; justify-content: center; cursor: pointer;
            transition: background-color 0.2s; color: var(--cronos-color-text-light);
            border: 2px solid rgb(35, 43, 57)
        }
        .cronos-desktop-lang-button-trigger:hover { background-color: #2b294a; }
        .cronos-desktop-lang-button-trigger svg { width: 20px; height: 20px; color: #647487}

        .cronos-profile-dropdown {
            position: absolute; top: calc(100% + 13px); right: 140px; width: 320px;
            background-color: #0d1527; border-radius: 18px; padding: 24px;
            visibility: hidden; opacity: 0; transform: translateY(-10px);
            transition: visibility 0.2s, opacity 0.2s, transform 0.2s; z-index: 1100;
        }
        .cronos-profile-dropdown.show { visibility: visible; opacity: 1; transform: translateY(0); }
        .cronos-profile-close {
            position: absolute; top: 16px; right: 16px; background: none; border: none;
            color: var(--cronos-color-text-muted); cursor: pointer; padding: 4px; display: flex;
            align-items: center; justify-content: center; border-radius: 50%; transition: color 0.2s, background-color 0.2s;
        }
        .cronos-profile-close:hover { color: #fff; background-color: rgba(255, 255, 255, 0.1); }
        .cronos-profile-title { color: #fff; font-size: 1.28rem; font-weight: 500; margin: 0 0 12px 0; letter-spacing: -0.01em; }
        .cronos-profile-desc { color: var(--cronos-color-text-muted); font-size: 0.95rem; font-weight: 480; line-height: 1.5; margin: 0 0 24px 0; }
        .cronos-profile-actions { display: flex; gap: 12px; align-items: center; }
        .cronos-profile-btn-login {
            flex: 1; background: transparent; color: #fff; border: 1px solid rgba(255, 255, 255, 0.4);
            padding: 11px 16px; border-radius: 50px; font-size: 0.9rem; font-weight: 500;
            text-align: center; text-decoration: none; cursor: pointer; transition: border-color 0.2s, background-color 0.2s;
        }
        .cronos-profile-btn-login:hover { border-color: #fff; background-color: rgba(255, 255, 255, 0.05); }
        .cronos-profile-btn-create {
            flex: 1.2; background-color: #ebebeb; color: #080d1b; padding: 11px 16px;
            border-radius: 50px; font-size: 0.9rem; font-weight: 500; text-align: center;
            text-decoration: none; cursor: pointer; transition: background-color 0.2s, border-color 0.2s;
        }
        .cronos-profile-btn-create:hover { background-color: #e8e8e8; }

        .cronos-desktop-mega-menu {
            position: absolute; top: var(--cronos-header-height); left: 0; width: 100%;
            background-color: var(--cronos-color-menu-bg); visibility: hidden; opacity: 0;
            transform: translateY(-10px); transition: visibility 0s, opacity 0s, transform 0s;
        }
        .cronos-header-wrapper.cronos-mega-menu-open .cronos-desktop-mega-menu { visibility: visible; opacity: 1; transform: translateY(0); }
        .cronos-desktop-mega-menu .cronos-mega-menu-panel { display: none; width: 100%; padding: 18px 0 40px; }
        .cronos-desktop-mega-menu .cronos-mega-menu-panel.active { display: block; }
        .cronos-custom-nav-item--has-megamenu .cronos-mega-menu-container { display: none; }
        .cronos-desktop-mega-menu .cronos-megamenu-grid { transition: none; }

        .cronos-megamenu-grid { display: grid; gap: 40px; justify-content: start; }
        .cronos-megamenu-cols-1 { grid-template-columns: 250px; }
        .cronos-megamenu-cols-2 { grid-template-columns: repeat(2, 250px); }
        .cronos-megamenu-cols-3 { grid-template-columns: repeat(3, 250px); }
        .cronos-megamenu-cols-4 { grid-template-columns: repeat(4, 250px); }

        .cronos-menu-group-card { padding-top: 10px; padding-bottom: 2.5rem; }
        .cronos-menu-group-card h3 { font-size: 14px; font-weight: 500; margin: 0 0 25px; cursor: default; display: flex; align-items: center; color: var(--cronos-color-text-muted); white-space: nowrap; }
        .cronos-menu-group-img-icon { width: auto; height: 40px; margin-right: 12px; flex-shrink: 0; border-radius: 11px; }
        .cronos-menu-group-text-container { display: flex; flex-direction: column; justify-content: center; color: #fff; }
        .cronos-menu-group-tagline { font-size: 14px; font-weight: 400; color: var(--cronos-color-text-muted); margin-top: 5px; }
        .cronos-mega-menu-group-list { list-style: none; padding: 0; margin: 0; }
        .cronos-mega-menu-group-list a { display: block; margin: 7px 0; padding: 2px 0; letter-spacing: -0.02em; font-size: 19px; font-weight: 500; color: var(--cronos-color-text-light); text-decoration: none; }
        .cronos-mega-menu-link-title { font-size: inherit; font-weight: inherit; color: inherit; }

        .cronos-group-cta-btn {
            display: inline-block; color: #fff; background-color: transparent; border: 1px solid rgba(255,255,255,0.2);
            padding: 7px 16px; border-radius: 50px; margin-bottom: 14px; font-weight: 500; font-size: 0.85rem;
            font-family: 'Circular Std', system-ui, sans-serif; text-decoration: none; cursor: pointer;
        }
        .cronos-group-cta-btn:hover { border-color: var(--cronos-color-accent); color: var(--cronos-color-accent); }

        .cronos-mobile-dropdown-icon { display: none; transition: transform 0.3s; }
        
        /* Mobile Control Actions & Layout Alignment Styles */
        .cronos-mobile-controls-group { display: none; align-items: center; gap: 14px; z-index: 1010; }
        
        /* Repositioned Header inline mobile search trigger styled optimally */
        .cronos-mobile-header-search-icon-trigger {
            background: transparent; border: none; padding: 0; margin: 0;
            color: var(--cronos-color-text-light); display: flex; align-items: center; justify-content: center;
            cursor: pointer;
        }
        .cronos-mobile-header-search-icon-trigger svg { width: 22px; height: 22px; color: #fff; }

        .cronos-mobile-toggle {
            background: none; border: none; width: 24px; height: 24px;
            cursor: pointer; padding: 0; position: relative; display: block;
        }
        .cronos-mobile-toggle span { display: block; height: 2px; width: 100%; background-color: var(--cronos-color-text-light); margin: 5px 0; transition: all 0.3s; }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(2) { opacity: 0; }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Full Screen Search Page Component Overlays for Mobile */
        .cronos-mobile-fullscreen-search-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background-color: var(--cronos-color-header-bg); z-index: 2000;
            display: none; flex-direction: column; opacity: 0; transition: opacity 0.25s ease;
        }
        .cronos-mobile-fullscreen-search-overlay.open { display: flex; opacity: 1; }
        
        .cronos-mobile-overlay-header {
            height: var(--cronos-header-height); display: flex; align-items: center;
            justify-content: flex-end; padding: 0 20px; border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .cronos-mobile-search-close {
            background: none; border: none; color: var(--cronos-color-text-light);
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            width: 34px; height: 34px; padding: 0;
        }
        .cronos-mobile-overlay-body { flex-grow: 1; padding: 30px 20px; overflow-y: auto; }
        .cronos-mobile-overlay-body .cronos-search-input-field-container { margin-bottom: 0; display: flex; align-items: center; }
        .cronos-mobile-overlay-body .cronos-search-control-input { padding-right: 35px; font-size: 20px; padding-bottom: 12px; }
        .cronos-mobile-search-embed-icon { position: absolute; right: 0; bottom: 12px; color: var(--cronos-color-text-muted); pointer-events: none; }
        .cronos-mobile-search-embed-icon svg { width: 20px; height: 20px; }
        .cronos-mobile-overlay-body .cronos-search-live-dynamic-results-view { margin-top: 25px; }
        .cronos-mobile-overlay-body .cronos-search-fallback-quicklinks { margin-top: 25px; }
        .cronos-mobile-overlay-body .cronos-search-fallback-quicklinks h3 { font-size: 14px; margin: 0 0 16px; color: var(--cronos-color-text-muted); text-transform: uppercase; letter-spacing: 0.05em; }

        /* Premium Dark Mode Custom Language Picker Modal Style (Desktop only) */
        .cronos-lang-modal-container {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background-color: rgba(3, 5, 10, 0.7); backdrop-filter: blur(10px);
            z-index: 3000; display: none; align-items: center; justify-content: center;
            opacity: 0; transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cronos-lang-modal-container.show { display: flex; opacity: 1; }
        .cronos-lang-modal-window {
            background-color: #070b14; width: 100%; max-width: 500px;
            border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.04);
            box-shadow: 0 24px 60px rgba(0,0,0,0.8); display: flex; flex-direction: column;
            max-height: 80vh; overflow: hidden; position: relative;
        }
        .cronos-lang-modal-header {
            padding: 24px 32px 14px 32px;
            display: flex; align-items: center; justify-content: space-between;
            background-color: #070b14;
        }
        .cronos-lang-modal-header h3 { margin: 0; color: #ffffff; font-size: 1.35rem; font-weight: 600; letter-spacing: -0.01em; }
        .cronos-lang-modal-close-btn {
            background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255,255,255,0.04); color: #ffffff;
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            padding: 0; width: 36px; height: 36px; border-radius: 50%; transition: background-color 0.2s;
        }
        .cronos-lang-modal-close-btn:hover { background-color: rgba(255, 255, 255, 0.08); }
        .cronos-lang-modal-close-btn svg { width: 14px; height: 14px; stroke-width: 2.5; }

        /* Modern Dark Modular Search Field Element Container */
        .cronos-lang-search-wrapper {
            background-color: transparent;
        }
        .cronos-lang-search-container {
            width: 100%; display: flex; align-items: center;
            background-color: #1a2233; border-radius: 100px;
            padding: 12px 18px; gap: 12px;
        }
        .cronos-lang-search-icon {
            display: flex; align-items: center; justify-content: center; color: #64748b;
        }
        .cronos-lang-search-icon svg { width: 18px; height: 18px; }
        .cronos-lang-search-input {
            width: 100%; background: transparent; border: none; outline: none;
            color: #ffffff; font-family: inherit; font-size: 1rem; font-weight: 400;
        }
        .cronos-lang-search-input::placeholder { color: #64748b; }
        
        /* Minimal Modern Smooth Customized Scrollbar Area Structure Layout */
        .cronos-lang-modal-body {
            padding: 12px 32px 32px 32px; overflow-y: auto; flex-grow: 1;
            display: flex; flex-direction: column;
        }
        .cronos-lang-modal-body::-webkit-scrollbar { width: 6px; }
        .cronos-lang-modal-body::-webkit-scrollbar-track { background: transparent; }
        .cronos-lang-modal-body::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.06); border-radius: 100px; }
        .cronos-lang-modal-body::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.15); }

        /* Language and Region Row Grid Items */
        .cronos-lang-selection-row {
            display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
            width: 100%; padding: 14px 12px; border-radius: 12px; text-decoration: none;
            cursor: pointer; transition: background-color 0.15s ease; background: transparent;
        }
        .cronos-lang-selection-row.active { background-color: rgba(255, 255, 255, 0.03); }
        .cronos-lang-title-text { color: #ffffff; font-size: 1.15rem; font-weight: 600; margin: 0; line-height: 1.25; }
        .cronos-lang-region-text { color: #64748b; font-size: 0.92rem; font-weight: 500; margin: 2px 0 0 0; line-height: 1.2; }
        .cronos-lang-selection-row.active .cronos-lang-title-text { color: var(--cronos-color-accent); }
        .cronos-lang-no-results { color: #64748b; text-align: center; padding: 40px 0; font-size: 1rem; font-weight: 450; }

        /* Media queries for touch devices to avoid double-tap issues caused by hover states */
        @media (hover: hover) {
            .cronos-search-prediction-row-item:hover { color: #9cd4ff; }
            .cronos-mega-menu-group-list a:hover { color: #9cd4ff; }
            .cronos-lang-selection-row:hover { background-color: rgba(255, 255, 255, 0.04); }
        }

        @media (min-width: 1025px) {
            .cronos-header-back-btn { display: none !important; }
            .cronos-mobile-header-active-title { display: none !important; }
            .cronos-mobile-lang-drawer-item { display: none !important; } 
        }

        @media (max-width: 1024px) {
            .cronos-custom-header-container { padding: 0 20px; }
            .cronos-mobile-toggle { display: block; }
            .cronos-mobile-controls-group { display: flex; }
            
            .cronos-custom-main-nav {
                position: fixed; top: var(--cronos-header-height); left: 0; width: 100%;
                height: calc(100vh - var(--cronos-header-height)); background-color: var(--cronos-color-header-bg);
                overflow-y: auto; overflow-x: hidden; padding: 25px 0 35px 0; transform: translateX(100%);
                transition: transform 0.3s ease; display: flex; flex-direction: column; justify-content: flex-start; align-items: stretch; z-index: 900;
            }
            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-custom-main-nav { transform: translateX(0); }
            
            .cronos-custom-nav-list { flex-direction: column; align-items: flex-start; padding: 0 20px; margin-left: 0; width: 100%; }
            .cronos-custom-nav-list li { margin: 0; width: 100%; position: static; }
            .cronos-custom-nav-link { padding: 15px 0; font-size: 1.1rem; width: 100%; justify-content: space-between; }
            .cronos-mobile-dropdown-icon { display: inline-block; }

            .cronos-header-action-buttons { flex-direction: column; width: 100%; padding: 0 20px; margin-top: auto; }
            .cronos-header-action-btn, .cronos-header-secondary-btn { width: 100%; margin: 10px 0 0 0; padding: 15px 20px; text-align: center; font-size: 19px; }
            .cronos-qr-dropdown-trigger, .cronos-qr-dropdown-content { display: none; }
            .cronos-header-search-action-trigger { display: none !important; }
            .cronos-desktop-lang-button-trigger { display: none !important; }
            .cronos-lang-modal-container { display: none !important; } /* Composed out on mobile screen sizes entirely */
            
            .cronos-profile-dropdown {
                position: static; width: 100%; margin-top: 15px; box-shadow: none;
                visibility: visible; opacity: 1; transform: none; display: none; background-color: #11192e;
            }
            .cronos-profile-dropdown.show { display: block; }
            .cronos-profile-close { display: none; }

            .cronos-custom-nav-item--has-megamenu .cronos-mega-menu-container {
                display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background-color: var(--cronos-color-header-bg); transform: translateX(100%);
                transition: transform 0.3s ease; overflow-y: auto; z-index: 10; visibility: visible; opacity: 1; padding: 0 20px;
            }
            .cronos-custom-main-nav.cronos-subpanel-open { overflow: hidden; }
            .cronos-custom-nav-item--has-megamenu.active .cronos-mega-menu-container { transform: translateX(0); }

            .cronos-mega-menu-panel { padding: 0 0 40px 0; display: block; margin-top:25px; }
            .cronos-megamenu-grid { grid-template-columns: 1fr !important; gap: 0; }
            .cronos-desktop-mega-menu { display: none; }

            .cronos-menu-group-card { padding: 0 0 25px; }
            .cronos-menu-group-card h3 { margin-top: 20px; margin-bottom: 14px; color: var(--cronos-color-text-muted); font-size: 14px; font-weight: 500; }
            .cronos-menu-group-tagline { display: block; font-size: 12px; color: var(--cronos-color-text-muted); margin-top: 2px; }
            .cronos-mega-menu-group-list a { margin: 0; padding: 5px 0; font-size: 19px; }

            .cronos-custom-logo-container { display: flex; align-items: center; height: var(--cronos-header-height); }
            .cronos-mobile-header-active-title { display: none; color: #fff; font-size: 1.1rem; font-weight: 500; margin-left: 12px; white-space: nowrap; }
            .cronos-header-back-btn {
                display: none; align-items: center; justify-content: center; background: none; border: none;
                cursor: pointer; padding: 0; color: var(--cronos-color-text-light); height: var(--cronos-header-height);
            }

            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-custom-logo-link { display: none; }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-header-back-btn { display: flex; }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-mobile-header-active-title { display: inline-block; }
            .cronos-mobile-back-arrow-btn { display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.25); color: var(--cronos-color-text-light); }
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
                        <span class="cronos-mobile-header-active-title" id="cronos-mobileActiveTitle"></span>
                    </div>

                    <nav class="cronos-custom-main-nav">
                        <ul class="cronos-custom-nav-list">${this._buildMobileNavList()}</ul>
                        <div class="cronos-header-action-buttons">
                            <button class="cronos-header-search-action-trigger" id="cronos-desktopSearchTrigger" data-cronos-megamenu-trigger="search-engine-panel" aria-label="Open search engine dropdown">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </button>
                            
                            ${this._buildActionButtons()}
                            
                            <div class="cronos-profile-dropdown" id="cronos-profileDropdown">
                                <button class="cronos-profile-close" id="cronos-profileClose" aria-label="Close profile options">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h4 class="cronos-profile-title" data-i18n="profile-title">${this._getMsg('profile-title', 'Croloft Profile')}</h4>
                                <p class="cronos-profile-desc" data-i18n="profile-desc">${this._getMsg('profile-desc', 'Your profile helps improve your interactions with select Cronos experiences.')}</p>
                                <div class="cronos-profile-actions">
                                    <a href="login.html" class="cronos-profile-btn-login" data-i18n="btn-login">${this._getMsg('btn-login', 'Log in')}</a>
                                    <a href="register.html" class="cronos-profile-btn-create" data-i18n="profile-create">${this._getMsg('profile-create', 'Create account')}</a>
                                </div>
                            </div>

                            <div class="cronos-qr-dropdown-trigger" id="cronos-qrDropdownTrigger">
                                <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd" clip-rule="evenodd"><path fill="#8fbffa" d="M2 1H1v8h2V3h6V1zm0 22H1v-8h2v6h6v2zM23 1v8h-2V3h-6V1zm0 21v1h-8v-2h6v-6h2z"/><path fill="#2859c5" d="M5 10v1h6V5H5zm4-1H7V7h2zm4 1v1h6V5h-6zm4-1h-2V7h2zM5 19v-6h6v6zm2-2h2v-2H7zm6 .5V19h6v-2h-4v-4h-2zm4-4.5v2h2v-2z"/></g></svg>
                                <div class="cronos-qr-dropdown-content" id="cronos-qrDropdownContent">
                                    <img src="${qr.imageSrc}" alt="${qr.imageAlt}">
                                    <p>${qr.label}</p>
                                </div>
                            </div>

                            <div class="cronos-desktop-lang-button-trigger" id="cronos-desktopLangTrigger" aria-label="Open language mapping module options">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            </div>

                        </div>
                    </nav>

                    <div class="cronos-mobile-controls-group">
                        <button type="button" class="cronos-mobile-header-search-icon-trigger" id="cronos-mobileHeaderSearchTrigger" aria-label="Open fullscreen mobile search window">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </button>
                        <button class="cronos-mobile-toggle" id="cronos-mobileMenuToggle" aria-label="Toggle navigation menu">
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </header>
            
            <div class="cronos-mega-menu-container cronos-desktop-mega-menu" id="cronos-desktopMegaMenu">
                ${this._buildDesktopMegaMenuPanels()}
            </div>

            ${this._buildMobileFullscreenSearchOverlay()}

            <div class="cronos-lang-modal-container" id="cronos-langModal">
                <div class="cronos-lang-modal-window">
                    <div class="cronos-lang-modal-header">
                        <h3 data-i18n="lang-select-title">${this._getMsg('lang-select-title', 'Language and Region')}</h3>
                        <button class="cronos-lang-modal-close-btn" id="cronos-langModalClose" aria-label="Close language options selector">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    <div style="padding: 0 32px 16px 32px; background-color: #070b14;">
                        <div class="cronos-lang-search-container">
                            <span class="cronos-lang-search-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </span>
                            <input type="text" id="cronos-desktopLangSearchInput" class="cronos-lang-search-input" placeholder="Search">
                        </div>
                    </div>
                    <div class="cronos-lang-modal-body" id="cronos-desktopLangModalBody">
                        ${this._buildLangRowsHtml('cronos-desktop-lang-row')}
                    </div>
                </div>
            </div>

        </div>
        `;
    }

    _buildLangRowsHtml(rowClassIdentifier) {
        const langs = [
            { code: 'fr', label: 'Français', region: 'Global' },
            { code: 'id', label: 'Bahasa Indonesia', region: 'Global' },
            { code: 'ru', label: 'Русский', region: 'Global' },
            { code: 'vi', label: 'Tiếng Việt', region: 'Global' },
            { code: 'zh', label: '繁體中文', region: 'Global' },
            { code: 'ar', label: 'العربية', region: 'United Arab Emirates' },
            { code: 'en_ae', label: 'English', region: 'United Arab Emirates' },
            { code: 'en', label: 'English', region: 'Global' },
            { code: 'zu', label: 'isiZulu', region: 'South Africa' },
            { code: 'xh', label: 'isiXhosa', region: 'South Africa' },
            { code: 'st', label: 'Sesotho', region: 'South Africa' },
            { code: 'tn', label: 'Setswana', region: 'South Africa' },
            { code: 'nso', label: 'Sepedi', region: 'South Africa' },
            { code: 'af', label: 'Afrikaans', region: 'South Africa' }
        ];
        const activeLang = localStorage.getItem('cronos_lang') || 'en';

        return langs.map(l => {
            const isActive = l.code === activeLang ? 'active' : '';
            return `
                <div class="cronos-lang-selection-row ${isActive} ${rowClassIdentifier}" data-lang-code="${l.code}" data-lang-search-string="${l.label.toLowerCase()} ${l.region.toLowerCase()}">
                    <span class="cronos-lang-title-text">${l.label}</span>
                    <span class="cronos-lang-region-text">${l.region}</span>
                </div>
            `;
        }).join('');
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
        const cronosMobileActiveTitle   = shadow.getElementById('cronos-mobileActiveTitle');
        const cronosBody                = document.body;

        const loginTrigger              = shadow.getElementById('cronos-loginTrigger');
        const profileDropdown           = shadow.getElementById('cronos-profileDropdown');
        const profileClose              = shadow.getElementById('cronos-profileClose');

        // Search Interface Controls
        const desktopSearchField        = shadow.getElementById('cronos-desktopSearchField');
        const desktopSearchResults      = shadow.getElementById('cronos-desktopSearchResults');
        const desktopSearchQuicklinks   = shadow.getElementById('cronos-desktopSearchQuicklinks');
        
        const mobileHeaderSearchTrigger = shadow.getElementById('cronos-mobileHeaderSearchTrigger');
        const mobileSearchOverlay       = shadow.getElementById('cronos-mobileSearchOverlay');
        const mobileSearchCloseBtn      = shadow.getElementById('cronos-mobileSearchCloseBtn');
        const mobileSearchField         = shadow.getElementById('cronos-mobileSearchField');
        const mobileSearchResults       = shadow.getElementById('cronos-mobileSearchResults');
        const mobileSearchQuicklinks    = shadow.getElementById('cronos-mobileSearchQuicklinks');

        // Prevent blur event on input when clicking results, allowing the link to navigate instantly on first click
        [desktopSearchResults, desktopSearchQuicklinks, mobileSearchResults, mobileSearchQuicklinks].forEach(el => {
            if(el) el.addEventListener('mousedown', (e) => e.preventDefault());
        });

        // Desktop Specific Lang Elements
        const desktopLangTrigger        = shadow.getElementById('cronos-desktopLangTrigger');
        const langModal                 = shadow.getElementById('cronos-langModal');
        const langModalClose            = shadow.getElementById('cronos-langModalClose');
        const desktopLangSearchInput    = shadow.getElementById('cronos-desktopLangSearchInput');
        const desktopLangModalBody      = shadow.getElementById('cronos-desktopLangModalBody');
        const desktopLangRows           = shadow.querySelectorAll('.cronos-desktop-lang-row');

        // Mobile Specific Lang Elements
        const mobileLangSearchInput     = shadow.getElementById('cronos-mobileLangSearchInput');
        const mobileLangPanelBody       = shadow.getElementById('cronos-mobileLangPanelBody');
        const mobileLangRows            = shadow.querySelectorAll('.cronos-mobile-lang-row');

        let cronosCloseTimer   = null;
        let cronosQrCloseTimer = null;

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

        const setActiveMenu = (trigger, panel) => {
            cronosMegaMenuTriggers.forEach(t => {
                if (window.innerWidth > 1024 || t.getAttribute('data-cronos-megamenu-trigger') !== 'mobile-language-panel') {
                    t.classList.remove('active');
                }
            });
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
                profileDropdown.classList.remove('show');
                
                if(panel.getAttribute('data-cronos-megamenu-panel') === 'search-engine-panel' && window.innerWidth > 1024) {
                    setTimeout(() => desktopSearchField.focus(), 50);
                }
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
                if (shadow.activeElement === desktopSearchField) return;
                cronosCloseTimer = setTimeout(() => setActiveMenu(null, null), 150);
            }
        };

        cronosMegaMenuTriggers.forEach(trigger => {
            if (trigger.id === 'cronos-desktopSearchTrigger') {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if(trigger.classList.contains('active')) {
                        setActiveMenu(null, null);
                    } else {
                        handleOpen(trigger);
                    }
                });
            } else {
                if (window.innerWidth > 1024) {
                    trigger.addEventListener('mouseenter', () => handleOpen(trigger));
                    trigger.parentElement.addEventListener('mouseleave', handleClose);
                }
            }
        });

        if(desktopSearchField) {
            desktopSearchField.addEventListener('blur', () => {
                cronosCloseTimer = setTimeout(() => setActiveMenu(null, null), 200);
            });
        }

        cronosDesktopMegaMenu.addEventListener('mouseenter', () => { if (window.innerWidth > 1024) clearTimeout(cronosCloseTimer); });
        cronosDesktopMegaMenu.addEventListener('mouseleave', handleClose);

        window.addEventListener('resize', () => {
            const activePanel = cronosDesktopMegaMenu.querySelector('.cronos-mega-menu-panel.active');
            const activeTrigger = shadow.querySelector('[data-cronos-megamenu-trigger].active');
            if (activePanel) alignPanel(activeTrigger, activePanel);
            
            if (window.innerWidth > 1024 && mobileSearchOverlay.classList.contains('open')) {
                closeMobileSearchOverlay();
            }
        });

        const showQrDropdown = () => {
            if (window.innerWidth > 1024) {
                clearTimeout(cronosQrCloseTimer);
                cronosQrDropdownContent.classList.add('show');
                setActiveMenu(null, null);
                profileDropdown.classList.remove('show');
            }
        };
        const hideQrDropdown = () => {
            if (window.innerWidth > 1024) {
                cronosQrCloseTimer = setTimeout(() => cronosQrDropdownContent.classList.remove('show'), 150);
            }
        };

        cronosQrDropdownTrigger.addEventListener('mouseenter', showQrDropdown);
        cronosQrDropdownTrigger.addEventListener('mouseleave', hideQrDropdown);

        if (loginTrigger) {
            loginTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                setActiveMenu(null, null);
                if (cronosQrDropdownContent) cronosQrDropdownContent.classList.remove('show');
                profileDropdown.classList.toggle('show');
            });
        }

        if (profileClose) {
            profileClose.addEventListener('click', (e) => {
                e.stopPropagation();
                profileDropdown.classList.remove('show');
            });
        }

        document.addEventListener('click', (e) => {
            const path = e.composedPath();
            if (!path.includes(profileDropdown) && !path.includes(loginTrigger)) {
                profileDropdown.classList.remove('show');
            }
        });

        const handleSearchFiltering = (inputElement, resultsElement, quicklinksElement) => {
            const query = inputElement.value.trim().toLowerCase();
            if(!query) {
                resultsElement.classList.add('hidden');
                quicklinksElement.classList.remove('hidden');
                resultsElement.innerHTML = '';
                return;
            }

            const matches = this.SEARCH_INDEX.filter(item => item.name.toLowerCase().includes(query));
            quicklinksElement.classList.add('hidden');
            resultsElement.classList.remove('hidden');

            if(matches.length === 0) {
                const emptyMsg = this._getMsg('search-no-records', 'No records found');
                resultsElement.innerHTML = `<span class="cronos-search-prediction-empty-notice">${emptyMsg}</span>`;
                return;
            }

            resultsElement.innerHTML = matches.map(match => `
                <a href="${match.href}" class="cronos-search-prediction-row-item">${match.name}</a>
            `).join('');
        };

        if(desktopSearchField) {
            desktopSearchField.addEventListener('input', () => handleSearchFiltering(desktopSearchField, desktopSearchResults, desktopSearchQuicklinks));
        }
        if(mobileSearchField) {
            mobileSearchField.addEventListener('input', () => handleSearchFiltering(mobileSearchField, mobileSearchResults, mobileSearchQuicklinks));
        }

        const openMobileSearchOverlay = () => {
            if (cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                closeSubpanel();
            }
            
            mobileSearchOverlay.classList.add('open');
            cronosBody.classList.add('cronos-mobile-menu-active');
            
            mobileSearchField.value = '';
            mobileSearchResults.classList.add('hidden');
            mobileSearchResults.innerHTML = '';
            mobileSearchQuicklinks.classList.remove('hidden');
            
            setTimeout(() => mobileSearchField.focus(), 80);
        };

        const closeMobileSearchOverlay = () => {
            mobileSearchOverlay.classList.remove('open');
            if (!cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                cronosBody.classList.remove('cronos-mobile-menu-active');
            }
            mobileSearchField.blur();
        };

        if (mobileHeaderSearchTrigger) {
            mobileHeaderSearchTrigger.addEventListener('click', (e) => {
                e.stopPropagation();
                openMobileSearchOverlay();
            });
        }

        if (mobileSearchCloseBtn) {
            mobileSearchCloseBtn.addEventListener('click', closeMobileSearchOverlay);
        }

        // Language Modal Logic (Desktop Exclusive Execution)
        const openLangModal = (e) => {
            e.preventDefault();
            e.stopPropagation();
            setActiveMenu(null, null);
            profileDropdown.classList.remove('show');
            langModal.classList.add('show');
            if (desktopLangSearchInput) {
                desktopLangSearchInput.value = '';
                desktopLangRows.forEach(row => row.style.display = 'flex');
                const noResultsNotice = desktopLangModalBody.querySelector('.cronos-lang-no-results');
                if (noResultsNotice) noResultsNotice.remove();
                setTimeout(() => desktopLangSearchInput.focus(), 50);
            }
        };

        const closeLangModal = () => { langModal.classList.remove('show'); };
        if (desktopLangTrigger) desktopLangTrigger.addEventListener('click', openLangModal);
        if (langModalClose) langModalClose.addEventListener('click', closeLangModal);

        if (langModal) {
            langModal.addEventListener('click', (e) => {
                if (e.target === langModal) closeLangModal();
            });
        }

        // Live filtration parsing utility for target list structures
        const hookLiveFiltration = (inputElement, rowsNodeList, containerElement) => {
            if (!inputElement) return;
            inputElement.addEventListener('input', () => {
                const query = inputElement.value.trim().toLowerCase();
                let visibleCount = 0;

                rowsNodeList.forEach(row => {
                    const searchStr = row.getAttribute('data-lang-search-string') || '';
                    if (searchStr.includes(query)) {
                        row.style.display = 'flex';
                        visibleCount++;
                    } else {
                        row.style.display = 'none';
                    }
                });

                const currentNotice = containerElement.querySelector('.cronos-lang-no-results');
                if (currentNotice) currentNotice.remove();

                if (visibleCount === 0) {
                    const notice = document.createElement('div');
                    notice.className = 'cronos-lang-no-results';
                    notice.textContent = 'No languages found';
                    containerElement.appendChild(notice);
                }
            });
        };

        hookLiveFiltration(desktopLangSearchInput, desktopLangRows, desktopLangModalBody);
        hookLiveFiltration(mobileLangSearchInput, mobileLangRows, mobileLangPanelBody);

        const handleLanguageChangeSelection = (selectedLanguage) => {
            if (window.cronosTranslator && typeof window.cronosTranslator.setLanguage === 'function') {
                window.cronosTranslator.setLanguage(selectedLanguage);
            }
            closeLangModal();
            if (cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                cronosBody.classList.remove('cronos-mobile-menu-active');
                closeSubpanel();
            }
        };

        desktopLangRows.forEach(row => {
            row.addEventListener('click', () => handleLanguageChangeSelection(row.getAttribute('data-lang-code')));
        });
        mobileLangRows.forEach(row => {
            row.addEventListener('click', () => handleLanguageChangeSelection(row.getAttribute('data-lang-code')));
        });

        // Mobile Menu Subpanel Management Flow
        const mobileDropdownItems = shadow.querySelectorAll('.cronos-custom-nav-item--has-megamenu');
        const mobileMainNav       = shadow.querySelector('.cronos-custom-main-nav');
        const headerBackBtn       = shadow.getElementById('cronos-headerBackBtn');

        const openSubpanel = (item) => {
            let labelText = '';
            if (item.classList.contains('cronos-mobile-lang-drawer-item')) {
                labelText = this._getMsg('lang-select-title', 'Language and Region');
            } else {
                labelText = item.querySelector('.cronos-nav-label-text')?.textContent || '';
            }
            cronosMobileActiveTitle.textContent = labelText;
            item.classList.add('active');
            mobileMainNav.classList.add('cronos-subpanel-open');
            cronosHeaderWrapper.classList.add('cronos-subpanel-header-open');
            
            if (item.classList.contains('cronos-mobile-lang-drawer-item') && mobileLangSearchInput) {
                mobileLangSearchInput.value = '';
                mobileLangRows.forEach(row => row.style.display = 'flex');
                const currentNotice = mobileLangPanelBody.querySelector('.cronos-lang-no-results');
                if (currentNotice) currentNotice.remove();
                setTimeout(() => mobileLangSearchInput.focus(), 320);
            }
        };

        const deleteSubpanelActiveFilters = () => {
            if(mobileLangSearchInput) mobileLangSearchInput.blur();
        };

        const closeSubpanel = () => {
            deleteSubpanelActiveFilters();
            mobileDropdownItems.forEach(i => i.classList.remove('active'));
            mobileMainNav.classList.remove('cronos-subpanel-open');
            cronosHeaderWrapper.classList.remove('cronos-subpanel-header-open');
            cronosMobileActiveTitle.textContent = '';
        };

        headerBackBtn.addEventListener('click', (e) => { e.stopPropagation(); closeSubpanel(); });

        cronosMobileMenuToggle.addEventListener('click', () => {
            cronosHeaderWrapper.classList.toggle('cronos-mobile-menu-open');
            cronosBody.classList.toggle('cronos-mobile-menu-active');
            if (!cronosHeaderWrapper.classList.contains('cronos-mobile-menu-open')) {
                closeSubpanel();
                profileDropdown.classList.remove('show');
            }
        });

        mobileDropdownItems.forEach(item => {
            const trigger = item.querySelector('.cronos-custom-nav-link');
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    e.stopPropagation();
                    openSubpanel(item);
                }
            });
        });

        shadow.querySelectorAll('.cronos-custom-nav-list a, .cronos-mobile-overlay-body a').forEach(link => {
            if (link.hasAttribute('data-cronos-megamenu-trigger')) return;
            link.addEventListener('click', () => {
                if (window.innerWidth <= 1024) {
                    cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                    closeMobileSearchOverlay();
                    closeSubpanel();
                }
            });
        });
    }
}

if (!customElements.get('cronos-header')) {
    customElements.define('cronos-header', CronosHeader);
}