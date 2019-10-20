import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper/index';
import Saved from './pages/Saved';
import Search from './pages/Search';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Search} />
        <Wrapper>
          <Route exact path="/search" component={Search} />
          <Route exact path="/save" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
