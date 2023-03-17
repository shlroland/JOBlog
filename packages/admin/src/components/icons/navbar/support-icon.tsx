import React from "react"

import { Svg } from "../../styles/svg"

export const SupportIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={{
        "& path": {
          fill: "$accents6",
        },
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 2C6.81 2 3 5.81 3 10.5C3 15.19 6.81 19 11.5 19H12V22C16.86 19.66 20 15 20 10.5C20 5.81 16.19 2 11.5 2ZM12.5 16.5H10.5V14.5H12.5V16.5ZM12.9 11.72C12.89 11.73 12.88 11.75 12.87 11.77C12.82 11.85 12.77 11.93 12.73 12.01C12.71 12.04 12.7 12.08 12.69 12.12C12.66 12.19 12.63 12.26 12.61 12.33C12.54 12.54 12.51 12.76 12.51 13.01H10.5C10.5 12.5 10.58 12.07 10.7 11.71C10.7 11.7 10.7 11.69 10.71 11.68C10.72 11.64 10.75 11.62 10.76 11.58C10.82 11.42 10.89 11.28 10.98 11.14C11.01 11.09 11.05 11.04 11.08 10.99C11.11 10.95 11.13 10.9 11.16 10.87L11.17 10.88C12.01 9.78 13.38 9.44 13.49 8.2C13.58 7.22 12.88 6.27 11.92 6.07C10.88 5.85 9.94 6.46 9.62 7.35C9.48 7.71 9.15 8 8.74 8H8.54C7.94 8 7.5 7.41 7.67 6.83C8.22 5.01 10.04 3.74 12.1 4.04C13.79 4.29 15.14 5.68 15.43 7.37C15.87 9.81 13.8 10.4 12.9 11.72Z"
        fill="#969696"
      />
    </Svg>
  )
}
