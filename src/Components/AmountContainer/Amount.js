import React from 'react';
import { AmountContainer, DecreaseBtn, IncreaseBtn } from './amountStyles';
import { useGlobalContext } from '../context';

const Amount = ({ amount, id, decrement, increment }) => {
  const { toggleAmount } = useGlobalContext();
  return (
    <AmountContainer>
      <DecreaseBtn type='button' onClick={() => decrement(id)}>
        -
      </DecreaseBtn>
      <p>{amount}</p>
      <IncreaseBtn type='button' onClick={() => increment(id)}>
        +
      </IncreaseBtn>
    </AmountContainer>
  );
};

export default Amount;
