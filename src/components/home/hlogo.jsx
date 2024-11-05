import React from "react";

// List of logo image sources for simplicity
const logos = [
  "img/lumina1.png",
  "img/vortex1.png",
  "img/velocity1.png",
  "img/synergy1.png",
  "img/enigma1.png",
  "img/spectrum1.png",
  "img/lumina1.png",
  "img/vortex1.png",
  "img/velocity1.png",
  "img/synergy1.png",
  "img/enigma1.png",
  "img/spectrum1.png",
  "img/lumina1.png",
  "img/vortex1.png",
  "img/velocity1.png",
  "img/synergy1.png",
  "img/enigma1.png",
  "img/spectrum1.png",
];

export default function LogoCarousel() {
  return (
    <div className="hb-container">
      <div className="htitle">
        <h3>Trusted by clients for output that matters to the business</h3>
      </div>

      <div className="logos-wrapper">
        <div className="client-logos">
          {/* Triple duplication of logos for smooth scrolling */}
          {logos.concat(logos, logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="client-logo"
            />
          ))}
        </div>
      </div>

      <div className="certification-section">
        <h4 className="certification-title">Our services are certified by</h4>
        <div className="certification-logos">
          <img
            src="img/google.png"
            alt="Google Certification logo"
            className="certification-logo"
          />
        </div>
      </div>
    </div>
  );
}
