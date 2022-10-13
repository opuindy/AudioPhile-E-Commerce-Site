import React from 'react';
import { Link } from 'react-router-dom';
import {
  CategoryList,
  ImgContainer,
  CategoryImg,
  CategoryText,
  CategoryLinkContainer,
} from './categoryStyles';

const CategoryItem = ({ catergoryLink, categoryHeight }) => {
  const { id, url, text, text2, arrowRight, photo } = catergoryLink;
  return (
    <CategoryList categoryHeight={categoryHeight}>
      <ImgContainer>
        <CategoryImg src={photo} alt={text} />
      </ImgContainer>
      <CategoryText>{text}</CategoryText>
      <CategoryLinkContainer>
        <Link to={url}>
          <p>{text2}</p>
          <img src={arrowRight} alt='arrowBtn' />
        </Link>
      </CategoryLinkContainer>
    </CategoryList>
  );
};

export default CategoryItem;
