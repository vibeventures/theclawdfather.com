declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export const frontmatter: {
    title: string
    description: string
    date: string
    author: string
    locale: string
    slug: string
    keywords: string[]
  }

  const MDXComponent: ComponentType
  export default MDXComponent
}
