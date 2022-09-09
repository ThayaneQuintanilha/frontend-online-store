import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Card from './pages/Card';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/card" component={ Card } />
          <Route path="/about/:id" component={ About } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
