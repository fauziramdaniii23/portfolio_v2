"use client"

import { cn } from "@/lib/utils"

export function MessageBubble({
  author,
  content,
  createdAt,
}: {
  author: "me" | "them"
  content: string
  createdAt?: string
}) {
  const isMe = author === "me"
  return (
    <div className={cn("flex items-end", isMe ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed",
          isMe
            ? "bg-primary text-primary-foreground rounded-br-none"
            : "bg-secondary text-secondary-foreground rounded-bl-none",
        )}
      >
        <p className="whitespace-pre-wrap text-pretty">{content}</p>
        {createdAt ? (
          <time
            className={cn(
              "block mt-1 text-[10px] opacity-70",
              isMe ? "text-primary-foreground" : "text-muted-foreground",
            )}
            dateTime={createdAt}
          >
            {new Date(createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </time>
        ) : null}
      </div>
    </div>
  )
}
