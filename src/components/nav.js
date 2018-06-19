import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import { Menu, Icon, Segment, Dropdown } from 'semantic-ui-react'

class Nav extends Component{
     constructor(){
        super();

        this.state={
            activeItem: "home"
        }
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='transactions' active={activeItem === 'transactions'} onClick={this.handleItemClick}>
          Transactions
        </Menu.Item>

        <Menu.Item
          name='eventPlanning'
          active={activeItem === 'eventPlanning'}
          onClick={this.handleItemClick}
        >
          Event Planning
        </Menu.Item>
        <Menu.Menu position='right'>
            <Dropdown  item icon="wrench" simple>
                <Dropdown.Menu>
                    <Dropdown.Item >
                        Logout
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Profile
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;
