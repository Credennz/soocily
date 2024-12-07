import React from "react";
import { Link } from "react-router-dom";


export default function Footer({ openContactModal }) {
  
  return (
    <div>
      <footer>
        <img className="tf-logo" src="/img/logo.png" alt="Soochr Logo" />
        <p className="p-ft">
          Experienced team delivering exceptional digital <br />
          solutions tailored to your brand.
        </p>
        <div className="tf-footer-links">
          <button><a href="/#services">Service</a></button>
          <button><a href="/#about">About Us</a></button>
          <button><a href="/#in">Industries</a></button>
          <button><a href="/#whyus">Why us</a></button>
          <button><a href="/#blogs">Blogs</a></button>
          <button><a href="/#contact"  onClick={(e) => {
                    e.preventDefault();
                    openContactModal();
                  }}>Contact</a></button>
        </div>
        <div className="tf-and-c">
          <a href="/tc">Terms and Conditions</a>
          <a href="/pp">Privacy Policy</a>
          <a href="/cp">Customer Policy</a>
        </div>
        <hr />
        <div className="tf-x">
          <div className="tf-attribution">Developed by credennz.com</div>
          <div className="tf-social-icons">
            <a href="#">
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
}
