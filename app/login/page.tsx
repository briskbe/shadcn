import type { Metadata } from "next"

import { LoginForm } from "@/components/login-form"
import { LoginMeshBackground } from "@/components/login-mesh-background"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account to continue",
}

export default function LoginPage() {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden p-6 md:p-10">
      <div className="absolute inset-0 -z-10">
        <LoginMeshBackground variant="page" />
      </div>
      <div className="relative w-full max-w-sm md:max-w-4xl">
        <LoginForm />
      </div>
    </div>
  )
}
