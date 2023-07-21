// src/components/Contact.js
import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <form>
          <div className="contact-item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="contact-item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="contact-item">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
