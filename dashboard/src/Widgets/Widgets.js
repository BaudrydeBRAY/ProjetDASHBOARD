import React, {Component} from 'react';
import Line from './Line';
import Bar from './Bar';
import Pie from './Pie';
import Radar from './Radar';
import Area from './Area';
import Scatter from './Scatter';


class Widgets extends Component {
    render() {
        return (
        <div>
            <Line />
            <Bar />
            <Pie />
            <Radar />
            <Area />
            <Scatter />
        </div>
        );
    }
}
export default Widgets;