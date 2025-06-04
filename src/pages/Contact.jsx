import React from 'react';

export const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formInputData = Object.fromEntries(formData.entries());
    console.log('Form Submission:', formInputData);
    event.target.reset(); // Reset form after submission
  };

  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="container-title">Contact Us</h2>
        <hr />
        <div className="contact-notice">
          <p className="notice-text">
            <strong>Notice:</strong> The form submission is temporarily disabled for scheduled maintenance to enhance our contact system. Please try again later or reach out via email at  :   <a href="mailto:annuronitmudgal2@gmail">
              <b>  support-Team-WorldAtlas</b>
            </a>.
          </p>
        </div>
        <div className="contact-wrapper">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="username"
              disabled
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
              disabled
            />
            <input
              type="text"
              placeholder="Subject"
              required
              name="subject"
              disabled
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              required
              name="message"
              disabled
            ></textarea>
            <button type="submit" disabled>Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};