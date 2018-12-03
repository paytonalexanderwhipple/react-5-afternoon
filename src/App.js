import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import './App.css';
import router from './router'
import WizardEight from './components/WizardEight/WizardEight';


class App extends Component {

  render() {
    return (
      <div>

        <Router>
          { router }
        </Router>

      </div>
    );
  }
}

export default App;