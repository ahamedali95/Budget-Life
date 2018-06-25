import React from "react";
import { Form, Input, Select} from 'semantic-ui-react'
import Categories from '../Helpers/categoryHelper.js';
import adapter from "../adapter.js";
// import CategorySelection from "./CategorySelection.js";
// import NumericInput from 'react-numeric-input';
// import DatePicker from 'react-datepicker';
// import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

class BillForm extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
        date: null,
        description: null,
        category_id: null,
        amount_due: null,
        user_id: 1,

     };
   }



   handleChange = (e,{name, value}) => {
      let id = (e.target.id === "") ? e.target.parentElement.id : e.target.id
      if (typeof(e.target.name) === "undefined"){
         debugger;
         this.setState({[name]: id})
      }
      else {
      this.setState({[e.target.name] : e.target.value}
      )
   }
   }



  handleSubmit = (e) => {
    e.preventDefault();
    console.log("this state", this.state);


    const body = this.state

    adapter.post("http://localhost:3001/api/v1/bills", body)
    .then(response => response.json())
    .then(data => {this.props.addNewBill(data)})
    .then(data=>console.log('what is state', data))
    // .then(() => {this.resetForm()});
  }

  // resetForm = () => {
  //   this.setState({
  //     amount_due: 50.00,
  //     category: "Miscellaneous",
  //     description: "",
  //     due_date: ""
  //   });
  // }

   render() {
      let categories = Categories(this.props.categories)
     return(
       <div id="billForm" >
         <h3>Add a Bill</h3>

         <Form onSubmit={this.handleSubmit} widths="equal">
            <Form.Group >
               <Form.Field>
                  <Input
                    required
                    id="formDate"
                    onChange={this.handleChange}
                    name="date"
                    type="date"
                    label='Date'/>
              </Form.Field>

             <Form.Field>
                <Input
                required
                id="formDescription"
                onChange={this.handleChange}
                name="description"
                label='Description'
                placeholder='Enter Description...'/>
             </Form.Field>
          </Form.Group>

          <Form.Group>
             <Form.Field>
                <Select required
                id="billCategoryForm"
                onChange={this.handleChange}
                name="category_id"
                label='Category'
                options={categories}
                placeholder="Category"
                />
          </Form.Field>
             <Form.Field>
                 <Input
                    onChange={this.handleChange}
                    name="amount_due"
                    type="number"
                    min="1"
                    step=".01"
                    label="Amount"
                    placeholder="Enter amount due"
                    />
             </Form.Field>

             <Form.Field control="button">Create Bill</Form.Field>
          </Form.Group>
         </Form>
       </div>
     );
   }
}

export default BillForm;
