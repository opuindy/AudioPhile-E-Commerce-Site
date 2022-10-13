import styled from 'styled-components';

const modalBlack = 'rgba(0, 0, 0, 0.3);';
const orange = '#D87D4A';
const white = '#FFFFFF';
const lightBlack = '#101010';
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
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 550px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 2em;
  background: ${gray};
  border-radius: 10px;
`;

export const InfoContainer = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5em;
`;

export const ConfirmOrderTitle = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    font-weight: ${bold};
    font-size: 1.2rem;
    text-transform: uppercase;
    @media screen and (max-width: 410px) {
      font-size: 1rem;
    }
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  color: ${lightBlack};
  font-weight: ${bold};
  text-transform: capitalize;
  font-size: 0.9rem;
  margin-bottom: 0.7em;

  span {
    color: ${orange};
    margin-right: 0.5em;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.8rem;
  background: ${orange};
  letter-spacing: 0.1em;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${white};
  text-transform: uppercase;
  font-weight: ${bold};
  margin-bottom: 0.8em;
  position: relative;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
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
`;

export const MoreItems = styled.h3`
  margin-right: auto;
  font-size: 1rem;
  @media screen and (max-width: 410px) {
    font-size: 1rem;
  }
  span {
    color: ${orange};
    font-weight: ${bold};
  }
`;

export const GranTotal = styled.h3`
  margin-top: 3em;
  margin-bottom: 3em;
  margin-right: auto;
  @media screen and (max-width: 410px) {
    font-size: 1rem;
  }

  span {
    padding: 0.8em;
    font-size: 1rem;
    color: ${white};
    background: ${lightBlack};
    @media screen and (max-width: 410px) {
      font-size: 1.1rem;
    }
  }
`;

export const ProceedBtn = styled(Button)``;
