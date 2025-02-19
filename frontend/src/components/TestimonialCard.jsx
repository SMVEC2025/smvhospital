import React from "react";
import '../styles/HomeTestimonial.css'

const TestimonialCard = () => {
  return (
    <div className="testimonial-card">
      <div className="quote-icon">❝</div>
      <p className="testimonial-text">
        Quickly fashion backend strategic theme areas with virtual growth
        strategies. Authoritatively formulate competitive experiences rather
        than granular manufactured products granular intelle capital without
        equity invested.
        Quickly fashion backend strategic theme areas with virtual growth
        strategies. Authoritatively formulate competitive experiences rather
        than granular manufactured products granular intelle capital without
        equity invested.
      </p>
      <div className="profile">
        <img
          src="https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="John D. Alexon"
          className="profile-img"
        />
        <div>
          <h4 className="name">John D. Alexon</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
