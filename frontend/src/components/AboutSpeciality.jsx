import React, { useState } from 'react';
import '../styles/About.css'
import SpecialtyCard from './SpecialtyCard';
function AboutSpeciality() {
    const [isHovered, setIsHovered] = useState(false);
    const cards = [
      {
        name: "Orthopaedics",
        image: "https://images.pexels.com/photos/27376663/pexels-photo-27376663/free-photo-of-a-black-and-white-photo-of-a-human-skeleton.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "142, 249, 252",
      },
      {
        name: "Neurology",
        image: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "142, 252, 204",
      },
      {
        name: "Plastic Surgery",
        image: "https://images.pexels.com/photos/7585311/pexels-photo-7585311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        color: "142, 252, 157",
      },
      {
        name: "Cardiology",
        image: "https://images.pexels.com/photos/8460093/pexels-photo-8460093.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "215, 252, 142",
      },
      {
        name: "General Surgery",
        image: "https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "252, 252, 142",
      },
      {
        name: "Anaesthesiology",
        image: "https://images.pexels.com/photos/4046999/pexels-photo-4046999.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "252, 208, 142",
      },
      {
        name: "Pediatric Surgery",
        image: "https://images.pexels.com/photos/4421494/pexels-photo-4421494.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "252, 142, 142",
      },
      {
        name: "Pulmonology",
        image: "https://images.pexels.com/photos/6291087/pexels-photo-6291087.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "252, 142, 239",
      },
      {
        name: "Emergency Medicine",
        image: "https://images.pexels.com/photos/4769165/pexels-photo-4769165.jpeg?auto=compress&cs=tinysrgb&w=600",
        color: "204, 142, 252",
      },
      {
        name: "Nephrology",
        image: "https://richmondnephrologyassociates.com/wp-content/uploads/2024/03/RNA-Navigating-Kidney-Health-Blog.png",
        color: "142, 202, 252",
      },
    ];
  
    return (
      <div 
        className="as_wrapper" 
      
      >
        <div 
          className="inner" 
          style={{ "--quantity": cards.length, animationPlayState: isHovered ? "paused" : "running" }}
        >
          {cards.map((card, index) => (
            <div
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
              className="card"
              key={index}
              style={{ "--index": index, "--color-card": card.color }}
            >
              <div className="img">
                <SpecialtyCard image={card.image} name={card.name}/>
              </div>
            </div>
          ))}
          
        </div>
      
      </div>
   
  );
}

export default AboutSpeciality;
