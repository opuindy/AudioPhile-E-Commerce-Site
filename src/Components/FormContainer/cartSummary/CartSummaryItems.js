import React from 'react';
import { SummaryItemContainer, AmountContainer } from './cartSummaryStyles';

const CartSummaryItems = ({ price, name, image, slug, id, amount }) => {
  return (
    <SummaryItemContainer>
      <div className='item_container'>
        <div className='img_container'>
          <img src={image.mobile} alt={slug} className='cart_img' />
        </div>
        <div>
          <div className='price_container'>
            <h4 className='product_name'>{`${name.slice(0, 5)}`}</h4>
            <p className='product_price'>${price}</p>
          </div>
        </div>
      </div>
      <AmountContainer>
        <p>X {amount}</p>
      </AmountContainer>
    </SummaryItemContainer>
  );
};

export default CartSummaryItems;
