import React, { Component } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//import routes from './routes';
import Line from '../Widgets/Line';
import Bar from '../Widgets/Bar';
import Pie from '../Widgets/Pie';
import Radar from '../Widgets/Radar';
import Area from '../Widgets/Area';
import Scatter from '../Widgets/Scatter';


class Home extends Component {

  render() {
    return (
        <div className="Hom" style={{backgroundColor:"green"}}>
    	   <h1>home first</h1>
      

        <main>
        <div class="line">
            <Line />
        </div>
        <div class="bar">
            <Bar />
        </div>
        <div class="pie">
            <Pie />
        </div>
        <div class="radar">
            <Radar />
        </div>
        <div class="area">
            <Area />
        </div>
        <div class="scatter">
            <Scatter />
        </div>
        </main> 

        </div>
    );
  }
}

export default Home;

