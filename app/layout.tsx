import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: 'Good People Only',
    template: '%s | Good People Only',
  },
  description: 'Good People Only is a boutique artist management and record label company based in Toronto, Canada. We represent and develop exceptional music artists.',
  metadataBase: new URL('https://goodpeopleonly.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    siteName: 'Good People Only',
    type: 'website',
    locale: 'en_CA',
    url: 'https://goodpeopleonly.com',
    title: 'Good People Only',
    description: 'Good People Only is a boutique artist management and record label company based in Toronto, Canada.',
    images: [{ url: '/og-default.jpg', width: 1200, height: 630, alt: 'Good People Only' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good People Only',
    description: 'Boutique artist management and record label based in Toronto, Canada.',
    images: ['/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts to eliminate FOUT */}
        <link
          rel="preload"
          href="/fonts/Montserrat-Bold-700.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Medium-500.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Montserrat-Regular-400.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
