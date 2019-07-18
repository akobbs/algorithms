// Libs
import _ from 'lodash'

import {evenOddReorder1, evenOddReorder2} from '..'

const fns = [
  {
    fn: evenOddReorder1,
    name: '1',
  },
  {
    fn: evenOddReorder2,
    name: '2',
  },
]

function hasEntriesOutOfOrder(arr) {
  let firstOddIdx = _.findIndex(arr, value => value % 2 !== 0)
  firstOddIdx = firstOddIdx === -1 ? arr.length : firstOddIdx
  const lastEvenIdx = _.findLastIndex(arr, value => value % 2 === 0)

  if (lastEvenIdx > firstOddIdx) {
    return true
  }

  return false
}

fns.forEach(({fn: evenOddReorder, name}) => {
  describe(`Even-odd array reorder: ${name}`, () => {
    test('Out of order ', () => {
      const arrays = [
        [2, 4, 6, 1, 8, 10, 12],
        [1, 2],
        [2, 1, 4],
        [1, 2, 3, 4, 5, 6],
        [1, 3, 5, 2, 4, 6],
        [1],
        [2],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      ]

      arrays.forEach(arr => {
        const result = evenOddReorder(arr)
        expect(hasEntriesOutOfOrder(result)).toBe(false)
      })
    })
  })
})
