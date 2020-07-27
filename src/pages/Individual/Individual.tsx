/* eslint-disable jsx-a11y/img-redundant-alt */
import Box from '@components/Box';
import Button from '@components/Button';
import Code from '@components/Code';
import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import MaxContainer from '@components/MaxContainer';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Align, Main } from './Individual.styles';

const Individual = ({ content, frontmatter, type }) => {
  return (
    <>
      <Head
        title={frontmatter.tile}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
      />
      <Main>
        <MaxContainer>
          <header>
            <h1>{frontmatter.title}</h1>
            <Box mb={40} />
            {type === 'post' && (
              <>
                <p style={{ textAlign: 'center' }}>{frontmatter.date}</p>
                <Box mb={40} />
              </>
            )}
            <p style={{ textAlign: 'center' }}>{frontmatter.description}</p>
            <Box mb={40} />
            <img src={frontmatter.image} width="100%" alt="Showcase Image" />
          </header>
          <Box mb={40} />
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            renderers={{ code: Code, image: Image }}
          />
          <Box mb={80} />
          <Align>
            <Button href="/projects">
              check more {type === 'project' ? 'projects' : 'posts'}
            </Button>
          </Align>
          <Box mb={80} />
        </MaxContainer>
      </Main>
    </>
  );
};

export default Individual;
