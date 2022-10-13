import React from 'react';
import { Link } from 'react-router-dom';
import { ProductLinkContainer } from './seeProductLinkButtonStyles';

const SeeProductLinkButton = ({
  color,
  backGroundColor,
  hoverBackGroundColor,
  border,
  hoverColor,
  id,
  slug,
}) => {
  return (
    <ProductLinkContainer
      color={color}
      backGroundColor={backGroundColor}
      hoverBackGroundColor={hoverBackGroundColor}
      border={border}
      hoverColor={hoverColor}
      id={id}
      slug={slug}
    >
      <Link to={`/product/${slug}`}>See Product</Link>
    </ProductLinkContainer>
  );
};

export default SeeProductLinkButton;
