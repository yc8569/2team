import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import { db } from './firebase';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(db);
  }, []);

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
