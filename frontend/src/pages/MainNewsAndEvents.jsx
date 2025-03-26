import React, { useEffect, useState } from 'react'
import '../styles/MainNewsAndEvents.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import axios from 'axios';

function MainNewsAndEvents() {
    const [newsAndEvents,setNewsAndEvents]=useState([])
    useEffect(() => {
      const fetchnewsandevents = async () => {
        try {
          const response = await axios.get("https://cms.smvhospital.com/wp-json/wp/v2/newsandevents?_fields=acf");
          setNewsAndEvents(response.data);
        } catch (error) {
          console.error("Error fetching doctors:", error);
        } finally{
        }
      };
    
      fetchnewsandevents();
  
    }, []);
    console.log(newsAndEvents)
    return (
        // <div className="ticket-card">
        //   <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="Event" className="ticket-image" />
        // </div>
        <div className='mnae_main'>
            <header>
                <div>
                    <h2>Mar 27th - April 25th</h2>
                    <div className='mnae_slider'>
                        <div className='mnae_slider1'>
                            <h3>Blood donation program</h3>
                            <div>
                                <span><IoCalendarOutline /></span>
                                <span>Jan 31</span>
                            </div>
                            <button>View More</button>

                        </div>
                        <div className="ticket-card">
                            <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="Event" className="ticket-image" />
                        </div>
                        <div className='leftarrow'><FaChevronLeft /></div>
                        <div className='rightarrow'><FaChevronRight /></div>
                    </div>

                </div>
            </header>
            <section>
                <h1 className='allnewsevent_headings'>Our All Events</h1>
                <div className='allevents'>
                 {newsAndEvents?.map((e,i)=>(
                    <div className='allevents_card'>
                    <div className='allevents_card1'>
                        <div className='allevents_card11'>
                            <span>{e.acf.date.split(" ").slice(0, 1)}</span>
                            <span>{e.acf.date.split(" ")[1].replace(",", "")}</span>
                        </div>
                        <div className='allevents_card12'>
                        {e.acf.date.split(" ").slice(2,3)}
                        </div>
                    </div>
                    <div className='allevents_card2'>
                        <h3>{e.acf?.shorttitle}</h3>
                        <div>
                            <span><IoCalendarOutline /></span>
                            <span>{e.acf.date.split(" ").slice(0, 2)}</span>
                        </div>
                        <button>View More</button>

                    </div>
                    <div className='allevents_card3'>

                        <div className="ticket-card">
                            <img src={e.acf.image} alt="Event" className="ticket-image" />
                        </div>
                    </div>
                </div>
                 ))}
                </div>
            </section>
        </div>
    )
}

export default MainNewsAndEvents