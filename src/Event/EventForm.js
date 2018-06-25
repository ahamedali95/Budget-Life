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
      amount_needed: "",
      savings: "",
      date: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log("state for event form", this.state));
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
      amount_needed: "",
      savings: "",
      date: ""
    });
  }

  render() {
    return (
      <div id="eventForm">
        <Form onSubmit={this.handleSubmit}>
          <h3>Add an Event</h3>

          <Form.Group>
            <Form.Field>
              <Input
                required
                label="Name"
                type="text"
                placeholder="Event Name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Field>

            <Form.Field>
              <Input
                required
                id="formDate"
                value={this.state.date}
                onChange={this.handleChange}
                name="date"
                type="date"
                label='Date'
               />
            </Form.Field>
          </Form.Group>

          <Form.Group>
            <Form.Field>
              <Input
                onChange={this.handleChange}
                value={this.state.amount_needed}
                name="amount_needed"
                type="number"
                min="1"
                step="any"
                label="Amount Needed"
                placeholder="Enter amount due"
              />
            </Form.Field>

            <Form.Field>
              <Input
                onChange={this.handleChange}
                value={this.state.savings}
                name="savings"
                type="number"
                min="1"
                step="any"
                label="Savings"
                placeholder="Enter amount due"
              />
            </Form.Field>

            <Form.Field control="button">Create Event</Form.Field>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default EventForm;
