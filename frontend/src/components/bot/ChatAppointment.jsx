import React from 'react'
import '../../styles/ChatAppointment.css'
import { FaArrowLeft } from "react-icons/fa6";

function ChatAppointment() {
  return (
    <div className='cba_main'>
        <div className='cba_container1'>
            <div className='cbaleft'>
                <FaArrowLeft/>
            </div>
            <div className='cba_heading'>
            Book Appointment
            </div>
        </div>
        <div className='cba_container2'>
            
        </div>

    </div>
  )
}

export default ChatAppointment