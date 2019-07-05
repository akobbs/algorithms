import {isOneEditAway1, isOneEditAway2} from '..'

const fns = [
  {
    fn: isOneEditAway1,
    name: '1',
  },
  {
    fn: isOneEditAway2,
    name: '2',
  },
]

fns.forEach(({fn: isOneEditAway, name}) => {
  describe(`One edit away: ${name}`, () => {
    test('only one edit', () => {
      expect(isOneEditAway('pale', 'ple')).toBe(true)
      expect(isOneEditAway('pales', 'pale')).toBe(true)
      expect(isOneEditAway('pale', 'bale')).toBe(true)
      expect(isOneEditAway('apple', 'apple')).toBe(true)
      expect(isOneEditAway('apple', 'aple')).toBe(true)
      expect(isOneEditAway('aple', 'apple')).toBe(true)
    })

    test('more than one edit', () => {
      expect(isOneEditAway('pale', 'bae')).toBe(false)
      expect(isOneEditAway('aaaaa', 'bbbb')).toBe(false)
      expect(isOneEditAway('apple', 'epples')).toBe(false)
    })
  })
})
