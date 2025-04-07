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
    function handleClick(index){
        if(medicalServices[index].child.length > 0){
          setShowContent(medicalServices[index])
      setShowChild(true)
        }else{
          return
        }
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
                 <span key={index} onMouseEnter={()=>{setOnHover(medicalServices[index])}} onClick={()=>{handleClick(index)}}>{services.title}
                 {services.child?.length > 0&&(<span className='arrowright'><FaArrowRight/></span>)}
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