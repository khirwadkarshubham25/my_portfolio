import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Backend Engineer & Cybersecurity Analyst',
  description: 'Portfolio of a Backend Engineer with 5+ years of experience and Cybersecurity expertise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}