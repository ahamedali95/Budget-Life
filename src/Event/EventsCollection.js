import React from "react";
import Event from "./Event.js";
import {Card} from 'semantic-ui-react'

class EventsCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChangeAmount: false
    };
  }

  getCards = () => {
    return this.props.events.map((eventObj) => {
      // const splittedDate = eventObj.date.slice(0, 10).split("-");
      // const formattedDate = [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");

      return <Event event={eventObj} editEvent={this.props.editEvent}/>
    });
  }

  render() {
    return (
      <div style={{width: "500px"}}>
      <h3>Events</h3>
        <Card.Group >
          {this.getCards()}
        </Card.Group>
      </div>
    );
  }
}
export default EventsCollection;
