import React, { useContext } from 'react'
import '../styles/Hero.css'
import IntroAnimation from './IntroAnimation'
import ShapeAnimation from './ShapeAnimation'
import { AppContext } from '../context/AppContext'
function Hero() {
    const {introOne} =useContext(AppContext)

  return (
    <div className='hero_main'>
       {introOne?(
        <IntroAnimation/>
       ):<ShapeAnimation/>}

    </div>
  )
}

export default Hero