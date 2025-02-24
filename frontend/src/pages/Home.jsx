import React from 'react'
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
function Home() {
  return (
    <div>
        <BotWrapper/>
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
    </div>
  )
}

export default Home