import React from "react";
import { Table } from 'semantic-ui-react';

const Bills = (props) => {
  console.log("inside bills", props)
  const rows = props.bills.map((billObj) => {
    const splittedDate = billObj.due_date.slice(0, 10).split("-");
    const formattedDate = [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");

    // const category = props.categories.find((categoryObj) => {
    //   return categoryObj.id === billObj.category_id
    // }).name;
<<<<<<< HEAD
=======
    // <Table.Cell>{category}</Table.Cell>
    // <th>Category</th>
>>>>>>> 1578f7123776a4dc87cbf1a6b8f5c0f46cd7619c

    return (
      <Table.Row key={billObj.id}>
        <Table.Cell>{billObj.description}</Table.Cell>
        <Table.Cell>${billObj.due_amount}</Table.Cell>
<<<<<<< HEAD

=======
>>>>>>> 1578f7123776a4dc87cbf1a6b8f5c0f46cd7619c
        <Table.Cell>{formattedDate}</Table.Cell>
      </Table.Row>
    );
  });

  return (
    <div id="dashBills">
      <h3>Latest Bills</h3>
      <Table >
        <Table.Header>
          <Table.Row>
            <th>Description</th>
            <th>Amount Due</th>
<<<<<<< HEAD
            
=======
>>>>>>> 1578f7123776a4dc87cbf1a6b8f5c0f46cd7619c
            <th>Due Date</th>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Bills;
