import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/HomeMobileTreatment.css';

// import required modules
import { Pagination } from 'swiper/modules';
import TreatmentCard from './TreatmentCard';

export default function HomeMobileTreatment() {
    return (
        <div className='hmt_main'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <TreatmentCard num="01" imgurl='https://img.freepik.com/free-photo/asian-physiotherapist-with-patient_1098-16830.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>
                <SwiperSlide>
                    <TreatmentCard num="02" imgurl='https://img.freepik.com/free-photo/therapist-doctor-analyzing-heart-pulse-medical-consulting-hospital-ward-afroamerican-nurse_482257-2603.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>
                <SwiperSlide>
                    <TreatmentCard num="03" imgurl='https://img.freepik.com/free-photo/elderly-man-with-respirator-doctors_23-2149011235.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>
                <SwiperSlide>
                    <TreatmentCard num="04" imgurl='https://img.freepik.com/free-photo/male-patient-receiving-massage-from-doctor_107420-65165.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>
                <SwiperSlide>
                    <TreatmentCard num="05" imgurl='https://img.freepik.com/free-photo/dentist-showing-x-ray-patient_107420-65336.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>
                <SwiperSlide>
                    <TreatmentCard num="06" imgurl='https://img.freepik.com/free-photo/boy-looking-dentist-hand-clinic_23-2147905935.jpg?uid=R184073455&ga=GA1.1.1849470527.1737184257&semt=ais_hybrid' />
                </SwiperSlide>

            </Swiper>
        </div>

    );
}
