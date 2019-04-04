import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Admin from './Container/Admin';
import Home from './Container/Home';
import Admin2 from './Container/Admin2';



	export default class routes extends Component {
		render() {
		  return (
			<Switch>
			<Route path="/" exact component={Home}/>
			<Route path="/admin" exact component={Admin}/>
			<Route path="/admin2" exact component={Admin2}/>
			</Switch>
		  );
		}
	  }