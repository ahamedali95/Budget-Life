import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Login from '../components/login.js';
import SignUp from '../components/signUp.js';
import {Menu, Input, Segment} from 'semantic-ui-react';

const styles={
    display : "none"
}
class LoginSignUpContainer extends Component{
    constructor(){
        super();
    this.state = {
        activeItem: 'signUp',
        isSignUp : true,
    }



}
handleItemClick = (e, { name }) => {
    console.log(e);
    console.log({name});

    this.setState({ activeItem: name })
}
        render(){
        return (
            <div id="loginSignUp">
                <div>
                <Menu tabular>
                    <Menu.Item name='signUp' active={this.state.activeItem === 'signUp'} onClick={this.handleItemClick} />

                    <Menu.Item
                        name='login'
                        active={this.state.activeItem === 'login'}
                        onClick={this.handleItemClick} />
                </Menu>
                </div>
                <Segment>
                    {(this.state.activeItem ==="signUp") ? <SignUp /> : <Login/>}


                </Segment>

            </div>
        )
    }
}

export default LoginSignUpContainer
