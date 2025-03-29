import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../i18n'
import { useTranslation } from "react-i18next";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/HomeTestimonial.css'

// import required modules
import { EffectCards } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import TitleHeader from './TitleHeader';

export default function HomeTestimonial() {
    const { t } = useTranslation("home");
    
    return (
        <>   
        <div className='ht_main1'>
     <TitleHeader name='international patients' color='#0d233a'/>
       
        </div>
            <div className='ht_main'>
                <div className='ht_container1'>
                 <div className='ht_container1_div1'>
                    <h5>Get Free Consultation</h5>
                    <button>Book Appointment Now</button>
                 </div>

                </div>
                <div className='ht_container2'>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TestimonialCard/>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>

            </div>
        </>
    );
}
