import React from 'react';
import AdSpace from './components/AdSpace';
import Dashboard from './components/Dashboard/';
import Dash from './components/Dash'
import Header from './components/Header';
import Splash from './components/Splash/'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
}
from 'react-router-dom';
export default function App(props) {
  return (
    <Router>
    <div>
    <Header />
       <Switch>
    <Route exact path="/" component={Splash} />
    <Route path="/dashboard" component={Dash} />
    </Switch>
    </div>
    </Router>
  );
}
