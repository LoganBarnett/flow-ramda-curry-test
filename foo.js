// @flow

import { curry } from 'ramda'

export const foo = curry((a: number) => {})

foo('string')
