import Box from '@components/Box';
import CTA from '@components/CTA';
import Featured from '@components/Featured';
import Head from '@components/Head';
import Hero from '@components/Hero';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FeatureTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  font-style: italic;
  font-family: 'Space Mono';
`;

const features = [
  {
    title: 'Spend Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quo saepe aliquid culpa ratione voluptatem suscipit consequatur aperiam fuga sed! Quos beatae amet saepe aperiam tempore dolore neque nam tempora.',
    readMore: true,
    github: 'https://google.com',
  },
  {
    title: 'Spend Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quo saepe aliquid culpa ratione voluptatem suscipit consequatur aperiam fuga sed! Quos beatae amet saepe aperiam tempore dolore neque nam tempora.',
    readMore: true,
    github: 'private',
  },
  {
    title: 'Spend Web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quo saepe aliquid culpa ratione voluptatem suscipit consequatur aperiam fuga sed! Quos beatae amet saepe aperiam tempore dolore neque nam tempora.',
    readMore: true,
  },
];

const Home = () => {
  return (
    <div>
      <Head />
      <Hero />
      <Box mb={20} id="selected" />
      <FeatureTitle>Recent Projects</FeatureTitle>
      <Box mb={80} />
      {features.map((feature, index) => (
        <Featured key={`${feature.title}-${index}`} {...feature} />
      ))}
      <Box mb={80} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href="/projects">
          <CTA ctaType="anchor" variant="secondary">
            Check out more
          </CTA>
        </Link>
      </div>
      <Box mb={80} />
      <FeatureTitle>Recent Posts</FeatureTitle>
      <Box mb={80} />
      {features.map((feature, index) => (
        <Featured
          key={`${feature.title}-${index}`}
          title={feature.title}
          description={feature.description}
          readMore={feature.readMore}
        />
      ))}
      <Box mb={80} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href="/blog">
          <CTA ctaType="anchor" variant="secondary">
            More posts
          </CTA>
        </Link>
      </div>
      <Box mb={80} />
    </div>
  );
};

export default Home;
