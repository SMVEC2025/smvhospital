import React from 'react'
import '../styles/MainNewsAndEvents.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function MainNewsAndEvents() {
    const events = [
        {
            id: 1,
            category: "COMEDY",
            title: "William Smith Comedy Show",
            subtitle: "Crack a Smile – 2022 Tour",
            date: "Jun 27",
            time: "7:00 PM",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IOoyAZFn2-Ch4WxtoQHr0l8xvJzMTi_0XMirjHoeZ3xxsZTx_Pmqwa3vt2sTeHIUiqA&usqp=CAU", // Replace with actual image
        },
        {
            id: 2,
            category: "MUSIC",
            title: "Live Jazz Night",
            subtitle: "Smooth Sounds – 2023 Tour",
            date: "Aug 10",
            time: "8:00 PM",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8IOoyAZFn2-Ch4WxtoQHr0l8xvJzMTi_0XMirjHoeZ3xxsZTx_Pmqwa3vt2sTeHIUiqA&usqp=CAU",
        },
    ];

    return (
        // <div className="ticket-card">
        //   <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="Event" className="ticket-image" />
        // </div>
        <div className='mnae_main'>
            <header>
                <div>
                    <h2>Mar 27th - April 25th</h2>
                    <div className='mnae_slider'>
                        <div className="ticket-card">
                            <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="Event" className="ticket-image" />
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}

export default MainNewsAndEvents