import { useDispatch } from 'react-redux';
import { increment } from '../store/progressSlice';

export const useProgressTracking = () => {
  const dispatch = useDispatch();
  return () => dispatch(increment());
};
