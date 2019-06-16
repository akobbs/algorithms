import createBinaryTree from '../../binary-tree-from-array'

import {invertBinaryTree1, invertBinaryTree2} from '..'

function breadthFirstSearch(rootNode, callback) {
  const queue = [rootNode]

  while (queue.length > 0) {
    const node = queue.shift()

    if (node) {
      callback(node.value)

      queue.push(node.left)
      queue.push(node.right)
    }
  }
}

const fns = [
  {
    fn: invertBinaryTree1,
    name: 'recursive',
  },
  {
    fn: invertBinaryTree2,
    name: 'itertive',
  },
]

fns.forEach(({fn, name}) => {
  describe(`Invert binary tree: ${name}`, () => {
    // Input:
    //                1
    //               / \
    //              2   3
    //             /\   /\
    //            4  5 6  7
    // Output:
    //                1
    //               / \
    //              3   2
    //             /\   /\
    //            7  6 5  4
    test('1', () => {
      const arrayTree = [1, 2, 3, 4, 5, 6, 7]
      const rootNode = createBinaryTree(arrayTree)

      fn(rootNode)

      const values = []
      breadthFirstSearch(rootNode, value => values.push(value))

      expect(values).toEqual([1, 3, 2, 7, 6, 5, 4])
    })
  })
})
