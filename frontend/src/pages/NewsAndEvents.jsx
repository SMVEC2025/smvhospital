import React, { useContext, useEffect } from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Navbar from '../components/navbar/Navbar'
import MobileSideBar from '../components/navbar/MobileSideBar'
import Footer from '../components/footer/Footer'
import { AppContext } from "../context/AppContext";
import '../styles/NewsAndEvents.css'
import { useLocation } from "react-router-dom";

function NewsAndEvents() {
  const { setAnimCase,setShowSideBar } = useContext(AppContext);
  const location = useLocation();
  const Events = location.state?.event
   useEffect(() => {
    setAnimCase('allset')
    setShowSideBar(false)
   }, [])

  return (
    <>
    <ScrollToTop/>
      <div className='nae_main'>
        <div>
            News And Events
        </div>

      </div>
      <div className='nae_container'>
        <h2>{Events?.acf?.shorttitle}</h2>
        <h3>{Events?.acf?.date.split(" ").slice(0, 3).join(" ")}</h3>
        <p>{Events?.acf?.shortdescription}</p>
        <p>{Events?.acf?.description}</p>
    <img src={Events?.acf?.image} alt="" />
      </div>

      <Footer/>

    </>
  )
}

export default NewsAndEvents