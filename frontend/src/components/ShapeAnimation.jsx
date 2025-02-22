import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from '../assets/images/homepagevideo.mp4';
import StrokeTextAnimation from "./StrokeTextAnimation";
import snap from '../assets/images/snap.jpg';
import { AppContext } from "../context/AppContext";

export default function ShapeAnimation() {
  const [expand, setExpand] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);
  const { setIntroAnim } = useContext(AppContext);

  // Play video when animation completes
  useEffect(() => {
    if (playVideo && videoRef.current) {
      videoRef.current.play();
    }
  }, [playVideo]);

  return (
    <>
      <div className="ia-container-main">
        {/* Video Background */}
        <div className="Ia-video-container">
          <video ref={videoRef} loop muted playsInline className="Ia-video">
            <source src={homepagevideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Overlay Text */}
        <div className='overlay-content'>
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

      {/* Animation Section */}
      <div className={`Ia-fullscreen ${playVideo}`}>
        {/* Initial Shape Animation */}
        <motion.div
          className="Ia-shape"
          style={{ backgroundImage: `url(${snap})` }}
          initial={{ y: 300, scale: 1, borderRadius: "100px" }}
          animate={{
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
          }}
          onAnimationComplete={() => setExpand(true)}
        />

        {/* Expansion Animation */}
        {expand && (
          <motion.div
            className="Ia-shape"
            style={{ backgroundImage: `url(${snap})` }}
            initial={{ width: "300px", height: "200px", borderRadius: "100px" }}
            animate={{
              width: "100vw",
              height: "100vh",
              borderRadius: ["100px", "200px", "0%"],
              transition: { duration: 1, ease: "easeOut" },
            }}
            onAnimationComplete={() => setPlayVideo(true)}
          />
        )}
      </div>
    </>
  );
}
