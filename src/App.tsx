import React from 'react';
import PlotlyGraph from './components/graphs/PlotlyGraph';
import EquationInput from './components/inputs/EquationInput';
import LessonContainer from './components/educational/LessonContainer';

const App: React.FC = () => (
  <div>
    <h1>Algebra 1 Graphing App</h1>
    <EquationInput />
    <PlotlyGraph />
    <LessonContainer />
  </div>
);

export default App;
