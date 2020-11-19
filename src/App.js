import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from 'react';
import Child from './Child';
import ChildMemo from './ChildMemo';
const ChildLazy = lazy(() => import('./ChildLazy'));

const App = () => {
  useEffect(() => {
    console.log('Render App');
  }, []);

  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  // reloaded every lifecycle
  const increaseLocal = () => {
    setLocalNumber((prevNumber) => prevNumber + 1);
  };

  // NOT reloaded at every lifecycle
  const increaseChild = useCallback(() => {
    setChildNumber((prevNumber) => prevNumber + 1);
  }, []);

  const getSum = useMemo(() => {
    // runs at the first render
    console.log('getSum');
    return localNumber + childNumber;
  }, [localNumber, childNumber]);

  return (
    <>
      <p>Local number: {localNumber}</p>
      <button onClick={increaseLocal}>Increase Local number</button>
      <Child increaseNumber={increaseChild} number={childNumber} />
      <p>Sum: {getSum}</p>
      <ChildMemo number={childNumber} />
      <Suspense fallback={<div>Loading Component</div>}>
        <ChildLazy />
      </Suspense>
    </>
  );
};

export default App;
