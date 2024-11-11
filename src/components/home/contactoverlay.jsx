import React from "react";
import "./contactoverlay.css";

const ContactModal = ({ isOpen, closeModal, handleFormSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay">
      <div className="contact-modal-content">
        <button className="contact-modal-close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2 className="contact-modal-title">Send Us a Message</h2>
        <form>
          <div className="contact-modal-form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="contact-modal-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="contact-modal-form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit" className="contact-modal-submit-btn">
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
