import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  lazy,
  Suspense,
} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './pages/index';
import About from './pages/about';
import Reducer from './pages/reducer';
import CustomHook from './pages/customHook';
import { UserContext } from './pages/UserContext';

import Child from './Child';
import ChildMemo from './ChildMemo';
const ChildLazy = lazy(() => import('./ChildLazy'));

const App = () => {
  // init
  useEffect(() => {
    console.log('Render App');
  }, []);

  // states
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

  // userContext (ex as user login)
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/reducer">Reducer</Link>
        <Link to="/customHook">customHook</Link>
        <UserContext.Provider value={providerValue}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" exact component={About} />
          <Route path="/reducer/" exact component={Reducer} />
          <Route path="/customHook/" exact component={CustomHook} />
        </UserContext.Provider>
      </Router>

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
