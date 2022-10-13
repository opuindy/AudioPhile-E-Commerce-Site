import styled from 'styled-components';
import { homeImages } from '../../../../Utilities/shareTools';

const orange = '#D87D4A';
const white = '#FFFFFF';

const mainTransition = `all 0.3s linear`;

export const Homezx9speakerContainer = styled.section`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  padding: 0 2em;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
    height: 75vh;
  }
  @media screen and (min-width: 1204px) {
    height: 75vh;
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
  border-radius: 10px;
  background: ${orange} url(${homeImages.desktop_circle});
  background-size: 100%, contain;
  background-repeat: no-repeat, no-repeat;
  background-position: -5em -6em, center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    background-position: -10em -1em, center;
  }
  @media screen and (min-width: 1204px) {
    flex-direction: row;
    background-position: -5em -9em, center;
    background-size: 65%, contain;
  }
`;

export const SpeakerImage = styled.div`
  height: 37%;
  width: 50%;
  margin-top: auto;
  background: url(${homeImages.mobile_speaker2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto 100%;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 40%;
    width: 40%;
    background: url(${homeImages.tablet_speaker2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }

  @media screen and (min-width: 1204px) {
    height: 82%;
    width: 40%;
    margin-left: 5em;
    background: url(${homeImages.desktop_speaker2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
`;

export const SpeakerInfoContainer = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  transition: ${mainTransition};

  h2 {
    width: 45%;
    max-width: 200px;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${white};
    letter-spacing: 0.1em;
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      width: 45%;
      font-size: 3rem;
    }
    @media screen and (min-width: 1204px) {
      text-align: left;
      width: 45%;
      font-size: 3.5rem;
    }
  }

  p {
    color: ${white};
    width: 80%;

    font-weight: 600;
    line-height: 1.5;
    font-size: 0.9rem;
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      width: 43%;
    }
    @media screen and (min-width: 1204px) {
      text-align: left;
      width: 65%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 57%;
  }
  @media screen and (min-width: 1204px) {
    width: 50%;
    justify-content: space-between;
    align-items: flex-start;
    height: 58%;
  }
`;
