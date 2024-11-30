"use client"

import { SignIn } from "@clerk/nextjs"

const Page = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center py-10">
      <SignIn signUpUrl="/sign-up" />
    </div>
  )
}

export default Page
