import React from 'react';
import CartSummaryItems from './CartSummaryItems';
import { useGlobalContext } from '../../context';
import { Container, SummaryHeading, SummaryBody } from './cartSummaryStyles';

const CartSummary = ({ handleSubmit }) => {
  const { total, cart } = useGlobalContext();
  const shipping = 50;
  let vat = (20 / 100) * total;
  vat = parseFloat(vat.toFixed(2));
  let grandTotal = shipping + vat + total;
  grandTotal = parseFloat(grandTotal.toFixed(2));
  return (
    <Container>
      <SummaryHeading>
        <h4>Summary</h4>
      </SummaryHeading>
      <SummaryBody>
        {cart.map((cartItem) => {
          return <CartSummaryItems key={cartItem.id} {...cartItem} />;
        })}

        <div className='price_total_container'>
          <div className='Individual_total'>
            <h4 className='total'>total</h4>
            <p className='price'>${total}</p>
          </div>
          <div className='Individual_total'>
            <h4 className='total'>shipping</h4>
            {cart.length > 0 ? (
              <p className='price'>${shipping}</p>
            ) : (
              <p className='price'>$0</p>
            )}
          </div>
          <div className='Individual_total'>
            <h4 className='total'>VAT{'(included)'}</h4>
            <p className='price'>${vat}</p>
          </div>
          <div className='Individual_total'>
            <h4 className='total'>GRAND TOTAL</h4>
            {cart.length > 0 ? (
              <p className='price'>${grandTotal}</p>
            ) : (
              <p className='price'>$0</p>
            )}
          </div>
        </div>
      </SummaryBody>
      <button className='checkout_btn' type='submit' onClick={handleSubmit}>
        Continue {'&'} pay
      </button>
    </Container>
  );
};

export default CartSummary;
