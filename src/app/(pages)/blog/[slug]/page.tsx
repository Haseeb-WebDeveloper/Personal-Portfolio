import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BlogPostModel } from '@/database/models/blog-post.model'
import connectDB from '@/database/connect'
import { generateBlogPostSchema } from './structured-data'
import BlogPostContent from './blog-post-content'
import { IBlogPost } from '@/database/models/blog-post.model'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  await connectDB()
  const post = await BlogPostModel.findOne({ slug: params.slug }).lean() as IBlogPost | null

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.content.slice(0, 160),
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.metaDescription,
      type: 'article',
      publishedTime: post.createdAt?.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      authors: [post.author],
      images: [post.ogImage || post.featuredImage || ''],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.metaDescription,
      images: [post.ogImage || post.featuredImage || ''],
    },
    alternates: {
      canonical: `https://haseebkhan.online/blog/${post.slug}`
    },
    keywords: post.metaKeywords,
    authors: [{ name: post.author }],
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    }
  }
}

export default async function BlogPost({ params }: Props) {
  await connectDB()
  const post = await BlogPostModel.findOne({ slug: params.slug }).lean() as IBlogPost | null
  
  if (!post) {
    notFound()
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://haseebkhan.online'
  const structuredData = generateBlogPostSchema(post, baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPostContent post={post} />
    </>
  )
}
