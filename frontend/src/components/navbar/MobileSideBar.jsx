import React, { useContext, useEffect, useState } from 'react'
import '../../styles/MobileSideBar.css'
import { motion } from "framer-motion";
import { AppContext } from '../../context/AppContext';
import { IoClose } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoTimeOutline, IoMail } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import { useNavigate } from "react-router-dom";
function MobileSideBar() {

  const { showSideBar, setShowSideBar, animCase, isMobile } = useContext(AppContext)
  const navigate = useNavigate()
  const [sideBarContent, setSideBarContent] = useState('main')

  const menuItems = ['Home', 'Medical services', 'Appointment', 'About us', 'Contact us'];
  const redirect = ['/', ' ', '/appointment', '/about', '/contact-us']
  function handleNavigate(item,index){
    if(item != 'Medical services' ){
      navigate(redirect[index])
      setShowSideBar(false)
    }else{
      setSideBarContent('medicalservices')
    }
  }
  useEffect(() => {
    setSideBarContent('main')
  }, [showSideBar])
  

  const medicalServices=[
    {
        title:"trauma care",
        child:["trauma care","neuro sciences","neuro sciences"],
        image:"https://img.freepik.com/free-photo/nurse-bandaging-patients-arm_53876-63313.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid"
    },
    {
        title:"neuro sciences",
        child:[],
        image:"https://img.freepik.com/free-photo/images-that-simulate-x-rays-with-neon-colors_23-2151521265.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid"

    },
    {
        title:"cardiac sciences",
        child:[],
        image:"https://img.freepik.com/free-photo/doctor-showing-cardiovascular-image-tablet-ill-patient-hospital-bed-senior-woman-with-sickness-looking-cardiology-figure-with-blood-vessel-display-diagnosis_482257-41352.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid"

    },
    {
        title:"organ transplantation",
        child:[],
        image:"https://img.freepik.com/free-photo/surgical-procedure-made-by-doctor-special-equipment_23-2148962513.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid"

    },
    {
        title:"plastic surgery",
        child:[],
        image:""

    },
    {
        title:"vascular surgery",
        child:[],
        image:""

    },
    {
        title:"cosmetology",
        child:[],
        image:""

    },
    {
        title:"cloology",
        child:[],
        image:""

    },
    {
        title:"orthopaedies",
        child:["joint replacement and reunion surgery","knee and hip replacement","spine surgery","trauma care","crush injuries","sports medicine","paedi"],
        image:""

    },
    {
        title:"podiatrics",
        child:[],
        image:""

    },
    {
        title:"obstetries & gynaecology",
        child:[],
        image:""

    },
    {
        title:"paediatrics & Neonotology",
        child:[],
        image:""

    },
    {
        title:"gastreaterology",
        child:[],
        

    },
    {
        title:"pulmonology & sleep medicine",
        child:[],
        image:""

    },
    {
        title:"oncology",
        child:[],
        image:""

    },
    {
        title:"rheumatology",
        child:[],
        image:""

    },
    {
        title:"ndocrinology",
        child:[],
        image:""

    },
    {
        title:"radio frequency ablation (RFA)",
        child:[],
        image:""

    },
    {
        title:"ENT",
        child:[],
        image:""

    },
    {
        title:"dermatology & trichology",
        child:[],
        image:""

    },
    {
        title:"international radiology",
        child:[],
        image:""

    },
    {
        title:"craafacial surgery",
        child:[],
        image:""

    },
    {
        title:"transfusion medicine",
        child:[],
        image:""

    },
    {
        title:"internal medicine",
        child:[],
        image:""

    }
]
  return (
    <>
      <div className={`msb_main ${showSideBar}`}>
        {showSideBar && (
          <>
            {sideBarContent == 'main' && (
              <div className='msb_container'>
                {menuItems.map((item, index) => (
                  <motion.h1 key={index}
                    onClick={()=>{handleNavigate(item,index)}}
                    className=""
                    initial={{ x: "300px", opacity: 0 }}
                    animate={{ x: 0.5, opacity: 1 }}
                    exit={{ x: "300px", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 16, duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
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

                  <div> <IoMdCall /> +91 5545145451</div>
                  <div><IoMail /> emergency@smvmch.in</div>
                </div>

              </div>
            )}
          </>

        )}
                {sideBarContent == 'medicalservices' && (
 <div className='msb_container_medicals'>
 <h2 onClick={()=>{setSideBarContent('main')}}><span ><FaArrowLeft/></span> Medical Services</h2>
  <div>
  {medicalServices.map((item, index) => (
   <motion.h1 key={index}
     onClick={()=>{handleNavigate(item,index)}}
     className=""
     initial={{ x: "300px", opacity: 0 }}
     animate={{ x: 0.5, opacity: 1 }}
     exit={{ x: "300px", opacity: 0 }}
     transition={{ type: "spring", stiffness: 100, damping: 16, duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
   >
     {item.title}
     <span><FaAngleRight/></span>
   </motion.h1>
 ))}
  </div>
</div>
                )}


      </div>

    </>
  )
}

export default MobileSideBar