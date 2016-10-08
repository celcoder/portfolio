'use strict';
import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

export default class Description extends Component {
	render() {
		const image = '../public/github.png';
		const imageStyle = {
			height: 300,
			width: 300,
		}
		const font = {
			fontFamily: 'Dosis'
		}
		return (
			<div>
				<Col sm={12} md={6}>
					<img style={imageStyle} src={image} />	
				</Col>	
				<Col sm={12} md={6} style={font}>
					<h1>{this.props.description.slice(0, 8)}</h1>
					<h3>{this.props.description.slice(8)}</h3>
					<h3>{this.props.site}</h3>
				</Col>	
			</div>
		)
	}
}

Description.propTypes = {
	description: PropTypes.string.isRequired,
	site: PropTypes.string.isRequired
}