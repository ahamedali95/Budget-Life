import React from "react";
import { Table } from 'semantic-ui-react';

const BillsCollection = (props) => {
  const rows = props.bills.reverse().map((billObj) => {
    return (
      <Table.Row key={billObj.id}>
      <Table.Cell>{billObj.description}</Table.Cell>
      <Table.Cell>${billObj.due_amount}</Table.Cell>
      <Table.Cell>{billObj.due_date}</Table.Cell>
      </Table.Row>
    );
  });

  return(
    <div style={{width: "500px"}}>
    <h3>Bills</h3>
    {
      props.bills.length > 0 ?
      <Table color="green">
        <Table.Header>
          <Table.Row>
            <th>Description</th>
            <th>Amount Due</th>
            <th>Due Date</th>
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

export default BillsCollection;
