import React from 'react';
import Hero6 from '../components/Hero6';
import AboutSection1 from '../components/AboutSection1';
import AboutSpeciality from '../components/AboutSpeciality';
import Headings from '../components/Headings';
import Button from '../components/Button';
import AboutCare from '../components/AboutCare';
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
const heroData = {
  bgImg: 'images/hero-bg9.jpg',
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
  title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
};
const specialtyHeading=[
  {
    title:"Our Specialty",
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
  return (
    <>
    <Navbar/>
    <div className='about_main'>
      <Hero6 data={heroData}/>
      <AboutSection1/>
      <Headings data={careHeading}  />
      <AboutCare/>
    <div className='about_what'> 
    <Headings data={whyHeading}  color='white'/>
    <div className='about_what_con1 rigth'>
      <div>
      <img src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='about_what_content'>
        <h2>Mission</h2>
        <p>At SMV Hospital, our mission is to provide compassionate, patient-centered healthcare with a commitment to excellence in medical care, innovation, and education. We strive to improve lives by delivering affordable, accessible, and high-quality healthcare using advanced medical technology and a dedicated team of professionals.</p>
      </div>

      </div>
          
          <span>01</span>
    </div>
    <div className='about_what_con1 left'>
    <div>
      <img src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='about_what_content'>
        <h2>Vision</h2>
        <p>To be a leading healthcare institution recognized for excellence in clinical care, research, and innovation. We envision a future where every individual has access to world-class medical care, fostering a healthier and more resilient community.</p>
      </div>

      </div>          <span>01</span>
    </div>
    <div className='about_what_con1 rigth'>
    <div>
      <img src="https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <div className='about_what_content'>
        <h2>Our Values</h2>
        <p>At SMV Hospital, we are committed to delivering compassionate and patient-centered care while upholding the highest standards of integrity, excellence, and innovation. We believe in fostering a culture of empathy, ethical practice, and continuous learning, ensuring that every patient receives the best possible treatment. Our team works collaboratively, leveraging cutting-edge medical technology and expertise to provide accessible, inclusive, and high-quality healthcare for all.</p>
      </div>

      </div>          <span>01</span>
    </div>


    </div>
      <Headings data={specialtyHeading}  />
      <AboutSpeciality/>
      <div className='as_end'>
      <p className="hero-subtitle">
              To Know More About Our Speciality
              </p>
        <Button name="View All"/>

        </div>
     

        <div className='about_testimonial'>
     
            <div>
        <img src='https://img.freepik.com/premium-photo/she39s-well-cared-portrait-smiling-nurse-with-her-senior-patient-hospital_590464-867.jpg?w=360' alt="" />
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
            <Button name="Book Apoointment"/>
            </div>

    </div>
    <Footer/>
    </>
  );
};

export default About;
