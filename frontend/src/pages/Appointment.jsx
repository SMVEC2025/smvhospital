import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Appointment.css";
import Hero6 from "../components/Hero6";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import MobileSideBar from "../components/navbar/MobileSideBar";
import ScrollToTop from "../components/ScrollToTop";
import { MdMedicalServices } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { SiTicktick } from "react-icons/si";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaNotesMedical } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { formatDate } from "date-fns";
import { toast } from "react-toastify";
import MobileHero6 from "../components/MobileHero6";
import { supabase } from "../supabaseClient";

const heroData = {
    bgImg: 'images/appointment.jpg',
    bgShape: 'shape/hero-shape.png',
    page: "Book Appointment",
    sliderImages: [
        { img: 'images/hero-img.png' },
        { img: 'images/hero-img1.png' },
        { img: 'images/hero-img2.png' },
        { img: 'images/hero-img.png' },
        { img: 'images/hero-img1.png' }, 
        { img: 'images/hero-img2.png' },
    ],
    title: ['ENT', 'Plastic Surgery', 'Cardiology', 'Dental', 'Neurology'],
};

const Appointment = () => {
    const { setAnimCase, setShowSideBar,isMobile } = useContext(AppContext);
    const [continuePackage, setContinuePackage] = useState('with')
    const [selectedPackage, setSelectedPackage] = useState(1000)
    const [showDetails, setShowdetails] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date()); // Set default date to today
    const [selectedTime, setSelectedTime] = useState(null);
    const processes = ['services', 'date&time', 'basicdetail']
    const sectionRef = useRef(null);
    const navigate = useNavigate();



    const Packages = ['Primary', 'economy', 'premium', 'clasic']
    const healthPackages = [
        {
            id: 1,
            name: "Pro health checkup - male (SSH)",
            price: 1999,
            image:'/gifs/prohealth.gif',
            description: "A fundamental health checkup covering essential tests to assess overall well-being.",
            testsIncluded: [
                "USG Whole Abdomen",
                "Glucose Post Prandial",
                "Lipid Profile",
                "Liver Function Test",
                "Urine Complete Analysis",
                "HbA1c",
                "X Ray-Chest PA",
                "Hepatitis B Surface Antigen",
                "Echo Cardiogram",
                "Renal Function Test",
                "CBC with ESR",
                "ECG",
                "Pap Smear (LBC)",
                "Ferritin",
                "Glucose - Fasting",
                "Rheumatoid Factor",
                "VITAMIN D",
                "Consultation - General physician"
            ],
            duration: "1 Day",
            suitableFor: "Individuals looking for routine health assessment."
        },
        {
            id: 2,
            name: "Comprehensive Senior Citizen - Female (SSH)",
            price: 1999,
            image:'/gifs/ComprehensiveSeniorCitizen.gif',
            description: "Comprehensive health screening including organ function tests and vitamin analysis.",
            testsIncluded: [
                "Complete Blood Count",
                "Blood Sugar Fasting & PP",
                "HBA1C",
                "Serum Calcium",
                "Vitamin D",
                "Complete Urine Examination",
                "Liver Function Test",
                "Rheumatoid Factor",
                "Renal Function Test",
                "Lipid Profile",
                "ECG",
                "X-Ray Chest PA View",
                "TFT",
                "Pulmonary Function Test",
                "Consultation - General physician",
                "Consultation - Cardiologist",
                "ECHO",
                "USG ABDOMEN"
            ],
            duration: "1-2 Days",
            suitableFor: "Adults over 30 or those with lifestyle-related risks."
        },
        {
            id: 3,
            name: "Comprehensive Senior Citizen - Male (SSH)",
            price: 1999,
            image:'/gifs/ComprehensiveSeniorCitizenM.gif',
            description: "Specialized tests for heart health assessment, ideal for individuals with heart risks.",
            testsIncluded: [
                "Complete Blood Count with ESR",
                "Blood Sugar Fasting & PP",
                "HBA1C",
                "Serum Calcium",
                "Vitamin D",
                "Complete Urine Examination",
                "Liver Function Test",
                "Rheumatoid Factor",
                "Renal Function Test",
                "Lipid Profile",
                "ECG",
                "X-Ray Chest PA View",
                "PSA",
                "Pulmonary Function Test",
                "Consultation - General physician",
                "Consultation - Cardiologist",
                "ECHO",
                "USG ABDOMEN"
            ],
            duration: "1-2 Days",
            suitableFor: "People with heart conditions, high BP, or cholesterol issues."
        },
        {
            id: 4,
            name: "premier health checkup (SSH)",
            price: 999,
            image:'/gifs/PremierHealth.gif',
            description: "Comprehensive diabetes screening to monitor and manage diabetes effectively.",
            testsIncluded: [
                "Lipid Profile",
                "PSA Total (only for male)",
                "Complete Blood Count & ESR",
                "Glucose - Fasting",
                "Liver Function Test",
                "Renal Function Test",
                "PFT (Pulmonary Function Test)",
                "Urine Complete Analysis",
                "HbA1c Glycated",
                "ECG",
                "TFT",
                "X Ray Chest PA",
                "Glucose Post Prandial",
                "Consultation - General physician"
            ],
            duration: "1 Day",
            suitableFor: "Diabetic patients or individuals at risk of diabetes."
        },
        {
            id: 5,
            name: "Diabetic Care Check-Up (SSH)",
            price: 999,
            image:'/gifs/diabetic.gif',
            description: "Comprehensive diabetes screening to monitor and manage diabetes effectively.",
            testsIncluded: [
                "Glucose - Fasting",
                "Glucose Post Prandial",
                "HbA1c",
                "TFT",
                "Liver Function Test",
                "Urine Complete Analysis",
                "X-Ray - Chest PA",
                "ECG",
                "Lipid Profile",
                "Renal Function Test",
                "Complete Blood Count & ESR",
                "Consultation - General Physician"
            ],
            duration: "1 Day",
            suitableFor: "Diabetic patients or individuals at risk of diabetes."
        },
        {
            id: 5,
            name: "pro health checkup - female (SSH)",
            price: 1999,
            image:'/gifs/womanpremium1.gif',
            description: "Comprehensive diabetes screening to monitor and manage diabetes effectively.",
            testsIncluded: [
                "USG Whole Abdomen",
                "Glucose Post Prandial",
                "Lipid Profile",
                "Liver Function Test",
                "Urine Complete Analysis",
                "HbA1c",
                "TFT",
                "X Ray-Chest PA",
                "Hepatitis B Surface Antigen",
                "Echo Cardiogram",
                "Mammogram",
                "Renal Function Test",
                "CBC with ESR",
                "ECG",
                "Pap Smear (LBC)",
                "Ferritin",
                "CA125",
                "Glucose-Fasting",
                "Rheumatoid Factor",
                "VITAMIN D",
                "Consultation - General physician",
                "Consultation Gynaecologist"
            ],
            duration: "1 Day",
            suitableFor: "Diabetic patients or individuals at risk of diabetes."
        },
        {
            id: 6,
            name: "Basic Health Check-up for Female (SSH)",
            image:'/gifs/BasicCheckupFemale.gif',
            price: 999,
            description: "Comprehensive diabetes screening to monitor and manage diabetes effectively.",
            testsIncluded: [
                "Urine Complete Analysis",
                "Glucose - Fasting",
                "Glucose Post Prandial",
                "HbA1c",
                "Lipid Profile",
                "Renal Function Test",
                "Liver Function Test",
                "Complete Blood Count & ESR",
                "TFT",
                "X Ray-Chest PA",
                "ECG",
                "PFT (Pulmonary Function Test)",
                "Consultation - General physician"
            ],
            duration: "1 Day",
            suitableFor: "Diabetic patients or individuals at risk of diabetes."
        }
    ];

    const [process, setProcess] = useState('services')
    useEffect(() => {
        setAnimCase('allset')
        setShowSideBar(false)
    }, [])

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const timeSlots = {
        Morning: ["9:00 am - 9:30 am", "9:30 am - 10:00 am", "10:00 am - 10:30 am", "10:30 am - 11:00 am", "11:00 am - 11:30 am", "11:30 am - 12:00 pm"],
        Afternoon: ["12:00 pm - 12:30 pm", "12:30 pm - 1:00 pm", "1:00 pm - 1:30 pm", "1:30 pm - 2:00 pm", "2:00 pm - 2:30 pm", "2:30 pm - 3:00 pm", "3:00 pm - 3:30 pm", "3:30 pm - 4:00 pm"],
    };

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        note: "",
    });
 const Hello = ["hello","pillo"]
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const scrollToRef = (ref) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    function handleIncrement(val) {
        if (process == 'services') {
            if(selectedPackage == 1000){

              toast.error('Select Any Packages or continue without package')
            }else{
                setProcess(processes[1])
                scrollToRef()
            }
        } else if (process == 'date&time') {

            if(selectedTime == null){
                toast.error('Select Date and slot')
              }else{
                setProcess(processes[2])
                scrollToRef()
              }
        } else {
            return
        }

    }
   
    function packageCase1(){
        if(selectedPackage !== 1000){
            if(selectedPackage !== 'NA'){
                return healthPackages[selectedPackage].name
            }
            else{
                return 'NA'
            }
        }
    }
    // function gg(){
    //     if(selectedPackage>=0){
    //         return healthPackages[selectedPackage].name
    //     }else{
    //         return 'na'
    //     }
    // }
    function handleDecrement(val) {
        if (process == 'date&time') {
            setProcess(processes[0])
            scrollToRef()
        } else if (process == 'basicdetail') {
            setProcess(processes[1])
            scrollToRef()
        } else {
            return
        }

    }


    const postUserData = async () => {
        const googleFormURL ="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdyS-oYyzXcBe4iMP-qkfyCVQpEIP7Jjzj44LvM6gBTuy3BvA/formResponse";
        const pack = "Package N/A"
        const formPayload = new FormData();
        formPayload.append("entry.674254323", formData.firstname);
        formPayload.append("entry.1531682664", formData.email);
        formPayload.append("entry.1249408453", formData.phone);
        formPayload.append("entry.1786264367", formData.note);
        formPayload.append("entry.1642565703", selectedDate?.toLocaleDateString('en-GB').split('/').join('-'));
        formPayload.append("entry.2086222", selectedTime);
        formPayload.append("entry.2005215424",packageCase1() );

        try {
 
            fetch(googleFormURL, {
              method: "POST",
              body: formPayload,
              mode: "no-cors", // Required for Google Forms submission
            })
              .then(() => {
                setTimeout(() => {
                    navigate("/appointmentsuccess", { state: { data: formData, date: selectedDate.toLocaleDateString('en-GB').split('/').join('-'), time: selectedTime, service: packageCase1() } });

                }, 100);
        })
              .catch((error) =>  toast.error("Network error"));


        } catch (error) {
            console.error('Error posting user data:', error);
            setError("Failed to submit details. Please try again.");
            toast.error('Network error')
        }

    };
  const handleSubmitData = async (e) => {
    
      const formedData ={
        date: selectedDate?.toLocaleDateString('en-GB').split('/').join('-'),
        package: packageCase1(),
        slot: selectedTime,
        selectedPackage: '',
        phone: formData.phone,
        name: formData.firstname,
        email: formData.email,
        message:formData.note
      }
    
    
    const { data, error } = await supabase
      .from('appointments')
      .insert([formedData])

    if (error) {
      console.error(error)
    } else {
      
      toast.success('Appointment Booked')
    }
  }

    function handleSubmit() {
        if(formData.firstname.trim() ==''){
            toast.error('Enter FirstName')
            return
        }
         if(formData.lastname.trim() ==''){
            toast.error('Enter LastName')
            return
        }
         if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
            toast.error('Enter a Valid Email')
            return
        }
         if(!/^\+?[1-9]\d{1,14}$/.test(formData.phone)){
            toast.error('Enter a valid phone number')
            return
        }
        else{
           
            handleSubmitData()
            setTimeout(() => {
                postUserData()  
            }, 50);
        }

    }


    return ( 
        <>
            <ScrollToTop />
            {isMobile?<MobileHero6 data={heroData}/>:<Hero6 data={heroData}/>}
            <div className="appointment_main" ref={sectionRef}>
                <div className="app_progress">
                    <div className={`app_progress1 ${process == 'services' ? "true" : ""}`}
                       >
                        <span><MdMedicalServices /></span>
                        <h2>Services</h2>
                    </div>
                    <div className={`app_progress1 ${process == 'date&time' ? "true" : ""}`}
                       >
                        <span><BsFillCalendarDateFill /></span>
                        <h2>Date & Time</h2>
                    </div>
                    <div className={`app_progress1 ${process == 'basicdetail' ? "true" : ""}`}
                        >
                        <span><FaNotesMedical /></span>
                        <h2>Basic Detail</h2>
                    </div>

                </div>

                <div className="app_form">

                    {/* services */}
                    {process == 'services' && (
                        <div className="app_form_service">
                            <h2>Select Package</h2>
                            <div className="service_select">
                                <div className={`service_select1 ${continuePackage == 'with' ? 'true' : ''}`}
                                    onClick={() => {setContinuePackage('with')}}
                                >
                                    Continue With Package
                                </div>
                                <div className={`service_select1 ${continuePackage == 'without' ? 'true' : ''}`}
                                    onClick={() => {setContinuePackage('without');;setSelectedPackage('NA')}}
                                >
                                    Continue Without Package
                                </div>
                            </div>
                            {continuePackage == 'with' && (
                                <div className={`app_service_package_wrap`}>
                                    {healthPackages.map((e, i) => (
                                        <div key={i} className={`app_service_package ${selectedPackage == i ? "true" : ""}`} onClick={() => setSelectedPackage(i)}>
                                            <span><img src={e.image} alt="" /></span>
                                            <div>
                                                <h2 className="packages_name">{e.name}</h2>
                                                <p>Price:<span className="packages_price"> ₹{e.price}</span></p>
                                                <p className="packages_desc">{e.description} <span > {showDetails?(<span onClick={()=>{setShowdetails(false)}}>ShowLess</span>):(<span onClick={()=>{setShowdetails(true)}}>ShowDetails</span>)}</span> </p>
                                                <div className={`testlist ${showDetails?"open":""}`}>
                                                    {selectedPackage==i &&(
                                                        <>
                                                         {e.testsIncluded.map((hel,pil)=>(
                                                    <p  key={pil}>{hel}</p>
                                                   ))}
                                                        </>
                                                    )}

                                                </div>
                                            </div>
                                            {selectedPackage == i && (
                                                <div className={`app_service_selected`}>
                                                    <SiTicktick />
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            )}






                        </div>
                    )}


                    {/* Date & Time  */}

                    {process == 'date&time' && (
                        <div className="app_form_date">
                            <div className="booking-container">
                                <h2 className="title">Date & Time</h2>

                                <div className="booking-content">
                                    {/* Date Picker Section */}
                                    <div className="calendar-section">
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => setSelectedDate(date)}
                                            inline
                                        />
                                    </div>

                                    {/* Time Slot Section */}
                                    <div className="time-slot-section">
                                        <h3 className="time-slot-title">Time Slot</h3>
                                        {Object.keys(timeSlots).map((session) => (
                                            <div key={session}>
                                                <h4>{session}</h4>
                                                <div className="time-slots">
                                                    {timeSlots[session].map((slot) => (
                                                        <button
                                                            key={slot}
                                                            className={`time-slot ${selectedTime === slot ? "selected" : ""}`}
                                                            onClick={() => handleTimeSelect(slot)}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>)}




                    {/* Date & Time  */}

                    {process == 'basicdetail' && (
                        <div className="app_form_date">
                            <form className="form-container">
                                {/* Firstname */}
                                <div className="form-group">
                                    <label>Firstname <span>*</span></label>
                                    <input
                                        type="text"
                                        name="firstname"
                                        placeholder="Enter your firstname"
                                        value={formData.firstname}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Lastname */}
                                <div className="form-group">
                                    <label>Lastname <span>*</span></label>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Enter your lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="form-group">
                                    <label>Email Address <span>*</span></label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="form-group">
                                    <label>Phone Number <span>*</span></label>
                                    <PhoneInput
                                        className="hello"
                                        country={"us"}

                                        value={formData.phone}
                                        onChange={(phone) => setFormData({ ...formData, phone })}
                                        inputStyle={{ width: "102%", backgroundColor: "transparent",  }}
                                    />
                                </div>

                                {/* Note */}
                                <div className="form-group">
                                    <label>Note</label>
                                    <textarea
                                        name="note"
                                        placeholder="Enter note details"
                                        value={formData.note}
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>)}



                    <div className="app_form_end">
                        {process !== 'services' ? (<button onClick={() => handleDecrement()}><FaArrowLeft /> Go Back</button>) : null}
                        {process == 'basicdetail' ? (<button onClick={handleSubmit} >Submit <FaArrowRight /></button>) : (<button onClick={() => handleIncrement()}>Next <FaArrowRight /></button>)}

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default Appointment;