import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/HomeDoctors.css';
import { Pagination, Navigation } from 'swiper/modules';
import DoctorsCard from './DoctorsCard';
import '../i18n'
import { useTranslation } from "react-i18next";
import { AppContext } from '../context/AppContext';
export default function HomeDoctors() {
  const swiperRef = useRef(null);
      const { t } = useTranslation("home");
      const {isMobile} =useContext(AppContext)
  

  useEffect(() => {
    if (swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.update(); 
      }, 500);
    }
  }, []);

  return (
    <div className='hd_main'>
      <div className='hd_container1'>
        <div className="sticky-heading">
          <div>
            <h4>{t("doctorshead")}</h4>
          </div>
        </div>
      </div>

      <div className='hd_container2'>
      <Swiper
        slidesPerView={isMobile?1 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide><DoctorsCard/></SwiperSlide>
          <SwiperSlide><DoctorsCard/></SwiperSlide>
          <SwiperSlide><DoctorsCard/></SwiperSlide>
          <SwiperSlide><DoctorsCard/></SwiperSlide>
          <SwiperSlide><DoctorsCard/></SwiperSlide>
          <SwiperSlide><DoctorsCard/></SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}