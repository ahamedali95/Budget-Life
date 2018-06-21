import React from "react";
import { Table } from 'semantic-ui-react';

const EventsCollection = (props) => {
  const rows = props.events.map((eventObj) => {
    const splittedDate = eventObj.date.slice(0, 10).split("-");
    const formattedDate = [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");

    return (
      <Table.Row key={eventObj.id}>
      <Table.Cell>{eventObj.name}</Table.Cell>
      <Table.Cell>${eventObj.current_savings}</Table.Cell>
      <Table.Cell>${eventObj.goal_amount}</Table.Cell>
      <Table.Cell>{formattedDate}</Table.Cell>
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
            <th>Savings</th>
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
