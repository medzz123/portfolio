import fs from 'fs';
import matter from 'gray-matter';

export { default } from '@pages/Projects';

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/src/content/projects`);

  const projects = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`src/content/projects/${filename}`)
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

  return {
    props: {
      projects,
    },
  };
}
