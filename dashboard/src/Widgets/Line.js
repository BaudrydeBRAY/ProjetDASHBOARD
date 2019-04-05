import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    date: '2013', NBÉcoutes: 4000,  amt: 2400,
  },
  {
    date: '2014', NBÉcoutes: 3000,  amt: 2210,
  },
  {
    date: '2015', NBÉcoutes: 2000, amt: 2290,
  },
  {
    date: '2016', NBÉcoutes: 2780,  amt: 2000,
  },
  {
    date: '2017', NBÉcoutes: 1890,  amt: 2181,
  },
  {
    date: '2018', NBÉcoutes: 2390,  amt: 2500,
  },
  {
    date: '2019', NBÉcoutes: 3490, amt: 2100,
  },
];



/* 
const data = [
  {
    name: '2013', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2014', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '2015', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '2016', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '2017', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '2018', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '2019', uv: 3490, pv: 4300, amt: 2100,
  },
]; */

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div><h3>Nombre d'Écoutes des Albums selon l'Année </h3>
      <LineChart
        width={400}
        height={300}
        data={data}
        margin={{
          top: 30, right: 30, left: 20, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
        <Line type="monotone" dataKey="NBÉcoutes" stroke="#82ca9d" activeDot={{ r: 8 }}/>
      </LineChart>
      </div>
    );
  }
}
