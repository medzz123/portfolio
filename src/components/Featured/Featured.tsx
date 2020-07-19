import Box from '@components/Box';
import { Github } from '@components/Icons';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { Wrapper } from './Featured.styles';
import { Arrow } from './Featured.styles';

const H3 = styled.h3`
  font-size: 28px;
`;

interface Temporary {
  title: string;
  description: string;
  github?: string;
  slug: string;
  demo?: string;
  type: 'project' | 'post';
}

const Featured: React.FunctionComponent<Temporary> = (props) => {
  const { title, description, github, demo, slug, type } = props;

  return (
    <Wrapper>
      <H3>{title}</H3>
      <Box mb={12} />
      <p>{description}</p>
      <Box mb={12} />
      {demo && (
        <>
          <p>
            Demo <a>Somewhere</a>
          </p>
          <Box mb={12} />
        </>
      )}
      {github && (
        <>
          {github === 'private' ? (
            <div
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Github height="18" />
              <span style={{ marginLeft: 12 }}>Private</span>
            </div>
          ) : (
            <a
              href={github}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Github height="18" />
              <span style={{ marginLeft: 12, textDecoration: 'underline' }}>
                {github}
              </span>
            </a>
          )}
        </>
      )}
      <Box mb={12} />

      <Link href={`/${type}/[slug]`} as={`/${type}/${slug}`}>
        <a style={{ color: '#5393fe', fontWeight: 'bold' }}>
          Read more!
          <Arrow />
        </a>
      </Link>
    </Wrapper>
  );
};

export default Featured;
