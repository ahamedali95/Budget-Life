import React, {Component} from 'react'
//import PropTypes from 'prop-types'

class Nav extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
                <h1>Nav bar</h1>
                <ul>
                    <li>Home</li>
                    <li>Transaction</li>
                    <li>Bills</li>
                    <li>Goals</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }
}

export default Nav;
