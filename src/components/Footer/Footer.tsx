import { HighlightBox } from '@components/Highlight';
import React from 'react';

import {
  Container,
  SideCopy,
  TopCopyContainer,
  Wrapper,
} from './Footer.styles';

const Footer: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Container>
        <TopCopyContainer>
          <h1>
            Get in <HighlightBox>touch!</HighlightBox>
          </h1>
          <SideCopy>
            <p>
              If you need a modern and powerful website for your business,
              startup or yourself, I am available for work. You can email me
              directly at ugabuga@email.com
            </p>
          </SideCopy>
        </TopCopyContainer>
        <p>All rights reserved. Whatever copyright.</p>
      </Container>
    </Wrapper>
  );
};

export default Footer;
