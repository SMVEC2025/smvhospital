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

  const menuItems = ['Home', 'Medical services','international patients', 'Appointment', 'About us', 'Contact us'];
  const redirect = ['/', ' ','/international-patients', '/appointment', '/about', '/contact-us']
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
  

  const medicalServices = [
    {
      title: "Trauma Care",
      child: ["Trauma Care", "Neuro Sciences", "Neuro Sciences"],
      image: '/medicalservices/traumacare.jpg'
    },
    { 
      title: "Neuro Sciences",
      child: [
        "Craniotomy",
        "Endoscopic Endonasal Surgery",
        "Neuro endoscopy",
        "Biopsy",
        "Stereotactic Brain Surgery",
        "Anterior Cervical Discectomy",
        "Epilepsy Neurosurgery",
        "Chiari decompression"
      ],
      image: '/medicalservices/neuroscience.jpg'
    },
    {
      title: "Cardiac Sciences",
      child: [
        "Thoracic and Cardiovascular Surgery",
        "Interventional Cardiology",
        "Coronary artery bypass Grafting (CABG)",
        "Heart Valve repair / replacement",
        "Arrhythmia Correction",
        "Heart transplants",
        "Aortic Aneurysm and Dissections",
        "TAVI / TAVR",
        "Angioplasty / Stenting"
      ],
      image: '/medicalservices/cardiaccare.jpg'
    },
    {
      title: "Organ Transplantation",
      child: [],
      image: '/medicalservices/organtransplantation.jpg'
    },
    {
      title: "Plastic Surgery",
      child: [],
      image: '/medicalservices/plasticsurgery.jpg'
    },
    {
      title: "Vascular Surgery",
      child: [],
      image: '/medicalservices/podiatrics.jpg'
    },
    {
      title: "Cosmetology",
      child: [],
      image: '/medicalservices/cosmotelogy.jpg'
    },
    {
      title: "Urology", // Assuming this was meant
      child: [],
      image: '/medicalservices/urology.jpg'
    },
    {
      title: "Orthopaedics",
      child: [
        "Joint Replacement and Reunion Surgery",
        "Knee and Hip Replacement",
        "Spine Surgery",
        "Trauma Care",
        "Crush Injuries",
        "Sports Medicine",
        "Paediatric Orthopaedics"
      ],
      image: '/medicalservices/orthopaedics.jpg'
    },
    {
      title: "Podiatrics",
      child: [],
      image: '/medicalservices/podiatrics.jpg'
    },
    {
      title: "Obstetrics & Gynaecology",
      child: [],
      image: "/medicalservices/obstetrics&gynaecology.jpg"
    },
    {
      title: "Paediatrics & Neonatology",
      child: [],
      image: '/medicalservices/pediatricsandneonatology.jpg'
    },
    {
      title: "Gastroenterology ",
      child: [
        "Medical Gastroenterology",
        "Surgical Gastroenterology",
        "Hepato Pancreato Biliary Surgery",
        "Bariatric Surgery",
        "Liver transplants"
      ],
      image: '/medicalservices/Gastroenterology-1.jpg'
    },
    {
      title: "Pulmonology & Sleep Medicine",
      child: [],
      image: 'https://img.freepik.com/free-photo/clinical-team-monitoring-patient-putting-oxigen-mask-analyzing-respiratory-condition-respiratory-emergency-hospital-ward_482257-2214.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Oncology",
      child: [],
      image: 'https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261076.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Rheumatology",
      child: [],
      image: 'https://img.freepik.com/free-photo/osteopathist-treating-patient-s-arms_23-2148776265.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Endocrinology",
      child: [],
      image: 'https://img.freepik.com/free-photo/plastic-surgeon-drawing-dashed-lines-her-patient-s-face_1301-7777.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Radio Frequency Ablation (RFA)",
      child: [],
      image: 'https://img.freepik.com/free-photo/young-doctor-checking-patient-before-ct-scan_23-2149341517.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "ENT",
      child: [],
      image: 'https://img.freepik.com/free-photo/man-getting-ultrasound-thyroid-from-doctor_1170-2181.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Dermatology & Trichology",
      child: [],
      image: '/medicalservices/cardiaccare.jpg'
    },
    {
      title: "Interventional Radiology",
      child: [],
      image: 'https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367402.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Craniofacial Surgery",
      child: [],
      image: 'https://img.freepik.com/free-photo/doctors-performing-rhinoplasty-young-patient_23-2149352204.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Transfusion Medicine",
      child: [],
      image: 'https://img.freepik.com/free-photo/patient-getting-chemotherapy-treatment_23-2149261099.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    },
    {
      title: "Internal Medicine",
      child: [],
      image: 'https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117900.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740'
    }
  ];
  function handleCall (){
    window.location.href = 'tel:+914132000999';
  }
  function handleMail(){
    window.location.href = 'mailto:info@yourhospital.com'; 
  }
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
               

                  <div onClick={handleCall}> <IoMdCall /> +91 5545145451</div>
                  <div onClick={handleMail}><IoMail /> emergency@smvmch.in</div>
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