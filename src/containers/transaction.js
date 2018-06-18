import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TransactionList from '../components/transaction-list';

class Transaction extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>

                <h1>Transaction cont parent to: </h1>
                <p>Will contain add expense/income</p>
                <TransactionList />
            </div>
        );
    }
}

export default Transaction;
