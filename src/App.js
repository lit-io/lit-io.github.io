import React from 'react';
import Dash from './components/Dash';
import Header from './components/Header';
import Splash from './components/Splash/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App(props) {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Dash} />
        <Route path="/dashboard" component={Dash} />
      </div>
    </Router>
  );
}
