import React from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn,FaFacebookF  } from "react-icons/fa";

function DoctorsCard() {
  return (
    <div className='dcmain'>
        <div className='dc_container1'>
            <h2>Dr.Vinoth Kumar</h2>
            <p>General Practitioner</p>
        </div>
        <div className='dc_container2'>
            <div>
                <FaWhatsapp/>
            </div>
            <div>
                <FaLinkedinIn/>
            </div>
            <div>
                <FaFacebookF/>
            </div>
        </div>


    </div>
  )
}

export default DoctorsCard