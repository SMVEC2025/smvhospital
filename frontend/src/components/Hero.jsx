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
            <div className={`hero_main_con1 ${introAnim!=='one'?"true":null}`}>
            <IntroAnimation/>
            </div>
            <div  className='hero_main_con2'>
            <ShapeAnimation/>
            </div>
        </div>
    );
}

export default Hero;
