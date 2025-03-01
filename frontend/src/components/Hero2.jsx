import React from 'react'
import '../styles/Hero2.css'
import homepagevideo from "../assets/images/homepagevideo.mp4";
import TitleAnimation from './TitleAnimation';
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useContext } from "react";
function Hero2() {
  return (
    
    <div className='hom2_main'>
        <div className="ia-container-main">
    {/* Video Background */}
    <div className="Ia-video-container">
      <video
        loop
        muted
        autoPlay
        className="Ia-video"
      >
        <source src={homepagevideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      <div className="overlay-content">
        <div className="oc_1">
  <div className='ta_main'>
     <motion.div
         className={`ta_s1 true`}>
         S<motion.span className='box' 
         >m</motion.span>
         <motion.span className='box' 
         >v</motion.span>
     </motion.div>

     <motion.div className={`ta_s2 true`}>
         S{['u', 'p', 'e', 'r'].map((letter, i) => (
             <motion.span key={i} className='box' 
             >{letter}</motion.span>
         ))}
     </motion.div>
     <motion.div
         className={`ta_s3 true`}
     >
         S{['p', 'e', 'c', 'i', 'a', 'l', 't', 'y'].map((letter, i) => (
             <motion.span key={i} className='box' >{letter}</motion.span>
         ))}
     </motion.div>
 </div>        </div>
        <motion.div
          className="oc_2">
          Advanced Care, Expert Hands, Your Health First!
        </motion.div>
        <motion.button >
          About Us
        </motion.button>
      </div>
      </div>
    </div>

  )
}

export default Hero2