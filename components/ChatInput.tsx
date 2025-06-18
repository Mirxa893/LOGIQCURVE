'use client';
import { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (msg: any) => void }) {
  const [input, setInput] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    onSend(userMsg);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ messages: [userMsg] }),
    });

    const data = await res.json();
    onSend({ role: 'assistant', content: data.output?.data || 'No response' });
  };

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const formData = new FormData();
      formData.append('file', file);
      await fetch('/api/upload', { method: 'POST', body: formData });
    }
  };

  return (
    <div className="p-4 border-t border-gray-300 flex items-center space-x-2">
      <input
        type="file"
        onChange={handleFile}
        className="text-sm text-gray-500 file:mr-4 file:py-1 file:px-2"
      />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message"
        className="flex-1 p-2 border rounded"
      />
      <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
}
