import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello React.
      </div>
    );
  }
}

export default connect(null, actions)(App);
