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
          const group = heading.parentElement;
          const isOpen = group.classList.contains('is-open');

          this.shadowRoot.querySelectorAll('.col-links').forEach(col => {
            col.classList.remove('is-open');
          });

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
         @font-face {
            font-family: 'Circular Std';
            src: local('Circular Std'), url('fonts/circular-std.ttf') format('woff');
            font-weight: normal;
            font-style: normal;
        }

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

        :host {
          display: block;
          font-family: 'Circular Std', -apple-system, BlinkMacSystemFont, sans-serif;
          --c-bg-main: #080d1b; 
          --c-text-head: #858992; 
          --c-text-body: #ffffff;
          --c-accent: #0073d2; 
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        a { text-decoration: none; color: inherit; transition: color 0.2s; }
        ul { list-style: none; }

        .footer-container {
          background-color: var(--c-bg-main);
          color: var(--c-text-body);
          padding: 80px 10% 40px 10%;
          font-size: 15px;
          line-height: 1.6;
          border-top: 1px solid #ffffff1a; 
        }

        .top-section {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px; /* Reduced slightly since we have more content at bottom now */
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

        .footer-heading {
          color: var(--c-text-head);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .heading-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .badge {
          font-size: 10px;
          background-color: var(--c-accent);
          color: white;
          padding: 6px 12px;
          border-radius: 50px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.5px;
          white-space: nowrap;
          line-height: 1;
        }

        .col-trading { margin-top: 3rem; }

        .footer-heading::after {
          content: '+';
          display: none;
          font-size: 20px;
        }

        .link-list li { margin-bottom: 19px; font-weight: 500; font-size: 18px; letter-spacing: -0.01em;}
        .link-list a:hover { color: var(--c-accent); }

        .bottom-section {
          border-top: 1px solid #ffffff1a;
          padding-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 32px; /* Space between the text paragraph and the bottom bar */
        }

        .legal-text {
          font-size: 14px;
          max-width: 900px;
          color: #7b849b;
          font-weight: 400;
        }

        /* --- NEW BOTTOM BAR STYLES --- */
        .bottom-bar {
          display: flex;
          justify-content: space-between; /* Pushes items to corners */
          align-items: center;
          width: 100%;
          border-top: 1px solid #ffffff0d; /* Optional: subtle separator */
          padding-top: 24px; 
        }

        .copyright-line {
          color: #7b849b;
          font-weight: 400;
          font-size: 14px;
          margin: 0; /* Reset margins */
        }

        .bottom-links {
          display: flex;
          gap: 24px;
        }

        .bottom-links a {
          font-size: 14px;
          color: #7b849b;
          font-weight: 400;
          letter-spacing: -0.02em;
        }

        .bottom-links a:hover {
          color: var(--c-accent);
          text-decoration: underline;
        }
        /* ---------------------------- */

        @media (max-width: 768px) {
          .top-section {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 0 -20px;
          }

          .col-brand { padding-bottom: 40px; }

          .col-links { border-bottom: 1px solid #ffffff0d; margin-top: 0; }
          .col-trading { margin-top: 0; }

          .footer-heading {
            margin-bottom: 0;
            padding: 20px 0;
            cursor: pointer;
          }
          .footer-heading::after { display: block; }

          .col-links.is-open .footer-heading::after {
            content: '−';
            transform: rotate(180deg);
          }

          .link-list {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.4s cubic-bezier(0, 1, 0, 1);
          }

          .col-links.is-open .link-list {
            max-height: 500px;
            transition: max-height 0.4s ease-in-out;
            padding-bottom: 20px;
          }

          /* Mobile Bottom Bar Adjustments */
          .bottom-bar {
            flex-direction: column-reverse; /* Puts copyright below links on mobile */
            align-items: flex-start;
            gap: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 992px) {
          .top-section { grid-template-columns: 1fr 1fr; gap: 50px 30px; }
          .col-trading { margin-top: 0; }
        }
      </style>

      <footer class="footer-container">
        <div class="top-section">
          <div class="col-brand">
            <div class="brand-logo-wrapper">
              <img class="brand-logo-img" src="thumbnails/croloft2.png" alt="Cronos Logo" />
            </div>
            <p class="brand-desc">
                From Concept, To Code, To Market.
            </p>
          </div>

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
                <span class="heading-group">
                  Crypto 
                </span>
              </h3>
              <ul class="link-list">
                <li><a href="market-insights.html">Market Updates</a></li>
                <li><a href="#">Liquidity Converter</a></li>
                <li><a href="#">DeFi & NFT</a></li>
                <li><a href="#">Market Insights</a></li>
              </ul>
            </div>
          </div> 

          <div class="col-links">
            <h3 class="footer-heading">Company</h3>
            <ul class="link-list">
              <li><a href="about.html">About Us</a></li>
              <li><a href="roadmap.html">Roadmap</a></li>
              <li><a href="careers.html">Careers</a></li>
              <li><a href="partners.html">Partners</a></li>
              <li><a href="affiliates.html">Affiliate</a></li>
              <li><a href="licenses-and-registrations.html">Licenses & Registrations</a></li>
              <li><a href="capital.html">Capital</a></li>
              <li><a href="security.html">Security</a></li>
              <li><a href="veify.html">Verify</a></li>
            </ul>
          </div>

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

        <div class="bottom-section">
          <p class="legal-text">
            Cronos operates as a strictly digital-first service provider to ensure rapid deployment and global scalability. Field technicians are dispatched exclusively in instances where remote assistance protocols have been exhausted and physical intervention is deemed critical to resolution.
          </p>

          <div class="bottom-bar">
            <div class="copyright-line">
              Copyright © Croloft. All rights reserved.
            </div>

            <div class="bottom-links">
              <a href="privacy-policy.html">Privacy Policy</a>
              <a href="terms-of-service.html">Terms of Service</a>
              <a href="disclaimer.html">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('cronos-footer', CronosFooter);
