import React, {Component} from "react"
import { Button, Form, Input } from "semantic-ui-react"
import adapter from "./../adapter";
import Categories from "../Helpers/categoryHelper.js";
let url = "http://localhost:3001/api/v1/transactions"

const options = [
  { key: "i", text: "Income", value: "income" },
  { key: "e", text: "Expense", value: "expense" }
];

class TransactionForm extends Component{
     constructor(props){
        super(props);
        this.state={
           date: "",
           description:"",
           category_id: null,
           transaction_type : null,
           amount : null,
           user_id: 1,
        }
    }

    handleChange = (e, {name, value}) => {
      let id = (e.target.id === "") ? e.target.parentElement.id : e.target.id
     if (typeof(e.target.name) === "undefined"){
        (name === "category_id") ?  (this.setState({[name]: id})) : (this.setState({[name]: value}, () => { console.log(this.state) }))
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
         // .then(transaction=>console.log(transaction, "what is"))
    }

  render() {
     let categories = Categories(this.props.categories)
    return (
        <div id="transaction-form">
      <Form onSubmit={this.handleSubmit}>

        <Form.Group >
          <Form.Field
             required
             id="formDate"
             onChange={this.handleChange}
             control={Input}
             name="date"
             type="date"
             label="Date" />
          <Form.Field
             required
             id="formDescription"
             onChange={this.handleChange}
             name="description"
             control={Input}
             label="Description"
             placeholder="Enter Description..."/>
          <Form.Select
             required
             id="formCategory"
             onChange={this.handleChange}
             name="category_id"
             label="Category"
             options={categories}
             placeholder="Category" />

          <Form.Select
             id="formType"
             onChange={this.handleChange}
             label="Transaction"
             required
             name="transaction_type"
             options={options}
             placeholder="Type"/>

          <Form.Field
             onChange={this.handleChange}
             id = "formAmount"
             label="Amount"
             type="number"
             min="1"
             step=".01"
             required
             name="amount"
             control={Input}
             placeholder="Enter Amount"/>

            <Form.Field id="formButton" control={Button}>Add</Form.Field>
        </Form.Group>
      </Form>
  </div>
    )
  }
}

export default TransactionForm;
