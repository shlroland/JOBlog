import { createElement as h, type FC } from "react"
import { useCreation } from "ahooks"
import cx from "classnames"
import { refractor } from "refractor/lib/common"

import { mapWithDepth } from "./mapChildren"

interface Props {
  classNmae?: string
  language: string
  value: string
}

const Refractor: FC<Props> = ({ value, language, classNmae }) => {
  const code = useCreation(() => {
    const tree = refractor.highlight(value, language)

    return tree.children.length === 0
      ? value
      : tree.children.map(mapWithDepth(0))
  }, [])

  console.log(value, code)

  return h("code", { className: cx(classNmae, `language-${language}`) }, code)
}

export default Refractor
