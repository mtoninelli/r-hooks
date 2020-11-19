import React, { memo } from 'react';

const Child = (props) => {
  console.log('Render Child');

  return (
    <>
      <p>Child number: {props.number}</p>
      <button onClick={props.increaseNumber}>Increase Child number</button>
    </>
  );
};

export default memo(Child);
