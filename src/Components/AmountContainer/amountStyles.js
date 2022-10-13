import styled from 'styled-components';

const orange = '#D87D4A';
const lightBlack = '#101010';
const gray = '#F1F1F1';

const mainTransition = `all 0.3s linear`;
/* font-weights:  */
const bold = `700`;

export const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${gray};
  p {
    margin: auto;
    font-size: 0.9rem;
    font-weight: ${bold};
    color: ${lightBlack};
  }
`;

export const DecreaseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  outline: none;
  width: 1.4rem;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
    color: ${orange};
    transform: scale(1.5);
  }
`;

export const IncreaseBtn = styled(DecreaseBtn)``;
