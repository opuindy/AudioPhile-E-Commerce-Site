import styled from 'styled-components';

const orange = '#D87D4A';
const black = '#000000';
const gray = '#F1F1F1';
const lineHeigth = `1.5`;

export const InnerContainer = styled.article`
  width: 100%;
  max-width: 1250px;
  height: 90vh;
  margin: 7em 0;
  margin-bottom: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;

  @media screen and (max-width: 377px) {
    height: 110vh;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
    height: 125vh;
  }
  @media screen and (min-width: 1204px) {
    flex-direction: ${(props) => (props.row ? 'row-reverse' : 'row')};
    height: 55vh;
    padding: 0em;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 65%;
  background: ${gray};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 95%;
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: contain;
      @media screen and (min-width: 1204px) {
        object-fit: contain;
      }
    }
  }
  @media screen and (max-width: 767px) {
    max-width: 500px;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    max-width: 550px;
    height: 72%;
  }
  @media screen and (min-width: 1204px) {
    height: 100%;
    width: 47%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: ${orange};
    letter-spacing: 0.38em;
    text-align: center;
    @media screen and (min-width: 1204px) {
      margin-right: auto;
      text-align: left;
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.5rem;
    letter-spacing: 0.2em;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      font-size: 2rem;
      width: 60%;
      text-align: center;
    }
    @media screen and (min-width: 1204px) {
      font-size: 2rem;
      margin-right: auto;
      text-align: left;
    }
  }
  .text {
    color: ${black};
    letter-spacing: normal;
    line-height: ${lineHeigth};
    text-align: center;
    font-weight: 500;
    max-width: 550px;
    text-align: center;
    @media screen and (min-width: 1204px) {
      margin-right: auto;
      text-align: left;
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 25%;
  }
  @media screen and (min-width: 1204px) {
    height: 58%;
    width: 40%;
    align-items: flex-start;
  }
`;

export const SeeProductContainer = styled.div`
  width: 12rem;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${black};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1204px) {
    margin-right: auto;
  }
`;
