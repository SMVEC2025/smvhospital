import React from "react";
import "../styles/TreatmentsSection.css";

const marqueeItems1 = [
  "Hyperprolactinaemia",
  "Adenomyosis",
  "Endometriosis",
  "Early Menopause (40–45 years old)",
  "Fibroids",
  "Hyperandrogenism",
  "Iron Deficiency Anaemia",
  "Hypothyroidism (subclinical/overt)"
];

const marqueeItems2 = [
  "Hypothalamic Amenorrhoea",
  "Hyperthyroidism (subclinical/overt)",
  "Polycystic Ovaries",
  "Low/diminished Egg Reserve",
  "Menopause (over 45 year old)",
  "Pelvic Inflammatory Disease",
  "Uterine Polyps",
  "PCOS",
  "Premature Ovarian Insufficiency"
];

export default function TreatmentsSection() {
  return (
    <section className="treatments-section">
      <h2 className="heading">World-class treatment, <em>without</em> the wait</h2>
      <div className="marquee-wrapper">
      <div className="marquee marquee-left">
  {[...marqueeItems1, ...marqueeItems1].map((item, index) => (
    <span className="tag" key={index}>{item}</span>
  ))}
</div>
<div className="marquee marquee-right">
  {[...marqueeItems2, ...marqueeItems2].map((item, index) => (
    <span className="tag" key={index}>{item}</span>
  ))}
</div>

      </div>
    </section>
  );
}
