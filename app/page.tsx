'use client';
import ChatWindow from '../components/ChatWindow';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}
