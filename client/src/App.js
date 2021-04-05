<<<<<<< HEAD
import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
=======
import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
>>>>>>> c9fce104ee8458b832f891055dc7f1b39edaa9e2
