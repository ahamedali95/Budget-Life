import React from "react";
import { Table } from 'semantic-ui-react';

const BillsCollection = (props) => {
  const rows = props.bills.map((billObj) => {
    const splittedDate = billObj.due_date.slice(0, 10).split("-");
    const formattedDate = [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");

    const category = props.categories.find((categoryObj) => {
      return categoryObj.id === billObj.category_id
    }).name;

    return (
      <Table.Row key={billObj.id}>
        <Table.Cell>{billObj.description}</Table.Cell>
        <Table.Cell>${billObj.due_amount}</Table.Cell>
        <Table.Cell>{category}</Table.Cell>
        <Table.Cell>{formattedDate}</Table.Cell>
        <Table.Cell><i style={{color: "red"}} onClick={() => {props.removeBill(billObj)}} className="window close icon"></i></Table.Cell>
      </Table.Row>
    );
  });

  return(
    <div style={{width: "500px"}}>
    {
      props.bills.length > 0 ?
      <div>
        <h3>Bills</h3>
        <Table color="green">
          <Table.Header>
            <Table.Row>
              <th>Description</th>
              <th>Amount Due</th>
              <th>Category</th>
              <th>Due Date</th>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
      </div>
      :
      <h2>No Bills to Pay!</h2>
    }
    </div>
  );
}

export default BillsCollection;
