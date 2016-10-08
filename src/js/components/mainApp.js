'use strict';

import React, { Component, PropTypes } from 'react';

import CodePen from './CodePen';
import DashBoard from './dashBoard';
import Home from './home';
import NavHeader from './navHeader';

export default class MainApp extends Component {
	render () {		
		return (
  		<div>
  			<NavHeader />
				<Home data={this.props.data} />
				<DashBoard />
				<CodePen />
			</div>
		);
	}
}

MainApp.PropTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
}