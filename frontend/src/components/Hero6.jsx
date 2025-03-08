import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import TextTransition, { presets } from "react-text-transition";
import WaterWave from "react-water-wave";
import '../styles/Hero6.css'
const Hero6 = ({ data }) => {
  const { bgImg, title,page } = data;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <WaterWave id="home" className="hero-section" imageUrl={bgImg}>
      {(methods) => (
        <div className="hero-wrapper">
          <div className="hero-container">
            <div className="hero-content">
            <p className="hero-subtitle">
               {page}
              </p>
              <h1 className="hero-title">
                Take best quality <br />
                treatment for
                <span className="hero-title-transition">
                  <TextTransition springConfig={presets.wobbly}>
                    <span className="hero-transition-text">
                      {title[index % title.length]}
                    </span>
                  </TextTransition>
                </span>
              </h1>
            
              
            </div>
          </div>
        </div>
      )}
    </WaterWave>
  );
};

export default Hero6;
