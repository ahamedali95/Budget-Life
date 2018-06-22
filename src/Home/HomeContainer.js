import React from "react";
import Bills from "./Bills.js";
import Events from "./Events.js";
import adapter from "../adapter.js";
// import Chart from 'chart.js';

//import BillContainer from "../Bill/BillContainer.js";
//import EventContainer from "./EventContainer.js";
// let myChart = new Chart(10);

class HomeContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      bills: [],
      events: []
    };
  }

  componentDidMount() {
    this.fetchBills();
  }

  fetchBills = () => {
    adapter.get("http://localhost:3001/api/v1/bills")
    .then(response => response.json())
    .then(data => {
      const latestBills = data.sort((billObj1, billObj2) => {
        return new Date(billObj1.due_date) - new Date(billObj2.due_date);
      }).slice(0, 3);

      this.setState({
        bills: latestBills
      }, () => {console.log("state"), console.log(this.state)});
    });
  }

  render() {
    return (
      <div>
         <div>
             <h1>Home</h1>
              <h1>Graph</h1>
              <Bills bills={this.state.bills}/>
              

          </div>
      </div>
    );
  }
}

export default HomeContainer;
