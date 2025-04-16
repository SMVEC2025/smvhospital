import React, { useState } from 'react'
import '../../styles/ChatAppointment.css'
import { FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';
import Waiting from './Waiting';
import { toast } from 'react-toastify';
function ConnectToAgent({setShowWrapContent}) {
     const [roomid,setRoomid]=useState()
     const [loading,setLoading]=useState(false)
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        otp:''
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const[inProcess,setInProcess]=useState('process1')
      console.log(formData)
      const sendEmailForOtp = async () => {
        setLoading(true)
        try {
            const response = await axios.post('http://localhost:3000/api/send-otp', formData);
            
            // If the API returns a success message, run the success function
            if (response.data && !response.data.error) {
              setInProcess('process2')
              setLoading(false)
             
            }
        
            return response.data;
        
          } catch (error) {
            console.error('Error verifying OTP:', error?.response?.data || error.message);
            setLoading(false)
            toast.error(error?.response?.data?.message)


            return {
              error: error?.response?.data?.error || 'Something went wrong',
            };
          }
      };
       const verifyOtp = async () => {
        setLoading(true)

        try {
            const response = await axios.post('http://localhost:3000/api/verify-otp', formData);
            
            // If the API returns a success message, run the success function
            if (response.data && !response.data.error) {
             console.log(response.data)
             setRoomid(response.data.roomId)
             setInProcess('process3')
             setLoading(false)

            }
        
            return response.data;
        
          } catch (error) {
            console.error('Error verifying OTP:', error?.response?.data || error.message);
            setLoading(false)
            toast.error(error?.response?.data?.message)

            return {
              error: error?.response?.data?.error || 'Something went wrong',
            };
          }
      };

      
  return (
         <>
         {inProcess == 'process1' && (
            
        <div className='cba_main'>
        <h2>Enter Details</h2>

        <div className="cba_form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

         {!loading?(
            <button className='cba_button' onClick={()=>{sendEmailForOtp(formData.email)}}>
            Send OTP
          </button>
         ):(
            <button className='cba_button' >
          loading...
        </button>
         )}
      </div>
         )}
          {inProcess == 'process2' && (
            
            <div className='cba_main'>
            
            <h2>Enter OTP</h2>
    
            <div className="cba_form-group">
              <input
                type="text"
                name="otp"
                placeholder="Enter otp"
                value={formData.otp}
                onChange={handleChange}
              />
    

            </div>
    
            <button className='cba_button' onClick={verifyOtp}>
              Verify OTP
            </button>
          </div>
             )}
             {inProcess == 'process3' && (
            
            <div className='cba_main'>
         <Waiting roomId={roomid}/>
          </div>
             )}
         </>
    

  )
}

export default ConnectToAgent