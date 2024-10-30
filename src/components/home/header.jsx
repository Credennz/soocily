import React from 'react'

export default function header() {
  return (
    <div>
         <div class="hb-main">
      <div class="hb-hero-section">
        <div class="hb-top" alt="img">
          <img src="/img/top.png" alt="net" />
        </div>
        <div class="hb-part1">
          <nav class="hb-nav">
            <div class="hb-logo">
              <img src="/img/logosocily.png" alt="Soocity" />
            </div>

            <div class="menu-toggle" onclick="toggleMenu()">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="hb-nav-links">
              <a href="#features">Features</a>
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
              <a href="#about">About</a>
              <a href="#works">Works</a>
              <a href="#contact" class="hb-contact-btn">Contact</a>
            </div>
          </nav>
          <div class="net">
            <img src="/img/sinlft.png" alt="img" />

            <p>
              <span class="hb-point"><img src="img/point.png" alt="" /></span
              >Since 2020
            </p>
            <img src="/img/sinrt.png" alt="img" />
          </div>
           {/* <div class="hb-since">Since 2020</div> */}
             

          <h1 class="hb-title">
            Optimize Your Marketing<br />
            For More ROI
          </h1>
          <p class="hb-stats">
            5+ Years of Expertise | 53+ Brands Collaborated | 2+ Cr. in Ad Spend
          </p>
        </div>

        <div class="hb-part2">
          <div class="hb-net">
            <img src="/img/net.png" alt="net" />
          </div>
          <div class="hb-atlft" alt="img">
            <img src="/img/atlft.png" alt="net" />
          </div>
          <div class="hb-atright" alt="img">
            <img src="/img/atright.png" alt="net" />
          </div>

          <div class="hb-actions">
            <a href="#" class="hb-cta-button">Request Call Back</a>
            <div class="hb-a">
              <div class="hb-igl"><img src="/img/igleft.png" alt="" /></div>
              <div class="hb-customers-badge">
                <div class="hb-avatar-group">
                  <div class="hb-avatar">
                    <img src="/img/socily1.png" alt="pic1" />
                  </div>
                  <div class="hb-avatar">
                    <img src="/img/socily2.png" alt="pic2" />
                  </div>
                  <div class="hb-avatar">
                    <img src="img/socily3.png" alt="pic3" />
                  </div>
                </div>
                <span>125+ Happy Customers</span>
              </div>
              <div class="hb-igr"><img src="img/igright.png" alt="" /></div>
            </div>
          </div>

          <div class="hb-stats-container">
            <div class="hb-stat-card">
              <div class="hb-stat-number">3X</div>
              <div class="hb-stat-label">growth in ROI</div>
            </div>
            <div class="hb-stat-card">
              <div class="hb-stat-number">95%</div>
              <div class="hb-stat-label">Satisfaction Rate</div>
            </div>
            <div class="hb-stat-card">
              <div class="hb-stat-number">12+</div>
              <div class="hb-stat-label">Industries</div>
            </div>
            <div class="hb-stat-card">
              <div class="hb-stat-number">17+</div>
              <div class="hb-stat-label">Team members</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hb-container">
      <h2 class="title">
        Trusted by clients for output that matters to the business
      </h2>

      <div class="client-logos">
        <img src="/img/lumina1.png" alt="Lumina" class="client-logo" />
        <img src="/img/vortex1.png" alt="Vortex" class="client-logo" />
        <img src="/img/velocity1.png" alt="Velocity" class="client-logo" />
        <img src="/img/synergy1.png" alt="Synergy" class="client-logo" />
        <img src="/img/enigma1.png" alt="Enigma" class="client-logo" />
        <img src="/img/spectrum1.png" alt="Spectrum" class="client-logo" />
      </div>

      <div class="certification-section">
        <h3 class="certification-title">Our services are certified by</h3>
        <div class="certification-logos">
          <img
            src="/img/google.png"
            alt="Meta Business Partner"
            class="certification-logo"
          />
        </div>
      </div>
    </div>
    </div>
  )
}
