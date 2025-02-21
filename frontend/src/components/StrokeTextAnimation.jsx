import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/TextStroke.css"; // Import normal CSS

const StrokeTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const letters = textRef.current.querySelectorAll("tspan");

    letters.forEach((letter, index) => {
      const strokeDuration = 10 + Math.random() * 10; // Slow stroke (6s - 9s)
      const fillStartTime = strokeDuration * 0.15; // Fill starts at 25% of stroke time
      const fillDuration = 1; // Fast fill

      gsap.fromTo(
        letter,
        { strokeDasharray: 500, strokeDashoffset: 500 },
        {
          strokeDashoffset: 0,
          duration: strokeDuration,
          ease: "power2.out",
        }
      );

      // Start filling at 25% of stroke duration
      gsap.to(letter, {
        fill: "white", // Make the text white for visibility
        strokeOpacity: 0,
        duration: fillDuration,
        ease: "power2.out",
        delay: fillStartTime, // Fill starts before stroke completes
      });
    });
  }, []);

  return (
    <div className="sta_main">
      <svg
        viewBox="0 0 1500 300"
        xmlns="http://www.w3.org/2000/svg"
        className="centered-svg"
      >
        <defs>
          {/* Gradient for Glow Effect */}
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" />
            <stop offset="50%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>

          {/* Glow Effect */}
         
        </defs>

        {/* Stroke Text (Letter by Letter for Independent Animation) */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="100"
          fontWeight="bold"
          fontFamily="Arial, sans-serif"
          stroke="url(#glow-gradient)"
          strokeWidth="0.4"  // Increase stroke width for better visibility
          fill="none"
          filter="url(#glow)"
          ref={textRef}
        >
          {/* Each letter is separate to animate independently */}
          <tspan>S</tspan>
          <tspan>M</tspan>
          <tspan>V</tspan>
          <tspan> </tspan>
          <tspan>S</tspan>
          <tspan>U</tspan>
          <tspan>P</tspan>
          <tspan>E</tspan>
          <tspan>R</tspan>
          <tspan> </tspan>
          <tspan>S</tspan>
          <tspan>P</tspan>
          <tspan>E</tspan>
          <tspan>C</tspan>
          <tspan>I</tspan>
          <tspan>A</tspan>
          <tspan>L</tspan>
          <tspan>I</tspan>
          <tspan>T</tspan>
          <tspan>Y</tspan>
          <tspan> </tspan>
          <tspan>H</tspan>
          <tspan>O</tspan>
          <tspan>S</tspan>
          <tspan>P</tspan>
          <tspan>I</tspan>
          <tspan>T</tspan>
          <tspan>A</tspan>
          <tspan>L</tspan>
        </text>
      </svg>
    </div>
  );
};

export default StrokeTextAnimation;
