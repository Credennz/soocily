import React, { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";
import Footer from "../home/footer";
import "./cp.css";
 
const CustomerPolicy = ({openContactModal}) => {
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
  const toggleMenu = () => {
    setMenuActive(!menuActive);
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
    <div className="policy-container">
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
      <h1>Customer Policy</h1>
      <p><strong>Effective Date:</strong> 17 Jan 2023</p>
      <p>
        At Soocily, we prioritize delivering exceptional digital marketing services tailored to your needs.
      </p>
 
      <section>
        <h2>1. Commitment to Customer Satisfaction</h2>
        <p>
          We focus on results-driven marketing solutions with transparent communication and measurable outcomes.
        </p>
      </section>
      <hr/>
      <section>
        <h2>2. Scope of Services</h2>
        <ul>
          <li>Social media marketing and management</li>
          <li>Brand strategy and development</li>
          <li>Influencer marketing</li>
          <li>Paid advertising (Google Ads, social media, etc.)</li>
          <li>Content creation and management</li>
        </ul>
      </section>
      <hr/>
      <section>
        <h2>3. Communication and Support</h2>
        <ul>
          <li><strong>Updates:</strong> Regular campaign progress updates.</li>
          <li><strong>Support:</strong> Contact via email or phone (Mon–Fri, 9:00 AM–6:00 PM IST).</li>
          <li><strong>Response Time:</strong> Queries answered within 24 business hours.</li>
        </ul>
      </section>
      <hr/>
      <section>
        <h2>4. Customer Responsibilities</h2>
        <p>Customers must:</p>
        <ul>
          <li>Provide accurate project information.</li>
          <li>Share necessary platform access.</li>
          <li>Review deliverables promptly to avoid delays.</li>
        </ul>
      </section>
      <hr/>
      <section>
        <h2>5. Payment Terms</h2>
        <ul>
          <li><strong>Billing:</strong> Monthly/quarterly as per the agreement.</li>
          <li><strong>Methods:</strong> Bank transfer, UPI, cash.</li>
          <li><strong>Due Date:</strong> Within 1–30 days of invoice.</li>
          <li><strong>Late Payments:</strong> May result in service suspension or mutual resolution.</li>
        </ul>
      </section>
      <hr/>
      <section>
        <h2>6. Confidentiality</h2>
        <p>
          All shared data remains secure and confidential unless required by law.
        </p>
      </section>
      <hr/>
      <section>
        <h2>7. Service Modifications</h2>
        <p>
          Scope changes must be mutually documented and may affect timelines and costs.
        </p>
      </section>
      <hr/>
      <section>
        <h2>8. Dispute Resolution</h2>
        <p>
          Disputes are resolved amicably, starting with mediation. Legal matters adhere to Odisha, India laws.
        </p>
      </section>
      <hr/>
      <section>
        <h2>9. Service Termination</h2>
        <p>
          Either party can terminate the agreement with a 30-day written notice. Outstanding invoices must be cleared.
        </p>
      </section>
      <hr/>
      <section>
        <h2>10. Feedback and Improvement</h2>
        <p>
          We value your feedback. Share suggestions at <a href="mailto:hello@soocily.com">hello@soocily.com</a>.
        </p>
      </section>
      <hr/>
      <section>
        <h2>Contact Us</h2>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:hello@soocily.com">hello@soocily.com</a></li>
          <li>
            <strong>Address:</strong> Credennz Edusoft Private Limited, Bhubaneswar, Odisha, 751024, India
          </li>
        </ul>
      </section>
 
      <p>
        Thank you for trusting Soocily. We’re committed to a successful partnership.
      </p>
    </div>
    <Footer openContactModal={openContactModal} />
    </div>
  );
};
 
export default CustomerPolicy;