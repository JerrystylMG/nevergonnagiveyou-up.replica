// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Subdomain from './components/Subdomain';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/subdomain" component={Subdomain} />
      </Switch>
    </Router>
  );
};

export default App;
