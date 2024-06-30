import { useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);

      if (value) {
        return JSON.parse(value);
      }

      localStorage.setItem(key, JSON.stringify(defaultValue));

      return defaultValue;
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));

      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (value) => {
    let newValue = value;

    if (typeof value === "function") {
      const fn = value;
      newValue = fn(localStorageValue);
    }

    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue);
  };

  return [localStorageValue, setLocalStorageStateValue];
};

export default useLocalStorage;
