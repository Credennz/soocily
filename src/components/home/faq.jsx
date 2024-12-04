import React, { useState } from "react";

// Data for FAQ
const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of web design and development services, including website redesign, content creation, SEO optimization, and more.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our pricing depends on the scope of the project. Contact us for a custom quote based on your specific needs.",
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer:
      "Yes, we offer maintenance and ongoing support packages to ensure your website remains up-to-date and secure.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes, we specialize in website redesigns to improve user experience, design aesthetics, and functionality.",
  },
  {
    question: "How long does it take to complete a website?",
    answer:
      "Completion time varies depending on the complexity of the project. Most websites take 4-8 weeks to complete.",
  },
  {
    question: "Do you offer hosting and domain registration services?",
    answer:
      "Yes, we offer hosting and domain registration as part of our service packages.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our design process involves understanding your needs, creating wireframes, and delivering a final polished design that aligns with your vision.",
  },
  {
    question: "Can you help with content creation for the website?",
    answer:
      "Yes, we offer content creation services to help you develop engaging and effective website content that aligns with your brand and goals.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* FAQ Section */}
      <section className="tf-faq">
        <center>
          <header className="tf-faq-header">
            <div className="tf-faq-button">
              <img src="/img/ss2.png" alt="FAQ Logo" className="tf-faq-logo" />
              <span className="ra-logo-text">
                <h6>FAQ's</h6>
              </span>
            </div>
          </header>
        </center>
        <h2>Frequently Asked Questions</h2>

        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`tf-faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button onClick={() => toggleFAQ(index)}>
              <p>
                <b>{faq.question}</b>
              </p>
              <div className="tf-plus-icon">
                {activeIndex === index ? "+" : "+"}
              </div>
            </button>
            {activeIndex === index && (
              <div className="tf-content">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
