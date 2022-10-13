import React from 'react';
import SeeProductLinkButton from './SeeProductLinkButton';
import { useGlobalContext } from '../context';

const index = ({
  id,
  slug,
  color,
  backGroundColor,
  hoverBackGroundColor,
  border,
  hoverColor,
}) => {
  return (
    <>
      <SeeProductLinkButton
        color={color}
        backGroundColor={backGroundColor}
        hoverBackGroundColor={hoverBackGroundColor}
        border={border}
        hoverColor={hoverColor}
        id={id}
        slug={slug}
      />
    </>
  );
};

export default index;
