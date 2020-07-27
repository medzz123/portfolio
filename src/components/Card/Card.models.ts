export interface CardProps {
  title: string;
  description: string;
  links?: string;
  slug: string;
  date: string;
  type: 'project' | 'blog';
  keywords: string[];
}
