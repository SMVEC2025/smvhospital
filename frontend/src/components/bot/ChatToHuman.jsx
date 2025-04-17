// components/ChatToHuman.jsx
import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../supabaseClient';

const ChatToHuman = ({ handleplaysound }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const messagesEndRef = useRef(null);
  const userId = localStorage.getItem('roomId')

  const room_id = userId; // Each user has their own room_id
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
    await supabase.from('messages').insert({
      content: newMsg,
      sender_type: 'user',
      room_id,
    });
    setNewMsg('');
  };
 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  console.log(messages)
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
            <input value={newMsg} onChange={e => setNewMsg(e.target.value)} />
               <button onClick={sendMessage}>Send</button>
            </div>
        </div>
  );
};

export default ChatToHuman;
