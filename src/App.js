import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';
import LoginSignUpContainer from './LoginSignUp/loginSignUpContainer.js';
import HomeContainer from './Home/HomeContainer.js';
import Transaction from './Transaction/transactionContainer';
import BillContainer from './Bill/BillContainer';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class App extends Component {
  render() {
      // <LoginSignUpContainer/>
      // <HomeContainer />
      // <Transaction />
      // <BillContainer/>
    return (
      <div className="App">

          <Router>
              <div>
              <NavBar />
              <Route exact path="/" component={LoginSignUpContainer}></Route>
              <Route exact path="/transactions" component={Transaction}></Route>
              <Route exact path="/home" component={HomeContainer}></Route>

              </div>
          </Router>
      </div>
    );
  }
}

export default App;
