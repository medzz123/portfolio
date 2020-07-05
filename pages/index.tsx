import Button from '@components/Button';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Portfolio website and personal blog."
        />
        <title>Mahedi Hasan | Attack Helicopter</title>
      </Head>
      <h1>Custom Fonts are really nice</h1>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <Button>Hello</Button>
          <header>
            <h3>
              <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
          </section>
        </article>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleDateString('en-US', options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
