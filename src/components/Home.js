import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';

class Home extends Component {
  render() {
    return(
			<div className="container">
				<h3 className="center">Our items</h3>
				<div className="box">
					Home
				</div>
			</div>
    )
  }
}

export default connect(null, actions)(Home);
