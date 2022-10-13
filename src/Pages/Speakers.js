import React from 'react';
import Header from '../Components/Header/Header';
import SpeakerComponent from '../Components/SpeakersComponents';
import Categories from '../Components/Categories/Category';
import Headgear from '../Components/Headgear';

const Speakers = () => {
  const text = `Speakers`;
  const containerHeight = '70vh';
  const categoryHeight = '50%';
  return (
    <>
      <Header text={text} />
      <SpeakerComponent />
      <Categories
        containerHeight={containerHeight}
        categoryHeight={categoryHeight}
      />
      <Headgear />
    </>
  );
};

export default Speakers;
