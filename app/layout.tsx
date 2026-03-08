import '../styles/globals.css'
import type { Metadata } from 'next'
import StyledComponentsRegistry from './StyledComponentsRegistry'

export const metadata: Metadata = {
  title: 'Good People Only',
  description: 'Good People Only - Artist Management, Record Label & Consulting',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
