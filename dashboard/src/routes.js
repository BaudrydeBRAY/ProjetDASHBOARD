import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Container/Admin';
import Home from './Container/Home';



	export default class routes extends Component {
		render() {
		  return (
			<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/admin" exact component={Admin}/>
			</Switch>
		  );
		}
	  }