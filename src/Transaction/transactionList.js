import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
// import adapter from './../adapter';

class TransactionList extends Component{
     constructor(props){
        super(props);

    }


    render() {
        return (
            <div>
            <Table id="transactionTable" celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Date</Table.HeaderCell>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                    <Table.HeaderCell>Type</Table.HeaderCell>
                    <Table.HeaderCell>Amount</Table.HeaderCell>

                  </Table.Row>
                </Table.Header>

                <Table.Body>
                   {this.props.transactions.map(row=>{
                      let date = row.date.split("-")
                      let mm = date[1]
                      let dd = date[2].split("T")[0]
                      let yyyy= date[0]
                     return  (<Table.Row key={row.id} id={row.id}>
                         <Table.Cell>{`${mm}/${dd}/${yyyy}`}</Table.Cell>
                         <Table.Cell>{row.description}</Table.Cell>
                         <Table.Cell>{row.category_id}</Table.Cell>
                         <Table.Cell>{row.transaction_type}</Table.Cell>
                         <Table.Cell>{ (row.transaction_type) === "income" ? row.amount : (row.amount)} </Table.Cell>

                    </Table.Row>)
                   })

                     }

                </Table.Body>


              </Table>
            </div>
        );
    }
}

export default TransactionList;
