import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

// const countModifier = () => {
//   return 'hello';
// };

const countModifier = (state = 0) => { // state = 0으로 default
  // console.log(state);
  return state;
};

const countStore = createStore(countModifier); // reducer 함수 필요!
console.log(countStore.getState());