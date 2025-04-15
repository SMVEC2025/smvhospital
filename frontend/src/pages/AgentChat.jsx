// components/AgentChat.jsx
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const AgentChat = () => {
  const [userRooms, setUserRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [replyMsg, setReplyMsg] = useState('');

  // Fetch distinct rooms (user-wise)
  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await supabase
        .from('messages')
        .select('room_id')
        .neq('sender_type', 'agent')
        .order('created_at', { ascending: false });
      const uniqueRooms = [...new Set(data.map((d) => d.room_id))];
      setUserRooms(uniqueRooms);
    };
    fetchRooms();
  }, []);

  // Subscribe to new chats for all users
  useEffect(() => {
    const channel = supabase
      .channel('agent-room-listener')
      .on('postgres_changes', {
        event: 'INSERT',
        schema: 'public',
        table: 'messages',
      }, (payload) => {
        const room = payload.new.room_id;
        setUserRooms((prev) => (prev.includes(room) ? prev : [...prev, room]));

        // If viewing this room, update messages live
        if (room === selectedRoom) {
          setMessages((prev) => [...prev, payload.new]);
        }
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [selectedRoom]);

  const loadMessages = async (roomId) => {
    setSelectedRoom(roomId);
    const { data } = await supabase
      .from('messages')
      .select('*')
      .eq('room_id', roomId)
      .order('created_at', { ascending: true });
    setMessages(data);
  };

  const sendReply = async () => {
    if (!replyMsg.trim()) return;
    await supabase.from('messages').insert({
      content: replyMsg,
      sender_type: 'agent',
      room_id: selectedRoom,
    });
    setReplyMsg('');
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div style={{ width: '30%' }}>
        <h4>All Users</h4>
        <ul>
          {userRooms.map((room) => (
            <li key={room}>
              <button onClick={() => loadMessages(room)}>{room}</button>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ width: '70%' }}>
        {selectedRoom ? (
          <>
            <h4>Chat with: {selectedRoom}</h4>
            <div style={{ border: '1px solid #ccc', height: '300px', overflowY: 'scroll', padding: '10px' }}>
              {messages.map((msg, i) => (
                <div key={i} style={{ textAlign: msg.sender === 'agent' ? 'right' : 'left' }}>
                  <strong>{msg.sender}</strong>: {msg.content}
                </div>
              ))}
            </div>
            <input value={replyMsg} onChange={(e) => setReplyMsg(e.target.value)} />
            <button onClick={sendReply}>Send</button>
          </>
        ) : (
          <p>Select a user to start chat</p>
        )}
      </div>
    </div>
  );
};

export default AgentChat;
