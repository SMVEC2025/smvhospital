import React, { useEffect, useState } from 'react'
import '../../styles/ChatAppointment.css'
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import PhoneInput from "react-phone-input-2";
import { toast } from 'react-toastify';

import Lottie from "lottie-react";
import successanimation from "../../assets/successanimation.json";
function ChatAppointment({ setShowWrapContent }) {
  const [orderedDates, setOrderedDates] = useState([]);
  const [showMonth, setShowMonth] = useState(0)
  const [selectedMonth, setSelecttedMonth] = useState()
  const slots = ['Morning ☀️', 'Afternoon 🌤️'];
  const [process, setProcess] = useState('main')
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    const getOrderedMonthWiseDates2025 = () => {
      const startDate = new Date("2025-04-12");
      const endDate = new Date("2025-12-31");
      const monthMap = new Map();

      for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        const day = d.toLocaleDateString("en-US", { weekday: "short" });
        const date = d.getDate();
        const month = d.toLocaleDateString("en-US", { month: "long" });
        const monthShort = d.toLocaleDateString("en-US", { month: "short" });
        const key = d.toISOString().split("T")[0];

        if (!monthMap.has(month)) {
          monthMap.set(month, []);
        }

        monthMap.get(month).push({
          date,
          day,
          month,
          monthShort,
          key,
          fullDate: d.toISOString(),
        });
      }

      const orderedData = [];
      for (let [month, dates] of monthMap.entries()) {
        orderedData.push({
          month,
          dates,
        });
      }

      return orderedData;
    };

    const data = getOrderedMonthWiseDates2025();
    setOrderedDates(data);

  }, [])

  function handleIncrement() {
    if (showMonth < orderedDates.length - 1) {
      setShowMonth(showMonth + 1)
    }
    else {
      return
    }
  }
  console.log(selectedMonth)
  function handleDecrement() {
    if (showMonth > 0) {
      setShowMonth(showMonth - 1)
    }
    else {
      return
    }
  }

  const [formData, setFormData] = useState({
    date: '',
    package: '',
    slot: '',
    selectedPackage: '',
    phone: '',
    name: '',
    email: ''
  });


  function handleUpdateDate(eday, edate) {
    setFormData(prevData => ({
      ...prevData,
      date: `${edate}-${eday}`
    }));
  }
  function handleUpdateSlot(e) {
    setFormData(prevData => ({
      ...prevData,
      slot: e
    }));
  }
  console.log(formData)

  function handleSelectPackage(e) {
    setFormData(prevData => ({
      ...prevData,
      package: e,
      selectedPackage: ''
    }));
  }



  const healthPackages = [
    {
      id: 1,
      name: "Pro health checkup - male (SSH)",
      price: 1999,
      image: '/gifs/prohealth.gif',
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
      image: '/gifs/ComprehensiveSeniorCitizen.gif',
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
      image: '/gifs/ComprehensiveSeniorCitizenM.gif',
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
      image: '/gifs/PremierHealth.gif',
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
      image: '/gifs/diabetic.gif',
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
      image: '/gifs/womanpremium1.gif',
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
      image: '/gifs/BasicCheckupFemale.gif',
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
  function handleSelectingPackages(e) {
    setFormData(prevData => ({
      ...prevData,
      selectedPackage: e
    }));
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;

    const numericValue = value.replace(/\D/g, "");

    setFormData(prevData => ({
      ...prevData,
      phone: numericValue
    }))

  }


  function handleSubmit() {
    if (formData.name.trim() == '') {
      toast.error('Enter FirstName')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Enter a Valid Email')
      return
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) {
      toast.error('Enter a valid phone number')
      return
    }
    else {
      setProcess('success')
      startCountDown()
      toast.success('Appointment Booked')
    }

  }
  function handleFirstComplete() {
    if (formData.date.trim() == '') {
      toast.error('Pick a Date')
      return
    }
    if (formData.slot.trim() == '') {
      toast.error('Please select a session')
      return
    }
    if (formData.package.trim() == '') {
      toast.error('Please select a package or continue with general checkup')
      return
    }
    if (formData.package.trim() == 'Yes' && formData.selectedPackage.trim() == '') {
      toast.error('Please select a package or continue with general checkup')
      return
    }
    else {
      setProcess('final')
    }
  }
  function handleSecondComplete() {
    if (formData.selectedPackage.trim() == '') {
      toast.error('Please select a package or continue with general checkup')
      return
    } else {
      setProcess('final')
    }
  }
  console.log("process", process)


  const [count, setCount] = useState(5);
  const [progress, setProgress] = useState(100); // Percent
  const duration = 5;

  function startCountDown() {
    if (count <= 0) return;

    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setShowWrapContent('interface')
          return 0;
        }
        return prev - 1;
      });

      setProgress((prev) => {
        const newProgress = prev - 100 / duration;
        return newProgress < 0 ? 0 : newProgress;
      });
    }, 1000);
  }
  return (
    <>
      {process == 'main' && (
        <div className='cba_main'>
          <div className='cba_container1'>
            <div className='cbaleft' onClick={() => { setShowWrapContent('interface') }}>
              <FaArrowLeft />
            </div>
            <div className='cba_heading'>
              Book Appointment
            </div>
          </div>
          <h2>Select Date</h2>
          <div className='cba_container2'>

            <div className='cba_container21'>
              {orderedDates[showMonth]?.month} 2025
            </div>
            <div className='cba_container22'>
              <span onClick={handleDecrement}>
                <FaChevronLeft />
              </span>
              <span>
                <FaChevronRight onClick={handleIncrement} />
              </span>
            </div>

          </div>
          <div className='cba_container3'>

            {orderedDates[showMonth]?.dates?.map((e, i) => (
              <div className={`cba_container31 ${formData?.date?.split('-')[0] == e.date ? 'dateselected' : ""}`} onClick={() => { handleUpdateDate(e.day, e.date) }}>
                <p className='cba_day'>{e.day}</p>
                <p className='cba_date'>{e.date}</p>
              </div>
            ))}

          </div>
          <h2>Select Session</h2>

          <div className='cba_container4'>
            {slots.map((e, i) => (
              <div className={`${formData?.slot == e ? "selectedslot" : ""}`} onClick={() => { handleUpdateSlot(e) }}> {e}</div>
            ))}
          </div>
          <h2>Select Health Package</h2>

          <div className='cba_container5'>
            <div className={`cba_packages ${formData?.package == 'Yes' ? "selected" : ""}`} onClick={() => { handleSelectPackage('Yes'); setProcess('selectpackage') }}>
              select <br /> Packages
            </div>
            <div className={`cba_general ${formData?.package == 'No' ? "selected" : ""}`} onClick={() => { handleSelectPackage('No') }}>
              General <br /> Checkup
            </div>
          </div>

          <button className='cba_button' onClick={handleFirstComplete}>
            Continue
          </button>
        </div>
      )}





      {/* ////select packages */}




      {process == 'selectpackage' && (
        <div className='cba_main'>
          <div className='cba_container1'>
            <div className='cbaleft' onClick={() => { setProcess('main') }}>
              <FaArrowLeft />
            </div>
            <div className='cba_heading'>
              Book Appointment
            </div>
          </div>
          <h2>Select Packages</h2>
          <div className='cba_selectpackages_main'>
            {healthPackages.map((packages, index) => (
              <div className={`cba_selectpackages_box ${formData?.selectedPackage == packages.name ? 'selected' : ""}`} onClick={() => { handleSelectingPackages(packages.name) }}>
                <div className='cba_selectpackages_box1'>
                  <img src={packages.image} alt="" />
                </div>
                <div className='cba_selectpackages_box2'>
                  <h2>{packages.name}</h2>
                  <p>Rs.{packages.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className='cba_button' onClick={handleSecondComplete}>
            Continue
          </button>
        </div>
      )}



      {process == 'final' && (
        <div className='cba_main'>
          <div className='cba_container1'>
            <div className='cbaleft' onClick={() => { setProcess('main') }}>
              <FaArrowLeft />
            </div>
            <div className='cba_heading'>
              Book Appointment
            </div>
          </div>
          <h2>Personal Details</h2>

          <div className="cba_form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={formData.name}
              onChange={handleChange}
            />


            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]*"
              name='phone'
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Enter mobile number"
              maxLength={10} // optional: limit to 10 digits
              required
            // value={formData.phone}
            // onChange={handleChange}
            />
          </div>

          <button className='cba_button' onClick={handleSubmit}>
            Continue
          </button>
        </div>
      )}








      {/* booking success */}
      {process == 'success' && (
        <div className='cba_main'>
          <div className='cba_container1'>
            <div className='cbaleft' onClick={() => { setProcess('main') }}>
              <FaArrowLeft />
            </div>
            <div className='cba_heading'>
              Appointment success
            </div>
          </div>
          <div className="cba_appointment-success">
            <div className="cba_success-card">
              <div className="lottie" style={{ width: "100px", margin: "auto" }}>
                <Lottie animationData={successanimation} loop={false} />
              </div>
              <h3>Your Appointment Booked Successfully!</h3>
              <p>We'll Contact you soon</p>

              <div className="details">
                <div><strong>Date & Time</strong> {formData.date} at {formData.slot}</div>
                <div><strong>Patient Name</strong>{formData.name} </div>
              </div>
            </div>
          </div>
            <div className='cba_sucess_div3'>
            <div className="circle-wrapper small">
            <svg className="circle-svg">
              <circle className="bg" cx="50%" cy="50%" r="20" />
              <circle
                className="progress"
                cx="50%"
                cy="50%"
                r="20"
                style={{
                  strokeDashoffset: 197 - (119.5 * progress) / 100, // 2 * π * r = 188.5
                }}
              />
            </svg>
            <div className="count-text small">{count}</div>
          </div>
            </div>
          <button className='cba_button' >
            Back to home
          </button>
        </div>
      )}
    </>
  )
}

export default ChatAppointment