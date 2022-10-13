import React from 'react';
import { HeaderContainer, InnerContainer } from './headerStyles';

const Header = ({ text }) => {
  return (
    <HeaderContainer>
      <InnerContainer>{text || `products`}</InnerContainer>
    </HeaderContainer>
  );
};

export default Header;
