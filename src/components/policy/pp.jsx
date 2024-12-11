import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Footer from "../home/footer";
import "./pp.css";
 
const PrivacyPolicy = ({openContactModal}) => {
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
          <HashLink to="/#header">
            <img src="img/logosocily.png" alt="Soocily" />
          </HashLink>
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
          <HashLink
            to="/#contact"
            onClick={(e) => {
              e.preventDefault();
              if (openContactModal) openContactModal();
              else console.error("openContactModal is not passed as a prop.");
            }}
             className="hb-contact-btn"
          >
            Contact
          </HashLink>
        </div>
      </nav>
    {/* Main Content */}
    <div className="privacy-policy-container">
      {/* <button className="back-button" onClick={() => window.history.back()}>
    <div className="back-icon-container">
    <img
      src="https://www.svgrepo.com/show/101168/go-back-arrow.svg"
      className="back-icon"
      alt="Back icon"
    />
  </div>
  <span className="back-text">Back</span>
</button> */}
      <h1 >Privacy Policy</h1>
      <p><strong>Effective Date: 17 Jan 2023</strong></p>
      <p>
        <strong>Soocily</strong>, operated by <strong>Credennz Edusoft Private Limited</strong>, is committed to
        protecting your<br/> privacy. This Privacy Policy outlines how we collect,
        use, and safeguard your personal data<br/> when you interact with our
        website (<a href="https://www.soocily.com">www.soocily.com</a>) or use
        our services. By using our website <br/>or services, you consent to the
        practices described in this policy.
      </p>
    <hr/>
      <h2>Definitions</h2>
      <ul>
        <li>
          <strong>Personal Data (PD):</strong> Information that identifies you
          directly or indirectly, such as name,<br/> email, phone number, IP
          address, or online identifiers.
        </li>
        <li>
          <strong>Non-Personal Data (NPD):</strong> Information that does not
          identify you personally, such as <br/>browsing behavior and aggregated
          analytics.
        </li>
      </ul>
    <hr/>
      <h2>1. Data We Collect</h2>
      <h3>1.1 Information You Provide to Us</h3>
      <p>We collect data when you voluntarily interact with us, such as when you:</p>
      <ul>
        <li>Sign up for our services or newsletter.</li>
        <li>Submit inquiries or feedback via forms or email.</li>
        <li>Provide business details during service discussions.</li>
      </ul>
      <p>Examples of data we may collect include:</p>
      <ul>
        <li>Name, email address, and phone number.</li>
        <li>Company name, website, and preferences regarding services.</li>
        <li>Payment details (if applicable).</li>
      </ul>
    <hr/>
      <h3>1.2 Information We Collect Automatically</h3>
      <p>When you visit our website, we may collect information automatically, such as:</p>
      <ul>
        <li>Your IP address, browser type, and operating system.</li>
        <li>Pages you visit and the duration of your visit.</li>
        <li>Referral source and geographic location.</li>
      </ul>
      <p>
        <strong>Cookies:</strong> We use cookies to enhance your experience,
        analyze site usage, and personalize content. You can manage cookie
        preferences through your browser settings.
      </p>
<hr/>
      <h2>2. How We Use Your Data</h2>
      <ol>
        <li><strong>Service Delivery:</strong> To provide the services you request, including personalized recommendations.</li>
        <li><strong>Communication:</strong> To send updates, respond to inquiries, and deliver promotional materials if consented to.</li>
        <li><strong>Analysis and Improvement:</strong> To improve our website, services, and customer interactions.</li>
        <li><strong>Legal Compliance:</strong> To comply with applicable laws and protect our legal rights.</li>
      </ol>
<hr/>
      <h2>3. Sharing Your Data</h2>
      <p>We may share your data with:</p>
      <ul>
        <li><strong>Service Providers:</strong> Trusted third-party providers for hosting, analytics, and payment processing.</li>
        <li><strong>Legal Authorities:</strong> If required to comply with legal obligations.</li>
        <li><strong>Business Successors:</strong> In the event of a merger, acquisition, or sale
          of assets, your data may be transferred.
        </li>
      </ul>
      <p>We do not sell or trade your personal data to third parties.</p>
      <hr/>
      <h2>4. Your Rights</h2>
      <p>Under applicable laws, you have the right to:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of your personal data.</li>
        <li><strong>Rectification:</strong> Correct inaccuracies in your data.</li>
        <li><strong>Deletion:</strong> Request the deletion of your personal data (subject to legal obligations).</li>
        <li><strong>Data Portability:</strong> Obtain and reuse your data across different services.</li>
        <li><strong>Withdraw Consent:</strong> Opt out of communications or data processing.</li>
      </ul>
      <p>
        To exercise these rights, contact us at <a href="mailto:hello@soocily.com">hello@soocily.com</a>.
      </p>
<hr/>
      <h2>5. Data Retention</h2>
      <p>
        We retain your personal data only as long as necessary to:
      </p>
      <ul>
        <li>Fulfill the purposes outlined in this policy.</li>
        <li>Comply with legal obligations.</li>
        <li>Resolve disputes and enforce agreements.</li>
      </ul>
<hr/>
      <h2>6. Security Measures</h2>
      <p>
        We implement robust security measures to protect your data, including:
      </p>
      <ul>
        <li>Secure hosting environments.</li>
        <li>Encryption of sensitive information.</li>
        <li>Regular security audits and updates.</li>
      </ul>
      <p>
        While we take all reasonable steps to safeguard your data, no system can guarantee 100% security.
      </p>
<hr/>
      <h2>7. International Data Transfers</h2>
      <p>
        As a global company, we may process data outside your home country. We comply with relevant data protection laws and ensure adequate safeguards for cross-border transfers.
      </p>
<hr/>
      <h2>8. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to enhance functionality and gather analytics. By using our website, you agree to the use of cookies unless disabled in your browser.
      </p>
<hr/>
      <h2>9. Updates to This Policy</h2>
      <p>
        We may revise this policy periodically. Updates will be posted on this page with the effective date.
      </p>
<hr/>
      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or wish to exercise your rights, contact us at:
      </p>
      <address>
        <strong>Soocily</strong>
        <br />
        Credennz Edusoft Private Limited
        <br />
        Bhubaneswar, Odisha, 751024
        <br />
        Email: <a href="mailto:hello@soocily.com">hello@soocily.com</a>
      </address>
    </div>
    <Footer openContactModal={openContactModal} />
    </div>
  );
};
 
export default PrivacyPolicy;