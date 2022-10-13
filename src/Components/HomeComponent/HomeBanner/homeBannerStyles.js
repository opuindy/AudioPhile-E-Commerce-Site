import styled from 'styled-components';
import { homeImages } from '../../../Utilities/shareTools';

const white = '#FFFFFF';
const black = '#000000';

const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;

export const HomeBannerContainer = styled.div`
  width: 100%;
  height: 80vh;
  background: ${black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -18vh;
  z-index: 0;
  margin-bottom: 6em;
  position: relative;
  &::after {
    display: block;
    content: '';
    height: 100%;
    width: 100%;
    background: white;
    opacity: 10.5%;
    z-index: -1;
    position: absolute;
    top: 0;
    pointer-events: none;
    transition: ${mainTransition};
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1204px) {
    height: 90vh;
    margin-bottom: 4em;
    &::after {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      background: white;
      opacity: 9.5%;
      z-index: 1;
      position: absolute;
      top: 0;
      pointer-events: none;
      transition: ${mainTransition};
    }
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: url(${homeImages.mobile_hero});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  position: relative;
  z-index: 2;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    background: url(${homeImages.tablet_hero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }

  @media screen and (min-width: 1204px) {
    background: url(${homeImages.desktop_hero});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
`;

export const TextContainer = styled.div`
  width: 90%;
  max-width: 480px;
  height: 50vh;
  background: rgba(255, 255, 255, 0);
  position: absolute;
  top: 53%;
  left: 50%;
  padding: 4em 0;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    top: 50%;
    height: 53vh;
  }

  @media screen and (min-width: 1204px) {
    max-width: 600px;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
    height: 55vh;
    align-items: flex-start;
  }
`;

export const NewProDuctText = styled.p`
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: silver;
  @media screen and (max-width: 410px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    font-size: 1rem;
    letter-spacing: 0.35em;
  }
  @media screen and (min-width: 1204px) {
    font-size: 1rem;
    letter-spacing: 0.35em;
    margin-right: auto;
    text-align: left;
  }
`;
export const ProductTitle = styled.h2`
  font-size: 2.1rem;
  font-weight: 600;
  text-transform: uppercase;
  width: 75%;
  color: ${white};

  @media screen and (max-width: 410px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    font-size: 2.8rem;
    width: 80%;
  }
  @media screen and (min-width: 1204px) {
    font-size: 3.2rem;
    width: 80%;
    margin-right: auto;
    text-align: left;
  }
`;

export const ProductInfo = styled.p`
  width: 75%;
  color: ${white};
  font-size: 0.9rem;
  font-weight: 400;
  line-height: ${lineHeigth};
  @media screen and (max-width: 410px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    font-size: 1rem;
    width: 80%;
  }

  @media screen and (min-width: 1204px) {
    margin-right: auto;
    text-align: left;
    font-size: 1rem;
    width: 70%;
  }
`;
