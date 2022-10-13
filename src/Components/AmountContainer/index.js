import React from 'react';
import Amount from './Amount';

const index = ({ amount, id, decrement, increment }) => {
  return (
    <>
      <Amount
        amount={amount}
        id={id}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
};

export default index;
