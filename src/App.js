import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainScreen } from './pages';
import Checkoutpage from './pages/CheckoutPage';

function App() {
  return (
    <BrowserRouter>
      <MainScreen />
      <Switch>
        <Route path="/checkout" component={Checkoutpage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
