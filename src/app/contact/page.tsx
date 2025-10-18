"use client";

import DashboardLayout from "@/components/dashboard/Dashboard";
import CompareHooks from "@/components/serverComponent";
import UserList from "@/components/serverComponent";
import { pusherClient } from "@/lib/pusher/pusherClient";
import { useEffect, useState } from "react";

export default function Contact() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const channel = pusherClient.subscribe("test-channel");

    channel.bind("test-event", (data: any) => {
      setMessages((prev) => [...prev, data.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const handleClick = async () => {
    await fetch("/api/pusher", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Hello at ${new Date().toLocaleTimeString()}`,
      }),
    });
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Contact me Page</h1>
      <p>This is the contact me page of the application.</p>
      <UserList />
      <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <h1 className="text-2xl font-bold">🔔 Pusher Realtime Test</h1>

      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Send Test Event
      </button>

      <ul className="mt-4 space-y-2">
        {messages.map((msg, i) => (
          <li key={i} className="p-2 bg-gray-100 rounded">
            {msg}
          </li>
        ))}
      </ul>
    </div>
    </DashboardLayout>
  );
}
