export class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

// O(n) time | O(n) space
export default function reverse(node) {
  if (!node) {
    return null
  }

  if (!node.next) {
    return node
  }

  const headNode = reverse(node.next)

  node.next.next = node
  node.next = null

  return headNode
}
