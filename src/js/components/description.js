'use strict';
import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

export default class Description extends Component {
	render() {
		const image = '../public/profile.jpg';
		const imageStyle = {
			height: 300,
			width: 300
		}
		return (
			<div>
				<Col sm={12} md={6}>
					<img style={imageStyle} src={image} />	
				</Col>	
				<Col sm={12} md={6}>
					<h2>{this.props.description.slice(0, 8)}</h2>
					<h2>{this.props.description.slice(8)}</h2>
					<h2>{this.props.site}</h2>
				</Col>	
			</div>
		)
	}
}

Description.propTypes = {
	description: PropTypes.string.isRequired,
	site: PropTypes.string.isRequired
}