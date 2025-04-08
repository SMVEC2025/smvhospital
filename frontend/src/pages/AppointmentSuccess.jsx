import React, { useEffect, useRef } from "react";
import { format } from "date-fns";
import '../styles/AppointmentSuccess.css'
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Lottie from "lottie-react";
import successanimation from "../assets/successanimation.json";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/navbar/Navbar";
import MobileSideBar from "../components/navbar/MobileSideBar";
import Hero6 from "../components/Hero6";
import Footer from "../components/footer/Footer";
const AppointmentSuccess = () => {
  const location = useLocation();
   const sectionRef = useRef(null);
  const { data,date,time,service} = location.state || {};
 useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });

 }, [])
 
  // Calendar Links
  const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Appointment &dates=${date}T${time}00Z/${date}T${time}00Z`;
  const yahooCalendarUrl = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=Appointment &st=${date}T${time}00Z`;
  const outlookCalendarUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=Appointment {doctor}&startdt=${date}T${time}00Z`;
  const icalCalendarUrl = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0A...%0AEND:VCALENDAR`;

  // Print function
  const handlePrint = () => {
    window.print();
  };
const heroData = {
  bgImg: 'images/hero-bg9.jpg',
  bgShape: 'shape/hero-shape.png',
  page: "Appointment Success",
  sliderImages: [
      { img: 'images/hero-img.png' },
      { img: 'images/hero-img1.png' },
      { img: 'images/hero-img2.png' },
      { img: 'images/hero-img.png' },
      { img: 'images/hero-img1.png' },
      { img: 'images/hero-img2.png' },
  ],
  title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
};
  return (
    <>
     <ScrollToTop/>
            <Hero6 data={heroData} />
    <div ref={sectionRef} className="appointment-success">
      <div className="success-card">
      <div className="lottie" style={{ width: "100px", margin: "auto" }}>
      <Lottie animationData={successanimation} loop={false} />
    </div>
        <h3>Your Appointment Booked Successfully!</h3>
        <p>We have sent your booking details to your email.</p>

        <div className="details">
          <div><strong>Service</strong> {service}</div>
          <div><strong>Date & Time</strong> {date} at {time}</div>
          <div><strong>Patient Name</strong>{data.firstname} </div>
        </div>

        {/* Calendar Buttons */}
        <div className="calendar-buttons">
          <a href={googleCalendarUrl} target="_blank" rel="noopener noreferrer"><span><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" /></span>Google Calendar</a>
          <a href={yahooCalendarUrl} target="_blank" rel="noopener noreferrer"><span><img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/6-yahoo_search-512.png" alt="" /></span> Yahoo Calendar</a>
          <a href={outlookCalendarUrl} target="_blank" rel="noopener noreferrer"><span><img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/216_Microsoft_logo_logos-512.png" alt="" /></span> Outlook Calendar</a>
          <a href={icalCalendarUrl} download="appointment.ics"><span><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-apple-128.png" alt="" /></span> iCal Calendar</a>
        </div>

        {/* Print Button */}
        <button className="print-button" onClick={handlePrint}>🖨️ Print Receipt</button>
      </div>
    </div>
    
    <Footer/>
    
    </>
  );
};

export default AppointmentSuccess;
