import styled from 'styled-components';
import { homeImages } from '../../../../Utilities/shareTools';

const mainTransition = `all 0.3s linear`;

export const Homeszx7SpeakerContainer = styled.article`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2em;
  margin-bottom: 2em;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (min-width: 1204px) {
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 35vh;
  border-radius: 10px;
  background: url(${homeImages.mobile_speaker});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: ${mainTransition};

  h2 {
    font-size: 1.6rem;
    text-transform: uppercase;
    @media screen and (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    background: url(${homeImages.tablet_speaker});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    padding: 5em 5em;
    width: 95vh;
    height: 38vh;
  }

  @media screen and (min-width: 1204px) {
    background: url(${homeImages.desktop_speaker});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
    padding: 6em 5em;
    height: 45vh;
  }
`;
