import React, { Component } from 'react';
import '../App.css';
import './Home.css';
import {Link} from 'react-router-dom';
//import routes from './routes';
import Line from '../Widgets/Line';
import Bar from '../Widgets/Bar';
import Pie from '../Widgets/Pie';
import Radar from '../Widgets/Radar';
import Area from '../Widgets/Area';
import Scatter from '../Widgets/Scatter';
import {Container, Row, Col} from 'reactstrap';
import { Button } from 'reactstrap';

// Import default Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.css';


class Home extends Component {

  render() {
    return (
        <div className="Hom" style={{backgroundColor:"rgb(71, 169, 182)"}}>
    	 <br/><br/>
         <h1>Bienvenu dans la section dashboard !</h1>
         <br/><br/>

         <main>
        <Container>
        <Row>
            <Col lg="4" md="6" xs="12">
                <div class="line">
                    <Line />
                </div>
            </Col>

            <Col lg="4" md="6" xs="12">
                <div class="bar">
                    <Bar />
                </div>
            </Col>

            <Col lg="4" md="6" xs="12">
                <div class="pie">
                    <Pie />
                </div>
            </Col>
 
            <Col lg="4" md="6" xs="12">
                <div class="radar">
                    <Radar />
                </div>
            </Col>

            <Col lg="4" md="6" xs="12">
                <div class="area">
                    <Area />
                </div>
            </Col>
            
            <Col lg="4" md="6" xs="12">
                <div class="scatter">
                    <Scatter />
                </div>
            </Col>
        </Row>
        </Container>
        </main> 
        
        </div>
    );
  }
}

export default Home;

