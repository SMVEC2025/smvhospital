import React from 'react'
import '../styles/TreatmentCard.css'
function TreatmentCard({data}) {
  return (
   <div className='tc_main' style={{backgroundImage:`url(${data?.image})`}}>
<div className='tc_num'>
 {data?.id}
</div>
   <div className='tc_content'>
   <div className='tc_title'>
    {data?.name}
  </div>
  <div className='tc_desc'>
    {data?.desc}
  </div>
  {/* <button className='tc_button'>View More</button> */}
   </div>
   </div>
  )
}

export default TreatmentCard