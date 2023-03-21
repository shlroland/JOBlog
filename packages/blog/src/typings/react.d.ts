/* eslint-disable @typescript-eslint/ban-types */
import "react"

declare module "react" {
  import type { FC, Children } from "react"

  export type FCWithChildren<P = {}> = FC<P & { children: Children }>

  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}
