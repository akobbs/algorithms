import {depthFirstSearch1, depthFirstSearch2, Node} from '..'

const fns = [
  {
    fn: depthFirstSearch1,
    name: 'recursive',
  },
  {
    fn: depthFirstSearch2,
    name: 'iterative',
  },
]

fns.forEach(({fn, name}) => {
  describe(`Depth-first search: ${name}`, () => {
    //                1
    //             /  |  \
    //            2   3   4
    //           /\   /\  /\
    //          5  6 7  8 9 10
    test('Tree traversal', () => {
      const rootNode = new Node(1, [
        new Node(2, [new Node(5), new Node(6)]),
        new Node(3, [new Node(7), new Node(8)]),
        new Node(4, [new Node(9), new Node(10)]),
      ])

      const values = []
      fn(rootNode, value => values.push(value))

      expect(values).toEqual([1, 2, 5, 6, 3, 7, 8, 4, 9, 10])
    })
    //                1
    //             /  |  \
    //            2   3   4
    //           /\   |   |
    //          5  6  7   |
    //             |______|
    test('Graph with cycle', () => {
      const node4 = new Node(4)
      const node6 = new Node(6, [node4])
      node4.children = [node6]

      const rootNode = new Node(1, [
        new Node(2, [new Node(5), node6]),
        new Node(3, [new Node(7)]),
        node4,
      ])

      const values = []
      fn(rootNode, value => values.push(value))

      expect(values).toEqual([1, 2, 5, 6, 4, 3, 7])
    })
  })
})
