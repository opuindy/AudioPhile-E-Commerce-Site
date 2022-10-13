import React from 'react';
import SeeProductLinkButton from '../../../SeeProductLinkButton/SeeProductLinkButton';
import data from '../../../../data.json';
import {
  HomeEarphonesContainer,
  EarphoneContainer,
  EarPieceImage,
  EarpieceInfo,
} from './homeEarPhonesStyles';

const HomeEarphones = () => {
  const slug = data[0].slug;
  const color = `#000000`;
  const backGroundColor = 'transparent';
  const border = '1px solid #000000';
  const hoverColor = '#FFFFFF';
  const hoverBackGroundColor = 'black';
  return (
    <HomeEarphonesContainer>
      <EarphoneContainer>
        <EarPieceImage></EarPieceImage>
        <EarpieceInfo>
          <h2>YX1 Wireless Earphones</h2>
          <SeeProductLinkButton
            color={color}
            backGroundColor={backGroundColor}
            border={border}
            hoverColor={hoverColor}
            hoverBackGroundColor={hoverBackGroundColor}
            slug={slug}
          />
        </EarpieceInfo>
      </EarphoneContainer>
    </HomeEarphonesContainer>
  );
};

export default HomeEarphones;
