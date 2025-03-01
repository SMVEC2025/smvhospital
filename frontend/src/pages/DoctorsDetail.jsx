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
        <img src={doctor.image} alt="Doctor" />
      </div>
      <div className="doctor-info">
        <h2>Micheal Bush</h2>
        <p className="designation">SENIOR DR. AT BRIVONA</p>
        <h3>My Biography</h3>
        <p className="bio-text">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in that some form injected humour or
          randomised words which don’t look even slightly believable.
        </p>
        <div className="contact-info">
          <div className="address">
            <strong>Address Info :</strong>
            <p>561 Murray Lane, Napa Minnesota 48059-6608</p>
          </div>
          <div className="phone">
            <strong>Phone :</strong>
            <p><b>(123) 456-7890</b></p>
            <a href="mailto:info@example.com">info@example.com</a>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
          of type and scrambled it to make a type specimen book.
        </p>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
          totam rem aperiam, eaque.
        </p>
      </div>

      <div className="skill-section">
        <h2>Experience & Skill</h2>
        <div className="skill">
          <span>Diagnostic</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "88%" }}></div>
          </div>
          <span className="percentage">88%</span>
        </div>

        <div className="skill">
          <span>Consultation</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "72%" }}></div>
          </div>
          <span className="percentage">72%</span>
        </div>

        <div className="skill">
          <span>Production</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "83%" }}></div>
          </div>
          <span className="percentage">83%</span>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default DoctorDetail;
