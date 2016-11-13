const { Node } = require('../lib/00-utils')
const {
  push,
  buildOneTwoThree,
  buildNodes,
  buildNodesV2,
  buildNodesV3,
} = require('../lib/01-push-and-build-one-two-three')

describe('01-push-and-build-one-two-three', () => {
  describe('push', () => {
    it('should be able to create a new linked list.', () => {
      const list = push(null, 1)
      expect(list.data).toEqual(1)
      expect(list.next).toEqual(null)
    })

    it('should be able to prepend a node to an existing node.', () => {
      const list = push(new Node(1), 2)
      expect(list.data).toEqual(2)
      expect(list.next.data).toEqual(1)
      expect(list.next.next).toEqual(null)
    })
  })

  describe('buildOneTwoThree', () => {
    it('should build a linked list 1 -> 2 -> 3 -> null', () => {
      const list = buildOneTwoThree()
      expect(list.data).toEqual(1)
      expect(list.next.data).toEqual(2)
      expect(list.next.next.data).toEqual(3)
      expect(list.next.next.next).toEqual(null)
    })
  })

  createBuildNodesTests(buildNodes)
  createBuildNodesTests(buildNodesV2)
  createBuildNodesTests(buildNodesV3)

  function createBuildNodesTests(fn) {
    describe(fn.name, () => {
      it('should return null for empty data', () => {
        expect(buildNodes()).toEqual(null)
        expect(buildNodes(null)).toEqual(null)
        expect(buildNodes([])).toEqual(null)
      })

      it('should build a linked list', () => {
        const list = buildNodes([1, 2, 3])
        expect(list.data).toEqual(1)
        expect(list.next.data).toEqual(2)
        expect(list.next.next.data).toEqual(3)
        expect(list.next.next.next).toEqual(null)
      })
    })
  }
})
