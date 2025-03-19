import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Doctors.css";
import Hero6 from "../components/Hero6";
import { AppContext } from "../context/AppContext";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import axios from "axios";
import MobileSideBar from "../components/navbar/MobileSideBar";
import ScrollToTop from "../components/ScrollToTop";

const heroData = {
  bgImg: 'images/hero-bg9.jpg',
  bgShape: 'shape/hero-shape.png',
  page: "Our Doctors",
  sliderImages: [
    { img: 'images/hero-img.png' },
    { img: 'images/hero-img1.png' },
    { img: 'images/hero-img2.png' },
    { img: 'images/hero-img.png' },
    { img: 'images/hero-img1.png' },
    { img: 'images/hero-img2.png' },
  ],
  title: ['Crutches', 'Laboratory', 'Cardiology', 'Dentist', 'Neurology'],
};

const Doctors = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const { setRefreshAnim,doctorsList,setAnimCase,setShowSideBar } = useContext(AppContext);
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [specialties, setSpecialties] = useState([]);
  console.log("doctorsList",doctorsList)

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
      const response =  await axios.get('https://cms.smvhospital.com/wp-json/wp/v2/doctors?_fields=acf');
      setDoctors(response.data)
      } catch (error) {
       
      }
    }
    fetchDoctorsData()
   }, [])
   useEffect(() => {
    setAnimCase('allset')
    setShowSideBar(false)
   }, [])
   
   
  // Fetch specialties dynamically
  useEffect(() => {
    axios
      .get("https://cms.smvhospital.com/wp-json/wp/v2/specialties?_fields=acf") // Adjust your endpoint if needed
      .then((response) => {
        const specialtyNames = response.data.map((item) => item.acf.name).slice(0, 3);
        setSpecialties(specialtyNames);
      })
      .catch((error) => {
        console.error("Error fetching specialties:", error);
      });
  }, []);
  

  // Filter doctors based on selected specialty and search term
  const filteredDoctors = doctors.filter((doctor) => {
    const name = doctor.acf?.name?.toLowerCase() || "";
    const specialty = doctor.acf?.specialty.toLowerCase() || "unknown";

    return (
      (filter === "All" || specialty === filter.toLowerCase()) &&
      name.includes(search.toLowerCase())
    );
  });

  const handleDoctorClick = (doctor) => {
    navigate(`/doctor/${doctor.id}`, { state: { doctor } });
  };


  return (
    <>
     <ScrollToTop/>
      <Navbar />
      <MobileSideBar/>
      <Hero6 data={heroData} />

      <div className="doctor-container">
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search doctors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="filter-buttons">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            {specialties.map((specialty) => (
              <button
                key={specialty}
                className={filter === specialty ? "active" : ""}
                onClick={() => setFilter(specialty)}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>


        <div className="doctor-list">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card" onClick={() => handleDoctorClick(doctor)}>
              <div className="card">
                <div
                  className="profile-pic"
                  style={{
                    backgroundImage: `url(${doctor.acf.image})`,
                  }}
                ></div>
                <div className="bottom">
                  <div className="content">
                    <span className="name">{doctor.acf.name}</span>
                    <span className="about-me">
                      {doctor.acf.specialty}
                    </span>
                  </div>
                  <div className="bottom-bottom">
                  <div class="social-links-container">
        <svg
          viewBox="0 0 16 15.999"
          height="15.999"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(6 598)"
            d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z"
            data-name="Subtraction 4"
            id="Subtraction_4"
          ></path>
        </svg>
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
          ></path>
        </svg>

        <svg viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </div>
                    <button className="button">View</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* /////////////////////////////////////////////////// */}
      <Footer />
    </>
  );
};

export default Doctors;
