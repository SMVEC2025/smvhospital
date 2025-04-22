import React, { useContext, useRef, useState } from 'react'
import '../styles/SliderSection.css';
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import TitleHeader from './TitleHeader';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ScrollImageChanger from './ScrollImageChanger';
import { AppContext } from '../context/AppContext';

function SliderSection() {
    const {isMobile} = useContext(AppContext)
    const treatments = [
        {
            id: 1,
            name: "Liver Transplant",
            tags: ["Organ Transplant", "Hepatology", "Liver Failure"],
            desc1: "A surgical procedure to replace a diseased liver with a healthy donor liver.",
            desc2: "This life-saving operation is typically recommended for patients with end-stage liver disease or acute liver failure.",
            image: "https://img.freepik.com/free-photo/doctors-preparing-surgical-procedure_23-2148962468.jpg"
        },
        {
            id: 2,
            name: "Heart Transplant",
            tags: ["Cardiology", "Heart Failure", "Organ Transplant"],
            desc1: "Replacement of a failing heart with a healthy donor heart to restore normal function.",
            desc2: "It is considered when other treatments for heart problems haven't worked, leading to severe heart failure.",
            image: "https://img.freepik.com/free-photo/woman-nurse-showing-cardiology-image-digital-tablet-letting-doctor-explain-cardiovascular-diagnosis-child-parent-assistant-holding-modern-device-with-heart-anatomy-picture_482257-41831.jpg"
        },
        {
            id: 3,
            name: "Kidney Transplant",
            tags: ["Nephrology", "Organ Transplant", "Kidney Disease"],
            desc1: "Surgical placement of a healthy kidney from a donor to treat kidney failure.",
            desc2: "A transplant can free patients from dialysis and improve quality of life for those with end-stage renal disease.",
            image: "https://img.freepik.com/free-photo/senior-man-doctor-appointment-covid-19-pandemic-patient-wearing-mask-doctor-protective-wear-healthcare-consultation-medicinal-system-private-modern-clinic_482257-5997.jpg"
        },
        {
            id: 4,
            name: "Heart Valve Repair / Replacement",
            tags: ["Cardiology", "Valve Disease", "Cardiac Surgery"],
            desc1: "Surgery to fix or replace damaged heart valves to improve blood flow.",
            desc2: "This procedure helps reduce symptoms like chest pain, breathlessness, and fatigue.",
            image: "https://img.freepik.com/free-photo/young-medicine-student-doing-their-practice-hospital_23-2149040307.jpg"
        },
        {
            id: 5,
            name: "PTCA",
            tags: ["Angioplasty", "Cardiology", "Heart Disease"],
            desc1: "A non-surgical procedure to open blocked coronary arteries using a balloon catheter.",
            desc2: "This restores normal blood flow to the heart muscle without the need for open-heart surgery.",
            image: "https://img.freepik.com/free-photo/doctor-getting-patient-ready-ct-scan_23-2149367411.jpg"
        },
        {
            id: 6,
            name: "Joint Replacement",
            tags: ["Orthopedics", "Arthritis", "Mobility"],
            desc1: "Surgical replacement of damaged joints with artificial implants to relieve pain.",
            desc2: "Commonly performed for knees and hips, it improves mobility and quality of life.",
            image: "https://img.freepik.com/free-photo/old-woman-nursing-home-walking-with-crutches-with-help-from-female-nurse_482257-45331.jpg"
        },
        {
            id: 7,
            name: "Spine Surgery",
            tags: ["Orthopedics", "Spinal Disorders", "Neurosurgery"],
            desc1: "Surgical treatment for spine-related disorders such as herniated discs or scoliosis.",
            desc2: "It aims to relieve pain, restore mobility, and correct deformities of the spine.",
            image: "https://img.freepik.com/free-photo/osteopathy-specialist-relieving-pressure-from-back-bones-aged-patient-physiotherapy-chiropractor-giving-support-helping-senior-woman-with-spinal-cord-ache-physical-recovery_482257-31871.jpg"
        },
        {
            id: 8,
            name: "Plastic and Reconstructive Surgery",
            tags: ["Reconstructive Surgery", "Cosmetic", "Aesthetic Medicine"],
            desc1: "Surgery to restore appearance and function due to injury, disease, or birth defects.",
            desc2: "It includes cosmetic procedures as well as functional reconstructions after trauma or cancer.",
            image: "https://img.freepik.com/free-photo/doctor-drawing-with-marker-face-high-angle_23-2149352181.jpg"
        },
        {
            id: 9,
            name: "Coronary Artery Bypass Grafting (CABG)",
            tags: ["Cardiac Surgery", "Heart Disease", "Bypass Surgery"],
            desc1: "A procedure to bypass blocked heart arteries and improve blood flow.",
            desc2: "CABG is typically performed on patients with severe coronary artery disease.",
            image: "https://img.freepik.com/free-photo/person-holding-anatomic-heart-model-educational-purpose_23-2149894442.jpg"
        },
        {
            id: 10,
            name: "Cosmetology",
            tags: ["Aesthetic Treatments", "Beauty", "Skin Care"],
            desc1: "Non-surgical and surgical procedures to enhance or restore physical appearance.",
            desc2: "It includes skincare, anti-aging treatments, and facial aesthetics for personal grooming and confidence.",
            image: "https://img.freepik.com/free-photo/young-woman-having-facial-treatment_23-2148906470.jpg"
        },
        {
            id: 11,
            name: "Podiatrics",
            tags: ["Foot Care", "Orthopedics", "Rehabilitation"],
            desc1: "Medical and surgical care focused on foot, ankle, and lower limb disorders.",
            desc2: "Podiatric treatment helps patients manage pain, mobility issues, and deformities like bunions or flat feet.",
            image: "https://img.freepik.com/free-photo/male-doctor-bandaging-foot-female-patient_1170-2174.jpg"
        }
    ];


    const [expand, setExpand] = useState(null)
    const handlePrev = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const handleNext = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };
    const sliderRef = useRef(null);
    function handlExpande(name) {
        if (expand == name) {
            setExpand(null)
        } else {
            setExpand(name)
        }
    }
    return (
        <div className='ss_main'>
            <div className="sticky-heading">
                <TitleHeader name="Treatments" />
            </div>
            <div className='ss_div1'>
                <div className='ss_div11'>
                    At our hospital, your health and comfort come first.
                    We combine advanced medical expertise with compassionate care.
                    Every treatment is tailored to support your recovery and well-being.
                </div>
                <div className='ss_div12'>
                    <button className='ss-left' onClick={handlePrev}>
                        <AiOutlineSwapLeft />
                    </button>
                    <button className='ss-right' onClick={handleNext}>
                        <AiOutlineSwapRight />
                    </button>
                </div>
            </div>
            <div className='ss_div2' ref={sliderRef}>
                {treatments.map((e, i) => (
                    <div key={i} className={`sss_slider ${expand == e.name ? "expand" : ""}`} >
                        <div className='ss_slidercontent'>
                            <div className='tags'>
                                {e.tags?.map((tag, indes) => (
                                    <div key={indes}>{tag}</div>
                                ))}
                            </div>
                            <div className='title'>
                                {e.name}
                            </div>
                            {expand == e.name && (
                                <div className='desc'>
                                    <div>
                                        {e.desc1}
                                    </div>
                                    <div>
                                        {e.desc2}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='expand-btn' onClick={() => { handlExpande(e.name) }}>
                            {expand == e.name ? <AiOutlineMinus /> : <AiOutlinePlus />}
                        </div>
                        <div className='imagetest'>
                            <img src={e.image} alt="" />
                        </div>
                    </div>
                ))}

            </div>
            {!isMobile &&(
       <div className="sv_pat">
       <ScrollImageChanger/>
     </div>
   )}
        </div>
    )
}

export default SliderSection