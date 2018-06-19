import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'i', text: 'Income', value: 'income' },
  { key: 'e', text: 'Expense', value: 'expense' },
]
const categories = [
  { key: 'r', text: 'Restaurant', value: 'restaurant' },
  { key: 'phone', text: 'Phone Bill', value: 'phoneBill' },
]

class TransactionForm extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        <div id="transaction-form">
      <Form>

        <Form.Group >

          <Form.Field  id="formDate"control={Input} required type="date" label='Date' />
          <Form.Field id="formDescription" control={Input} label='Description' placeholder='Description' required/>
          <Form.Select id="formCategory" label='Category' options={categories} placeholder='Category' />
            <Form.Select id="formType" label='Type' options={options} placeholder='Type' required/>

            <Form.Field id="button" control={Button}>Add</Form.Field>
        </Form.Group>


      </Form>
  </div>
    )
  }
}

export default TransactionForm;
