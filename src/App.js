import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/landing';
import Login from './components/login';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Signup} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
