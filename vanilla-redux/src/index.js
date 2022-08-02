const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

// number.innerText = count;
// 이 상태로는 한 번만 innerText 되고 끝이라 함수 만들어야 됨
const updateText = () => {
  number.innerText = count;
};


const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
