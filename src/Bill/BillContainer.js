import React, {Component} from 'react';
import adapter from "../adapter.js";
import BillForm from "./BillForm.js";
import BillsCollection from "./BillsCollection.js";

class BillContainer extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      bills: []
    };
  }

  componentDidMount() {
    Promise.all([
      fetch("http://localhost:3001/api/v1/categories"),
      fetch("http://localhost:3001/api/v1/bills")
    ])
    .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
    .then(([data1, data2]) => this.setState({
      categories: data1,
      bills: data2
    }));
  }

  addNewBill = (billObj) => {
    this.setState({
      bills: [...this.state.bills, billObj]
    });
  }

  removeBill = (bill) => {
    adapter.delete(`http://localhost:3001/api/v1/bills/${bill.id}`)
    .then(response => response.json())
    .then(() => {
      console.log("state", this.state)
      const bills1 = this.state.bills.filter((billObj) => {
        return billObj.id !== bill.id
      });

      this.setState({
        bills: bills1
      });
    })
  }

  render() {
    return (
      <div id="billCont">
        <h1>Bills</h1>
        <BillForm addNewBill={this.addNewBill} categories={this.state.categories}/>
        <BillsCollection removeBill={this.removeBill} categories={this.state.categories} bills={this.state.bills}/>
      </div>
    );
  }
}

export default BillContainer;
