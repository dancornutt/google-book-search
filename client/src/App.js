import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from './pages/Search';
import Saved from './pages/Saved';
import Header from './components/Header';

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Header/>
          <Switch>
              <Route exact path="/" component={Search} />
              <Route path="/search" component={Search} />
              <Route path="/saved" component={Saved} />
          </Switch>
      </Router>
    </React.StrictMode>
  );
}

export default App;
