import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {Form,Input} from 'semantic-ui-react';
class SignUp extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
            <Form>
                <Form.Group>
                <Form.Field control={Input} label="FirstName"
                    type="text" name="firstName" placeholder="First Name"/>
                </Form.Group>
            </Form>


            </div>
        );
    }
}

export default SignUp;
