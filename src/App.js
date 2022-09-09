import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import Categorias from './components/Categorias';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/card" component={ Card } />
        </Switch>
      </BrowserRouter>
      <Categorias />
    </div>
  );
}

export default App;
