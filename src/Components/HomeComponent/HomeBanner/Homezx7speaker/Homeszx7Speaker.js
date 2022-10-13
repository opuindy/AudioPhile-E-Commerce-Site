import React from 'react';
import SeeProductLinkButton from '../../../SeeProductLinkButton/SeeProductLinkButton';
import data from '../../../../data.json';
import {
  Homeszx7SpeakerContainer,
  InnerContainer,
} from './homeszxpspeakerStyles';

const Homeszx7Speaker = () => {
  const slug = data[4].slug;
  const color = `#000000`;
  const backGroundColor = 'transparent';
  const border = '1px solid #000000';
  const hoverColor = '#FFFFFF';
  const hoverBackGroundColor = 'black';
  return (
    <Homeszx7SpeakerContainer>
      <InnerContainer>
        <h2>ZX7 Speaker</h2>
        <SeeProductLinkButton
          color={color}
          backGroundColor={backGroundColor}
          border={border}
          hoverColor={hoverColor}
          hoverBackGroundColor={hoverBackGroundColor}
          slug={slug}
        />
      </InnerContainer>
    </Homeszx7SpeakerContainer>
  );
};

export default Homeszx7Speaker;
