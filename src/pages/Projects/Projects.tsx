import Box from '@components/Box';
import Card from '@components/Card';
import Head from '@components/Head';
import { NextPage } from 'next';
import React from 'react';

import { ProjectProps } from './Project.models';
import { Title } from './Project.styles';

const Projects: NextPage<ProjectProps> = (props) => {
  const { projects } = props;

  return (
    <div>
      <Head title="Projects" />
      <Title>Projects</Title>
      <Box mb={60} />
      {projects.map((feature, index) => (
        <Card key={`${feature.title}-${index}`} {...feature} type="project" />
      ))}
    </div>
  );
};

export default Projects;
