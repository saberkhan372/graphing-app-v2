import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ProgressTracker: React.FC = () => {
  const completed = useSelector((state: RootState) => state.progress.completedLessons);
  return <div>Completed Lessons: {completed}</div>;
};

export default ProgressTracker;
