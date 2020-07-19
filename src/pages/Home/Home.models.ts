import { FrontMatterWithSlug } from '@typings/types';

export interface HomeProps {
  posts: FrontMatterWithSlug[];
  projects: FrontMatterWithSlug[];
}
