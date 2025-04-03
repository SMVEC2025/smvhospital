import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from "../assets/images/homepagevideo.mp4";
import TitleAnimation from "./TitleAnimation";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ShapeAnimation({ videoRef }) {
  const { animCase,isMobile } = useContext(AppContext);
   const navigate = useNavigate()
 
    const [scrollWidth, setScrollWidth] = useState(0);
    const [showEndContent,setShowEndContent]= useState(false)
  useEffect(() => {
        const handleScroll = () => {
          // Get scroll position and limit it to 200px
        
          const scrollTop = window.scrollY;
          const maxScroll = 500; // Adjust based on page height
          const newWidth = Math.min((scrollTop / maxScroll) * 300, 200);
          setScrollWidth(newWidth);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
useEffect(() => {

   if(scrollWidth.toString() >= 170 ){
    setShowEndContent(true)
   }else{
    setShowEndContent(false)
   }
}, [scrollWidth])

  return (
    <div className="ia-container-main">
      <div className="Ia-video-container">
        <video
           ref={videoRef}
           loop
           muted
           autoPlay
           playsInline
           className="Ia-video"
           preload="auto"
        >
          <source src={homepagevideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">

        </div>
      </div>

        <div className="overlay-content">
          <div className="oc_1">
            {animCase == 'playvideo' &&(<TitleAnimation />)}
            {animCase == 'allset' &&(
              <div className='ta_main'>
                   <motion.div
                       className={`ta_s1 true`}
                   >
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
                           <motion.span key={i} className='box' 
                           >{letter}</motion.span>
                       ))}
                   </motion.div>
               </div>
            )}
          </div>
          <motion.div
            className="oc_2"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: `${animCase=='allset'?0.3:5}`}}
          >
            Advanced Care, Expert Hands, Your Health First!
          </motion.div>
          <motion.button 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={()=>navigate('/about')}
            transition={{ duration: 0.5, ease: "easeOut",  delay: `${animCase=='allset'?0.3:5.2}`}}
          >
            Discover
          </motion.button>
        </div>
    {!isMobile &&(
      <>
          <div className='testcon'>
                <div style={{width:`calc(100% - ${scrollWidth}px)`,height:`calc(100vh - ${scrollWidth*1.9}px)`, transform:`translateY(-${scrollWidth*0.3}px)`}}>

                </div>
            </div>
       <div className={`ia-container-end ${showEndContent}`}>
          <div className="ia-container-end1">
              <p>Advanced, Reliable, and Scalable Healthcare Solutions</p>
              <h2>We help hospitals deliver exceptional care with advanced medical technology.</h2>
          </div>
          <div className="ia-container-end2">
              <p>We are dedicated to providing top-quality medical care with advanced treatments, experienced doctors, and a patient-first approach to ensure your well-being.</p>
              <button onClick={()=>{navigate('/appointment')}}>Book an Appointment</button>
          </div>
       </div>
      </>
    )}
    
    </div>
  );
}
