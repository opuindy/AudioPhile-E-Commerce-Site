import React from 'react';
import ConfirmOrder from './ConfirmOrder';

const index = ({
  method,
  people,
  closeShowConfirmOrder,
  handleOpenSuccessful,
}) => {
  return (
    <>
      <ConfirmOrder
        method={method}
        people={people}
        closeShowConfirmOrder={closeShowConfirmOrder}
        handleOpenSuccessful={handleOpenSuccessful}
      />
    </>
  );
};

export default index;
