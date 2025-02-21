import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = ({ openContactModal }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // Check if the current path is the home page, otherwise navigate there
    if (window.location.pathname !== "/") {
      navigate("/"); // Navigate to home page
    }

    // After navigating, use setTimeout to give time for navigation to complete before scrolling
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 200, // 200px offset
          behavior: "smooth", // Smooth scrolling
        });
      }
    }, 100); // Delay scrolling to allow time for navigation to home
  };

  return (
    <div>
      <footer>
        <img className="tf-logo" src="/img/logo.png" alt="Soochr Logo" />
        <p className="p-ft">
          Experienced team delivering exceptional digital <br />
          solutions tailored to your brand.
        </p>
        <div className="tf-footer-links">
          <button> <HashLink to="/#services" onClick={(e) => handleScrollToSection(e, "services")}>Service</HashLink></button>
          <button> <HashLink to="/#about" onClick={(e) => handleScrollToSection(e, "about")}>About Us</HashLink></button>
          <button> <HashLink to="/#in" onClick={(e) => handleScrollToSection(e, "in")}>Industries</HashLink></button>
          <button> <HashLink to="/#whyus" onClick={(e) => handleScrollToSection(e, "whyus")}>Why Us</HashLink></button>
          <button> <HashLink to="/#blogs" onClick={(e) => handleScrollToSection(e, "blogs")}>Blogs</HashLink></button>
          <button><HashLink to="/#contact" onClick={(e) => {
                    e.preventDefault();
                    openContactModal();
                  }}>Contact</HashLink></button>
        </div>
        <div className="tf-and-c">
          <HashLink to="/tc">Terms and Conditions</HashLink>
          <HashLink to="/pp">Privacy Policy</HashLink>
          <HashLink to="/cp">Customer Policy</HashLink>
        </div>
        <hr />
        <div className="tf-x">
          <div className="tf-attribution">Developed by credennz.com</div>
          <div className="tf-social-icons">
            <a href="https://www.linkedin.com/company/soocily">
              <img src="/img/Linkedin_logo.svg" alt="LinkedIn" />
            </a>
            <a href="https://x.com/soocily21526">
              <img src="/img/twitter_logo.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/soocily_ind/">
              <img src="/img/insta_logo.svg" alt="Instagram" />
            </a>
          </div>
          <div className="tf-attribution">
            &copy;2024 Soocily. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
