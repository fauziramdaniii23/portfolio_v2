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
