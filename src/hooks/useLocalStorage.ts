import { useState, useEffect, Dispatch, SetStateAction } from "react";

/**
 * Custom React hook for managing state in local storage.
 * @param {string} key - The key under which to store the state in local storage.
 * @param {T} defaultValue - The default value for the state if no value is found in local storage.
 * @returns {[T, Dispatch<SetStateAction<T>>]} - A tuple containing the state value and a function to update the state.
 */
export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [values, setValues] = useState<T>(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue),
      );
    } catch {
      currentValue = defaultValue;
    }
    return currentValue;
  });

  useEffect(
    () => localStorage.setItem(key, JSON.stringify(values)),
    [values, key],
  );

  return [values, setValues];
};
