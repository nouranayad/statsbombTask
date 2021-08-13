import { pipe, always, applySpec } from 'ramda';

const getValue = (o, attr) => attr ? o[attr] : o

const sort = (list, attr) => {
  // SHOULD OPTIMIZE
  // console.log("henaa",getValue(list[0],'value'))
  return list.sort((a, b) => getValue(a, attr) - getValue(b, attr));
};

const findIndex = (list, attr) => value => {
  // SHOULD OPTIMIZE
  
  return list.findIndex(i => getValue(i, attr) === value);
}

const insert = (list, attr, item) => {
  // SHOULD OPTIMIZE
  return [...list, item];
}

const remove = (list, attr, value) => {
  // SHOULD OPTIMIZE
  return list.filter(i => getValue(i) !== value);
}

export const List = ({ attr, initial, initialOrder}) => {
  const items = initialOrder ? initial : sort(initial, attr);

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
      // You should reverse this bool if your insertion preserve order
      initialOrder: false
    })
  }
}
// const list
