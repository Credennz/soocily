import React from "react";

export default function about({ openContactModal }) {
  return (
    <div id="about">
      <div class="artbox-container">
        <section class="artbox-about-section">
          <div class="artbox-about-content">
            <div className="ra-blogs">
              <div className="ra-logox">
                <img
                  src="../img/logous.svg"
                  alt="aboutsS Logo"
                  className="ra-blogs-logo"
                />
              </div>
              <div className="ra-logo-text">
                <span>About Us</span>
              </div>
            </div>
            <h2 class="artbox-subtitle">Storytelling and Strategies</h2>
            <h1 class="artbox-title">Discover Who We Are and Our Mission</h1>
            <p class="artbox-description">
            We are more than just a marketing agency; we are storytellers, innovators, and strategists dedicated to bringing brands to life. Our journey began with a vision to redefine the way businesses connect with their audiences. Today, we proudly stand as a trusted partner to brands seeking to make an impact.

            </p>
            <div class="artbox-cta-buttons">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  openContactModal(); // Open the contact modal
                }}
                class="artbox-btn artbox-btn-primary"
              >
                Contact Us
              </a>
              <a href="https://wa.me/+918895244936" class="artbox-btn artbox-btn-secondary">
                Whatsapp us
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