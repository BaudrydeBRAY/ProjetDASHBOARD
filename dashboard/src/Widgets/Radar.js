import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    Style: 'Rock', A: 120, B: 110, fullMark: 150,
  },
  {
    Style: 'Jazz', A: 98, B: 130, fullMark: 150,
  },
  {
    Style: 'Pop', A: 86, B: 130, fullMark: 150,
  },
  {
    Style: 'Classique', A: 99, B: 100, fullMark: 150,
  },
  {
    Style: 'Electro', A: 85, B: 90, fullMark: 150,
  },
  {
    Style: 'Rap', A: 65, B: 85, fullMark: 150,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <div><h3>Répartition des Albums par Styles </h3>
      <RadarChart cx={200} cy={200} outerRadius={150} width={400} height={400} data={data} margin={{top: 30, right: 30, bottom: 30, left: 30}}>
        <PolarGrid />
        <PolarAngleAxis dataKey="Style" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
      </div>
    );
  }
}
