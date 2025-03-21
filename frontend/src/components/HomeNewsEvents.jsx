import React, { useState } from 'react'
import '../styles/HomeNewsEvents.css'
import '../i18n'
import { useTranslation } from "react-i18next";
import HomeHeadings from './HomeHeadings';
import { useNavigate } from "react-router-dom";

function HomeNewsEvents( {newsAndEvents} ) {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const { t } = useTranslation("home");
    const navigate = useNavigate();

    
    console.log(newsAndEvents)
    // For demonstration, we’ll inline the data here.
    // Replace or import your data from eventsData if you prefer.
    const eventsData = [
      { id: 1, title: 'NEMZ - EMAGAZINE', year: 2023, image: 'https://img.freepik.com/free-photo/surgeon-writing-down-some-operation-notes_329181-19658.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' },
      { id: 2, title: 'MAIS MANRAGE', year: 2023, image: 'https://img.freepik.com/free-photo/portrait-young-female-doctor-scrubs-protective-face-mask-preparing-anesthesia-machine-before-operation_657921-1099.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' },
      { id: 3, title: 'THE MATTER', year: 2023, image: 'https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21200.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' },
      { id: 4, title: 'THE MATTER', year: 2023, image: 'https://img.freepik.com/free-photo/patients-with-protection-mask-waiting-stomatology-reception-with-new-normal-staff-wearing-ppe-suit_482257-4811.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' },
      { id: 5, title: 'THE MATTER', year: 2023, image: 'https://img.freepik.com/free-photo/outdoors-diverse-team-volunteers-distribute-free-food-those-need-including-homeless-individuals-refugees-their-compassionate-service-provides-vital-support-underprivileged_482257-68552.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' },
      // ... add more events as needed
    ];
  
    // Update hovered image when mouse enters an event
    const handleMouseEnter = (image) => {
      setHoveredImage(image);
    };
  
    // Clear hovered image when mouse leaves
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
  
    // Track cursor position to move the image
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    const handleClick = (event) => {
      navigate(`/newsandevents/${event.acf.shorttitle}`, { state: { event } });
    };
  
  return (
    <div className="hne_container" onMouseMove={handleMouseMove}>
          <div className="sticky-heading">
          <HomeHeadings title={t("newsandeventshead")}/>
         
        </div>
      <ul className="event-list">
        {newsAndEvents.map((event,index) => (
          <li
            key={index}
            className="event-item"
            onMouseEnter={() => handleMouseEnter(event.acf.image)}
            onMouseLeave={handleMouseLeave}
            onClick={()=>handleClick(event)}
          >
            <span className="event-title">{event.acf.shorttitle}</span>
            <span className="event-desc">{event.acf.shortdescription}</span>
            <span className="event-year">{event.acf.date.split(" ").slice(0, 3).join(" ")}</span>
          </li>
        ))}
      </ul>

      {/* Conditionally render the hovered image */}
      {hoveredImage && (
        <img
          src={hoveredImage}
          alt="Preview"
          className="preview-image"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
          }}
        />
      )}
    </div>
  )
}

export default HomeNewsEvents