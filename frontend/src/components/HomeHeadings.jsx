import React from 'react'
import '../styles/HomeHeadings.css'
import { useNavigate } from 'react-router-dom'
function HomeHeadings({title,event}) {
  const navigate = useNavigate()
  return (
    <div className='homeheadings_main'>
        <h1>{title}</h1>
        <button style={{cursor:"pointer"}} onClick={()=>{navigate(event)}}>View All</button>
        
    </div>
  )
}

export default HomeHeadings