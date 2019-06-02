// Libs
import _ from 'lodash'

import {isPermutation1, isPermutation2, isPermutation3} from '../index'

const fns = [isPermutation1, isPermutation2, isPermutation3]

fns.forEach((fn, index) =>
  describe(`is permutation: ${index + 1}`, () => {
    test('permutations', () => {
      const string = 'asbkvhawfnjkjasbhcnmxcwuetuwertnjsmdmsndgjhj'

      const shuffledString = _.shuffle(string.split('')).join('')

      expect(fn(string, shuffledString)).toBe(true)
    })

    test('not permuation', () => {
      const string = 'asbkvhawfnjkjasbhcnmxcwuetuwertnjsmdmsndgjhj'
      const shuffledString = _.shuffle(string.split('')).join('')

      expect(fn(string + 'z', 'x' + shuffledString)).toBe(false)
      expect(fn(string + 'z', shuffledString + 'x')).toBe(false)
    })
  }),
)
