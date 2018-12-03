import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { updateAddress1, updateAddress2, updateAddress3 } from "../../ducks/reducer.js";

class WizardNine extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your address?</p> <br />

                    <input type="text" placeholder="Line One" onChange={(event) => this.props.updateAddress1(event.target.value)}/>
                    <input type="text" placeholder="Line Two" onChange={(event) => this.props.updateAddress2(event.target.value)}/>
                    <input type="text" placeholder="Line Three" onChange={(event) => this.props.updateAddress3(event.target.value)}/>
                
                    
                    <Link to="/wTen"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateAddress1, updateAddress2, updateAddress3})(WizardNine);