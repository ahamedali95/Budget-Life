import React, {Component} from "react";
import TransactionList from "./transactionList";
import TransactionForm from "./transactionForm";
let url = "http://localhost:3001/api/v1/"

class Transaction extends Component{
  constructor() {
    super();

    this.state= {
      transactions:[],
      categories:[]
    }
  }

  componentDidMount() {
    console.log(`${url}transactions`);
    Promise.all([
      fetch(`${url}transactions`),
      fetch(`${url}categories`)
    ])
    .then(([res1,res2])=>Promise.all([res1.json(), res2.json()]))
    .then(([transactions,categories])=>this.setState({
      transactions,
      categories
    },()=>{console.log(this.state)}))

  }

  addNewTransaction = (newTransaction) => {
    this.setState({transactions: [...this.state.transactions, newTransaction]},() => console.log(this.state))
  }
  render() {
    return (
      <div id="transactionCont">
      <TransactionForm
        categories={this.state.categories}
        addNewTransaction={this.addNewTransaction}
        onClick={this.handleSubmit}
      />
      <TransactionList
        categories={this.state.categories}
        transactions={this.state.transactions}
      />
      </div>
    );
  }
}

export default Transaction;
