import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const login = async () => {
  return {
    id: 4,
    username: 'name',
    email: 'name@email.com',
  };
};

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>Index</h1>
      <div>{JSON.stringify(user, null, 2)}</div>

      {user ? (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </>
  );
};

export default Index;
