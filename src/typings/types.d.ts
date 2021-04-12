export interface Frontmatter {
  title: string;
  description: string;
  date: string;
  links?: string;
  keywords: string;
  image: string;
}

export interface FrontMatterWithSlug extends Frontmatter {
  slug: string;
}

declare global {
  interface Window {
    gtag: any;
  }
}

export interface Content extends Frontmatter {
  content: string;
}
