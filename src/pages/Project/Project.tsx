import Code from '@components/Code';
import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Wrapper = styled.article`
  min-height: 62vh;
`;

const Project = ({ content, frontmatter }) => {
  return (
    <Wrapper>
      <Head
        title={frontmatter.tile}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: Code, image: Image }}
      />
    </Wrapper>
  );
};

export default Project;
