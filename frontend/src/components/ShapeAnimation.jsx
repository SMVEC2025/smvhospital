import { motion } from "framer-motion";
import { useContext } from "react";
import "../styles/ShapeAnimation.css";
import homepagevideo from "../assets/images/homepagevideo.mp4";
import TitleAnimation from "./TitleAnimation";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function ShapeAnimation({ videoRef }) {
  const { animCase } = useContext(AppContext);
   const navigate = useNavigate()
 


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
            About Us
          </motion.button>
        </div>

    
    </div>
  );
}
