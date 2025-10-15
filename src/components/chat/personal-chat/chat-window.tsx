"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageBubble } from "./message-bubble"
import type { Chat, Message } from "./PersonalChat"
import { useState } from "react"

export function ChatWindow({
  chat,
  messages,
  onSend,
}: {
  chat?: Chat
  messages: Message[]
  onSend: (text: string) => void
}) {
  const [text, setText] = useState("")
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Auto scroll ke bawah saat pesan berubah
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, chat?.id])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const value = text.trim()
    if (!value) return
    onSend(value)
    setText("")
  }

  return (
    <div className="h-[80vh] flex flex-col">
      <header className="h-14 flex items-center px-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="size-2 rounded-full bg-emerald-500" aria-hidden />
          <h2 className="font-semibold text-balance">{chat?.name ?? "Pilih chat"}</h2>
        </div>
      </header>

      <div ref={viewportRef} className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mx-auto max-w-3xl flex flex-col gap-3">
          {messages.map((m) => (
            <MessageBubble key={m.id} author={m.author} content={m.content} createdAt={m.createdAt} />
          ))}
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-10">Belum ada pesan. Mulai percakapan!</p>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-border p-3">
        <div className="mx-auto max-w-3xl flex items-center gap-2">
          <label htmlFor="message" className="sr-only">
            Ketik pesan
          </label>
          <Input
            id="message"
            placeholder="Tulis pesan..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                // Kirim dengan Cmd/Ctrl+Enter
                handleSubmit(e as unknown as React.FormEvent)
              }
            }}
          />
          <Button type="submit">Kirim</Button>
        </div>
      </form>
    </div>
  )
}
