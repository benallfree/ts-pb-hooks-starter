export function _unsafe_assert<T>(
  v: T | undefined | void | null,
  msg?: string
): asserts v is T {
  if (!v) {
    throw new Error(msg || `Assertion failure`)
  }
}
export type Assert = typeof _unsafe_assert
