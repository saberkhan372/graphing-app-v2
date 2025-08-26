import { useMemo } from 'react';
import { evaluate } from 'mathjs';

export const useMathEngine = (expression: string, variable: number) => {
  return useMemo(() => {
    try {
      return evaluate(expression, { x: variable });
    } catch {
      return NaN;
    }
  }, [expression, variable]);
};
