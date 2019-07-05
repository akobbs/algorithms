export class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

export function isPalindrome1(node) {
  const reversedHead = reverse(node)
  return isEqual(node, reversedHead)
}

function isEqual(oneNode, twoNode) {
  while (oneNode && twoNode) {
    if (oneNode.value !== twoNode.value) {
      return false
    }

    oneNode = oneNode.next
    twoNode = twoNode.next
  }

  return !oneNode && !twoNode
}

function reverse(node) {
  let reversedHead = null

  while (node) {
    const newHead = new Node(node.value)
    newHead.next = reversedHead
    reversedHead = newHead

    node = node.next
  }

  return reversedHead
}

export function isPalindrome2(node) {
  const stack = []

  let slow = node
  let fast = node

  while (fast && fast.next) {
    stack.push(slow.value)

    slow = slow.next
    fast = fast.next.next
  }

  if (fast) {
    slow = slow.next
  }

  while (slow) {
    const lastValue = stack.pop()

    if (lastValue !== slow.value) {
      return false
    }

    slow = slow.next
  }

  return true
}

export function isPalindrome3(node) {
  const isPalindromeUtil = (node, length) => {
    if (length === 1) {
      return {
        node: node.next,
        result: true,
      }
    }

    if (length <= 0) {
      return {
        node,
        result: true,
      }
    }

    const response = isPalindromeUtil(node.next, length - 2)

    if (!response.result || !response.node) {
      return response
    }

    if (node.value !== response.node.value) {
      response.result = false
    }

    response.node = response.node.next

    return response
  }

  return isPalindromeUtil(node, size(node)).result
}

function size(node) {
  let n = 0
  while (node) {
    n++
    node = node.next
  }

  return n
}
