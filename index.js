// @flow

import { foo, bar } from './foo.js'
foo('string') // Should fail
bar(1)('two') // Pass
bar(1)(2) // Fail
