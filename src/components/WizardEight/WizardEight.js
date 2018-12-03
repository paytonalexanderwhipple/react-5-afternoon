import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHistory } from '../../ducks/reducer.js';

class WizardEight extends Component {

    render(){
        return(
            <div className="parent-div">
                    <div className="vert-align">                    
                        <p>Have you had a bankruptcy or foreclosure in the past seven years? </p><br />
                    <div className="row">
                        <Link to="/wNine"><button value="Has never been in bankruptcy" onClick={(event) => this.props.updateHistory(event.target.value)}>No</button></Link>
                        <Link to="/wNine"><button value="Has had bankruptcy before" onClick={(event) => this.props.updateHistory(event.target.value)}>Bankruptcy</button></Link>
                        <Link to="/wNine"><button value="Has had a foreclosure before" onClick={(event) => this.props.updateHistory(event.target.value)}>Foreclosure</button></Link>
                        <Link to="/wNine"><button value="Has had both a foreclosure and a bankruptcy" onClick={(event) => this.props.updateHistory(event.target.value)}>Both</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { updateHistory })(WizardEight);