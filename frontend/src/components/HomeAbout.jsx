import React, { useRef, useState, useEffect, useContext } from 'react';
import "../styles/HomeAbout.css"; // External CSS
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { AppContext } from "../context/AppContext";
import '../i18n'
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const HomeAbout = () => {
  const [activeSection, setActiveSection] = useState("about");
  const { t } = useTranslation("home");
  const { isMobile } = useContext(AppContext)
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

  const getLeftContent = () => {
    switch (activeSection) {
      case "about":
        return {
          image: "/homeabout/hospital.jpg",
          background: "#f5f5f5",
          text: "About Our Company",
        };
      case "mobile":
        return {
          image: "/homeabout/mobile.jpg",
          background: "#ffdfd8",
          text: "Our Mobile Application",
        };
      case "appointment":
        return {
          image: "/homeabout/laptop.jpg",
          background: "#ffdfd4",
          text: "Book an Appointment",
        };
      default:
        return {};
    }
  };
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const [loadedImages, setLoadedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  console.log("index", currentIndex)
  // Load images
  useEffect(() => {
    const loadImage = (index) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = `/images/${index}.webp`;
        img.onload = () => resolve(img);
        img.onerror = () => reject(`Failed to load image ${index}`);
      });
    };

    const loadAllImages = async () => {
      try {
        const promises = Array.from({ length: 252 }, (_, i) => loadImage(i + 1));
        const images = await Promise.all(promises);
        setLoadedImages(images);
      } catch (err) {
        console.error(err);
      }
    };

    loadAllImages();
  }, []);

  // Draw image to canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && loadedImages.length > 0) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(loadedImages[currentIndex], 0, 0, canvas.width, canvas.height);
      }
    }
  }, [currentIndex, loadedImages]);

  // Handle scroll
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (loadedImages.length > 0 && isInView) {
          const scrollPosition = window.scrollY;
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercentage = scrollPosition / totalHeight;

          const speedFactor = 3; // adjust as needed
          const index = Math.floor(scrollPercentage * (loadedImages.length - 1) * speedFactor);
          setCurrentIndex(Math.min(Math.max(index, 0), loadedImages.length - 1));
        }
      }, 10);
    };

    if (isInView) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isInView, loadedImages]);

  // IntersectionObserver to detect visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsInView(entries[0].isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // Resize canvas on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    const resize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);


  return (
    <div className="ha_container">
      {/* Left Sticky Section */}
      <div className="ha_left-section" >
        <img src={getLeftContent().image} alt="Section" className="ha_left-image" />
        {/* <h2>{getLeftContent().text}</h2> */}
      </div>

      {/* Right Scrollable Section */}
      <div className="ha_right-section" >
        {/* {!isMobile && (
          <div className="frame_images">
            <div ref={containerRef}>
              <canvas
                ref={canvasRef}

              />
            </div>
          </div>
        )} */}
        <div id="about" className="section" >
          <h2>SMV Super Speciality Hospital</h2>
          <h3>{t("abouttitle")}</h3>
          <p>{t("aboutdescription")}</p>
          <div >
            <Button event='/about' name="About us" />
          </div>
        </div>
        <div id="mobile" className="section">
          <h2>Mobile Application</h2>
          <h3>{t("mobileapphead")}</h3>
          <p style={{ whiteSpace: "pre-line" }}>{t("mobileappdesc")}</p>
          <Button name="Download mobile app" event='handleRedirect' />
        </div>
        <div id="appointment" className="section">
          <h2>Book an Appointment</h2>
          <h3>{t("appointmenthead")}</h3>
          <p>{t("appointmentdesc")}</p>
          <Button event='/appointment' name='Book Appointment' />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;





