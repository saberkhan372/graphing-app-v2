import { describe, expect, it } from 'vitest';
import { linear } from './mathUtils';

describe('mathUtils', () => {
  it('linear computes y=mx+b', () => {
    const fn = linear(2, 1);
    expect(fn(3)).toBe(7);
  });
});
