import React from 'react';
import "./casestudy.css";
 
const CaseStudies = () => {
  const handleReadMore = (caseNumber) => {
    console.log(`Navigating to case study ${caseNumber}`);
  };
 
  const caseStudies = [
    {
      title: "Multi-purpose",
      description: "Quotes and data snippets from your case studies make great testimonial tidbits for your the homepage, products/services pages.",
      caseNumber: "1"
    },
    {
      title: "Assist sales",
      description: "In addition to having case studies posted on your website, salespeople can share them with potential customers in conversations to help them build confidence in the prospect.",
      caseNumber: "2"
    },
    {
      title: "Earn trust",
      description: "Case studies turn positive customer opinions into tangible data that actually proves your value. In fact, it's among the most trusted content types 60% of marketers.",
      caseNumber: "3"
    }
  ];
 
  return (
    <section className="case-studies-section">
      <div className="header-container">
        <div className="case-studies-button">
          <div className="icon-container">
            <img src="/image/img.svg" alt="Icon" />
          </div>
          <small className="button-text">Case Studies</small>
        </div>
      </div>
 
      <div className="section-heading">
        <h2>How we helped brands</h2>
      </div>
 
      <div className="case-studies-grid">
        {caseStudies.map((caseStudy, index) => (
          <article key={index} className="case-card">
            <div className="category-tag-container">
              <span className="category-tag">Web Design</span>
            </div>
            <div className="case-image-container">
              <div className="case-image">Image</div>
            </div>
            <div className="case-content">
              <h3 className="case-title">{caseStudy.title}</h3>
              <p className="case-description">{caseStudy.description}</p>
              <div className="read-more-container">
                <a
                  href="#"
                  className="read-more"
                  onClick={(e) => {
                    e.preventDefault();
                    handleReadMore(caseStudy.caseNumber);
                  }}
                >
                  Read case study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
 
export default CaseStudies;