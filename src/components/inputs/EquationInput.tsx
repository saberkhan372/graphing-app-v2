import { lazy, Suspense, useRef, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEquation } from '../../store/mathSlice';
import { RootState } from '../../store/store';

const EditableMathField = lazy(() =>
  import('react-mathquill').then((mq) => {
    mq.addStyles();
    return { default: mq.EditableMathField };
  })
);

const EquationInput: FC = () => {
  const dispatch = useDispatch();
  const equation = useSelector((state: RootState) => state.math.equation);
  const last = useRef(equation);

  // keep ref in sync with the Redux value without triggering an effect
  last.current = equation;

  const handleChange = (field: any) => {
    const next = field.latex();
    if (next !== last.current) {
      last.current = next;
      dispatch(setEquation(next));
    }
  };

  return (
    <Suspense fallback={<div>Loading…</div>}>
      <EditableMathField latex={equation} onChange={handleChange} />
    </Suspense>
  );
};

export default EquationInput;
