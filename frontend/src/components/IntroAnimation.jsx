import { motion } from "framer-motion";
import SMV_icon from '../assets/images/SMVICON.png';
import '../styles/IntroAnimation.css';
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function IntroAnimation() {
    const {animCase,setAnimCase} = useContext(AppContext);

    function handleAnimationComplete(){
        if(animCase=='welcome'){
            setAnimCase('expand')
        }else{
            return
        }

    }
    return (
        <div className="Ia-container">
            {/* Rotating & Moving Logo */}
            <motion.img
                src={SMV_icon}
                alt="Logo"
                className="Ia-logo"
                initial={{ x: -100, opacity: 0, rotate: 0 }}
                animate={{ x: 110, opacity: 1, rotate: 360 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />

            {/* Welcome Text Appearing Sequentially */}
            <div className="Ia-text-container">
                {[..."Welcome"].map((letter, index) => (
                    <motion.span
                        key={index}
                        className="Ia-text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: (index + 1) * 0.1, duration: 1.0 }}
                        onAnimationComplete={handleAnimationComplete}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
