import React from 'react';
import SeeProductLinkButton from '../../SeeProductLinkButton/SeeProductLinkButton';
import { useGlobalContext } from '../../context';
import {
  OthersContainer,
  InnerContainer,
  ProductContainer,
  ImageContainer,
  SeeProductContainer,
} from './otherStyles';

const Others = ({ others }) => {
  const { windowWidth } = useGlobalContext();
  return (
    <OthersContainer>
      <h2 className='also_like'>You may also like</h2>
      <InnerContainer>
        {others.map((other, index) => {
          const { slug, name, image } = other;
          return (
            <ProductContainer key={index}>
              <ImageContainer>
                <div>
                  <img
                    src={
                      (windowWidth <= 768 && image.mobile) ||
                      (windowWidth <= 1203 && image.tablet) ||
                      (windowWidth >= 1204 && image.desktop)
                    }
                    alt={slug}
                  />
                </div>
              </ImageContainer>
              <h2>{name}</h2>
              <SeeProductContainer>
                <SeeProductLinkButton slug={slug} />
              </SeeProductContainer>
            </ProductContainer>
          );
        })}
      </InnerContainer>
    </OthersContainer>
  );
};

export default Others;
