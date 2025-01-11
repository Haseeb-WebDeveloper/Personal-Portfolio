import Image from 'next/image'
import Link from 'next/link'
import { IBlogPost } from '@/database/models/blog-post.model'
import { formatDate } from '@/lib/utils'
import { Badge } from "@/components/ui/badge"
import { Calendar } from 'lucide-react'

interface BlogCardProps {
  post: IBlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="group relative bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10 transition-all duration-300 hover:border-primary/50 hover:shadow-lg">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage || '/placeholder-blog.jpg'}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {post.isFeatured && (
            <Badge className="absolute top-4 left-4">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories?.map(category => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-foreground/70 mb-4 line-clamp-2">
            {post.metaDescription}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.createdAt!)}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
} 