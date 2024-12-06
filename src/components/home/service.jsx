
import React from "react";

export default function Service() {
  return (
    <div id="services" class="ssv">
      <div class="lcontainer">
        <div class="lservice">
          <div class="lservice_logo">
            <img src="..\img\icon111.svg" alt="ServiceLogo" />
          </div>
          <div class="lservice_name">
            <span className="ra-logo-text">Services</span>
          </div>
        </div>
      </div>
      <h1>Comprehensive Services We Offer</h1>
      <div class="services-container">
        <div class="service-card">
          <div>
            <h2>Social Media Management</h2>
            <p>
              Building a cult-following with data-driven posts, strategic
              collaboration with creators and creating sustained engagement by
              aligning your brand goal.
            </p>
          </div>
          <ul>
            <div class="Social-item1">
              <span class="checkmark"></span>
              Content Planning
            </div>
            <div class="Social-item2">
              <span class="checkmark"></span>
              Strategic Implementations
            </div>
            <div class="Social-item3">
              <span class="checkmark"></span>
              Influencers and creators collaborations
            </div>
          </ul>
        </div>
        <div class="service-card">
          <div>
            <h2>Content Production and Creation</h2>
            <p>
              Taking content creation to a whole new level for your brand by
              implementing strategic content integration with value based output
              expectations.
            </p>
          </div>
          <ul>
            <div class="content-item1">
              <span class="checkmark"></span>
              Creative graphics
            </div>
            <div class="content-item2">
              <span class="checkmark"></span>
              Strategic planning
            </div>
            <div class="content-item3">
              <span class="checkmark"></span>
              Influencers and creators collaborations
            </div>
          </ul>
        </div>
        <div class="service-card card-span">
          <div>
            <h2>Influencers and Collaborations</h2>
            <p>Schedule one-time or recurring tasks exactly when you want.</p>
          </div>
          <div class="features-list">
            <div class="shadow-background"></div>
            <div class="shadow-card"></div>
          </div>
        </div>
        <div class="service-card">
          <div>
            <h2>Digital Ads</h2>
            <p>
              Experience the joy of completing tasks with our satisfying
              checklists. Try it out below!
            </p>
          </div>
          <ul>
            <div class="checklist">
              <div class="item completed">
                <span class="checkmark"></span>
                <span>Web design</span>
              </div>
              <div class="item">
                <span class="checkmar"></span>
                <span>Design system</span>
              </div>
              <div class="item">
                <span class="checkmar"></span>
                <span>Framer web development</span>
              </div>
            </div>
          </ul>
        </div>
        <div class="service-card">
          <div class="x1">
            <h2>Print Media</h2>
            <p>
              Organize and centralize your tasks into distinct lists for various
              purposes.
            </p>
          </div>
          <ul>
            <div class="Print-item1">
              <span class="checkmark"></span>
              Creative graphics
            </div>
            <div class="Print-item2">
              <span class="checkmark"></span>
              Strategic planning
            </div>
            <div class="Print-item3">
              <span class="checkmark"></span>
              Influencers and creators collaborations
            </div>
          </ul>
        </div>
        <div class="service-card">
          <div>
            <h2>Websites and UI/UX</h2>
            <p>
              Attatch notes to your tasks with links or any fleeting thought,
              auto open links when your task goes live.
            </p>
          </div>
          <div class="editor-interface">
            <img src="../img/need_a_website.svg" alt="" />
          </div>
        </div>
        <div class="service-card">
          <div>
            <h2>E-Com Management</h2>
            <p>
              Share a copy of your list to anyone so they can use it in their
              account.
            </p>
          </div>
          <div class="support-container">
            <div class="support-icons">
              <p>We support</p>
              <div class="support-icons2">
                <div>
                <span class="dot">
                <img src="..\img\flipkart-icon.svg" className="sss" alt=""/>
                </span>
                </div>
                <div>
                <span class="dot">
                <img src="..\img\Amazon_icon11.svg" className="ssx" alt=""/>
                </span>
                </div>
                <div>
                <span class="dot">
                <img src="..\img\sophy11.svg"  className="sxx" alt=""/>
                </span>
                </div>
                <button class="website-button">Own a website?</button>
              </div>
              <div className="conx">
              <button class="ecom-button"><a href="https://wa.me/+918895244936" className="xtx" >Chat with experts <img src="..\img\vector.svg" alt="" style={{ width: "15px", height: "13px" ,top:"3px",left:"3px",position:"relative"}}
              /> </a></button>            
              </div>
            </div>
          </div>
        </div>
        <div class="service-card">
          <div class="x2">
            <h2>Brand Shoot and TVC</h2>
            <p>Get instant reminders for upcoming tasks.</p>
          </div>
          <ul>
            <div class="Brand-item1">
              <span class="checkmark"></span>
              Creative graphics
            </div>
            <div class="Brand-item1">
              <span class="checkmark"></span>
              Strategic planning
            </div>
            <div class="Brand-item1">
              <span class="checkmark"></span>
              Influencers and creators collaborations
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}                 
