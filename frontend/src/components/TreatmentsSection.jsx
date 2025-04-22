import React from "react";
import "../styles/TreatmentsSection.css";

const marqueeItems1 = [
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
];
const medicalServices = [

 
]

const marqueeItems2 = [
  { id: 11, title: "Obstetrics & Gynaecology" },
  { id: 12, title: "Paediatrics & Neonatology" },
  { id: 13, title: "Gastroenterology " },
  { id: 14, title: "Pulmonology & Sleep Medicine" },
  { id: 15, title: "Oncology" },
  { id: 16, title: "Rheumatology" },
  { id: 17, title: "Endocrinology" },
  { id: 18, title: "Radio Frequency Ablation (RFA)" },
  { id: 19, title: "ENT" }
];

export default function TreatmentsSection() {
  return (
    <section className="treatments-section">
      <h2 className="heading">World-class treatment, <em>without</em> the wait</h2>
      <div className="marquee-wrapper">
      <div className="marquee marquee-left">
  {[...marqueeItems1, ...marqueeItems1].map((item, index) => (
    <span className="tag" key={index}>{item.title}</span>
  ))}
</div>
<div className="marquee marquee-right">
  {[...marqueeItems2, ...marqueeItems2].map((item, index) => (
    <span className="tag" key={index}>{item.title}</span>
  ))}
</div>

      </div>
    </section>
  );
}
