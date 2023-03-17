import { type FCWithChildren } from "react"

import { Header } from "../Header"

export const Applayout: FCWithChildren = ({ children }) => {
  return (
    <div className="h-full min-h-full">
      <Header></Header>
      <main className={`z-1 relative min-h-[calc(100%-64px)]`}>{children}</main>
    </div>
  )
}
