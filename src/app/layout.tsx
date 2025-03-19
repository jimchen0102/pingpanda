import type { Metadata } from "next"
import { Noto_Sans_TC } from "next/font/google"
import { ProgressProvider } from "@/providers/progress-provider"
import { QueryProvider } from "@/providers/query-provider"
import { cn } from "@/lib/utils"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { zhTW } from "@clerk/localizations"

const notoSans = Noto_Sans_TC({ subsets: ["latin"], variable: "--font-noto" })

export const metadata: Metadata = {
  title: "PingPanda",
  description:
    "PingPanda 是一個事件監控平台，開發者可以透過 API 發送事件通知，將自己的應用和 Discord 做整合。",
  icons: [{ rel: "icon", url: "/brand-asset-profile-picture.png" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider localization={zhTW}>
      <html lang="en" className={cn(notoSans.variable)}>
        <body className="flex min-h-screen flex-col bg-brand-50 font-sans text-brand-950 antialiased">
          <ProgressProvider>
            <main className="relative flex flex-1 flex-col">
              <QueryProvider>{children}</QueryProvider>
            </main>
          </ProgressProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
