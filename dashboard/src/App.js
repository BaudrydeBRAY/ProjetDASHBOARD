import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Routes from './routes';
import logo from './logo.svg';
import './App.css';
import Line from './Widgets/Line';
import Bar from './Widgets/Bar';
import Pie from './Widgets/Pie';
import Radar from './Widgets/Radar';
import Area from './Widgets/Area';
import Scatter from './Widgets/Scatter';

class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:"lightsteelblue"}}>
        
        <header style={{backgroundColor: "steelblue"}}>
            <h1>
                Dashboard
            </h1>
            <div class="topnav">
                <Link to="/">Home</Link>
                <Link to="/admin">Admin</Link>
            </div>
        </header>
        <Routes />
        
        <footer style={{backgroundColor: "steelblue"}}>
        <h3>
        Antoine Grès & Baudry De Bray - OCRES 2
        </h3>
        </footer>
        
        
      </div>
    );
  }
}

export default App;
