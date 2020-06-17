import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Initial, Details } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
