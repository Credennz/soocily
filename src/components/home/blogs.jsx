import React, { useState, useEffect } from "react";

const articles = [
  {
    id: 1,
    date: "Apr 12, 2024",
    title: "The Future of AI",
    content:
      "Artificial Intelligence is rapidly evolving, changing the way we live and work...",
    uploadedBy: "TechInsider",
    fullContent:
      "Artificial Intelligence is rapidly evolving, changing the way we live and work. This technology is transforming industries, healthcare, education, and our daily lives in unprecedented ways.",
  },
  {
    id: 2,
    date: "Apr 13, 2024",
    title: "Sustainable Living Tips",
    content:
      "Small changes in our daily lives can have a big impact on the environment...",
    uploadedBy: "EcoWarrior",
    fullContent:
      "Small changes in our daily lives can have a big impact on the environment. From reducing plastic usage to choosing renewable energy sources, every action counts towards a sustainable future.",
  },
  {
    id: 3,
    date: "Apr 14, 2024",
    title: "The Art of Mindfulness",
    content:
      "In our fast-paced world, practicing mindfulness can greatly improve mental health...",
    uploadedBy: "ZenMaster",
    fullContent:
      "In our fast-paced world, practicing mindfulness can greatly improve mental health. Learn techniques for staying present and reducing stress in your daily life.",
  },
];

const Blogs = () => {
  return (
    <div id="pricing" className="ra-container">
      <center>
        <div className="ra-blogs">
          <div className="ra-logox">
            <img
              src="../img/blogs.png"
              alt="blogs Logo"
              className="ra-blogs-logo"
            />
          </div>
          <div className="ra-logo-text">
            <span>Blogs</span>
          </div>
        </div>
      </center>
      <HomePage />
    </div>
  );
};

const HomePage = () => (
  <div>
    <h1 className="ra-title">Recent Articles</h1>
    <div className="ra-articles-grid">
      {articles.map((article) => (
        <div key={article.id} className="ra-article-card">
          <div className="ra-article-content">
            <div className="ra-article-date">{article.date}</div>
            <h2 className="ra-article-title">{article.title}</h2>
            <p className="ra-article-excerpt">{article.content}</p>
            <div className="ra-article-footer">
              <div className="ra-uploaded-by">
                Uploaded by {article.uploadedBy}
              </div>
              <a
                href={`/article.html?id=${article.id}`}
                className="ra-read-more-btn"
                aria-label={`Read more about ${article.title}`}
              >
                →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blogs;
