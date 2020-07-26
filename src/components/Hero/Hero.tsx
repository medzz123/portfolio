import Box from '@components/Box';
import Button from '@components/Button';
import { HighlightBox } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import React from 'react';

import { HeadlineWrapper, HeroParagraph, Main, Title } from './Hero.styles';

const Hero: React.FunctionComponent = () => {
  return (
    <Main>
      <MaxContainer>
        <HeadlineWrapper>
          <Title>
            Hi, I’m Mahedi, <HighlightBox>Software Developer</HighlightBox>
            and Professional <HighlightBox>Goofball</HighlightBox>
          </Title>
        </HeadlineWrapper>
        <HeroParagraph>
          <p>
            I&apos;m a software developer, having an awesome time using React,
            React-Native and Node Js. Learning Flutter & Go.
          </p>
        </HeroParagraph>
        <Box mb={40} />
        <Button href="/projects">see my work</Button>
      </MaxContainer>
    </Main>
  );
};

export default Hero;
