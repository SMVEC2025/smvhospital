import React, { useContext, useEffect } from 'react';
import Hero6 from '../components/Hero6';
import AboutSection1 from '../components/AboutSection1';
import AboutSpeciality from '../components/AboutSpeciality';
import Headings from '../components/Headings';
import Button from '../components/Button';
import AboutCare from '../components/AboutCare';
import { Helmet } from "react-helmet";
import Footer from '../components/footer/Footer'
import { AppContext } from '../context/AppContext';
import ScrollToTop from '../components/ScrollToTop';
import MobileHero6 from '../components/MobileHero6';
import aboutus1 from '../assets/images/aboutus1.jpg'
import aboutus2 from '../assets/images/aboutus2.jpg'
import aboutus3 from '../assets/images/aboutus3.jpg'
import FeaturedCareAreas from './FeaturedCareAreas';
const heroData = {
  bgImg: 'images/aboutmainpic.jpg',
  bgShape: 'shape/hero-shape.png', 
  page:"About SMV",

  sliderImages: [
    {
      img: 'images/hero-img.png',
    },
    {
      img: 'images/hero-img1.png',
    },
    {
      img: 'images/hero-img2.png',
    },
    {
      img: 'images/hero-img.png',
    },
    {
      img: 'images/hero-img1.png',
    },
    {
      img: 'images/hero-img2.png',
    },
  ],
  title: ['ENT', 'Plastic Surgery', 'Cardiology', 'Dental', 'Neurology'],
};
const specialtyHeading=[
  {
    title:"Medical Services",
    subTitle:"SMV Superspecialty Hospital is a leader in advanced medical care, offering specialized treatments across Neurology, Cardiology, Orthopaedics, Oncology, and more. With cutting-edge technology and expert doctors, we are committed to delivering excellence in patient care."
  }
]
const careHeading=[
  {
    title:"Our care",
    subTitle:"SMV Superspecialty Hospital is a leader in advanced medical care, offering specialized treatments across Neurology, Cardiology, Orthopaedics, Oncology, and more. With cutting-edge technology and expert doctors, we are committed to delivering excellence in patient care."
  }
]
const whyHeading=[
  {
    title:"What we are about",
    subTitle:"SMV Superspecialty Hospital is a leader in advanced medical care, offering specialized treatments across Neurology, Cardiology, Orthopaedics, Oncology, and more. With cutting-edge technology and expert doctors, we are committed to delivering excellence in patient care."
  }
]
const content = [
  {
    title: "Our Mission",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Our Vision",
    image: "https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    title: "Our Value",
    image: "https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=600", // Replace with actual image URL
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];


const About = () => {
    const { setAnimCase,setShowSideBar,isMobile } = useContext(AppContext)
    useEffect(() => {
      setAnimCase('allset');
      setShowSideBar(false)
     }, []) 
  return ( 
    <>
    <Helmet>
  <title>About Us - SMV Super Specialty Hospital</title>
  <meta name="description" content="Know more about our mission, vision, and team of expert medical professionals." />
    <ScrollToTop/>
    <div className='about_main'>
      {isMobile?<MobileHero6 data={heroData}/>:<Hero6 data={heroData}/>}
      <AboutSection1/>
      <Headings data={careHeading}  />
      <AboutCare/>
    <div className='about_what'> 
    <Headings data={whyHeading}  color='white'/>
    <div className='about_what_con1 rigth'>
      <div>
      <img src={aboutus1} alt="" />
      <div className='about_what_content'>
        <h2>Mission</h2>
        <p>At SMV Hospital, our mission is to deliver compassionate, accessible, and affordable healthcare that places patients at the heart of everything we do. We are dedicated to excellence in clinical outcomes, innovation in medical practice, and leadership in health education. Through advanced technology and a skilled healthcare team, we aim to enhance lives and promote well-being in every community we serve.</p>
      </div>

      </div>
          
          <span>01</span>
    </div>
    <div className='about_what_con1 left'>
    <div>
      <img src={aboutus2} alt="" />
      <div className='about_what_content'>
        <h2>Vision</h2>
        <p>Our vision is to be a global leader in patient-focused healthcare, setting benchmarks in quality, safety, and innovation. We strive to build a future where every individual, regardless of background, has access to exceptional medical care. SMV Hospital aims to lead with integrity and innovation, shaping a healthier world through continuous improvement and compassionate service.</p>
      </div>

      </div>          <span>02</span>
    </div>
    <div className='about_what_con1 rigth'>
    <div>
      <img src={aboutus3} alt="" />
      <div className='about_what_content'>
        <h2>Our Values</h2>
        <p>At SMV Hospital, our core values guide every interaction and decision. We believe in compassion, integrity, and excellence, ensuring each patient receives respectful and personalized care. Innovation, teamwork, and continuous growth define our approach, while inclusivity and empathy remain at our foundation. Together, we commit to delivering healthcare that empowers lives and strengthens communities.</p>
      </div>

      </div>           <span>03</span>
    </div>


    </div>
      <Headings data={specialtyHeading}  />
      {/* <AboutSpeciality/> */}
      <FeaturedCareAreas/>
      {/* <div className='as_end'>
      <p className="hero-subtitle">
              To Know More About Ourspecialty
              </p>
        <Button name="View All"/>

        </div> */}
     

        <div className='about_testimonial'>
     
            <div>
        <img src='https://media.istockphoto.com/id/1418999473/photo/doctors-comforting-disabled-elderly-patient.jpg?s=612x612&w=0&k=20&c=ggVR5D9U8IY7irIrgvfqSmlLwA7se4vc2fRSAjV2lSs=' alt="" />
            </div>
            <div className='about_testimonial_div2'>
            <h3>Life-Changing Care at SMV Hospital</h3>
            <p>"I can't thank the doctors and staff at SMV Hospital enough for their exceptional care. I was diagnosed with a severe heart condition, and from my very first consultation, I felt reassured and confident in my treatment. Dr. Sharma and his team took the time to explain every step, ensuring I was comfortable and informed. The nurses were compassionate, always checking on me and making sure I was at ease during my recovery. Today, I feel healthier than ever, and it's all because of the outstanding medical expertise and support I received here. Thank you, SMV Hospital, for giving me a second chance at life!"</p>
        <span>— Rajesh Kumar, 52
        Chennai, India</span>
            </div>
        </div>
        <div className='about_end'>
            <h3>Take the next step</h3>
            <p>Let’s talk about how we can work together to make healthcare work for all of us.</p>
            <Button event='/appointment' name="Book Apoointment"/>
            </div>

    </div>
    <Footer/>
    </Helmet>

    </>
  );
};

export default About;
