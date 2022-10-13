import React from 'react';
import Header from '../Components/Header';
import Headphones from '../Components/HeadphonesComponent';
import Category from '../Components/Categories/Category';
import Headgear from '../Components/Headgear/Headgear';
import { useGlobalContext } from '../Components/context';

const HeadPhones = () => {
  const { headPhones } = useGlobalContext();
  const text = `Headphones`;
  const containerHeight = '55vh';
  const categoryHeight = '65%';
  return (
    <>
      <Header text={text} />
      <Headphones headPhones={headPhones} />
      <Category
        containerHeight={containerHeight}
        categoryHeight={categoryHeight}
      />
      <Headgear />
    </>
  );
};

export default HeadPhones;
