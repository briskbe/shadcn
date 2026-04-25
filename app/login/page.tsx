import type { Metadata } from "next"

import { LoginForm } from "@/components/login-form"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account to continue",
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden p-6 md:p-10">
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/15 via-background to-muted"
        aria-hidden
      />
      <div
        className="absolute -top-px left-1/2 -z-10 h-72 w-[min(100%,48rem)] -translate-x-1/2 bg-[radial-gradient(closest-side,oklch(0.72_0.2_128_/_0.2),transparent)] blur-0"
        aria-hidden
      />
      <div className="relative w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
