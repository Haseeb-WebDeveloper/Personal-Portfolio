'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IBlogPost } from '@/database/models/blog-post.model'
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Share2, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BlogPostContent({ post }: { post: IBlogPost }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.metaDescription,
          url: window.location.href,
        })
      } catch (err) {
        console.error('Error sharing:', err)
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (err) {
        console.error('Error copying to clipboard:', err)
      }
    }
  }

  return (
    <article className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-4 overflow-hidden text-wrap break-words prose prose-lg dark:prose-invert">
        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link href="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4 mr-2" />
            {copied ? 'Copied!' : 'Share'}
          </Button>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          {post.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author}</span>
          </div>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative aspect-video rounded-sm overflow-hidden">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        )}

        <Separator/>

        {/* Main Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-8">
            <Separator className="mb-4" />
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 