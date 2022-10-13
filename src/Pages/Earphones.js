import React from 'react';
import Header from '../Components/Header/Header';
import Categories from '../Components/Categories/Category';
import Headgear from '../Components/Headgear/Headgear';
import EarphonesComponent from '../Components/EarphonesComponent/EarphonesComponent';

const Earphones = () => {
  const text = `Earphones`;
  const containerHeight = '70vh';
  const categoryHeight = '50%';
  return (
    <>
      <Header text={text} />
      <EarphonesComponent />
      <Categories
        containerHeight={containerHeight}
        categoryHeight={categoryHeight}
      />
      <Headgear />
    </>
  );
};

export default Earphones;
