import React, { useContext, useEffect, useState } from 'react'
import '../../styles/Navbar.css'
import { IoAppsSharp } from "react-icons/io5";
import { AppContext } from '../../context/AppContext';
import logofull from '../../assets/images/logofull.png'
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showNav, setShowNav] = useState(false)
  const { isMobile } = useContext(AppContext)

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
  useEffect(() => {
    setTimeout(() => {
      setShowNav(true)
    }, 6000);
  }, [])

  return (
    <>
      {showNav ? (<div className={`nav_main ${scrolled}`}>
        <div className='ns_con1'>
          <img src={logofull} alt="" />
        </div>
        {isMobile ? (
          <div className='mobilemenudiv'>

            <input id="burger-checkbox" type="checkbox" />
            <label class={`burger ${scrolled}`} for="burger-checkbox">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        ) : (
          <>
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
          </>
        )}

      </div>) : null}
    </>
  )
}

export default Navbar