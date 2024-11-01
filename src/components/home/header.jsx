import React, { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div>
      <div className="hb-main">
        <div className="hb-hero-section">
          <div className="hb-top" alt="img">
            <img src="/img/top.png" alt="net" />
          </div>
          <div className="hb-part1">
            <nav className="hb-nav">
              <div className="hb-logo">
                <img src="/img/logosocily.png" alt="Soocity" />
              </div>

              <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={`hb-nav-links ${menuActive ? "active" : ""}`}>
                <a href="#features">Features</a>
                <a href="#services">Services</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
                <a href="#works">Works</a>
                <a href="#contact" className="hb-contact-btn">
                  Contact
                </a>
              </div>
            </nav>
            <div className="net">
              <img src="/img/sinlft.png" alt="img" />
              <p>
                <span className="hb-point">
                  <img src="img/point.png" alt="" />
                </span>
                Since 2020
              </p>
              <img src="/img/sinrt.png" alt="img" />
            </div>

            <h1 className="hb-title">
              Optimize Your Marketing
              <br />
              For More ROI
            </h1>
            <p className="hb-stats">
              5+ Years of Expertise | 53+ Brands Collaborated | 2+ Cr. in Ad
              Spend
            </p>
          </div>

          <div className="hb-part2">
            <div className="hb-net">
              <img src="/img/net.png" alt="net" />
            </div>
            <div className="hb-atlft" alt="img">
              <img src="/img/atlft.png" alt="net" />
            </div>
            <div className="hb-atright" alt="img">
              <img src="/img/atright.png" alt="net" />
            </div>

            <div className="hb-actions">
              <a href="#" className="hb-cta-button">
                Request Call Back
              </a>
              <div className="hb-a">
                <div className="hb-igl">
                  <img src="/img/igleft.png" alt="" />
                </div>
                <div className="hb-customers-badge">
                  <div className="hb-avatar-group">
                    <div className="hb-avatar">
                      <img src="/img/socily1.png" alt="pic1" />
                    </div>
                    <div className="hb-avatar">
                      <img src="/img/socily2.png" alt="pic2" />
                    </div>
                    <div className="hb-avatar">
                      <img src="img/socily3.png" alt="pic3" />
                    </div>
                  </div>
                  <span>125+ Happy Customers</span>
                </div>
                <div className="hb-igr">
                  <img src="img/igright.png" alt="" />
                </div>
              </div>
            </div>

            <div className="hb-stats-container">
              <div className="hb-stat-card">
                <div className="hb-stat-number">3X</div>
                <div className="hb-stat-label">growth in ROI</div>
              </div>
              <div className="hb-stat-card">
                <div className="hb-stat-number">95%</div>
                <div className="hb-stat-label">Satisfaction Rate</div>
              </div>
              <div className="hb-stat-card">
                <div className="hb-stat-number">12+</div>
                <div className="hb-stat-label">Industries</div>
              </div>
              <div className="hb-stat-card">
                <div className="hb-stat-number">17+</div>
                <div className="hb-stat-label">Team members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hb-container">
        <div class="title">
          <h3>Trusted by clients for output that matters to the business</h3>
        </div>

        <div class="logos-wrapper">
          <div class="client-logos">
            <img src="img/lumina1.png" alt="Lumina" class="client-logo" />
            <img src="img/vortex1.png" alt="Vortex" class="client-logo" />
            <img src="img/velocity1.png" alt="Velocity" class="client-logo" />
            <img src="img/synergy1.png" alt="Synergy" class="client-logo" />
            <img src="img/enigma1.png" alt="Enigma" class="client-logo" />
            <img src="img/spectrum1.png" alt="Spectrum" class="client-logo" />

            <img src="img/lumina1.png" alt="Lumina" class="client-logo" />
            <img src="img/vortex1.png" alt="Vortex" class="client-logo" />
            <img src="img/velocity1.png" alt="Velocity" class="client-logo" />
            <img src="img/synergy1.png" alt="Synergy" class="client-logo" />
            <img src="img/enigma1.png" alt="Enigma" class="client-logo" />
            <img src="img/spectrum1.png" alt="Spectrum" class="client-logo" />
          </div>
        </div>

        <div class="certification-section">
          <h4 class="certification-title">Our services are certified by</h4>
          <div class="certification-logos">
            <img
              src="img/google.png"
              alt="Meta Business Partner"
              class="certification-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
