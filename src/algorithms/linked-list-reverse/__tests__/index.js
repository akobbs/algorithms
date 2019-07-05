import reverse, {Node} from '..'

function createListFromArray(arr) {
  const head = new Node(arr[0])
  let tail = head

  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i])
    tail = tail.next
  }

  return head
}

function traverseList(node, callback) {
  while (node) {
    callback(node.value)
    node = node.next
  }
}

describe('Reverse linked list', () => {
  test('1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const list = createListFromArray(arr)
    const head = reverse(list)

    const resultArr = []
    traverseList(head, value => resultArr.push(value))

    expect(resultArr).toEqual(arr.reverse())
  })
})
