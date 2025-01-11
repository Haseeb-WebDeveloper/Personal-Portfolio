import { MetadataRoute } from 'next'
import { BlogPostModel } from '@/database/models/blog-post.model'
import connectDB from '@/database/connect'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  await connectDB()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'
  
  // Get all published blog posts
  const posts = await BlogPostModel.find({ isPublished: true })
    .select('slug updatedAt priority')
    .lean()

  const blogUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: post.priority ? post.priority / 10 : 0.7,
  }))

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}
