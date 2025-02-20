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
function Home() {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
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