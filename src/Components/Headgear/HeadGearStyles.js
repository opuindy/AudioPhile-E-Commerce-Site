import styled from 'styled-components';

const orange = '#D87D4A';
const mainTransition = `all 0.3s linear`;

export const HeadgearContainer = styled.article`
  width: 100%;
  height: max-content;
  padding: 0 2em;
  margin-top: 1.5em;
  margin-bottom: 7em;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (min-width: 1204px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const InnerContainer = styled.div`
  height: max-content;
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  transition: ${mainTransition};

  @media screen and (max-width: 380px) {
    height: 100vh;
  }

  @media screen and (min-width: 1204px) {
    flex-direction: row-reverse;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 55vh;
  border-radius: 10px;
  img {
    display: block;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  @media screen and (max-width: 480px) {
    height: 40%;
  }

  @media screen and (max-width: 767px) {
    max-width: 450px;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 100%;
    max-width: 1203px;
    height: 50vh;
  }
  @media screen and (min-width: 1204px) {
    height: 75vh;
    width: 45%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 480px) {
    height: 60%;
  }

  @media screen and (min-width: 1204px) {
    height: 80%;
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  margin-top: 1.5em;
  span {
    color: ${orange};
  }
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1em;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    font-size: 2rem;
    margin-bottom: 0;
    width: 50%;
    letter-spacing: 0.05em;
    line-height: 1.3;
  }

  @media screen and (min-width: 1204px) {
    width: 55%;
    margin-bottom: 1em;
    text-align: left;
    margin-right: auto;
    font-size: 2rem;
    letter-spacing: 0em;
    line-height: 1.5;
  }
`;

export const Text = styled.p`
  margin: 1em 0;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: center;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 70%;
    font-size: 1rem;
  }

  @media screen and (min-width: 1204px) {
    width: 80%;
    font-size: 1rem;
    text-align: left;
    margin-right: auto;
    margin-top: 0;
  }
`;
