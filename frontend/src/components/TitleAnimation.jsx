import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/TitleAnimation.css';
import { AppContext } from '../context/AppContext';


const TitleAnimation = () => {
    const [controlAnim,setControlAnim] = useState('one')
    const [gradient,setGradient] = useState(false)
    const {setAnimCase,isMobile} = useContext(AppContext)
    return (
      <>
       {controlAnim == 'one' && (
        <motion.svg  viewBox="0 0 100px 100" xmlns="http://www.w3.org/2000/svg"


        initial={{ scale: 1.5}}
        animate={{ scale: isMobile?0.2:0.4}}
        transition={{ duration: 2  }}
        onAnimationEnd={()=>{setControlAnim('two')}}
        >
        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
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
          transition={{ duration: 0.5,delay: 1.1 }}
         >v</motion.span>
     </motion.div>

     <motion.div className={`ta_s2 ${gradient}`}
        initial={{ x: isMobile?40:140, opacity: 1 }}
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
     <motion.div
         className={`ta_s3 ${gradient}`}
         initial={{ x: isMobile?-10:-40, opacity: 1 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.5, ease:'easeInOut' }}
     >
         S{['p', 'e', 'c', 'i', 'a', 'l', 't', 'y'].map((letter, i) => (
             <motion.span key={i} className='box' 
             initial={{ rotateY: 90, opacity: 0 }}
             animate={{ rotateY: 0, opacity: 1 }}
             transition={{ duration: 0.3,delay: 1.6 + i * 0.1 }}
             onAnimationComplete={()=>setTimeout(() => {
                setGradient(true)
                setAnimCase('allset')
            
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