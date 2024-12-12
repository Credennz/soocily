import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import ThankYouModal from "./thankYouModal";
import { HashLink } from 'react-router-hash-link';

export default function Header({ openContactModal }) {
  const [menuActive, setMenuActive] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  const placeholderRef = useRef(null);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent triggering outside click logic
    setMenuActive((prevState) => !prevState); // Toggle menu state
  };

  const closeMenuIfClickedOutside = (e) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target) &&
      toggleButtonRef.current !== e.target &&
      !toggleButtonRef.current.contains(e.target)
    ) {
      setMenuActive(false); // Close the menu
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", closeMenuIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      if (!navRef.current || !placeholderRef.current) return;

      const navHeight = navRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollTop;
      lastScrollTop = scrollY;

      if (isScrollingDown && scrollY > navHeight + 10 && !isSticky) {
        setIsSticky(true);
        placeholderRef.current.style.height = `${navHeight + 35}px`;
      } else if (!isScrollingDown && scrollY <= navHeight - 10 && isSticky) {
        setIsSticky(false);
        placeholderRef.current.style.height = "0px";
      }
    };

    const debouncedHandleScroll = () => {
      clearTimeout(handleScroll.debounceTimer);
      handleScroll.debounceTimer = setTimeout(() => handleScroll(), 10);
    };

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(handleScroll.debounceTimer);
    };
  }, [isSticky]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());
    console.log("Form submitted with values:", formValues);

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
          setIsFormOpen(false);
          setIsModalOpen(true);
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const handleLinkClick = () => {
    setMenuActive(false); // Close the menu when a link is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);
  // Custom scroll function to handle the scroll with offset
  const scrollWithOffset = (el) => {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offset = 150; // Adjust this based on your sticky navbar height
  
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };
  

  return (
    <div id="header">
      <div className="hb-main">
        <div className="hb-hero-section">
          <div className="hb-top">
            <img src="img/top.png" alt="net" />
          </div>
          <div className="hb-part1">
            {/* Sticky Placeholder */}
            <div
              ref={placeholderRef}
              className={`hb-nav-placeholder`}
            ></div>
            <nav
              className={`hb-nav ${isSticky ? "sticky" : ""}`}
              ref={navRef}
            >
              <div className="hb-logo">
                <HashLink to="/#header">
                  <img src="img/logosocily.png" alt="Soocily" />
                </HashLink>
              </div>

              <div
                className="menu-toggle"
                ref={toggleButtonRef}
                onClick={toggleMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className={`hb-nav-links ${menuActive ? "active" : ""}`} ref={menuRef}>
  <HashLink
    to="#services"
    className="nav-link"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector("#services");
      scrollWithOffset(element);
    }}
  >
    Services
  </HashLink>
  <HashLink
    to="#about"
    className="nav-link"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector("#about");
      scrollWithOffset(element);
    }}
  >
    About Us
  </HashLink>
  <HashLink
    to="#in"
    className="nav-link"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector("#in");
      scrollWithOffset(element);
    }}
  >
    Industries
  </HashLink>
  <HashLink
    to="#whyus"
    className="nav-link"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector("#whyus");
      scrollWithOffset(element);
    }}
  >
    Why Us
  </HashLink>
  <HashLink
    to="#blogs"
    className="nav-link"
    onClick={(e) => {
      e.preventDefault();
      const element = document.querySelector("#blogs");
      scrollWithOffset(element);
    }}
  >
    Blogs
  </HashLink>
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
            <div className="hb-atlft">
              <img src="img/atlft.png" alt="net" />
            </div>
            <div className="hb-atright">
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