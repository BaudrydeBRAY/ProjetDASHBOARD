import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '2013', NBArtistes: 4000,  amt: 2400,
  },
  {
    name: '2014', NBArtistes: 3000,  amt: 2210,
  },
  {
    name: '2015', NBArtistes: 2000,  amt: 2290,
  },
  {
    name: '2016', NBArtistes: 2780,  amt: 2000,
  },
  {
    name: '2017', NBArtistes: 1890,  amt: 2181,
  },
  {
    name: '2018', NBArtistes: 2390,  amt: 2500,
  },
  {
    name: '2019', NBArtistes: 3490,  amt: 2100,
  },
];

/* const data = [
  {
    name: '2013', NBArtistes: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2014', NBArtistes: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '2015', NBArtistes: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '2016', NBArtistes: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '2017', NBArtistes: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '2018', NBArtistes: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '2019', NBArtistes: 3490, pv: 4300, amt: 2100,
  },
];
 */

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div><h3>Évolution de la Variété d'Artistes </h3>
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 30, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        <Bar dataKey="NBArtistes" fill="#82ca9d" />
      </BarChart>
      </div>
    );
  }
}