import React from "react";
import "../styles/HomeSectionTwo.css";

const HomeSectionTwo = () => {
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
          <div>
          <h5>Speacilaity</h5>
          <h4 >An Ecosystem for Clinical Excellence</h4>
          </div>
          <div>
            <button>View ALL</button>
          </div>
        </div>
        {
          speacialitymain.map((e,i)=>(
            <div id={i+1} className={`card card${i+1}`}>
                <div className="hst_card_div1">
                  <p>00{i+1}</p>

                </div>
                <div  className="hst_card_div2">
                    <span>{e.title}</span>
                    <div>{e.para}</div>
                </div>
                <div  className="hst_card_div3">
                  <img src={e.imgurl} alt="" />

                </div>
            </div>
            
          ))
        }       
      </div>
    </div>
  );
};


export default HomeSectionTwo;
