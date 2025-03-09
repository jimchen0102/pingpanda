"use client"

import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Check, Star } from "lucide-react"
import { Heading } from "@/components/heading"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { ShinyButton } from "@/components/shiny-button"
import { MockDiscordUI } from "@/components/mock-discord-ui"
import { AnimatedList } from "@/components/ui/animated-list"
import { DiscordMessage } from "@/components/discord-message"
import { Icons } from "@/components/icons"

const Page = () => {
  const codeSnippet = `await fetch("https://pingpanda-six.vercel.app/api/v1/events", {
  method: "POST",
  body: JSON.stringify({
    category: "sale",
    fields: {
      plan: "PRO",
      email: "zoe.martinez2001@email.com",
      amount: 49.00
    }
  }),
  headers: {
    Authorization: "Bearer <YOUR_API_KEY>"
  }
})`

  return (
    <>
      <section className="relative bg-brand-25 py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="relative mx-auto flex flex-col items-center gap-10 text-center">
            <Heading>
              <span>掌握事件通知</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                發送到你的 Discord
              </span>
            </Heading>

            <p className="max-w-prose text-pretty text-center text-base/7 text-gray-600">
              PingPanda 是最簡單的監控工具。即時{" "}
              <span className="font-semibold text-gray-700">
                獲取銷售、新用戶或任何重要事件
              </span>{" "}
              的通知，直接發送到你的 Discord。
            </p>

            <ul className="flex flex-col space-y-2 text-left text-base/7 text-gray-600 sm:items-start">
              {[
                "即時 Discord 通知，掌握關鍵事件",
                "追蹤銷售、新用戶及其他重要事件",
                "無須付費，立即使用",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-1.5 text-left">
                  <Check className="size-5 shrink-0 text-brand-700" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full max-w-80">
              <ShinyButton
                href="/sign-up"
                className="h-14 w-full shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                立即開始
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-brand-25 pb-4">
        <div className="absolute inset-x-0 inset-y-24 bg-brand-700"></div>
        <div className="relative mx-auto">
          <MaxWidthWrapper className="relative">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-red-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <MockDiscordUI>
                <AnimatedList>
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="今天 下午 12:35"
                    badgeText="SignUp"
                    badgeColor="#43b581"
                    title="👤 新用戶註冊"
                    content={{
                      name: "Mateo Ortiz",
                      email: "m.ortiz19@gmail.com",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="今天 下午 12:35"
                    badgeText="Revenue"
                    badgeColor="#faa61a"
                    title="💰 已收到付款"
                    content={{
                      amount: "$49.00",
                      email: "zoe.martinez2001@email.com",
                      plan: "PRO",
                    }}
                  />
                  <DiscordMessage
                    avatarSrc="/brand-asset-profile-picture.png"
                    avatarAlt="PingPanda Avatar"
                    username="PingPanda"
                    timestamp="今天 上午 5:11"
                    badgeText="Milestone"
                    badgeColor="#5865f2"
                    title="🚀 達成里程碑"
                    content={{
                      recurringRevenue: "$5.000 USD",
                      growth: "+8.2%",
                    }}
                  />
                </AnimatedList>
              </MockDiscordUI>
            </div>
          </MaxWidthWrapper>
        </div>
      </section>

      <section className="relative bg-brand-25 py-24 sm:py-32">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h3 className="text-center text-base/7 font-semibold text-brand-600">
              直覺監控
            </h3>
            <Heading as="h2" className="text-center">
              直覺化監控，隨時掌握即時洞察
            </Heading>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
            {/* first bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    即時通知
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    關鍵事件發生時立即收到通知，無論你身處何地，都能即時應對。
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <Image
                      className="size-full object-cover object-top"
                      src="/phone-screen.png"
                      alt="Phone screen displaying app interface"
                      fill
                    />
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]" />
            </div>

            {/* second bento grid element */}
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    追蹤任何事件
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    從新用戶註冊到成功付款，PingPanda 為你提供全方位事件通知。
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-any-event.png"
                    alt="Bento box illustrating event tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]" />
            </div>

            {/* third bento grid element */}
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    追蹤自訂屬性
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    為每個事件添加自訂數據，如用戶電子郵件、購買金額或超額配額，精確掌握關鍵資訊。
                  </p>
                </div>

                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <Image
                    className="w-full max-lg:max-w-xs"
                    src="/bento-custom-data.png"
                    alt="Bento box illustrating custom data tracking"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
            </div>

            {/* fourth bento grid element */}
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />

              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg/7 font-medium tracking-tight text-brand-950 max-lg:text-center">
                    簡單整合
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    只需幾分鐘即可將 PingPanda 無縫連接到現有工作流程。
                  </p>
                </div>

                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          pingpanda.js
                        </div>
                      </div>
                    </div>

                    <div className="overflow-hidden">
                      <div className="max-h-[30rem]">
                        <SyntaxHighlighter
                          language="typescript"
                          style={{
                            ...oneDark,
                            'pre[class*="language-"]': {
                              ...oneDark['pre[class*="language-"]'],
                              background: "transparent",
                              overflow: "hidden",
                            },
                            'code[class*="language-"]': {
                              ...oneDark['code[class*="language-"]'],
                              background: "transparent",
                            },
                          }}
                        >
                          {codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="relative bg-white py-24 sm:py-32">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-20">
          <div>
            <h3 className="text-center text-base/7 font-semibold text-brand-600">
              真實體驗
            </h3>
            <Heading as="h2" className="text-center">
              聽聽我們的用戶怎麼說
            </Heading>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 divide-y divide-gray-200 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {/* first customer review */}
            <div className="flex flex-auto flex-col gap-4 rounded-t-[2rem] bg-brand-25 p-6 sm:p-8 lg:rounded-l-[2rem] lg:rounded-tr-none lg:p-16">
              <div className="mb-2 flex justify-center gap-0.5 lg:justify-start">
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
              </div>

              <p className="text-pretty text-center text-base font-medium tracking-tight text-brand-950 sm:text-lg lg:text-left lg:text-lg/8">
                「PingPanda
                改變了我的遊戲規則！使用兩個月以來，能夠即時看到銷售出現，真的超有成就感。」
              </p>

              <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start lg:justify-start">
                <Image
                  src="/user-2.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="flex items-center font-semibold">
                    Freya Larsson
                    <Icons.verificationBadge className="ml-1.5 inline-block size-4" />
                  </p>
                  <p className="text-sm text-gray-600">@itsfreya</p>
                </div>
              </div>
            </div>

            {/* second customer review */}
            <div className="flex flex-auto flex-col gap-4 rounded-b-[2rem] bg-brand-25 p-6 sm:p-8 lg:rounded-r-[2rem] lg:rounded-bl-none lg:p-16">
              <div className="mb-2 flex justify-center gap-0.5 lg:justify-start">
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
                <Star className="size-5 fill-brand-600 text-brand-600" />
              </div>

              <p className="text-pretty text-center text-base font-medium tracking-tight text-brand-950 sm:text-lg lg:text-left lg:text-lg/8">
                「PingPanda 為我們的 SaaS
                帶來了實際效益。能夠簡單查看每日業績，讓我們的工作變得更輕鬆，絕對值得擁有！」
              </p>

              <div className="mt-2 flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start lg:justify-start">
                <Image
                  src="/user-1.png"
                  className="rounded-full object-cover"
                  alt="Random user"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col items-center sm:items-start">
                  <p className="flex items-center font-semibold">
                    Kai Durant
                    <Icons.verificationBadge className="ml-1.5 inline-block size-4" />
                  </p>
                  <p className="text-sm text-gray-600">@kdurant_</p>
                </div>
              </div>
            </div>
          </div>

          <ShinyButton
            href="/sign-up"
            className="relative z-10 h-14 w-full max-w-xs text-base shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            立即開始
          </ShinyButton>
        </MaxWidthWrapper>
      </section>
    </>
  )
}

export default Page
