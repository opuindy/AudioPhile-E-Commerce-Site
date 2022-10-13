import React from 'react';
import CategoryItem from './CatergoryItem';
import { categoryLinks } from '../../Utilities/links';
import { CategoryContainer } from './categoryStyles';

const Category = ({ containerHeight, categoryHeight }) => {
  return (
    <CategoryContainer containerHeight={containerHeight}>
      {categoryLinks.map((catergoryLink) => {
        const { id } = catergoryLink;
        return (
          <CategoryItem
            key={id}
            catergoryLink={catergoryLink}
            categoryHeight={categoryHeight}
          />
        );
      })}
    </CategoryContainer>
  );
};

export default Category;
