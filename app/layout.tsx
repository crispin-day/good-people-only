import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Good People Only",
  description: "Good People Only is a boutique artist management, record label and label services company specializing in DSP strategy, digital marketing and global artist development.",
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
