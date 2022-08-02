import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// const countModifier = () => {
//   return 'hello';
// };

const countModifier = (count = 0, action) => {
  // state = 0으로 default
  if (action.type === 'ADD') {
    return count + 1;
  } else if (action.type === 'MINUS') {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier); // reducer 함수 필요!

countStore.dispatch({ type: 'ADD' }); // 1
countStore.dispatch({ type: 'ADD' }); // 2
countStore.dispatch({ type: 'ADD' }); // 3
countStore.dispatch({ type: 'ADD' }); // 4
countStore.dispatch({ type: 'MINUS' }); // 3

console.log(countStore.getState()); // 3