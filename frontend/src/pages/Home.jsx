import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeAbout from '../components/HomeAbout'
import WhySmv from '../components/WhySmv'
import HorizontalScroll from '../components/HorizontalScroll'
import InternationalPatients from '../components/InternationalPatients'
import HomeNewsEvents from '../components/HomeNewsEvents'
import HomeTestimonial from '../components/HomeTestimonial'
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
import SliderSection from '../components/SliderSection'
import TreatmentsSection from '../components/TreatmentsSection'
import TestimonialSection from './TestimonialSection'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
function Home() {
  const { isMobile,refreshAnim,setShowSideBar,modalOpen,setModalOpen,animCase } = useContext(AppContext)
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
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto"; // Ensure cleanup
    };
  }, [modalOpen]);
useEffect(() => {
  if(animCase !== 'allset'){
    setTimeout(() => {
      setModalOpen(false)
  }, 3000);
  }
  if(animCase == 'allset' ){
      document.body.style.overflow = "auto"; // Ensure cleanup
    
  }
}, [])
const data={
  "@context": "https://schema.org",
  "@type": "Hospital",
  "name": "SMV Super Specialty Hospital",
  "image": "https://www.smvhospitals.com/path-to-your-image.jpg",
  "url": "https://www.smvhospitals.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Madagadipet",
    "addressRegion": "Puducherry",
    "addressCountry": "India"
  }
}
  return (
    <div >
       <ScrollToTop/> 
        <Hero/>
        <HomeAbout/>
        {/* <LedContainer/> */}
        {!isMobile &&(<HomeYoutube/>)}
        <HomeSectionTwo/>
        <TreatmentsSection/>
        <WhySmv/>


        {isMobile?(<HomeMobileTreatment/>):(<SliderSection/>)}
        {/* <HomeNewsEvents  newsAndEvents={newsAndEvents}/> */}
        {/* <HomeTestimonial/> */}
        {/* <TestimonialSection/> */}
        <NewsletterSubscribe/>
      {/* <HomeDoctors/> */}
      <Footer/>
    </div>
  )
}

export default Home