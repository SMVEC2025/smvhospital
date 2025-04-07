import React, { useEffect, useRef } from "react";
import "../styles/HorizontalScroll.css";
import TreatmentCard from "./TreatmentCard";
import '../i18n'
import { useTranslation } from "react-i18next";
import TitleHeader from "./TitleHeader";
const HorizontalScroll = () => {
  const stickyRef = useRef(null);
  const stickyParentRef = useRef(null);
    const { t } = useTranslation("home"); 

  useEffect(() => {
    const horizontalScroll = () => {
      if (!stickyRef.current || !stickyParentRef.current) return;

      let sticky = stickyRef.current;
      let stickyParent = stickyParentRef.current;

      let scrollWidth = sticky.scrollWidth;
      let verticalScrollHeight = stickyParent.getBoundingClientRect().height - sticky.getBoundingClientRect().height;

      let stickyPosition = sticky.getBoundingClientRect().top;
      if (stickyPosition > 1) return;

      let scrolled = stickyParent.getBoundingClientRect().top;
      sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled) * 0.85;
    }; 
 
    document.addEventListener("scroll", horizontalScroll);
    return () => document.removeEventListener("scroll", horizontalScroll);
  }, []);
  const treatments = [
    {
      id: 1,
      name: "Liver Transplant",
      desc: "A surgical procedure to replace a diseased liver with a healthy donor liver.",
      image: "https://img.freepik.com/free-photo/doctors-doing-surgical-procedure-patient_23-2148962498.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 2,
      name: "Heart Transplant",
      desc: "Replacement of a failing heart with a healthy donor heart to restore normal function.",
      image: "https://images.pexels.com/photos/4483323/pexels-photo-4483323.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Kidney Transplant",
      desc: "Surgical placement of a healthy kidney from a donor to treat kidney failure.",
      image: "https://img.freepik.com/free-photo/medium-shot-doctor-talking-patient_23-2149352164.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 4,
      name: "Heart Valve Repair / Replacement",
      desc: "Surgery to fix or replace damaged heart valves to improve blood flow.",
      image: "https://img.freepik.com/free-photo/view-anatomic-heart-model-educational-purpose-with-medical-instruments_23-2149894480.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
  
    {
      id: 5,
      name: "PTCA",
      desc: "A non-surgical procedure to open blocked coronary arteries using a balloon catheter.",
      image: "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367411.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 6,
      name: "Joint Replacement",
      desc: "Surgical replacement of damaged joints with artificial implants to relieve pain.",
      image: "https://img.freepik.com/free-photo/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse_482257-45331.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 7,
      name: "Spine Surgery",
      desc: "Surgical treatment for spine-related disorders such as herniated discs or scoliosis.",
      image: "https://img.freepik.com/free-photo/osteopathy-specialist-relieving-pressure-from-back-bones-aged-patient-physiotherapy-chiropractor-giving-support-helping-senior-woman-with-spinal-cord-ache-physical-recovery_482257-31871.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 8,
      name: "Plastic and Reconstructive Surgery",
      desc: "Surgery to restore appearance and function due to injury, disease, or birth defects.",
      image: "https://img.freepik.com/free-photo/doctor-drawing-with-marker-face-high-angle_23-2149352181.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 9,
      name: "Coronary Artery Bypass Grafting (CABG)",
      desc: "A procedure to bypass blocked heart arteries and improve blood flow.",
      image: "https://img.freepik.com/free-photo/person-holding-anatomic-heart-model-educational-purpose_23-2149894442.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 10,
      name: "Cosmetology",
      desc: "Non-surgical and surgical procedures to enhance or restore physical appearance.",
      image: "https://img.freepik.com/free-photo/young-woman-having-facial-treatment_23-2148906470.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    },
    {
      id: 11,
      name: "Podiatrics",
      desc: "Medical and surgical care focused on foot, ankle, and lower limb disorders.",
      image: "https://img.freepik.com/free-photo/male-doctor-bandaging-foot-female-patient_1170-2174.jpg?uid=R184073455&ga=GA1.1.33103983.1738217368&semt=ais_hybrid&w=740"
    }
  
  ]
  return (
    <>
     <div className="hs_main1">
     <TitleHeader name='TREATMENTS' color='#f7f4ef'/>
     </div>
      
      <div className="sticky-parent" ref={stickyParentRef}>  
      
      
        <div className="sticky" ref={stickyRef}>
        <div className="hs_stickyback">

</div>
          <div className="horizontal">
          {treatments.map((e,i)=>(
              <div className="dim">
              <TreatmentCard data={e} />
            </div>
          ))}
            
          </div>
        </div>
      </div>
      {/* <div className="hs_mainend">
        <button>View All</button>
     </div> */}
    </>
  );
};

export default HorizontalScroll;