import React from "react";
import { useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import '../styles/DoctorsDetail.css'
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
const DoctorDetail = () => {
  const location = useLocation();
  const doctor = location.state?.doctor;

  if (!doctor) {
    return <h2>Doctor not found!</h2>;
  }

  return (
   <>
   <Navbar/>
   <div className="doctor-detail">
      {/* Banner */}
      <div className="banner">
        <div className="container">
          <div className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          </div>
          <div className="doctor-info">
            <h2>{doctor.name}</h2>
            <h4>{doctor.designation}</h4>
            <p className="intro">{doctor.introduction}</p>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Details */}
      <div className="details-container">
        <div className="details-section">
          <h3><FaGraduationCap /> Degrees</h3>
          <ul>
            {doctor.degrees.map((degree, index) => (
              <li key={index}><strong>{degree.title}</strong> <br /> {degree.institution}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3><FaBriefcase /> Experiences</h3>
          <ul>
            {doctor.experiences.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="details-section">
          <h3><FaPhoneAlt /> Contact Info</h3>
          <p><FaPhoneAlt /> {doctor.contact.phone}</p>
          <p><FaEnvelope /> {doctor.contact.email}</p>
        </div>
      </div>
    </div>
   <Footer/>
   </>
  );
};

export default DoctorDetail;
