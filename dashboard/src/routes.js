import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Admin from './Container/Admin';
import Home from './Container/Home';


export default () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/admin" exact component={Admin}/>
		</Switch>
	);