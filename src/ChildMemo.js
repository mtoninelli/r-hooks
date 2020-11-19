import React, { memo } from 'react';

const ChildMemo = (props) => {
  console.log('Render ChildMemo');

  return (
    <>
      <p>ChildMemo number: {props.number}</p>
    </>
  );
};

/**
 * the Component is reloaded,
 * from the father component,
 * only when the props change.
 */
export default memo(ChildMemo);
