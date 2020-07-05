import React from 'react';

import { Container, Copy, FooterWrapper, Rotator } from './Footer.styles';

const Footer: React.FunctionComponent = () => {
  return (
    <FooterWrapper>
      <Container>
        <Rotator />
        <Copy>Mahedi Hasan</Copy>
      </Container>
      <Copy>&copy; 2020 Mahedi. Built with Next js.</Copy>
    </FooterWrapper>
  );
};

export default Footer;
