import { useRouter } from "next/router"
import { AccountsIcon } from "../icons/sidebar/accounts-icon"
import { BalanceIcon } from "../icons/sidebar/balance-icon"
import { CustomersIcon } from "../icons/sidebar/customers-icon"

import { HomeIcon } from "../icons/sidebar/home-icon"
import { PaymentsIcon } from "../icons/sidebar/payments-icon"
import { ProductsIcon } from "../icons/sidebar/products-icon"
import { ReportsIcon } from "../icons/sidebar/reports-icon"
import { useSidebarContext } from "../layout/layout-context"
import { Box } from "../styles/box"
import { Flex } from "../styles/flex"
import { CollapseItems } from "./collapse-items"
import { SidebarItem } from "./sidebar-item"
import { SidebarMenu } from "./sidebar-menu"
import { Sidebar } from "./sidebar.styles"

export const SidebarWrapper = () => {
  const router = useRouter()
  const { collapsed, setCollapsed } = useSidebarContext()
  return (
    <Box
      as="aside"
      css={{ height: "100vh", zIndex: 202, position: "sticky", top: 0 }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}
      <Sidebar collapsed={collapsed}>
        <Flex direction={"column"} justify={"between"} css={{ height: "100%" }}>
          <Sidebar.Body>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={router.pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={router.pathname === "/accounts"}
                title="Accounts"
                icon={<AccountsIcon />}
                href="accounts"
              />
              <SidebarItem
                isActive={router.pathname === "/payments"}
                title="Payments"
                icon={<PaymentsIcon />}
                href="payments"
              />
              <CollapseItems
                icon={<BalanceIcon />}
                items={["Banks Accounts", "Credit Cards", "Loans"]}
                title="Balances"
              />

              <SidebarItem
                isActive={router.pathname === "/customers"}
                title="Customers"
                icon={<CustomersIcon />}
                href="customers"

              />
              <SidebarItem
                isActive={router.pathname === "/products"}
                title="Products"
                icon={<ProductsIcon />}
                href="products"
                
              />
              <SidebarItem
                isActive={router.pathname === "/reports"}
                title="Reports"
                icon={<ReportsIcon />}
                href="products"
              />
            </SidebarMenu>
          </Sidebar.Body>
        </Flex>
      </Sidebar>
    </Box>
  )
}
