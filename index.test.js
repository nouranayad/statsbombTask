import { List } from './index.js'

describe('List', () => {
  it('should create list', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true })
    const expected = [1, 2, 3, 4];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [4, 3, -1, 1, 2, 5, 0] })
    const expected = [-1, 0, 1, 2, 3, 4, 5];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should sort initial list items', () => {
    const list = List({ initial: [100, -100, 10, 9, 200, -300] })
    const expected = [-300, -100, 9, 10, 100, 200];
    const actual = list.items

    expect(actual).toEqual(expected)
  })

  it('should insert b into list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(5).items

    expect(actual).toEqual(expected)
  })
  it('should insert b into middle of list a', () => {
    const list = List({ initial: [1, 2, 4, 5], initialOrder: true  })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(3).items

    expect(actual).toEqual(expected)
  })
  it('should insert b into start of list a', () => {
    const list = List({ initial:  [2, 3,4, 5], initialOrder: true  })
    const expected = [1, 2, 3, 4, 5];
    const actual = list.insert(1).items

    expect(actual).toEqual(expected)
  })
  it('should remove b from list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 3];
    const actual = list.remove(4).items

    expect(actual).toEqual(expected)
  })
  it('should remove b from start of list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [2, 3,4];
    const actual = list.remove(1).items

    expect(actual).toEqual(expected)
  })
  it('should remove b from the middle of list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = [1, 2, 4];
    const actual = list.remove(3).items

    expect(actual).toEqual(expected)
  })
  it('should findIndex of b at list a', () => {
    const list = List({ initial: [1, 2, 3, 4], initialOrder: true  })
    const expected = 2;
    const actual = list.findIndex(3)
    expect(actual).toEqual(expected)
  })

  // PLEASE cover the rest of the methods/scenarios with tests
})
