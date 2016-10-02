'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import $ from 'jquery';

import MainContainer from './components/mainContainer';


const app = document.getElementById('app');

ReactDOM.render(<MainContainer />, app);
