'use strict';

import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';

import Home from './home';
import NavHeader from './navHeader';

export default class MainContainer extends Component {
  render() {
    return (  
    	<div>
    		<NavHeader />
    		<Home />
    	</div>
    )
  }
}