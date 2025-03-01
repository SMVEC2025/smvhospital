import React, { useContext, useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import IntroAnimation from './IntroAnimation';
import ShapeAnimation from './ShapeAnimation';
import { AppContext } from '../context/AppContext';
import ExpandAnimation from './ExpandAnimation';

function Hero() {
    const { animCase,setAnimCase } = useContext(AppContext);
    const [showNav, setShowNav] = useState(false);
    const videoRef = useRef(null);
    const restartVideo = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0; // Reset to start
          videoRef.current.play(); // Ensure playback
        }
      };
console.log("animCase",animCase)
    return (
        <div  className={`hero_main`}>
            <div className={`hero_main_con1 ${animCase!=='welcome'?'true':''}`}>
                <IntroAnimation />
            </div>
            <div className={`hero_main_con2 ${animCase!=='expand'?'true':''}`} >
                <ExpandAnimation restartVideo={restartVideo} />
            </div>
            <div className='hero_main_con3'>
                <ShapeAnimation videoRef={videoRef} />
            </div>
        </div>
    );
}

export default Hero;
