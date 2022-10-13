import React from 'react';
import SingleItem from './SingleItem';

const index = ({ product, index }) => {
  return (
    <>
      <SingleItem product={product} index={index} />
    </>
  );
};

export default index;
