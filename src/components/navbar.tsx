import Link from "next/link"
import { currentUser } from "@clerk/nextjs/server"
import { SignOutButton } from "@clerk/nextjs"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const Navbar = async () => {
  const user = await currentUser()

  return (
    <nav className="sticky inset-x-0 top-0 z-[100] h-16 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="z-40 flex font-semibold">
            Ping<span className="text-brand-700">Panda</span>
          </Link>

          <div className="flex h-full items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button size="sm" variant="ghost">
                    登出
                  </Button>
                </SignOutButton>

                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: "sm",
                    className: "gap-1.5",
                  })}
                >
                  儀表板 <ArrowRight className="size-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  登入
                </Link>

                <Link
                  href="/sign-up"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      className: "gap-1.5",
                    })
                  )}
                >
                  註冊 <ArrowRight className="size-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
