import React from 'react';

const ChatHeader = () => {
  return (
    <div>
      <h2>Louys Beer's & Cheers Chat</h2>
      <p>Welcome, {userName}</p>
    </div>
  );
};

export default ChatHeader;

import React, { useState } from 'react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // TO DO: Implement sending message logic
    console.log(`Sending message: ${message}`);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;

import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;

import React from 'react';
import ChatMessage from './ChatMessage';

const ChatMessageList = ({ messages }) => {
  return (
    <div>
      {messages.map((message, index) => (
        <ChatMessage key={index} message={message} />
      ))}
    </div>
  );
};

export default ChatMessageList;

import React from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessageList from './ChatMessageList';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');

  // TO DO: Implement user authentication and message sending logic

  return (
    <div>
      <ChatHeader userName={userName} />
      <ChatMessageList messages={messages} />
      <ChatInput />
    </div>
  );
};

export default App;