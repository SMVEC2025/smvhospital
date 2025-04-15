// components/ChatToHuman.jsx
import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../../supabaseClient';

const ChatToHuman = ({ userId }) => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');
  const messagesEndRef = useRef(null);
  const room_id = userId; // Each user has their own room_id

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

  return (
    <div>
      <h3>User Chat</h3>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender}</strong>: {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef}></div>
      </div>
      <input value={newMsg} onChange={e => setNewMsg(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatToHuman;
