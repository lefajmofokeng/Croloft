// File: header.js

class CronosHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get NAV_CONFIG() {
        return [
            {
                label: 'Businesses',
                megamenu: [
                    {
                        heading: 'Level Up',
                        tagline: 'Flexible pricing for every team',
                        icon: 'thumbnails/04 (2).png',
                        links: [
                            { label: 'Startups',       href: 'startups.html' },
                            { label: 'Professional',   href: 'professional.html' },
                            { label: 'Enterprise',     href: 'enterprise.html' },
                            // Marketplace now includes external flag for new tab + icon
                            { label: 'Marketplace',    href: 'marketplace.html', external: true }, 
                            { label: 'Schedule a Demo',  href: 'quote.html' },
                        ]
                    },
                    {
                        heading: 'Compare & Save',
                        links: [
                            { label: 'Configure',  href: 'calculator.html' },
                            { label: 'Annual vs Monthly',   href: 'billing.html' },
                            { label: 'Archictecture & Scopes',  href: 'price.html' },
                        ]
                    },
                    {
                        heading: 'Support',
                        links: [
                            { label: 'Customer Support',   href: 'billing.html' },
                            { label: 'FAQs',  href: 'faqs.html' },
                            { label: 'Contact Sales',  href: 'contact-sales.html' },
                            { label: 'Learn',  href: 'compare.html' },
                        ]
                    }
                ]
            },
            {
                label: 'Individuals',
                megamenu: [
                    {
                        heading: 'Build',
                        links: [
                            { label: 'Courses',    href: 'market-overview.html' },
                            { label: 'Open Source Projects',  href: 'portfolio.html' },
                            { label: 'Coding for Social Impact (Non-profit)',  href: 'coding.html' },
                        ]
                    },
                    {
                        heading: 'Programs',
                        links: [
                            { label: 'Affiliate Program',      href: 'affiliates.html' },
                            { label: 'Content Creator Program',    href: 'content-creator.html' },
                        ]
                    },
                    {
                        heading: 'Engage',
                        links: [
                            { label: 'Community Forum',      href: 'defi.html' },
                        ]
                    },
                ]
            },
            {
                label: 'Solutions',
                href: 'page.html',
                megamenu: [
                    {
                        heading: 'Software Development',
                        tagline: 'Custom apps & platforms',
                        icon: 'thumbnails/04 (2).png',
                        mobileBtn: 'Learn more',
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
                        mobileBtn: 'Learn more',
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
                        mobileBtn: 'Learn more',
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
            {
                label: 'Discover',
                megamenu: [
                    {
                        heading: 'Croloft',
                        links: [
                            { label: 'About Us',                href: 'about.html' },
                            { label: 'Roadmap',                 href: 'roadmap.html' },
                            { label: 'Innovations',             href: 'innovations.html' },
                            { label: 'Careers',                 href: 'careers.html' },
                            { label: 'Partners',                href: 'partners.html' },
                            { label: 'Licenses & Registrations',href: 'licenses-and-registrations.html' },
                        ]
                    },
                    {
                        heading: 'Connect',
                        links: [
                            { label: 'X', href: 'https://x.com/croloftofficial' },
                            { label: 'YouTube',     href: 'https://youtube.com/croloftofficial' },
                            { label: 'Facebook',    href: 'https://facebook.com/croloftofficial' },
                            { label: 'Instagram',     href: 'https://instagram.com/croloftofficial' },
                        ]
                    }
                ]
            }
        ];
    }

    get ACTION_BUTTONS() {
        return [
            { label: 'Log In', href: 'login.html', style: 'secondary', id: 'cronos-loginTrigger' },
            { label: 'Contact us',  href: 'form.html',  style: 'primary' },
        ];
    }

    get LOGO() {
        return { src: 'thumbnails/mock.png', alt: 'Cronos Logo', href: 'index.html' };
    }

    get QR_DROPDOWN() {
        return { imageSrc: 'thumbnails/frame.jpg', imageAlt: 'QR Code', label: 'Contact Sales' };
    }

    _menuId(label) { return label.toLowerCase().replace(/\s+/g, '-'); }

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

        // Logic updated: Show utility buttons on both desktop and mobile
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
        const chevronRight = `<svg class="cronos-mobile-dropdown-icon" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#f2f2f2" d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z" stroke-width="0.1" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
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
                        <span class="cronos-nav-label-text">${item.label}</span>
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
            const idAttr = btn.id ? `id="${btn.id}"` : '';
            // Swapped simple anchors for interactive trigger handling if it is the login button
            const hrefAttr = btn.id === 'cronos-loginTrigger' ? 'href="javascript:void(0)"' : `href="${btn.href}"`;
            return `<a ${hrefAttr} ${idAttr} class="${cls}">${btn.label}</a>`;
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
            font-family: 'Circular Std', system-ui, -apple-system, sans-serif;
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
            text-decoration: none; color: #fff; font-weight: 400; padding: 10px 0;
            display: flex; font-size: 0.89rem; align-items: center; cursor: pointer; white-space: nowrap;
        }
        .cronos-custom-nav-link:hover { color: var(--cronos-color-text-muted); }
        .cronos-desktop-link-icon { display: none; }

        .cronos-header-action-buttons { display: flex; align-items: center; position: relative; }
        .cronos-header-action-btn {
            background: #0077cc; color: #f7f9fa; border: none; padding: 9px 15px;
            border-radius: 50px; font-weight: 400; font-size: 15px; cursor: pointer;
            margin-left: 10px; text-decoration: none; font-family: inherit; white-space: nowrap;
        }
        .cronos-header-action-btn:hover { background-color: #0081ff; }

        .cronos-header-secondary-btn {
            background-color: #62b8fa32; color: #95d1ff; border: none; padding: 9px 15px;
            border-radius: 50px; font-weight: 400; font-size: 15px; cursor: pointer;
            margin-left: 10px; text-decoration: none; font-family: inherit; white-space: nowrap;
        }
        .cronos-header-secondary-btn:hover { background-color: #4a4b6b6d; }

        .cronos-qr-dropdown-trigger {
            position: relative; margin-left: 10px; width: 40px; height: 40px;
            border-radius: 50%; background-color: transparent; display: flex;
            align-items: center; justify-content: center; cursor: pointer;
            transition: background-color 0.2s; color: var(--cronos-color-text-light);
            border: 1px solid rgba(255,255,255,0.1);
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

        /* Profile Modal Dropdown Styles */
        .cronos-profile-dropdown {
            position: absolute;
            top: calc(100% + 13px);
            right: 100px;
            width: 320px;
            background-color: #0d1527;
            border-radius: 18px;
            padding: 24px;
           
            visibility: hidden;
            opacity: 0;
            transform: translateY(-10px);
            transition: visibility 0.2s, opacity 0.2s, transform 0.2s;
            z-index: 1100;
        }
        .cronos-profile-dropdown.show {
            visibility: visible;
            opacity: 1;
            transform: translateY(0);
        }
        .cronos-profile-close {
            position: absolute;
            top: 16px;
            right: 16px;
            background: none;
            border: none;
            color: var(--cronos-color-text-muted);
            cursor: pointer;
            padding: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: color 0.2s, background-color 0.2s;
        }
        .cronos-profile-close:hover {
            color: #fff;
            background-color: rgba(255, 255, 255, 0.1);
        }
        .cronos-profile-title {
            color: #fff;
            font-size: 1.28rem;
            font-weight: 500;
            margin: 0 0 12px 0;
            letter-spacing: -0.01em;
        }
        .cronos-profile-desc {
            color: var(--cronos-color-text-muted);
            font-size: 0.95rem;
            line-height: 1.5;
            margin: 0 0 24px 0;
        }
        .cronos-profile-actions {
            display: flex;
            gap: 12px;
            align-items: center;
        }
        .cronos-profile-btn-login {
            flex: 1;
            background: transparent;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.4);
            padding: 11px 16px;
            border-radius: 50px;
            font-size: 0.95rem;
            font-weight: 400;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: border-color 0.2s, background-color 0.2s;
        }
        .cronos-profile-btn-login:hover {
            border-color: #fff;
            background-color: rgba(255, 255, 255, 0.05);
        }
        .cronos-profile-btn-create {
            flex: 1.2;
            background-color: #ebebeb;
            color: #080d1b;
            padding: 11px 16px;
            border-radius: 50px;
            font-size: 0.95rem;
            font-weight: 400;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: background-color 0.2s, border-color 0.2s;
        }
        .cronos-profile-btn-create:hover {
            background-color: #e8e8e8;
        }

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
        .cronos-mega-menu-group-list a:hover { color: #9cd4ff; }
        .cronos-mega-menu-link-title { font-size: inherit; font-weight: inherit; color: inherit; }

        /* Shared Utility Button Styling */
        .cronos-group-cta-btn {
            display: inline-block; color: #fff; background-color: transparent; border: 1px solid rgba(255,255,255,0.2);
            padding: 7px 16px; border-radius: 50px; margin-bottom: 14px; font-weight: 500; font-size: 0.85rem;
            font-family: 'Circular Std', system-ui, sans-serif; text-decoration: none; cursor: pointer;
        }
        .cronos-group-cta-btn:hover { border-color: var(--cronos-color-accent); color: var(--cronos-color-accent); }

        .cronos-mobile-dropdown-icon { display: none; transition: transform 0.3s; }
        .cronos-mobile-toggle {
            display: none; background: none; border: none; width: 30px; height: 24px;
            cursor: pointer; padding: 0; position: relative; z-index: 1010;
        }
        .cronos-mobile-toggle span { display: block; height: 2px; width: 100%; background-color: var(--cronos-color-text-light); margin: 6px 0; transition: all 0.3s; }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(2) { opacity: 0; }
        .cronos-header-wrapper.cronos-mobile-menu-open .cronos-mobile-toggle span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

        @media (min-width: 1025px) {
            .cronos-header-back-btn { display: none !important; }
            .cronos-mobile-header-active-title { display: none !important; }
        }

        @media (max-width: 1024px) {
            .cronos-custom-header-container { padding: 0 20px; }
            .cronos-mobile-toggle { display: block; }
            .cronos-custom-main-nav {
                position: fixed; top: var(--cronos-header-height); left: 0; width: 100%;
                height: calc(100vh - var(--cronos-header-height)); background-color: var(--cronos-color-header-bg);
                overflow-y: auto; overflow-x: hidden; padding: 20px 0; transform: translateX(100%);
                transition: transform 0.3s ease; display: block; z-index: 900;
            }
            .cronos-header-wrapper.cronos-mobile-menu-open .cronos-custom-main-nav { transform: translateX(0); }
            .cronos-custom-nav-list { flex-direction: column; align-items: flex-start; padding: 0 20px; margin-left: 0; }
            .cronos-custom-nav-list li { margin: 0; width: 100%; position: static; }
            .cronos-custom-nav-link { padding: 15px 0; font-size: 1.1rem; width: 100%; justify-content: space-between; }
            .cronos-mobile-dropdown-icon { display: inline-block; }

            .cronos-header-action-buttons { flex-direction: column; width: 100%; padding: 0 20px; margin-top: 20px; }
            .cronos-header-action-btn, .cronos-header-secondary-btn { width: 100%; margin: 10px 0 0 0; padding: 15px 20px; text-align: center; font-size: 19px; }
            .cronos-qr-dropdown-trigger, .cronos-qr-dropdown-content { display: none; }
            
            /* Reposition profile dropdown context for mobile layouts */
            .cronos-profile-dropdown {
                position: static;
                width: 100%;
                margin-top: 15px;
                box-shadow: none;
                visibility: visible;
                opacity: 1;
                transform: none;
                display: none;
                background-color: #11192e;
            }
            .cronos-profile-dropdown.show {
                display: block;
            }
            .cronos-profile-close {
                display: none;
            }

            .cronos-custom-nav-item--has-megamenu .cronos-mega-menu-container {
                display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                background-color: var(--cronos-color-header-bg); transform: translateX(100%);
                transition: transform 0.3s ease; overflow-y: auto; z-index: 10; visibility: visible; opacity: 1; padding: 0;
            }
            .cronos-custom-main-nav.cronos-subpanel-open { overflow: hidden; }
            .cronos-custom-nav-item--has-megamenu.active .cronos-mega-menu-container { transform: translateX(0); }

            .cronos-mega-menu-panel { padding: 0 20px 40px; display: block; margin-top:25px; }
            .cronos-megamenu-grid { grid-template-columns: 1fr !important; gap: 0; }
            .cronos-desktop-mega-menu { display: none; }

            .cronos-menu-group-card { padding: 0 0 25px; }
            .cronos-menu-group-card h3 { margin-top: 20px; margin-bottom: 14px; color: var(--cronos-color-text-muted); font-size: 14px; font-weight: 500; }
            .cronos-menu-group-tagline { display: block; font-size: 12px; color: var(--cronos-color-text-muted); margin-top: 2px; }
            .cronos-mega-menu-group-list a { margin: 0; padding: 5px 0; font-size: 19px; }

            .cronos-custom-logo-container { display: flex; align-items: center; height: var(--cronos-header-height); }
            
            /* Dynamic Mobile Title */
            .cronos-mobile-header-active-title {
                display: none; color: #fff; font-size: 1.1rem; font-weight: 500; margin-left: 12px; white-space: nowrap;
            }

            /* Back button logic updated for vertical alignment and ghost arrow fix */
            .cronos-header-back-btn {
                display: none; align-items: center; justify-content: center; background: none; border: none;
                cursor: pointer; padding: 0; color: var(--cronos-color-text-light); height: var(--cronos-header-height);
            }

            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-custom-logo-link { display: none; }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-header-back-btn { display: flex; }
            .cronos-header-wrapper.cronos-subpanel-header-open .cronos-mobile-header-active-title { display: inline-block; }

            .cronos-mobile-back-arrow-btn {
                display: inline-flex; align-items: center; justify-content: center; width: 34px; height: 34px;
                border-radius: 50%; border: 1px solid rgba(255,255,255,0.25); color: var(--cronos-color-text-light);
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
                        <span class="cronos-mobile-header-active-title" id="cronos-mobileActiveTitle"></span>
                    </div>

                    <nav class="cronos-custom-main-nav">
                        <ul class="cronos-custom-nav-list">${this._buildMobileNavList()}</ul>
                        <div class="cronos-header-action-buttons">
                            ${this._buildActionButtons()}
                            
                            <div class="cronos-profile-dropdown" id="cronos-profileDropdown">
                                <button class="cronos-profile-close" id="cronos-profileClose" aria-label="Close profile options">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                                <h4 class="cronos-profile-title">Croloft Profile</h4>
                                <p class="cronos-profile-desc">Your profile helps improve your interactions with select Cronos experiences.</p>
                                <div class="cronos-profile-actions">
                                    <a href="login.html" class="cronos-profile-btn-login">Log in</a>
                                    <a href="register.html" class="cronos-profile-btn-create">Create profile</a>
                                </div>
                            </div>

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
        const cronosMobileActiveTitle   = shadow.getElementById('cronos-mobileActiveTitle');
        const cronosBody                = document.body;

        // Custom Profile Selectors
        const loginTrigger              = shadow.getElementById('cronos-loginTrigger');
        const profileDropdown           = shadow.getElementById('cronos-profileDropdown');
        const profileClose              = shadow.getElementById('cronos-profileClose');

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
                // Close profile dropdown if mega menu expands
                profileDropdown.classList.remove('show');
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

        window.addEventListener('resize', () => {
            const activePanel = cronosDesktopMegaMenu.querySelector('.cronos-mega-menu-panel.active');
            const activeTrigger = shadow.querySelector('[data-cronos-megamenu-trigger].active');
            if (activePanel) alignPanel(activeTrigger, activePanel);
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

        // Click handler for profile card initialization
        if (loginTrigger) {
            loginTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                // Close open menus first
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

        // Global Document listener to safely collapse when clicking outside inside Shadow Context
        document.addEventListener('click', (e) => {
            const path = e.composedPath();
            if (!path.includes(profileDropdown) && !path.includes(loginTrigger)) {
                profileDropdown.classList.remove('show');
            }
        });

        // Mobile Logic Updates
        const mobileDropdownItems = shadow.querySelectorAll('.cronos-custom-nav-item--has-megamenu');
        const mobileMainNav       = shadow.querySelector('.cronos-custom-main-nav');
        const headerBackBtn       = shadow.getElementById('cronos-headerBackBtn');

        const openSubpanel = (item) => {
            const labelText = item.querySelector('.cronos-nav-label-text')?.textContent || '';
            cronosMobileActiveTitle.textContent = labelText; // Set title next to back arrow
            item.classList.add('active');
            mobileMainNav.classList.add('cronos-subpanel-open');
            cronosHeaderWrapper.classList.add('cronos-subpanel-header-open');
        };

        const closeSubpanel = () => {
            mobileDropdownItems.forEach(i => i.classList.remove('active'));
            mobileMainNav.classList.remove('cronos-subpanel-open');
            cronosHeaderWrapper.classList.remove('cronos-subpanel-header-open');
            cronosMobileActiveTitle.textContent = ''; // Reset title for next open
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

        shadow.querySelectorAll('.cronos-custom-nav-list a').forEach(link => {
            if (!link.hasAttribute('data-cronos-megamenu-trigger') && !link.closest('.cronos-desktop-mega-menu')) {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 1024) {
                        cronosHeaderWrapper.classList.remove('cronos-mobile-menu-open');
                        cronosBody.classList.remove('cronos-mobile-menu-active');
                    }
                });
            }
        });
    }
}

if (!customElements.get('cronos-header')) {
    customElements.define('cronos-header', CronosHeader);
}