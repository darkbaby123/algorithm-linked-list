const { buildNodes } = require('../lib/01-push-and-build-one-two-three')
const { append, appendV2 } = require('../lib/07-append')

describe('07-append', () => {
  createTests(append)
  createTests(appendV2)

  function createTests(fn) {
    describe(fn.name, () => {
      it('should be able to handle two empty lists.', () => {
        expect(fn(null, null)).toEqual(null)
      })

      it('should be able to handle one empty lists and one non-empty list.', () => {
        expectLinkedListEqual(fn(null, buildNodes([1, 2, 3])), buildNodes([1, 2, 3]))
        expectLinkedListEqual(fn(buildNodes([1, 2, 3]), null), buildNodes([1, 2, 3]))
      })

      it('should be able to handle two non-empty lists of length 1.', () => {
        expectLinkedListEqual(fn(buildNodes([1]), buildNodes([2])), buildNodes([1, 2]))
        expectLinkedListEqual(fn(buildNodes([2]), buildNodes([1])), buildNodes([2, 1]))
        expect(fn(buildNodes([2]), buildNodes([1])).next.next).toEqual(null)
      })

      it('should be able to handle two non-empty lists of length > 1.', () => {
        expectLinkedListEqual(
          fn(buildNodes([1, 2, 3]), buildNodes([4, 5, 6])),
          buildNodes([1, 2, 3, 4, 5, 6])
        )
        expect(
          fn(buildNodes([1, 2, 3]), buildNodes([4, 5, 6])).next.next.next.next.next.next
        ).toEqual(null)
      })
    })
  }

  function expectLinkedListEqual(listA, listB) {
    return _compareNodes(listA, listB, 0)
  }

  function _compareNodes(nodeA, nodeB, idx) {
    if (!nodeA && !nodeB) return
    if (!nodeA || !nodeB || nodeA.data !== nodeB.data) throw new Error(`list not match at index ${idx}`)
    _compareNodes(nodeA.next, nodeB.next)
  }
})
