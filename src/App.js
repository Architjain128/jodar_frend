import React from 'react'
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/landing';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Marketplace from './components/marketplace';
import Recprofile from './components/recprofile';
import Appprofile from './components/appprofile';
import Appliboard from './components/aapliboard';
import Example from './components/test1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Signup} exact/>
          <Route path="/appdash" component={Appliboard} exact/>
          <Route path="/dashboard" component={Dashboard} exact/>
          <Route path="/marketplace" component={Marketplace} exact/>
          <Route path="/recpro" component={Recprofile} exact/>
          <Route path="/apppro" component={Appprofile} exact/>
          <Route path="/test" component={Example} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
