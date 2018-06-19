import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TransactionList from '../components/transactionList';
import { Radio } from 'semantic-ui-react'
import TransactionForm from '../components/transactionForm';
let dateFormat = require('dateformat');
let now = new Date()

class Transaction extends Component{
     constructor(){
        super();

        this.state={
            date: dateFormat(now,"mm,dd, yyyy"),
            description:null,
            category: null,
            type: "income",
        }
    }
    handleSubmit = (e) => {
       let date = e.target.date.value
       let description = e.target.description.value
       let category= e.target.description.value
       let type = e.target.description.value
       console.log(date, description, category, type);
    }
    render() {
        return (
            <div>
                <TransactionForm onClick={this.handleSubmit}/>
                <TransactionList />
            </div>
        );
    }
}

export default Transaction;
