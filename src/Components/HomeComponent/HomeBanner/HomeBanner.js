import React from 'react';
import SeeProductLinkButton from '../../SeeProductLinkButton/SeeProductLinkButton';
import data from '../../../data.json';
import {
  HomeBannerContainer,
  BackgroundContainer,
  TextContainer,
  NewProDuctText,
  ProductTitle,
  ProductInfo,
} from './homeBannerStyles';

const HomeBanner = () => {
  const slug = data[3].slug;
  return (
    <HomeBannerContainer>
      <BackgroundContainer>
        <TextContainer>
          <NewProDuctText>New Product</NewProDuctText>
          <ProductTitle>XX99 Mark II Headphones</ProductTitle>
          <ProductInfo>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </ProductInfo>
          <SeeProductLinkButton slug={slug} />
        </TextContainer>
      </BackgroundContainer>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
