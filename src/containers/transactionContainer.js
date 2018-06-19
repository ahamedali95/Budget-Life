import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TransactionList from '../components/transactionList';
import { Radio } from 'semantic-ui-react'
import TransactionForm from '../components/transactionForm';

class Transaction extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
                <TransactionForm />
                <TransactionList />
            </div>
        );
    }
}

export default Transaction;
