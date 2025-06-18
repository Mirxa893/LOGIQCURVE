'use client';
import { useState } from 'react';

export default function Sidebar() {
  const [search, setSearch] = useState('');

  return (
    <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4 overflow-y-auto">
      <input
        type="text"
        placeholder="Search chat..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 rounded bg-white dark:bg-gray-700"
      />
      <button className="mb-4 w-full bg-blue-600 text-white p-2 rounded">New Chat</button>
      {/* Chat history items can be mapped here */}
    </div>
  );
}
