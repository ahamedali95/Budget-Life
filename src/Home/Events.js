import React from "react";
import { Table } from 'semantic-ui-react';

const Events = (props) => {
  const rows = props.events.map((eventObj) => {
    const splittedDate = eventObj.date.slice(0, 10).split("-");
    const formattedDate = [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");

    return (
      <Table.Row key={eventObj.id}>
        <Table.Cell>{eventObj.name}</Table.Cell>
        <Table.Cell>${eventObj.current_savings}</Table.Cell>
        <Table.Cell>${eventObj.goal_amount}</Table.Cell>
        <Table.Cell>${(eventObj.goal_amount - eventObj.current_savings) < 0 ? 0 : eventObj.goal_amount - eventObj.current_savings}</Table.Cell>
        <Table.Cell>{formattedDate}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div>
      <h3>Latest Events</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <th>Name</th>
            <th>Savings</th>
            <th>Amount Saved</th>
            <th>Amount Needed</th>
            <th>Date</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Events;
