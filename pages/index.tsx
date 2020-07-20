import fs from 'fs';
import matter from 'gray-matter';

export { default } from '@pages/Home';

const getData = (files: string[], dir: string) => {
  return files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${dir}/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleDateString('en-US', options);

    const frontmatter = {
      ...data,
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      ...frontmatter,
    };
  });
};

export async function getStaticProps() {
  const posts = getData(
    fs.readdirSync(`${process.cwd()}/src/content/posts`),
    'src/content/posts'
  )
    // @ts-ignore
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const projects = getData(
    fs.readdirSync(`${process.cwd()}/src/content/projects`),
    'src/content/projects'
  )
    // @ts-ignore
    .filter((project) => project.featured);

  return {
    props: {
      posts,
      projects,
    },
  };
}
