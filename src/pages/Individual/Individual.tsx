/* eslint-disable jsx-a11y/img-redundant-alt */
import Box from '@components/Box';
import Button from '@components/Button';
import Code from '@components/Code';
import ExternalLink from '@components/ExternalLink';
import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import MaxContainer from '@components/MaxContainer';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Align, Main } from './Individual.styles';

const Individual = ({ content, frontmatter, type }) => {
  const {
    demo,
    github,
    title,
    description,
    keywords,
    image,
    date,
  } = frontmatter;
  return (
    <>
      <Head title={title} description={description} keywords={keywords} />
      <Main>
        <MaxContainer>
          <header style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
            <Box mb={40} />
            {type === 'post' && (
              <>
                <p>{date}</p>
                <Box mb={40} />
              </>
            )}
            {demo && <ExternalLink href={demo}>{demo}</ExternalLink>}
            <Box mb={40} />
            {github && <ExternalLink href={github}>{github}</ExternalLink>}

            <p>{description}</p>
            <Box mb={40} />
            <img src={image} width="100%" alt="Showcase Image" />
          </header>
        </MaxContainer>
      </Main>
      <MaxContainer>
        <Box mb={40} />
        <ReactMarkdown
          escapeHtml={false}
          source={content}
          renderers={{ code: Code, image: Image }}
        />
        <Box mb={80} />
        <Align>
          <Button href={type === 'project' ? '/projects' : '/posts'}>
            check more {type === 'project' ? 'projects' : 'posts'}
          </Button>
        </Align>
        <Box mb={80} />
      </MaxContainer>
    </>
  );
};

export default Individual;
