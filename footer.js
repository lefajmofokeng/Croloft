class CronosFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.initAccordions();
  }

  initAccordions() {
    const headings = this.shadowRoot.querySelectorAll('.footer-heading');
    headings.forEach(heading => {
      heading.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          const group = heading.closest('.col-links');
          if (!group) return;
          const isOpen = group.classList.contains('is-open');

          // Close all open groups
          this.shadowRoot.querySelectorAll('.col-links').forEach(col => {
            col.classList.remove('is-open');
          });

          // Toggle the clicked one
          if (!isOpen) {
            group.classList.add('is-open');
          }
        }
      });
    });
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        :host {
          display: block;
          font-family: 'Circular Std', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --c-bg-main:   #080d1b;
          --c-text-head: #858992;
          --c-text-body: #ffffff;
          --c-accent:    #0073d2;
          --c-border:    rgba(255, 255, 255, 0.10);
          --c-border-xs: rgba(255, 255, 255, 0.05);
          --c-muted:     #7b849b;
          --max-w:       1300px;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          color: inherit;
          transition: color 0.2s;
        }
        ul { list-style: none; }


        /* ── OUTER WRAPPER: full-bleed background ── */
        .footer-container {
          background-color: var(--c-bg-main);
          color: var(--c-text-body);
          border-top: 1px solid var(--c-border);
          font-size: 15px;
          line-height: 1.6;
          /* No horizontal padding here — inner wrapper handles width */
          padding: 80px 0 40px;
        }

        /* ── INNER WRAPPER: 1200px centred, zero extra padding on desktop ── */
        .footer-inner {
          max-width: var(--max-w);
          width: 100%;
          margin: 0 auto;
          /* Padding only added on smaller viewports via media query */
          padding: 0;
        }


        /* ── TOP GRID ── */
        .top-section {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .brand-logo-img {
          display: block;
          max-width: 100px;
          height: auto;
          margin-bottom: 24px;
        }

        .brand-desc {
          max-width: 320px;
          font-weight: 500;
          font-size: 30px;
          color: #f4f4f4;
        }


        /* ── COLUMN HEADINGS ── */
        .footer-heading {
          color: var(--c-text-head);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          user-select: none;
        }

        .heading-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge {
          font-size: 10px;
          background-color: var(--c-accent);
          color: #fff;
          padding: 5px 7px;
          border-radius: 50px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.5px;
          white-space: nowrap;
          line-height: 1;
          vertical-align: middle;
        }

        /* Chevron indicator — hidden on desktop */
        .footer-heading::after {
          content: '+';
          display: none;
          font-size: 20px;
          line-height: 1;
          color: var(--c-text-head);
        }


        /* ── STACKED COLUMNS (Resources + Crypto inside one grid cell) ── */
        .col-trading { margin-top: 3rem; }


        /* ── LINK LIST ── */
        .link-list li {
          margin-bottom: 19px;
          font-weight: 500;
          font-size: 18px;
          letter-spacing: -0.01em;
        }
        .link-list a:hover { color: var(--c-accent); }


        /* ── BOTTOM SECTION ── */
        .bottom-section {
          border-top: 1px solid var(--c-border);
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .legal-text {
          font-size: 14px;
          max-width: 900px;
          color: var(--c-muted);
          font-weight: 400;
        }

        .bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          border-top: 1px solid var(--c-border-xs);
          padding-top: 24px;
        }

        .copyright-line {
          color: var(--c-muted);
          font-weight: 400;
          font-size: 14px;
        }

        .bottom-links {
          display: flex;
          gap: 24px;
        }
        .bottom-links a {
          font-size: 14px;
          color: var(--c-muted);
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .bottom-links a:hover {
          color: var(--c-accent);
          text-decoration: underline;
        }


        /* ────────────────────────────────
           RESPONSIVE
        ──────────────────────────────── */

        /* Tablet: 993px – 1240px
           Add side padding so content doesn't kiss the viewport edge */
        @media (max-width: 1240px) {
          .footer-inner {
            padding: 0 40px;
          }
        }

        /* Tablet: 769px – 992px */
        @media (min-width: 769px) and (max-width: 992px) {
          .footer-inner {
            padding: 0 24px;
          }
          .top-section {
            grid-template-columns: 1fr 1fr;
            gap: 50px 30px;
          }
          .col-trading { margin-top: 0; }
        }

        /* Mobile: ≤ 768px */
        @media (max-width: 768px) {
          .footer-container {
            padding: 48px 0 32px;
          }

          .footer-inner {
            padding: 0 20px; /* Required minimum on mobile */
          }

          .top-section {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 40px;
          }

          .col-brand {
            padding-bottom: 36px;
            border-bottom: 1px solid var(--c-border);
            margin-bottom: 0;
          }

          /* Every col-links gets a bottom border as accordion divider */
          .col-links {
            border-bottom: 1px solid var(--c-border-xs);
          }

          .col-trading { margin-top: 0; }

          /* Show the +/− chevron */
          .footer-heading {
            margin-bottom: 0;
            padding: 18px 0;
            cursor: pointer;
          }
          .footer-heading::after { display: block; }

          .col-links.is-open .footer-heading::after {
            content: '−';
          }

          /* Accordion: collapsed by default */
          .link-list {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.35s cubic-bezier(0, 1, 0, 1);
          }

          /* Accordion: expanded */
          .col-links.is-open .link-list {
            max-height: 600px;
            transition: max-height 0.4s ease-in-out;
            padding-bottom: 20px;
          }

          /* Bottom bar stacks on mobile */
          .bottom-bar {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 20px;
          }

          .bottom-links {
            flex-wrap: wrap;
            gap: 16px;
          }

          .brand-desc {
            font-size: 22px;
          }
        }

        /* Very small screens */
        @media (max-width: 380px) {
          .footer-inner {
            padding: 0 16px;
          }
          .link-list li {
            font-size: 16px;
          }
        }
      </style>

      <footer class="footer-container">
        <div class="footer-inner">

          <!-- TOP GRID -->
          <div class="top-section">

            <!-- Brand -->
            <div class="col-brand">
              <div class="brand-logo-wrapper">
                <img class="brand-logo-img" src="thumbnails/logo.png" alt="Cronos Logo" />
              </div>
              <p class="brand-desc">From Concept, To Code, To Market.</p>
            </div>

            <!-- Resources + Crypto (stacked in one column) -->
            <div>
              <div class="col-links">
                <h3 class="footer-heading">Resources</h3>
                <ul class="link-list">
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="learn.html">Learn</a></li>
                  <li><a href="learn.html">eBooks</a></li>
                  <li><a href="glossary.html">Glossary</a></li>
                </ul>
              </div>

              <div class="col-links col-trading">
                <h3 class="footer-heading">
                  <span class="heading-group">Crypto <span class="badge">New</span></span>
                </h3>
                <ul class="link-list">
                  <li><a href="market-insights.html">Market Updates</a></li>
                  <li><a href="#">Liquidity Converter</a></li>
                  <li><a href="#">DeFi &amp; NFT</a></li>
                  <li><a href="#">Market Insights</a></li>
                </ul>
              </div>
            </div>

            <!-- Company -->
            <div class="col-links">
              <h3 class="footer-heading">Company</h3>
              <ul class="link-list">
                <li><a href="about.html">About Us</a></li>
                <li><a href="roadmap.html">Roadmap</a></li>
                <li><a href="careers.html">Careers</a></li>
                <li><a href="partners.html">Partners</a></li>
                <li><a href="affiliates.html">Affiliate</a></li>
                <li><a href="licenses-and-registrations.html">Licenses &amp; Registrations</a></li>
                <li><a href="capital.html">Capital</a></li>
                <li><a href="security.html">Security</a></li>
                <li><a href="verify.html">Verify</a></li>
              </ul>
            </div>

            <!-- Updates -->
            <div class="col-links">
              <h3 class="footer-heading">Updates</h3>
              <ul class="link-list">
                <li><a href="#">X</a></li>
                <li><a href="product-news.html">Product News</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>

          </div>
          <!-- /TOP GRID -->

          <!-- BOTTOM SECTION -->
          <div class="bottom-section">
            <p class="legal-text">
              Cronos operates as a strictly digital-first service provider to ensure rapid deployment and global scalability. Field technicians are dispatched exclusively in instances where remote assistance protocols have been exhausted and physical intervention is deemed critical to resolution.
            </p>

            <div class="bottom-bar">
              <p class="copyright-line">Copyright &copy; Croloft 2026. All rights reserved.</p>
              <div class="bottom-links">
                <a href="privacy-policy.html">Privacy Policy</a>
                <a href="terms-of-service.html">Terms of Service</a>
                <a href="disclaimer.html">Disclaimer</a>
              </div>
            </div>
          </div>

        </div>
        <!-- /footer-inner -->
      </footer>
    `;
  }
}

customElements.define('cronos-footer', CronosFooter);