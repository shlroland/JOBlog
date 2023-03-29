import { forwardRef, type ForwardedRef, type ReactNode } from "react"
import { animated, useTrail } from "react-spring"

interface ListTrailProps<Tag extends keyof JSX.IntrinsicElements> {
  element?: Tag
  length: number
  options?: Parameters<typeof useTrail>["1"]
  renderItem: (index: number) => ReactNode
  setItemContainerProps?: (index: number) => JSX.IntrinsicElements[Tag]
}

const InnerListTrail = <T extends keyof JSX.IntrinsicElements = "li">(
  {
    element,
    options,
    setItemContainerProps,
    length,
    renderItem,
  }: ListTrailProps<T>,
  ref: ForwardedRef<HTMLElement>,
) => {
  const AnimatedC: any = animated[element ?? "li"]

  const trail = useTrail(length, {
    config: { mass: 2, tension: 280, friction: 24, clamp: true },
    ...options,
  })

  return (
    <>
      {trail.map((style, index) => {
        return (
          <AnimatedC
            key={index}
            style={style}
            {...setItemContainerProps?.(index)}
            ref={ref}
          >
            {renderItem(index)}
          </AnimatedC>
        )
      })}
    </>
  )
}

export const ListTrail = forwardRef(InnerListTrail)


