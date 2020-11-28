import { useEffect } from 'react';

export default function useKeyboard(callback) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'f') {
        callback();
      }
    };
    window.addEventListener('keyup', handler);
    return () => {
      window.removeEventListener('keyup', handler);
    };
  }, [callback]);
}
