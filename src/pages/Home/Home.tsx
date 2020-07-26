import Box from '@components/Box';
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
  'Continous Integration',
  'Next Js',
];

const experiences = ['Java', 'C++', 'C#', 'Flutter', 'Go'];

const Home: NextPage<HomeProps> = (props) => {
  const { projects } = props;

  return (
    <div>
      <Head />
      <Hero />
      <MaxContainer>
        <Container>
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              title={project.title}
              description={project.description}
              keywords={project.keywords.split(',')}
              slug={project.slug}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </Container>
        <Container>
          <h1>
            About <HighlightBox>me</HighlightBox>
          </h1>

          <p>
            I am software developer, studying computer science at City
            University. As part of my job in Equals, I have been working with
            React, React-Native and Node. I am also currently working on
            personal projects using Flutter and Machine learning.
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
