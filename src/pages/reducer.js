import React, { useReducer } from 'react';

const loginReducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case 'field':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const initialState = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'login' });
  };

  return (
    <>
      <h1>useReducer</h1>
      {username}
      <form>
        <input
          type="text"
          value={username}
          onChange={(e) =>
            dispatch({
              type: 'field',
              field: 'username',
              value: e.currentTarget.value,
            })
          }
        />
        <button type="button" onClick={onSubmit}>
          submit
        </button>
      </form>
    </>
  );
};

export default Reducer;
