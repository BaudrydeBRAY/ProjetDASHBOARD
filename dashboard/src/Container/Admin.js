import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire';
import Formulaire2 from './Formulaire2';
import FormulaireAdd from './FormulaireAdd';
import FormulaireEdit from './FormulaireEdit';


class Admin extends Component {

  render() {
    return (
        <div className="Adm" style={{backgroundColor:"lightblue"}}>
    	   <br/><br/><h1> Bienvenu dans la section d'administration ! </h1><br/><br/>
         <Formulaire />
         <br/>
         <Formulaire2 />
         <br/>
         <FormulaireAdd />
         <br/>
         <FormulaireEdit />
         <br/><br/><br/><br/>

        </div>
            
        
    );
  }
}

export default Admin;