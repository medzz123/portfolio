import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export { default } from '@pages/Individual';

export async function getStaticPaths() {
  const files = fs.readdirSync('src/content/blog');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('src/content/blog', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleDateString('en-US', options);

  const frontmatter = {
    ...data,
    date: formattedDate,
  };

  return {
    props: {
      content,
      frontmatter,
      type: 'blog',
    },
  };
}
