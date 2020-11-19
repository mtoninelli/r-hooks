import React, { memo, useCallback, useRef } from 'react';

const ChildLazy = (props) => {
  console.log('Render ChildLazy');
  const myImg = useRef(null);
  const onRefHandler = useCallback(() => {
    console.log(myImg);
  }, []);
  return (
    <>
      <p>ChildLazy</p>
      <img
        ref={myImg}
        src="https://kbob.github.io/images/sample-5.jpg"
        alt=""
        width="100"
        height="100"
      />
      <button onClick={onRefHandler}>img onRef()</button>
    </>
  );
};

export default memo(ChildLazy);
