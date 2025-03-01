import React, { useState } from 'react';
import '../styles/About.css'
import SpecialtyCard from './SpecialtyCard';
function AboutSpeciality() {
    const [isHovered, setIsHovered] = useState(false);
    const cards = [
      "142, 249, 252",
      "142, 252, 204",
      "142, 252, 157",
      "215, 252, 142",
      "252, 252, 142",
      "252, 208, 142",
      "252, 142, 142",
      "252, 142, 239",
      "204, 142, 252",
      "142, 202, 252",
    ];
  
    return (
      <div 
        className="as_wrapper" 
      
      >
        <div 
          className="inner" 
          style={{ "--quantity": cards.length, animationPlayState: isHovered ? "paused" : "running" }}
        >
          {cards.map((color, index) => (
            <div
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
              className="card"
              key={index}
              style={{ "--index": index, "--color-card": color }}
            >
              <div className="img">
                <SpecialtyCard/>
              </div>
            </div>
          ))}
          
        </div>
      
      </div>
   
  );
}

export default AboutSpeciality;
