/* eslint-disable @typescript-eslint/no-explicit-any */
export type AsyncFunction<
  Arguments extends readonly unknown[] = readonly any[],
  ReturnValue = unknown,
> = (...arguments_: Arguments) => Promise<ReturnValue>

export type AnyAsyncFunction = (
  ...arguments_: readonly any[]
) => Promise<unknown>

export type AnyFunction = (...arguments_: readonly any[]) => unknown
