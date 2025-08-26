import React from 'react';
import StepByStepGuide from './StepByStepGuide';
import ProgressTracker from './ProgressTracker';

const LessonContainer: React.FC = () => (
  <div>
    <h2>Lesson</h2>
    <StepByStepGuide />
    <ProgressTracker />
  </div>
);

export default LessonContainer;
