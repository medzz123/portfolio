export interface Frontmatter {
    title: string;
    description: string;
    date: string;
    github?: string;
    keywords: string;
    image: string;
    demo?: string;
}

export interface FrontMatterWithSlug extends Frontmatter {
    slug: string;
}

export interface Content extends Frontmatter {
    content: string;
}