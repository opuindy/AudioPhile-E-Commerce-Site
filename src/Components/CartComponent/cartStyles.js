import styled from 'styled-components';

const modalBlack = 'rgba(0, 0, 0, 0.3);';
const orange = '#D87D4A';
const white = '#FFFFFF';
const lightBlack = '#101010';
const gray = '#F1F1F1';
const mainTransition = `all 0.3s linear`;

/* font-weights:  */

const bold = `700`;

export const CartContainer = styled.section`
  width: 100vw;
  height: 100%;
  background: ${modalBlack};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2em;
  z-index: 3;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (min-width: 1204px) {
    padding: 0;
  }
`;

export const CartInnerContainer = styled.div`
  width: 100%;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: white;
  margin-bottom: auto;
  margin-top: 18vh;
  margin-left: auto;
  padding: 1em 2em;
  border-radius: 10px;
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 450px;
  }

  .checkout_btn {
    width: 100%;
    height: 3rem;
    background: ${orange};
    border: none;
    display: flex;
    letter-spacing: 0.1em;
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
  a {
    display: block;
    height: 100%;
    width: 100%;
    color: ${white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CartHeading = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${lightBlack};

  h4 {
    text-transform: uppercase;
    font-weight: ${bold};
    font-size: 1.2rem;
    margin-right: auto;
    letter-spacing: 0.05em;
  }

  button {
    width: 9rem;
    height: 2rem;
    background: none;
    border: none;
    outline: none;
    font-size: 1rem;
    color: ${lightBlack};
    text-transform: capitalize;
    text-decoration: dotted;
    letter-spacing: 0.1em;
    transition: ${mainTransition};
    &:hover {
      cursor: pointer;
      border: 1px dotted ${orange};
      text-decoration: none;
    }
  }
`;

export const CartBody = styled.div`
  width: 100%;
  min-height: 11vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  transition: ${mainTransition};
  position: relative;

  .empty {
    text-transform: capitalize;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .price_total_container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;
  }

  .total {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.1rem;
    font-weight: 400;
  }

  .price {
    font-weight: 400;
    letter-spacing: normal;
  }
`;

export const CartItemContainer = styled.div`
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
    color: ${lightBlack};
  }
`;

export const AmountContainer = styled.div`
  height: 2rem;
  width: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .amount {
    height: 100%;
    width: 70%;
    background: ${gray};
  }
  .delete_btn {
    width: 25%;
    height: 80%;
    outline: none;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ${mainTransition};
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
    img {
      height: 75%;
      width: 75%;
    }
  }
`;
