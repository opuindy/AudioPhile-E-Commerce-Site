import styled from 'styled-components';

const modalBlack = 'rgba(0, 0, 0, 0.3);';

export const ModalContainer = styled.section`
  width: 100vw;
  height: 100%;
  background: ${modalBlack};
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding-top: 14em;
  }
`;
