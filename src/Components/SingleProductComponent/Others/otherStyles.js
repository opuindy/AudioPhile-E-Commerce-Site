import styled from 'styled-components';

const gray = '#F1F1F1';

export const OthersContainer = styled.section`
  width: 100%;
  max-width: 1350px;
  height: max-content;
  margin: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2em;

  .also_like {
    text-transform: uppercase;
    font-size: 1.6rem;
    font-weight: 550;
    @media screen and (min-width: 768px) {
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }

  @media screen and (min-width: 1204px) {
    padding: 0em;
    margin: 3.5em 0;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1204px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  height: 38vh;
  margin: 1em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 32%;
    height: 60vh;
    margin: 0;
  }

  @media screen and (min-width: 1204px) {
    width: 31%;
    height: 50vh;
    margin: 0;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${gray};
  border-radius: 10px;
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
      object-fit: cover;
      @media screen and (min-width: 1204px) {
        object-fit: contain;
      }
    }
  }
`;

export const SeeProductContainer = styled.div`
  width: 12rem;
  height: 6vh;
  background: ${gray};
  display: flex;
  justify-content: center;
  align-items: center;
`;
