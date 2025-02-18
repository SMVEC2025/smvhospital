import React from 'react'
import Hero from '../components/Hero'
import HomeSectionTwo from '../components/HomeSectionTwo'
import HomeAbout from '../components/HomeAbout'
import WhySmv from '../components/WhySmv'
import HorizontalScroll from '../components/HorizontalScroll'
import InternationalPatients from '../components/InternationalPatients'

function Home() {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <HomeSectionTwo/>
        <WhySmv/>
        <HorizontalScroll/>
        <InternationalPatients/>
      
    </div>
  )
}

export default Home