'use strict';
import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

export default class DashBoard extends Component {
	render() {
		const webrefinery = "../public/web.png";
		const imageStyle = {
			height: 300,
			width: 400
		}
		const center = {
			textAlign: 'center',
		}
		
		return (
			<div>
				<Col xs={18} md={12} style={center}>
					<h2>Projects</h2>
					<h3>Created by Me</h3>
				</Col>
				<Col xs={9} md={6} style={center}>
					<h4>Web-Refinery</h4>
						<img src={webrefinery} style={imageStyle} className="img-responsive center-block"/>
								<a href="http://github/celcoder.com"><p>Github</p></a>
				</Col>
				<Col xs={9} md={6} style={center}>
					<h4>Web-Refinery</h4>
						<img src={webrefinery} style={imageStyle} className="img-responsive center-block"/>
							<a href="http://github/celcoder.com"><p>Github</p></a>
				</Col>
			</div>
		)
	}
}
