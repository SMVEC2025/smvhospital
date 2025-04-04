import React, { useState, useEffect } from "react";
import frames from "../frames/Frames";
import '../styles/LogoAnimation.css';

const LogoAnimation = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    if (currentFrame >= frames.length - 1) return; // Stop if last frame reached

    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => {
        if (prevFrame >= frames.length - 1) {
          clearInterval(frameInterval); // Clear interval when last frame is reached
          return prevFrame;
        }
        return prevFrame + 1;
      });
    }, 30);

    return () => clearInterval(frameInterval);
  }, [currentFrame]); // Re-run effect only when currentFrame changes

  const FrameComponent = frames[currentFrame];

  return (
    <div className="logoanim">
      <FrameComponent />
    </div>
  );
};

export default LogoAnimation;