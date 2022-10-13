import React from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import {
  CartContainer,
  InnerContainer,
  CartInnerContainer,
  CartHeading,
  CartBody,
} from './cartStyles';

const Cart = () => {
  const {
    closeCartModal,
    cart,
    clearCart,
    removeItem,
    total,
    increment,
    decrement,
    amount,
  } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <CartContainer onClick={closeCartModal}>
        <InnerContainer>
          <CartInnerContainer>
            <CartHeading>
              <h4>cart {`(${amount})`}</h4>
            </CartHeading>
            <CartBody>
              <h4 className='empty'>Cart is Empty</h4>
            </CartBody>
            <button className='checkout_btn'>Checkout</button>
          </CartInnerContainer>
        </InnerContainer>
      </CartContainer>
    );
  }
  return (
    <CartContainer onClick={closeCartModal}>
      <InnerContainer>
        <CartInnerContainer onClick={(e) => e.stopPropagation()}>
          <CartHeading>
            <h4>cart {`(${amount})`}</h4>
            <button type='button' onClick={clearCart}>
              clear cart
            </button>
          </CartHeading>
          <CartBody>
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  {...item}
                  removeItem={removeItem}
                  increment={increment}
                  decrement={decrement}
                />
              );
            })}
            <div className='price_total_container'>
              <h4 className='total'>total</h4>
              <p className='price'>${total}</p>
            </div>
          </CartBody>
          <button
            className='checkout_btn'
            disabled={cart.length < 1 ? true : false}
            onClick={closeCartModal}
          >
            <Link to='/checkout'>Checkout</Link>
          </button>
        </CartInnerContainer>
      </InnerContainer>
    </CartContainer>
  );
};

export default Cart;
