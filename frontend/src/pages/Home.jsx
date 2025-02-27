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
import axiosInstance from '../api'


function Home() {
  const { isMobile } = useContext(AppContext)
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
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.post('/api/submit-form',
          {
            "name": "John Doe",
            "age": 30,
            "gender": "Male",
            "phone": "1234567890",
            "concern": "Consultation",
            "packageType": "Health Packages",
            "selectedPackage": "Basic Package"
          });
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    
    getData();

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
        {isMobile?(<HomeMobileTreatment/>):(<HorizontalScroll/>)}
        <HomeNewsEvents/>
        <HomeTestimonial/>
      <HomeDoctors/>
      <Footer/>
    </div>
  )
}

export default Home