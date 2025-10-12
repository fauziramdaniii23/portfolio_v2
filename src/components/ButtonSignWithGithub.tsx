"use client"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type GitHubSignInButtonProps = Omit<ButtonProps, "children"> & {
  label?: string
  loading?: boolean
}

export function GitHubSignInButton({
  className,
  label = "Sign in with GitHub",
  loading = false,
  disabled,
  onClick,
  ...props
}: GitHubSignInButtonProps) {
  return (
    <Button
      {...props}
      type={props.type ?? "button"}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading ? "true" : "false"}
      aria-live="polite"
      className={cn(
        // brand-like look using theme tokens for contrast
        "gap-2 bg-foreground text-background hover:bg-foreground/90",
        "transition-all",
        className,
      )}
    >
      {/* Icon - GitHub logo (brand accurate, uses currentColor) */}
      <span className="inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="currentColor"
          role="img"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M12 2C6.477 2 2 6.589 2 12.253c0 4.516 2.865 8.342 6.839 9.69.5.095.683-.22.683-.49 0-.242-.01-1.046-.014-1.898-2.782.616-3.369-1.206-3.369-1.206-.454-1.176-1.11-1.49-1.11-1.49-.908-.634.07-.621.07-.621 1.004.073 1.532 1.05 1.532 1.05.892 1.564 2.341 1.113 2.91.851.091-.663.35-1.113.636-1.37-2.222-.259-4.56-1.136-4.56-5.054 0-1.117.389-2.03 1.027-2.746-.103-.26-.446-1.304.098-2.718 0 0 .84-.273 2.75 1.048A9.329 9.329 0 0 1 12 7.31a9.33 9.33 0 0 1 2.512.346c1.909-1.321 2.748-1.048 2.748-1.048.545 1.414.202 2.458.1 2.718.64.716 1.026 1.63 1.026 2.746 0 3.928-2.343 4.792-4.573 5.046.36.316.68.94.68 1.895 0 1.368-.012 2.47-.012 2.805 0 .272.181.589.69.488C19.139 20.592 22 16.767 22 12.253 22 6.589 17.523 2 12 2Z" />
        </svg>
      </span>

      {/* Label */}
      <span className={cn(loading && "opacity-80")}>{label}</span>

      {/* Loading spinner */}
      {loading && (
        <span className="ml-1 inline-flex h-4 w-4 items-center justify-center" aria-hidden="true">
          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
          </svg>
        </span>
      )}

      {/* sr-only for screen readers */}
      <span className="sr-only">{loading ? "Signing in…" : label}</span>
    </Button>
  )
}

export default GitHubSignInButton
