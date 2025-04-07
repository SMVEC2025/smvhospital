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
          image: '/medicalservices/traumacare.jpg'
        },
        { 
          title: "Neuro Sciences",
          child: [],
          image: '/medicalservices/neuroscience.jpg'
        },
        {
          title: "Cardiac Sciences",
          child: [],
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
          title: "Gastroenterology",
          child: [],
          image: '/medicalservices/Gastroenterology-1.jpg'
        },
        {
          title: "Pulmonology & Sleep Medicine",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Oncology",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Rheumatology",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Endocrinology",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Radio Frequency Ablation (RFA)",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "ENT",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Dermatology & Trichology",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Interventional Radiology",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Craniofacial Surgery",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Transfusion Medicine",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
        },
        {
          title: "Internal Medicine",
          child: [],
          image: '/medicalservices/cardiaccare.jpg'
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