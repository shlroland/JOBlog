import "react"

declare module "react" {
  import type { FC, Children } from "react"

  // eslint-disable-next-line @typescript-eslint/ban-types
  export type FCWithChildren<P = {}> = FC<P & { children: Children }>
}
