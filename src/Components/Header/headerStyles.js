import styled from 'styled-components';

const white = '#FFFFFF';
const black = '#000000';
const lightGray = '#FAFAFA';
/* font-weights:  */
const regular = `400`;

export const HeaderContainer = styled.section`
  width: 100%;
  height: 30vh;
  background: ${black};
  margin-top: -15vh;
  padding: 0 2em;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
    height: 34vh;
    margin-top: -17vh;
  }

  @media screen and (min-width: 1204px) {
    padding: 0;
    height: 34vh;
    margin-top: -17vh;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 50%;
  margin-top: auto;
  color: ${white};
  border-top: 0.5px dotted ${lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  text-transform: uppercase;
  font-weight: ${regular};
  letter-spacing: 0.18rem;

  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    font-weight: ${regular};
  }
`;
