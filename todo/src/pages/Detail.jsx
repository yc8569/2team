import Layout from '../components/layout/Layout';
import Header from '../components/header/Header';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';
import { addComent } from '../redux/modules/todos';
import { useState } from 'react';

import Coment from '../coment/Coment';

let number = 0;
const Detail = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);
  // console.log(todo);

  const initialState = {
    id: 0,
    title: '',
    content: '',
    createdAt: null,
  };

  const [coment, setcoment] = useState(initialState);

  const handleChangeState = (event) => {
    setcoment({
      ...coment,
      [event.target.name]: event.target.value,
    });
    console.log(setcoment)
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().getTime();
    
    if (coment.title.trim() === '' || coment.content.trim() === '') return;
    // setTodos([...todos, { ...todo, id: num, createdAt }]);
    dispatch(addComent({ ...coment, id: dataId.current, createdAt }));
    setcoment(initialState);
    dataId.current++;
  };

  useEffect(() => {
    dispatch(getTodoByID(id));
  }, [dispatch, id]);

  return (
    <>
      <Layout>
        <Header />
        <DetailBox>
          <DetailNo>No. {todo.id} 🎂</DetailNo>
          <DetailTitle>{todo.title}</DetailTitle>
          <DetailContent>{todo.content}</DetailContent>
        </DetailBox>
        
        <div>
          <form onSubmit={handleSubmit}>
            <label >누구여
              <input 
                className='add-input'
                name='title'
                value={coment.title}
                onChange={handleChangeState}
                type='text'
              />
            </label>
            
            <label> 참견하기
              <input 
               className='add-input'
               name='content'
               value={coment.content}
               onChange={handleChangeState}
               type='text'
              />
            </label>
            <button onClick={()=>{
              
            }}>댓글남기기</button>
         
          </form>
         </div>
          <Coment></Coment>
          
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
