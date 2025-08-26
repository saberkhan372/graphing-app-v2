import React from 'react';
import PlotlyGraph from './PlotlyGraph';
import ParameterSlider from '../inputs/ParameterSlider';

const InteractivePlot: React.FC = () => (
  <div>
    <ParameterSlider parameter="a" />
    <PlotlyGraph />
  </div>
);

export default InteractivePlot;
