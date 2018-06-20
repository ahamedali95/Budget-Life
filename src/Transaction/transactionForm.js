import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Button, Form, Input } from 'semantic-ui-react'
let dateFormat = require('dateformat');
let now = new Date()
const options = [
  { key: 'i', text: 'Income', value: 'income' },
  { key: 'e', text: 'Expense', value: 'expense' },
]
const categories = [
  { key: 'r', text: 'Restaurant', value: 'restaurant' },
  { key: 'phone', text: 'Phone Bill', value: 'phoneBill' },
]

class TransactionForm extends Component{
     constructor(props){
        super(props);
        this.state={
            date: dateFormat(now,"mm,dd, yyyy")
        }
    }
    handleChange = (e, { value }) => this.setState({ value })

  render() {
    // const { value } = this.state
    return (
        <div id="transaction-form">
      <Form onSubmit={this.props.onClick}>

        <Form.Group >

          <Form.Field  id="formDate"control={Input} name="date" type="date" label='Date' placeholder={this.state.date}/>
          <Form.Field id="formDescription" name="description" control={Input} label='Description' placeholder='Description'/>
          <Form.Select id="formCategory" name="category" label='Category' options={categories} placeholder='Category' />
            <Form.Select id="formType" label='Type' name="type" options={options} placeholder='Type'/>

            <Form.Field id="formButton" control={Button}>Add</Form.Field>
        </Form.Group>


      </Form>
  </div>
    )
  }
}

export default TransactionForm;
