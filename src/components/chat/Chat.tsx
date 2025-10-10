// components/chat/ChatWindow.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUser } from "@/types/type";

type TMessage = {
  id: number;
  message: string;
  userId: number;
  replyToId?: number;
  user: TUser;
  createdAt: string;
  replyTo?: TMessage;
  isMine?: boolean;
};

export default function Chat() {
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/chat")
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
    });

    const newMsg = await res.json();
    setMessages((prev) => [...prev, newMsg]);
    setText("");
  };

  return (
    <div className="flex flex-col h-[80vh] border rounded-xl p-4 bg-background shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="text-lg font-semibold">💬 Chat Room</h2>
        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1 h-96 pr-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${
              msg.isMine ? "justify-end text-right" : "justify-start"
            }`}
          >
            {msg.isMine && msg.user && (
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={msg.user.image ?? undefined}
                  alt={msg.user.name ?? "User"}
                />
                <AvatarFallback>
                  {msg.user.name ? msg.user.name[0].toUpperCase() : "U"}
                </AvatarFallback>
              </Avatar>
            )}

            <div
              className={`rounded-2xl px-4 py-2 max-w-[70%] ${
                msg.isMine
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {!msg.isMine &&  msg.user && (
                <p className="text-xs font-medium mb-1">{msg.user.name}</p>
              )}
              <p>{msg.message}</p>
              <p className="text-[10px] opacity-70 mt-1">
                {new Date(msg.createdAt).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>

      {/* Input Box */}
      <div className="flex gap-2 mt-3">
        <Input
          placeholder="Ketik pesan..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Kirim</Button>
      </div>
    </div>
  );
}
