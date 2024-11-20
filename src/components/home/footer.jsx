import React from "react";

export default function footer() {
  return (
    <div>
      <footer>
        <img class="tf-logo" src="/img/logo.png" alt="Soochr Logo" />
        <p class="p-ft">
          Experienced team delivering exceptional digital <br />
          solutions tailored to your brand.
        </p>
        <div class="tf-footer-links">
          <button>
            <b />
            About
          </button>
          <button>
            <b />
            Services
          </button>
          <button>
            <b />
            Why Us
          </button>
          <button>
            <b />
            Pricing
          </button>
          <button>
            <b />
            Works
          </button>

          <button>
            <b />
            Contact
          </button>
        </div>
        <div class="tf-and-c">
         <a href="#">Terms and conditions</a>
         <a href="#">Privacy Policy</a>
         <a href="#">costomer Policy</a>
        </div>
        <hr />
        <div class="tf-x">
          <div class="tf-attribution">Developed by credennz.com</div>
          <div class="tf-social-icons">
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

          <div class="tf-attribution">
            &copy;2024 Soocily. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}