import {Node, isPalindrome1, isPalindrome2, isPalindrome3} from '..'

function createListFromArray(arr) {
  const head = new Node(arr[0])
  let tail = head

  for (let i = 1; i < arr.length; i++) {
    tail.next = new Node(arr[i])
    tail = tail.next
  }

  return head
}

const fns = [
  {
    fn: isPalindrome1,
    name: '1',
  },
  {
    fn: isPalindrome2,
    name: '2',
  },
  {
    fn: isPalindrome3,
    name: '3',
  },
]

fns.forEach(({fn: isPalindrome, name}) => {
  describe(`Linked list palindrome: ${name}`, () => {
    test('palindromes', () => {
      expect(isPalindrome(createListFromArray([1, 2, 3, 2, 1]))).toBe(true)
      expect(isPalindrome(createListFromArray([1, 2, 2, 1]))).toBe(true)
      expect(isPalindrome(createListFromArray([1]))).toBe(true)
    })

    test('not palindromes', () => {
      expect(isPalindrome(createListFromArray([1, 2, 3]))).toBe(false)
      expect(isPalindrome(createListFromArray([1, 2, 3, 2, 4]))).toBe(false)
    })
  })
})
