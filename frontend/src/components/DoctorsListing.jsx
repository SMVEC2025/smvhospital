import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/DoctorsListing.css';

const doctors = [
  {
    name: 'Dr. Elizabeth Foster',
    specialty: 'Family Physician',
    description: 'Compassionate care for all ages.',
    image: 'https://picsum.photos/536/354',
  },
  {
    name: 'Dr. David Lee',
    specialty: 'Skillful hands, transforming lives.',
    description: 'Expert in surgical procedures.',
    image: 'https://picsum.photos/536/354',
  },
  {
    name: 'Dr. Ava White',
    specialty: 'Mental wellness and guiding.',
    description: 'Specializes in mental health.',
    image: 'https://picsum.photos/536/354',
  },
  {
    name: 'Dr. Daniel Brown',
    specialty: 'Focuses on skin, hair disorders.',
    description: 'Dermatology expert.',
    image: 'https://picsum.photos/536/354',
  },
];

const DoctorsListing = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="doctors-container">
    <h2 className="doctors-heading">Meet Our Doctors.</h2>
    <Slider {...settings}>
      {doctors.map((doctor, index) => (
        <div key={index} className="doctor-card">
          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          <h3 className="doctor-name">{doctor.name}</h3>
          <p className="doctor-specialty">{doctor.specialty}</p>
          <p className="doctor-description">{doctor.description}</p>
        </div>
      ))}
    </Slider>
  </div>

  );
};

export default DoctorsListing;