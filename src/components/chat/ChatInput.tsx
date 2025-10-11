"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { TMessage } from "@/types/type";
import {SendHorizontal, X } from "lucide-react";
import { useEffect } from "react";
import { FaReplyAll } from "react-icons/fa";

type ChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  className?: string;
  reply?: TMessage;
  cancelReply: () => void
};

export function ChatInput({value, onChange, onSubmit, className, reply, cancelReply}: ChatInputProps) {
  return (
    <div
      className={cn(
        "w-full rounded-t border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
        
      {
        reply && (
          <div className="relative w-full flex mx-2 mt-4 gap-2">
          <FaReplyAll />
            <div className="border w-full p-2 rounded-2xl border-l-8">
              <p className="font-bold">{reply.user.name}</p>
              <p className="text-sm text-muted-foreground">
                {reply.message.length > 200
                  ? reply.message.slice(0, 200) + "..."
                  : reply.message}
              </p>
            </div>
            <button onClick={cancelReply} className="absolute right-2 top-2"><X className="w-4 h-4"/></button>
          </div>
        
        )
      }
      <TooltipProvider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="flex gap-2 p-3"
          aria-label="Form input chat"
        >
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Tulis pesan Anda..."
            className="bg-background"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                onSubmit();
              }
            }}
          />
          <div className="flex items-center justify-between">
            <Button type="submit">
              Kirim <SendHorizontal/>
            </Button>
          </div>
        </form>
      </TooltipProvider>
    </div>
  );
}
