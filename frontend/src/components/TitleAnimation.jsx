import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/TitleAnimation.css';

const letterVariants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: (i) => ({
        opacity: 1,
        rotateY: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 }
    })
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const TitleAnimation = () => {
    const [controlAnim,setControlAnim] = useState('one')
    const [gradient,setGradient] = useState(false)
    return (
      <>
       {controlAnim == 'one' && (
        <motion.svg viewBox="0 0 100px 100" 
        initial={{ scale: 1.5}}
        animate={{ scale: 0.5}}
        transition={{ duration: 2  }}
        onAnimationEnd={()=>{setControlAnim('two')}}
        >
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            S
        </text>
    </motion.svg>	
    
    )}
    {controlAnim == 'two'&& (
     <div className='ta_main'>
     <motion.div
         className={`ta_s1 ${gradient}`}
         initial={{ x: 180, opacity: 1 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, ease:'easeInOut' }}
     >
         S<motion.span className='box' 
          initial={{ rotateY: 90,}}
          animate={{ rotateY: 0,  }}
          transition={{ duration: 0.3,delay: 1 }}
         >m</motion.span>
         <motion.span className='box' 
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 0.3,delay: 1.1 }}
         >v</motion.span>
     </motion.div>

     <motion.div className={`ta_s2 ${gradient}`}
        initial={{ x: 90, opacity: 1 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, ease:'easeInOut' }}>
         S{['u', 'p', 'e', 'r'].map((letter, i) => (
             <motion.span key={i} className='box' 
             initial={{ rotateY: 90, opacity: 0 }}
             animate={{ rotateY: 0, opacity: 1 }}
             transition={{ duration: 0.3,delay: 1.1 + i * 0.1 }}
             >{letter}</motion.span>
         ))}
     </motion.div>
{console.log(gradient)}
     <motion.div
         className={`ta_s3 ${gradient}`}
         initial={{ x: -40, opacity: 1 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, ease:'easeInOut' }}
     >
         S{['s', 'p', 'e', 'c', 'i', 'a', 'l', 't', 'y'].map((letter, i) => (
             <motion.span key={i} className='box' 
             initial={{ rotateY: 90, opacity: 0 }}
             animate={{ rotateY: 0, opacity: 1 }}
             transition={{ duration: 0.3,delay: 1.6 + i * 0.1 }}
             onAnimationComplete={()=>setTimeout(() => {
                setGradient("true")
             }, 1000)}
             >{letter}</motion.span>
         ))}
     </motion.div>
 </div>
    )}
      </>

      
    );
};

export default TitleAnimation;