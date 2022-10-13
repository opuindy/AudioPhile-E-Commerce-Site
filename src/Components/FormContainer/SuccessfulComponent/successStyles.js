import styled from 'styled-components';

const modalBlack = 'rgba(0, 0, 0, 0.3);';
const orange = '#D87D4A';
const white = '#FFFFFF';
const gray = '#F1F1F1';
const mainTransition = `all 0.3s linear`;
/* font-weights:  */
const bold = `700`;

export const Container = styled.section`
  width: 100%;
  padding: 2em;
  height: 100%;
  background: ${modalBlack};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: ${mainTransition};
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 430px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: ${gray};
  border-radius: 10px;
  transition: ${mainTransition};
`;

export const InfoContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};
  p {
    text-align: center;
    margin-bottom: auto;
    @media screen and (max-width: 410px) {
      font-size: 0.9rem;
    }
  }
`;

export const MarkedContainer = styled.div`
  margin-top: 1em;
  margin-bottom: 1em;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  background: ${orange};
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    height: 1rem;
    width: 3rem;
    border-left: 5px solid ${white};
    border-bottom: 5px solid ${white};
    transform: rotate(-45deg);
    margin: auto;
    margin-top: 2.5em;
  }

  @media screen and (max-width: 767px) {
    margin-top: 1.5em;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background: ${orange};
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
      content: '';
      display: block;
      height: 1rem;
      width: 2.6rem;
      border-left: 5px solid ${white};
      border-bottom: 5px solid ${white};
      transform: rotate(-45deg);
      margin: auto;
    }
  }
`;

export const Title = styled.h4`
  font-size: 1.7rem;
  text-transform: uppercase;
  margin-bottom: 0.5em;
  @media screen and (max-width: 410px) {
    font-size: 1.4rem;
  }
`;

export const LinkContainer = styled.div`
  width: 100%;
  height: 4.5vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  transition: ${mainTransition};
  border-radius: 10px;

  a {
    display: block;
    height: 100%;
    width: 70%;
    color: ${white};
    font-size: 0.9rem;
    font-weight: ${bold};
    text-transform: uppercase;
    background: ${orange};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
      color: ${white};
      &::after {
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        background: ${white};
        opacity: 30%;
        z-index: 1;
        position: absolute;
        top: 0;
        pointer-events: none;
        transition: ${mainTransition};
      }
    }
  }
`;
