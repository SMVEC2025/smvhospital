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

  // **Improved Video Preloading**
  useEffect(() => {
    if (videoRef.current) {
      const handleCanPlay = () => setVideoLoaded(true);
      videoRef.current.addEventListener("canplaythrough", handleCanPlay);
      return () => videoRef.current?.removeEventListener("canplaythrough", handleCanPlay);
    }
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
              <TitleAnimation />
            </div>
            <motion.div
              className="oc_2"
              initial={{ y: '10px', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.5 }}
            >
              Advanced Care, Expert Hands, Your Health First!
            </motion.div>
            <motion.button
              initial={{ y: '10px', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 1.7 }}
            >
              About Us
            </motion.button>
          </div>
        </div>
      ) : (
        <div className="Ia-fullscreen">
          <motion.div
            className="Ia-shape"
            initial={{ y: 500, borderRadius: "100px" }}
            animate={{
              y: 0,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            onAnimationComplete={() => setExpand(true)}
          />

          {/* Expansion Animation */}
          {expand && (
            <motion.div
              className="Ia-shape"
              initial={{ width: "300px", height: "200px", borderRadius: "100px" }}
              animate={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                transition: { duration: 0.8, ease: "easeOut" }
              }}
              onAnimationComplete={() => {
                if (videoLoaded) setPlayVideo(true);
              }}
            />
          )}
        </div>
      )}
    </>
  );
}
