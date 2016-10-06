'use strict';

import React, { Component, PropTypes } from 'react';

import Home from './home';
import NavHeader from './navHeader';

export default class MainApp extends Component {
	render () {		
		return (
  		<div>
  			<NavHeader />
				<Home data={this.props.data} />
			</div>
		);
	}
}

MainApp.PropTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
}