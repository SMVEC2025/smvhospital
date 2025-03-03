import React from 'react'
import '../styles/HomeHeadings.css'
function HomeHeadings({title,action}) {
  return (
    <div className='homeheadings_main'>
        <h1>{title}</h1>
        <button>View All</button>
        
    </div>
  )
}

export default HomeHeadings