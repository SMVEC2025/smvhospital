import React, { useContext, useEffect } from 'react'
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


function Home() {
  const { isMobile,refreshAnim } = useContext(AppContext)

  console.log("refreshAnim",refreshAnim)
  
  return (
    <div>
        <BotWrapper/>
        <Navbar/>
    <Hero/>
        <HomeAbout/>
        <LedContainer/>
        <img src={videoback} style={{width:"100%"}} alt="" />
        <HomeSectionTwo/>
       
        <WhySmv/>
        {isMobile?(<HomeMobileTreatment/>):(<HorizontalScroll/>)}
        <HomeNewsEvents/>
        <HomeTestimonial/>
      <HomeDoctors/>
      <Footer/>
    </div>
  )
}

export default Home