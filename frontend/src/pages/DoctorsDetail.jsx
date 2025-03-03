import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import '../styles/DoctorsDetail.css'
import { RxCross2 } from 'react-icons/rx';
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Hero6 from "../components/Hero6";
const DoctorDetail = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;
  console.log(doctor)
  if (!doctor) {
    return <h2>Doctor not found!</h2>;
  }

  return (
    <>
      <Navbar />
      <div className="doctorshead">
        {doctor.name}
      </div>
      <div className="doctor-profile-container">
        <div className="doctor-image">
          <img src={`http://localhost:1337${doctor.image.url}`} alt="Doctor" />
        </div>
        <div className="doctor-info">
          <h2> {doctor.name}</h2>
          <p className="designation">{doctor.designation}</p>
          <h3>My Biography</h3>
          <p className="bio-text">
            {doctor.introduction}
          </p>
          <div className="contact-info">
            <div className="address">
              <strong>Address Info :</strong>
              <p>{doctor.address}</p>
            </div>
            <div className="phone">
              <strong>Phone :</strong>
              <p><b> {doctor.phone}</b></p>
              <a href={`mailto:${doctor.email}`}> {doctor.email}</a>
            </div>
          </div>
          <div className="social-info">
            <span>Social Info:</span>
            <div className="social-icons">
              <RxCross2 />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
      <div className="experience-container">
        <div className="passion-section">
          <h2>Professional passion?</h2>
          <p>
            {doctor.professionalpassion}
          </p>
        </div>
        <div className="skill-section">
          <h2>Experience & Skill</h2>
          {doctor.skills.map((element, index) => (
            <div className="skill">
              <span>{element.skill}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: `${element.percentage}%}` }}></div>
              </div>
              <span className="percentage">{element.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorDetail;
