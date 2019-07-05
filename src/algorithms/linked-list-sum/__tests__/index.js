import {sum, Node} from '..'

function traverseList(node, callback) {
  while (node) {
    callback(node.value)
    node = node.next
  }
}

function createListFromArray(arr) {
  const head = new Node(arr[0])
  let tail = head

  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i])
    tail = tail.next
  }

  return head
}

describe('Linked list sum', () => {
  test('712 + 236', () => {
    const node1 = createListFromArray([2, 1, 7])
    const node2 = createListFromArray([6, 3, 2])

    const head = sum(node1, node2)
    const resultArr = []

    traverseList(head, value => resultArr.push(value))
    expect(resultArr).toEqual([8, 4, 9])
  })

  test('712 + 1', () => {
    const node1 = createListFromArray([2, 1, 7])
    const node2 = createListFromArray([1])

    const head = sum(node1, node2)
    const resultArr = []

    traverseList(head, value => resultArr.push(value))
    expect(resultArr).toEqual([3, 1, 7])
  })

  test('75 + 75', () => {
    const node1 = createListFromArray([5, 7])
    const node2 = createListFromArray([5, 7])

    const head = sum(node1, node2)
    const resultArr = []

    traverseList(head, value => resultArr.push(value))
    expect(resultArr).toEqual([0, 5, 1])
  })
})
