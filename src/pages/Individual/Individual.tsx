/* eslint-disable jsx-a11y/img-redundant-alt */
import Box from '@components/Box';
import Button from '@components/Button';
import Code from '@components/Code';
import ExternalLink, { LinkSpacer } from '@components/ExternalLink';
import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import MaxContainer from '@components/MaxContainer';
import ProgressBar from '@components/ProgressBar';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Align, Main } from './Individual.styles';

const Individual = ({ content, frontmatter, type }) => {
  const { links, title, description, keywords, image, date } = frontmatter;
  return (
    <>
      <Head title={title} description={description} keywords={keywords} />
      <ProgressBar />
      <Main>
        <MaxContainer>
          <header style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
            <Box mb={40} />
            {type === 'blog' && (
              <>
                <p>{date}</p>
                <Box mb={40} />
              </>
            )}
            <LinkSpacer>
              {links &&
                links.split(',').map((link, index) => (
                  <ExternalLink href={link} key={`link-${index}`}>
                    {link}
                  </ExternalLink>
                ))}
            </LinkSpacer>
            <Box mb={40} />

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
          <Button href={type === 'project' ? '/projects' : '/blog'}>
            check more {type === 'project' ? 'projects' : 'articles'}
          </Button>
        </Align>
        <Box mb={80} />
      </MaxContainer>
    </>
  );
};

export default Individual;
