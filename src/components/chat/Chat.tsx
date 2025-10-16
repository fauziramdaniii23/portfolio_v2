"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChatInput } from "./ChatInput";
import { useAuthStore } from "@/store/authStore";
import { signOut, useSession } from "next-auth/react";
import NotificationBell from "../Dialogue";
import { TChatList, TCurrentMessage, TMessage, TUser } from "@/types/type";
import { ChatAction } from "./ChatAction";
import { MdGroups3 } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { LogOut } from "lucide-react";
import ButtonAuth from "../button/ButtonAuth";
import { getMessageReply, isAuthor } from "@/lib/utils";
import { Author } from "@/app/constant/constant";
import { GoShieldCheck } from "react-icons/go";
import { pusherClient } from "@/lib/pusher/pusherClient";
import { encryptForUrl } from "@/lib/encryptor";

type Props = {
  selectedChat?: TChatList | null;
};

export default function Chat({ selectedChat }: Props) {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [replyChat, setReplyChat] = useState<TMessage>();
  const [text, setText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [loadingSend, setLoadingSend] = useState(false);

  const currentMessage = useMemo<TCurrentMessage | null>(() => {
    if ( user === null || !text.trim()) return null;

    return {
      message: text,
      userId: Number(user.id),
      replyToId: replyChat?.id,
      user: {
        id: user?.id,
        name: user.name ?? '',
        email: user.email ?? '',
      },
      replyTo: replyChat,
      personalChatId: selectedChat?.id,
    };
  }, [text, user, replyChat]);

  useEffect(() => {
    let enpoint = "/api/chat";
    if (selectedChat?.id) {
      const encryptedPersonalChatId = encryptForUrl(selectedChat.id);
      enpoint += `?personalChatId=${encryptedPersonalChatId}`;
    }
    fetch(enpoint)
      .then((res) => res.json())
      .then(setMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;
    setLoadingSend(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ currentMessage }),
    });
    setText("");
    setReplyChat(undefined);
    setLoadingSend(false);
  };
 
  const handleLogout = async () => {
    await signOut()
    handleLogout()
  }

  const [hoveredMessageId, setHoveredMessageId] = useState<number | null>(null)

  const handleEdit = (updatedMsg: TMessage) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === updatedMsg.id ? { ...msg, ...updatedMsg } : msg
        )
      );
    };

    const handleDelete = (deletedMsg: TMessage) => {
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== deletedMsg.id)
      );
    };

    useEffect(() => {
    const channel = pusherClient.subscribe("chat");

        // 🟢 Event: Pesan baru
    channel.bind(`chat${selectedChat?.id ? `-${selectedChat?.id}` : "room"}-post`, (data: any) => {
      const newMsg = data.newMessage;
      setMessages((prev) => [
        ...prev,
        { ...newMsg, isMine: newMsg.user.email === user?.email },
      ]);
    });

    // 🟡 Event: Pesan di-update
    channel.bind(`chat${selectedChat?.id ? `-${selectedChat?.id}` : "room"}-update`, (data: any) => {
      const updatedMsg = data.updatedMessage;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === updatedMsg.id
            ? { ...updatedMsg, isMine: updatedMsg.user.email === user?.email }
            : msg
        )
      );
    });

    // 🔴 Event: Pesan dihapus
    channel.bind(`chat${selectedChat?.id ? `-${selectedChat?.id}` : "room"}-delete`, (data: any) => {
      const deletedMsg = data.deletedMessage;
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== deletedMsg.id)
      );
    });


    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [user]);

  return (
    <div className="border rounded-xl p-4 bg-background shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-3">
        <div className="flex">
          {
            selectedChat === null && (
              <div className="flex gap-2 border-r pr-2">
                <MdGroups3 size={28}/>
                <h2 className="text-lg font-semibold">Chat Room</h2>
              </div>
            )
          }
          {
            isAuthenticated && user && (
              <div className="flex gap-2 justify-center align-center items-center pl-2">
                <Avatar>
                  <AvatarImage
                  src={isAuthor(user.email) ? Author.image : user.image ?? ""}
                  alt={user.name ?? "User"}
                />
                  <AvatarFallback>
                    {user.name ? user.name[0].toUpperCase() : "U"}
                  </AvatarFallback>
                </Avatar>
                <p>{user.name}</p>
              </div>
            )
          }
          
        </div>
        {
          isAuthenticated && (
            <div className="flex gap-2 mx-2">
              {/* <NotificationBell notifications={[]}/> */}
              <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={handleLogout} ><LogOut/></button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Logout</p>
                  </TooltipContent>
                </Tooltip>
            </div>
          )
        }
      </div>

      {/* Chat List */}
      <div className="border-b">
          <ScrollArea className="flex-1 h-[60vh] p-2">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex items-start gap-3 mx-2 my-4 ${
                msg.isMine ? "justify-end text-right" : "justify-start"
              }`}
            >
                <div className={`group w-full gap-4 ${msg.isMine ? "flex flex-row-reverse" : "flex"}`}>
                  <Avatar className="w-8 h-8 mt-2">
                    <AvatarImage
                      src={isAuthor(msg.user.email) ? Author.image : msg.user.image ?? ""}
                      alt={msg.user.name ?? "User"}
                    />
                    <AvatarFallback>
                      {msg.user.name ? msg.user.name[0].toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
            
                  <div className="max-w-[80%]">
                      <div className={`flex gap-2 ${msg.isMine ? "justify-end" : "justify-start"}`}>
                        <p className={`mb-2 font-bold ${msg.isMine && !isAuthor(msg.user.email) ? "text-right mr-2" : "text-left ml-2"}`}>{msg.user.name}</p>
                        {
                          isAuthor(msg.user.email) && (
                            <div className="flex justify-center align-center items-center gap-1 mb-2 rounded-2xl bg-blue-500/50 px-2">
                              <GoShieldCheck className="text-blue-500 text-xs"/>
                              <p className="text-[10px] italic">Author</p>
                            </div>
                          )
                        }
                      </div>
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
                              >{
                                msg.replyTo && (
                                  <div className={`border rounded-md border-l-6 p-2 ${msg.isMine ? "border-muted" : "border-l-blue-500"}`}>
                                    <div className="flex gap-2">
                                        <p className="font-bold">{msg.replyTo.user.name}</p>
                                        {
                                          isAuthor(msg.replyTo.user.email) && (
                                            <div className="flex justify-center align-center items-center gap-1 rounded-2xl bg-blue-500/50 px-2">
                                              <GoShieldCheck className="text-blue-500 text-xs"/>
                                              <p className="text-[10px] italic text-center">Author</p>
                                            </div>
                                          )
                                        }
                                    </div>
                                    
                                    <p className="whitespace-pre-line">{getMessageReply(msg.message, msg.replyTo.message)}</p>
                                  </div>
                                )
                              }
                              <p className="whitespace-pre-line">{msg.message}</p>
                              <p className="text-[10px] opacity-70 mt-1">
                                {new Date(msg.createdAt).toLocaleString("id-ID", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                                {msg.updatedAt && <span className="text-[10px] italic"> (edited)</span>}
                              </p>
                          </div> 
                          <div
                            className={`transition-opacity duration-200 ${
                              hoveredMessageId === msg.id ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            }`}
                          >
                            {
                              isAuthenticated && (
                                <ChatAction message={msg} onReply={setReplyChat} onEdit={handleEdit} onDelete={handleDelete}/>
                              )
                            }
                          </div> 
                      </div>                  
                    </div>
                  </div>
                </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </div>
      

      {isAuthenticated ? (
        <ChatInput 
          value={text} 
          onChange={setText} 
          onSubmit={handleSend} 
          reply={replyChat} 
          cancelReply={() => setReplyChat(undefined)}
          loadingSend={loadingSend}/>
      ) : (
        <ButtonAuth/>
      )}

    </div>
  );
}
