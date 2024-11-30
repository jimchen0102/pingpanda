"use client"

import { SignUp } from "@clerk/nextjs"

const Page = () => {
  return (
    <div className="flex w-full flex-1 items-center justify-center py-10">
      <SignUp signInUrl="/sign-in" />
    </div>
  )
}

export default Page
