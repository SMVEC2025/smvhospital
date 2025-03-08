import React, { useContext } from 'react'
import '../../styles/MobileSideBar.css'
import { motion } from "framer-motion";
import { AppContext } from '../../context/AppContext';

function MobileSideBar() {

  const { showSideBar,setShowSideBar } = useContext(AppContext)

  const menuItems = ['Home', 'About us', 'Doctors', 'Speacialty', 'Contact us'];
  return (
    <div className={`msb_main ${showSideBar}`}>
    {showSideBar &&(
        <div className='msb_container'>
        {menuItems.map((item,index)=>(
          <motion.h1
          className=""
          initial={{ x: "300%", opacity: 0 }}
          animate={{ x: 0.5, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 16, duration: 0.8,delay:index * 0.15, ease: "easeOut" }}
        >
          {item}
        </motion.h1>
        ))}
        </div>
    )}

    </div>
  )
}

export default MobileSideBar