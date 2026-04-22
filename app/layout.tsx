import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: 'Good People Only',
    template: '%s | Good People Only',
  },
  description: 'Good People Only is a boutique artist management, record label and label services company specializing in DSP strategy, digital marketing and global artist development.',
  keywords: [
    'artist management', 'record label', 'label services', 'DSP strategy',
    'digital marketing', 'global artist development', 'music distribution',
    'Good People Only', 'GPO', 'Toronto', 'music industry',
  ],
  authors: [{ name: 'Good People Only' }],
  creator: 'Good People Only',
  metadataBase: new URL('https://www.goodpeopleonly.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.goodpeopleonly.com',
    siteName: 'Good People Only',
    title: 'Good People Only',
    description: 'Boutique artist management, record label and label services. DSP strategy, digital marketing and global artist development.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Good People Only' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Good People Only',
    description: 'Boutique artist management, record label and label services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Good People Only',
              url: 'https://www.goodpeopleonly.com',
              logo: 'https://www.goodpeopleonly.com/gpo-logo.png',
              description: 'Boutique artist management, record label and label services company specializing in DSP strategy, digital marketing and global artist development.',
              address: { '@type': 'PostalAddress', addressLocality: 'Toronto', addressRegion: 'ON', addressCountry: 'CA' },
              sameAs: ['https://www.instagram.com/goodpeopleonly/'],
              contactPoint: { '@type': 'ContactPoint', email: 'contact@goodpeopleonly.com', contactType: 'customer service' },
            }),
          }}
        />
        {children}
      </body>
    </html>
  )
}
