const ADD_COMENT = 'ADD_COMENT';
const DELETE_COMENT = 'DELETE_COMENT';


// Action Creator
export const addComent = (payload) => {
  return {
    type: ADD_COMENT,
    payload,
  };
};

export const deleteComent = (payload) => {
  return {
    type: DELETE_COMENT,
    payload,
  };
};



// initial state
const initialState = {
  comentList: [
    {
      todoId:1,
      id: 1,
      title: '작성자',
      content: '댓글입니당',
      createdAt: 1659311283308,
    },
    {
      todoId:1,
      id: 2,
      title: '작성자라니까2',
      content: '개념 노트 정리하기',
      createdAt: 1659341238308,
    },
  ],
  coment: {
    todoId:"0",
    id: '0',
    title: '',
    content: '',
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const coments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMENT:
      return {
        ...state,
        comentList: [...state.comentList, action.payload],
      };

    case DELETE_COMENT:
      return{
        ...state,
        comentList: state.comentList.filter((coment) => coment.id !== action.payload),
      }  

    default:
      return state;
  }
};

export default coments;
