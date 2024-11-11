// App.js or Header.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import ThankYouModal from "./thankYouModal";

export default function Header({ openContactModal }) {
  const [menuActive, setMenuActive] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submitted with values:", formValues);

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_6z9pba8",
        "template_fbe54n4",
        e.target,
        "EGnkr6K_W04YVhiwG"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          closeForm();
          setIsModalOpen(true); // Show the thank-you modal
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
                <img src="img/logosocily.png" alt="Soocily" />
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
                  onClick={(e) => {
                    e.preventDefault();
                    openContactModal();
                  }}
                  style={{ color: "white" }}
                  className="hb-contact-btn"
                >
                  Contact
                </a>
              </div>
            </nav>
            <div className="net">
              <img src="../img/since.svg" alt="img" />
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

          {/* Form Modal */}
          {isFormOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <button onClick={closeForm} className="close-btn">
                  &times;
                </button>
                <h2 className="modal-title">Request Call Back</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Website</label>
                    <input
                      type="url"
                      name="website"
                      placeholder="Enter your website"
                    />
                  </div>
                  <div className="form-group">
                    <label>Requirements</label>
                    <textarea
                      name="requirements"
                      placeholder="Briefly describe your requirements"
                      required
                    ></textarea>
                  </div>
                  <div className="button-group">
                    <button type="submit" className="submit-btn">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Thank You Modal */}
          <ThankYouModal isOpen={isModalOpen} onClose={closeModal} />

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
              <a href="#" onClick={openForm} className="hb-cta-button">
                Request Call Back
              </a>
              <div className="hb-a">
                <div className="hb-igl">
                  <img src="../img/left.svg" alt="" />
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
                  <img src="../img/right.svg" alt="" />
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
