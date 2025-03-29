import React, { useEffect, useRef, useState } from 'react'
import '../styles/TitleHeader.css'
import { motion, useInView } from "framer-motion";

function TitleHeader({name,color}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.5 });
    const [hasAnimated, setHasAnimated] = useState(false); 
  
    useEffect(() => {
      if (isInView && !hasAnimated) {
        setHasAnimated(true);
      }
    }, [isInView, hasAnimated]);
    const headingStyle = {
        backgroundImage: `radial-gradient(ellipse at bottom, ${color}, transparent, transparent)`,
        backgroundPosition: "50% 100%",
        backgroundSize: "50% 50%",
        backgroundRepeat: "no-repeat"
      };
  return (
    <motion.div
    ref={ref} className={`thheading ${hasAnimated ? "animate" : ""}` }
    style={headingStyle}>
    {name}
  </motion.div>
     )
}

export default TitleHeader