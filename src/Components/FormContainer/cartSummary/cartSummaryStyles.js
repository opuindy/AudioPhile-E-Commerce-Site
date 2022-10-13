import styled from 'styled-components';

const orange = '#D87D4A';
const white = '#FFFFFF';
const lightBlack = '#101010';
const gray = '#F1F1F1';
const mainTransition = `all 0.3s linear`;
/* font-weights:  */
const bold = `700`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .checkout_btn {
    width: 100%;
    height: 2.8rem;
    background: ${orange};
    letter-spacing: 0.1em;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5em;
    color: ${white};
    text-transform: uppercase;
    font-weight: ${bold};
    position: relative;
    transition: ${mainTransition};

    &:hover {
      cursor: pointer;
      &::after {
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        background: ${white};
        opacity: 30%;
        z-index: 1;
        position: absolute;
        top: 0;
        pointer-events: none;
        transition: ${mainTransition};
      }
    }
  }
`;

export const SummaryHeading = styled.div`
  width: 100%;
  height: 3rem;
  margin-bottom: 1.5em;
  padding-top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${lightBlack};

  h4 {
    text-transform: uppercase;
    font-weight: ${bold};
    font-size: 1.2rem;
    margin-right: auto;
    font-weight: 600;
    letter-spacing: 0.05em;
  }
`;

export const SummaryBody = styled.div`
  width: 100%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .price_total_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
  }

  .Individual_total {
    width: 100%;
    display: flex;
    font-weight: ${bold};
    color: ${lightBlack};
    justify-content: space-between;
    align-items: center;
    margin-top: 0.6em;
  }

  .total {
    font-weight: 100;
    text-transform: uppercase;
    color: ${lightBlack};
  }
`;

export const SummaryItemContainer = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.4em 0;

  .item_container {
    height: 100%;
    width: max-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .img_container {
    height: 100%;
    width: 65px;
    background: ${gray};
    border-radius: 10px;
    margin-right: 1em;
  }

  .cart_img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  .price_container {
    height: 2.9rem;
    width: max-content;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin-right: auto;
      font-weight: 400;
    }
  }
  .product_price {
    font-weight: 700;
    margin-right: auto;
  }
  .product_price {
    color: silver;
  }
`;

export const AmountContainer = styled.div`
  height: 2rem;
  width: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${lightBlack};
  }
`;
