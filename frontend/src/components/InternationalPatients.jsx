// InternationalPatients.jsx
import React, { useState, useEffect } from 'react';
import '../styles/InternationalPatients.css'; // External CSS

const InternationalPatients = () => {
    const [visiblePatients, setVisiblePatients] = useState(3);
    const [loading, setLoading] = useState(true);
    const patients = [
        {
          id: 1,
          name: "Aisha Mohammed",
          image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", // Placeholder image
          story: "Aisha traveled from Dubai for a specialized cardiac procedure. The care she received was exceptional...",
          country: "UAE"
        },
        {
          id: 2,
          name: "Kenji Tanaka",
          image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", // Placeholder image
          story: "Kenji came from Japan for advanced cancer treatment. He was impressed by the hospital's technology...",
          country: "Japan"
        },
        {
          id: 3,
          name: "Isabella Rossi",
          image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", // Placeholder image
          story: "Isabella traveled from Italy for a complex neurological surgery. She felt comfortable and well-cared for...",
          country: "Italy"
        },
        {
          id: 4,
          name: "David O'Connell",
          image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", // Placeholder image
          story: "David from Ireland sought our expertise in orthopedic surgery. The results exceeded his expectations...",
          country: "Ireland"
        },
        {
          id: 5,
          name: "Elena Garcia",
          image: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4", // Placeholder image
          story: "Elena came from Spain for fertility treatments. The staff was supportive and understanding...",
          country: "Spain"
        },
      ];



  return (
    <section className="international-patients">
      <h2 className="section-title">Our International Patients</h2>
      <div className="patient-carousel"> {/* Could be a proper carousel library */}
        {patients.slice(0, visiblePatients).map((patient) => (
          <div key={patient.id} className="patient-card"> {/* Add unique key */}
            <img src={patient.image} alt={patient.name} className="patient-image" />
            <div className="patient-details">
              <h3 className="patient-name">{patient.name}</h3>
              <p className="patient-story">{patient.story.slice(0,150)}...</p> {/* Shortened story */}
              <p className="patient-country">{patient.country}</p>
            </div>
          </div>
        ))}
      </div>
      {visiblePatients < patients.length && ( // Conditionally render button
        <button className="view-more-button" >
          View More
        </button>
      )}
    </section>
  );
};

export default InternationalPatients;