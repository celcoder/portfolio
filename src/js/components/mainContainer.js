'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainApp from './MainApp';

export default class MainContainer extends Component {
 	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	componentDidMount() {
		fetch('../public/data.json')
			.then((res) => res.json())
			.then((resData) => {
				this.setState({data: resData})
				window.state = this.state;
			})
			.catch((error) => {
				console.log('Error fetching and parsing data', error);
			})
	}

  render() {
    return (  
    	<MainApp data={this.state.data} />
    )
  }
}




