import React from "react";
import "../styles/HomeSectionTwo.css";
import '../i18n'
import { useTranslation } from "react-i18next";
import HomeHeadings from "./HomeHeadings";
const HomeSectionTwo = () => {
    const { t } = useTranslation("home");
    const specialties = Object.entries(t("specialtydesc", { returnObjects: true }));

  console.log(specialties)
  const speacialitymain=[
    {
     title:"General Medicine",
     para:"Our compassionate team tailors every interaction to meet each patient's unique emotional and physical needs, ensuring a truly personalized care experience Our compassionate team tailors every interaction to meet each patient's unique emotional and physical needs, ensuring a truly personalized care experience",
     imgurl:'https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=600'
   },
    {
     title:"General Surgery",
     para:"We are a socially conscious organization dedicated to making a positive impact through sustainable practices and community-driven initiatives. ",
     imgurl:'https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=600'

    },
    {
     title:"Cardiology",
     para:"Our team of doctors brings vast experience and deep clinical knowledge to every case. Their extensive expertise ensures innovative treatments and exceptional patient care.",
     imgurl:'https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=600'

    },
    {
     title:"Obstetrics & Gynaecology",
     para:"Our expert liaison team provides personalized guidance and ensures smooth communication between patients and providers, enhancing your healthcare journey.",
     imgurl:'https://images.pexels.com/photos/7108319/pexels-photo-7108319.jpeg?auto=compress&cs=tinysrgb&w=600'

    },
  
 ]
  return (
    <div className="hst_container">
      <div className="hst_wrapper">
        <div className="sticky-heading">
         <HomeHeadings title={t("specialtyhead")}/>
        </div>
        {
          specialties.map(([id,value])=>(
            <div id={id} className={`card card${Number(id)+1}`}>
                <div className="hst_card_div1">
                  <p>00{Number(id)+1}</p>

                </div>
                <div  className="hst_card_div2">
                    <span>{value.title}</span>
                    <div style={{whiteSpace:"pre-line"}}>{value.desc}</div>
                </div>
                <div  className="hst_card_div3">
                  <img src={value.imgurl} alt="" />

                </div>
            </div>
            
          ))
        }       
      </div>
    </div>
  );
};


export default HomeSectionTwo;
