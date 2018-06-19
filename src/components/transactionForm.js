import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

// const options = [
//   { key: 'i', text: 'Income', value: 'income' },
//   { key: 'e', text: 'Expense', value: 'expense' },
// ]
// const categories = [
//   { key: 'r', text: 'Restaurant', value: 'restaurant' },
//   { key: 'phone', text: 'Phone Bill', value: 'phoneBill' },
// ]

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

          <Form.Field width="5" control={Input} required type="date" label='Date' />
          <Form.Field width="8" control={Input} label='Description' placeholder='Description' required/>
          <Form.Field label='Category' control='select'>
            <option value='restaurant'>Restaurant</option>
            <option value='phoneBill'>Phone Bill</option>
              </Form.Field>
          <Form.Dropdown label='type' control='select'>
            <option value='income'>Income</option>
            <option value='expense'>Expense</option>
            </Form.Dropdown>

        </Form.Group>


        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
  </div>
    )
  }
}

export default TransactionForm;
