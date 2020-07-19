import NextHead from 'next/head';
import React from 'react';

interface HeadProps {
  title?: string;
  description?: string;
}

const Head: React.FC<HeadProps> = (props) => {
  const {
    title = 'Mahedi Hasan | Attack Helicopter',
    description = 'Portfolio website and personal blog.',
  } = props;
  return (
    <NextHead>
      <meta name="description" content={description} />
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
