"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {SendHorizontal } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  className?: string;
};

export function ChatInput({value, onChange, onSubmit, className}: ChatInputProps) {
  return (
    <div
      className={cn(
        "w-full rounded-t border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
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
