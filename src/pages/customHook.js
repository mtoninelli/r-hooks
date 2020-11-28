import React from 'react';
import useLocalStorage from '../customHooks/useLocalStorage';
import useUpdateLogger from '../customHooks/useUpdateLogger';
import useUpdateTitle from '../customHooks/useUpdateTitle';
import useKeyboard from '../customHooks/useKeyboard';

const CustomHook = () => {
  const [value, setValue] = useLocalStorage('custom-input', '');

  useUpdateLogger(value);
  useUpdateTitle(value);
  useKeyboard(() => {
    console.log(`pressed 'f' key`);
  });

  return (
    <>
      <h1>CustomHook</h1>
      <input value={value} onChange={(e) => setValue(e.currentTarget.value)} />
    </>
  );
};

export default CustomHook;
