import React, { useContext, useState } from 'react'
import '../../styles/NavSlider.css'
import { AppContext } from '../../context/AppContext'
import SMV_icon from '../../assets/images/SMV_icon.png'
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

function NavSlider() {
    const {openNavSlider,setOpenNavSlider}=useContext(AppContext)
    const [showContent,setShowContent]=useState()
    const [showChild,setShowChild]= useState(false)
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
    <div className={`navslider_main ${openNavSlider?"opened":""}`} onMouseLeave={()=>{setOpenNavSlider(false)}}  >
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