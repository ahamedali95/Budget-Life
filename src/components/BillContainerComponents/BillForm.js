import React from "react";
import CategorySelection from "./CategorySelection.js";
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import adapter from "../../adapter.js";
import { Form, Label, Input } from 'semantic-ui-react'

class BillForm extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       due_amount: 50.00,
       category: "",
       description: "",
       due_date: moment()
     };
   }

   handleChangeForNumbericInput = (value) => {
     this.setState({
       due_amount: value
     }, () => console.log(typeof(this.state)));
   }

   handleChangeForDatePicker = (event) => {
     const date = event._d.toDateString();

     console.log(date)
     this.setState({
       due_date: date
     }, () => console.log(this.state));
   }

   handleChange = (event) => {
     this.setState({
       [event.target.name]: event.target.value
     }, () => console.log(this.state));
   }

  myFormat= (num) => {
    return num + '$';
  }

  getOption = (event) => {
    this.setState({
      category: event.target.value
    },() => console.log(this.state));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //find the category id because bill cannot exist without category id
    const categoryId = this.props.categories.find((categoryObj) => {
      return categoryObj.name === this.state.category;
    }).id;

    const bodyForBill = {
      due_date: this.state.due_date,
      due_amount: this.state.due_amount,
      name: "electricity bill",
      description: this.state.description,
      user_id: 1,
      category_id: categoryId
    };

    adapter.post("http://localhost:3001/api/v1/bills", bodyForBill)
    .then(response => response.json())
    .then(data => {this.props.fetchBills()})
    .then(() => {this.resetForm()});
  }

  resetForm = () => {
    this.setState({
      due_amount: 50.00,
      category: "",
      description: "",
      due_date: moment()
    });
  }

   render() {
     return(
       <div style={{width: "500px"}}>
         <h3>Add a Bill</h3>

         <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input label="Description" type="text" placeholder="Add a description" name="description" value={this.state.description} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <Label>Category</Label>
            <CategorySelection categories={this.props.categories} getOption={this.getOption}/>
          </Form.Field>
          <Form.Group style={{width: "400px"}}>
            <Form.Field>
              <Label>Amount</Label>
              <NumericInput format={this.myFormat} step={0.10} precision={2} min={1} max={9999999} value={this.state.due_amount} onChange={this.handleChangeForNumbericInput}/>
            </Form.Field>
            <Form.Field>
              <Label>Date</Label>
              <DatePicker selected={moment(this.state.due_date)} onChange={this.handleChangeForDatePicker} />
            </Form.Field>
          </Form.Group>
          <Form.Field control="button">Create Bill</Form.Field>
         </Form>
       </div>
     );
   }
}

export default BillForm;
