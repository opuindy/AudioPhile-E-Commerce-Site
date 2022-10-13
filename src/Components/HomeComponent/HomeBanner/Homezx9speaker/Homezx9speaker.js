import React from 'react';
import SeeProductLinkButton from '../../../SeeProductLinkButton/SeeProductLinkButton';
import data from '../../../../data.json';
import {
  Homezx9speakerContainer,
  InnerContainer,
  SpeakerImage,
  SpeakerInfoContainer,
} from './homezx9SpeakerStyles';

const Homezx9speaker = () => {
  const slug = data[5].slug;
  const backGroundColor = `#000000`;
  const hoverBackGroundColor = `#F1F1F1`;
  return (
    <Homezx9speakerContainer>
      <InnerContainer>
        <SpeakerImage></SpeakerImage>
        <SpeakerInfoContainer>
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <SeeProductLinkButton
            backGroundColor={backGroundColor}
            hoverBackGroundColor={hoverBackGroundColor}
            slug={slug}
          />
        </SpeakerInfoContainer>
      </InnerContainer>
    </Homezx9speakerContainer>
  );
};

export default Homezx9speaker;
