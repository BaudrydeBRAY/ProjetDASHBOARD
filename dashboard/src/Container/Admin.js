import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire';
import Formulaire2 from './Formulaire2';
import Formulaire3 from './Formulaire3';

class Admin extends Component {

  render() {
    return (
        <div className="Adm" style={{backgroundColor:"lightblue"}}>
    	   <br/><br/><h1> Bienvenu dans la section d'administration ! </h1><br/><br/>
         <Formulaire />
         <br/>
         <Formulaire2 />
         <br/>
         <Formulaire3 />
         <br/><br/><br/><br/>

        </div>
            
        
    );
  }
}

export default Admin;