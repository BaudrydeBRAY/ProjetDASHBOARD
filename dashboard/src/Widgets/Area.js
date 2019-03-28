import React, { PureComponent } from 'react';
import './Area.css';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: '2013', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2014', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '2015', uv: -1000, pv: 9800, amt: 2290,
  },
  {
    name: '2016', uv: 500, pv: 3908, amt: 2000,
  },
  {
    name: '2017', uv: -2000, pv: 4800, amt: 2181,
  },
  {
    name: '2018', uv: -250, pv: 3800, amt: 2500,
  },
  {
    name: '2019', uv: 3490, pv: 4300, amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.uv));
  const dataMin = Math.min(...data.map(i => i.uv));

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/64v6ocdx/';

  render() {
    return (
      <div><h3>Evolution des Ventes d'Albums</h3>
      <AreaChart
        width={300}
        height={300}
        data={data}
        margin={{
          top: 20, right: 40, left: 10, bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
      </div>
    );
  }
}
