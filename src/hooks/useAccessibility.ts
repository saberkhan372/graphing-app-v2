import { useEffect } from 'react';

export const useAccessibility = (message: string, announce: (msg: string) => void) => {
  useEffect(() => {
    announce(message);
  }, [message, announce]);
};
