import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import StudentList from './components/StudentList/StudentList';

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
        <Switch>
          <Route exact path="/" component={ Login }/>
          <Route path="/students" component={ StudentList } />
        </Switch>
      </div>
    );
  }
}

export default App;
