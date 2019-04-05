import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Widgets from '../Widgets/Widgets'; //modifier chemin?

import Area from '../Widgets/Area';
import Bar from '../Widgets/Bar';
import Line from '../Widgets/Line';
import Pie from '../Widgets/Pie';
import Radar from '../Widgets/Radar';
import Scatter from '../Widgets/Scatter';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));  

storiesOf('Widgets', module)
  .add("Area widget", () => <Area />)
  .add("Bar widget", () => <Bar />)
  .add("Line widget", () => <Line />)
  .add("Pie widget", () => <Pie />)
  .add("Radar widget", () => <Radar />)
  .add("Scatter widget", () => <Scatter />);