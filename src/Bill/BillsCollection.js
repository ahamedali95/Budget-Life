import React, {Component} from "react";
import { Table } from 'semantic-ui-react';

class BillsCollection extends Component {
   constructor(props){
      super(props);
      this.state = {

      }
   }

   displayTransactions = () => {
      return (this.props.bills.map(bill=>{
         const category = this.props.categories.find(cat=>{
          return bill.category_id === cat.id
          })
       const date = bill.date.split("-")
       const mm = date[1]
       const dd = date[2].split("T")[0]
       const yyyy= date[0]

        return (
          <Table.Row key={bill.id}>
             <Table.Cell> {`${mm}/${dd}/${yyyy}`}</Table.Cell>
             <Table.Cell>{bill.description}</Table.Cell>
             <Table.Cell>{bill.due_amount}</Table.Cell>
             <Table.Cell>{category.name}</Table.Cell>
             <Table.Cell><i style={{color: "red"}} onClick={() => {this.props.removeBill(bill)}} className="window close icon"></i></Table.Cell>
          </Table.Row>
          )
       })
      )
   }

  render(){
     let transactions = this.displayTransactions()
     console.log("transactions output: ", transactions);
     return(
      <div id="billCollect">
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


      </div>
     )

 }


}

export default BillsCollection;

// {
//    props.bills.length > 0 ?
//    <div >

//    </div>
//    :
//    <h2>No Bills to Pay!</h2>
// }
