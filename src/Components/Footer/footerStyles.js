import styled from 'styled-components';

const orange = '#D87D4A';
const white = '#FFFFFF';
const black = '#000000';
const mainTransition = `all 0.3s linear`;
const lineHeigth = `1.5`;
/* font-weights:  */
const regular = `400`;
const bold = `700`;

export const FooterSection = styled.footer`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${black};
  left: 0;
  bottom: 0;

  .text {
    color: silver;
    font-size: 0.9rem;
    font-weight: ${regular};
    margin-top: 2em;
    text-align: center;
    line-height: ${lineHeigth};
    @media screen and (min-width: 768px) {
      font-size: 1rem;
      width: 80%;
      text-align: left;
      margin-right: auto;
    }
    @media screen and (min-width: 1204px) {
      font-size: 1rem;
      margin-top: 0;
      width: 60%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 50vh;
  }

  @media screen and (min-width: 1204px) {
    height: 40vh;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 100%;
`;

export const Nav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1203px) {
    padding: 0 3em;
  }
  @media screen and (max-width: 767px) {
    padding: 0 2em;
  }
`;

export const NavLogoLinkContainer = styled.div`
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};

  @media screen and (min-width: 768px) and (max-width: 1203px) {
    height: 40%;
    width: 80%;
    margin-right: auto;
  }
  @media screen and (min-width: 1204px) {
    height: 50%;
    width: 100%;
    margin-right: auto;
    flex-direction: row;
  }
`;

export const LogoContainer = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-right: auto;
    height: 50%;
  }
  @media screen and (min-width: 1204px) {
    margin-bottom: auto;
    height: 55%;
  }
`;

export const Line = styled.div`
  width: 80%;
  max-width: 9rem;
  height: 0.4rem;
  background: ${orange};
  @media screen and (min-width: 768px) {
    margin-right: auto;
  }
`;

export const LogoImg = styled.img`
  height: 1.6rem;
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    margin-right: auto;
  }
`;

export const NavLinkContainer = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) and (max-width: 1203px) {
    width: 70%;
    height: 20%;
    margin-right: auto;
  }
`;

export const NavLinks = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const LinkList = styled.li`
  display: block;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${white};
    font-weight: ${bold};
    transition: ${mainTransition};
    &:hover {
      color: ${orange};
    }
  }

  @media screen and (min-width: 768px) {
    margin-right: 2em;
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const SocialsCopyRightContainer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  transition: ${mainTransition};

  p {
    font-size: 1rem;
    color: silver;
    text-transform: capitalize;
    font-weight: ${bold};
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SocialsContainer = styled.div`
  width: 50%;
  max-width: 150px;
  height: 3rem;
  transition: ${mainTransition};
  @media screen and (min-width: 768px) {
    width: 18%;
    max-width: 10rem;
  }
`;
export const SocialsList = styled.ul`
  list-style-type: none;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: ${mainTransition};
`;
export const SocialLink = styled.li`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${mainTransition};

  a {
    display: block;
    text-decoration: none;
    transition: ${mainTransition};

    img {
      height: 2rem;
      transition: ${mainTransition};
      &:hover {
        cursor: pointer;
        color: ${orange};
        &:hover {
          filter: grayscale(300%) brightness(80%) sepia(100%) hue-rotate(-52deg)
            saturate(1000%) contrast(0.8);
        }
      }
    }
  }
`;
