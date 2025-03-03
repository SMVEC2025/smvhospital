import React, { useEffect, useRef } from "react";
import "../styles/HorizontalScroll.css";
import TreatmentCard from "./TreatmentCard";
import '../i18n'
import { useTranslation } from "react-i18next";
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

  return (
    <>
     <div className="hs_main1">
     <div className="sticky-heading">
        <div>
        <h4>{t("treatmenthead")}</h4>
        </div>
        </div>
     </div>
      
      <div className="sticky-parent" ref={stickyParentRef}>  
      
      
        <div className="sticky" ref={stickyRef}>
        <div className="hs_stickyback">

</div>
          <div className="horizontal">
            <div className="dim">
              <TreatmentCard num="01" imgurl='https://img.freepik.com/free-photo/asian-physiotherapist-with-patient_1098-16830.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
            <div className="dim" >
              <TreatmentCard num="02" imgurl='https://img.freepik.com/free-photo/therapist-doctor-analyzing-heart-pulse-medical-consulting-hospital-ward-afroamerican-nurse_482257-2603.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
            <div className="dim" >
              <TreatmentCard num="03" imgurl='https://img.freepik.com/free-photo/elderly-man-with-respirator-doctors_23-2149011235.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
            <div className="dim" >
              <TreatmentCard num="04" imgurl='https://img.freepik.com/free-photo/male-patient-receiving-massage-from-doctor_107420-65165.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
            <div className="dim" >
              <TreatmentCard num="05" imgurl='https://img.freepik.com/free-photo/dentist-showing-x-ray-patient_107420-65336.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
            <div className="dim" >
              <TreatmentCard num="06" imgurl='https://img.freepik.com/free-photo/boy-looking-dentist-hand-clinic_23-2147905935.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
            </div>
          </div>
        </div>
      </div>
      <div className="hs_mainend">
        <button>View All</button>
     </div>
    </>
  );
};

export default HorizontalScroll;