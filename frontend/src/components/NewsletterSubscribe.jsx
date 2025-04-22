import React, { useState } from "react";
import "../styles/NewsletterSubscribe.css";
import { useSSR } from "react-i18next";
 
const NewsletterSubscribe = () => {
  const [value,setValue] = useState('')
  function handleClick(e){
    e.preventDefault()
    setValue('')
  }
  return (
    <section className="newsletter-wrapper">
      <div className="newsletter-box">
        <div className="newsletter-left">
          <p className="subscribe-now">Subscribe Now</p>
          <h2 className="newsletter-title">
            Subscriber To <span className="highlight">Our</span> <br /> Newsletter
          </h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Email Address" required  value={value} onChange={(e)=>{setValue(e.target.value)}} />
            <button onClick={handleClick} >Subscribe</button>
          </form>
          <p className="signin-note">
          </p>
        </div>
        <div className="newsletter-right">
          <div className="image-placeholder"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
