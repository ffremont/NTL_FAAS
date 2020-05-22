import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hello from './views/hello';
import Login from './views/login';
import Private from './views/private';
import PrivateRoute from './components/private-route';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <Router>
          <Switch>
            <Route exact path="/hello" component={Hello} />
            <Route exact path="/" component={Hello} />

            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/cart" component={Private} />  
          </Switch>
        </Router>
    </div>
  );
}

export default App;
