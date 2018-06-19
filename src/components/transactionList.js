import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

class TransactionList extends Component{
     constructor(){
        super();

        this.state={

        }
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
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>First</Label>
                    </Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                    <Table.Cell>Cell</Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan='4'>
                      <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron left' />
                        </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                          <Icon name='chevron right' />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </div>
        );
    }
}

export default TransactionList;
