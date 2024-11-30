import { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevels
  children: ReactNode
  className?: string
}

export const Heading = ({
  as,
  children,
  className,
  ...props
}: HeadingProps) => {
  const Component = as || "h1"

  return (
    <Component
      className={cn(
        "text-pretty font-heading text-4xl font-semibold tracking-tight text-zinc-800 sm:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
