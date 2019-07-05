import isRotation from '..'

describe('is string rotation', () => {
  test('rotations', () => {
    const str = 'amazing'
    expect(isRotation(str, str)).toBe(true)

    for (let i = 1; i < str.length; i++) {
      const firstPart = str.substring(0, i)
      const secondPart = str.substring(i, str.length)
      const rotatedStr = secondPart + firstPart
      console.log(rotatedStr)

      expect(isRotation(str, rotatedStr)).toBe(true)
    }
  })
})
