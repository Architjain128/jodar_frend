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
import Recliboard from './components/recliboard';
import Dashyy from "./components/recappdash";
import Jobsop from "./components/jobsop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/signup" component={Signup} exact/>
          <Route path="/dashboard" component={Appliboard} exact/>
          <Route path="/marketplace" component={Recliboard} exact/>
          <Route path="/appdash" component={Dashboard} exact/>
          <Route path="/recdash" component={Marketplace} exact/>
          <Route path="/recpro" component={Recprofile} exact/>
          <Route path="/apppro" component={Appprofile} exact/>
          <Route path="/joblist" component={Dashyy} exact/>
          <Route path="/applyjob" component={Jobsop} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
