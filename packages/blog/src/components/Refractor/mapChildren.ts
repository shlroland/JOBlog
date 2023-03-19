import { createElement as h } from "react"
import type { RefractorElement, Text } from "refractor"

type MapChildrenFn = (
  value: RefractorElement | Text,
  index: number,
  depth: number,
) => string | ReturnType<typeof h>

const mapChildren: MapChildrenFn = (child, index, depth) => {
  if (child.type === "element") {
    const className =
      child.properties && Array.isArray(child.properties.className)
        ? child.properties.className.join(" ")
        : child.properties?.className ?? ""

    return h(
      child.tagName,
      Object.assign({ key: `fract-${depth}-${index}` }, child.properties, {
        className,
      }),
      child.children && child.children.map(mapWithDepth(depth + 1)),
    )
  }
  return child.value
}

export function mapWithDepth(depth: number) {
  return function mapChildrenWithDepth(
    child: RefractorElement | Text,
    i: number,
  ) {
    return mapChildren(child, i, depth)
  }
}
