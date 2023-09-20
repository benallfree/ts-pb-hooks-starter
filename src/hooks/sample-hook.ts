import { Assert } from './lib'

/**
 * This will create a typing with all your library exports.
 */
type Lib = typeof import('./lib')

onAfterBootstrap(() => {
  /**
   * Here is how to import your custom library code
   */
  const lib = require(`${__hooks}/lib.js`) as Lib

  /**
   * In Typescript, assertion functions must be given an explicit type annotation.
   */
  const { _unsafe_assert } = lib
  const assert: Assert = _unsafe_assert
  assert(true)

  /**
   * These will be sent to stdout by pocketbase
   */
  console.log(`Hello, world!`)
})
