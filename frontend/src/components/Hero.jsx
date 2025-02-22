import React, { useContext,useEffect } from 'react'
import '../styles/Hero.css'
import IntroAnimation from './IntroAnimation'
import ShapeAnimation from './ShapeAnimation'
import { AppContext } from '../context/AppContext'
function Hero() {
    const {introAnim,setIntroAnim} =useContext(AppContext)
    useEffect(() => {
      
    }, [])
    

  return (
    <div className='hero_main'>
        {introAnim == 'one' && (<IntroAnimation/>)}
        {introAnim == 'two' && (<ShapeAnimation/>)}
       

    </div>
  )
}

export default Hero