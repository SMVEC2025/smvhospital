import React, { useContext, useEffect, useRef } from "react";
import { FaHandHoldingHeart,FaHospital,FaHandHoldingMedical   } from "react-icons/fa";
import { FaUserDoctor,FaTruckMedical } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";
import '../styles/WhySmv.css'
import { useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
import ScrollImageChanger from "./ScrollImageChanger";


function WhySmv() {
  const  navigate = useNavigate()
  const {darkmode,isMobile} =useContext(AppContext)

  const whysmvdata=[
     {
      title:"Empathy",
      para:"Our compassionate team tailors every interaction to meet each patient's unique emotional and physical needs, ensuring a truly personalized care experience.",
      logo:<FaHandHoldingHeart/>
    },
     {
      title:"Community",
      para:"We are a socially conscious organization dedicated to making a positive impact through sustainable practices and community-driven initiatives. ",
      logo:<FaHospital/>

     },
     {
      title:"Expertise",
      para:"Our team of doctors brings vast experience and deep clinical knowledge to every case. Their extensive expertise ensures innovative treatments and exceptional patient care.",
      logo:<FaUserDoctor/>
     },
     {
      title:"Advocacy",
      para:"Our expert liaison team provides personalized guidance and ensures smooth communication between patients and providers, enhancing your healthcare journey.",
      logo:<FaHandHoldingMedical/>
    },
     {
      title:"value",
      para:"Our state-of-the-art healthcare combines advanced technology and expert care to ensure top-notch patient outcomes. We are dedicated to making these premium services affordable, ensuring accessible care for all.",
      logo:<MdBloodtype/>
    },
     {
      title:"Care",
      para:"Our experienced team delivers compassionate, personalized care tailored to each patient's needs, ensuring excellence and unwavering support at every stage of recovery.",
      logo:<FaTruckMedical/>
    }
  ]

      return (
        <div className={`why-smv-container ${darkmode?"darkmode":""}`}>
      {/* Left Section */}
      <div className={`why-smv-left ${darkmode?"darkmode":""}`}>
        <h2>Why SMV Super Specialty hospital?</h2> 
        <p>
        We are a leading, multi-speciality hospital offering best-in-class medical services for nearly 2 decades. With paramount focus on patient care, patient safety and patient satisfaction, we are committed to offer exemplary medical services going beyond the norm of healthcare.

        We are a leading, multi-speciality hospital offering best-in-class medical services for nearly 2 decades. With paramount focus on patient care, patient safety and patient satisfaction, we are committed to offer exemplary medical services going beyond the norm of healthcare.
        </p>
        <button onClick={()=>{navigate('/about')}}>Learn More</button>
      </div>

      {/* Right Section */}
      <div className="why-smv-right">
       
          {whysmvdata.map((e,i)=>(
             <div key={i} className={`feature-box ${darkmode?"darkmode":""}`}>
              <div className='logo'>{e.logo}</div>
            <div>
            <h3>{e.title}</h3>
            <p>{e.para}</p>
          </div>
          
        </div> 
          ))}

       
          
      </div>
   {!isMobile &&(
       <div className="svg_pattern">
       <ScrollImageChanger/>
     </div>
   )}
    </div>
 

  )
}

export default WhySmv