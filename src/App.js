import React, { Component } from 'react';
import './App.css';
import Home from './components/home.js';
import Transaction from './containers/transactionContainer';
import Bills from './components/bills.js';
import Goals from './components/goals.js';
import Nav from './components/nav.js';
import LoginSignUpContainer from './containers/loginSignUpContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">

          <Nav />
          <LoginSignUpContainer/>
          <Home />
          <Transaction />
          <Bills />
          <Goals />

      </div>
    );
  }
}

export default App;
