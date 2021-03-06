import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar.js";
import HomeContainer from "./Home/HomeContainer.js";
import Transaction from "./Transaction/transactionContainer.js";
import BillContainer from "./Bill/BillContainer.js";
import EventContainer from "./Event/EventContainer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      isAuthenticated: false
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/home" component={HomeContainer}></Route>
            <Route exact path="/transactions" component={Transaction}></Route>
            <Route exact path="/event_plannings" component={EventContainer}></Route>
            <Route exact path="/bills" component={BillContainer}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
