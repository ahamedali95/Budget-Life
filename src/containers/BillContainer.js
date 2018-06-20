import React, {Component} from 'react';
import adapter from "../adapter.js";
import BillForm from "../components/BillContainerComponents/BillForm.js";
import BillsCollection from "../components/BillContainerComponents/BillsCollection.js";

class BillContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      bills: []
    };
  }

  componentDidMount() {
    adapter.get("http://localhost:3001/api/v1/categories")
    .then(response => response.json())
    .then(data => {
      this.setState({
        categories: data
      });
    }).then(adapter.get("http://localhost:3001/api/v1/bills")
    .then(response => response.json())
    .then(data => {
      this.setState({
        bills: data
      });
    }));
  }

  fetchBills = () => {
    adapter.get("http://localhost:3001/api/v1/bills")
    .then(response => response.json())
    .then(data => {
      this.setState({
        bills: data
      });
    });
  }

  render() {
    return (
      <div className='rowC'>
        <h1>Bills</h1>
        <BillForm fetchBills={this.fetchBills} categories={this.state.categories}/>
        <BillsCollection bills={this.state.bills}/>
      </div>
    );
  }
}

export default BillContainer;
