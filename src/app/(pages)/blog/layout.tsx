import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Haseeb - Web Developer',
  description: 'Explore articles about web development, programming, and technology. Learn about the latest trends, tutorials, and insights.',
  openGraph: {
    title: 'Blog | Haseeb - Web Developer',
    description: 'Explore articles about web development, programming, and technology.',
    type: 'website',
    images: ['/og-blog.jpg'], // Add your OG image
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Haseeb - Web Developer',
    description: 'Explore articles about web development, programming, and technology.',
    images: ['/og-blog.jpg'], // Add your Twitter card image
  },
  alternates: {
    canonical: 'https://haseebkhan.online/blog'
  }
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 