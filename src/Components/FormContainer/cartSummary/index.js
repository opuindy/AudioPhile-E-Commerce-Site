import React from 'react';
import CartSummary from './CartSummary';

const index = ({ handleSubmit }) => {
  return (
    <>
      <CartSummary handleSubmit={handleSubmit} />
    </>
  );
};

export default index;
