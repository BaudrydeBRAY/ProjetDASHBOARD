
import React, { Component } from 'react';
import './Formulaire2.css';

class Formulaire2 extends Component {
	constructor() {
		super();
		this.state = {
			Nom: '',
			Artiste: '',
			Date:'',
			Style:'',
            NombredeTitres:'',
            NouveauStyle:''


		}
	}
	handleNomChange = (e) => {
		this.setState({
			Nom: e.target.value
		})
	}

	handleArtisteChange = (e) => {
		this.setState({
			Artiste: e.target.value
		})
	}

	handleDateChange = (e) => {
		this.setState({
			Date: e.target.value
		})
	}
	
	handleStyleChange = (e) => {
		this.setState({
			Style: e.target.value
		})
	}
	
	handleNombredeTitresChange = (e) => {
		this.setState({
			NombredeTitres: e.target.value
		})
	}

    handleNombredeTitresChange = (e) => {
		this.setState({
			NouveauStyle: e.target.value
		})
	}



	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state)
	}
	render() {
		return (

		<div>
			<form onSubmit={this.handleSubmit}>
			<br/>
			<h2>Modifications d'un Album</h2>


            <br/>
			<h2>ATTENTION: modifs à faire, mettre liste des albums à gauche, la sélectionner afin de pouvoir lancer l'update</h2>

			<br/><br/>
				<label>Nom : </label>
				<input name="Nom" type="text" ref={input => this.Nom = input} />
				<br/><br/>

				<label>Artiste : </label>
				<input name="Artiste" type="text" ref={input => this.Artiste = input} />
				<br/><br/>

				<label>Date de parution : </label>
				<input name="DateParution" type="date" ref={input => this.Date = input} />
				<br/><br/>
				
				<label>Style : </label>
				<select
					ref={select => this.styleType = select}
					name="styleType">
					<option value="Rock">Rock</option>
					<option value="Classique">Classique</option>
					<option value="Jazz">Jazz</option>
				</select>
				<br/><br/>

				<label>Nombre de titres dans l'album : </label>
				<input name="NombreTitres" type="number" ref={input => this.NombredeTitres = input} />
				<br/><br/>



				<input type="submit" value="Ajouter" />
				<br/><br/> 
			</form>
		</div>
		
		);
	}
} export default Formulaire2;

//régler pb cashMoney & autres...