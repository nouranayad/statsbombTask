import TimSort from 'timsort'

const getValue = (o, attr) => attr ? o[attr] : o

const sort = (list, attr) => {
  // SHOULD IMPLEMENT
  TimSort.sort(list, (a, b) => getValue(a, attr) - getValue(b, attr))
  return list
}

const findIndex = (list, attr) => value => {
  // SHOULD IMPLEMENT
  let start = 0
  let end = list.length - 1
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    const mid = Math.floor((start + end) / 2)
    // If element is present at mid, return True
    if (list[mid] === value) return mid

    // Else look in left or right half accordingly
    else if (list[mid] < value) {
      start = mid + 1
    } else { end = mid - 1 }
  }

  return -1
}
function insert (list, attr, item) {
  let i
  // Shift all greater values to the right
  for (i = list.length - 1; (i >= 0 && list[i] > item); i--) { list[i + 1] = list[i] }
  // Insert the item after the value that is smaller than it
  list[i + 1] = item
  return list
}

const remove = (list, attr, value) => {
  // SHOULD IMPLEMENT
  let start = 0
  let end = list.length - 1
  // Iterate while start not meets end
  while (start <= end) {
    // Find the mid index
    const mid = Math.floor((start + end) / 2)
    // If element is present at mid, return True
    if (list[mid] === value) {
      list.splice(mid, 1)
      remove(list, attr, value)
      return list
    } 
    // Else look in left or right half accordingly
    else if (list[mid] < value) { start = mid + 1 } else { end = mid - 1 }
  }
  return list
}

export const List = ({ attr, initial, initialOrder }) => {
  const items = initialOrder ? initial : sort(initial, attr)
  return {
    items,
    findIndex: findIndex(items, attr),
    remove: value => List({
      attr,
      initial: remove(items, attr, value),
      initialOrder: true
    }),

    insert: item => List({
      attr,
      initial: insert(items, attr, item),
      initialOrder: true
    })
  }
}
