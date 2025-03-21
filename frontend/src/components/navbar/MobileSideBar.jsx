import React, { useContext } from 'react'
import '../../styles/MobileSideBar.css'
import { motion } from "framer-motion";
import { AppContext } from '../../context/AppContext';
import { IoClose } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoTimeOutline,IoMail } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function MobileSideBar() {

  const { showSideBar,setShowSideBar,animCase,isMobile } = useContext(AppContext)
  const navigate = useNavigate()

  const menuItems = ['Home', 'About us', 'Doctors', 'Speacialty','Appointment', 'Contact us'];
  const redirect =[ '/', '/about', '/doctors', '/specialty','/appointment', '/contact-us' ]
  return (
   <>
    <div className={`msb_main ${showSideBar}`}>
    {showSideBar &&(
        <div className='msb_container'>
        {menuItems.map((item,index)=>(
          <motion.h1  key={index}
          onClick={()=>{navigate(redirect[index])}}
          className=""
          initial={{ x: "300px", opacity: 0 }}
          animate={{ x: 0.5, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 16, duration: 0.8,delay:index * 0.15, ease: "easeOut" }}
        >
          {item}
        </motion.h1>
        ))}
        <div className='msb_container_end'>
          {/* <h2>Get In touch</h2>
          <p>We're here to help you explore how mobile waste disposal plants can support and improve your waste management needs. If you have any questions or want to dive deeper into our technology, get in touch with us directly!</p>
          <span></span>
          <h4>For all Inquires</h4>
          <p>info@smvmch.in</p>
          <h4>Contact number</h4>
          <p>+91 9562561695</p> */}

                 <div> <IoMdCall/> +91 5545145451</div>
                 <div><IoMail/> emergency@smvmch.in</div>
                </div> 
       
        </div>
    )}

    </div>

   </>
  )
}

export default MobileSideBar