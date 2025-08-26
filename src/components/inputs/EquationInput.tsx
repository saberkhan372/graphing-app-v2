
import { useEffect, useRef, useState, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEquation } from '../../store/mathSlice';
import { RootState } from '../../store/store';
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
  const [mq, setMq] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const mod = await import('react-mathquill');
      mod.addStyles();
      setMq(mod);
    })();
  }, []);

  // keep ref in sync with the Redux value without triggering an effect
  last.current = equation;
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
  };

  if (!mq) return null;

  const { EditableMathField } = mq;

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
