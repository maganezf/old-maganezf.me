import { useState, useEffect } from 'react';

function usePersistedState(key: string, defaultValue: any) {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    let storageValue = window.localStorage.getItem(key)!;

    if (storageValue !== 'undefined') {
      setState(JSON.parse(storageValue) || defaultValue);
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
