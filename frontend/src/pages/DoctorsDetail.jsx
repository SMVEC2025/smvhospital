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
        {doctor.acf.name}
      </div>
      <div className="doctor-profile-container">
        <div className="doctor-image">
          <img src={`${doctor.acf.image}`} alt="Doctor" />
        </div>
        <div className="doctor-info">
          <h2> {doctor.acf.name}</h2>
          <p className="designation">{doctor.acf.designation}</p>
          <h3>My Biography</h3>
          <p className="bio-text">
            {doctor.acf.introduction}
          </p>
          <div className="contact-info">
            <div className="address">
              <strong>Address Info :</strong>
              <p>{doctor.acf.address}</p>
            </div>
            <div className="phone">
              <strong>Phone :</strong>
              <p><b> {doctor.acf.phone}</b></p>
              <a href={`mailto:${doctor.acf.email}`}> {doctor.acf.email}</a>
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
            {doctor.acf.professionalpassion}
          </p>
        </div>
        <div className="skill-section">
          <h2>Experience & Skill</h2>
          <div className="skill">
              <span>{doctor.acf.skills?.skill1}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width:`${doctor.acf.skills?.percentage1}%` }}></div>
              </div>
              <span className="percentage">{doctor.acf.skills?.percentage1}%</span>
            </div>
            <div className="skill">
              <span>{doctor.acf.skills?.skill2}</span>
              <div className="progress-bar">
                <div className="progress" style={{ width:`${doctor.acf.skills?.percentage2}%` }}></div>
              </div>
              <span className="percentage">{doctor.acf.skills?.percentage2}%</span>
            </div>
        
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DoctorDetail;
