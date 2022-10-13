import styled from 'styled-components';

const orange = '#D87D4A';
const white = '#FFFFFF';
const borderNo = 'none';
const getColor = ({ color }) => color || `${white}`;
const getHoverColor = ({ hoverColor }) => hoverColor || `${white}`;
const getBackgroundColor = ({ backGroundColor }) =>
  backGroundColor || `${orange}`;
const getHoverBackGroundColor = ({ hoverBackGroundColor }) =>
  hoverBackGroundColor || `${white}`;
const getBorder = ({ border }) => border || `${borderNo}`;
const mainTransition = `all 0.3s linear`;

export const ProductLinkContainer = styled.div`
  width: 12rem;
  height: 6vh;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${getBorder};

  a {
    display: block;
    height: 100%;
    width: 100%;
    color: ${getColor};
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    background: ${getBackgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
      cursor: pointer;
      color: ${getHoverColor};
      &::after {
        display: block;
        content: '';
        height: 100%;
        width: 100%;
        background: ${getHoverBackGroundColor};
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
