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

export interface Content extends Frontmatter {
    content: string;
}