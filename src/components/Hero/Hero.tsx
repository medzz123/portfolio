import Box from '@components/Box';
import Button from '@components/Button';
import { HighlightBox } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import React from 'react';

import { HeadlineWrapper, Main, Title } from './Hero.styles';

const Hero: React.FunctionComponent = () => {
  return (
    <Main>
      <MaxContainer>
        <HeadlineWrapper>
          <Title>
            Hey! I am Mahedi. I&apos;m a{' '}
            <HighlightBox>Software Developer,</HighlightBox> having an awesome
            time using <HighlightBox>React,</HighlightBox>{' '}
            <HighlightBox>React Native</HighlightBox> &{' '}
            <HighlightBox>Node Js</HighlightBox>.
          </Title>
        </HeadlineWrapper>
        <Box mb={80} />
        <Button href="#projects">see my projects</Button>
      </MaxContainer>
    </Main>
  );
};

export default Hero;
