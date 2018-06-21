import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import {Form,Input, Button} from 'semantic-ui-react';
import adapter from './../adapter.js';
let url = "http://localhost:3001/api/v1/users"


class SignUp extends Component{
     constructor(){
        super();

        this.state={
            first_name: "",
            last_name: "",
            email: "",
            phone : "",
            password: "",

        }
    }

handleChange = (e) => {
    console.log("before",e.target.name, "other", e.target.value)
    this.setState({[e.target.name] : e.target.value}, () => console.log(this.state))
}
handleSubmit = (event) => {

    event.preventDefault()
    const body = this.state
    adapter.post(url,body)
    .then(response=>response.json())
    .then(user => console.log(user,"what is it"))
}

    render() {
        // <Form.Field id="resetButton"
        //     type="reset"
        //     control={Button}>Reset </Form.Field>
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Field control={Input}
                    onChange={this.handleChange}
                    width={8}
                    label="First Name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"/>
                <Form.Field control={Input}
                    onChange={this.handleChange}
                    width={8}
                    label="Last Name"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"/>

                </Form.Group>

                    <Form.Field control={Input}
                        onChange={this.handleChange}
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter Email"/>
                    <Form.Field control={Input}
                        onChange={this.handleChange}
                        label="Phone"
                        type="phone"
                        name="phone"
                        placeholder="Phone Number"/>
                    <Form.Field control={Input}
                        onChange={this.handleChange}
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Enter Password"/>
                    <Form.Field control={Input}
                        onChange={this.handleChange}
                        label="Verify Password"
                        type="password"
                        name="verifyPassword"
                        placeholder="Re-Enter Password"/>

                <Form.Field id="signUpButton"
                    control={Button}>Sign-Up</Form.Field>

            </Form>


            </div>
        );
    }
}

export default SignUp;
