class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export function partition1(node, x) {
  let beforeHeadNode = null
  let beforeTailNode = null

  let afterHeadNode = null
  let afterTailNode = null

  while (node != null) {
    if (node.value < x) {
      if (!beforeHeadNode) {
        beforeHeadNode = node
        beforeTailNode = node
      } else {
        beforeTailNode.next = node
        beforeTailNode = node
      }
    } else {
      if (!afterHeadNode) {
        afterHeadNode = node
        afterTailNode = node
      } else {
        afterTailNode.next = node
        afterTailNode = node
      }
    }

    node = node.next
  }

  if (!beforeTailNode) {
    return afterHeadNode
  }

  beforeTailNode.next = afterHeadNode

  return beforeHeadNode
}

export function partition2(node, x) {
  let headNode = node
  let tailNode = node

  while (node) {
    const next = node.next

    if (node.value < x) {
      node.next = headNode
      headNode = node
    } else {
      tailNode.next = node
      tailNode = node
    }

    node = next
  }

  tailNode.next = null

  return headNode
}
