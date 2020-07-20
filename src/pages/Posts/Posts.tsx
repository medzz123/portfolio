import Box from '@components/Box';
import Card from '@components/Card';
import Head from '@components/Head';
import { NextPage } from 'next';
import React from 'react';

import { PostProps } from './Posts.models';
import { Title } from './Posts.styles';

const Posts: NextPage<PostProps> = (props) => {
  const { posts } = props;

  return (
    <div>
      <Head title="Posts" />
      <Title>Posts</Title>
      <Box mb={60} />
      {posts.map((feature, index) => (
        <Card key={`${feature.title}-${index}`} {...feature} type="post" />
      ))}
    </div>
  );
};

export default Posts;
