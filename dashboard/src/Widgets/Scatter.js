import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
  { x: 100, y: 100, z: 120 },
  { x: 120, y: 10, z: 160 },
  { x: 170, y: 200, z: 150 },
  { x: 140, y: 150, z: 180 },
  { x: 150, y: 300, z: 350 },
  { x: 110, y: 180, z: 100 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/uLysj0u2/';

  render() {
    return (
      <div><h3>Nombre d'Albums par Artiste</h3>
      <ScatterChart
        width={300}
        height={300}
        margin={{
          top: 30, right: 30, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="text" dataKey="x" name="Artiste " unit="" />
        <YAxis type="number" dataKey="y" name="Nombre d'Albums " unit="" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8" />
      </ScatterChart>
      </div>
    );
  }
}
