import React, { useContext, useEffect, useState } from 'react'
import '../../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { IoAppsSharp } from "react-icons/io5";
import { AppContext } from '../../context/AppContext';
import logofull from '../../assets/images/logofull.png'
import { IoMdCall } from "react-icons/io";
import { IoTimeOutline,IoMail } from "react-icons/io5";
function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const { isMobile,animCase,setShowSideBar} = useContext(AppContext)
  const [showEmer,setShowEmer] = useState(false)

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

console.log(showEmer)
  return (
    <>
      {animCase=='allset' ? (<div className={`nav_main ${scrolled}`}>
        <div className='ns_con1'>
          <img src={logofull} alt="" />
        </div>
        {!isMobile && (
         
          <>
            <div className='ns_con2'>
              <span onClick={()=>{navigate('/')}}>Home</span>
              <span onClick={()=>{navigate('/about')}}>About us</span>
              <span onClick={()=>{navigate('/doctors')}}>Doctors</span>
              <span onClick={()=>{navigate('/specialty')}}>Speacialty</span>
              <span onClick={()=>{navigate('/contact-us')}}>Contact us</span>
            </div>

            <div className='ns_con3'>
               <div className='emergency_main' onMouseEnter={()=>{setShowEmer(true)}} onMouseLeave={()=>{setShowEmer(false)}}>
                emergency
                </div> 
                <div className={`emergency_expand ${showEmer?"true":null}`}>
                 <div> <IoMdCall/> +91 5545145451</div>
                 <div> <IoTimeOutline/> 24 x 7</div>
                 <div><IoMail/> emergency@smvmch.in</div>
                </div> 
            </div>
          </>
        )}

      </div>) : null}
    </>
  )
}

export default Navbar