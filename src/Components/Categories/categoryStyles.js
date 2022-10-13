import styled from 'styled-components';

const getContainerHeight = ({ containerHeight }) =>
  containerHeight || `${height}`;

const getCategoryHeight = ({ categoryHeight }) =>
  categoryHeight || `${categoryHeights}`;

const orange = '#D87D4A';
const black = '#000000';
const colorBlack = '#333';
const gray = '#F1F1F1';
const lightGray = '#FAFAFA';

const mainTransition = `all 0.3s linear`;
const height = '56vh';
const categoryHeights = '70%';

export const CategoryContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 108vh;
  background: ${lightGray};
  margin-left: auto;
  margin-right: auto;
  padding: 3em 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: ${getContainerHeight};
    padding: 5em 2em;
  }

  @media screen and (min-width: 1204px) {
    padding: 0;
    height: 60vh;
    margin-bottom: 0;
    margin-top: 3em;
  }
`;

export const CategoryList = styled.section`
  background: ${gray};
  width: 100%;
  height: 35%;
  border-radius: 10px;
  position: relative;
  margin-bottom: 4em;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: ${getCategoryHeight};
    width: 32%;
  }

  @media screen and (min-width: 1204px) {
    height: ${getCategoryHeight};
    height: 55%;
    /* height: 55%; */
  }
`;

export const ImgContainer = styled.div`
  width: 10rem;
  height: 9rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -25%;
  @media screen and (min-width: 1204px) {
    width: 13.5rem;
    height: 12.5rem;
  }
`;
export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const CategoryText = styled.h2`
  font-size: 1.1rem;
  color: ${black};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 1204px) {
    font-size: 1.2rem;
  }
`;

export const CategoryLinkContainer = styled.div`
  width: 9rem;
  height: 2.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;

  a {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    text-transform: uppercase;
    color: ${colorBlack};
    transition: ${mainTransition};
    &:hover {
      cursor: pointer;
      color: ${orange};
      border: 1px dotted ${orange};
    }

    @media screen and (min-width: 1204px) {
      font-size: 1.2rem;
    }
  }
  img {
    display: block;
    margin-left: 0.5em;
  }
`;
