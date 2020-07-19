import Box from '@components/Box';
import CTA from '@components/CTA';
import React from 'react';

import { SubText, Title, Wrapper } from './Hero.styles';

const Hero: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Title>
        Hello! I am Mahedi{' '}
        <span role="img" aria-label="wave">
          👋
        </span>
      </Title>
      <Box mb={40} />
      <SubText>
        I&apos;m a software developer, having an awesome time using React,
        React-Native and Node Js. Messing with game development and machine
        learning.
      </SubText>
      <Box mb={40} />

      <CTA ctaType="anchor" variant="primary" href="/#selected">
        Scroll down
      </CTA>
    </Wrapper>
  );
};

export default Hero;
