import Box from '@components/Box';
import Button from '@components/Button';
import Head from '@components/Head';
import Hero from '@components/Hero';
import { HighlightBox, LinkHighlight } from '@components/Highlight';
import MaxContainer from '@components/MaxContainer';
import ProjectCard from '@components/ProjectCard';
import { NextPage } from 'next';
import React from 'react';

import { HomeProps } from './Home.models';
import { Container, List } from './Home.styles';

const skills = [
  'Typescript',
  'Node',
  'Graphql',
  'Apollo',
  'Express',
  'Cypress / Detox',
  'React',
  'React Native',
  'Gatsby',
  'Redux',
  'CI / CD',
  'Next Js',
  'AWS',
  'Heroku',
  'Git / Github',
];

const experiences = ['Java', 'C++', 'C#', 'Flutter', 'Go'];

const Home: NextPage<HomeProps> = (props) => {
  const { projects } = props;

  return (
    <div>
      <Head />
      <Hero />
      <MaxContainer>
        <Container id="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              description={project.description}
              keywords={project.keywords.split(',')}
              slug={project.slug}
              image={project.image}
              links={project.links}
            />
          ))}
        </Container>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button href="/projects">check more projects</Button>
        </div>

        <Container>
          <h1>
            About <HighlightBox>me</HighlightBox>
          </h1>

          <p>
            Software developer, studying computer science at City University. As
            part of my job in Equals, I have been working with React,
            React-Native and Node. Trying to learn Flutter and Go.
          </p>

          <p>
            <b>Technologies using day to day</b>
          </p>

          <List>
            {skills.map((skill, index) => (
              <li key={`skill-${index}`}>{skill}</li>
            ))}
          </List>
          <Box mb={30} />

          <p>
            <b>Technologies I have some experience with</b>
          </p>

          <List>
            {experiences.map((experience, index) => (
              <li key={`experience-${index}`}>{experience}</li>
            ))}
          </List>
          <Box mb={30} />
          <p>
            Take a look at my{' '}
            <a
              style={{ display: 'inline-block' }}
              href="https://drive.google.com/open?id=13I3typns39yBO674xUBoNiLoYU_6qFM1"
            >
              <LinkHighlight>
                <b>resume.</b>
              </LinkHighlight>
            </a>
          </p>
        </Container>
      </MaxContainer>
    </div>
  );
};

export default Home;
