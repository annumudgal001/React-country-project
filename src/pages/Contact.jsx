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
        <div className="contact-wrapper">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
              name="username"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              name="email"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              name="subject"
            />
            <textarea
              placeholder="Your Message"
              rows="10"
              required
              name="message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};