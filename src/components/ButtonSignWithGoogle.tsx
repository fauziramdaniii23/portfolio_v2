"use client"
import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type GoogleSignInButtonProps = Omit<ButtonProps, "variant" | "size"> & {
  isLoading?: boolean
  fullWidth?: boolean
  text?: string
}

function GoogleIcon({ className }: { className?: string }) {
  // Brand-accurate multi-color Google "G" icon
  return (
    <svg className={cn("size-5", className)} viewBox="0 0 18 18" aria-hidden="true" focusable="false">
      <path
        fill="#EA4335"
        d="M9 3.48c1.69 0 2.85.73 3.51 1.35l2.39-2.39C13.95.89 11.7 0 9 0 5.48 0 2.44 1.99.96 4.9L3.87 7.15C4.54 5.1 6.59 3.48 9 3.48z"
      />
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.93c-.1.83-.64 2.08-1.84 2.92l2.83 2.2c1.71-1.58 2.72-3.9 2.72-6.62z"
      />
      <path
        fill="#FBBC05"
        d="M3.87 7.15L.96 4.9C.35 6.2 0 7.57 0 9s.35 2.8.96 4.1l2.91-2.25C3.71 10.08 3.48 9.56 3.48 9s.23-1.08.39-1.85z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.17l-2.83-2.2c-.76.53-1.78.9-3.13.9-2.41 0-4.45-1.62-5.13-3.77L.96 13.1C2.44 16.01 5.48 18 9 18z"
      />
    </svg>
  )
}

function Spinner({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent",
        className,
      )}
    />
  )
}

export const GoogleSignInButton = forwardRef<HTMLButtonElement, GoogleSignInButtonProps>(
  ({ className, isLoading, fullWidth, text = "Sign in with Google", disabled, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        size="lg"
        aria-label={text}
        disabled={isLoading || disabled}
        className={cn(
          "bg-background text-foreground border-input",
          // Motion & feel
          "gap-2 font-medium shadow-sm transition-all",
          "-translate-y-0.5 hover:shadow-md",
          "active:translate-y-0",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          className,
        )}
        {...props}
      >
        {isLoading ? <Spinner /> : <GoogleIcon />}
        <span className="text-pretty">{text}</span>
      </Button>
    )
  },
)

GoogleSignInButton.displayName = "GoogleSignInButton"
