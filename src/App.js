import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav.js';
import DisplayContainer from './containers/display-container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          
          <DisplayContainer />


      </div>
    );
  }
}

export default App;
