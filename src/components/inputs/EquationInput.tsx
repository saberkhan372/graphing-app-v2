import { useRef, FC } from 'react';
import { useEffect, useRef, FC } from 'react';
import React, { useEffect, useRef } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStyles, EditableMathField } from 'react-mathquill';
import { setEquation } from '../../store/mathSlice';
import { RootState } from '../../store/store';

addStyles();

const EquationInput: FC = () => {
  const dispatch = useDispatch();
  const equation = useSelector((state: RootState) => state.math.equation);
  const last = useRef(equation);
  // keep ref in sync with the Redux value without triggering an effect
  last.current = equation;
const EquationInput: React.FC = () => {
  const dispatch = useDispatch();
  const equation = useSelector((state: RootState) => state.math.equation);
  const last = useRef(equation);

  useEffect(() => {
    last.current = equation;
  }, [equation]);

  const handleChange = (field: any) => {
    const next = field.latex();
    if (next !== last.current) {
      last.current = next;
      dispatch(setEquation(next));
    }
  const handleChange = (field: any) => {
    const next = field.latex();
    if (next !== equation) {
      dispatch(setEquation(next));
    }
    dispatch(setEquation(field.text()));
  };

  return <EditableMathField latex={equation} onChange={handleChange} />;
};

export default EquationInput;
