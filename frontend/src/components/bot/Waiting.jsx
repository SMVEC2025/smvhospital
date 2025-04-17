import { useContext, useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import { AppContext } from '../../context/AppContext';
import '../../styles/Waiting.css'
const Waiting = ({ roomId }) => {
  const [status, setStatus] = useState('pending');
  const [error, setError] = useState('');
  const [timeLeft, setTimeLeft] = useState(300); 
  const [Timerr, setTimerr] = useState(4 * 60 + 49); 
  const {setShowWrapContent} = useContext(AppContext)
  // useEffect(() => {
  //   if (!roomId) return;

  //   const checkRoomStatus = async () => {
  //     const { data, error } = await supabase
  //       .from('room')
  //       .select('status')
  //       .eq('room_id', roomId)
  //       .single();

  //     if (error || !data) {
  //       setError('Room not found or something went wrong.');
  //       return;
  //     }

      
  //     if (data.status == 'accept') {
  //       setStatus(data.status);
  //       localStorage.setItem('roomId',roomId)
  //       setShowWrapContent('livechat')
  //       clearInterval(intervalId);
  //       clearTimeout(timeoutId);

        
  //     }
  //     if (data.status == 'decline') {
  //       setError('SMV server May busy now, Please try again later.');
  //       setStatus(data.status);
  //       clearInterval(intervalId);
  //       clearTimeout(timeoutId);
  //       setTimeout(() => {
  //       setShowWrapContent('interface')
            
  //       }, 2000);
  //     }
  //   };

  //   const intervalId = setInterval(() => {
  //     checkRoomStatus();
  //     setTimeLeft((prev) => prev - 5);
  //   }, 5000); // Every 5 seconds

  //   const timeoutId = setTimeout(() => {
  //     clearInterval(intervalId);
  //     setError('Please try again later.');
  //   }, 300000); // Stop after 5 minutes

  //   return () => {
  //     clearInterval(intervalId);
  //     clearTimeout(timeoutId);
  //   };
  // }, [roomId]);
  useEffect(() => {
    const sendInitialMessage = async () => {
  
      const { error } = await supabase.from("messages").insert({
        room_id: roomId,
        content: "Hello! How can i help you today",
        sender_type: "agent", // even though it's the user side, you're asking to send agent type
      });
  
      if (error) {
        console.error("Failed to send message:", error.message);
      } else {
      
    setShowWrapContent('livechat')
      }
    };
    localStorage.setItem('roomId',roomId)
    setShowWrapContent('livechat')
    // sendInitialMessage();
  }, []);
  useEffect(() => {
    if (Timerr <= 0) return;

    const timer = setInterval(() => {
      setTimerr(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [Timerr]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };




  return (
    <div style={{ padding: '20px' }}>
    <div>Please wait while we connecting to SMV</div>
      <div class="cba_loader"></div>
      <div className='cba_timer'>
      {formatTime(Timerr)} min left
      </div>
      {error && <p style={{ color: 'red',textAlign:"center" }}>{error}</p>}
    </div>
  );
};

export default Waiting;