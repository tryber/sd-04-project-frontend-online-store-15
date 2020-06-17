import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Initial } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Initial} />
    </Switch>
  );
}

export default App;
