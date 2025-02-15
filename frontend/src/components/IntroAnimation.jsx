import { motion } from "framer-motion";
import SMV_icon from '../assets/images/SMVICON.png'
import '../styles/IntroAnimation.css'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function IntroAnimation() {
        const {setIntroOne} =useContext(AppContext)
    return (
      <div className="Ia-container">
        {/* Rotating & Moving Logo */}
        <motion.img
          src={SMV_icon} // Replace with your actual logo path
          alt="Logo"
          className="Ia-logo"
          initial={{ x: -100, opacity: 1, rotate: 0 }}
          animate={{ x: 100, opacity: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        {/* Welcome Text Appearing Sequentially with Logo Movement */}
        <div className="Ia-text-container">
          {[..."Welcome"].map((letter, index) => (
            <motion.span
              key={index}
              className="Ia-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index + 1) * 0.1, duration: 1 }}
              onAnimationComplete={() => {setIntroOne(false)}}

            >
              {letter}
              
            </motion.span>
          ))}
        </div>
      </div>
    );
}