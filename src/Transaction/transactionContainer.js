import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TransactionList from './transactionList';
import TransactionForm from './transactionForm';
// import { Radio } from 'semantic-ui-react'
// let dateFormat = require('dateformat');
// let now = new Date()
let url = "http://localhost:3001/api/v1/"


class Transaction extends Component{
     constructor(){
        super();

        this.state={
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

    // handleSubmit = (e) => {
    //    let date = e.target.date.value
    //    let description = e.target.description.value
    //    let category= e.target.description.value
    //    let type = e.target.description.value
    //    console.log(date, description, category, type);
    // }
    addNewTransaction = (newTransaction) => {
      this.setState({transactions: [...this.state.transactions, newTransaction]},() => console.log(this.state))
    }
    render() {
        return (
            <div id="transactionCont">
                <TransactionForm
                   categories={this.state.categories}
                   addNewTransaction={this.addNewTransaction}
                   onClick={this.handleSubmit}/>
                <TransactionList
                   categories={this.state.categories}
                   transactions={this.state.transactions}/>
            </div>
        );
    }
}

export default Transaction;
