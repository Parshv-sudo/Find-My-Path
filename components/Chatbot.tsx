
import React, { useState, useRef, useEffect } from 'react';
import { streamChatResponse } from '../services/geminiService';
import { Message } from '../types';
import { ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon, XIcon, LightBulbIcon } from './icons';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi! I'm Pathy, your AI career guide. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === '' || isStreaming) return;

    const userMessage: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsStreaming(true);

    const botMessageId = Date.now() + 1;
    setMessages(prev => [...prev, { id: botMessageId, text: '', sender: 'bot', loading: true }]);
    
    let fullResponse = '';
    await streamChatResponse(input, (chunk) => {
        fullResponse += chunk;
        setMessages(prev => prev.map(msg => 
            msg.id === botMessageId ? { ...msg, text: fullResponse, loading: false } : msg
        ));
    });
    
    setIsStreaming(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-violet-600 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-transform transform hover:scale-110 z-50"
      >
        {isOpen ? <XIcon className="h-7 w-7" /> : <ChatBubbleOvalLeftEllipsisIcon className="h-7 w-7" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200">
          <header className="p-4 border-b bg-slate-50 rounded-t-2xl">
            <h3 className="font-bold text-lg text-slate-800 font-poppins">Ask Pathy!</h3>
            <p className="text-xs text-slate-500 flex items-center gap-1">
                <LightBulbIcon className="h-3 w-3" /> Powered by Gemini
            </p>
          </header>
          <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.sender === 'user' ? 'bg-violet-600 text-white' : 'bg-slate-100 text-slate-800'}`}>
                   {msg.loading ? 
                    <div className="flex items-center space-x-1">
                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-1.5 w-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    </div> 
                    : <div className="prose prose-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} /> }
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t bg-slate-50 rounded-b-2xl">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about careers or skills..."
                className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:ring-violet-500 focus:border-violet-500"
                disabled={isStreaming}
              />
              <button onClick={handleSend} disabled={isStreaming} className="p-3 bg-violet-600 text-white rounded-full disabled:bg-slate-400">
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
