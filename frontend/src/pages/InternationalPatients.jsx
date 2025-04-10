import React, { useContext, useEffect, useRef, useState } from 'react';
import ScrollToTop from '../components/ScrollToTop';
import Hero6 from '../components/Hero6';
import Headings from '../components/Headings';
import Footer from '../components/footer/Footer';
import '../styles/InternationalPatientsPage.css'
import entrance from '../assets/images/entrance.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import chairs from '../assets/images/chairs.jpg'
import { AppContext } from '../context/AppContext';
import MobileHero6 from '../components/MobileHero6';
function InternationalPatients() {


  const { setAnimCase,setShowSideBar,isMobile } = useContext(AppContext)
  useEffect(() => {
    setAnimCase('allset');
    setShowSideBar(false)
   }, [])

    const cardHeading=[
        {
          title:"global health destination",
          subTitle:"Advanced care, thoughtful healing, and a space built for comfort — welcoming you from wherever you are."
        }
      ]
      const facilityHeading=[
        {
          title:"Our Advanced Healthcare Facilities",
          subTitle:"Every facility is thoughtfully designed to ensure comfort, safety, and the highest standard of care."
        }
      ]
      
const heroData = {
    bgImg: 'https://images.pexels.com/photos/7010203/pexels-photo-7010203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bgShape: 'shape/hero-shape.png', 
    page:"International Patients",
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
  const cardDetails =[
    {
        title:"Pondicherry’s Pulse for Advanced Healthcare",
        image: entrance,
        subTitle:"At SMV Super Specialty Hospital, Pondicherry, we bring 25 years of trusted healthcare experience to deliver advanced, patient-focused care across multiple specialties. With 250+ experienced doctors available 24×7, our hospital is designed to offer seamless medical services powered by expertise, modern technology, and a commitment to compassionate healing. As a leading super-specialty centre in the region, we continue to set benchmarks in quality care for both local and international patients."
    },
    {
        title:"Where Every Life Gets Personal Attention",
        image:'https://img.freepik.com/free-photo/nurse-talking-with-senior-woman-with-walking-disabilities-sitting-wheelchair-into-private-modern-recovery-clinic-hospital-handicapped-old-retired-patient-medical-consultation-advice_482257-4290.jpg?ga=GA1.1.439208327.1743846312&semt=ais_hybrid&w=740',
        subTitle:"At SMV Super Specialty, every patient is treated like family. Our approach is simple — listen closely, care deeply, and treat with precision. From doctors and nurses to support teams, every member of our hospital works together to ensure you receive focused attention and the right treatment at the right time. It’s not just about medical care — it’s about making you feel safe, heard, and truly cared for."
    },
    {
        title:"Spaces That Heal, Naturally",
        image: chairs,
        subTitle:"From the moment you step in, SMV Super Specialty is built to put you at ease. Soothing spaces, thoughtful interiors, and an atmosphere designed to calm the mind and body — everything here supports recovery. We've created an environment that feels less like a hospital and more like a place of comfort, while also embracing eco-friendly practices that reflect our long-term care for both people and the planet."
    }
  ]

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
  
  const hospitalFacilities = [
    {
      name: "Radiology & Imaging Sciences",
      image: "https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?",
      description: "Advanced diagnostic imaging services including X-rays, ultrasound, and more. Ensures accurate detection and monitoring of health conditions."
    },
    {
      name: "Digital Cath Lab",
      image: "https://images.pexels.com/photos/9574569/pexels-photo-9574569.jpeg?",
      description: "State-of-the-art cardiac catheterization lab for heart procedures. Enhances precision in diagnosing and treating heart diseases."
    },
    {
      name: "MRI",
      image: "https://images.pexels.com/photos/7089017/pexels-photo-7089017.jpeg?",
      description: "High-resolution magnetic resonance imaging for detailed internal views. Ideal for brain, spine, and soft tissue diagnostics."
    },
    {
      name: "Critical & Intensive Care",
      image: "https://images.pexels.com/photos/19976471/pexels-photo-19976471/free-photo-of-nurse-hand-over-newborn.png?",
      description: "Round-the-clock care for patients in life-threatening conditions. Equipped with advanced monitoring and life support systems."
    },
    {
      name: "Laboratory Services",
      image: "https://images.pexels.com/photos/8442110/pexels-photo-8442110.jpeg?",
      description: "Comprehensive pathology and diagnostic testing facility. Supports fast and accurate health assessments."
    },
    {
      name: "Digital Mammography",
      image: "https://img.freepik.com/free-photo/bared-male-scanning-chest-lungs-cabinet_7502-9847.jpg",
      description: "Advanced breast imaging for early detection of cancer. Offers enhanced clarity and comfort during screening."
    },
    {
      name: "CT Scan",
      image: "https://sjra.com/wp-content/uploads/2024/02/CT-Technologist-Smiling-At-Patient-As-She-Starts-CT-Scan.webp",
      description: "High-speed scanning for quick and precise imaging. Helps diagnose injuries, infections, and internal diseases."
    },
    {
      name: "Blood Bank",
      image: "https://images.pexels.com/photos/12193090/pexels-photo-12193090.jpeg?",
      description: "Well-stocked and safe blood storage and transfusion services. Supports emergency and planned medical procedures."
    },
    {
      name: "Operation Theatres",
      image: "https://images.pexels.com/photos/4769133/pexels-photo-4769133.jpeg?",
      description: "Modern surgical suites with cutting-edge equipment. Designed for all types of routine and emergency surgeries."
    },
    {
      name: "Physiotherapy",
      image: "https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg",
      description: "Personalized rehabilitation programs for pain relief and recovery. Enhances mobility and restores physical function."
    },
    {
      name: "Palliative Care",
      image: "https://images.pexels.com/photos/6010809/pexels-photo-6010809.jpeg",
      description: "Compassionate care focused on comfort for chronic illnesses. Supports emotional and physical well-being of patients."
    },
    {
      name: "Geriatric Care",
      image: "https://images.pexels.com/photos/8949877/pexels-photo-8949877.jpeg?",
      description: "Specialized care for elderly patients with age-related issues. Promotes health, dignity, and quality of life."
    },
    {
      name: "Telemedicine",
      image: "https://images.pexels.com/photos/4031710/pexels-photo-4031710.jpeg?",
      description: "Remote consultation services for convenient access to doctors. Ideal for follow-ups and minor health concerns."
    },
    {
      name: "Ambulatory Services",
      image: "",
      description: "Emergency and non-emergency transport equipped with medical aid. Ensures safe patient transfer with trained staff."
    }
  ];
  
  return (
    <>
        <ScrollToTop/>
        {isMobile?<MobileHero6 data={heroData}/>:<Hero6 data={heroData}/>}
        <div className='ipp_main'>
          <Headings data={cardHeading}  />
         <div className='ipp_card_wrapper'>
         {cardDetails.map((e,i)=>(
              <div key={i} className='ipp_card'>
              <img src={e.image} alt="" />
              <h2>{e.title}</h2>
              <p>{e.subTitle}</p>
          </div>
          ))}
         </div>
          <div className='ipp_swipper'>
          <Headings data={facilityHeading}  />
          <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {hospitalFacilities.map((element,index)=>(
          <SwiperSlide key={index}>
            <div className='ipp_swiperdiv' style={{backgroundImage:`url('${element.image}')`}}>
             <div>
 
              <section>
                <h1>{element.name}</h1>
                <p>{element.description}</p>
              </section>
               </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
            

          </div>

          </div>
          <Footer/>
    </>
  )
}

export default InternationalPatients