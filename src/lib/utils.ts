import { Author } from "@/app/constant/constant"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isAuthor = (email: string | null | undefined) : boolean => {
  if (!email) return false
  return email === Author.email
}

export const getMessageReply =(message: string, reply: string) => {
  let replyMsg = reply
  if(reply.length > message.length) {
    if(message.length < 10){
      if(reply.length < 10){
        replyMsg = reply
      }else{
        replyMsg = reply.slice(0, 10) + "..."
      }
    }
    else{
      replyMsg = reply.slice(0, message.length) + "..."
    }
  }
  return replyMsg
}
