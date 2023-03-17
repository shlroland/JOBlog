import { useState, type FCWithChildren } from "react"

import { useLockedBody } from "~/hooks/useBodyLock"
import { NavbarWrapper } from "../navbar/navbar"
import { SidebarWrapper } from "../sidebar/sidebar"
import { SidebarContext } from "./layout-context"
import { WrapperLayout } from "./layout.styles"

export const Layout: FCWithChildren = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [_, setLocked] = useLockedBody(false)
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    setLocked(!sidebarOpen)
  }

  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      <WrapperLayout>
        <SidebarWrapper />
        <NavbarWrapper>{children}</NavbarWrapper>
      </WrapperLayout>
    </SidebarContext.Provider>
  )
}
