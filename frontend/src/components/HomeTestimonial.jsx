import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../styles/HomeTestimonial.css'

// import required modules
import { EffectCards } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';

export default function HomeTestimonial() {
    return (
        <>  
        <div className='ht_main1'>
        <div className="sticky-heading">
          <div>
          <h5>Patient's Testimonial</h5>
          <h4 >An Ecosystem for Clinical Excellence</h4>
          </div>
      
        </div>
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
