import { HighlightBox, LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import React from 'react';

import {
  SideCopy,
  SocialList,
  TitleWrapper,
  TopCopyContainer,
  Wrapper,
} from './Footer.styles';

const socialLinks = [
  { label: 'Github', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter', link: 'https://twitter.com' },
];

const Footer: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <MaxContainer>
        <TopCopyContainer>
          <TitleWrapper>
            <h1>
              Get in <HighlightBox>touch!</HighlightBox>
            </h1>
          </TitleWrapper>
          <SideCopy>
            <p>
              Drop me an email at{' '}
              <a
                style={{ display: 'inline-block' }}
                href="mailto:mahedi.hs199&@gmail.com"
              >
                <LinkHighlight>
                  <b>mahedi.hs1997@gmail.com</b>
                </LinkHighlight>
              </a>
            </p>
            <p>You can also find me here:</p>
            <SocialList>
              {socialLinks.map((social, index) => (
                <li key={`social-${index}`}>
                  <a href={social.link}>
                    <LinkHighlight>{social.label}</LinkHighlight>
                  </a>
                </li>
              ))}
            </SocialList>
          </SideCopy>
        </TopCopyContainer>
      </MaxContainer>
    </Wrapper>
  );
};

export default Footer;
