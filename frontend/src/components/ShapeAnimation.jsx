import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from "../assets/images/homepagevideo.mp4";
import StrokeTextAnimation from "./StrokeTextAnimation";
import TitleAnimation from "./TitleAnimation";
import { AppContext } from "../context/AppContext";

export default function ShapeAnimation() {
  const { introAnim } = useContext(AppContext);
  const [expand, setExpand] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Preload video efficiently
  useEffect(() => {
    const video = document.createElement("video");
    video.src = homepagevideo;
    video.preload = "auto";
    video.oncanplaythrough = () => setVideoLoaded(true);
    return () => video.oncanplaythrough = null;
  }, []);

  // Function to play the video
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleExpandComplete = () => setExpand(true);
  const handleAnimationComplete = () => {
    setPlayVideo(true);
    handlePlayVideo();
  };

  return (
    <div className="ia-container-main">
      {/* Video Background */}
      <div className="Ia-video-container">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="Ia-video"
          preload="auto"
        >
          <source src={homepagevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay Text */}
      {playVideo && (
        <div className="overlay-content">
          <div className="oc_1">
            <TitleAnimation />
          </div>
          <motion.div
            className="oc_2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 5 }}
          >
            Advanced Care, Expert Hands, Your Health First!
          </motion.div>
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 5.2 }}
          >
            About Us
          </motion.button>
        </div>
      )}

      {/* Fullscreen and Shape Expansion */}
      <div className={`Ia-fullscreen ${playVideo}`}>
        <motion.div
          className={`Ia-shape-1 ${expand ? "expanded" : ""}`}
          initial={{ y: 500, scale: 1, borderRadius: "100px" }}
          animate={{
            y: [500, 500, 0],
            transition: { duration: 1.5, ease: "easeOut" }
          }}
          onAnimationComplete={handleExpandComplete}
        />

        {/* Expansion Animation */}
        {expand && (
          <motion.div
            className="Ia-shape"
            initial={{
              scale: 1,
              borderRadius: "100px",
              width: "200px",
              height: "200px"
            }}
            animate={{
              width: "100%",
              height: "100%",
              borderRadius: ["100px", "200px", "10px"],
              transition: { duration: 1, ease: "easeOut" }
            }}
            onAnimationComplete={handleAnimationComplete}
          />
        )}
      </div>
    </div>
  );
}
