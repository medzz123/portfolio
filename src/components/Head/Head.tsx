import NextHead from 'next/head';
import React from 'react';

interface HeadProps {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string;
}

const Head: React.FC<HeadProps> = (props) => {
  const {
    title = 'Mahedi Hasan | Attack Helicopter',
    description = 'Portfolio website and personal blog.',
    author = 'Mahedi Hasan',
    keywords = 'Mahedi Hasan, Personal Website, Portfolio',
  } = props;
  return (
    <NextHead>
      <meta name="description" content={description} />
      <title>{title}</title>
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
    </NextHead>
  );
};

export default Head;
