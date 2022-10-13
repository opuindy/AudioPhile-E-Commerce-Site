import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const orange = '#D87D4A';
const lightOrange = '#fbaf85';
const white = '#FFFFFF';
const lightBlack = '#101010';
const black = '#000000';
const colorBlack = '#333';
const gray = '#F1F1F1';
const lightGray = '#FAFAFA';
const lightColor = '#66bf3c';
const lightBlue = ' #1ea7fd';
const Black_lightbox = 'hsl(0, 0%, 75%)';

const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;
const borderRadius = `0.625rem`;
/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 background: ${lightGray};
 font-size: 1rem;
 font-family: 'Kumbh Sans', sans-serif;
}

img{
 display: block;
}

li {
 list-style-type: none;
 padding-left: 0;
}

a {
 text-decoration: none;
}

`;

export const Section = styled.section`
  width: 100%;
  height: max-content;
`;
