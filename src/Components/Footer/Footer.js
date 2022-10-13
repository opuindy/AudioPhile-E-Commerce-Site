import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../Utilities/links';
import { social } from '../../Utilities/links';
import { images } from '../../Utilities/shareTools';
// import { LogoImg } from '../Navbar/navBarStyles';
import {
  FooterSection,
  FooterContainer,
  Nav,
  NavLogoLinkContainer,
  LogoContainer,
  Line,
  NavLinkContainer,
  NavLinks,
  LinkList,
  SocialsList,
  SocialLink,
  SocialsContainer,
  SocialsCopyRightContainer,
  LogoImg,
} from './footerStyles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <Nav>
          <NavLogoLinkContainer>
            <LogoContainer>
              <Line></Line>
              <LogoImg src={images.logo} alt='logo' />
            </LogoContainer>
            <NavLinkContainer>
              <NavLinks>
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <LinkList key={id}>
                      <Link to={url}>{text}</Link>
                    </LinkList>
                  );
                })}
              </NavLinks>
            </NavLinkContainer>
          </NavLogoLinkContainer>

          <p className='text'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we're open 7 days a week.
          </p>
          <SocialsCopyRightContainer>
            <p>Copyright 2022. All Rights Reserved</p>
            <SocialsContainer>
              <SocialsList>
                {social.map((socialLink) => {
                  const { id, url, icon } = socialLink;
                  return (
                    <SocialLink key={id}>
                      <a href={url}>
                        <img src={icon} alt='social_icon' />
                      </a>
                    </SocialLink>
                  );
                })}
              </SocialsList>
            </SocialsContainer>
          </SocialsCopyRightContainer>
        </Nav>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
