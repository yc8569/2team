const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';


// Action Creator
export const addComment = (payload) => {
  return {
    type: ADD_COMMENT,
    payload,
  };
};

export const deleteComment = (payload) => {
  return {
    type: DELETE_COMMENT,
    payload,
  };
};



// initial state
const initialState = {
  commentList: [
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
  comment: {
    todoId:"0",
    id: '0',
    title: '',
    content: '',
    createdAt: null,
  },
};

// 실제 처리되는 함수들
const comments = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        commentList: [...state.commentList, action.payload],
      };

    case DELETE_COMMENT:
      return{
        ...state,
        commentList: state.commentList.filter((comment) => comment.id !== action.payload),
      }  

    default:
      return state;
  }
};

export default comments;
