import Card from '@components/Card';
import Head from '@components/Head';
import { HighlightBox } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import { NextPage } from 'next';
import React from 'react';

import { TemplateProps } from './Template.models';
import { Main } from './Template.styles';

const Projects: NextPage<TemplateProps> = (props) => {
  const { content, type } = props;

  return (
    <>
      <Head title={type.charAt(0).toUpperCase() + type.slice(1) + 's'} />
      <Main>
        <MaxContainer>
          <h1>
            <HighlightBox>
              {type === 'project' ? 'Projects' : 'Blog'}
            </HighlightBox>
          </h1>
        </MaxContainer>
      </Main>

      <MaxContainer>
        {content.map((feature, index) => (
          <Card
            key={`${feature.title}-${index}`}
            {...feature}
            type={type}
            keywords={feature.keywords.split(',')}
          />
        ))}
      </MaxContainer>
    </>
  );
};

export default Projects;
