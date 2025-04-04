import React, { useState, useEffect } from "react";
import frames from "../frames/Frames";
import '../styles/LogoAnimation.css'
const LogoAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 50); // Adjust speed (lower = faster)

    return () => clearInterval(frameInterval);
  }, []);

  const FrameComponent = frames[currentFrame];

  return ( 
    <div className="logoanim" >
      <FrameComponent />
    </div>
  );
};

export default LogoAnimation;
