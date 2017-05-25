import React, { Component } from 'react';
import logo from './head.png';
import './App.css';
import Checkbox from './Checkbox/Checkbox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mark's Super Cool Checkbox</h2>
          <h5>OMG it's a checkbox</h5>
        </div>
        <Checkbox labelText={'Hi I\'m a label'}/>
      </div>
    );
  }
}

export default App;
