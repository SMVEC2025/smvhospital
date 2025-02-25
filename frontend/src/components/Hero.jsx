import React, { useContext, useEffect, useState } from 'react';
import '../styles/Hero.css';
import IntroAnimation from './IntroAnimation';
import ShapeAnimation from './ShapeAnimation';
import { AppContext } from '../context/AppContext';

function Hero() {

    const { introAnim } = useContext(AppContext);
    const [showNav,setShowNav ] =useState(false)
    useEffect(() => {
        setTimeout(() => {
          setShowNav(true)
        }, 6000);
      }, [])
    return (
        <div className={`hero_main ${showNav}`}>
            {introAnim === 'one' ? <IntroAnimation /> : <ShapeAnimation />}
        </div>
    );
}

export default Hero;
