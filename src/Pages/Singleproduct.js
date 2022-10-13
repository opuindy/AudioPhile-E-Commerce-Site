import React from 'react';
import Header from '../Components/Header/Header';
import SingleProductComponent from '../Components/SingleProductComponent';
import Categories from '../Components/Categories/Category';
import Headgear from '../Components/Headgear/Headgear';

const Singleproduct = () => {
  const containerHeight = '70vh';
  const categoryHeight = '50%';
  return (
    <>
      <Header />
      <SingleProductComponent />
      <Categories
        categoryHeight={categoryHeight}
        containerHeight={containerHeight}
      />
      <Headgear />
    </>
  );
};

export default Singleproduct;
