import React from 'react'
import NumericInput from 'react-numeric-input';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Input, Label } from 'semantic-ui-react'

class EventForm extends React.Component{
   constructor(){
    super();

    this.state = {
      name: "",
      description: "",
      amount_needed: 50.00,
      date: moment()
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleChangeForNumbericInput = (value) => {
    this.setState({
      amount_needed: value
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

  render() {
    return (
      <div>
        <Form style={{width: "500px"}} onSubmit={this.props.fetchEvents}>
          <h3>Add an Event</h3>

          <Form.Field>
            <Input label="Name" type="text" placeholder="Event Name" name="name" value={this.state.name} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <Input label="Description" type="text" placeholder="Add a description" name="description" value={this.state.description} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Group style={{width: "400px"}}>
            <Form.Field>
              <Label>Amount Needed</Label>
              <NumericInput format={this.myFormat} step={1.00} precision={2} min={1} max={9999999} value={this.state.amount_needed} onChange={this.handleChangeForNumbericInput}/>
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
