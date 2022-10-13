import React from 'react';
import HomeBanner from '../Components/HomeComponent/HomeBanner';
import Category from '../Components/Categories';
import { Section } from './sharedLayoutStyled';
import Homezx9speaker from '../Components/HomeComponent/HomeBanner/Homezx9speaker';
import Homeszx7Speaker from '../Components/HomeComponent/HomeBanner/Homezx7speaker';
import HomeEarphones from '../Components/HomeComponent/HomeBanner/Homeearphones';
import Headgear from '../Components/Headgear/Headgear';

const Home = () => {
  const containerHeight = '70vh';
  const categoryHeight = '50%';
  return (
    <>
      <HomeBanner />
      <Category
        containerHeight={containerHeight}
        categoryHeight={categoryHeight}
      />
      <Homezx9speaker />
      <Homeszx7Speaker />
      <HomeEarphones />
      <Headgear />
    </>
  );
};
export default Home;
