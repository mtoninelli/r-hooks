import { useEffect } from 'react';

export default function useUpdateTitle(value) {
  useEffect(() => {
    document.title = `Title: ${value}`;
  }, [value]);
}
