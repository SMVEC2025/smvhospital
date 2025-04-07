import React, { useRef, useState } from 'react';
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
function InternationalPatients() {

    const cardHeading=[
        {
          title:"global health destination",
          subTitle:"Advanced care, thoughtful healing, and a space built for comfort — welcoming you from wherever you are."
        }
      ]
      const facilityHeading=[
        {
          title:"global health destination",
          subTitle:"Advanced care, thoughtful healing, and a space built for comfort — welcoming you from wherever you are."
        }
      ]
      
const heroData = {
    bgImg: 'images/aboutmainpic.JPG',
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
  
  return (
    <>
        <ScrollToTop/>
        <Hero6 data={heroData}/>
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
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
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