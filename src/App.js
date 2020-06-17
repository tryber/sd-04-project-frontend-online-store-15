import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { MainScreen, Cart, Details } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/shopCart" component={Cart} />
        <Route path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
