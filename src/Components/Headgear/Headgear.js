import React, { useEffect, useState } from 'react';
import { homeImages } from '../../Utilities/shareTools';
import { useGlobalContext } from '../context';
import {
  HeadgearContainer,
  InnerContainer,
  ImageContainer,
  TextContainer,
  Title,
  Text,
} from './HeadGearStyles';

const Headgear = () => {
  const { windowWidth } = useGlobalContext();

  return (
    <HeadgearContainer>
      <InnerContainer>
        <ImageContainer>
          <img
            src={
              (windowWidth <= 768 && homeImages.mobile_gear) ||
              (windowWidth <= 1203 && homeImages.tablet_gear) ||
              (windowWidth >= 1204 && homeImages.desktop_gear)
            }
            alt=''
          />
        </ImageContainer>
        <TextContainer>
          <Title>
            Bringing you the <span>best</span> audio gear
          </Title>
          <Text>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Text>
        </TextContainer>
      </InnerContainer>
    </HeadgearContainer>
  );
};

export default Headgear;
