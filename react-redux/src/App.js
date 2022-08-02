import { Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Home} />
        <Route path='/:id' component={Detail} />
      </Router>
    </div>
  );
}

export default App;
