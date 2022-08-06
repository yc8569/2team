import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import { db } from './firebase';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  // 파이어스토어 연결부
  useEffect(() => {
    console.log(db);
  }, []);

  // axios 불러오기 확인용
  // axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchTodos = async () => {
    const { data } = await axios.get('http://localhost:3001/todoList');
    console.log(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);
  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          {/* 위 라우터 경로에 해당하지 않는 경우 아래 404로 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
