import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer.js';
import Transaction from './containers/transactionContainer';
import NavBar from './components/NavBar.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

          

          <HomeContainer />
          <Transaction />

      </div>
    );
  }
}

export default App;
