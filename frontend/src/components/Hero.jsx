import React, { useContext, useEffect, useRef, useState } from 'react';
import '../styles/Hero.css';
import IntroAnimation from './IntroAnimation';
import ShapeAnimation from './ShapeAnimation';
import { AppContext } from '../context/AppContext';
import ExpandAnimation from './ExpandAnimation';

function Hero() {
    const { animCase,setAnimCase } = useContext(AppContext);
    const [showNav, setShowNav] = useState(false);
    const [scrollWidth, setScrollWidth] = useState(0);

    const videoRef = useRef(null);
    const restartVideo = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0; // Reset to start
          videoRef.current.play(); // Ensure playback
        }
      };
      useEffect(() => {
        const handleScroll = () => {
          // Get scroll position and limit it to 200px
          const scrollTop = window.scrollY;
          const maxScroll = 500; // Adjust based on page height
          const newWidth = Math.min((scrollTop / maxScroll) * 200, 200);
          setScrollWidth(newWidth);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
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
            {/* <div className='testcon'>
                <div style={{width:`calc(100% - ${scrollWidth}px)`,height:`calc(100vh - ${scrollWidth}px)`}}>

                </div>
            </div> */}
            {/* <div className='hello'>

            </div> */}
        </div>
    ); 
}

export default Hero;
