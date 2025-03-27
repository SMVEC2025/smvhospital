import React, { useContext, useEffect, useState } from "react";
import '../styles/MainNewsAndEvents.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoCalendarOutline } from "react-icons/io5";
import axios from 'axios';
import Footer from '../components/footer/Footer';
import MobileSideBar from '../components/navbar/MobileSideBar';
import Navbar from '../components/navbar/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import Hero6 from '../components/Hero6';
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function MainNewsAndEvents() {
    const [newsAndEvents,setNewsAndEvents]=useState([])
    const [count,setCount]=useState(0)
      const { setRefreshAnim,doctorsList,setAnimCase,setShowSideBar } = useContext(AppContext);
      const navigate = useNavigate();

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
    function handleIncrement(){
        const totalCount = newsAndEvents.length
        if (count<(totalCount-1)){
            setCount(count+1)
        }else{
            return
        }
    }
    function handleDecrement(){
        if (count>0){
            setCount(count-1)
        }else{
            return
        }
    }
    const [animate, setAnimate] = useState("fade-in");

    useEffect(() => {
        // Step 1: Trigger fade-out animation
        setAnimate("fade-out");

        // Step 2: Wait for fade-out to complete, then change content
        const timeout = setTimeout(() => {
           
            setAnimate("fade-in"); // Step 3: Trigger fade-in animation
        }, 300); // Duration should match fade-out CSS

        return () => clearTimeout(timeout);
    }, [count]); // Runs every time content changes
    const handleClick = (event) => {
        navigate(`/newsandevents/${event.acf.shorttitle}`, { state: { event } });
      };
      
    return (
      <>
        <ScrollToTop/>
      <Navbar/>
      <MobileSideBar/>

     
        <div className='mnae_main'>
            <header>
                <div>
                    <h2>Mar 27th - April 25th</h2>
                    <div className='mnae_slider'>
                        <div className='mnae_slider1'>
                            <h3>{newsAndEvents[count]?.acf?.shorttitle}</h3>
                            <div>
                                <span><IoCalendarOutline /></span>
                                <span>{newsAndEvents[count]?.acf?.date.split(',')[0]}</span>
                            </div>
                            <button>View More</button>

                        </div>
                        <div className="ticket-card">
                            <img src={newsAndEvents[count]?.acf?.image} alt="Event" className={`ticket-image ${animate}`} />
                        </div>
                        <div className='leftarrow' onClick={()=>handleDecrement(count)}><FaChevronLeft /></div>
                        <div className='rightarrow' onClick={()=>handleIncrement(count)} ><FaChevronRight /></div>
                    </div>

                </div>
            </header>
            <section>
                <h1 className='allnewsevent_headings'>Our All Events</h1>
                <div className='allevents'>
                 {newsAndEvents?.map((e,i)=>(
                    <div key={i} onClick={()=>{handleClick(e)}} className='allevents_card'>
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
                            <span>{e.acf.date.split(",")[0]}</span>
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
        <Footer />

        </>
    )
}

export default MainNewsAndEvents