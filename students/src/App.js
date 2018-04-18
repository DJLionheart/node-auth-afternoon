import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';

import Login from './components/Login/Login'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Atomic Student Portal</h1>
        </header>
        <switch>
          <Route exact path="/" component={ Login }/>
        </switch>
      </div>
    );
  }
}

export default App;
