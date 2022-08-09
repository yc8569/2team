import { legacy_createStore as createStore, combineReducers } from 'redux';
import todos from '../modules/todos.js';
import coments from '../modules/coments.js';

const rootReducer = combineReducers({
  todos, coments
}); // 다른 reducer들 추가로 있을 경우 말 그대로 combine 용도
const store = createStore(rootReducer);

export default store;
