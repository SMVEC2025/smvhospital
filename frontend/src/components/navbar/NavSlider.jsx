import React, { useContext, useState } from 'react'
import '../../styles/NavSlider.css'
import { AppContext } from '../../context/AppContext'
import SMV_icon from '../../assets/images/SMV_icon.png'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

function NavSlider() {
    const {openNavSlider,setOpenNavSlider}=useContext(AppContext)
    const [showContent,setShowContent]=useState()
    const [showChild,setShowChild]= useState(false)
    const medicalServices = [
        {
          title: "Trauma Care",
          child: ["Trauma Care", "Neuro Sciences", "Neuro Sciences"],
          image: "https://img.freepik.com/free-photo/nurse-bandaging-patients-arm_53876-63313.jpg"
        },
        {
          title: "Neuro Sciences",
          child: [],
          image: "https://img.freepik.com/free-photo/images-that-simulate-x-rays-with-neon-colors_23-2151521265.jpg"
        },
        {
          title: "Cardiac Sciences",
          child: [],
          image: "https://img.freepik.com/free-photo/doctor-showing-cardiovascular-image-tablet-ill-patient-hospital-bed-senior-woman-with-sickness-looking-cardiology-figure-with-blood-vessel-display-diagnosis_482257-41352.jpg"
        },
        {
          title: "Organ Transplantation",
          child: [],
          image: "https://img.freepik.com/free-photo/surgical-procedure-made-by-doctor-special-equipment_23-2148962513.jpg"
        },
        {
          title: "Plastic Surgery",
          child: [],
          image: ""
        },
        {
          title: "Vascular Surgery",
          child: [],
          image: ""
        },
        {
          title: "Cosmetology",
          child: [],
          image: ""
        },
        {
          title: "Urology", // Assuming this was meant
          child: [],
          image: ""
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
          image: ""
        },
        {
          title: "Podiatrics",
          child: [],
          image: ""
        },
        {
          title: "Obstetrics & Gynaecology",
          child: [],
          image: ""
        },
        {
          title: "Paediatrics & Neonatology",
          child: [],
          image: ""
        },
        {
          title: "Gastroenterology",
          child: [],
          image: ""
        },
        {
          title: "Pulmonology & Sleep Medicine",
          child: [],
          image: ""
        },
        {
          title: "Oncology",
          child: [],
          image: ""
        },
        {
          title: "Rheumatology",
          child: [],
          image: ""
        },
        {
          title: "Endocrinology",
          child: [],
          image: ""
        },
        {
          title: "Radio Frequency Ablation (RFA)",
          child: [],
          image: ""
        },
        {
          title: "ENT",
          child: [],
          image: ""
        },
        {
          title: "Dermatology & Trichology",
          child: [],
          image: ""
        },
        {
          title: "Interventional Radiology",
          child: [],
          image: ""
        },
        {
          title: "Craniofacial Surgery",
          child: [],
          image: ""
        },
        {
          title: "Transfusion Medicine",
          child: [],
          image: ""
        },
        {
          title: "Internal Medicine",
          child: [],
          image: ""
        }
      ];
    function handleClick(index){
        setShowContent(medicalServices[index])
      setShowChild(true)
    }
    function handleContentClose(){
        setShowContent()
        setShowChild(false)
    }
    const [onHover,setOnHover] = useState(medicalServices[0])
   console.log(onHover)
  return (
    <div className={`navslider_main ${openNavSlider?"opened":"closed"}`} onMouseLeave={()=>{setOpenNavSlider(false)}}  >
 {/* onMouseLeave={()=>{setOpenNavSlider(false)}}  */}
        <div className='navslider_div1'>
          
         {showChild?(
            <>
             <h2 className='child_h2' onClick={handleContentClose} ><FaArrowLeft className='leftarrow' />{showContent.title}</h2>
             <div className='navslider_titles'>
              {showContent.child.map((services,index)=>(
                  <>
                  <span key={index} onClick={()=>{setOpenNavSlider(index)}}>{services}</span>

                  </>
              ))}
             </div>
             </>
         ):(
                <>
            <h2>Medical Services</h2>
            <div className='navslider_titles'>
             {medicalServices.map((services,index)=>(
                 <>
                 <span key={index} onMouseEnter={()=>{setOnHover(medicalServices[index])}} onClick={()=>{handleClick(index)}}>{services.title}                  <span className='arrowright'><FaArrowRight/></span>
                 </span>
                 </>
             ))}
            </div>
            </>
         )}
          
        </div>
        <div className='navslider_div2'>
           
             <div className='navslider_div22'>
                <img src={onHover?.image} alt="" />
             </div>
        </div>

    </div>
  )
}

export default NavSlider