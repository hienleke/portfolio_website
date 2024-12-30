import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css'
const Chat = () => {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const sendMessage = async () => {
        const botToken = 'YOUR_BOT_TOKEN';
        const chatId = 'YOUR_CHAT_ID';
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        try {
            const res = await axios.post(url, {
                chat_id: chatId,
                text: message,
            });
            setResponse('Message sent successfully!');
        } catch (error) {
            setResponse('Failed to send message.');
        }
    };
    return (
        <div style={{ display :'relative', position: 'fix', right : '1rem'  , bot : '2rem'  , padding: '20px', maxWidth: '400px', margin: '0 auto', textAlign: 'center', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>Chat with Telegram</h2>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button 
                onClick={sendMessage} 
                style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer' }}
            >
                Send
            </button>
            <p style={{ marginTop: '10px', color: response.includes('successfully') ? 'green' : 'red' }}>{response}</p>
        </div>
    );
};

export default Chat;