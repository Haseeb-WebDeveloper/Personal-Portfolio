import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans';
import Script from 'next/script';

// Metadata configuration for SEO and site information
export const metadata: Metadata = {
  // Title configuration
  title: {
    default: 'Haseeb Ahmed Frontend Developer | React, Next.js, WordPress',
    template: '%s | Haseeb Ahmed'
  },
  // Site description
  description: "Haseeb Ahmed is a frontend developer with two years of experience in HTML, CSS, JavaScript, React, and WordPress.",
  // Keywords for SEO
  keywords: ["Haseeb Ahmed", "Frontend Website Developer", "React Developer", "Next.js Developer", "WordPress Developer", "Website Developer in Pakistan", "Haseeb Ahmed Raza Khan", "Haseeb Ahamed Programmer"],
  // Author information
  authors: [{ name: "Haseeb Ahmed", url: "https://haseebkhan.online" }],
  creator: "Haseeb Ahmed",
  publisher: "Haseeb Ahmed",
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
    title: 'Haseeb Ahmed Raza Khan | Frontend Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and WordPress',
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
    title: 'Haseeb Ahmed | Frontend Website Developer',
    description: 'Professional Frontend Developer specializing in React, Next.js, and WordPress',
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
      <head>
        <link rel="icon" href="/haseeb-logo.webp" sizes="any" />
        <Script 
          src="https://api.cronbot.ai/v1/widgets/app/app_ms1c995bmr1f" 
          strategy="afterInteractive"
        />
      </head>
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
