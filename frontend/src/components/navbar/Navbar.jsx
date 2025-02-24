import React, { useEffect, useState } from 'react'
import '../../styles/Navbar.css'
import { IoAppsSharp } from "react-icons/io5";
import logofull from '../../assets/images/logofull.png'
function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div className={`nav_main ${scrolled}`}>
        <div className='ns_con1'>
            <img src={logofull} alt="" />
        </div>
        <div className='ns_con2'>
            <span>Home</span>
            <span>About us</span>
            <span>Treatments</span>
            <span>Speacialty</span>
            <span>Contact us</span>

        </div>
    
        <div className='ns_con3'>
             <span>EMERGENCY</span>
        </div>
    </div>
  )
}

export default Navbar