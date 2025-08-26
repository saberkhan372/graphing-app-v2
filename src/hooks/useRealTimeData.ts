import { useEffect } from 'react';

export const useRealTimeData = (callback: (value: number) => void) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback(Math.random());
    }, 1000);
    return () => clearInterval(interval);
  }, [callback]);
};
