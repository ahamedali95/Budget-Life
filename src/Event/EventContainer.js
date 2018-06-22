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
    .then(data => {
      //sort this data because after successful path, this is causing a rerender which
      //actually changes the order in which the card appears. LOOKS AT THE API!!
      const sortedData = data.sort((eventObj1, eventObj2) => {
        return eventObj1.id - eventObj2.id
      });

      this.setState({
        events: sortedData
      }, () => console.log("eventContainer state", this.state))
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

  removeEvent = (event) => {
    adapter.delete(`http://localhost:3001/api/v1/event_plannings/${event.id}`)
    .then(response => response.json())
    .then(() => {
      console.log("state", this.state)
      const events1 = this.state.events.filter((eventObj) => {
        return event.id !== eventObj.id
      });

      this.setState({
        events: events1
      });
    })
  }

  render() {
    return (
      <div id="eventCont">
        <h1>Events</h1>
        <EventForm addNewEvent={this.addNewEvent}/>
        <EventsCollection removeEvent={this.removeEvent} editEvent={this.editEvent} events={this.state.events}/>
      </div>
    );
  }
}

export default EventContainer;
