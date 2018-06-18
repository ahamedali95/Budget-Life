import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import Home from '../components/home.js';
import Transaction from './transaction';
import Bills from '../components/bills.js';
import Goals from '../components/goals.js';


class DisplayContainer extends Component{
     constructor(){
        super();

        this.state={

        }
    }
    render() {
        return (
            <div>
                <Home/>
                <Transaction />
                    <Bills />
                    <Goals />

            </div>
        );
    }
}

export default DisplayContainer;
