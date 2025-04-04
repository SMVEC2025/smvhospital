import React from "react";
import "../styles/About.css";

const AboutSection1 = () => {
  return (
    <section className="about-section">
    <div className="as_container">
      <div className="about-content">
        <span className="sub-title">WHO WE ARE</span>
        <h2 className="as_title">SMV Super Speciality Hospital</h2>
        <p className="as_description">
        SMV Superspecialty Hospital was established with a vision to provide world-class healthcare that is both accessible and affordable. Founded in 1999 with a modest 30-bed facility, the hospital set out to redefine patient care with a commitment to excellence and a personal touch. At a time when Trichy lacked advanced tertiary care facilities, SMV Superspecialty Hospital emerged as a pioneer, bridging the gap in high-quality medical services. Today, the hospital has grown into a leading multi-specialty institution, offering state-of-the-art treatments across various disciplines. With a dedicated team of medical professionals and cutting-edge technology, SMV Superspecialty Hospital continues its mission to deliver exceptional secondary and tertiary healthcare.
        </p>
        <div className="stats">
          <div className="stat-item">
            <i className="icon"></i>
            <h3>152K</h3>
            <p>Total Cases</p>
          </div>
          <div className="stat-item">
            <i className="icon"></i>
            <h3>95%</h3>
            <p>Sucess rate</p>
          </div>
        </div>
       
        <button className="contact-btn">CONTACT WITH US →</button>
      </div>
      <div className="about-image">
        <img src="https://picsum.photos/350/300" alt="Team" className="main-image" />
        <div className="experience-box">
          <h3>20</h3>
          <p>Years Of Experience</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default AboutSection1;