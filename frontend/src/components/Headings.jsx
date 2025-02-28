import React from 'react'
import '../styles/Headings.css'
import SMV_icon from '../assets/images/SMV_icon.png';
function Headings({ data }) {
  return (
    <div className='headings_main'>
        <h3>{data[0].title}</h3>
        <div className='headings_div'>
            <div></div>
            <img src={SMV_icon} alt="" />
            <div></div>
        </div>
        <p>{data[0].subTitle}</p>
    </div>
  )
}

export default Headings