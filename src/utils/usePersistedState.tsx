import { useEffect, useState } from 'react';

function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    let storageValue: string = window.localStorage.getItem(key)!;

    if (storageValue !== 'undefined') {
      setState(JSON.parse(storageValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
