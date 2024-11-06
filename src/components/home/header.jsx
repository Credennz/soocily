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
            <img src="img/top.png" alt="net" />
          </div>
          <div className="hb-part1">
            <nav className="hb-nav">
              <div className="hb-logo">
                <img src="img/logosocily.png" alt="Soocity" />
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
                <a
                  href="#contact"
                  style={{ color: "white" }}
                  className="hb-contact-btn"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="net">
              <img src="../img/Overlay+Shadow.png" alt="img" />
            </div>

            <h1 className="hb-title">
              Optimize Your Marketing
              <br />
              For More ROI
            </h1>
            <p className="hb-stats">
              <strong>5+ Years </strong>of Expertise |{" "}
              <strong> 53+ Brands</strong> Collaborated | <strong>2+ Cr</strong>
              . in Ad Spend
            </p>
          </div>

          <div className="hb-part2">
            <div className="hb-net">
              <img src="img/net.png" alt="net" />
            </div>
            <div className="hb-atlft" alt="img">
              <img src="img/atlft.png" alt="net" />
            </div>
            <div className="hb-atright" alt="img">
              <img src="img/atright.png" alt="net" />
            </div>

            <div className="hb-actions">
              <a href="#" className="hb-cta-button">
                Request Call Back
              </a>
              <div className="hb-a">
                <div className="hb-igl">
                  <img src="img/igleft.png" alt="" />
                </div>
                <div className="hb-customers-badge">
                  <div className="hb-avatar-group">
                    <div className="hb-avatar">
                      <img src="img/socily1.png" alt="pic1" />
                    </div>
                    <div className="hb-avatar">
                      <img src="img/socily2.png" alt="pic2" />
                    </div>
                    <div className="hb-avatar">
                      <img src="img/socily3.png" alt="pic3" />
                    </div>
                  </div>
                  <span className="hb-call">125+ Happy Customers</span>
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
    </div>
  );
}
