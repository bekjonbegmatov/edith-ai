import React, { useState } from 'react';
import './navbar.css'
function Navbar() {
    const [messages, setMessages] = useState(['hello']);

    const handleNewMessage = (message) => {
        setMessages([...messages, message]);
    }
    return (

        <div className="chat-window">
            {messages.map((message, index) => (
                <div key={index} className="message-container">
                    <div className="message">{message}</div>
                </div>
            ))}
        </div>

    );
}

export default Navbar;