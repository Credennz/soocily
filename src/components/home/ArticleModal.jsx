import React from "react";
import { useParams, Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    date: "Apr 12, 2024",
    title: "The Future of AI",
    fullContent: "Artificial Intelligence is rapidly evolving...",
  },
  {
    id: 2,
    date: "Apr 13, 2024",
    title: "Sustainable Living Tips",
    fullContent:
      "Small changes in our daily lives can have a big impact on the environment...",
  },
  {
    id: 3,
    date: "Apr 14, 2024",
    title: "The Art of Mindfulness",
    fullContent:
      "In our fast-paced world, practicing mindfulness can greatly improve mental health.",
  },
];

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));

  if (!article) {
    return (
      <div className="ra-modal-content">
        <h2 className="ra-modal-title">Article not found</h2>
        <Link to="/" className="ra-back-btn">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="ra-modal-content">
      <h2 className="ra-modal-title">{article.title}</h2>
      <p className="ra-modal-meta">{article.date} | Uploaded by TechInsider</p>
      <div>{article.fullContent}</div>
      <Link to="/" className="ra-back-btn">
        ← Back
      </Link>
    </div>
  );
};

export default ArticlePage;
