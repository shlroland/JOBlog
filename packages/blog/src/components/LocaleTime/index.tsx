import { type FC } from "react"
import { useInterval, useUpdate } from "ahooks"
import dateFormat from "date-fns/format"
import distanceInWords from "date-fns/formatDistance"
import zh from "date-fns/locale/zh-CN"

interface LocaleTime {
  date: string | number | Date
  format?: string
  timeago?: boolean
}

const getTimeago = (date: LocaleTime["date"]) => {
  let content = distanceInWords(new Date(date), new Date(), {
    addSuffix: true,
    locale: zh,
  })

  content = content
    .replace("about", "")
    .replace("less than a minute ago", "just now")
    .replace("minute", "min")

  return content
}

export const LocaleTime: FC<LocaleTime> = ({
  date,
  timeago,
  format = "yyyy-MM-dd HH:mm:ss",
}) => {
  const formated = dateFormat(new Date(date), format)
  const update = useUpdate()
  useInterval(update, 60 * 1000)

  return (
    <time dateTime={formated}>{timeago ? getTimeago(date) : formated}</time>
  )
}
