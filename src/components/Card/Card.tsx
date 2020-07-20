import Box from '@components/Box';
import { Github } from '@components/Icons';
import Link from 'next/link';
import React from 'react';

import { CardProps } from './Card.models';
import {
  Center,
  DemoLink,
  GithubSpan,
  ReadMore,
  TopContainer,
  Wrapper,
} from './Card.styles';
import { Arrow } from './Card.styles';

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { title, description, github, demo, slug, type, date } = props;

  return (
    <Wrapper>
      <TopContainer>
        <h2>{title}</h2>
        <span>{date}</span>
      </TopContainer>

      <p>{description}</p>

      <Box mb={28} />

      {demo && (
        <p>
          Demo <DemoLink href={demo}>{demo}</DemoLink>
        </p>
      )}
      {github &&
        (github === 'private' ? (
          <Center>
            <Github height="18" />
            <GithubSpan link={false}>Private</GithubSpan>
          </Center>
        ) : (
          <a href={github}>
            <Center>
              <Github height="18" />
              <GithubSpan link={true}>{github}</GithubSpan>
            </Center>
          </a>
        ))}
      <Box mb={28} />

      <Link href={`/${type}/[slug]`} as={`/${type}/${slug}`}>
        <ReadMore>
          Read more!
          <Arrow />
        </ReadMore>
      </Link>
    </Wrapper>
  );
};

export default Card;
