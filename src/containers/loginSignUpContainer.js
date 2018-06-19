import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Login from '../components/login.js';
import SignUp from '../components/signUp.js';
import {Menu, Input, Segment} from 'semantic-ui-react';
class LoginSignUpContainer extends Component{
    constructor(){
        super();
    this.state = { activeItem: 'signUp' }



}
handleItemClick = (e, { name }) => this.setState({ activeItem: name })
        render(){
        return (
            <div id="loginSignUp">
                <div>
                <Menu tabular>
                    <Menu.Item name='Sign Up' active={this.state.activeItem === 'signUp'} onClick={this.handleItemClick} />

                    <Menu.Item name='Login' active={this.state.activeItem === 'login'} onClick={this.handleItemClick} />
                </Menu>
                </div>
                <Segment>
                <SignUp />
                <Login/>
                </Segment>

            </div>
        )
    }
}

export default LoginSignUpContainer
