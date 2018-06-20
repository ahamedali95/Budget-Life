import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Menu, Icon, Segment, Dropdown } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
class NavBar extends Component{
     constructor(){
        super();

        this.state={
            activeItem: "home"
        }
    }
    handleClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
    const { activeItem } = this.state

    return (
      <Menu>
            <Menu.Item
                as={NavLink}
                to="/home"
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleClick}>
              <Icon name="home"/>Home
            </Menu.Item>

            <Menu.Item
                as={NavLink}
                to="/transactions"
                name='transactions' active={activeItem === 'transactions'} onClick={this.handleClick}>
              <Icon name="dollar sign"/>Transactions
            </Menu.Item>

        <Menu.Item
            as={NavLink}
            to="/event_plannings"
          name='eventPlanning'
          active={activeItem === 'eventPlanning'}
          onClick={this.handleClick}>
          <Icon name="calendar alternate"/>Event Planning
        </Menu.Item>

        <Menu.Item
            as={NavLink}
            to="/bills"
            name='bills'
            active={activeItem === 'bills'}
            onClick={this.handleClick}>
          <Icon name="payment"/>Bills
        </Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown  item icon="setting" simple>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        <Icon name="log out" color="red" value="logout"/>Logout
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <Icon name="user" color="blue" value="user"/>Profile
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default NavBar;
