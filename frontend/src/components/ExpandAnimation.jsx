import { motion } from "framer-motion";
import { useState, useContext } from "react";
import "../styles/ShapeAnimation.css";
import { AppContext } from "../context/AppContext";

export default function ExpandAnimation( {restartVideo}) {
  const { setAnimCase,animCase } = useContext(AppContext);
  const [expand, setExpand] = useState(false);
  

  function handleAnimationComplete(){
   if(animCase == 'expand'){
    restartVideo()
    setAnimCase('playvideo')
   }
    
  }

  return (

    <div className="ia-container-main">
     

      <div className={`Ia-fullscreen`}>
        <motion.div
          className={`Ia-shape-1 ${expand ? "expanded" : ""}`}
          initial={{ y: 500, scale: 1, borderRadius: "100px" }}
          animate={{
            y: [500, 500, 0],
            transition: { duration: 1.5, ease: "easeOut" }
          }}
          onAnimationComplete={()=>setExpand(true)}
        />
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
