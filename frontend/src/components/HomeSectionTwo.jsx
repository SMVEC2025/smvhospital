import React from "react";
import "../styles/HomeSectionTwo.css";

const HomeSectionTwo = () => {
  const speacialitymain =[
    {
      title:"title",
      desc:"Experienced and renowned doctors who work towards bringing International standard healthcare within the reach of every individual."
    },
    {
      title:"title",
      desc:"Experienced and renowned doctors who work towards bringing International standard healthcare within the reach of every individual."
    },
    {
      title:"title",
      desc:"Experienced and renowned doctors who work towards bringing International standard healthcare within the reach of every individual."
    }

  ]
  return (
    <div className="hst_container">
      <div className="hst_wrapper">
        <div className="sticky-heading">
          <h5>Speacilaity</h5>
          <h4 >An Ecosystem for Clinical Excellence</h4>
        </div>
        {
          speacialitymain.map((e,i)=>(
            <div id={i+1} className={`card card${i+1}`}>
                <div className="hst_card_div1">
                  <p>00{i+1}</p>

                </div>
                <div  className="hst_card_div2">
                    <span>{e.title}</span>
                    <div>{e.desc}</div>
                </div>
                <div  className="hst_card_div3">

                </div>
            </div>
            
          ))
        }       
      </div>
    </div>
  );
};


export default HomeSectionTwo;
