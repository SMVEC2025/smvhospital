import React from "react";
import "../styles/TestimonialSection.css";
import profile1 from "/images/1.webp";
import profile2 from "/images/1.webp";

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-image-box">
          <div className="placeholder-image" />
        </div>
        <div className="testimonial-content-box">
          <p className="testimonial-subtitle">Testimonials</p>
          <h2 className="testimonial-title">
            <span className="highlight">500+</span> Happy Clients Said <br />
            To US They Are Satisfied
          </h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="quote-symbol">“</div>
              <p className="testimonial-text">
                We value your feedback and are committed to providing
                exceptional service to all our clients. If you have any
                concerns or questions
              </p>
              <div className="testimonial-user">
                <img src={profile1} alt="Jang Wonyoung" />
                <div>
                  <strong>Jang Wonyoung</strong>
                  <p>Korea</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                Our priority, and we appreciate the opportunity to address any
                issues and ensure your complete satisfaction.
              </p>
              <div className="testimonial-user">
                <img src={profile2} alt="Jennie Kim" />
                <div>
                  <strong>Jennie Kim</strong>
                  <p>USA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
