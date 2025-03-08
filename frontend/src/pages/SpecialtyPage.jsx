import React, { useEffect, useState } from 'react'
import '../styles/SpecialtyPage.css'
import Hero6 from '../components/Hero6'
import { LuMoveRight } from "react-icons/lu";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import axios from 'axios';

function SpecialtyPage() {
  const [specialty,setSpecialty] = useState([])
  const [loading,setLoading]=useState(true)
    const heroData = {
        bgImg: 'images/hero-bg9.jpg',
        bgShape: 'shape/hero-shape.png',
        page:"Specialties",
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

   

      useEffect(() => {
        const fetchSpecialties = async () => {
          try {
            const response = await axios.get("https://cms.smvhospital.com/wp-json/wp/v2/specialties?_fields=acf");
            setSpecialty(response.data);
            setShowSpecialty(response.data[0]?.acf);
          } catch (error) {
            console.error("Error fetching doctors:", error);
          } finally{
            setLoading(false)
          }
        };
      
        fetchSpecialties();
      }, []);
      
  
  const [showSpecialty,setShowSpecialty]=useState([])
  const [faqContainer,setFaqConatiner]=useState(0)
  const faq = [1,2,3]

      console.log("showSpecialty",showSpecialty)
  return (
   <>
   <Navbar/>
   <Hero6 data={heroData}/>
   <div className='sp_main'>
    <div className='sp_container1'>
        <img src="https://www.themetechmount.com/wordpress/brivona/elementor/wp-content/uploads/sites/5/2019/01/single-one.jpg" alt="" />
        <div className='sp_title'>{showSpecialty?.name}</div>
        
        <p className='sp_desc'>{showSpecialty?.description}</p>
       
         <div className='sp_container1_faq'>
            {/* {faq.map((e,index)=>(
                <div className={`sp_container1_faq1 ${faqContainer==index?'true':null}`}>
                    <div className='sp_container1_faq_ques' onClick={()=>{setFaqConatiner(index)}}>0{index+1} {e.question}</div>
                    <div className='sp_container1_faq_ans'>{e.answer}</div>
                </div>
            ))} */}
             {loading?(
            <p>loading...</p>
        ):(
          <>
           {faq.map((e,index)=>(
                <div key={index} className={`sp_container1_faq1 ${faqContainer==index?'true':null}`}>
                    <div className='sp_container1_faq_ques'onClick={()=>{setFaqConatiner(index)}} >0{index+1} {showSpecialty?.faqs[`question1`]} </div>
                    <div className='sp_container1_faq_ans'>{showSpecialty.faqs[`answer${index+1}`]}</div>
                </div>
            ))}
          </>
        )}
            
        </div>

    </div>
    <div className='sp_container2'>
        <h1>
            Specialities
        </h1>
        <div className='sp_con2div1'>
        {specialty.map((specialt,index)=>(
            <div key={index} onClick={()=>{setShowSpecialty(specialty[index].acf)}}>{specialt.acf?.name} <span><LuMoveRight/></span></div>
        ))}
        </div>
    </div>
       
   </div>
   <Footer/>
   </>
  )
}

export default SpecialtyPage