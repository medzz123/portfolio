import { HighlightBox } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import React from 'react';

import {
  SideCopy,
  TitleWrapper,
  TopCopyContainer,
  Wrapper,
} from './Footer.styles';

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
              If you need a modern and powerful website for your business,
              startup or yourself, I am available for work. You can email me
              directly at ugabuga@email.com
            </p>
          </SideCopy>
        </TopCopyContainer>
        <p>All rights reserved. Whatever copyright.</p>
      </MaxContainer>
    </Wrapper>
  );
};

export default Footer;
