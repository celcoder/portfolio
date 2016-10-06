'use strict';
import React, { Component, PropTypes } from 'react';
import { Jumbotron } from 'react-bootstrap';

import Description from './description';
import JumboContent from './JumboContent';

export default class Home extends Component {
	render () {
		const homeStyle = {
			paddingTop: 110,
			textAlign: 'center',
			color: 'white',
			backgroundColor: '#45afff',
			fontFamily: 'Abel'
		}
		
		return (
  		<div>
  			<Jumbotron style={homeStyle}>
		  		{this.props.data.map((idx, i) => (
						<JumboContent key={i}
													name={idx.name}
													title={idx.title} />
		  		))} 
	  		</Jumbotron>		
					{this.props.data.map((idx, i) => (
						<Description key={i}
									description={idx.description}
									site={idx.site} />
		  		))} 
			</div>
		);
	}
}

Home.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired
}

