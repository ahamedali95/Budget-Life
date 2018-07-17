import React, {Component} from "react";
import { Table } from "semantic-ui-react";

let totalIncome = 0
let totalExpenses = 0
class TransactionList extends Component{
  constructor(props){
    super(props);
  }

  displayTransactions = () => {
    return  (this.props.transactions.map(row=>{
      this.totalAmounts(row.category, row.amount)
      const category = this.props.categories.find(cat=>{
        return row.category_id === cat.id
      })
      let date = row.date.split("-")
      let mm = date[1]
      let dd = date[2].split("T")[0]
      let yyyy= date[0]

      return  (
        <Table.Row key={row.id} id={row.id}>
        <Table.Cell> {`${mm}/${dd}/${yyyy}`} </Table.Cell>
        <Table.Cell>{row.description}</Table.Cell>
        <Table.Cell >{category.name}</Table.Cell>
        <Table.Cell >{row.transaction_type}</Table.Cell>

        <Table.Cell  style={styles.income}>{(row.transaction_type ==="income")? row.amount : null} </Table.Cell>
        <Table.Cell  style={styles.expense}>{(row.transaction_type ==="income")? null : row.amount} </Table.Cell>

        </Table.Row>)
      })
    )
  }
  totalAmounts = (category, amount) => {
    if (category==="income"){
      totalIncome += amount
    } else {
      totalExpenses += amount
    }
  }

  render() {
    let transactions = this.displayTransactions()
    return (
      <div>
        <Table id="transactionTable" selectable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell id="dateRow">Date</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell id="catRow">Category</Table.HeaderCell>
            <Table.HeaderCell  id="typeRow">Type</Table.HeaderCell>
            <Table.HeaderCell id="incomeRow">Income</Table.HeaderCell>
            <Table.HeaderCell id="expenseRow">Expense</Table.HeaderCell>
          </Table.Row>

        </Table.Header>
        <Table.Body>
          {transactions}
        </Table.Body>
      </Table>
      </div>
    );
  }
}

export default TransactionList;

const styles = {
  expense: {backgroundColor:'#e25170'},
  income: {backgroundColor:'#569d55'},
  other: {backgroundColor:'#fff'},
}
