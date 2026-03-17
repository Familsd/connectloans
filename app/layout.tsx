import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Connect Loans - Trusted Loan Consultants for Housing, Property & Business Finance',
  description: 'Connect Loans is your trusted loan consultancy partner for housing loans, property loans, business finance, and working capital. Expert financial guidance with fast processing and transparent service.',
  keywords: 'loan consultancy, housing loans, property loans, business loans, working capital, loan against property, financial services',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo (1).png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo (4).png',
        media: '(prefers-color-scheme: dark)',
      },
      // {
      //   url: '/logo (4).png',
      //   type: 'image/svg+xml',
      // },
    ],
    apple: '/logo (1).png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
