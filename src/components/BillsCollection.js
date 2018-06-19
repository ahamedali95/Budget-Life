import React from "react";

const BillsCollection = (props) => {
  const rows = props.bills.map((billObj) => {
    return (
      <tr>
        <td>{billObj.description}</td>
        <td>${billObj.due_amount}</td>
        <td>{billObj.due_date}</td>
      </tr>
    );
  });

  return(
    <div>
      <table>
        <tr>
          <th>Description</th>
          <th>Amount Due</th>
          <th>Due Date</th>
        </tr>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default BillsCollection;
