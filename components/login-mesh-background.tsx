import { cn } from "@/lib/utils"

type LoginMeshBackgroundProps = {
  /** Slightly denser mesh for the card side panel. */
  variant?: "page" | "panel"
  className?: string
}

/**
 * Soft cyan / lavender / periwinkle mesh (aurora-style) — matches modern SaaS backgrounds.
 */
export function LoginMeshBackground({
  variant = "page",
  className,
}: LoginMeshBackgroundProps) {
  const blur = variant === "page" ? "blur-3xl" : "blur-2xl"
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#f0f4fb] dark:bg-[oklch(0.16_0.04_270)]" />
      {/* Cyan / sky — top left */}
      <div
        className={cn(
          "absolute -left-[20%] -top-[30%] h-[85%] w-[75%] rounded-full",
          "bg-[radial-gradient(closest-side,rgba(150,220,250,0.9)_0%,rgba(130,200,240,0.4)_45%,transparent_75%)]",
          "dark:bg-[radial-gradient(closest-side,oklch(0.4_0.1_220/0.5)_0%,oklch(0.32_0.08_240/0.2)_50%,transparent_75%)]",
          blur
        )}
      />
      {/* Lavender — top right */}
      <div
        className={cn(
          "absolute -right-[15%] -top-[25%] h-[80%] w-[70%] rounded-full",
          "bg-[radial-gradient(closest-side,rgba(230,210,255,0.85)_0%,rgba(210,185,250,0.45)_50%,transparent_75%)]",
          "dark:bg-[radial-gradient(closest-side,oklch(0.4_0.1_300/0.45)_0%,oklch(0.3_0.08_280/0.2)_50%,transparent_75%)]",
          blur
        )}
      />
      {/* Pale blue — bottom left */}
      <div
        className={cn(
          "absolute -bottom-[35%] -left-[15%] h-[90%] w-[80%] rounded-[50%]",
          "bg-[radial-gradient(closest-side,rgba(200,220,255,0.8)_0%,rgba(180,210,255,0.35)_48%,transparent_75%)]",
          "dark:bg-[radial-gradient(closest-side,oklch(0.35_0.08_250/0.4)_0%,oklch(0.28_0.05_260/0.15)_50%,transparent_75%)]",
          blur
        )}
      />
      {/* Periwinkle / violet — bottom right */}
      <div
        className={cn(
          "absolute -bottom-[20%] -right-[20%] h-[75%] w-[70%] rounded-[45%]",
          "bg-[radial-gradient(closest-side,rgba(175,195,255,0.8)_0%,rgba(150,170,250,0.4)_50%,transparent_75%)]",
          "dark:bg-[radial-gradient(closest-side,oklch(0.4_0.1_280/0.5)_0%,oklch(0.3_0.08_270/0.2)_50%,transparent_75%)]",
          blur
        )}
      />
      {/* Center haze — ties blend */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 h-[65%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full",
          "bg-[radial-gradient(closest-side,rgba(255,255,255,0.55)_0%,rgba(245,250,255,0.2)_50%,transparent_70%)]",
          "dark:bg-[radial-gradient(closest-side,oklch(0.24_0.04_280/0.25)_0%,transparent_60%)]",
          blur
        )}
      />
    </div>
  )
}
