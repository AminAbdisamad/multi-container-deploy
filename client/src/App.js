import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import otherPage from './otherPage';
import Fib from './Fib';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="menu">
          <Link to="/">Home</Link>
          <Link to="/otherpage">The Other Page</Link>
        </header>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={otherPage} />
      </Router>
    </div>
  );
}

export default App;
