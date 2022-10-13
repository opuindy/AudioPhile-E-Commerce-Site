import styled from 'styled-components';
import { homeImages } from '../../../../Utilities/shareTools';

const gray = '#F1F1F1';
const lineHeigth = `1.5`;
/* font-weights:  */
const bold = `700`;

export const HomeEarphonesContainer = styled.article`
  width: 100%;
  height: max-content;
  padding: 0 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3em;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 38vh;
    padding: 0 3em;
    margin-top: 3em;
  }
  @media screen and (min-width: 1204px) {
    height: 45vh;
    padding: 0;
    margin-top: 3em;
  }
`;

export const EarphoneContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
  }
`;

export const EarPieceImage = styled.div`
  width: 100%;
  height: 48%;
  border-radius: 10px;
  background: url(${homeImages.mobile_earphones});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% auto;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 49%;
    height: 100%;
    background: url(${homeImages.tablet_earphones});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
  }
  @media screen and (min-width: 1204px) {
    width: 49%;
    height: 100%;
    background: url(${homeImages.desktop_earphones});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% auto;
  }
`;

export const EarpieceInfo = styled.div`
  width: 100%;
  height: 48%;
  border-radius: 10px;
  background: ${gray};
  padding: 4em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 376px) {
    padding: 2em;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.3rem;
    margin-bottom: auto;
    line-height: ${lineHeigth};
    font-weight: ${bold};
    width: 47%;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
      width: 70%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 49%;
    height: 100%;
    padding: 4em 3em;
  }
  @media screen and (min-width: 1204px) {
    width: 47%;
    height: 100%;
    padding: 4em 4em;
  }
`;
