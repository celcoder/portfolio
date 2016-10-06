'use strict';

import React, { Component, PropTypes } from 'react';

export default class JumboContent extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h2>{this.props.title}</h2>
			</div>
		)
	}
}

JumboContent.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}




