import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Login from './components/login';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/feed' component={Home} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
