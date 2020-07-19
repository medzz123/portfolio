import Head from '@components/Head';
import Image from '@components/LazyMdxImage';
import fs from 'fs';
import matter from 'gray-matter';
import React from 'react';
import ReactMarkdown from 'react-markdown';

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
          <ReactMarkdown
            escapeHtml={false}
            source={project.content}
            renderers={{ image: Image }}
          />
        </div>
      ))}
      <div>Hi</div>
    </div>
  );
};

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/content/projects`);

  const projects = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/content/projects/${filename}`)
      .toString();

    const { data, content } = matter(markdownWithMetadata);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleDateString('en-US', options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
      content,
    };
  });

  return {
    props: {
      projects,
    },
  };
}

export default Projects;
