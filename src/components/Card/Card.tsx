import Box from '@components/Box';
import Button from '@components/Button';
import ExternalLink, { LinkSpacer } from '@components/ExternalLink';
import List from '@components/List';
import React from 'react';

import { CardProps } from './Card.models';
import { TopContainer, Wrapper } from './Card.styles';

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { title, description, links, slug, type, date, keywords } = props;

  return (
    <Wrapper>
      <TopContainer>
        <h2>{title}</h2>
        {type === 'blog' && <span>{date}</span>}
      </TopContainer>

      <Box mb={10} />

      <List>
        {keywords.map((keyword, index) => (
          <li key={`keyword-${index}`}>{keyword}</li>
        ))}
      </List>

      <Box mb={20} />

      <p>{description}</p>

      <Box mb={20} />

      <LinkSpacer>
        {links &&
          links.split(',').map((link, index) => (
            <ExternalLink href={link} key={`link-${index}`}>
              {link}
            </ExternalLink>
          ))}
      </LinkSpacer>

      <Box mb={30} />

      <Button href={`/${type}/[slug]`} as={`/${type}/${slug}`}>
        {type === 'project' ? 'see this project' : 'read more'}
      </Button>
    </Wrapper>
  );
};

export default Card;
