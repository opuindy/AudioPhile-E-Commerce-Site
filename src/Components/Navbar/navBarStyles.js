import styled from 'styled-components';

const orange = '#D87D4A';
const lightOrange = '#fbaf85';
const white = '#FFFFFF';
const lightBlack = '#101010';
const black = '#000000';
const colorBlack = '#333';
const gray = '#F1F1F1';
const lightGray = '#FAFAFA';
const lightColor = '#66bf3c';
const lightBlue = ' #1ea7fd';
const Black_lightbox = 'hsl(0, 0%, 75%)';

const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;
const borderRadius = `0.625rem`;
/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const NavHead = styled.header`
  width: 100vw;
  height: 17vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${black};
  background: transparent;
  /* position: absolute; */
  position: relative;
  /* top: 0; */
  /* left: 0; */
  z-index: 5;
  @media screen and (max-width: 768px) {
    height: 15vh;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};
`;

export const NavContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};
  @media screen and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (max-width: 768px) {
    padding: 0 2em;
  }
`;

export const Button = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  background: none;
  border: 1px solid white;
  border-radius: 7px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

  img {
    width: 60%;
    height: 60%;
    transition: ${mainTransition};
    &:hover {
      transform: scale(0.9);
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1203px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  height: 1.7rem;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    transition: ${mainTransition};
    margin-right: auto;
    margin-left: 2em;
  }
`;

export const NavLinkContainer = styled.div`
  transition: ${mainTransition};
  width: 50%;

  @media screen and (max-width: 1203px) {
    transition: ${mainTransition};
    display: none;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LinkList = styled.li`
  display: block;
  padding: 0 1em;
  transition: ${mainTransition};
  a {
    color: ${white};
    font-weight: ${bold};
    transition: ${mainTransition};

    &:hover {
      color: ${orange};
    }
  }
`;

export const CartIconContainer = styled.div`
  height: 2.1rem;
  width: 2.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: ${mainTransition};

  p {
    position: absolute;
    top: -55%;
    left: 19%;
    color: ${white};
    font-size: 0.9rem;
    padding: 2px 5px;
    width: max-content;
    min-width: 1.6rem;
    border-radius: 50px;
    background: ${orange};
    text-align: center;
    font-size: ${bold};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled.img`
  height: 90%;
  width: 90%;
  transition: ${mainTransition};
  &:hover {
    cursor: pointer;
  }
`;
