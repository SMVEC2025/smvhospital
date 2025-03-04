import React, { useState } from 'react'
import '../styles/ContactUs.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Hero6 from '../components/Hero6';
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function ContactUs() {
    const [faqExpand,setFaqExpand]=useState()
    const heroData = {
        bgImg: 'images/hero-bg9.jpg',
        bgShape: 'shape/hero-shape.png', 
        page:"Contact Us",
      
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

      const images = [
        "https://cdn.prod.website-files.com/67768c0a49679fc4278cc1a2/6785623ead28ab4b84e673d0_Loop%20Img%205-p-500.webp",
        "https://images.pexels.com/photos/14530635/pexels-photo-14530635.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/11517554/pexels-photo-11517554.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/9951402/pexels-photo-9951402.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/10961948/pexels-photo-10961948.jpeg?auto=compress&cs=tinysrgb&w=600",
      ];

      const constactFaq = [
        {
          question: "How can I contact customer support?",
          answer: "You can reach our customer support team via email at support@example.com or call us at +91 98765 43210 during business hours."
        },
        {
          question: "What are your customer support hours?",
          answer: "Our support team is available Monday to Friday, 9 AM – 6 PM (IST). We try to respond to all queries within 24 hours."
        },
        {
          question: "How long does it take to get a response?",
          answer: "We usually respond within 24-48 hours. For urgent inquiries, please call our support number."
        },
        {
          question: "Can I visit your office for support?",
          answer: "Yes! You can visit our office at [Your Address] during our working hours. Please schedule an appointment before visiting."
        },
        {
          question: "What information should I provide when contacting support?",
          answer: "To help us assist you faster, please include your name, email, order number (if applicable), and a brief description of your issue."
        },
        {
          question: "Do you offer support on weekends?",
          answer: "Currently, we provide limited email support on weekends. For urgent issues, please contact us on weekdays."
        }
      ];
      const items = Array.from({ length: 9 }, (_, index) => `Item ${index + 1}`);

  return (
    <>
    <Navbar/>
    <Hero6 data={heroData}/>
    <div className="marquee-container">
      <div className="marquee">
        {[...images, ...images].map((img, index) => (
          <img key={index} src={img} alt={`marquee-img-${index}`} className="marquee-image" />
        ))}
      </div>
    </div>


    <div className='contact_container'>
        <div className='contact_con_div1'>
            <h2>Contact us</h2>
            <h4>we're here to assist you in any way we can</h4>
            <p>We value your feedback and strive to continuously improve our services. If you have any comments, suggestions, or concerns, please don't hesitate to let us know. Your input helps us serve you better.</p>
            <h3>Pondicherry</h3>
            <div><span><IoLocationSharp/></span><span>madhagadipet, Pondicherry, India</span></div>
            <div><span><IoCall/></span><span>0413-875686</span></div>
            <div><span><IoIosMail/></span><span>info@smvmch.in</span></div>

        </div>
        <div className='contact_con_div2'>
            <h3>Send us a message</h3>
            <p>Feel free to reach out to us using the contact form below, or connect with us directly through the phone number and email provided.</p>
            <form action="">
                <input type="text" placeholder='Your name' />
                <input type="text"  placeholder='Your email'/>
                <textarea name="" id="" placeholder='Your Message'></textarea>
                <button>Submit</button>
            </form>
        </div>
      
    </div>
    <h2 className='contact_faq_head'>We can answer all your burning questions now</h2>
    <div className='contact_con_div3'>
           {constactFaq.map((e,i)=>(
            <div key={i} className={`contact_div31 ${faqExpand==i?"true":""}`}>
                <h2 onClick={()=>setFaqExpand(i)}>{e.question} <span>+</span></h2>
                <p>{e.answer}</p>
            </div>
           ))}
        </div>
    <Footer/>
    </>
  )
}

export default ContactUs