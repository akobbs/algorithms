export class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export function sum(node1, node2, carry = 0) {
  if (!node1 && !node2 && carry === 0) {
    return null
  }

  let value = carry

  if (node1) {
    value += node1.value
  }

  if (node2) {
    value += node2.value
  }

  const node = new Node(value % 10)

  if (node1 || node2) {
    const next = sum(
      node1 ? node1.next : null,
      node2 ? node2.next : null,
      value >= 10 ? 1 : 0,
    )

    node.next = next
  }

  return node
}
