import React, { Component } from 'react';
import './Formulaire.css';

class Formulaire extends Component {
	constructor() {
		super();
		this.state = {
			fullName: ''
		}
	}
	handleFullNameChange = (e) => {
		this.setState({
			fullName: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.fullName)
	}
	render() {
		return (

		<div>
			<form onSubmit={this.handleSubmit}>
			<h2>Ajout d'un nouvel Album</h2>
				<label>Nom : </label>
				<input name="fullName" type="text" value="{this.state.fullName}" />
				<br/><br/>

				<label>Artiste : </label>
				<input name="fullName" type="text" value="{this.state.fullName}" />
				<br/><br/>

				<label>Date de parution : </label>
				<input name="date" type="text" value="{this.state.date}" />
				<br/><br/>

				<label>Style : </label>
				<input name="fullName" type="text" value="{this.state.fullName}" />
				<br/><br/>
				<input type="submit" value="Ajouter" />
				<br/><br/> 
			</form>
		</div>
		
		);
	}
} export default Formulaire;

//régler pb {this.state.fullName}...