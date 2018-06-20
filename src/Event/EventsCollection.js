import React from "react";
import { Table } from 'semantic-ui-react'

const EventsCollection = (props) => {
  const rows = props.events.map((eventObj) => {
    return (
      <Table.Row key={eventObj.id}>
      <Table.Cell>{eventObj.name}</Table.Cell>
      <Table.Cell>{eventObj.description}</Table.Cell>
      <Table.Cell>${eventObj.amount_needed}</Table.Cell>
      <Table.Cell>{eventObj.date}</Table.Cell>
      </Table.Row>
    );
  });

  return(
    <div style={{width: "500px"}}>
    <h3>Events</h3>
    {
      props.events.length > 0 ?
      <Table color="red">
        <Table.Header>
          <Table.Row>
            <th>Name</th>
            <th>Description</th>
            <th>Amount Needed</th>
            <th>Date</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
      :
      null
    }
    </div>
  );
}

export default EventsCollection;
