import React from 'react'
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import adapter from "./../adapter.js";
import { Form, Input, Label } from 'semantic-ui-react'

class EventForm extends React.Component{
   constructor(){
    super();

    this.state = {
      name: "",
      amount_needed: 50.00,
      savings: 50.00,
      date: moment()
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleChangeForNumbericInput1 = (value) => {
    this.setState({
      amount_needed: value
    }, () => console.log(this.state));
  }

  handleChangeForNumbericInput2 = (value) => {
    this.setState({
      savings: value
    }, () => console.log(this.state));
  }

  handleChangeForDatePicker = (event) => {
    const date = event._d.toDateString();

    this.setState({
      date: date
    }, () => console.log(this.state));
  }

  myFormat= (num) => {
    return num + '$';
  }

  handleSubmit = (event) => {
    const body = {
      date: this.state.date,
      name: this.state.name,
      current_savings: this.state.savings,
      goal_amount: this.state.amount_needed,
      user_id: 1,
    };

    adapter.post("http://localhost:3001/api/v1/event_plannings", body)
    .then(response => response.json())
    .then(data => {this.props.addNewEvent(data)})
    .then(this.resetForm);
  }

  resetForm = () => {
    this.setState({
      name: "",
      description: "",
      amount_needed: 50.00,
      savings: 50.00,
      date: moment()
    });
  }

  render() {
    return (
      <div id="eventForm">
        <Form  onSubmit={this.handleSubmit}>
          <h3>Add an Event</h3>

          <Form.Field>
            <Input label="Name" type="text" placeholder="Event Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Group >
            <Form.Field>
              <Label>Amount Needed</Label>
              <NumericInput format={this.myFormat} step={1.00} precision={2} min={1} max={9999999} value={this.state.amount_needed} onChange={this.handleChangeForNumbericInput1}/>
            </Form.Field>
            <Form.Field>
              <Label>Savings</Label>
              <NumericInput format={this.myFormat} step={1.00} precision={2} min={1} max={9999999} value={this.state.savings} onChange={this.handleChangeForNumbericInput2}/>
            </Form.Field>
            <Form.Field>
              <Label>Date</Label>
              <DatePicker selected={moment(this.state.date)} onChange={this.handleChangeForDatePicker} />
            </Form.Field>
          </Form.Group>
          <Form.Field control="button">Create Event</Form.Field>
        </Form>
      </div>
    );
  }
}

export default EventForm;
