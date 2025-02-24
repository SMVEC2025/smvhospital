import React, { useEffect, useRef, useState } from 'react'
import '../styles/TitleAnimation.css/'

function TitleAnimation() {
    const [shows,setShows] = useState('s')
    return (
        <div className='ta_main'>
            <div className='ta_s1'>
                S<span className='box'>m</span><span className='box'>m</span>
            </div>
            <div className='ta_s2'>S
                <span className='box' >u</span>
                <span className='box' >p</span>
                <span className='box' >e</span>
                <span className='box' >r</span>
            </div>
            <div className='ta_s3'>S
                <span className='box'>s</span>
                <span className='box'>p</span>
                <span className='box'>e</span>
                <span className='box'>c</span>
                <span className='box'>i</span>
                <span className='box'>a</span>
                <span className='box'>l</span>
                <span className='box'>t</span>
                <span className='box'>y</span>
            </div>
        </div>
      );
    };
    
 

export default TitleAnimation