import Box from '@components/Box';
import Card from '@components/Card';
import CTA from '@components/CTA';
import Head from '@components/Head';
import Hero from '@components/Hero';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { HomeProps } from './Home.models';
import { FeatureTitle } from './Home.styles';

const Home: NextPage<HomeProps> = (props) => {
  const { posts, projects } = props;

  return (
    <div>
      <Head />
      <Hero />
      <Box mb={20} id="selected" />
      <FeatureTitle>Featured Projects</FeatureTitle>
      <Box mb={80} />
      {projects.map((feature, index) => (
        <Card key={`${feature.title}-${index}`} {...feature} type="project" />
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
      {posts.map((feature, index) => (
        <Card key={`${feature.title}-${index}`} {...feature} type="post" />
      ))}
      <Box mb={80} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link href="/posts">
          <CTA ctaType="anchor" variant="secondary">
            More posts
          </CTA>
        </Link>
      </div>
      <Box mb={40} />
    </div>
  );
};

export default Home;
