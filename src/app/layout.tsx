import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Haseeb Ahmed | Portfolio",
  description: "Haseeb Ahmed's Portfolio",
  keywords: "Haseeb Ahmed, Portfolio, Web Developer, Designer, Next.js, React, JavaScript",
  authors: [{ name: "Haseeb Ahmed", url: "https://haseebahmed.com" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
        <head>
            <meta name="description" content={metadata.description ?? ""} />
            {/* <meta name="keywords" content={metadata.keywords ?? ""} /> */}
            {/* <meta name="author" content={metadata.authors?.[0]?.name ?? ""} /> */}
            {/* <meta name="viewport" content={metadata.viewport?.toString() ?? ""} /> */}
        </head>
        <body
          className={`${GeistSans.className}  antialiased`}
      >
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
