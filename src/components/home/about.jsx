import React from "react";

export default function about() {
  return (
    <div>
      <div class="artbox-container">
        <section class="artbox-about-section">
          <div class="artbox-about-content">
            <div className="ra-blogs">
              <div className="ra-logox">
                <img
                  src="https://i.ibb.co/fFLGGdP/aboutus.png"
                  alt="aboutsS Logo"
                  className="ra-blogs-logo"
                />
              </div>
              <div className="ra-logo-text">
                <span>About Us</span>
              </div>
            </div>
            <h2 class="artbox-subtitle">Discover Our Creative Agency Story</h2>
            <h1 class="artbox-title">Discover Who We Are and Our Mission</h1>
            <p class="artbox-description">
              Discover who we are and our mission at Artbox. We are a passionate
              team of creative professionals dedicated to crafting exceptional
              web design solutions. Our mission is to empower businesses with
              innovative websites that not only captivate but also drive
              results.
            </p>
            <div class="artbox-cta-buttons">
              <a href="#" class="artbox-btn artbox-btn-primary">
                Start a Project
              </a>
              <a href="#" class="artbox-btn artbox-btn-secondary">
                Book a Call
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="artbox-about-image">
            <img src="../img/Image8.png" alt="Team collaboration" />
          </div>
        </section>
      </div>
    </div>
  );
}
