import React, { useEffect } from 'react'
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



function Home() {
  useEffect(() => {
    const reload = sessionStorage.getItem('reload')
   setTimeout(() => {
    if(reload == 'false'){
      sessionStorage.setItem('reload', "false")
    }else{
    sessionStorage.setItem('reload', "true")
  }
   }, 100);
  }, [])
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
        <HorizontalScroll/>
        <HomeNewsEvents/>
        <HomeTestimonial/>
      <HomeDoctors/>
      <Footer/>
    </div>
  )
}

export default Home