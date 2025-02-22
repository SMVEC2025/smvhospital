import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from '../assets/images/homepagevideo.mp4';
import StrokeTextAnimation from "./StrokeTextAnimation";
import snap from '../assets/images/snap.jpg'
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
              <StrokeTextAnimation />
            </div>
            <div className="oc_2">
              Whatever you're struggling with, we’ve got your back. From depression to money worries,
              <br /> we’ve got loads of practical advice and information.
            </div>
            <button>About Us</button>
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
           {/* <motion.img 
            className="Ia-shape"
            src={snap}
            initial={{ y: 500, scale: 1, borderRadius: "100px" }}
            animate={{ 
              y: [300,0], // Ball throw with bounce effect
              transition: { duration: 0.8, ease: "easeOut" } 
            }}
            onAnimationComplete={() => {
              setTimeout(() => setExpand(true), 0);
            }}
          /> */}
          {/* Expansion Animation */}
          {expand && (
            <motion.div
              className="Ia-shape" style={{backgroundImage:`url(${snap})`}}
              initial={{ scale: 1, borderRadius: "100px", width: "300px", height: "200px" }}
              animate={{ 
                scale: [1, 1], 
                width: ["200px", "100vw"],
                height: ["200px", "100vh"],
                borderRadius: ["100px", "200px", "0%"], // Capsule effect
                transition: { duration: 1, ease: "easeOut" }
              }}
              onAnimationComplete={() => {
                if (videoLoaded) {
                  setPlayVideo(true); // Play only if video is loaded
                }
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
