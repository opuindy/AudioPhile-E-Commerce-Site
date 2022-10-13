import React from 'react';
import { EarphonesContainer } from './earphoneStyles';
import SingleItem from '../SingleItem/SingleItem';
import { useGlobalContext } from '../context';

const EarphonesComponent = () => {
  const { earphones } = useGlobalContext();
  return (
    <EarphonesContainer>
      {earphones.map((earphones, index) => {
        return (
          <SingleItem
            key={earphones.id}
            index={index}
            product={earphones}
          ></SingleItem>
        );
      })}
    </EarphonesContainer>
  );
};

export default EarphonesComponent;
