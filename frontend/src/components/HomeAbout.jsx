import React, { useState, useEffect, useContext } from "react";
import "../styles/HomeAbout.css"; // External CSS
import Button from "./Button";
import mobileapp from '../assets/images/mobileapp.png'
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import '../i18n'
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomeAbout = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { t } = useTranslation("home");
  const { isMobile } =useContext(AppContext)
  const navigate = useNavigate()

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
  const [imageIndex, setImageIndex] = useState(0);

  // Replace with actual image URLs
  const images = Array.from({ length: 81 }, (_, i) => `https://via.placeholder.com/300?text=Image+${i}`);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const index = Math.min(301, Math.max(0, Math.floor((scrollTop / maxScroll) * 1000)));
      setImageIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(imageIndex,"imageIndex")
  const getLeftContent = () => {
    switch (activeSection) {
      case "about":
        return {
          image: "https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_1280.jpg",
          background: "#f5f5f5",
          text: "About Our Company",
        };
      case "mobile":
        return {
          image: mobileapp,
          background: "#ffdfd8",
          text: "Our Mobile Application",
        };
      case "appointment":
        return {
          image: "https://img.freepik.com/free-vector/appointment-booking-landing-page-illustrated_23-2148579922.jpg?t=st=1734563485~exp=1734567085~hmac=bf33d91e52c03b4fef8f9596fe169cc8bfe080056ac6b7e65b789c506853582a",
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
        <img src={getLeftContent().image} alt="Section" className="ha_left-image" />
        {/* <h2>{getLeftContent().text}</h2> */}
      </div>

      {/* Right Scrollable Section */}
      <div className="ha_right-section" >
       {!isMobile && (
         <div className="frame_images">
         <div>
         <img 
        src={`/images/${imageIndex}.webp`} 
         style={{
    transition: "opacity 0.3s ease-in-out",
  }}
  loading="lazy"
        />
         </div>
         </div>
       )}
        <div id="about" className="section" >
          <h2>SMV Super Speciality Hospital</h2>
          <h3>{t("abouttitle")}</h3>
          <p>{t("aboutdescription")}</p>
         <div >
         <Button event='/about'  name="About us"/>
         </div>
        </div>
        <div id="mobile" className="section">
          <h2>Mobile Application</h2>
          <h3>{t("mobileapphead")}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{t("mobileappdesc")}</p>
          <Button name="Download mobile app"/>
        </div>
        <div id="appointment" className="section">
          <h2>Book an Appointment</h2>
          <h3>{t("appointmenthead")}</h3>
          <p>{t("appointmentdesc")}</p>
          <Button  event='/appointment' name='Book Appointment'/>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
