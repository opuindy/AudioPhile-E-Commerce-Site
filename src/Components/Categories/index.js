import React from 'react';
import Category from './Category';

const index = ({ containerHeight, categoryHeight }) => {
  return (
    <>
      <Category
        containerHeight={containerHeight}
        categoryHeight={categoryHeight}
      />
    </>
  );
};

export default index;
