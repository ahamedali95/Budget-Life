import React from "react";
import {Card} from 'semantic-ui-react';
import NumericInput from 'react-numeric-input';
import adapter from "../adapter.js";

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      savings: 50
    }
  }

  showInput = (event) => {
    this.setState({
      isClicked: true
    });
  }

  handleChangeForNumbericInput = (value) => {
    this.setState({
      savings: value
    }, () => console.log(this.state));
  }

  updateSavings = (event) => {
    this.props.event.current_savings = this.state.savings.toString();

    adapter.patch(`http://localhost:3001/api/v1/event_plannings/${this.props.event.id}`, this.props.event)
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => this.props.editEvent(this.props.event))
    .then(() => {
      this.setState({
        isClicked: false
      });
    })
  }

  myFormat= (num) => {
    return num + '$';
  }

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>{this.props.event.name}</Card.Header>
          <Card.Meta>${this.props.event.goal_amount}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Header>Amount Saved</Card.Header>
          {this.state.isClicked ?
            <div>
              <NumericInput format={this.myFormat} step={1.00} precision={2} min={1} max={9999999} value={this.state.savings} onChange={this.handleChangeForNumbericInput}/>
              <button onClick={this.updateSavings}>Update Savings</button>
            </div>
            :
            <Card.Header onClick={this.showInput}>${this.props.event.current_savings}</Card.Header>
          }
          <Card.Header>Amount Needed</Card.Header>
          <Card.Header>${(this.props.event.goal_amount - this.props.event.current_savings) < 0 ? 0 : this.props.event.goal_amount - this.props.event.current_savings}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

export default Event;
