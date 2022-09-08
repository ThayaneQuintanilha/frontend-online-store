import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './pages/Home';
import Card from './pages/Card';
import Categorias from './components/Categorias';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route path="/card" component={ Card } />
        </Switch>
      </BrowserRouter>
      <Categorias />
    </div>
  );
}

export default App;
