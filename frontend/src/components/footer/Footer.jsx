import React from 'react'
import '../../styles/Footer.css'
import logofull from '../../assets/images/smvwhite.png'
import { MdCall } from "react-icons/md";
import { IoMailSharp } from "react-icons/io5";
import { FaAmbulance } from "react-icons/fa";
import playstore from '../../assets/images/playstore.png'
import appstore from '../../assets/images/appstore.png'
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';


function Footer() {
    

    const handleAndroidDownload = () => {
      // Replace this with your actual Play Store app URL
      const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.healthray.patient&hl=en';
      window.open(playStoreUrl, '_blank'); // Open in new tab
    };
    const handleAppleDownload = () => {
      // Replace this with your actual Play Store app URL
      const playStoreUrl = '    https://apps.apple.com/in/app/healthray-for-patients/id6470002190';
      window.open(playStoreUrl, '_blank'); // Open in new tab
    };
    const handleCallClick = () => {
      const phoneNumber = '+911234567890'; // Replace with your phone number
      window.location.href = `tel:${phoneNumber}`;
    };

    const handleEmailClick = () => {
      const email = 'example@email.com'; // Replace with your email
      const subject = 'Hello from Website';
      const body = 'Hi, I wanted to get in touch with you.';
  
      // Create mailto link
      const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
    };
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-column">
          <div className="footer-brand">
            <Link to="/"><img src={logofull} alt="Footer Logo" /></Link>
            <p>Providing advanced medical care with compassion and expertise. Your health, our priority—always.</p>
            <div className="footer-social">
              <ul>
                <li><a href="#" className="footer-facebook"><i className="ti-facebook" title="Facebook"></i></a></li>
                <li><a href="#" className="footer-twitter"><i className="ti-twitter" title="Twitter"></i></a></li>
                <li><a href="#" className="footer-instagram"><i className="ti-instagram" title="Instagram"></i></a></li>
                <li><a href="#" className="footer-linkedin"><i className="ti-linkedin" title="LinkedIn"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-links">
            <h4>About Company</h4>
            <ul>
              <li><a href="#">About us</a></li>
              {/* <li><a href="#">Blog & news</a></li> */}
              {/* <li><a href="#">Treatments</a></li> */}
              {/* <li><a href="#">Speciality</a></li> */}
              <li><a href="#">International Patients</a></li>
              {/* <li><a href="#">Our Doctors</a></li> */}
              <li><a href="#">Contact us</a></li> 
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-links">
            <h4>Contact US</h4>
            <ul>
              <li><span><MdLocationOn/></span><a href="#">Kalitheerthal kuppam, Madagadipet, <br/>
              Puducherry - 605 107</a></li>
              <li><span><MdCall/></span><a href="#">0413-</a></li>
              <li><span><FaAmbulance/></span><a href="#"> +91 98765 43210</a></li>
              <li><span><IoMailSharp/></span><a href="#">contact@smvssh.com</a></li>
              


            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-app">
            <h4>Download App</h4>
            <p>Get easy access to healthcare services anytime, anywhere. Download our app for appointments, medical records, and more.</p>
        <img onClick={handleAndroidDownload} src={playstore} className="footer-app-img" alt="Play Store" />
            <img onClick={handleAppleDownload} src={appstore} style={{marginLeft:"1rem"}} className="footer-app-img" alt="App Store" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
        <div className="footer-policy">
          <ul>
            <li><a href="#">Terms of use</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>  )
}

export default Footer