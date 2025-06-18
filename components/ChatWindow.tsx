'use client';
import { useState } from 'react';
import ChatInput from './ChatInput';

export default function ChatWindow() {
  const [messages, setMessages] = useState<any[]>([]);

  const addMessage = (msg: any) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={msg.role === 'user' ? 'text-right' : 'text-left'}>
            <div className="inline-block px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">{msg.content}</div>
          </div>
        ))}
      </div>
      <ChatInput onSend={addMessage} />
    </div>
  );
}
