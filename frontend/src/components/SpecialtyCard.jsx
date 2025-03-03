import React from 'react'

function SpecialtyCard({name,image}) {
  return (
    <div className='sc_main'>
        <img src={image} alt="" />
        <div className='sc_content'>
            <h3>{name}</h3>
        </div>
    </div>
  )
}

export default SpecialtyCard