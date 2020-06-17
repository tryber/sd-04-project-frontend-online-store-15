import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Initial } from './pages';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Initial} />
        <MainScreen />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
