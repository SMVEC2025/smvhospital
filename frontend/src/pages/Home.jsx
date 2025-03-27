import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeAbout from '../components/HomeAbout'
import WhySmv from '../components/WhySmv'
import HorizontalScroll from '../components/HorizontalScroll'
import InternationalPatients from '../components/InternationalPatients'
import HomeNewsEvents from '../components/HomeNewsEvents'
import HomeTestimonial from '../components/HomeTestimonial'
import videoback from '../assets/images/videoback.png'
import HomeDoctors from '../components/HomeDoctors'
import BotWrapper from '../components/bot/BotWrapper'
import LedContainer from '../components/LedContainer'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { AppContext } from '../context/AppContext'
import HomeMobileTreatment from '../components/HomeMobileTreatment'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import MobileSideBar from '../components/navbar/MobileSideBar'
import ScrollToTop from '../components/ScrollToTop'
 
import '../styles/Home.css'
import HomeYoutube from '../components/HomeYoutube'
function Home() {
  const { isMobile,refreshAnim,setShowSideBar } = useContext(AppContext)
  const [newsAndEvents,setNewsAndEvents]=useState([])
  const navigate =useNavigate()
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
    setShowSideBar(false)

  }, []);


  return (
    <div>
       <ScrollToTop/>
        <BotWrapper/>
        <MobileSideBar/>
        <Hero/>
        <HomeAbout/>
        {/* <LedContainer/> */}
        {!isMobile &&(<HomeYoutube/>)}
        <HomeSectionTwo/>
       
        <WhySmv/>
        {isMobile?(<HomeMobileTreatment/>):(<HorizontalScroll/>)}
        <HomeNewsEvents  newsAndEvents={newsAndEvents}/>
        <HomeTestimonial/>
      <HomeDoctors/>
      <Footer/>
    </div>
  )
}

export default Home