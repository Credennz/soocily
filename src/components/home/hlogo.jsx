import React from "react";

// List of logo image sources for simplicity
const logos = [
  "img/Group 1.svg",
  "img/Group 2.svg",
  "img/Group 3.svg",
  "img/Group 4.svg",
  "img/Group 6.svg",
  "img/Group 1.svg",
  "img/Group 2.svg",
  "img/Group 3.svg",
  "img/Group 4.svg",
  "img/Group 6.svg",
  "img/Group 1.svg",
  "img/Group 2.svg",
  "img/Group 3.svg",
  "img/Group 4.svg",
  "img/Group 6.svg",
  "img/Group 1.svg",
  "img/Group 2.svg",
  "img/Group 3.svg",
  "img/Group 4.svg",
  "img/Group 6.svg",
];

export default function LogoCarousel() {
  return (
    <div className="hb-container">
      <div className="htitle">
        <h3>Trusted by clients for output that matters to the business</h3>
      </div>

      <div className="logos-wrapper">
        <div className="client-logos">
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

      {/* Certification Section */}
      <div className="certification-section">
        {/* Horizontal Line */}
        {/* <div className="horizontal-line"></div> */}
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
