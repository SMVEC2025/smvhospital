import React, { useContext, useEffect, useState } from 'react'
import '../../styles/Navbar.css'
import { useNavigate } from 'react-router-dom';
import { IoAppsSharp } from "react-icons/io5";
import { AppContext } from '../../context/AppContext';
import logofull from '../../assets/images/logofull.png'
import smvwhite from '../../assets/images/smvwhite.png'
import { IoMdCall } from "react-icons/io";
import { IoTimeOutline,IoMail } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false);
  const { isMobile,animCase,setShowSideBar,showSideBar,setOpenNavSlider} = useContext(AppContext)
  const [showEmer,setShowEmer] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) { 
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  }, []);

  function handleNavigate(val){
    setOpenNavSlider(false)
    navigate(val)
  }

  return (
    <>
      {animCase=='allset' ? (<div className={`nav_main ${scrolled}`}>
        <div className='ns_con1'>
          <img src={`${scrolled?logofull:smvwhite}`} alt="" />
        </div>
        {!isMobile && (
         
          <>
            <div className='ns_con2'>
              <span onClick={()=>{handleNavigate('/')}}>Home</span>
              {/* <span onClick={()=>{navigate('/doctors')}}>Doctors</span> */}
              <span  onMouseEnter={()=>{setOpenNavSlider(true)}} >Medical services</span>
              <span onClick={()=>{handleNavigate('/international-patients')}}>International patients</span>

              {/* <span onClick={()=>{handleNavigate('/specialty')}}>Speacialty</span> */}
              <span onClick={()=>{handleNavigate('/appointment')}}>Appointment</span>
              <span onClick={()=>{handleNavigate('/about')}}>About us</span>
              <span onClick={()=>{handleNavigate('/contact-us')}}>Contact us</span>
            </div>

            <div className='ns_con3'>
               <div className='emergency_main' onMouseEnter={()=>{setShowEmer(true)}} onMouseLeave={()=>{setShowEmer(false)}}>
                emergency
                </div> 
                <div className={`emergency_expand ${showEmer?"true":null}`}>
                 <div> <IoMdCall/>0413-2000999
                 </div>
                 <div> <IoTimeOutline/> 24 x 7</div>
                 <div><IoMail/> support@smvmch.ac.in</div>
                </div> 
            </div>
          </>
        )}

      </div>) : null}
      {isMobile && (
        <>
         {animCase == 'allset'&&(
         <div className={`mbile_menu_button ${scrolled} ${showSideBar}`} onClick={()=>setShowSideBar(!showSideBar)}>
         {showSideBar?(<IoClose/>):(
       <IoMenu/>
       )}
       
   </div>
       )}
        </>
      )}
    </>
  )
}

export default Navbar