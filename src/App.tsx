import type { FC } from 'react';
import PlotlyGraph from './components/graphs/PlotlyGraph';
import EquationInput from './components/inputs/EquationInput';
import LessonContainer from './components/educational/LessonContainer';
import ErrorBoundary from './components/ErrorBoundary';

const App: FC = () => (

import React from 'react';
import PlotlyGraph from './components/graphs/PlotlyGraph';
import EquationInput from './components/inputs/EquationInput';
import LessonContainer from './components/educational/LessonContainer';

import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => (
  <div>
    <h1>Algebra 1 Graphing App</h1>
    <ErrorBoundary>
      <EquationInput />
    </ErrorBoundary>

    <EquationInput />
    <PlotlyGraph />
    <LessonContainer />
  </div>
);

export default App;
