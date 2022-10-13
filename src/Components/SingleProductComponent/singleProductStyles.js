import styled from 'styled-components';

const orange = '#D87D4A';
const white = '#FFFFFF';
const lightBlack = '#101010';
const black = '#000000';
const gray = '#F1F1F1';
const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;
/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const SingleProductContainer = styled.section`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};
`;

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 90vh;
  margin: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em;
  position: relative;
  transition: ${mainTransition};

  @media screen and (max-width: 410px) {
    height: 115vh;
    margin-bottom: 2em;
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
    height: 50vh;
    flex-direction: row;
  }
  @media screen and (min-width: 1204px) {
    width: 100%;
    max-width: 1250px;
    height: 55vh;
    margin: 4em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-top: 6em;
  }
`;

export const GoBack = styled.p`
  font-weight: ${regular};
  color: grey;
  position: absolute;
  top: -2.5em;
  left: 2em;
  transition: ${mainTransition};

  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    left: 3em;
  }
  @media screen and (min-width: 1204px) {
    left: 0;
    top: -3.5em;
  }
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background: ${gray};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

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
  @media screen and (max-width: 767px) {
    max-width: 500px;
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 38%;
    max-width: 360px;
    height: 100%;
  }
  @media screen and (min-width: 1204px) {
    height: 100%;
    width: 45%;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: ${mainTransition};

  p {
    color: ${orange};
    letter-spacing: 0.38em;
    text-align: left;
    margin-right: auto;
    @media screen and (min-width: 1204px) {
      margin-right: auto;
      text-align: left;
    }
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    letter-spacing: 0.1em;
    text-align: left;
    margin-right: auto;
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      font-size: 2rem;
      width: 75%;
      text-align: left;
    }
    @media screen and (min-width: 1204px) {
      font-size: 2.2rem;
      margin-right: auto;
      text-align: left;
    }
  }
  .text {
    color: ${black};
    letter-spacing: normal;
    line-height: ${lineHeigth};
    text-align: left;
    margin-right: auto;
    font-weight: 500;
    max-width: 550px;
    transition: ${mainTransition};
    @media screen and (min-width: 1204px) {
      margin-right: auto;
      text-align: left;
      width: 100%;
    }
  }

  .price {
    color: ${black};
    font-weight: ${bold};
    letter-spacing: 0.1em;
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 75%;
    width: 55%;
    margin-top: 5em;
  }
  @media screen and (min-width: 1204px) {
    height: 70%;
    width: 40%;
    align-items: flex-start;
    margin-right: 4em;
  }
`;

export const SeeProductContainer = styled.div`
  width: 55%;
  max-width: 250px;
  height: 4.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;

  .amt_container {
    height: 100%;
    width: 43%;
    background: ${gray};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    height: 100%;
    width: 52%;
    border: none;
    outline: none;
    color: ${white};
    font-weight: 600;
    background: ${orange};
    display: flex;
    justify-content: center;
    align-items: center;
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
        opacity: 35%;
        z-index: 1;
        position: absolute;
        top: 0;
        pointer-events: none;
        transition: ${mainTransition};
      }
    }
  }
  @media screen and (max-width: 410px) {
    width: 80%;
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-right: auto;
  }
  @media screen and (min-width: 1204px) {
    margin-right: auto;
  }
`;

export const DescriptionInfoContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin-top: 2em;
  margin-bottom: 4em;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  transition: ${mainTransition};

  .features_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 1.6rem;
      letter-spacing: 0.05em;
      font-weight: 500;
      font-weight: ${bold};
      margin-right: auto;
      margin-bottom: 1.5em;
      @media screen and (min-width: 768px) and (max-width: 1203px) {
        font-size: 1.7rem;
        font-weight: ${bold};
      }
      @media screen and (min-width: 1204px) {
        font-size: 2rem;
        font-weight: ${bold};
      }
    }

    p {
      font-size: medium;
      text-align: left;
      margin-right: auto;
      line-height: ${lineHeigth};
    }

    @media screen and (min-width: 1204px) {
      width: 55%;
      margin-right: auto;
      margin-bottom: auto;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
  }

  @media screen and (min-width: 1204px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }
`;

export const Box = styled.div`
  height: max-content;
  width: 100%;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: auto;
  transition: ${mainTransition};

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    font-weight: ${bold};
    margin-right: auto;
    text-align: left;
    margin-bottom: 2em;
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      font-size: 1.7rem;
      font-weight: ${bold};
    }
    @media screen and (min-width: 1204px) {
      font-size: 2rem;
      font-weight: ${bold};
      margin-bottom: 1.5em;
    }
  }

  .quantity_container {
    width: max-content;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: ${mainTransition};
  }

  div {
    min-width: 200px;
    padding-bottom: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: auto;

    .text {
      color: ${orange};
      padding-right: 1.5em;
    }

    .text2 {
      width: 400px;
      text-align: left;
      margin-left: auto;
      @media screen and (min-width: 768px) and (max-width: 1203px) {
        width: 200px;
      }
    }
    @media screen and (min-width: 768px) and (max-width: 1203px) {
      margin-left: auto;
      margin-right: 0;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    width: 60%;
  }

  @media screen and (min-width: 1204px) {
    width: 38%;
    margin-top: 0;
    margin-left: auto;
    margin-bottom: auto;
    margin-right: 0;
  }
`;

export const ItemImageContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 120vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;
  padding: 0 2em;
  transition: ${mainTransition};

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    padding: 0 3em;
    flex-direction: row;
    height: 50vh;
  }

  @media screen and (min-width: 1204px) {
    flex-direction: row;
    height: 50vh;
    padding: 0;
  }
`;

export const FirstContainer = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 100%;
    width: 44.5%;
  }
  @media screen and (min-width: 1204px) {
    height: 100%;
    width: 44.5%;
  }
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 50%;
  background: ${lightBlack};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      @media screen and (min-width: 1204px) {
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 100%;
    width: 53%;
  }
  @media screen and (min-width: 1204px) {
    height: 100%;
    width: 53%;
  }
`;

export const ImageContainer1 = styled.div`
  width: 100%;
  height: 48%;
  background: ${lightBlack};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      @media screen and (min-width: 1204px) {
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 1204px) {
    height: 47%;
  }
`;

export const ImageContainer2 = styled.div`
  width: 100%;
  height: 48%;
  background: ${orange};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    height: 100%;
    width: 100%;
    display: flex;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
      @media screen and (min-width: 1204px) {
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 1204px) {
    height: 47%;
  }
`;
