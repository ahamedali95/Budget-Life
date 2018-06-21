import React from "react";
import adapter from "../adapter.js";
import EventForm from "./EventForm.js";
import EventsCollection from "./EventsCollection.js";

class EventContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.fetchEvents();
  }

  fetchEvents = () => {
    adapter.get("http://localhost:3001/api/v1/event_plannings")
    .then(response => response.json())
    .then(data => {this.setState({
      events: data
    },() => console.log("Events", data))
  });
  }

  addNewEvent = (eventObj) => {
    this.setState({
      events: [...this.state.events, eventObj]
    });
  }

  editEvent = (eventObj) => {
    this.fetchEvents();
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <EventForm addNewEvent={this.addNewEvent}/>
        <EventsCollection editEvent={this.editEvent} events={this.state.events}/>
      </div>
    );
  }
}

export default EventContainer;
