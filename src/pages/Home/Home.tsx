import Head from '@components/Head';
import Hero from '@components/Hero';
import { NextPage } from 'next';
import React from 'react';

import { HomeProps } from './Home.models';

const Home: NextPage<HomeProps> = (props) => {
  const { posts, projects } = props;

  return (
    <div>
      <Head />
      <Hero />
    </div>
  );
};

export default Home;
