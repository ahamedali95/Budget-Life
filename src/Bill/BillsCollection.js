import React, {Component} from "react";
import { Table } from 'semantic-ui-react';

class BillsCollection extends Component {
  constructor(props){
    super(props);
  }

  getFormattedDate = (billDate) => {
    console.log("DATE", billDate)
    const splittedDate = billDate.slice(0, 10).split("-");
    return [splittedDate[1], splittedDate[2], splittedDate[0]].join("/");
  }

  displayTransactions = () => {
    return (this.props.bills.map(bill => {
      const category = this.props.categories.find(cat => {
        return bill.category_id === cat.id
      });

      return (
        <Table.Row key={bill.id}>
          <Table.Cell> {this.getFormattedDate(bill.date)}</Table.Cell>
          <Table.Cell>{bill.description}</Table.Cell>
          <Table.Cell>${bill.amount_due}</Table.Cell>
          <Table.Cell>{category.name}</Table.Cell>
          <Table.Cell><i style={{color: "red"}} onClick={() => {this.props.removeBill(bill)}} className="window close icon"></i></Table.Cell>
        </Table.Row>
      );
    }));
  }

  render(){
    let transactions = this.displayTransactions();

    return (
      <div id="billCollect">
       {this.props.bills.length > 0 ?
       <Table>
         <Table.Header>
           <Table.Row>
             <Table.HeaderCell id="billDueDate"> Due Date</Table.HeaderCell>
             <Table.HeaderCell>Description</Table.HeaderCell>
             <Table.HeaderCell id="billAmountDue">Amount Due</Table.HeaderCell>
             <Table.HeaderCell id="billCategory">Category</Table.HeaderCell>
             <Table.HeaderCell id="billDelete">Del</Table.HeaderCell>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {transactions}
         </Table.Body>
       </Table>
       :
       <h2>No Bills to Pay!</h2>}
      </div>
    );
  }
}

export default BillsCollection;
