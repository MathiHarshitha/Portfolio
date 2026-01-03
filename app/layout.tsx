import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Harshitha Mathi | Web Developer",
  description:
    "Harshitha Mathi - Professional Web Developer from India specializing in React, JavaScript, WordPress, and modern web technologies. Portfolio showcasing 700K+ plugin users and production-grade websites.",
  keywords: [
    "Harshitha Mathi",
    "Harshitha Mathi Web Developer",
    "Harshitha Mathi Portfolio",
    "Web Developer India",
    "React Developer",
    "JavaScript Developer",
    "WordPress Developer",
    "Frontend Developer",
    "Harshitha Mathi GitHub",
    "Harshitha Mathi LinkedIn",
    "HoliThemes Web Developer",
    "Harshitha Mathi Projects",
    "Web Development Services India"
  ],
  authors: [{ name: "Harshitha Mathi" }],
  creator: "Harshitha Mathi",
  publisher: "Harshitha Mathi",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_inter.className}`}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Clear console and add developer message
              if (typeof window !== 'undefined') {
                console.log('%cHey! Developer👋 Thanks for checking the code', 'color: #f97316; font-size: 16px; font-weight: bold; padding: 10px; border: 2px solid #f97316; border-radius: 8px; background: linear-gradient(135deg, #fff7ed, #fed7aa);');
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
