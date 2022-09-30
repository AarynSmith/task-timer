import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  // getting stored value
  const saved = localStorage.getItem(key) as string;

  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export default function useLocalStorage<Type>(
  key: string,
  defaultValue: Type
): [Type, React.Dispatch<React.SetStateAction<Type>>] {
  const [value, setValue] = useState<Type>(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
