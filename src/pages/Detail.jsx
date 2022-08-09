import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { addComment } from '../redux/modules/comments';
import { useState } from 'react';

import Comment from '../comment/Comment';

let number = 3;
const Detail = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoList);

  const new_todo = todos.filter((todo)=> todo.id == id)[0]
  // console.log(new_todo,{id});
  const initialState = {
    todoId:0,
    id: 0,
    title: '',
    content: '',
    createdAt: null,
  };

  const [comment, setcomment] = useState(initialState);

  const handleChangeState = (event) => {
    // const todo_id = 
    
    setcomment({
      ...comment,
      [event.target.name]: event.target.value, 
    });
   
    // console.log(event.target.name)
  };

  let todo_id = new_todo.id
  // let dataId = useRef(3);
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().getTime();
    
    if (comment.title.trim() === '' || comment.content.trim() === '') {
      return alert("모든 항목을 입력해주세요.");
    }

    dispatch(addComment({ ...comment, 
      id: number, createdAt ,todoId: todo_id,
    }));
    setcomment(initialState);
    // dataId.current++;
    number = number +1;
    
  };

  // useEffect(() => {
  //   dispatch(getTodoByID(id));
  // }, [dispatch, id]);

  return (
    <>
      <Layout>
        <Header />
        <DetailBox>
          <DetailNo>No. {new_todo.id} 🎂</DetailNo>
          <DetailTitle>{new_todo.title}</DetailTitle>
          <DetailContent>{new_todo.content}</DetailContent>
        </DetailBox>
        
        <div>
          <form onSubmit={handleSubmit}>
            <label >누구여
              <input 
                className='add-input'
                name='title'
                value={comment.title}
                onChange={handleChangeState}
                type='text'
              />
            </label>
            
            <label> 참견하기
              <input 
               className='add-input'
               name='content'
               value={comment.content}
               onChange={handleChangeState}
               type='text'
              />
            </label>
            <button onClick={()=>{
              
            }}>댓글남기기</button>
         
          </form>
         </div>
          <Comment id={todo_id}></Comment>
          
      </Layout>
    </>
  );
};

const DetailBox = styled.div`
  width: 500px;
  height: 300px;
  background-color: rgb(226, 228, 240);
  border-radius: 10px;
  margin: 50px auto;
  padding: 50px;
`;

const DetailNo = styled.div`
  margin-bottom: 10px;
`

const DetailTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 10px;
`;

const DetailContent = styled.div`
  font-size: 18px;
`

export default Detail;
