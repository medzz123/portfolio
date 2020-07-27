export interface CardProps {
  title: string;
  description: string;
  github?: string;
  slug: string;
  demo?: string;
  date: string;
  type: 'project' | 'post';
  keywords: string[];
}
