import React from 'react'
import { useNavigate } from 'react-router-dom'

function SpecialtyCard({name,image,index}) {
  const navigate = useNavigate()

  const handleNavigate = (newIndex) => {
    navigate(`/our-services`, { state: { newIndex } });
  };

  return (
    <div className='sc_main'>
        <img src={image} alt="" />
        <div className='sc_content'>
            <div>
              <h3>{name}</h3>
              <button onClick={()=>{handleNavigate(index)}}>See More</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialtyCard