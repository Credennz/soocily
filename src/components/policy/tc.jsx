import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Footer from "../home/footer";
import "./tc.css";

const Tc = ({ openContactModal }) => {
  const [menuActive, setMenuActive] = useState(false); // Manage menu toggle state
  const menuRef = useRef(null); // Reference for detecting outside clicks
  const toggleButtonRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
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

    document.addEventListener("mousedown", closeMenuIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", closeMenuIfClickedOutside);
    };
  }, []);

  // Toggle menu
  const toggleMenu = (e) => {
    e.stopPropagation(); // Prevent triggering outside click logic
    setMenuActive((prevState) => !prevState);
  };

  // Smooth scroll offset for navigation
  const scrollWithOffset = (el) => {
    const offset = 150; // Adjust offset based on header height
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  };

  return (
    <div className="page-layout">
      {/* Header Navigation */}
      <nav className="hb-nav2">
        <div className="hb-logo">
          <img src="../img/logosocily.png" alt="Soocily Logo" />
        </div>
        <div
          className="menu-toggle"
          ref={toggleButtonRef}
          onClick={toggleMenu}
          aria-expanded={menuActive ? "true" : "false"}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`hb-nav-links ${menuActive ? "active" : ""}`}
          ref={menuRef}
        >
          <HashLink
            to="/#services"
            className="nav-link"
            scroll={scrollWithOffset}
            onClick={() => setMenuActive(false)}
          >
            Services
          </HashLink>
          <HashLink
            to="/#about"
            className="nav-link"
            scroll={scrollWithOffset}
            onClick={() => setMenuActive(false)}
          >
            About Us
          </HashLink>
          <HashLink
            to="/#in"
            className="nav-link"
            scroll={scrollWithOffset}
            onClick={() => setMenuActive(false)}
          >
            Industries
          </HashLink>
          <HashLink
            to="/#whyus"
            className="nav-link"
            scroll={scrollWithOffset}
            onClick={() => setMenuActive(false)}
          >
            Why Us
          </HashLink>
          <HashLink
            to="/#blogs"
            className="nav-link"
            scroll={scrollWithOffset}
            onClick={() => setMenuActive(false)}
          >
            Blogs
          </HashLink>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              openContactModal();
            }}
            className="hb-contact-btn"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="terms-container">
      <h3 className="terms-title">Terms and Conditions</h3>
     
      <h4 className="terms-subtitle">Introduction</h4>
      <p>
        This web page represents a legal document and serves as the terms and conditions ("Terms") for your use of our website,
        <a href="http://www.soocily.com" target="_blank" rel="noopener noreferrer" className="terms-link">
          www.soocily.com
        </a>.
        By accessing, browsing, or using this Website, you agree to be bound by these Terms. If you disagree with any part of these Terms,
        please discontinue use of our Website immediately.
      </p>
 <hr/>
      <h4 className="terms-subtitle">Services</h4>
      <p>
        Soocily, operating under Credennz Edusoft Private Limited, provides global marketing, advertising, and social media management services
        (collectively, "Services"). These Terms govern the use of our Website and any associated content.
      </p>
 
      <h4 className="terms-subtitle">Definitions</h4>
      <ul>
        <li><strong>"We," "Us," and "Our"</strong> refer to Soocily, the owner of this Website.</li>
        <li><strong>"You" or "User"</strong> refers to any individual or entity accessing or using the Website.</li>
        <li><strong>"Content"</strong> includes all text, information, graphics, and data available on the Website.</li>
      </ul>
      <hr/>
      <h4 className="terms-subtitle">Acceptance of Terms</h4>
      <p>
        By using our Website, you acknowledge that you have read, understood, and agree to these Terms.
        Soocily reserves the right to modify these Terms at any time without prior notice. Your continued use of the Website constitutes acceptance of the updated Terms.
      </p>
      <p>Please review these Terms regularly.</p>
      <hr/>
      <h4 className="terms-subtitle">Limited License</h4>
      <p>
        We grant you a non-exclusive, non-transferable, revocable license to access and use our Website for personal or business purposes,
        strictly in accordance with these Terms.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Intellectual Property</h4>
      <p>
        All intellectual property rights in the Website, including trademarks, logos, and content, are owned by Soocily or licensed to us.
        You may not copy, reproduce, distribute, or otherwise use any content without prior written permission.
      </p>
      <hr/>
      <h4 className="terms-subtitle">User Obligations</h4>
      <ul>
        <li>To provide accurate information when submitting forms or inquiries.</li>
        <li>Not to engage in any activity that disrupts or interferes with the Website's functionality.</li>
        <li>Not to use the Website for illegal or unauthorized purposes.</li>
      </ul>
      <hr/>
      <h4 className="terms-subtitle">Disclaimer of Warranties</h4>
      <p>
        The Website and its content are provided "as is" and "as available." We disclaim all warranties, express or implied, including but not limited to warranties of merchantability and fitness for a particular purpose.
        Soocily does not guarantee that the Website will be error-free, virus-free, or uninterrupted.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Limitation of Liability</h4>
      <p>
        To the maximum extent permitted by law, Soocily and its affiliates shall not be liable for any damages, including but not limited to
        direct, indirect, incidental, or consequential damages arising out of your use of or inability to use the Website.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Privacy Policy</h4>
      <p>
        Our use of your personal data is governed by our Privacy Policy. By using the Website, you consent to such processing and warrant that all provided data is accurate.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Third-Party Links</h4>
      <p>
        The Website may contain links to third-party websites. Soocily does not endorse or assume responsibility for any content, products, or services on third-party websites.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Governing Law</h4>
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Changes to the Terms</h4>
      <p>
        Soocily reserves the right to modify or replace these Terms at any time. Significant changes will be communicated on this page. Your continued use of the Website after any changes indicates acceptance of the new Terms.
      </p>
      <hr/>
      <h4 className="terms-subtitle">Contact Us</h4>
      <p>If you have any questions about these Terms, please contact us at:</p>
      <p>
        Soocily<br />
        Credennz Edusoft Private Limited<br />
        Bhubaneswar, Odisha, 751024<br />
        Email: <a href="mailto:hello@soocily.com" className="terms-link">hello@soocily.com</a>
      </p>
    </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Tc;
