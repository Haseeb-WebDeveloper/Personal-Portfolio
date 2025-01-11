'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { BarChart3, Users, FileText, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

interface DashboardCard {
  title: string
  value: number
  icon: React.ReactNode
  color: string
}

export default function AdminDashboard() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalPosts: 0,
    totalUsers: 0,
    totalViews: 0,
    totalComments: 0,
  })

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('adminToken')
    if (!token) {
      router.push('/admin/auth/login')
      return
    }

    // Fetch dashboard stats
    const fetchStats = async () => {
      try {
        setStats({
          totalPosts: 12,
          totalUsers: 150,
          totalViews: 1500,
          totalComments: 45,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [router])

  const dashboardCards: DashboardCard[] = [
    {
      title: 'Total Posts',
      value: stats.totalPosts,
      icon: <FileText className="w-6 h-6" />,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Users',
      value: stats.totalUsers,
      icon: <Users className="w-6 h-6" />,
      color: 'bg-green-500',
    },
    {
      title: 'Total Views',
      value: stats.totalViews,
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'bg-purple-500',
    },
  ]

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin/auth/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-foreground/10 border-r border-foreground/10">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
        </div>
        <nav className="mt-6">
          <Link
            href="/admin/dashboard"
            className="flex items-center px-6 py-3 text-foreground hover:bg-foreground/5"
          >
            <BarChart3 className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/admin/posts"
            className="flex items-center px-6 py-3 text-foreground hover:bg-foreground/5"
          >
            <FileText className="w-5 h-5 mr-3" />
            Posts
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center px-6 py-3 text-foreground hover:bg-foreground/5"
          >
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-6 py-3 text-foreground hover:bg-foreground/5"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-foreground/70 mt-2">Welcome to your admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-foreground/10 border border-foreground/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground/70">{card.title}</p>
                  <p className="text-2xl font-bold mt-1">{card.value}</p>
                </div>
                <div className={`p-3 rounded-full ${card.color}/10`}>
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="bg-foreground/10 rounded-lg border border-foreground/10 p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-foreground/10 last:border-0"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium">New post published</p>
                    <p className="text-xs text-foreground/70">2 hours ago</p>
                  </div>
                </div>
                <button className="text-sm text-primary hover:text-primary/80">
                  View
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 