import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStyles, EditableMathField } from 'react-mathquill';
import { setEquation } from '../../store/mathSlice';
import { RootState } from '../../store/store';

addStyles();

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

  return <EditableMathField latex={equation} onChange={handleChange} />;
};

export default EquationInput;
