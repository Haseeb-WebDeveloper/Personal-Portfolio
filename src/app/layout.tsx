import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/global/navbar";




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
          className={"antialiased"}
      >
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
        >          
          <Navbar />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
