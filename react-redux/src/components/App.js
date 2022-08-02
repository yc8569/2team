import { Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Detail />} />
      </Router>
    </div>
  );
}

export default App;
