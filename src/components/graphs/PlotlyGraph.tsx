import React from 'react';
import Plot from 'react-plotly.js';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { evaluate, range } from 'mathjs';

const PlotlyGraph: React.FC = () => {
  const equation = useSelector((state: RootState) => state.math.equation);

  const xValues = range(-10, 10, 0.5).toArray() as number[];
  const yValues = xValues.map((x) => {
    try {
      return evaluate(equation.replace(/y\s*=\s*/, ''), { x }) as number;
    } catch {
      return null;
    }
  }) as (number | null)[];

  return (
    <Plot
      data={[{ x: xValues, y: yValues, type: 'scatter', mode: 'lines' }]}
      layout={{ title: { text: equation } }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PlotlyGraph;
