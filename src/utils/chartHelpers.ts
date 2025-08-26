import { range } from 'mathjs';

export const generateRange = (min: number, max: number, step = 1) =>
  range(min, max, step).toArray();
