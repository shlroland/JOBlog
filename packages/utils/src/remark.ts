import Slugger from "github-slugger"
import { type Element } from "hast"
import { hasProperty } from "hast-util-has-property"
import { headingRank } from "hast-util-heading-rank"
import { toString } from "hast-util-to-string"
import { type Transformer } from "unified"
import { visit } from "unist-util-visit"

const slugs = new Slugger()

export const rehypeSlug: (getHeadings: GetHeadings) => () => Transformer =
  (getHeadings) => () => {
    return (tree) => {
      slugs.reset()
      const headings: HeadingElement[] = []
      visit(tree, "element", (node: Element) => {
        if (headingRank(node) && node.properties && !hasProperty(node, "id")) {
          const nodeContent = toString(node)
          node.properties.id = slugs.slug(toString(node))

          headings.push({ ...node, headingContent: nodeContent })
        }
      })
      getHeadings(headings)
    }
  }

export type HeadingElement = Element & { headingContent: string }
export type GetHeadings = (headings: HeadingElement[]) => void
