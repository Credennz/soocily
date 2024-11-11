// ThankYouModal.js
import React from "react";
import "./ThankYouModal.css";

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="thankyou-modal-overlay">
      <div className="thankyou-modal-content">
        <button className="thankyou-close-button" onClick={onClose}>
          ✖
        </button>
        <div className="thankyou-modal-icon">
          <img class="s-l-logo" src="img/logosocily.png" alt="soocily-logo" />
        </div>
        <h2 className="thankyou-modal-title">Thank You</h2>
        <p className="thankyou-modal-message">
          Our company values each and every customer. If you have any questions
          or feedback, please don’t hesitate to reach out.
        </p>
        <button className="thankyou-done-button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ThankYouModal;
