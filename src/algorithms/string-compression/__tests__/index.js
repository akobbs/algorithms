import {compress1, compress2, compress3} from '..'

const fns = [
  {
    fn: compress1,
    name: '1',
  },
  {
    fn: compress2,
    name: '2',
  },
  {
    fn: compress3,
    name: '3',
  },
]

fns.forEach(({fn: compress, name}) => {
  describe(`String compression: ${name}`, () => {
    test('compressed string is shorter than original', () => {
      expect(compress('aabcccccaaa')).toBe('a2b1c5a3')
      expect(compress('aaabbbc')).toBe('a3b3c1')
    })

    test('compressed string is longer than original', () => {
      const str1 = 'aabc'
      expect(compress(str1)).toBe(str1)

      const str2 = 'abc'
      expect(compress(str2)).toBe(str2)
    })
  })
})
