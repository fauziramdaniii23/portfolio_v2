"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatInput } from "./ChatInput";
import { useAuthStore } from "@/store/authStore";
import { signIn, signOut, useSession } from "next-auth/react";
import { GoogleSignInButton } from "../ButtonSignWithGoogle";
import NotificationBell from "../Dialogue";
import { TMessage } from "@/types/type";
import { ChatAction } from "./ChatAction";

export default function Chat() {
  const { data: session } = useSession();
  const {isAuthenticated} = useAuthStore();
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [reply, setReply] = useState<TMessage>();
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

  const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(null)

  return (
    <div className="flex flex-col h-[80vh] border rounded-xl p-4 bg-background shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <h2 className="text-lg font-semibold">💬 Chat Room</h2>
        <NotificationBell notifications={[]}/>
      </div>

      {/* Chat List */}
      <ScrollArea className="flex-1 h-96 p-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex items-start gap-3 m-2 ${
              msg.isMine ? "justify-end text-right" : "justify-start"
            }`}
          >
              <div className={`group w-full gap-4 ${msg.isMine ? "flex flex-row-reverse" : "flex"}`}>
                <Avatar className="w-8 h-8 mt-2">
                  <AvatarImage
                    src={msg.user.image ?? undefined}
                    alt={msg.user.name ?? "User"}
                  />
                  <AvatarFallback>
                    {msg.user.name ? msg.user.name[0].toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
           
                <div className="max-w-[80%]">
                    <p className={`mb-2 ${msg.isMine ? "text-right mr-2" : "text-left ml-2"}`}>{msg.user.name}</p>
                    <div className="w-full relative overflow-y-hidden">
                      <div className={`absolute w-6 h-6 -top-3 rotate-45 ${msg.isMine ? "right-1.5 bg-primary" : "left-1 bg-muted"}`}>
                      </div>                   
                    <div className={`flex gap-2 ${
                        msg.isMine
                          ? "flex-row-reverse"
                          : ""
                          }`}
                          onMouseEnter={() => setHoveredMessageId(msg.id)}
                          onMouseLeave={() => setHoveredMessageId(null)}
                          >
                        <div className={`rounded-lg px-4 py-2 ${
                        msg.isMine
                          ? "bg-primary mr-2 text-primary-foreground text-left"
                          : "bg-muted text-foreground ml-2"
                          }`}                     
                        >
                            <p>{msg.message}</p>
                            <p className="text-[10px] opacity-70 mt-1">
                              {new Date(msg.createdAt).toLocaleTimeString()}
                            </p>
                        </div> 
                        <div
                          className={`transition-opacity duration-200 ${
                            hoveredMessageId === msg.id ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          <ChatAction isMine={msg.isMine}/>
                        </div> 
                    </div>                  
                  </div>
                </div>
              </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </ScrollArea>

      {isAuthenticated ? (
        <ChatInput value={text} onChange={setText} onSubmit={handleSend} reply={reply}/>
      ) : (
      <GoogleSignInButton onClick={handleClick} isLoading={loading} fullWidth text="Sign in with Google" />
      )}

    </div>
  );
}
