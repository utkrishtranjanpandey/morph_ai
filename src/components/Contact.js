import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent (demo only)!");
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group full">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message..." required />
        </div>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}
