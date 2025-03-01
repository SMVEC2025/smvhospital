import React, { useState } from 'react'
import '../styles/SpecialtyPage.css'
import Hero6 from '../components/Hero6'
import { LuMoveRight } from "react-icons/lu";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

function SpecialtyPage() {
    const heroData = {
        bgImg: 'images/hero-bg9.jpg',
        bgShape: 'shape/hero-shape.png',
        page:"Specialties",
        sliderImages: [
          {
            img: 'images/hero-img.png',
          },
          {
            img: 'images/hero-img1.png',
          },
          {
            img: 'images/hero-img2.png',
          },
          {
            img: 'images/hero-img.png',
          },
          {
            img: 'images/hero-img1.png',
          },
          {
            img: 'images/hero-img2.png',
          },
        ],
        title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
      };

      const specialties = [
        {
          name: "General Medicine",
          description: "Our General Medicine department provides comprehensive healthcare services, ensuring the prevention, diagnosis, and treatment of various medical conditions. Our team of experienced physicians specializes in managing chronic illnesses such as diabetes, hypertension, and thyroid disorders while also addressing acute infections, respiratory diseases, and general wellness.\n\n" +
            "We focus on preventive care, encouraging regular health checkups, vaccinations, and lifestyle modifications to reduce the risk of severe medical conditions. Our general physicians collaborate with specialists when needed, ensuring an integrated approach to healthcare that benefits patients of all ages.\n\n" +
            "Equipped with state-of-the-art diagnostic tools, our department offers early detection of health issues and personalized treatment plans tailored to each patient’s needs. Whether you need routine medical advice or specialized care, our General Medicine department is here to support your journey toward optimal health.",
          image: "https://example.com/images/general-medicine.jpg",
          faqs: [
            { question: "What conditions does a general physician treat?", answer: "General physicians treat infections, chronic illnesses like diabetes and hypertension, respiratory issues, and routine health checkups." },
            { question: "Do I need an appointment for a general consultation?", answer: "While walk-ins are welcome, booking an appointment ensures reduced waiting time and dedicated consultation." },
            { question: "How often should I visit a general physician for a check-up?", answer: "It is advisable to have a check-up at least once a year to monitor health parameters and detect issues early." }
          ]
        },
        {
          name: "Neurology",
          description: "The Neurology department specializes in diagnosing and treating disorders of the brain, spinal cord, and nervous system. Our neurologists are experts in managing conditions such as stroke, epilepsy, migraines, multiple sclerosis, and Parkinson’s disease.\n\n" +
            "We use advanced imaging techniques, neurophysiological testing, and minimally invasive procedures to ensure accurate diagnosis and effective treatment. Our team works closely with rehabilitation specialists to help patients regain mobility and cognitive function after neurological events.\n\n" +
            "Whether you are experiencing chronic headaches, dizziness, or memory loss, our neurology team provides compassionate and evidence-based care to enhance your neurological health.",
          image: "https://example.com/images/neurology.jpg",
          faqs: [
            { question: "What are the early signs of neurological disorders?", answer: "Early signs include frequent headaches, memory loss, dizziness, numbness, and muscle weakness." },
            { question: "How are neurological disorders diagnosed?", answer: "Diagnosis involves MRI scans, EEG, nerve conduction studies, and detailed neurological exams." },
            { question: "Can lifestyle changes improve neurological health?", answer: "Yes, regular exercise, a healthy diet, stress management, and cognitive training help maintain brain health." }
          ]
        },
        {
          name: "Nephrology",
          description: "The Nephrology department focuses on kidney health, diagnosing and treating conditions such as chronic kidney disease (CKD), kidney stones, hypertension-related kidney damage, and kidney failure. Our nephrologists provide comprehensive care to prevent and manage kidney disorders.\n\n" +
            "We offer advanced diagnostic tests, dialysis services, and kidney transplant evaluations. Our team collaborates with cardiologists, endocrinologists, and urologists to ensure holistic patient care.\n\n" +
            "With a patient-centered approach, we emphasize lifestyle modifications, early intervention, and cutting-edge treatments to preserve kidney function and improve overall health.",
          image: "https://example.com/images/nephrology.jpg",
          faqs: [
            { question: "What are the symptoms of kidney disease?", answer: "Symptoms include swelling, fatigue, high blood pressure, decreased urine output, and nausea." },
            { question: "How can I keep my kidneys healthy?", answer: "Stay hydrated, eat a balanced diet, control blood sugar and blood pressure, and avoid excessive salt intake." },
            { question: "When is dialysis needed?", answer: "Dialysis is required when kidney function declines to a level where waste cannot be effectively removed from the body." }
          ]
        },
        {
          name: "Cardiology",
          description: "Our Cardiology department specializes in heart health, providing diagnosis and treatment for conditions such as hypertension, coronary artery disease, arrhythmias, and heart failure. Our experienced cardiologists use the latest technology to assess heart conditions accurately.\n\n" +
            "We offer advanced cardiac imaging, stress tests, angioplasty, and minimally invasive procedures to restore heart function. Preventive cardiology programs help patients manage risk factors through diet, exercise, and medication.\n\n" +
            "With a focus on patient education and long-term wellness, our team ensures that individuals receive the best possible care for maintaining a healthy heart and preventing cardiovascular diseases.",
          image: "https://example.com/images/cardiology.jpg",
          faqs: [
            { question: "What are common signs of heart disease?", answer: "Chest pain, shortness of breath, palpitations, dizziness, and swelling in the legs may indicate heart disease." },
            { question: "How can I improve my heart health?", answer: "Regular exercise, a heart-healthy diet, managing stress, and avoiding smoking help improve cardiovascular health." },
            { question: "When should I see a cardiologist?", answer: "Consult a cardiologist if you have high blood pressure, high cholesterol, or a family history of heart disease." }
          ]
        },
        {
          name: "Obstetrics & Gynaecology",
          description: "The Obstetrics & Gynaecology department provides comprehensive care for women at all stages of life. We specialize in pregnancy care, childbirth, infertility treatments, and management of reproductive health disorders.\n\n" +
            "Our team of obstetricians ensures safe deliveries, prenatal screenings, and high-risk pregnancy management. Gynecological services include menstrual disorder treatments, PCOS management, and minimally invasive surgeries for conditions like fibroids and endometriosis.\n\n" +
            "We emphasize preventive care, offering regular screenings, Pap smears, breast exams, and menopause management to promote lifelong women’s health and well-being.",
          image: "https://example.com/images/obstetrics-gynaecology.jpg",
          faqs: [
            { question: "When should I visit a gynecologist?", answer: "Regular check-ups, pregnancy care, menstrual issues, and reproductive health concerns require a gynecologist's consultation." },
            { question: "What are common pregnancy-related complications?", answer: "Gestational diabetes, preeclampsia, infections, and preterm labor are some complications that need medical attention." },
            { question: "What tests are recommended for women's health?", answer: "Pap smears, mammograms, pelvic exams, and hormone level tests help in early detection of health issues." }
          ]
        }
      ];
      
      
      const [specialtyContainer,setSpecialtyContainer]=useState(specialties[0])
      const [faqContainer,setFaqContainer]=useState(0)

      
  return (
   <>
   <Navbar/>
   <Hero6 data={heroData}/>
   <div className='sp_main'>
    <div className='sp_container1'>
        <img src="https://www.themetechmount.com/wordpress/brivona/elementor/wp-content/uploads/sites/5/2019/01/single-one.jpg" alt="" />
        <div className='sp_title'>{specialtyContainer.name}</div>
        <p className='sp_desc' style={{whiteSpace:"break-spaces"}}>{specialtyContainer.description}</p>
        <div className='sp_container1_faq'>
            {specialtyContainer.faqs.map((e,index)=>(
                <div className={`sp_container1_faq1 ${faqContainer==index?'true':null}`}>
                    <div className='sp_container1_faq_ques' onClick={()=>{setFaqContainer(index)}}>0{index+1} {e.question}</div>
                    <div className='sp_container1_faq_ans'>{e.answer}</div>
                </div>
            ))}
        </div>

    </div>
    <div className='sp_container2'>
        <h1>
            Specialities
        </h1>
        <div className='sp_con2div1'>
        {specialties.map((specialty,index)=>(
            <div key={index} onClick={()=>setSpecialtyContainer(specialties[index])}>{specialty.name} <span><LuMoveRight/></span></div>
        ))}
        </div>
    </div>

   </div>
   <Footer/>
   </>
  )
}

export default SpecialtyPage