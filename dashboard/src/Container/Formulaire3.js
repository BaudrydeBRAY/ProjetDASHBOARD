import React, { Component } from 'react';
import axios from 'axios';

export default class Formulaire3 extends Component {
  constructor(props) {
    super(props);
    this.onChangeNom = this.onChangeNom.bind(this);
    this.onChangeArtiste = this.onChangeArtiste.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeStyle = this.onChangeStyle.bind(this);
    this.onChangeNombredeTitres = this.onChangeNombredeTitres.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Nom: '',
      Artiste: '',
      Date:'',
      Style:'',
      NombredeTitres:''
    }
  }
  onChangeNom(e) {
    this.setState({
      Nom: e.target.value
    });
  }
  onChangeArtiste(e) {
    this.setState({
      Artiste: e.target.value
    })  
  }
  onChangeDate(e) {
    this.setState({
      Date: e.target.value
    })  
  }
  onChangeStyle(e) {
    this.setState({
      Style: e.target.value
    })  
  }
  onChangeNombredeTitres(e) {
    this.setState({
      nombredeTitres: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Nom: this.state.Nom,
      Artiste: this.state.Artiste,
      Date: this.state.Date,
      Style: this.state.Style,
      nombredeTitres: this.state.nombredeTitres
    };
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
        Nom: '',
        Artiste: '',
        Date:'',
        Style:'',
        NombredeTitres:''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <form onSubmit={this.onSubmit}>
            <br/>
			<h2>Ajout d'un nouvel Album</h2>
			<br/><br/>
                <div className="form-group">
                    <label>Nom :  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.Nom}
                      onChange={this.onChangeNom}
                      />
                </div>
                <div className="form-group">
                    <label>Artiste : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Artiste}
                      onChange={this.onChangeArtiste}
                      />
                </div>
                <div className="form-group">
                    <label>Date : </label>
                    <input type="date" 
                      className="form-control"
                      value={this.state.Date}
                      onChange={this.onChangeDate}
                      />
                </div>
                <div className="form-group">
                    <label>Style : </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.Style}
                      onChange={this.onChangeStyle}
                      />
                </div>
                <div className="form-group">
                    <label>Nombre de titres : </label>
                    <input type="number" 
                      className="form-control"
                      value={this.state.nombredeTitres}
                      onChange={this.onChangeNombredeTitres}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" value="Ajouter l'Album" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}