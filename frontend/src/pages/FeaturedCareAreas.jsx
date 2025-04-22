import React from "react";
import "../styles/FeaturedCareAreas.css";
import { useNavigate } from "react-router-dom";

const medicalServices = [
    { id: 1, title: "Trauma Care" },
    { id: 2, title: "Neuro Sciences" },
    { id: 3, title: "Cardiac Sciences" },
    { id: 4, title: "Organ Transplantation" },
    { id: 5, title: "Plastic Surgery" },
    { id: 6, title: "Vascular Surgery" },
    { id: 7, title: "Cosmetology" },
    { id: 8, title: "Urology" },
    { id: 9, title: "Orthopaedics" },
    { id: 10, title: "Podiatrics" },
    { id: 11, title: "Obstetrics & Gynaecology" },
    { id: 12, title: "Paediatrics & Neonatology" },
    { id: 13, title: "Gastroenterology " },
    { id: 14, title: "Pulmonology & Sleep Medicine" },
    { id: 15, title: "Oncology" },
    { id: 16, title: "Rheumatology" },
    { id: 17, title: "Endocrinology" },
    { id: 18, title: "Radio Frequency Ablation (RFA)" },
    { id: 19, title: "ENT" }
  ]


const FeaturedCareAreas = () => {
  const half = Math.ceil(medicalServices.length / 2);
  const leftColumn = medicalServices.slice(0, half);
  const rightColumn = medicalServices.slice(half);
  const navigate = useNavigate()
  const handleNavigate = (newIndex) => {
    navigate(`/our-services`, { state: { newIndex } });
  };

  return (
    <section className="featured-care-section">
      <div className="featured-care-container">
        <div className="featured-care-left">
        <h2>Comprehensive Care Departments</h2>
<p>Explore our wide range of expert medical services, from cardiology and neurology to advanced surgical care and rehabilitation.</p>
        </div>
        <div className="featured-care-right">
          <div className="featured-care-column">
            {leftColumn.map((item, idx) => (
              <a key={idx} onClick={()=>{handleNavigate(item.id-1)}}  className="featured-care-item">
                {item.title}
                <span className="arrow">→</span>
              </a>
            ))}
          </div>
          <div className="featured-care-column">
            {rightColumn.map((item, idx) => (
              <a key={idx} onClick={()=>{handleNavigate(item.id-1)}} className="featured-care-item">
                {item.title}
                <span className="arrow">→</span> 
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCareAreas;
