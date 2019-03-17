import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire';

class Admin extends Component {

  render() {
    return (
        <div className="Adm" style={{backgroundColor:"lightblue"}}>
    	   <br/><br/><h1> Bienvenu dans la section d'administration ! </h1><br/><br/>
         <Formulaire />
         <br/><br/><br/><br/>

        </div>
            
        
    );
  }
}

export default Admin;