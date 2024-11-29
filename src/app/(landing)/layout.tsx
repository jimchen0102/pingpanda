import { ReactNode } from "react"
import { Navbar } from "@/app/components/navbar"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
