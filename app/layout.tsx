import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Good People Only",
  description: "Artist management, record label, studios and consulting. Toronto.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const formatDetection = {
  telephone: false,
  email: false,
  address: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
