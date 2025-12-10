import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

// Blog post type
export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  readTime: string
  category: string
  author: string
  language: 'en' | 'hi'
  alternateLanguage?: 'en' | 'hi'
  alternateSlug?: string
  tags?: string[]
}

// Blog post metadata (without content)
export interface BlogPostMetadata {
  slug: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  author: string
  language: 'en' | 'hi'
  alternateLanguage?: 'en' | 'hi'
  alternateSlug?: string
  tags?: string[]
}

const contentDirectory = path.join(process.cwd(), 'content', 'blog')

/**
 * Get all blog posts for a specific language
 */
export function getAllPosts(language: 'en' | 'hi'): BlogPostMetadata[] {
  const langDirectory = path.join(contentDirectory, language)
  
  // Check if directory exists
  if (!fs.existsSync(langDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(langDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(langDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readTimeResult = readingTime(content)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        image: data.image,
        date: data.date,
        readTime: readTimeResult.text,
        category: data.category,
        author: data.author || 'Vikas Singh',
        language,
        alternateLanguage: data.alternateLanguage,
        alternateSlug: data.alternateSlug,
        tags: data.tags || [],
      }
    })

  // Sort posts by date (newest first)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1))
}

/**
 * Get a single blog post by slug and language
 */
export function getPostBySlug(slug: string, language: 'en' | 'hi'): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, language, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTimeResult = readingTime(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      image: data.image,
      date: data.date,
      readTime: readTimeResult.text,
      category: data.category,
      author: data.author || 'Vikas Singh',
      language,
      alternateLanguage: data.alternateLanguage,
      alternateSlug: data.alternateSlug,
      tags: data.tags || [],
    }
  } catch (error) {
    return null
  }
}

/**
 * Get all slugs for a specific language (for static generation)
 */
export function getAllSlugs(language: 'en' | 'hi'): string[] {
  const langDirectory = path.join(contentDirectory, language)
  
  // Check if directory exists
  if (!fs.existsSync(langDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(langDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
