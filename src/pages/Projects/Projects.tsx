import Featured from '@components/Featured';
import Head from '@components/Head';
import { NextPage } from 'next';
import React from 'react';

import { ProjectProps } from './Project.models';

const Projects: NextPage<ProjectProps> = (props) => {
  const { projects } = props;

  return (
    <div>
      <Head title="Projects" />
      <h1>Projects</h1>
      {projects.map((feature, index) => (
        <Featured
          key={`${feature.title}-${index}`}
          {...feature}
          type="project"
        />
      ))}
    </div>
  );
};

export default Projects;
