import React from "react";

export default function comparison() {
  return (
    <div id="whyus">
      <div class="comparison-container">
        <div
          className="comparison-badge"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src="../img/comparison_logo.svg"
            alt="Trophy Icon"
            width="24"
            height="20"
            style={{ marginRight: "1px" }}
          />
          <span className="ra-logo-text" >Why Us</span>
        </div>

        <h1 class="title">Choosing Soocily Over Others</h1>

        <div class="comparison-grid">
          <div class="comparison-side box-other-agencies">
            <h2 class="side-title">Other Agencies</h2>
            <div class="comparison-list">
              <div class="comparison-item negative-item">
                Focusing on vanity metrics like likes and follows
              </div>
              <div class="comparison-item negative-item">
                Using generic content
              </div>
              <div class="comparison-item negative-item">
                Providing surface-level marketing strategies
              </div>
              <div class="comparison-item negative-item">
                Emphasizing quantity over quality
              </div>
              <div class="comparison-item negative-item">
                Offers one-size-fits all services
              </div>
              <div class="comparison-item negative-item">
                Lack of creativity & implementation power
              </div>
              <div class="comparison-item negative-item">
                Not result-driven or output-driven
              </div>
            </div>
          </div>

          <div class="vs-container">
            <div class="middle-circle"></div>
            <div class="inner-circle">
              <span>V/S</span>
            </div>
          </div>

          <div class="comparison-side box-soocily">
            <img src="/img/image.png" alt="Soocily" class="soocily-logo" />
            <div class="comparison-list">
              <div class="comparison-item positive-item">
                Prioritize authentic engagement and following
              </div>
              <div class="comparison-item positive-item">
                Tailored content driven by data and trends
              </div>
              <div class="comparison-item positive-item">
                Research-backed and result-based strategies
              </div>
              <div class="comparison-item positive-item">
                Focusing on high-value, impact creating content
              </div>
              <div class="comparison-item positive-item">
                Unique brands are presented with unique ideas
              </div>
              <div class="comparison-item positive-item">
                World class design & content team
              </div>
              <div class="comparison-item positive-item">
                Each service focuses on output requirements
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
