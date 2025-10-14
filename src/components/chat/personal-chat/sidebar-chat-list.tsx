"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import type { Chat } from "./chat-app"
import { useMemo, useState } from "react"

export function SidebarChatList({
  chats,
  selectedId,
  onSelect,
}: {
  chats: Chat[]
  selectedId?: string
  onSelect: (id: string) => void
}) {
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return chats
    return chats.filter((c) => c.name.toLowerCase().includes(q))
  }, [chats, query])

  return (
    <div className="h-[80vh] flex flex-col">
      <div className="p-4">
        <label htmlFor="search" className="sr-only">
          Cari chat
        </label>
        <Input id="search" placeholder="Cari chat..." value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      <div role="list" aria-label="Daftar chat" className="flex-1 overflow-y-auto">
        {filtered.map((chat) => (
          <button
            key={chat.id}
            role="listitem"
            onClick={() => onSelect(chat.id)}
            className={cn(
              "w-full px-4 py-3 flex items-center gap-3 border-y first:border-t-0 last:border-b-0 border-transparent hover:bg-accent transition-colors",
              chat.id === selectedId && "bg-accent",
            )}
            aria-current={chat.id === selectedId ? "true" : "false"}
          >
            <Avatar className="size-9">
              <AvatarFallback>{chat.name.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center justify-between gap-2">
                <p className="font-medium truncate">{chat.name}</p>
                {chat.unread ? (
                  <Badge variant="default" className="rounded-full min-w-6 justify-center">
                    {chat.unread}
                  </Badge>
                ) : null}
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.lastMessage}</p>
            </div>
          </button>
        ))}

        {filtered.length === 0 && <p className="px-4 py-8 text-sm text-muted-foreground">Tidak ada chat yang cocok.</p>}
      </div>
    </div>
  )
}
