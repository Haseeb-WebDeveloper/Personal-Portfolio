'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BarChart3, Users, FileText, Settings, LogOut, Edit, Eye, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { IBlogPost } from '@/database/models/blog-post.model'
import { formatDate } from '@/lib/utils'

interface DashboardStats {
  totalPosts: number
  publishedPosts: number
  draftPosts: number
}

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState<IBlogPost[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
  })

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog')
      const data = await res.json()
      
      if (!res.ok) throw new Error(data.message)
      
      setPosts(data.posts)
      
      // Calculate stats
      const publishedPosts = data.posts.filter((post: IBlogPost) => post.isPublished).length
      setStats({
        totalPosts: data.posts.length,
        publishedPosts,
        draftPosts: data.posts.length - publishedPosts,
      })
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return

    try {
      const res = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to delete post')
      
      fetchPosts() // Refresh posts after deletion
    } catch (error) {
      console.error('Error deleting post:', error)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-foreground/10 border-r border-foreground/10 p-4">
        <div className="flex flex-col h-full">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <nav className="space-y-2">
              <Link href="/admin" className="flex items-center gap-2 p-2 rounded-md bg-primary/10 text-primary">
                <BarChart3 className="w-5 h-5" />
                Overview
              </Link>
              <Link href="/admin/posts" className="flex items-center gap-2 p-2 rounded-md hover:bg-foreground/10">
                <FileText className="w-5 h-5" />
                Posts
              </Link>
              <Link href="/admin/settings" className="flex items-center gap-2 p-2 rounded-md hover:bg-foreground/10">
                <Settings className="w-5 h-5" />
                Settings
              </Link>
            </nav>
          </div>
          <button
            onClick={() => {
              localStorage.removeItem('adminToken')
              router.push('/admin/auth/login')
            }}
            className="mt-auto flex items-center gap-2 p-2 rounded-md hover:bg-foreground/10 text-red-500"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <Button>
              <Link href="/admin/post-editor">Create Post</Link>
            </Button>
          </div>
          <p className="text-foreground/70 mt-2">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 rounded-lg bg-foreground/10 border border-foreground/10">
            <h3 className="text-lg font-semibold">Total Posts</h3>
            <p className="text-3xl font-bold mt-2">{stats.totalPosts}</p>
          </div>
          <div className="p-6 rounded-lg bg-foreground/10 border border-foreground/10">
            <h3 className="text-lg font-semibold">Published Posts</h3>
            <p className="text-3xl font-bold mt-2">{stats.publishedPosts}</p>
          </div>
          <div className="p-6 rounded-lg bg-foreground/10 border border-foreground/10">
            <h3 className="text-lg font-semibold">Draft Posts</h3>
            <p className="text-3xl font-bold mt-2">{stats.draftPosts}</p>
          </div>
        </div>

        {/* Recent Posts */}
        <div className="bg-foreground/10 rounded-lg border border-foreground/10 p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          {loading ? (
            <div className="text-center py-4">Loading...</div>
          ) : posts.length === 0 ? (
            <div className="text-center py-4">No posts found</div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="flex items-center justify-between py-3 border-b border-foreground/10 last:border-0"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{post.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <span>{formatDate(post.createdAt || new Date())}</span>
                        <span>•</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          post.isPublished ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>
                          {post.isPublished ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link href={`/blog/${post.slug}`} target="_blank">
                      <Button size="sm" variant="ghost">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link href={`/admin/post-editor/${post._id}`}>
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDelete(post._id || '')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 