import Code from '@components/Code';
import Image from '@components/LazyMdxImage';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const Post = ({ content, frontmatter }) => {
  return (
    <article>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
      </header>
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{ code: Code, image: Image }}
      />
    </article>
  );
};

export default Post;
