import { useEffect, useRef, useState } from "react"
import { useMemoizedFn } from "ahooks"

import { type GetHeadings, type HeadingElement } from "@roland/utils"

export const useToc = () => {
  const [tocs, setTocs] = useState<HeadingElement[]>([])
  const tocsRef = useRef<HeadingElement[] | null>(null)
  const onTocsChange = useMemoizedFn<GetHeadings>((headings) => {
    tocsRef.current = headings
  })

  useEffect(() => {
    setTocs(tocsRef.current ?? [])
  }, [])

  return {
    tocs,
    onTocsChange,
  }
}
