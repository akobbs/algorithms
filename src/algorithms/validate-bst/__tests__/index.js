import isBST from '../index'
import createBinaryTree from '../../binary-tree-from-array'

describe('is valid BST', () => {
  test('valid BST', () => {
    const validBSTs = [
      [65, 50, 81, 45, 57, 78, 85, 42, 46, 56, 60, 77, 79],
      [22, 14, 27, 12, 17, 26, 31],
      [24, 14, 26, 12],
    ]

    validBSTs.forEach(bstArray => {
      const rootNode = createBinaryTree(bstArray)
      expect(isBST(rootNode)).toBe(true)
    })
  })
  test('not valid BST', () => {
    const notValidBSTs = [
      [65, 50, 81, 45, 49, 78, 85, 42, 46, 56, 60, 77, 79],
      [65, 50, 64, 45, 57, 78, 85, 42, 46, 56, 60, 77, 79],
      [65, 50, 81, 45, 57, 78, 85, 42, 44, 56, 60, 77, 79],
      [49, 50, 81, 45, 57, 78, 85, 42, 46, 56, 60, 77, 79],
    ]

    notValidBSTs.forEach(bstArray => {
      const rootNode = createBinaryTree(bstArray)
      expect(isBST(rootNode)).toBe(false)
    })
  })
})
