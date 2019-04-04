import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire';
import Formulaire2 from './Formulaire2';
import FormulaireAdd from './FormulaireAdd';
import FormulaireEdit from './FormulaireEdit';


class Admin2 extends Component {

  render() {
    return (
        <div className="Adm" style={{backgroundColor:"lightblue"}}>
    	    <br/><br/><h1> Bienvenu dans la section d'administration ! </h1><br/><br/>
            <div class="topnav">
                <Link to="/admin">Ajouter</Link>
                <Link to="/admin2">Modifier</Link>
            </div>

            <FormulaireEdit />
            <br/><br/><br/><br/>
        </div>
            
        
    );
  }
}

export default Admin2;