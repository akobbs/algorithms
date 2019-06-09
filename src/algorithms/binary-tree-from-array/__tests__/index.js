import createBinaryTree, {breadFirstTraversal} from '../index'

describe('Create binary tree from the array', () => {
  test('binary tree creation', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const rootNode = createBinaryTree(array)

    const result = []
    breadFirstTraversal(rootNode, value => result.push(value))

    expect(result).toEqual(array)
  })
})
