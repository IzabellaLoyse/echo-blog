import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type ResponsePersistedState<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(
  key: string,
  initialState: T,
): ResponsePersistedState<T> {
  const [state, setState] = useState(() => {
    const storageValues = localStorage.getItem(key);

    if (storageValues) {
      return JSON.parse(storageValues);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
