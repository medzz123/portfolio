import Box from '@components/Box';
import Code from '@components/Code';
import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-style: italic;
  font-family: 'Space Mono';
`;

const Wrapper = styled.article`
  min-height: 62vh;
`;

const Post = ({ content, frontmatter }) => {
  return (
    <Wrapper>
      <Head
        title={frontmatter.tile}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <header>
        <Title>{frontmatter.title}</Title>
        <p style={{ textAlign: 'center' }}>{frontmatter.date}</p>
      </header>
      <Box mb={80} />
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: Code, image: Image }}
      />
    </Wrapper>
  );
};

export default Post;
