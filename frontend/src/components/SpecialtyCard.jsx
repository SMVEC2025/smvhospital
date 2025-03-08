import React from 'react'

function SpecialtyCard({name,image}) {
  return (
    <div className='sc_main'>
        <img src={image} alt="" />
        <div className='sc_content'>
            <div>
              <h3>{name}</h3>
              <button>See More</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialtyCard