import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans';


// Metadata configuration for SEO and site information
export const metadata: Metadata = {
  // Title configuration
  title: {
    default: 'Haseeb Ahmed Full Stack Developer | Love Building SaaS Products and Web Apps',
    template: '%s | Haseeb Ahmed'
  },
  // Site description
  description: "I am Haseeb Ahmed, a Full Stack Developer from Pakistan. I love building SaaS products and Web Apps",
  // Keywords for SEO
  keywords: ["Haseeb Ahmed", "Full Stack Developer", "React Developer", "Next.js Developer", "WordPress Developer", "Website Developer in Pakistan", "Haseeb Ahmed Raza Khan", "Haseeb Ahamed Programmer", "Haseeb Ahmed Raza Khan", "Haseeb Ahmed Web Developer", "Haseeb Ahmed Web Developer in Pakistan", "SaaS Products", "Web Apps", "how is haseeb ahmed"],
  // Author information
  authors: [{ name: "Haseeb Ahmed Raza Khan", url: "https://haseebkhan.online" }],
  creator: "Haseeb Ahmed Raza Khan",
  publisher: "Haseeb Ahmed Raza Khan",
  // Disable automatic detection of contact information
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Base URL for the site
  metadataBase: new URL('https://haseebkhan.online'),
  // Alternate language versions
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ur-PK': '/ur-PK',
      'hi-IN': '/hi-IN',
    },
  },
  // Open Graph metadata for social media sharing
  openGraph: {
    title: 'Haseeb Ahmed Raza Khan | Full Stack Developer',
    description: 'I am Haseeb Ahmed, a Full Stack Developer from Pakistan. I love building SaaS products and Web Apps',
    url: 'https://haseebkhan.online',
    siteName: 'Haseeb Ahmed Portfolio',
    images: [
      {
        url: 'haseeb.webp',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  // Robot crawling instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Haseeb Ahmed | Full Stack Developer',
    description: 'I am Haseeb Ahmed, a Full Stack Developer from Pakistan. I love building SaaS products and Web Apps',
    images: ['haseeb.webp'],

  },
  // Site verification for search engines
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
};

// Separate viewport export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
