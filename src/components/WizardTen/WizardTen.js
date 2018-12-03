import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateFirstName, updateLastName, updateEmail } from '../../ducks/reducer.js';

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={event => this.props.updateFirstName(event.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {event => this.props.updateLastName(event.target.value)}/>
                    <input type="text" placeholder="email" onChange={event => this.props.updateEmail(event.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

export default connect(null, {updateFirstName, updateLastName, updateEmail})(WizardTen);