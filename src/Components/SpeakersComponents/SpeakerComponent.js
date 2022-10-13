import React from 'react';
import { SpeakerContainer } from './speakerComponentStyles';
import SingleItem from '../SingleItem/SingleItem';
import { useGlobalContext } from '../context';

const SpeakerComponent = () => {
  const { speakers } = useGlobalContext();
  return (
    <SpeakerContainer>
      {speakers
        .map((speaker, index) => {
          return (
            <SingleItem
              key={speaker.id}
              index={index}
              product={speaker}
            ></SingleItem>
          );
        })
        .reverse()}
    </SpeakerContainer>
  );
};

export default SpeakerComponent;
