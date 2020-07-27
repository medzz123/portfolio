import { FrontMatterWithSlug } from '@typings/types';

export interface TemplateProps {
  content: FrontMatterWithSlug[];
  type: 'project' | 'post';
}
