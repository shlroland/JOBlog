import { type AnyFunction } from "~/utils/type";
import dateFormat from "date-fns/format";
import distanceInWords from "date-fns/formatDistance";
import zh from "date-fns/locale/zh-CN";
import { useEffect, useRef, useState, type FC } from "react";

let callbacks: AnyFunction[] = [];

setInterval(() => {
  callbacks.forEach((cb) => cb());
}, 1000 * 60);

function eachMinute(fn: AnyFunction) {
  callbacks.push(fn);

  return () => {
    callbacks = callbacks.filter((cb) => cb !== fn);
  };
}

interface LocaleTime {
  date: string | number | Date;
  format?: string;
  timeago?: boolean;
}

const getTimeago = (date: LocaleTime["date"]) => {
  let content = distanceInWords(new Date(date), new Date(), {
    addSuffix: true,
    locale: zh,
  });

  content = content
    .replace("about", "")
    .replace("less than a minute ago", "just now")
    .replace("minute", "min");

  return content;
};

export const LocaleTime: FC<LocaleTime> = ({
  date,
  timeago,
  format = "yyyy-MM-dd HH:mm:ss",
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setMinutesMounted] = useState(0);
  const callback = useRef<() => void>();

  useEffect(() => {
    callback.current = eachMinute(() => {
      setMinutesMounted((state) => ++state);
    });

    return () => {
      if (callback.current) {
        callback.current();
      }
    };
  }, []);
  const formated = dateFormat(new Date(date), format);

  return (
    <time dateTime={formated}>{timeago ? getTimeago(date) : formated}</time>
  );
};
