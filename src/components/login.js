import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {Form,Input, Button} from 'semantic-ui-react';

class Login extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div id="login">
                <Form>
                    <Form.Field
                        control={Input}
                        label="Email"
                        type="email"
                        name="Email"
                        placeholder="Enter Email"/>
                    <Form.Field
                        control={Input}
                        label="Password"
                        type="password"
                        name="firstName"
                        placeholder="Enter Password"/>
                    <Form.Field id="loginButton" control={Button}>Login</Form.Field>

                </Form>
            </div>
        );
    }
}

export default Login;
