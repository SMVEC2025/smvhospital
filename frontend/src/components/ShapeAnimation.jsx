import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from '../assets/images/homepagevideo.mp4';
import StrokeTextAnimation from "./StrokeTextAnimation";
import TitleAnimation from "./TitleAnimation";

export default function ShapeAnimation() {
  const [expand, setExpand] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // Preload video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = homepagevideo;
    video.preload = "auto"; // Preload the video
    video.oncanplaythrough = () => setVideoLoaded(true); // Mark as loaded
  }, []);

  // Handle the expansion animation and video play
  useEffect(() => {
    if (expand && videoLoaded) {
      const timer = setTimeout(() => {
        setPlayVideo(true);
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [expand, videoLoaded]);

  return (
    <>
      {playVideo && videoLoaded ? (
        <div className="ia-container-main">
          {/* Video Background */}
          <div className="Ia-video-container">
            <video ref={videoRef} autoPlay loop muted playsInline className="Ia-video">
              <source src={homepagevideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlay Text */}
          <div className="overlay-content">
            <div className="oc_1">
              <TitleAnimation />
            </div>
            <motion.div className="oc_2"
                initial={{ y: '10px', opacity: 0 }}
                animate={{ y: '0', opacity: 1 }}
                transition={{ duration: 0.5, ease:'easeOut',delay:5 }}
            >
             Advanced Care, Expert Hands, Your Health First!
            </motion.div>
            <motion.button
                initial={{ y: '10px', opacity: 0 }}
                animate={{ y: '0', opacity: 1 }}
                transition={{ duration: 0.5, ease:'easeOut',delay:5.2 }}
            >About Us</motion.button>
          </div>
        </div>
      ) : (
        <div className="Ia-fullscreen">
          <motion.div
            className="Ia-shape"
            initial={{ y: 500, scale: 1, borderRadius: "100px" }}
            animate={{ 
              y: [300,0], // Ball throw with bounce effect
              transition: { duration: 0.4, ease: "easeOut" } 
            }}
            onAnimationComplete={() => {
              setTimeout(() => setExpand(true), 0);
            }}
          />
          {/* Expansion Animation */}
          {expand && (
            <motion.div
              className="Ia-shape"
              initial={{ scale: 1, borderRadius: "100px", width: "300px", height: "200px" }}
              animate={{ 
                scale: [1, 1], 
                width: ["200px", "100%"],
                height: ["200px", "100%"],
                borderRadius: ["100px", "200px", "10px"], // Capsule effect
                transition: { duration: 1, ease: "easeOut" }
              }}
            />
          )}
        </div>
      )}
    </>
  );
}