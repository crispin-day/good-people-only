import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Good People Only",
  description: "Artist management, record label, studios and consulting. Toronto.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
