import React from 'react';
import '../styles/MobileHero6.css'
function MobileHero6({data}) {

   
  return (
    <div className='mh6_main' style={{backgroundImage:`url('${data.bgImg}')`}}>
       <div>
       <h2>{data.page}</h2>
       </div>

    </div>
  )
}

export default MobileHero6