import React, { useEffect, useRef, useState, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEquation } from '../../store/mathSlice';
import { RootState } from '../../store/store';

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

  const handleChange = (field: any) => {
    const next = field.latex();
    if (next !== last.current) {
      last.current = next;
      dispatch(setEquation(next));
    }
  };

  if (!mq) return null;

  const { EditableMathField } = mq;

  return <EditableMathField latex={equation} onChange={handleChange} />;
};

export default EquationInput;
