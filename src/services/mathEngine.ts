import { evaluate } from 'mathjs';

export const solveExpression = (expr: string, scope: Record<string, number>) => {
  return evaluate(expr, scope);
};
