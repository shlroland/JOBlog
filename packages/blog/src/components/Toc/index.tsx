import { useEffect, useRef, useState, type FC } from "react"
import Link from "next/link"
import cx from "classnames"

import { type HeadingElement } from "@roland/utils"

import { elementInViewport } from "~/utils/dom"
import { isOdd } from "~/utils"
import { ListTrail } from "../Animation/ListTrail"
import styles from "./index.module.css"

const extractLevel = (tagName: string) => {
  const reg = /h(\d+)/i
  const level = tagName.match(reg)?.[1] ?? 1
  return Number(level)
}

const HEIGHT = 32

export const Toc: FC<{
  tocs: HeadingElement[]
  maxHeight?: string | number
}> = ({ tocs, maxHeight }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isContentVisible, setIsContentVisible] = useState(0)

  useEffect(() => {
    const listener = () => {
      tocs.reduceRight((_, toc, index) => {
        const el = document.getElementById(toc.id)
        if (!el || !ref.current) {
          return _
        }
        if (elementInViewport(el)) {
          setIsContentVisible(index)
          ref.current.scrollTop = HEIGHT * index
        }
        return _
      }, null)
    }
    document.addEventListener("scroll", listener)

    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [tocs])

  return (
    <div>
      <header className="text-primary-color mb-3 font-semibold leading-[22px]">
        目录
      </header>
      <main>
        <div
          ref={ref}
          className="scrollbar-none relative overflow-auto px-2.5"
          style={{
            maxHeight:
              typeof maxHeight === "string" ? maxHeight : `${maxHeight}px`,
          }}
        >
          <div
            className={cx(
              "relative",
              "before:absolute before:top-0 before:bottom-0 before:left-[2px] before:w-[2px] before:bg-gray-200 before:opacity-50",
            )}
          >
            <ListTrail
              length={tocs.length}
              options={{
                height: HEIGHT,
                from: { height: HEIGHT },
              }}
              element="div"
              renderItem={(idx) => {
                const toc = tocs[idx]
                if (!toc) return null
                const level = extractLevel(toc?.tagName)
                const f = isOdd(level - 1)
                return (
                  <Link
                    className={cx(
                      "hover:text-primary-500 relative z-10 flex items-center  py-1 pl-3",
                      isContentVisible === idx && "text-primary-500",
                      styles.item,
                    )}
                    style={
                      {
                        paddingLeft: 12 * (level - 1),
                        cursor: "pointer",
                        "--dot-left": `${10 * (level - 2)}px`,
                        "--dot-width": `${6 - (level - 1) + (f ? 1 : 0)}px`,
                      } as React.CSSProperties
                    }
                    href={`#${toc.id}`}
                    scroll
                  >
                    <span className="truncate">{toc.headingContent}</span>
                  </Link>
                )
              }}
            ></ListTrail>
          </div>
        </div>
      </main>
    </div>
  )
}
