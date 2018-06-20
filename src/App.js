import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer.js';
import Transaction from './containers/transactionContainer';
import Nav from './components/nav.js';
import LoginSignUpContainer from './containers/loginSignUpContainer.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Nav />
          <LoginSignUpContainer/>
          <HomeContainer />
          <Transaction />
      </div>
    );
  }
}

export default App;
