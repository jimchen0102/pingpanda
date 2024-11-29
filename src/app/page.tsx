import { Check } from "lucide-react"
import { Heading } from "./components/heading"
import { MaxWidthWrapper } from "./components/max-width-wrapper"
import { ShinyButton } from "./components/shiny-button"

const Page = () => {
  return (
    <>
      <section className="relative bg-brand-25 py-24 sm:py-32">
        <MaxWidthWrapper>
          <div className="relative mx-auto flex flex-col items-center gap-10 text-center">
            <Heading>
              <span>Real-Time SaaS Insights,</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent">
                Delivered to Your Discord
              </span>
            </Heading>

            <p className="max-w-prose text-pretty text-center text-base/7 text-gray-600">
              PingPanda is the easiest way to monitor your SaaS. Get instant
              notifications for{" "}
              <span className="font-semibold text-gray-700">
                sales, new users, or any other event
              </span>{" "}
              sent directly to your Discord.
            </p>

            <ul className="flex flex-col space-y-2 text-left text-base/7 text-gray-600 sm:items-start">
              {[
                "Real-time Discord alerts for critical events",
                "Buy once, use forever",
                "Track sales, new users, or any other event",
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
                Start For Free Today
              </ShinyButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </>
  )
}

export default Page
