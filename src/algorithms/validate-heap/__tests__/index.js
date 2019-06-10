import {isMaxHeap1, isMaxHeap2} from '..'

const fns = [
  {
    fn: isMaxHeap1,
    name: 'iterative',
  },
  {
    fn: isMaxHeap2,
    name: 'recursive',
  },
]

fns.forEach(({fn, name}) => {
  describe(`is max heap: ${name}`, () => {
    test('valid max heap', () => {
      const validHeaps = [
        [
          97,
          93,
          87,
          91,
          88,
          73,
          76,
          56,
          82,
          63,
          53,
          62,
          51,
          41,
          6,
          9,
          13,
          21,
          75,
          30,
          37,
          24,
          49,
          48,
          44,
          33,
          5,
          16,
          19,
        ],
        [99, 95, 84, 68, 65, 34, 26, 47, 56, 39, 52, 27],
        [96, 74, 73, 10, 53, 47, 7, 9, 6, 12],
        [99, 41, 44, 37, 17, 2, 10, 35],
      ]

      validHeaps.forEach(heapArray => {
        expect(fn(heapArray)).toBe(true)
      })
    })

    test('not valid max heap', () => {
      const invalidHeaps = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [96, 74, 97, 10, 53, 47, 7, 9, 6, 12],
        [99, 41, 44, 37, 17, 2, 45, 35],
      ]

      invalidHeaps.forEach(heapArray => {
        expect(fn(heapArray)).toBe(false)
      })
    })
  })
})
