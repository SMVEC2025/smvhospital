import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/HomeDoctors.css';
import { Pagination, Navigation } from 'swiper/modules';
import DoctorsCard from './DoctorsCard';

export default function HomeDoctors() {
  const swiperRef = useRef(null);

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
            <h5>Expert doctors</h5>
            <h4>An Ecosystem for Clinical Excellence</h4>
          </div>
        </div>
      </div>

      <div className='hd_container2'>
      <Swiper
        slidesPerView={3}
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