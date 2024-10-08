import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';



export const metadata: Metadata = {
  title: "Haseeb Ahmed | Portfolio",
  description: "Haseeb Ahmed's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
