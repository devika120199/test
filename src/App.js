import React from "react";
import './App.css';
import Login from './login';
import Welcome from './welcome';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (

    <div className = "App">
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path ="/welcome" component={Welcome} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
