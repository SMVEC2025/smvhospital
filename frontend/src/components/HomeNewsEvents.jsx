import React, { useState } from 'react'
import '../styles/HomeNewsEvents.css'
import '../i18n'
import { useTranslation } from "react-i18next";
import HomeHeadings from './HomeHeadings';
import { useNavigate } from "react-router-dom";
import TitleHeader from './TitleHeader';

function HomeNewsEvents( {newsAndEvents} ) {
    const [hoveredImage, setHoveredImage] = useState(null);
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
    const { t } = useTranslation("home");
    const navigate = useNavigate();

    
    // For demonstration, we’ll inline the data here.
    // Replace or import your data from eventsData if you prefer.

  
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
     <TitleHeader name='news & events' color='gray'/>
         
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