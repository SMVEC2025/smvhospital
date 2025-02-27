import React, { useContext, useEffect, useState } from 'react';
import '../styles/Hero.css';
import IntroAnimation from './IntroAnimation';
import ShapeAnimation from './ShapeAnimation';
import { AppContext } from '../context/AppContext';

function Hero() {
    const { introAnim } = useContext(AppContext);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNav(true);
        }, 6000);

        // Clean up the timeout if the component unmounts before the time is up
        return () => clearTimeout(timer);
    }, []);

    // Use conditional classNames more explicitly
    const heroMainClass = `hero_main ${showNav ? 'show' : ''}`;
    const heroMainCon1Class = introAnim !== 'one' ? 'hero_main_con1 true' : 'hero_main_con1';

    return (
        <div className={heroMainClass}>
            <div className={heroMainCon1Class}>
                <IntroAnimation />
            </div>
            <div className='hero_main_con2'>
                <ShapeAnimation />
            </div>
        </div>
    );
}

export default Hero;
