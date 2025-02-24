import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from '../assets/images/homepagevideo.mp4';
import StrokeTextAnimation from "./StrokeTextAnimation";
import TitleAnimation from "./TitleAnimation";

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
              Whatever you're struggling with, we’ve got your back. From depression to money worries,
              <br /> we’ve got loads of practical advice and information.
            </motion.div>
            <motion.button
                initial={{ y: '10px', opacity: 0 }}
                animate={{ y: '0', opacity: 1 }}
                transition={{ duration: 0.5, ease:'easeOut',delay:5.2 }}
            >About Us</motion.button>
          </div>
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
          style={{ backgroundImage: `url(${snap})`, willChange: "transform, opacity" }}
          initial={{ y: 300, scale: 1, borderRadius: "100px" }}
          animate={{
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" }, // Smoother easing
          }}
          onAnimationComplete={() => setExpand(true)}
        />

        {/* Expansion Animation */}
        {expand && (
          <motion.div
            className="Ia-shape"
            style={{ backgroundImage: `url(${snap})`, willChange: "transform, opacity" }}
            initial={{ scale: 1, borderRadius: "100px" }}
            animate={{
              scale: 1 ,  // Small bounce effect for smoothness
              width: "100%",
              height: "100vh",
              borderRadius: "0%",
              transition: { duration: 1, ease: "easeInOut" },
            }}
            onAnimationComplete={() => setPlayVideo(true)}
          />
        )}
      </div>
    </>
  );
}
