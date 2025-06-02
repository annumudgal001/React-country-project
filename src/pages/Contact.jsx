import React from 'react';

export const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="container-title">Contact Us</h2>
        <hr />

        <div className="contact-wrapper">
          <form>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              placeholder="Subject"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};