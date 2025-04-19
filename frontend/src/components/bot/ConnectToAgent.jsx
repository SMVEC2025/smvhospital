// import React, { useState } from 'react'
// import '../../styles/ChatAppointment.css'
// import { FaArrowLeft } from "react-icons/fa6";
// import axios from 'axios';
// import Waiting from './Waiting';
// import { toast } from 'react-toastify';
// function ConnectToAgent({setShowWrapContent}) {
//      const [roomid,setRoomid]=useState()
//      const [loading,setLoading]=useState(false)
//       const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         otp:''
//       });
//       const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//       };
//       const[inProcess,setInProcess]=useState('process1')
//       console.log(formData)


//       const sendEmailForOtp = async () => {
//         setLoading(true)
//         try {
//             const response = await axios.post('https://smvserver.vercel.app/api/send-otp', formData);

//             // If the API returns a success message, run the success function
//             if (response.data && !response.data.error) {
//               setInProcess('process2')
//               setLoading(false)

//             }

//             return response.data;

//           } catch (error) {
//             console.error('Error verifying OTP:', error?.response?.data || error.message);
//             setLoading(false)
//             toast.error(error?.response?.data?.message)


//             return {
//               error: error?.response?.data?.error || 'Something went wrong',
//             };
//           }
//       };



//        const verifyOtp = async () => {
//         setLoading(true)
//         if(formData.name.trim())
//         try {
//             const response = await axios.post('https://smvserver.vercel.app/api/verify-otp', formData);

//             // If the API returns a success message, run the success function
//             if (response.data && !response.data.error) {
//              console.log(response.data)
//              setRoomid(response.data.roomId)
//              setInProcess('process3')
//              setLoading(false)

//             }

//             return response.data;

//           } catch (error) {
//             console.error('Error verifying OTP:', error?.response?.data || error.message);
//             setLoading(false)
//             toast.error(error?.response?.data?.message)

//             return {
//               error: error?.response?.data?.error || 'Something went wrong',
//             };
//           }
//       };

//         function handleSubmitEmail() {
//           if (formData.name.trim() == '') {
//             toast.error('Enter FirstName')
//             return
//           }
//           if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             toast.error('Enter a Valid Email')
//             return
//           }
//           else {
//             sendEmailForOtp()
//           }
//         }
//         function handleSubmitOtp() {
//           if (formData.otp.trim() == '') {
//             toast.error('Enter a valid otp')
//             return
//           }

//           else {
//             verifyOtp()
//           }
//         }
//   return (
//          <>
//          {inProcess == 'process1' && (

//         <div className='cba_main'>
//         <h2>Enter Details</h2>

//         <div className="cba_form-group">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter name"
//             value={formData.name}
//             onChange={handleChange}
//           />


//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </div>

//          {!loading?(
//             <button className='cba_button' onClick={handleSubmitEmail}>
//             Send OTP
//           </button>
//          ):(
//             <button className='cba_button' >
//           loading...
//         </button>
//          )}
//       </div>
//          )}
//           {inProcess == 'process2' && (

//             <div className='cba_main'>

//             <h2>Enter OTP</h2>

//             <div className="cba_form-group">
//               <input
//                 type="text"
//                 name="otp"
//                 placeholder="Enter otp"
//                 value={formData.otp}
//                 onChange={handleChange}
//               />


//             </div>

//             {!loading?(
//               <button className='cba_button' onClick={handleSubmitOtp}>
//               Verify OTP
//             </button>
//             ):(
//               <button className='cba_button'>
//               Loading..
//             </button>
//             )}
//           </div>
//              )}
//              {inProcess == 'process3' && (

//             <div className='cba_main'>
//          <Waiting roomId={roomid}/>
//           </div>
//              )}
//          </>


//   )
// }

// export default ConnectToAgent




























import React, { useState } from 'react'
import '../../styles/ChatAppointment.css'
import { FaArrowLeft } from "react-icons/fa6";
import axios from 'axios';
import Waiting from './Waiting';
import { toast } from 'react-toastify';
import { supabase } from '../../supabaseClient';
function ConnectToAgent({ setShowWrapContent }) {
  const [roomid, setRoomid] = useState()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const generateRoomId = () => crypto.randomUUID();

  const [formData, setFormData] = useState({
    name: '',
    email: '',  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [inProcess, setInProcess] = useState('process1')
  console.log(formData)

// Create or join room based on email
const handleStartChat = async () => {
  try {
    setLoading(true)
  const { data: existingRoom } = await supabase
    .from('room')
    .select('*')
    .eq('email', formData.email)
    .single();

  let room;

  if (existingRoom) {
    room = existingRoom;
     // Auto message from agent (use returned room_id just to be 100% safe)
     const { error: messageError } = await supabase.from('messages').insert([
      {
        room_id: room.room_id,
        content: 'How can I help you today?',
        sender_type: 'agent',
        created_at: new Date().toISOString(),
      },
    ]);

    if (messageError) {
      console.error('Agent message failed:', messageError);
      toast.error('Network error')

    } else {
      setInProcess('process3')
      setLoading(false)
    }
  console.log("existigroom",existingRoom)


  } else {
    const newRoomId = generateRoomId(); // browser-safe UUID
    const { data: newRoom, error } = await supabase
      .from('room')
      .insert([
        {
          room_id: newRoomId,
          name: formData.name,
          email: formData.email,
          last_msg: 'How can I help you today?',
          last_msg_at: new Date().toISOString(),
          unseen_count: 1000,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Room creation failed:', error);
      toast.error('Network error')

      return;
    }

    room = newRoom;

    // Auto message from agent (use returned room_id just to be 100% safe)
    const { error: messageError } = await supabase.from('messages').insert([
      {
        room_id: room.room_id,
        content: 'How can I help you today?',
        sender_type: 'agent',
        created_at: new Date().toISOString(),
      },
    ]);

    if (messageError) {
      console.error('Agent message failed:', messageError);
      toast.error('Network error')
      setLoading(false)

    } else {
      setInProcess('process3')
      setLoading(false)

    }
  }

  setRoomid(room.room_id);
  fetchMessages(room.room_id);
  } catch (error) {
    toast.error('network error')
  }
};
const fetchMessages = async (roomId) => {
  const { data } = await supabase
    .from('messages')
    .select('*')
    .eq('room_id', roomId)
    .order('created_at', { ascending: true });

  setMessages(data || []);
};

  // const sendEmailForOtp = async () => {
  //   setLoading(true)
  //   try {
  //     const response = await axios.post('https://smvserver.vercel.app/api/create-room', formData);

  //     // If the API returns a success message, run the success function
  //     if (response.data && !response.data.error) {
  //       setInProcess('process3')
  //       console.log(response.data.roomId)
  //       setRoomid(response.data.roomId)
  //       setLoading(false)

  //     }

  //     return response.data;

  //   } catch (error) {
  //     console.error('Error verifying OTP:', error?.response?.data || error.message);
  //     setLoading(false)
  //     toast.error(error?.response?.data?.message)


  //     return {
  //       error: error?.response?.data?.error || 'Something went wrong',
  //     };
  //   }
  // };

  function handleSubmitEmail() {
    if (formData.name.trim() == '') {
      toast.error('Enter FirstName')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Enter a Valid Email')
      return
    }
    else {
      handleStartChat()
    }
  }

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

          {!loading ? (
            <button className='cba_button' onClick={handleSubmitEmail}>
              Submit
            </button>
          ) : (
            <button className='cba_button' >
              loading...
            </button>
          )}
        </div>
      )}

      {inProcess == 'process3' && (

        <div className='cba_main'>
          <Waiting roomId={roomid} />
        </div>
      )}
    </>


  )
}

export default ConnectToAgent



// http://localhost:3000/api/create-room