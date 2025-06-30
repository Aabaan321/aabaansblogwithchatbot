import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! My Name is Aabaan. How can I assist you?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessages = [
      ...messages,
      { text: inputValue, isBot: false },
      { text: "Thanks for your message! This is a demo chatbot. For real inquiries, please contact me through the social links.", isBot: true }
    ];

    setMessages(newMessages);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-5 bottom-5 w-15 h-15 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 z-40"
      >
        {/* Custom icon without the problematic path */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 h-96 bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
          <div className="bg-red-500 p-4 flex justify-between items-center">
            <h3 className="font-semibold flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              AI Assistant
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:rotate-90 transition-transform"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gray-700 text-white self-start rounded-bl-sm'
                    : 'bg-red-500 text-white self-end ml-auto rounded-br-sm'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 p-3 bg-gray-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              onClick={sendMessage}
              className="w-11 h-11 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;