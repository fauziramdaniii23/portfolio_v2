// components/chat/ChatWindow.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUser } from "@/types/type";
import { ChatInput } from "./ChatInput";
import { useAuthStore } from "@/store/authStore";
import { signIn, signOut, useSession } from "next-auth/react";
import { GoogleSignInButton } from "../ButtonSignWithGoogle";

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
  const { data: session } = useSession();
  const {isAuthenticated} = useAuthStore();
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

  
  const [loading, setLoading] = useState(false)
  
   const handleClick = async () => {
    setLoading(true)
    
    const result = await signIn("google", { redirect: false })
    
    setLoading(false)
    
    if (result?.error) {
      console.error(result.error)
    } else if (result?.url) {
      window.location.href = result.url
    }
  }

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
      <ScrollArea className="flex-1 h-96 p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 m-2 ${
              msg.isMine ? "justify-end text-right" : "justify-start"
            }`}
          >
              <div className={`w-full gap-4 ${msg.isMine ? "flex flex-row-reverse" : "flex"}`}>
                <Avatar className="w-8 h-8 mt-2">
                <AvatarImage
                  src={msg.user.image ?? undefined}
                  alt={msg.user.name ?? "User"}
                />
                <AvatarFallback>
                  {msg.user.name ? msg.user.name[0].toUpperCase() : "U"}
                </AvatarFallback>
                </Avatar>
           
                <div className="max-w-[70%]">
                    <p className="text-left ml-2 mb-2">{msg.user.name}</p>
                    <div className={`rounded-2xl px-4 py-2 ${
                      msg.isMine
                        ? "bg-primary text-primary-foreground text-left"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p>{msg.message}</p>
                    <p className="text-[10px] opacity-70 mt-1">
                      {new Date(msg.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>

      {isAuthenticated ? (
        <ChatInput value={text} onChange={setText} onSubmit={handleSend} />
      ) : (
      <GoogleSignInButton onClick={handleClick} isLoading={loading} fullWidth text="Sign in with Google" />
      )}

    </div>
  );
}
