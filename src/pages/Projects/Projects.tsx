import Head from '@components/Head';
import React from 'react';

const Projects = (props) => {
  const { projects } = props;

  console.log('projects', projects);
  return (
    <div>
      <Head title="Projects" />
      {projects.map((project, index: number) => (
        <div key={`project-${index}`}>
          <h2>{project.frontmatter.title}</h2>
          <p>{project.frontmatter.description}</p>
          <p>{project.frontmatter.date}</p>
          <p>{project.frontmatter.github}</p>
        </div>
      ))}
      <div>Hi</div>
    </div>
  );
};

export default Projects;