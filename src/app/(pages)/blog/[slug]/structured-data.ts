import { IBlogPost } from '@/database/models/blog-post.model'

export function generateBlogPostSchema(post: IBlogPost, baseUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: post.featuredImage || post.ogImage,
    datePublished: post.createdAt?.toISOString(),
    dateModified: post.updatedAt?.toISOString(),
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${baseUrl}/about`
    },
    publisher: {
      '@type': 'Organization',
      name: 'Haseeb',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`
    },
    keywords: post.metaKeywords?.join(', '),
    articleBody: post.content.replace(/<[^>]*>/g, ''), // Strip HTML tags
    inLanguage: post.language
  }
} 