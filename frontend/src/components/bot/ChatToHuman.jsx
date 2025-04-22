// components/ChatToHuman.jsx
import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../supabaseClient';

const ChatToHuman = ({ handleplaysound }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const [tempMsg,setTempMsg]=useState('')
  const messagesEndRef = useRef(null);
  const room_id = localStorage.getItem('roomId')
const userId = room_id
  useEffect(() => {
        setTimeout(() => {
            handleplaysound() 
        }, 500);
        
    }, [messages])
  
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('room_id', room_id)
        .order('created_at', { ascending: true });
      setMessages(data);
    };
    fetchMessages();
  }, [room_id]);
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });



    useEffect(() => {
    const channel = supabase
      .channel(`realtime:user_${userId}`)
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
        filter: `room_id=eq.${room_id}`,
      }, payload => {
        setMessages(prev => [...prev, payload.new]);
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [room_id]);

  const sendMessage = async () => {

  if (!newMsg.trim()) return;
  setTempMsg('')
  // 1. Insert the message first
  const { error: insertError } = await supabase.from('messages').insert([
    {
      content: newMsg,
      sender_type: 'user',
      room_id,
      created_at: new Date().toISOString(), // optional, but explicit
    },
  ]);

  if (insertError) {
    console.error('Message insert failed:', insertError);
    return;
  }

  // 2. Get current unseen count from room table
  const { data: roomData, error: fetchError } = await supabase
    .from('room')
    .select('unseen_count')
    .eq('room_id', room_id)
    .single();

  if (fetchError) {
    console.error('Room fetch failed:', fetchError);
    return;
  }
 
  const newCount = parseInt(roomData?.unseen_count) == 1000? 2 : parseInt(roomData?.unseen_count || '0', 10) + 1;

  // 3. Update the room table
  const { error: updateError } = await supabase
    .from('room')
    .update({
      last_msg: newMsg,
      last_msg_at: new Date().toISOString(),
      unseen_count: newCount,
    })
    .eq('room_id', room_id);

  if (updateError) {
    console.error('Room update failed:', updateError);
  }

  setNewMsg('');
};

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
<div className="chatbot-container">
            <div className="chatbot-messages" style={{paddingTop:"60px",height:"calc(100% - 110px)",position:'relative'}}>
                {messages.map((message, index) => (
                      <>
                      
                          <div key={index} className={`message ${message.sender_type == 'user' ? 'user' : 'bot'}`} style={{whiteSpace:"pre-line"}}>
                        {message.content}
                           
                    </div>
                    <>
                    </>
                      </>  
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className='cba_clientabovecontent'>
              <p>You were Now Connected to SMV</p>
              <div>{time}</div>

            </div>

            <div className="chatbot-input">
            <input placeholder='Type a message' value={tempMsg} onChange={e => {setNewMsg(e.target.value);setTempMsg(e.target.value)}}  onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }} />
               <button onClick={sendMessage}>Send</button>
            </div>
        </div>
  );
};

export default ChatToHuman;
