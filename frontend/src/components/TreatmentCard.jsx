import React from 'react'
import '../styles/TreatmentCard.css'
function TreatmentCard({imgurl,num,name}) {
  return (
   <div className='tc_main' style={{backgroundImage:`url(${imgurl})`}}>
<div className='tc_num'>
 {num}
</div>
   <div className='tc_content'>
   <div className='tc_title'>
    {name}
  </div>
  <div className='tc_desc'>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
  </div>
  <button className='tc_button'>View More</button>
   </div>
   </div>
  )
}

export default TreatmentCard