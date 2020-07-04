import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
`;

export default function Home({ posts }) {
  return (
    <>
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <Button>Hello</Button>
          <header>
            <h3>
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
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
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = data.date.toLocaleDateString("en-US", options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
