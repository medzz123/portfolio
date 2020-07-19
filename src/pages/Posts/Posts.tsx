import Featured from '@components/Featured';
import Head from '@components/Head';
import { NextPage } from 'next';
import React from 'react';

import { PostProps } from './Posts.models';

const Posts: NextPage<PostProps> = (props) => {
  const { posts } = props;

  return (
    <div>
      <Head title="Posts" />
      {posts.map((feature, index) => (
        <Featured key={`${feature.title}-${index}`} {...feature} type="post" />
      ))}
    </div>
  );
};

export default Posts;
