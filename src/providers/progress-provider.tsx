"use client"

import { ProgressProvider as ProgressBar } from "@bprogress/next/app"

export const ProgressProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <ProgressBar
      height="3px"
      color="#3659b1"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressBar>
  )
}
