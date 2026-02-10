// Article metadata type
export interface ArticleMeta {
  title: string
  description: string
  date: string
  author: string
  locale: string
  slug: string
  keywords: string[]
}

// Article with content
export interface Article {
  meta: ArticleMeta
  content: React.ComponentType
}

// Import all articles at build time
const articleModules = import.meta.glob<{
  default: React.ComponentType
  frontmatter: ArticleMeta
}>('/content/articles/*.mdx', { eager: true })

// Get all articles
export function getAllArticles(): ArticleMeta[] {
  return Object.values(articleModules)
    .map((mod) => mod.frontmatter)
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Get articles by locale
export function getArticlesByLocale(locale: string): ArticleMeta[] {
  return getAllArticles().filter((article) => article.locale === locale)
}

// Get single article by slug
export function getArticleBySlug(slug: string): Article | null {
  const entry = Object.entries(articleModules).find(([path]) =>
    path.includes(slug)
  )

  if (!entry) return null

  const [, mod] = entry
  return {
    meta: mod.frontmatter,
    content: mod.default,
  }
}

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  return getAllArticles().map((article) => article.slug)
}
