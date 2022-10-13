import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Utilities/shareTools';
import { links } from '../../Utilities/links';
import { useGlobalContext } from '../context';
import {
  NavHead,
  Nav,
  NavContainer,
  Button,
  NavLinkContainer,
  LogoImg,
  CartIconContainer,
  CartIcon,
  LinkList,
  NavLinks,
} from './navBarStyles';

const Navbar = () => {
  const { openModal, openCartModal, amount } = useGlobalContext();
  return (
    <NavHead>
      <Nav>
        <NavContainer>
          <Button onClick={openModal}>
            <img src={images.hamburger} alt='button_logo' />
          </Button>
          <LogoImg src={images.logo} alt='logo' />
          <NavLinkContainer>
            <NavLinks>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <LinkList key={id}>
                    <Link to={url}>{text}</Link>
                  </LinkList>
                );
              })}
            </NavLinks>
          </NavLinkContainer>
          <CartIconContainer onClick={openCartModal}>
            <p>{amount}</p>
            <CartIcon src={images.cart} alt='cart_icon' />
          </CartIconContainer>
        </NavContainer>
      </Nav>
    </NavHead>
  );
};

export default Navbar;
