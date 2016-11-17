const { buildNodes } = require('../lib/01-push-and-build-one-two-three')
const { append, appendV2 } = require('../lib/07-append')

describe('07 Append', () => {
  createTests(append)
  createTests(appendV2)

  function createTests(fn) {
    describe(fn.name, () => {
      it('should be able to handle two empty lists.', () => {
        expect(fn(null, null)).toEqual(null)
      })

      it('should be able to handle one empty lists and one non-empty list.', () => {
        expect(fn(null, buildNodes([1, 2, 3]))).toEqualLinkedList(buildNodes([1, 2, 3]))
        expect(fn(buildNodes([1, 2, 3]), null)).toEqualLinkedList(buildNodes([1, 2, 3]))
      })

      it('should be able to handle two non-empty lists of length 1.', () => {
        expect(fn(buildNodes([1]), buildNodes([2]))).toEqualLinkedList(buildNodes([1, 2]))
        expect(fn(buildNodes([2]), buildNodes([1]))).toEqualLinkedList(buildNodes([2, 1]))
        expect(fn(buildNodes([2]), buildNodes([1])).next.next).toEqual(null)
      })

      it('should be able to handle two non-empty lists of length > 1.', () => {
        expect(fn(buildNodes([1, 2, 3]), buildNodes([4, 5, 6])))
          .toEqualLinkedList(buildNodes([1, 2, 3, 4, 5, 6]))

        expect(
          fn(buildNodes([1, 2, 3]), buildNodes([4, 5, 6])).next.next.next.next.next.next
        ).toEqual(null)
      })
    })
  }
})
