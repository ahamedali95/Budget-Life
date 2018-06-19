import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TransactionList from '../components/transaction-list';
import { Radio } from 'semantic-ui-react'


class Transaction extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
                <form action="">
                  <input type="radio" name="Expense" value="Expense"/>
                  <label htmlFor="Expense"> Expense </label>
                  <input type="radio" name="Income" value="Income"/>
                  <label htmlFor="Income"> Income</label>
                  <br/><br/>
                  <label htmlFor="date">Date </label>
                  <input type="date"/> <br/> <br/>
                  <label htmlFor="description">Description </label>
                  <input name="description" type="text"/>
                  
                </form>


                <TransactionList />
            </div>
        );
    }
}

export default Transaction;
