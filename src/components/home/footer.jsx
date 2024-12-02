import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <footer>
        <img className="tf-logo" src="/img/logo.png" alt="Soochr Logo" />
        <p className="p-ft">
          Experienced team delivering exceptional digital <br />
          solutions tailored to your brand.
        </p>
        <div className="tf-footer-links">
          <button>About</button>
          <button>Services</button>
          <button>Why Us</button>
          <button>Pricing</button>
          <button>Works</button>
          <button>Contact</button>
        </div>
        <div className="tf-and-c">
          <Link to="/tc">Terms and Conditions</Link>
          <a href="#">Privacy Policy</a>
          <a href="#">Customer Policy</a>
        </div>
        <hr />
        <div className="tf-x">
          <div className="tf-attribution">Developed by credennz.com</div>
          <div className="tf-social-icons">
            <a href="#">
              <img src="/img/Linkedin_logo.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              <img src="/img/twitter_logo.svg" alt="Twitter" />
            </a>
            <a href="#">
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
}
