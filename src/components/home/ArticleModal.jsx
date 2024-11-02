import React from 'react';

const ArticleModal = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{article.title}</h2>
        <p className="modal-meta">
          {article.date} | Uploaded by {article.uploadedBy}
        </p>
        <div className="modal-body">{article.fullContent}</div>
        <button className="modal-back-btn" onClick={onClose}>
          ← Back to Articles
        </button>
      </div>
    </div>
  );
};

export default ArticleModal;
