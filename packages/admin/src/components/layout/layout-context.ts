import { createContext, useContext } from "react"
import * as R from "remeda"

interface SidebarContext {
  collapsed: boolean
  setCollapsed: () => void
}

export const SidebarContext = createContext<SidebarContext>({
  collapsed: false,
  setCollapsed: R.noop,
})

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}
