import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Button, Form, Input } from 'semantic-ui-react'
// let dateFormat = require('dateformat');
import adapter from './../adapter';
// let now = new Date()
let url = "http://localhost:3001/api/v1/transactions"

const options = [
  { key: 'i', text: 'Income', value: 'income' },
  { key: 'e', text: 'Expense', value: 'expense' }]
const categories = [
  { key: 'r', text: 'Restaurant', value: 'restaurant' },
  { key: 'phone', text: 'Phone Bill', value: 'phoneBill' }]

class TransactionForm extends Component{
     constructor(props){
        super(props);
        this.state={
           date: "",
           description:"",
           category_id: 1,
           transaction_type : null,
           amount : null,
           user_id: 1,
        }
    }
    handleChange = (e, {name, value}) => {

     if (typeof(e.target.name) === "undefined"){
        this.setState({
           [name]: value}, () => {
             console.log(this.state)
          })
       } else {
          this.setState({[e.target.name] : e.target.value}, () => {
             console.log(this.state)}
          )
       }
    }

    handleSubmit = (e) => {
      console.log(this.state);
      e.preventDefault()
      let body = this.state
      adapter.post(url,body)
         .then(response=>response.json())
         .then(transaction=>this.props.addNewTransaction(transaction))


    }

  render() {
    return (
        <div id="transaction-form">
      <Form onSubmit={this.handleSubmit}>

        <Form.Group >
          <Form.Field  onChange={this.handleChange} id="formDate"control={Input} name="date" type="date" label='Date' />
          <Form.Field id="formDescription" onChange={this.handleChange} name="description" control={Input} label='Description' placeholder='Enter Description...'/>
          <Form.Select
             id="formCategory"
             onChange={this.handleChange}
             name="category_id"
             label='Category'
             options={categories}
             placeholder='Category' />

          <Form.Select
             id="formType"
             onChange={this.handleChange}
             label='transaction'
             name="transaction_type"
             options={options}
             placeholder='Type'/>

          <Form.Field
             onChange={this.handleChange}
             id = "formAmount"
             label='Amount'
             name="amount"
             control={Input}
             placeholder='Enter Amount'/>

            <Form.Field id="formButton" control={Button}>Add</Form.Field>


        </Form.Group>


      </Form>
  </div>
    )
  }
}

export default TransactionForm;
