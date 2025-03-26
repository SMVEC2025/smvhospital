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


const heroData = {
    bgImg: 'images/hero-bg9.jpg',
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
    title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
};

const Appointment = () => {
    const { setAnimCase, setShowSideBar } = useContext(AppContext);
    const [continuePackage, setContinuePackage] = useState('with')
    const [selectedPackage, setSelectedPackage] = useState()
    const [selectedDate, setSelectedDate] = useState(new Date()); // Set default date to today
    const [selectedTime, setSelectedTime] = useState(null);
    const processes = ['services', 'date&time', 'basicdetail']
    const sectionRef = useRef(null);
    const navigate = useNavigate();



    const Packages = ['Primary', 'economy', 'premium', 'clasic']
    const healthPackages = [
        {
            id: 1,
            name: "Basic Health Checkup",
            price: 2999,
            description: "A fundamental health checkup covering essential tests to assess overall well-being.",
            testsIncluded: [
                "Complete Blood Count (CBC)",
                "Blood Sugar (Fasting & PP)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Urine Routine & Microscopy"
            ],
            duration: "1 Day",
            suitableFor: "Individuals looking for routine health assessment."
        },
        {
            id: 2,
            name: "Advanced Full Body Checkup",
            price: 5999,
            description: "Comprehensive health screening including organ function tests and vitamin analysis.",
            testsIncluded: [
                "Complete Blood Count (CBC)",
                "Blood Sugar (Fasting & PP)",
                "Lipid Profile",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Thyroid Function Test (TFT)",
                "Vitamin D & B12",
                "ECG & Chest X-ray"
            ],
            duration: "1-2 Days",
            suitableFor: "Adults over 30 or those with lifestyle-related risks."
        },
        {
            id: 3,
            name: "Cardiac Health Package",
            price: 7999,
            description: "Specialized tests for heart health assessment, ideal for individuals with heart risks.",
            testsIncluded: [
                "ECG",
                "2D Echocardiography",
                "Lipid Profile",
                "Blood Sugar (Fasting & PP)",
                "Liver Function Test (LFT)",
                "Kidney Function Test (KFT)",
                "Treadmill Test (TMT)",
                "Cardiologist Consultation"
            ],
            duration: "1-2 Days",
            suitableFor: "People with heart conditions, high BP, or cholesterol issues."
        },
        {
            id: 4,
            name: "Diabetes Care Package",
            price: 4999,
            description: "Comprehensive diabetes screening to monitor and manage diabetes effectively.",
            testsIncluded: [
                "Blood Sugar (Fasting, PP, HbA1c)",
                "Lipid Profile",
                "Kidney Function Test (KFT)",
                "Liver Function Test (LFT)",
                "Urine Routine & Microalbuminuria",
                "Foot Examination",
                "Ophthalmologist Consultation"
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const scrollToRef = (ref) => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    function handleIncrement(val) {
        if (process == 'services') {
            setProcess(processes[1])
            scrollToRef()
        } else if (process == 'date&time') {
            setProcess(processes[2])
            scrollToRef()
        } else {
            return
        }

    }
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
    function handleSubmit() {
        navigate("/appointmentsuccess", { state: { name: "John Doe", date: "March 21, 2025", time: "12:00 PM", service: "NA" } });

    }
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <MobileSideBar />
            <Hero6 data={heroData} />
            <div className="appointment_main" ref={sectionRef}>
                <div className="app_progress">
                    <div className={`app_progress1 ${process == 'services' ? "true" : ""}`}
                        onClick={() => setProcess('services')}>
                        <span><MdMedicalServices /></span>
                        <h2>Services</h2>
                    </div>
                    <div className={`app_progress1 ${process == 'date&time' ? "true" : ""}`}
                        onClick={() => setProcess('date&time')}>
                        <span><BsFillCalendarDateFill /></span>
                        <h2>Date & Time</h2>
                    </div>
                    <div className={`app_progress1 ${process == 'basicdetail' ? "true" : ""}`}
                        onClick={() => setProcess('basicdetail')}>
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
                                    onClick={() => setContinuePackage('with')}
                                >
                                    Continue With Package
                                </div>
                                <div className={`service_select1 ${continuePackage == 'without' ? 'true' : ''}`}
                                    onClick={() => setContinuePackage('without')}
                                >
                                    Continue Without Package
                                </div>
                            </div>
                            {continuePackage == 'with' && (
                                <div className={`app_service_package_wrap`}>
                                    {healthPackages.map((e, i) => (
                                        <div key={i} className={`app_service_package ${selectedPackage == i ? "true" : ""}`} onClick={() => setSelectedPackage(i)}>
                                            <span><img src="https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXJsfGVufDB8fDB8fHww" alt="" /></span>
                                            <div>
                                                <h2 className="packages_name">{e.name}</h2>
                                                <p>Price:<span className="packages_price"> ₹{e.price}</span></p>
                                                <p className="packages_desc">{e.description}</p>
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
                                        country={"us"}
                                        value={formData.phone}
                                        onChange={(phone) => setFormData({ ...formData, phone })}
                                        inputStyle={{ width: "100%" }}
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
