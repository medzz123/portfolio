import { FrontMatterWithSlug } from '@typings/types';

export interface HomeProps {
  blog: FrontMatterWithSlug[];
  projects: FrontMatterWithSlug[];
}
