// @flow

import { curry } from 'ramda'

export const foo = curry((a: number) => 2)
export const bar = curry((a: number, b: string) => [1])

foo('string') // $ExpectError Should fail
bar(1)('two') // Pass
bar(1)(2) // Fail
