export interface CardProps {
  title: string;
  description: string;
  links?: string;
  slug: string;
  date: string;
  type: 'project' | 'post';
  keywords: string[];
}
