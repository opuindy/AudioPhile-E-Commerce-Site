import React from 'react';
import { CartItemContainer, AmountContainer } from './cartStyles';
import { images } from '../../Utilities/shareTools';
import Amount from '../AmountContainer/Amount';

const CartItem = ({
  price,
  name,
  image,
  slug,
  id,
  removeItem,
  increment,
  decrement,
  amount,
}) => {
  const inc = 'inc';
  const dec = 'dec';
  return (
    <>
      <CartItemContainer>
        <div className='item_container'>
          <div className='img_container'>
            <img src={image.mobile} alt={slug} className='cart_img' />
          </div>
          <div>
            <div className='price_container'>
              <h4 className='product_name'>{`${name.slice(0, 5)}...`}</h4>
              <p className='product_price'>${price}</p>
            </div>
          </div>
        </div>
        <AmountContainer>
          <div className='amount'>
            <Amount
              amount={amount}
              id={id}
              increment={increment}
              decrement={decrement}
            />
          </div>
          <button
            className='delete_btn'
            type='button'
            onClick={() => removeItem(id)}
          >
            <img src={images.delete_icon} alt='delete' />
          </button>
        </AmountContainer>
      </CartItemContainer>
    </>
  );
};

export default CartItem;
