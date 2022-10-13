import React, { useState } from 'react';
import SingleItem from '../SingleItem/SingleItem';
import { useGlobalContext } from '../context';
import {
  HeadphoneContainer,
  InnerContainer,
  ImageContainer,
  SeeProductContainer,
  InfoContainer,
} from './headPhonesStyles';

const Headphones = () => {
  const { headPhones } = useGlobalContext();
  return (
    <HeadphoneContainer>
      {headPhones
        .map((headPhone, index) => {
          return (
            <SingleItem
              key={headPhone.id}
              index={index}
              product={headPhone}
            ></SingleItem>
          );
        })
        .reverse()}
    </HeadphoneContainer>
  );
};

export default Headphones;
