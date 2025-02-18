import React, { useState, useEffect } from "react";
import "../styles/HomeAbout.css"; // External CSS
import Button from "./Button";

const HomeAbout = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getLeftContent = () => {
    switch (activeSection) {
      case "about":
        return {
          image: "https://cdn.mrkhub.com/instapage-landings-frontend/169/images/_pages/template/pictures/advantages-easy.webp",
          background: "#f5f5f5",
          text: "About Our Company",
        };
      case "mobile":
        return {
          image: "https://cdn.mrkhub.com/instapage-landings-frontend/169/images/_pages/template/pictures/advantages-multiply.webp",
          background: "#d1e8ff",
          text: "Our Mobile Application",
        };
      case "appointment":
        return {
          image: "https://cdn.mrkhub.com/instapage-landings-frontend/169/images/_pages/template/pictures/advantages-loads.webp",
          background: "#ffdfd4",
          text: "Book an Appointment",
        };
      default:
        return {};
    }
  };

  return (
    <div className="ha_container">
      {/* Left Sticky Section */}
      <div className="ha_left-section" style={{ background: getLeftContent().background }}>
        <img src={getLeftContent().image} alt="Section" className="left-image" />
        {/* <h2>{getLeftContent().text}</h2> */}
      </div>

      {/* Right Scrollable Section */}
      <div className="ha_right-section">
        <div id="about" className="section">
          <h2>Welcome to SMV Super Speciality Hospital</h2>
          <h3><span>Bringing Hope </span>And Healing Through <br/> Innovative Medicine.</h3>
          <p>Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming and compassionate environment.On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your physical therapy care. Our goal is to provide the highest quality and most up-to-date physical therapy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button/>
        </div>
        <div id="mobile" className="section">
          <h2>Mobile Application</h2>
          <h3><span>Bringing Hope </span>And Healing Through <br/> Innovative Medicine.</h3>
          <p>Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming and compassionate environment.On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your physical therapy care. Our goal is to provide the highest quality and most up-to-date physical therapy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button/>
        </div>
        <div id="appointment" className="section">
          <h2>Book an Appointment</h2>
          <h3><span>Bringing Hope </span>And Healing Through <br/> Innovative Medicine.</h3>
          <p>Our mission is to improve the health of our community by providing high quality, comprehensive medical care in a welcoming and compassionate environment.On behalf of the entire staff, we would like to welcome you to our clinic. We are pleased to have the opportunity to assist you with your physical therapy care. Our goal is to provide the highest quality and most up-to-date physical therapy. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button/>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
