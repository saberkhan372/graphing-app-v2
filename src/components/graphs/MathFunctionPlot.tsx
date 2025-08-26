import React from 'react';
import Plot from 'react-plotly.js';
import { range } from 'mathjs';

interface Props {
  fn: (x: number) => number;
  title?: string;
}

const MathFunctionPlot: React.FC<Props> = ({ fn, title = 'f(x)' }) => {
  const xValues = range(-10, 10, 0.5).toArray() as number[];
  const yValues = xValues.map(fn);

  return (
    <Plot
      data={[{ x: xValues, y: yValues, type: 'scatter', mode: 'lines' }]}
      layout={{ title: { text: title } }}
    />
  );
};

export default MathFunctionPlot;
